import { createSignal } from 'solid-js'

// Shared UI state: the search dialog and the image viewer can be opened from anywhere.
export const [searchOpen, setSearchOpen] = createSignal(false)

export interface ViewerImage {
  src: string
  srcset?: string
  alt: string
  title?: string
  caption?: string
}
export const [viewer, setViewer] = createSignal<{ items: ViewerImage[]; index: number } | null>(null)
export const openViewer = (items: ViewerImage[], index = 0) => setViewer({ items, index })
