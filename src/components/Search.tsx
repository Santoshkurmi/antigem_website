import { createMemo, createSignal, For, onMount, Show } from 'solid-js'
import { Portal } from 'solid-js/web'
import { useNavigate } from '@solidjs/router'
import SearchIcon from 'lucide-solid/icons/search'
import FileText from 'lucide-solid/icons/file-text'
import Hash from 'lucide-solid/icons/hash'
import { pages, sections } from 'virtual:docs'
import { setSearchOpen } from '~/lib/ui'

interface Hit {
  href: string
  title: string
  detail: string
  section: string
  kind: 'page' | 'heading'
  score: number
}

// Every page title, description and heading, searched in the browser. No server, no big index.
const entries = pages.flatMap((p) => {
  const section = sections.find((s) => s.slug === p.section)?.title ?? ''
  return [
    { href: `/docs/${p.slug}`, title: p.title, detail: p.description, section, kind: 'page' as const, hay: `${p.title} ${p.description}`.toLowerCase() },
    ...p.headings.map((h) => ({
      href: `/docs/${p.slug}#${h.id}`,
      title: h.text,
      detail: p.title,
      section,
      kind: 'heading' as const,
      hay: h.text.toLowerCase(),
    })),
  ]
})

function mark(text: string, q: string) {
  const i = q ? text.toLowerCase().indexOf(q) : -1
  if (i < 0) return text
  return (
    <>
      {text.slice(0, i)}
      <mark>{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  )
}

export default function Search() {
  const [q, setQ] = createSignal('')
  const [active, setActive] = createSignal(0)
  const navigate = useNavigate()
  let input!: HTMLInputElement
  let list!: HTMLDivElement

  onMount(() => input.focus())

  const results = createMemo<Hit[]>(() => {
    const query = q().trim().toLowerCase()
    if (!query) return entries.filter((e) => e.kind === 'page').slice(0, 8).map((e) => ({ ...e, score: 0 }))
    const words = query.split(/\s+/)
    const hits: Hit[] = []
    for (const e of entries) {
      if (!words.every((w) => e.hay.includes(w))) continue
      const t = e.title.toLowerCase()
      let score = t === query ? 100 : t.startsWith(query) ? 60 : t.includes(query) ? 40 : 10
      if (e.kind === 'page') score += 15
      hits.push({ ...e, score })
    }
    return hits.sort((a, b) => b.score - a.score).slice(0, 24)
  })

  const close = () => setSearchOpen(false)
  const open = (hit: Hit | undefined) => {
    if (!hit) return
    close()
    navigate(hit.href)
  }
  const move = (d: number) => {
    const n = results().length
    if (!n) return
    setActive((active() + d + n) % n)
    list.querySelector<HTMLElement>(`[data-i="${active()}"]`)?.scrollIntoView({ block: 'nearest' })
  }
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') (e.preventDefault(), move(1))
    else if (e.key === 'ArrowUp') (e.preventDefault(), move(-1))
    else if (e.key === 'Enter') (e.preventDefault(), open(results()[active()]))
    else if (e.key === 'Escape') close()
  }

  return (
    <Portal>
      <div class="search-overlay" onClick={(e) => e.target === e.currentTarget && close()}>
        <div class="search-box" role="dialog" aria-modal="true" aria-label="Search the docs">
          <div class="search-input">
            <SearchIcon />
            <input
              ref={input}
              value={q()}
              placeholder="Search the docs"
              aria-label="Search the docs"
              autocomplete="off"
              spellcheck={false}
              onInput={(e) => (setQ(e.currentTarget.value), setActive(0))}
              onKeyDown={onKey}
            />
            <kbd onClick={close} style={{ cursor: 'pointer' }}>Esc</kbd>
          </div>
          <div class="search-results" ref={list}>
            <Show when={results().length} fallback={<div class="search-empty">Nothing found for “{q()}”.</div>}>
              <Show when={!q().trim()}>
                <div class="search-group">Pages</div>
              </Show>
              <For each={results()}>
                {(hit, i) => (
                  <a
                    class="search-item"
                    classList={{ active: active() === i() }}
                    data-i={i()}
                    href={import.meta.env.BASE_URL + hit.href.slice(1)}
                    onMouseMove={() => setActive(i())}
                    onClick={(e) => (e.preventDefault(), open(hit))}
                  >
                    {hit.kind === 'page' ? <FileText /> : <Hash />}
                    <div>
                      <div class="t">{mark(hit.title, q().trim().toLowerCase())}</div>
                      <div class="d">{hit.kind === 'page' ? hit.detail || hit.section : `${hit.section} › ${hit.detail}`}</div>
                    </div>
                  </a>
                )}
              </For>
            </Show>
          </div>
          <div class="search-foot">
            <span><kbd>↑</kbd> <kbd>↓</kbd> to move</span>
            <span><kbd>Enter</kbd> to open</span>
            <span><kbd>Esc</kbd> to close</span>
          </div>
        </div>
      </div>
    </Portal>
  )
}
