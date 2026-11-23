// Building blocks for docs pages written as Solid components (.tsx files in src/content/docs).
// They produce the same HTML as the Markdown syntax, so both kinds of page look the same.
//
//   import { Steps, Step, Shot, Callout, Gallery, Cards, Card, Code } from '~/components/docs'
import { For, Show, type JSX, type ParentProps } from 'solid-js'
import { A } from '@solidjs/router'
import { shotSet, shotSrc, SHOT_H, SHOT_W } from '~/lib/screens'
import { asset } from '~/lib/site'

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')

/** A screenshot. `src` is a screenshot name from public/screens (like "agent_picker") or a path in public/. */
export function Shot(p: { src: string; alt?: string; caption?: string; frame?: boolean }) {
  const isScreen = () => !p.src.includes('/') && !p.src.includes('.')
  return (
    <figure class={`fig shot${p.frame ? ' framed' : ''}`} data-zoom>
      <Show
        when={isScreen()}
        fallback={<img src={asset(p.src)} alt={p.alt ?? p.caption ?? ''} loading="lazy" decoding="async" />}
      >
        <img
          src={shotSrc(p.src)}
          srcset={shotSet(p.src)}
          sizes="(max-width: 600px) 64vw, 280px"
          width={SHOT_W}
          height={SHOT_H}
          alt={p.alt ?? p.caption ?? ''}
          loading="lazy"
          decoding="async"
        />
      </Show>
      <Show when={p.caption ?? p.alt}>
        <figcaption>{p.caption ?? p.alt}</figcaption>
      </Show>
    </figure>
  )
}

/** Numbered steps: put <Step> elements inside. */
export const Steps = (p: ParentProps) => <ol class="steps">{p.children}</ol>

/** One step. `shot` shows a screenshot next to it (below it on phones). */
export function Step(p: ParentProps<{ title: string; shot?: string; frame?: boolean; id?: string }>) {
  return (
    <li class={p.shot ? 'step has-shot' : 'step'}>
      <div class="step-text">
        <h3 id={p.id ?? slugify(p.title)}>{p.title}</h3>
        {p.children}
      </div>
      <Show when={p.shot}>
        <div class="step-shots">
          <Shot src={p.shot!} alt={p.title} frame={p.frame} />
        </div>
      </Show>
    </li>
  )
}

const LABELS = { note: 'Note', tip: 'Tip', important: 'Important', warning: 'Warning', caution: 'Caution' }

/** A colored note box. */
export function Callout(p: ParentProps<{ type?: keyof typeof LABELS; title?: string }>) {
  const type = () => p.type ?? 'note'
  return (
    <div class={`callout callout-${type()}`}>
      <div class="callout-title">{p.title ?? LABELS[type()]}</div>
      <div class="callout-body">{p.children}</div>
    </div>
  )
}

/** A swipeable row of screenshots. */
export const Gallery = (p: { shots: { src: string; caption?: string }[] }) => (
  <div class="gallery">
    <For each={p.shots}>{(s) => <Shot src={s.src} caption={s.caption} />}</For>
  </div>
)

export const Cards = (p: ParentProps) => <div class="cards">{p.children}</div>

/** A link card. Links starting with / stay inside the site. */
export function Card(p: ParentProps<{ href: string; title: string }>) {
  const inner = (
    <>
      <strong>{p.title}</strong>
      <span>{p.children}</span>
    </>
  )
  return p.href.startsWith('/') ? (
    <A class="card" href={p.href}>
      {inner}
    </A>
  ) : (
    <a class="card" href={p.href} target="_blank" rel="noopener">
      {inner}
    </a>
  )
}

/** A code block with a copy button (no syntax colors: use a Markdown page for highlighted code). */
export const Code = (p: { code: string; title?: string; children?: JSX.Element }) => (
  <div class="code">
    <div class="code-head">
      <span>{p.title ?? ''}</span>
      <button type="button" class="copy" aria-label="Copy code">
        Copy
      </button>
    </div>
    <pre>
      <code>{p.code.trim()}</code>
    </pre>
  </div>
)
