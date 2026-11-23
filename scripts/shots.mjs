// Lists the screenshots the docs ask for that don't exist yet, and the screenshots no page uses.
//
//   pnpm shots          a readable list in the terminal
//   pnpm shots --md     a Markdown checklist (paste it into an issue)
//
// A docs page asks for a screenshot with ![caption](/screens/<name>.webp "phone") (or <Shot src="<name>" /> in a
// .tsx page). It exists once public/screens/480/<name>.webp is there: put <name>.png in media/screens/ and run
// `pnpm images`.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const docs = join(root, 'src/content/docs')
const media = join(root, 'media/screens')
const publicDir = join(root, 'public')
const asMarkdown = process.argv.includes('--md')

const files = []
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.')) continue
    const full = join(dir, name)
    if (statSync(full).isDirectory()) walk(full)
    else if (/\.(md|tsx)$/.test(name)) files.push(full)
  }
}
walk(docs)
files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

const exists = (href) => {
  const screen = /^\/screens\/([\w.-]+)\.\w+$/.exec(href)
  if (screen && existsSync(join(publicDir, 'screens/480', `${screen[1]}.webp`))) return true
  return existsSync(join(publicDir, href))
}

const used = new Set()
const missing = [] // { page, name, caption, style }
// Names starting with example_ are on purpose (the Markdown guide shows what a placeholder looks like).
const isExample = (name) => name.startsWith('example_')
for (const file of files) {
  // Images inside code blocks and `code` are examples, not screenshots the page shows.
  const src = readFileSync(file, 'utf8')
    .replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[ \t]*$/gm, '')
    .replace(/`[^`\n]*`/g, '')
  const page = relative(docs, file)
  // Markdown: ![caption](/path "style")
  for (const m of src.matchAll(/!\[([^\]]*)\]\((\/[^\s)]+)(?:\s+"([^"]*)")?\)/g)) {
    const [, caption, href, style = ''] = m
    const name = /\/([\w.-]+?)(?:\.\w+)?$/.exec(href)?.[1] ?? href
    used.add(name)
    if (!exists(href) && !isExample(name)) missing.push({ page, name, caption, style })
  }
  // Solid pages: <Shot src="name" ... caption="..." />
  for (const m of src.matchAll(/<Shot\b[^>]*\bsrc="([\w.-]+)"[^>]*>/g)) {
    const name = m[1].replace(/\.\w+$/, '')
    used.add(name)
    const caption = /\b(?:caption|alt)="([^"]*)"/.exec(m[0])?.[1] ?? ''
    if (!isExample(name) && !existsSync(join(publicDir, 'screens/480', `${name}.webp`))) missing.push({ page, name, caption, style: 'Shot' })
  }
}

const unused = existsSync(media)
  ? readdirSync(media)
      .filter((f) => /\.(webp|png|jpe?g)$/i.test(f))
      .map((f) => f.replace(/\.\w+$/, ''))
      .filter((n) => !used.has(n))
  : []

const byPage = new Map()
for (const m of missing) byPage.set(m.page, [...(byPage.get(m.page) ?? []), m])

if (asMarkdown) {
  console.log(`## Screenshots needed (${missing.length})\n`)
  console.log('Save each one as `media/screens/<name>.png` and run `pnpm images`.\n')
  for (const [page, list] of byPage) {
    console.log(`### ${page}\n`)
    for (const m of list) console.log(`- [ ] \`${m.name}\`: ${m.caption || '(no caption)'}${m.style ? ` _(${m.style})_` : ''}`)
    console.log('')
  }
  if (unused.length) console.log(`## In media/screens but not used by any page (${unused.length})\n\n${unused.map((n) => `- \`${n}\``).join('\n')}`)
} else {
  if (!missing.length) console.log('Every screenshot the docs ask for exists.')
  else {
    console.log(`${missing.length} screenshot${missing.length === 1 ? '' : 's'} needed (save as media/screens/<name>.png, then pnpm images):\n`)
    for (const [page, list] of byPage) {
      console.log(page)
      for (const m of list) console.log(`  ${m.name.padEnd(30)} ${m.caption}${m.style ? `  [${m.style}]` : ''}`)
    }
  }
  if (unused.length) console.log(`\nIn media/screens but not used by any page: ${unused.join(', ')}`)
}
