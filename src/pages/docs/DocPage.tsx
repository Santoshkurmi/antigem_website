import { createEffect, createMemo, createResource, createSignal, For, on, onCleanup, Show, type Component } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { A, useLocation, useParams } from '@solidjs/router'
import ArrowLeft from 'lucide-solid/icons/arrow-left'
import ArrowRight from 'lucide-solid/icons/arrow-right'
import Pencil from 'lucide-solid/icons/pencil'
import { pages, sections } from 'virtual:docs'
import { site } from '~/lib/site'
import { openViewer } from '~/lib/ui'

interface TocItem {
  id: string
  text: string
  depth: number
}

export default function DocPage() {
  const params = useParams()
  const location = useLocation()
  const page = createMemo(() => pages.find((p) => p.slug === (params.slug ?? '').replace(/\/$/, '')))
  const index = () => pages.findIndex((p) => p === page())
  const prev = () => pages[index() - 1]
  const next = () => pages[index() + 1]
  const section = () => sections.find((s) => s.slug === page()?.section)
  const [mod] = createResource(page, (p) => p.load())
  const [toc, setToc] = createSignal<TocItem[]>([])
  const [activeId, setActiveId] = createSignal('')
  let article: HTMLElement | undefined

  createEffect(() => {
    const p = page()
    document.title = p ? `${p.title} · AntiGem docs` : 'Not found · AntiGem docs'
  })

  // Once the page is on screen: build the outline from its headings, and jump to #hash if there is one.
  createEffect(
    on(mod, (m) => {
      if (!m || !article) return
      requestAnimationFrame(() => {
        if (!article) return
        const hs = [...article.querySelectorAll<HTMLElement>('h2[id], h3[id]')]
        setToc(hs.map((h) => ({ id: h.id, text: (h.textContent ?? '').replace(/^#/, '').trim(), depth: h.tagName === 'H2' ? 2 : 3 })))
        const hash = decodeURIComponent(location.hash.slice(1))
        if (hash) document.getElementById(hash)?.scrollIntoView()
        spy()
      })
    }),
  )

  // Highlight the section being read in the outline.
  let raf = 0
  const spy = () => {
    raf = 0
    const items = toc()
    let current = items[0]?.id ?? ''
    for (const t of items) {
      const el = document.getElementById(t.id)
      if (el && el.getBoundingClientRect().top < 140) current = t.id
      else break
    }
    setActiveId(current)
  }
  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(spy)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onCleanup(() => {
    window.removeEventListener('scroll', onScroll)
    cancelAnimationFrame(raf)
  })

  // Copy buttons and tap-to-zoom screenshots inside Markdown pages.
  const onClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const copy = target.closest<HTMLButtonElement>('button.copy')
    if (copy) {
      const code = copy.closest('.code')?.querySelector('pre')?.innerText ?? ''
      navigator.clipboard?.writeText(code.replace(/\n$/, '')).then(() => {
        copy.textContent = 'Copied'
        copy.classList.add('done')
        setTimeout(() => {
          copy.textContent = 'Copy'
          copy.classList.remove('done')
        }, 1600)
      })
      return
    }
    const img = target.closest('figure[data-zoom]')?.querySelector('img')
    if (img && article) {
      const all = [...article.querySelectorAll<HTMLImageElement>('figure[data-zoom] img')]
      openViewer(
        all.map((i) => ({
          src: i.srcset ? i.srcset.split(', ').at(-1)!.split(' ')[0] : i.src,
          alt: i.alt,
          caption: i.alt,
        })),
        all.indexOf(img),
      )
    }
  }

  return (
    <Show
      when={page()}
      fallback={
        <div class="doc-missing">
          <h1>Page not found</h1>
          <p class="lead">There is no docs page at this address. Pick one from the menu, or search.</p>
        </div>
      }
    >
      {(p) => (
        <div class="doc-wrap">
          <div class="doc">
            <header class="doc-head">
              <Show when={section()?.title}>
                <span class="eyebrow">{section()!.title}</span>
              </Show>
              <h1>
                {p().title}
                <Show when={p().draft}>
                  <span class="draft-badge">Draft</span>
                </Show>
              </h1>
              <Show when={p().description}>
                <p class="lead">{p().description}</p>
              </Show>
            </header>

            <Show when={toc().length > 1}>
              <details class="toc-mobile">
                <summary>On this page</summary>
                <Toc items={toc()} active={activeId()} />
              </details>
            </Show>

            <Show when={mod()} fallback={<div class="doc-loading" aria-busy="true" />}>
              {(m) =>
                typeof m().default === 'string' ? (
                  <article class="prose" ref={article} innerHTML={m().default as string} onClick={onClick} />
                ) : (
                  <article class="prose" ref={article} onClick={onClick}>
                    <Dynamic component={m().default as Component} />
                  </article>
                )
              }
            </Show>

            <footer class="doc-foot">
              <a class="edit-link" href={site.editDocs + p().path} target="_blank" rel="noopener">
                <Pencil /> Edit this page on GitHub
              </a>
              <nav class="pager" aria-label="Previous and next page">
                <Show when={prev()} fallback={<span />}>
                  {(pp) => (
                    <A class="pager-link" href={`/docs/${pp().slug}`}>
                      <span>
                        <ArrowLeft /> Previous
                      </span>
                      <strong>{pp().label}</strong>
                    </A>
                  )}
                </Show>
                <Show when={next()}>
                  {(np) => (
                    <A class="pager-link next" href={`/docs/${np().slug}`}>
                      <span>
                        Next <ArrowRight />
                      </span>
                      <strong>{np().label}</strong>
                    </A>
                  )}
                </Show>
              </nav>
            </footer>
          </div>

          <aside class="docs-toc" aria-label="On this page">
            <Show when={toc().length > 1}>
              <div class="docs-toc-title">On this page</div>
              <Toc items={toc()} active={activeId()} />
            </Show>
          </aside>
        </div>
      )}
    </Show>
  )
}

const Toc = (p: { items: TocItem[]; active: string }) => (
  <ul class="toc">
    <For each={p.items}>
      {(t) => (
        <li classList={{ sub: t.depth === 3 }}>
          <a href={`#${t.id}`} classList={{ active: p.active === t.id }}>
            {t.text}
          </a>
        </li>
      )}
    </For>
  </ul>
)
