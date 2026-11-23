import { createEffect, onCleanup, Show } from 'solid-js'
import { Portal } from 'solid-js/web'
import X from 'lucide-solid/icons/x'
import ChevronLeft from 'lucide-solid/icons/chevron-left'
import ChevronRight from 'lucide-solid/icons/chevron-right'
import { setViewer, viewer } from '~/lib/ui'

// Full-screen image viewer: tap a screenshot to open. Swipe, arrow keys or the buttons to move; Esc to close.
export default function Viewer() {
  const v = () => viewer()!
  const item = () => v().items[v().index]
  const count = () => v().items.length
  const go = (d: number) => setViewer({ ...v(), index: (v().index + d + count()) % count() })
  const close = () => setViewer(null)

  createEffect(() => {
    if (!viewer()) return
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', key)
    onCleanup(() => {
      document.documentElement.style.overflow = prev
      document.removeEventListener('keydown', key)
    })
  })

  let startX = 0
  let startY = 0
  const onTouchStart = (e: TouchEvent) => {
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
  }
  const onTouchEnd = (e: TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startX
    const dy = e.changedTouches[0].clientY - startY
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) && count() > 1) go(dx < 0 ? 1 : -1)
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) close()
  }

  return (
    <Show when={viewer()}>
      <Portal>
        <div class="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div class="lightbox-top">
            <span>{count() > 1 ? `${v().index + 1} / ${count()}` : ''}</span>
            <button class="icon-btn" aria-label="Close" onClick={close}>
              <X />
            </button>
          </div>
          <div class="lightbox-stage" onClick={(e) => e.target === e.currentTarget && close()}>
            <Show when={item()} keyed>
              {(it) => <img src={it.src} srcset={it.srcset} sizes="(max-width: 760px) 92vw, 480px" alt={it.alt} />}
            </Show>
            <Show when={count() > 1}>
              <button class="lightbox-nav prev" aria-label="Previous" onClick={() => go(-1)}>
                <ChevronLeft />
              </button>
              <button class="lightbox-nav next" aria-label="Next" onClick={() => go(1)}>
                <ChevronRight />
              </button>
            </Show>
          </div>
          <div class="lightbox-caption">
            <Show when={item().title}>
              <strong>{item().title}</strong>
            </Show>
            <Show when={item().caption}>
              <span>{item().caption}</span>
            </Show>
          </div>
        </div>
      </Portal>
    </Show>
  )
}
