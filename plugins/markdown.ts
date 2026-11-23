// Markdown -> HTML for the docs, done once at build time (no Markdown code ships to the browser).
//
// On top of normal Markdown (GitHub flavoured: tables, task lists, ~~strike~~) it understands:
//
//   > [!NOTE] / [!TIP] / [!IMPORTANT] / [!WARNING] / [!CAUTION]   callout boxes (optional title after the tag)
//   ![Caption](/screens/chat.webp "phone")    a screenshot on its own line: phone sized, tap to zoom
//   ![Caption](/screens/raw.png "frame")      the same, inside a drawn phone frame (for raw screenshots)
//   ```bash title="Terminal"                  highlighted code with a title and a copy button
//   :::steps ... :::                          numbered steps, each `### Heading` starts a step
//   :::gallery ... :::                        a swipeable row of screenshots
//   :::cards ... :::                          a list of links shown as cards
//   :::details Question ... :::               a fold-out section
//
// Links to other docs can be written as files (`./claude-code.md`) or as URLs (`/docs/agents/claude-code`).
//
// Screenshots that don't exist yet are placeholders: in the production build they are left out completely (no
// figure, no empty space; a step or gallery without pictures renders as if it never had one). In dev they show as
// a dashed "Screenshot needed" box with the file name and caption; the docs page has a dev-only toggle to hide them.
import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { Marked, type Token, type Tokens, type TokenizerAndRendererExtension } from 'marked'
import GithubSlugger from 'github-slugger'
import sharp from 'sharp'
import { createHighlighter, type Highlighter } from 'shiki'

export interface Heading {
  depth: number
  text: string
  id: string
}

export interface RenderContext {
  /** Absolute path of the Markdown file. */
  file: string
  /** Vite base, like `/antigem/`. */
  base: string
  /** Absolute path of `public/`. */
  publicDir: string
  /** Absolute file path -> doc slug, for `.md` links. */
  slugOf: (absFile: string) => string | undefined
  /** Dev server (placeholders for missing screenshots) or production build (missing screenshots left out). */
  dev: boolean
  /** Called for a link to a docs page that doesn't exist. */
  onBrokenLink?: (href: string) => void
}

const CAMERA =
  '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>'

const LANGS = [
  'bash', 'shell', 'json', 'jsonc', 'yaml', 'toml', 'ini', 'ts', 'tsx', 'js', 'jsx', 'kotlin', 'go', 'python',
  'java', 'rust', 'c', 'cpp', 'html', 'css', 'markdown', 'diff', 'dockerfile', 'sql', 'xml', 'proto',
]
let highlighter: Promise<Highlighter> | undefined
function getHighlighter() {
  highlighter ??= createHighlighter({ themes: ['github-dark-default', 'github-light-default'], langs: LANGS })
  return highlighter
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const plain = (tokens: Token[] | undefined): string =>
  (tokens ?? []).map((t: any) => (t.tokens ? plain(t.tokens) : t.type === 'codespan' ? t.text : t.text ?? '')).join('')

const CALLOUTS: Record<string, { label: string; icon: string }> = {
  note: { label: 'Note', icon: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>' },
  tip: { label: 'Tip', icon: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"/>' },
  important: { label: 'Important', icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v4M12 15h.01"/>' },
  warning: { label: 'Warning', icon: '<path d="m21.7 18-8-14a2 2 0 0 0-3.5 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3"/><path d="M12 9v4M12 17h.01"/>' },
  caution: { label: 'Caution', icon: '<path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/>' },
}
const svg = (inner: string) =>
  `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`

/** A paragraph that is only one image: shown as a figure. */
function soleImage(t: Token): Tokens.Image | undefined {
  if (t.type !== 'paragraph') return
  const parts = (t as Tokens.Paragraph).tokens.filter((x) => !(x.type === 'text' && !x.raw.trim()) && x.type !== 'br')
  return parts.length === 1 && parts[0].type === 'image' ? (parts[0] as Tokens.Image) : undefined
}
const isShot = (t: Token) => {
  const img = soleImage(t)
  return !!img && (img.title === 'phone' || img.title === 'frame')
}

const sizeCache = new Map<string, Promise<{ width?: number; height?: number }>>()

export async function renderMarkdown(src: string, ctx: RenderContext): Promise<{ html: string; headings: Heading[] }> {
  const hl = await getHighlighter()
  const { tokens, headings, md } = lex(src)

  // Image sizes (so the page doesn't jump while screenshots load) and screenshot size variants.
  type ImageInfo = { src: string; srcset?: string; width?: number; height?: number; missing?: boolean }
  const images = new Map<string, ImageInfo>()
  const jobs: Promise<void>[] = []
  md.walkTokens(tokens, (t) => {
    if (t.type !== 'image' || images.has(t.href)) return
    const href = t.href
    const info: ImageInfo = { src: href }
    images.set(href, info)
    if (!href.startsWith('/')) return
    let file = join(ctx.publicDir, href)
    const screen = /^\/screens\/([\w.-]+)\.\w+$/.exec(href)
    if (screen && existsSync(join(ctx.publicDir, 'screens/480', `${screen[1]}.webp`))) {
      const p = (w: number) => `${ctx.base}screens/${w}/${screen[1]}.webp`
      info.src = p(480)
      info.srcset = `${p(480)} 480w, ${p(960)} 960w`
      file = join(ctx.publicDir, 'screens/480', `${screen[1]}.webp`)
    } else {
      info.src = ctx.base + href.slice(1)
    }
    if (!existsSync(file)) {
      info.missing = true
      return
    }
    if (!sizeCache.has(file)) sizeCache.set(file, sharp(file).metadata().then((m) => ({ width: m.width, height: m.height })).catch(() => ({})))
    jobs.push(sizeCache.get(file)!.then((s) => void Object.assign(info, s)))
  })
  await Promise.all(jobs)

  const fileDir = dirname(ctx.file)
  const linkHref = (href: string) => {
    if (/^(https?:|mailto:|tel:|#)/.test(href)) return href
    const [path, hash] = href.split('#')
    if (/\.(md|tsx)$/.test(path)) {
      const slug = ctx.slugOf(resolve(fileDir, path))
      if (slug === undefined) {
        console.warn(`[docs] ${ctx.file}: no doc for link "${href}"`)
        ctx.onBrokenLink?.(href)
      }
      return `${ctx.base}docs/${slug ?? ''}${hash ? `#${hash}` : ''}`
    }
    if (href.startsWith('/')) return ctx.base + href.slice(1)
    return href
  }

  const isMissing = (img: Tokens.Image | undefined) => !!img && !!images.get(img.href)?.missing
  const shotName = (href: string) => /\/([\w.-]+?)(?:\.\w+)?$/.exec(href)?.[1] ?? href

  /** A missing screenshot: a placeholder box in dev, nothing at all in the production build. */
  const placeholder = (img: Tokens.Image, kind: string) => {
    if (!ctx.dev) return ''
    const cap = img.text ? `<span class="shot-ph-cap">${esc(img.text)}</span>` : ''
    return (
      `<figure class="fig ${kind} shot-ph" data-shot="${esc(shotName(img.href))}">` +
      `<div class="shot-ph-box">${CAMERA}<strong>Screenshot needed</strong><code>${esc(shotName(img.href))}</code>${cap}</div>` +
      `</figure>`
    )
  }

  const figure = (img: Tokens.Image) => {
    const info = images.get(img.href) ?? { src: img.href }
    const kind = img.title === 'phone' ? 'shot' : img.title === 'frame' ? 'shot framed' : 'wide'
    if (info.missing) return placeholder(img, kind)
    const sizes = kind === 'wide' ? '(max-width: 760px) 100vw, 760px' : '(max-width: 600px) 70vw, 300px'
    const attrs = [
      `src="${esc(info.src)}"`,
      info.srcset ? `srcset="${esc(info.srcset)}" sizes="${sizes}"` : '',
      `alt="${esc(img.text)}"`,
      info.width ? `width="${info.width}" height="${info.height}"` : '',
      'loading="lazy" decoding="async"',
    ].filter(Boolean)
    const cap = img.text ? `<figcaption>${esc(img.text)}</figcaption>` : ''
    return `<figure class="fig ${kind}" data-zoom><img ${attrs.join(' ')}>${cap}</figure>`
  }

  // The :::container tokenizer is in lex(); this draws each kind.
  const container: TokenizerAndRendererExtension = {
    name: 'container',
    renderer(token: any) {
      const p = this.parser
      const kids: Token[] = token.tokens
      switch (token.kind) {
        case 'steps': {
          const steps: { head: Token; body: Token[] }[] = []
          const intro: Token[] = []
          for (const t of kids) {
            if (t.type === 'heading' && (t as Tokens.Heading).depth <= 3) steps.push({ head: t, body: [] })
            else (steps.at(-1)?.body ?? intro).push(t)
          }
          const items = steps.map(({ head, body }) => {
            // In the production build a missing screenshot isn't there at all, so the step lays out as text only.
            const shots = body.filter(isShot).filter((t) => ctx.dev || !isMissing(soleImage(t)))
            const text = body.filter((t) => !isShot(t))
            // Only placeholders: with placeholders hidden (dev toggle) the step goes back to the text-only layout.
            const phOnly = shots.length > 0 && shots.every((t) => isMissing(soleImage(t)))
            const aside = shots.length ? `<div class="step-shots">${shots.map((t) => figure(soleImage(t)!)).join('')}</div>` : ''
            const cls = `step${shots.length ? ' has-shot' : ''}${phOnly ? ' ph-only' : ''}`
            return `<li class="${cls}"><div class="step-text">${p.parse([head])}${p.parse(text)}</div>${aside}</li>`
          })
          return `${p.parse(intro)}<ol class="steps">${items.join('')}</ol>`
        }
        case 'gallery': {
          const figs: string[] = []
          let real = 0
          md.walkTokens(kids, (t) => {
            if (t.type !== 'image') return
            if (!isMissing(t as Tokens.Image)) real++
            const fig = figure({ ...(t as Tokens.Image), title: 'phone' })
            if (fig) figs.push(fig)
          })
          // No pictures left (production with all missing): no gallery at all.
          if (!figs.length) return ''
          return `<div class="gallery${real ? '' : ' ph-only'}">${figs.join('')}</div>`
        }
        case 'cards': {
          const list = kids.find((t) => t.type === 'list') as Tokens.List | undefined
          const cards = (list?.items ?? []).map((item) => {
            const inline = (item.tokens[0] as any)?.tokens ?? []
            const link = inline.find((t: Token) => t.type === 'link') as Tokens.Link | undefined
            const rest = inline.filter((t: Token) => t !== link)
            const desc = p.parseInline(rest).replace(/^\s*[—–:-]\s*/, '')
            if (!link) return `<div class="card">${desc}</div>`
            const href = linkHref(link.href)
            const ext = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : ''
            return `<a class="card" href="${esc(href)}"${ext}><strong>${p.parseInline(link.tokens)}</strong><span>${desc}</span></a>`
          })
          return `<div class="cards">${cards.join('')}</div>`
        }
        case 'details':
          return `<details class="details"><summary>${esc(token.info || 'Details')}</summary><div class="details-body">${p.parse(kids)}</div></details>`
        default:
          return `<div class="container-${esc(token.kind)}">${p.parse(kids)}</div>`
      }
    },
  }
  md.use({ extensions: [container] })

  md.use({
    renderer: {
      heading(t) {
        const id = (t as any).id as string
        const inner = this.parser.parseInline(t.tokens)
        if (t.depth === 1) return `<h1>${inner}</h1>`
        return `<h${t.depth} id="${id}"><a class="anchor" href="#${id}" aria-label="Link to this section">#</a>${inner}</h${t.depth}>`
      },
      code(t) {
        const info = (t.lang ?? '').trim()
        const lang = (info.match(/^[^\s{]+/)?.[0] ?? 'text').toLowerCase()
        const title = /title="([^"]*)"/.exec(info)?.[1]
        const known = hl.getLoadedLanguages().includes(lang)
        const html = hl.codeToHtml(t.text, {
          lang: known ? lang : 'text',
          themes: { dark: 'github-dark-default', light: 'github-light-default' },
          defaultColor: false,
        })
        const label = title ?? (lang === 'text' ? '' : lang)
        return `<div class="code"><div class="code-head"><span>${esc(label)}</span><button type="button" class="copy" aria-label="Copy code">Copy</button></div>${html}</div>`
      },
      paragraph(t) {
        const img = soleImage(t)
        if (img) return figure(img)
        return `<p>${this.parser.parseInline(t.tokens)}</p>\n`
      },
      image(t) {
        const info = images.get(t.href) ?? { src: t.href }
        if (info.missing) return ctx.dev ? `<span class="shot-ph-inline">📷 ${esc(shotName(t.href))}</span>` : ''
        return `<img src="${esc(info.src)}" alt="${esc(t.text)}" loading="lazy" decoding="async">`
      },
      link(t) {
        const href = linkHref(t.href)
        const ext = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : ''
        const title = t.title ? ` title="${esc(t.title)}"` : ''
        return `<a href="${esc(href)}"${title}${ext}>${this.parser.parseInline(t.tokens)}</a>`
      },
      blockquote(t) {
        const first = t.tokens[0] as Tokens.Paragraph | undefined
        const m = first?.type === 'paragraph' ? /^\[!(\w+)\][ \t]*([^\n]*)\n?/.exec(first.raw) : null
        const kind = m?.[1].toLowerCase()
        if (!m || !kind || !CALLOUTS[kind]) return `<blockquote>${this.parser.parse(t.tokens)}</blockquote>`
        const rest = first!.raw.slice(m[0].length)
        const body = (rest.trim() ? md.parse(rest) : '') + this.parser.parse(t.tokens.slice(1))
        const { label, icon } = CALLOUTS[kind]
        return `<div class="callout callout-${kind}"><div class="callout-title">${svg(icon)}${esc(m[2] || label)}</div><div class="callout-body">${body}</div></div>`
      },
      table(t) {
        const head = t.header.map((c, i) => `<th${t.align[i] ? ` align="${t.align[i]}"` : ''}>${this.parser.parseInline(c.tokens)}</th>`).join('')
        const rows = t.rows
          .map((r) => `<tr>${r.map((c, i) => `<td${t.align[i] ? ` align="${t.align[i]}"` : ''}>${this.parser.parseInline(c.tokens)}</td>`).join('')}</tr>`)
          .join('')
        return `<div class="table"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`
      },
    },
  })

  return { html: md.parser(tokens) as string, headings }
}

/** Tokens with heading ids filled in, and the h2/h3 list (used for the search index and the page outline). */
export function lex(src: string) {
  const md = new Marked({ gfm: true })
  // Same container syntax as above, so headings inside :::steps are found too.
  md.use({
    extensions: [
      {
        name: 'container',
        level: 'block',
        start: (s) => s.match(/^:::[a-z]/m)?.index,
        tokenizer(s) {
          const m = /^:::([a-z]+)[ \t]*([^\n]*)\n([\s\S]*?)\n?^:::[ \t]*(?:\n+|$)/m.exec(s)
          if (!m || m.index !== 0) return
          const token: any = { type: 'container', raw: m[0], kind: m[1], info: m[2].trim(), tokens: [] }
          this.lexer.blockTokens(m[3], token.tokens)
          return token
        },
        childTokens: ['tokens'],
      },
    ],
  })
  const tokens = md.lexer(src)
  const slugger = new GithubSlugger()
  const headings: Heading[] = []
  md.walkTokens(tokens, (t) => {
    if (t.type !== 'heading') return
    const text = plain(t.tokens).trim()
    const id = slugger.slug(text)
    ;(t as any).id = id
    if (t.depth === 2 || t.depth === 3) headings.push({ depth: t.depth, text, id })
  })
  return { tokens, headings, md }
}
