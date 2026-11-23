import { onCleanup } from 'solid-js'

// Fade-in on scroll: `<div ref={reveal}>`. One shared IntersectionObserver, and only opacity/transform
// change, so it stays smooth on slow phones. Off when the user asks for reduced motion.
let io: IntersectionObserver | undefined
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function reveal(el: HTMLElement) {
  if (reduced() || !('IntersectionObserver' in window)) return
  io ??= new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        e.target.classList.add('in')
        io!.unobserve(e.target)
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.05 },
  )
  el.classList.add('reveal')
  io.observe(el)
  onCleanup(() => io?.unobserve(el))
}

/** Sets the tab title for a page. */
export function useTitle(title: string) {
  document.title = title
}
