import { lazy, onCleanup, onMount, Show, Suspense, type ParentProps } from 'solid-js'
import Header from './components/Header'
import Footer from './components/Footer'
import Viewer from './components/Viewer'
import { searchOpen, setSearchOpen } from './lib/ui'

// Loaded the first time someone opens search, so the home page doesn't pay for the docs index.
const Search = lazy(() => import('./components/Search'))

export default function App(props: ParentProps) {
  onMount(() => {
    const key = (e: KeyboardEvent) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target as HTMLElement).tagName) || (e.target as HTMLElement).isContentEditable
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearchOpen(!searchOpen())
      } else if (e.key === '/' && !typing) {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', key)
    onCleanup(() => document.removeEventListener('keydown', key))
  })

  return (
    <div class="app">
      <a class="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Suspense fallback={<div class="route-loading" />}>{props.children}</Suspense>
      </main>
      <Footer />
      <Viewer />
      <Show when={searchOpen()}>
        <Suspense>
          <Search />
        </Suspense>
      </Show>
    </div>
  )
}
