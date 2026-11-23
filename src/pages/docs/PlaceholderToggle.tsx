// Dev only (DocPage loads it only under `pnpm dev`; it isn't in the production build).
//
// Missing screenshots show as "Screenshot needed" boxes in dev; the production build leaves them out. This pill
// hides the boxes, so a page looks exactly like it will on the site. The choice is remembered across pages.
import { createEffect, createSignal } from 'solid-js'

const KEY = 'docs-shot-placeholders'
const [hidden, setHidden] = createSignal(localStorage.getItem(KEY) === 'hidden')
document.documentElement.classList.toggle('shot-ph-hidden', hidden())

export default function PlaceholderToggle(p: { count: number }) {
  createEffect(() => {
    document.documentElement.classList.toggle('shot-ph-hidden', hidden())
    localStorage.setItem(KEY, hidden() ? 'hidden' : 'shown')
  })
  return (
    <button
      type="button"
      class="ph-toggle"
      classList={{ off: hidden(), none: p.count === 0 }}
      onClick={() => setHidden(!hidden())}
      title="Dev only. Missing screenshots are never shown on the real site."
    >
      <span class="dot" />
      {p.count} screenshot placeholder{p.count === 1 ? '' : 's'} · {hidden() ? 'hidden' : 'shown'}
    </button>
  )
}
