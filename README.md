# AntiGem website

The website of [AntiGem](https://github.com/santoshkurmi/antigem): home page, showcase, how it works, and the docs. Built with [SolidJS](https://solidjs.com) and Vite.

```bash
pnpm install
pnpm dev        # http://localhost:5173/antigem/
pnpm build      # static site in dist/
pnpm preview    # serve dist/ to check the build
```

## Where things are

```
.
  index.html                  page shell, meta tags, theme script (runs before the first paint)
  vite.config.ts              base path, extra routes for the build
  plugins/
    docs.ts                   finds the docs pages, makes the sidebar + search index, writes one HTML file per route
    markdown.ts               Markdown -> HTML at build time (callouts, steps, screenshots, code colors)
  media/screens/              original screenshots (big)
  public/screens/480, 960/    small copies made by `pnpm images` (these are what the site loads)
  src/
    pages/                    Home, Showcase, HowItWorks, NotFound, docs/ (layout, page)
    components/               Header, Footer, ThemePicker, Search, Viewer, docs/ (blocks for .tsx pages)
    content/docs/             THE DOCS: one file per page
    lib/site.ts               links (GitHub, Discord, releases…) used everywhere
    lib/screens.ts            the screenshot list used by the home and showcase pages
    lib/theme.ts              the themes list
    styles/                   themes.css (colors), base.css, home.css, pages.css, docs.css
```

## Writing docs

Every `.md` file in `src/content/docs` is a page; every folder is a sidebar group. The number in front of a name sets the order and is left out of the URL:

```
src/content/docs/01-getting-started/02-installation.md  ->  /docs/getting-started/installation
```

Start each file with front matter:

```md
---
title: Install AntiGem
description: One line. Shown under the title, in search and in link previews.
sidebar: Installation   # optional, shorter sidebar name
draft: true             # optional, shows a "Draft" badge
---
```

Put a value in quotes if it contains `: `.

On top of normal Markdown you get callouts (`> [!TIP]`), numbered steps (`:::steps`), screenshots (`![Caption](/screens/name.webp "phone")`), galleries, cards, fold-outs and highlighted code with a copy button. The full guide, with examples, is a docs page: run `pnpm dev` and open **Docs → Writing these docs → Markdown guide** (`src/content/docs/07-writing-docs/01-markdown-guide.md`).

Need something Markdown can't do? Write the page as a `.tsx` Solid component instead. See `07-writing-docs/02-solid-pages.tsx`: front matter goes in a `/* --- … --- */` comment at the top, and `~/components/docs` has `Steps`, `Step`, `Shot`, `Callout`, `Gallery`, `Cards`, `Card` and `Code`.

Most pages in `01-getting-started` to `06-help` are drafts (`draft: true`) with placeholder text: replace them with real content, then remove `draft: true`.

## Screenshots

1. Put the screenshot in `media/screens/` (PNG, JPG or WebP).
2. Run `pnpm images`. It writes `public/screens/480/<name>.webp` and `public/screens/960/<name>.webp`.
3. Use it as `/screens/<name>.webp` in Markdown, or `<Shot src="<name>" />` in a `.tsx` page. The browser picks the size it needs.

Use `"phone"` for screenshots that already have a phone frame (like the current ones) and `"frame"` for plain screen captures.

## Themes

Six themes plus "Match device": Midnight, Daylight, AMOLED, Nebula, Aurora and Sand. To add one, add a block to `src/styles/themes.css`, an entry to `src/lib/theme.ts`, and its name to the small script in `index.html`.

## The version badge

The "New vX is out" badge on the home page reads the app's `version.json` from the antigem repo (`site.versionJson` in `src/lib/site.ts`) in the browser, so it shows each new release without rebuilding this site.

## Fast on phones

- Only the home page is in the first download (about 34 KB of gzipped JS). Every other page and every docs page loads when opened.
- Markdown and code highlighting are done at build time: no Markdown or highlighter code runs in the browser.
- Screenshots come in two sizes, with set width and height so nothing jumps while they load.
- Animations only move or fade things (no layout work), the frosted header is desktop-only, sections below the fold skip rendering until they come near, and "reduce motion" is respected.

## Deploying

The site is built for `https://santoshkurmi.github.io/antigem/` (base path `/antigem/`). `pnpm build` writes a static site to `dist/`, with an `index.html` per page (so shared links open the right page and show the right preview) and a `404.html`.

- **GitHub Pages from this repo:** publish `dist/` with a GitHub Actions workflow (Settings → Pages → Source: GitHub Actions). A repo named `antigem-website` is served at `/antigem-website/`, so build with `SITE_BASE=/antigem-website/` and set `VITE_SITE_URL` to match (or use a custom domain).
- **Custom domain:** build with `SITE_BASE=/ pnpm build` and set `VITE_SITE_URL` in `.env` to the new address.

`public/google64cb7fc0d9f55b2e.html` is the Google Search Console verification file from the old site, kept so the verification still works.
