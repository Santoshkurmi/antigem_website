// Makes the small, phone-friendly copies of the screenshots the site shows.
//
//   media/screens/<name>.(webp|png|jpg)  ->  public/screens/480/<name>.webp
//                                            public/screens/960/<name>.webp
//   media/hero.webp                      ->  public/og.webp (1200 px wide, link previews)
//
// Put a new screenshot in media/screens/ and run `pnpm images`. Only new or changed files are redone.
import { readdir, mkdir, stat } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = fileURLToPath(new URL('..', import.meta.url))
const src = join(root, 'media/screens')
const out = join(root, 'public/screens')
const widths = [480, 960]

async function newer(input, output) {
  try {
    return (await stat(input)).mtimeMs > (await stat(output)).mtimeMs
  } catch {
    return true
  }
}

let made = 0
for (const w of widths) await mkdir(join(out, String(w)), { recursive: true })
for (const file of await readdir(src)) {
  if (!/\.(webp|png|jpe?g)$/i.test(file)) continue
  const { name } = parse(file)
  for (const w of widths) {
    const target = join(out, String(w), `${name}.webp`)
    if (!(await newer(join(src, file), target))) continue
    await sharp(join(src, file)).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78, effort: 6 }).toFile(target)
    made++
  }
}
const hero = join(root, 'media/hero.webp')
const og = join(root, 'public/og.webp')
if (await newer(hero, og)) {
  await sharp(hero).resize({ width: 1200 }).webp({ quality: 80 }).toFile(og)
  made++
}
console.log(made ? `Made ${made} image(s).` : 'Images are up to date.')
