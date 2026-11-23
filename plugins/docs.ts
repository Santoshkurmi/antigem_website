// Vite plugin for the docs.
//
// * Finds every page in the docs folder: `.md` files (Markdown) and `.tsx` files (Solid components).
//   Folders are the sidebar groups; a number in front of a file or folder name sets its order and is
//   left out of the URL:  01-getting-started/02-installation.md  ->  /docs/getting-started/installation
// * `import { pages, sections } from 'virtual:docs'` gives the sidebar, search index and a loader per page.
// * Compiles `.md` files to HTML at build time.
// * On build, writes an index.html for every route (with its own title and description), so links shared
//   from GitHub Pages open the right page directly and show a proper preview.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve, sep } from 'node:path'
import matter from 'gray-matter'
import type { Plugin, ResolvedConfig } from 'vite'
import { lex, renderMarkdown } from './markdown.ts'

interface Page {
  file: string
  rel: string
  slug: string
  kind: 'md' | 'tsx'
  title: string
  label: string
  description: string
  draft: boolean
  section: string
  headings: { depth: number; text: string; id: string }[]
}
interface Section {
  slug: string
  title: string
}

const VIRTUAL = 'virtual:docs'
const RESOLVED = '\0' + VIRTUAL
const stripOrder = (s: string) => s.replace(/^\d+[-_. ]+/, '')
const pretty = (s: string) => {
  const t = stripOrder(s).replace(/[-_]+/g, ' ').trim()
  return t.charAt(0).toUpperCase() + t.slice(1)
}

/** Front matter of a .tsx page: a block comment at the very top holding YAML between --- lines. */
function tsxFrontMatter(src: string): Record<string, any> {
  const m = /^\s*\/\*+\s*\n?\s*---\s*\n([\s\S]*?)\n\s*---\s*\*+\//.exec(src)
  return m ? matter(`---\n${m[1]}\n---\n`).data : {}
}

export default function docs(opts: { dir: string; routes?: { path: string; title: string; description?: string }[] }): Plugin {
  let config: ResolvedConfig
  let root = ''
  let pages: Page[] = []
  let sections: Section[] = []

  const scan = () => {
    const files: string[] = []
    const walk = (dir: string) => {
      for (const name of readdirSync(dir)) {
        if (name.startsWith('_') || name.startsWith('.')) continue
        const full = join(dir, name)
        if (statSync(full).isDirectory()) walk(full)
        else if (/\.(md|tsx)$/.test(name)) files.push(full)
      }
    }
    if (existsSync(root)) walk(root)
    files.sort((a, b) => relative(root, a).localeCompare(relative(root, b), undefined, { numeric: true }))

    const seen = new Map<string, Section>()
    pages = files.map((file) => {
      const rel = relative(root, file).split(sep).join('/')
      const parts = rel.replace(/\.(md|tsx)$/, '').split('/')
      const slugParts = parts.map(stripOrder)
      if (slugParts.at(-1) === 'index') slugParts.pop()
      const slug = slugParts.join('/')
      const folder = parts.length > 1 ? parts[0] : ''
      const sectionSlug = folder ? stripOrder(folder) : ''
      if (!seen.has(sectionSlug)) {
        const metaFile = join(root, folder, '_meta.json')
        const meta = folder && existsSync(metaFile) ? JSON.parse(readFileSync(metaFile, 'utf8')) : {}
        seen.set(sectionSlug, { slug: sectionSlug, title: meta.title ?? (folder ? pretty(folder) : '') })
      }
      const src = readFileSync(file, 'utf8')
      const kind = file.endsWith('.md') ? 'md' : 'tsx'
      let data: Record<string, any>
      let headings: Page['headings'] = []
      try {
        if (kind === 'md') {
          const fm = matter(src)
          data = fm.data
          headings = lex(fm.content).headings
          if (!data.title) data.title = /^#\s+(.+)$/m.exec(fm.content)?.[1]
        } else {
          data = tsxFrontMatter(src)
        }
      } catch (e) {
        // Keep the site running; the page shows with a title made from its file name.
        console.error(`\n[docs] Couldn't read the front matter of ${rel}: ${(e as Error).message.split('\n')[0]}\n       Tip: put a value in quotes if it contains ": ".\n`)
        data = {}
      }
      const title = String(data.title ?? pretty(parts.at(-1)!))
      return {
        file,
        rel,
        slug,
        kind,
        title,
        label: String(data.sidebar ?? title),
        description: String(data.description ?? ''),
        draft: !!data.draft,
        section: sectionSlug,
        headings,
      }
    })
    sections = [...seen.values()]
  }

  const routeList = () => [
    ...(opts.routes ?? []),
    ...pages.map((p) => ({ path: `docs/${p.slug}`, title: `${p.title} · AntiGem docs`, description: p.description })),
  ]

  return {
    name: 'antigem-docs',
    enforce: 'pre',
    configResolved(c) {
      config = c
      root = resolve(c.root, opts.dir)
      scan()
    },
    resolveId(id) {
      if (id === VIRTUAL) return RESOLVED
    },
    load(id) {
      if (id !== RESOLVED) return
      const list = pages.map((p) => {
        const { file, rel, headings, ...meta } = p
        return `{...${JSON.stringify({ ...meta, path: rel, headings })}, load: () => import(${JSON.stringify(file)})}`
      })
      return `export const sections = ${JSON.stringify(sections)};\nexport const pages = [\n${list.join(',\n')}\n];\n`
    },
    async transform(code, id) {
      if (!id.endsWith('.md') || !id.startsWith(root)) return
      let content = code
      try {
        content = matter(code).content
      } catch (e) {
        this.error(`Bad front matter in ${relative(root, id)}: ${(e as Error).message.split('\n')[0]} (put the value in quotes if it contains ": ")`)
      }
      const { html } = await renderMarkdown(content, {
        file: id,
        base: config.base,
        publicDir: config.publicDir,
        slugOf: (abs) => pages.find((p) => p.file === abs)?.slug,
      })
      return { code: `export default ${JSON.stringify(html)};`, map: null }
    },
    configureServer(server) {
      const refresh = (file: string) => {
        if (!file.startsWith(root)) return
        scan()
        const mod = server.moduleGraph.getModuleById(RESOLVED)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload' })
      }
      server.watcher.on('add', refresh)
      server.watcher.on('unlink', refresh)
    },
    handleHotUpdate(ctx) {
      // A page's title, description or headings may have changed: rebuild the index too.
      if (!ctx.file.startsWith(root) || !/\.(md|tsx|json)$/.test(ctx.file)) return
      scan()
      const mod = ctx.server.moduleGraph.getModuleById(RESOLVED)
      if (mod) ctx.server.moduleGraph.invalidateModule(mod)
      ctx.server.ws.send({ type: 'full-reload' })
      return []
    },
    generateBundle: {
      order: 'post',
      handler(_, bundle) {
        const index = bundle['index.html']
        if (!index || index.type !== 'asset') return
        const html = String(index.source)
        const attr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
        const site = config.env.VITE_SITE_URL as string | undefined
        for (const r of routeList()) {
          let out = html.replace(/<title>[^<]*<\/title>/, `<title>${attr(r.title)}</title>`)
          if (r.description) {
            out = out
              .replace(/(<meta name="description" content=")[^"]*"/, `$1${attr(r.description)}"`)
              .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${attr(r.description)}"`)
          }
          out = out.replace(/(<meta property="og:title" content=")[^"]*"/, `$1${attr(r.title)}"`)
          if (site) {
            const url = `${site.replace(/\/$/, '')}/${r.path}/`
            out = out
              .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
              .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
          }
          this.emitFile({ type: 'asset', fileName: `${r.path}/index.html`, source: out })
        }
        // GitHub Pages serves 404.html for unknown paths: the app shows its own "not found" page.
        this.emitFile({ type: 'asset', fileName: '404.html', source: html })
      },
    },
  }
}
