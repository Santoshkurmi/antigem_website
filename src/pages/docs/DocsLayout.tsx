import { createEffect, createMemo, createSignal, For, onCleanup, Show, type ParentProps } from 'solid-js'
import { A, useLocation } from '@solidjs/router'
import PanelLeft from 'lucide-solid/icons/panel-left'
import X from 'lucide-solid/icons/x'
import ChevronRight from 'lucide-solid/icons/chevron-right'
import Search from 'lucide-solid/icons/search'
import { pages, sections } from 'virtual:docs'
import { stripBase } from '~/lib/site'
import { setSearchOpen } from '~/lib/ui'
import '@fontsource-variable/jetbrains-mono'
import '~/styles/docs.css'

export const currentSlug = (pathname: string) => stripBase(pathname).replace(/^\/docs\/?/, '').replace(/\/$/, '')

export default function DocsLayout(props: ParentProps) {
  const location = useLocation()
  const [drawer, setDrawer] = createSignal(false)
  const slug = () => currentSlug(location.pathname)
  const page = createMemo(() => pages.find((p) => p.slug === slug()))
  const section = () => sections.find((s) => s.slug === page()?.section)

  createEffect(() => {
    location.pathname
    setDrawer(false)
  })
  createEffect(() => {
    if (!drawer()) return
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setDrawer(false)
    document.addEventListener('keydown', esc)
    onCleanup(() => {
      document.documentElement.style.overflow = prev
      document.removeEventListener('keydown', esc)
    })
  })

  return (
    <div class="docs container">
      <div class="docs-bar">
        <button class="docs-bar-btn" onClick={() => setDrawer(true)} aria-label="Open the docs menu">
          <PanelLeft />
          Menu
        </button>
        <div class="docs-bar-crumb">
          <Show when={section()?.title}>
            <span>{section()!.title}</span>
            <ChevronRight />
          </Show>
          <strong>{page()?.label ?? 'Docs'}</strong>
        </div>
      </div>

      <div class="docs-scrim" classList={{ open: drawer() }} onClick={() => setDrawer(false)} />
      <aside class="docs-side" classList={{ open: drawer() }} aria-label="Docs">
        <div class="docs-side-head">
          <strong>Documentation</strong>
          <button class="icon-btn" onClick={() => setDrawer(false)} aria-label="Close the docs menu">
            <X />
          </button>
        </div>
        <button class="docs-search" onClick={() => setSearchOpen(true)}>
          <Search /> Search
          <kbd>/</kbd>
        </button>
        <nav>
          <For each={sections}>
            {(s) => (
              <div class="docs-group">
                <Show when={s.title}>
                  <div class="docs-group-title">{s.title}</div>
                </Show>
                <ul>
                  <For each={pages.filter((p) => p.section === s.slug)}>
                    {(p) => (
                      <li>
                        <A href={`/docs/${p.slug}`} end onPointerEnter={() => p.load()} onTouchStart={() => p.load()}>
                          {p.label}
                          <Show when={p.draft}>
                            <span class="draft-dot" title="Draft" />
                          </Show>
                        </A>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            )}
          </For>
        </nav>
      </aside>

      <div class="docs-main">{props.children}</div>
    </div>
  )
}
