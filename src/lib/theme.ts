import { createSignal } from 'solid-js'

// The site's color themes. Their colors are in styles/themes.css; the inline script in index.html picks
// the saved one before the page paints. Add a theme in all three places.
export interface Theme {
  id: string
  name: string
  scheme: 'dark' | 'light'
  /** Swatch colors for the picker: background, accent, second accent. */
  swatch: [string, string, string]
}

export const themes: Theme[] = [
  { id: 'midnight', name: 'Midnight', scheme: 'dark', swatch: ['#07080c', '#5ee7ff', '#c79bff'] },
  { id: 'daylight', name: 'Daylight', scheme: 'light', swatch: ['#f7f8fb', '#0a84c6', '#7c4dff'] },
  { id: 'amoled', name: 'AMOLED', scheme: 'dark', swatch: ['#000000', '#5ee7ff', '#ffb86b'] },
  { id: 'nebula', name: 'Nebula', scheme: 'dark', swatch: ['#0d0818', '#c79bff', '#ff8fd8'] },
  { id: 'aurora', name: 'Aurora', scheme: 'dark', swatch: ['#05110f', '#4ff0b4', '#5ee7ff'] },
  { id: 'sand', name: 'Sand', scheme: 'light', swatch: ['#f6f1e8', '#c2410c', '#0f766e'] },
]

const KEY = 'ag-theme'
const read = () => {
  try {
    return localStorage.getItem(KEY) || 'system'
  } catch {
    return 'system'
  }
}

const [choice, setChoiceSignal] = createSignal(read())
export { choice as themeChoice }

const media = window.matchMedia('(prefers-color-scheme: dark)')
const resolve = (c: string) => themes.find((t) => t.id === c) ?? themes.find((t) => t.id === (media.matches ? 'midnight' : 'daylight'))!

function apply() {
  const t = resolve(choice())
  const el = document.documentElement
  el.dataset.theme = t.id
  el.dataset.scheme = t.scheme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', t.swatch[0])
}

export function setTheme(id: string) {
  try {
    localStorage.setItem(KEY, id)
  } catch {}
  // Skip transitions while every color changes at once (cheaper, and no half-switched frame).
  const el = document.documentElement
  el.classList.add('no-transitions')
  setChoiceSignal(id)
  apply()
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('no-transitions')))
}

media.addEventListener?.('change', () => choice() === 'system' && apply())
apply()
