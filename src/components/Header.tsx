import { createSignal, createEffect, For, onCleanup, onMount } from 'solid-js'
import { A, useLocation } from '@solidjs/router'
import Menu from 'lucide-solid/icons/menu'
import X from 'lucide-solid/icons/x'
import Search from 'lucide-solid/icons/search'
import Download from 'lucide-solid/icons/download'
import ChevronRight from 'lucide-solid/icons/chevron-right'
import { GitHub, Discord, Logo } from './Brand'
import ThemePicker from './ThemePicker'
import { site } from '~/lib/site'
import { setSearchOpen } from '~/lib/ui'

const links = [
  { href: '/showcase', label: 'Showcase' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/docs', label: 'Docs' },
]

export default function Header() {
  const [scrolled, setScrolled] = createSignal(false)
  const [menu, setMenu] = createSignal(false)
  const location = useLocation()
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform)

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    onCleanup(() => window.removeEventListener('scroll', onScroll))
  })

  // Close the menu when the page changes, and stop the page behind it from scrolling while it is open.
  createEffect(() => {
    location.pathname
    setMenu(false)
  })
  createEffect(() => {
    document.documentElement.style.overflow = menu() ? 'hidden' : ''
  })


  return (
    <>
      <header class="header" classList={{ scrolled: scrolled() || menu() }}>
        <div class="container header-inner">
          <A href="/" class="brand" aria-label="AntiGem home">
            <Logo />
            <span>AntiGem</span>
          </A>
          <nav class="nav" aria-label="Main">
            <For each={links}>
              {(l) => (
                <A href={l.href}>
                  {l.label}
                </A>
              )}
            </For>
          </nav>
          <button class="search-btn" onClick={() => setSearchOpen(true)}>
            <Search />
            Search docs
            <kbd>{isMac ? '⌘K' : 'Ctrl K'}</kbd>
          </button>
          <button class="icon-btn search-icon" aria-label="Search docs" onClick={() => setSearchOpen(true)}>
            <Search />
          </button>
          <ThemePicker />
          <a class="icon-btn" href={site.repo} target="_blank" rel="noopener" aria-label="AntiGem on GitHub">
            <GitHub />
          </a>
          <a class="btn btn-primary btn-sm download" href={site.releases} target="_blank" rel="noopener">
            <Download />
            Download
          </a>
          <button class="icon-btn menu-toggle" aria-label={menu() ? 'Close menu' : 'Open menu'} aria-expanded={menu()} onClick={() => setMenu(!menu())}>
            {menu() ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <div class="mobile-menu" classList={{ open: menu() }} aria-hidden={!menu()}>
        <nav aria-label="Mobile">
          <A href="/">
            Home <ChevronRight />
          </A>
          <For each={links}>
            {(l) => (
              <A href={l.href}>
                {l.label} <ChevronRight />
              </A>
            )}
          </For>
        </nav>
        <div class="menu-actions">
          <a class="btn btn-primary btn-lg" href={site.releases} target="_blank" rel="noopener">
            <Download /> Download the APK
          </a>
          <a class="btn btn-ghost btn-lg" href={site.discord} target="_blank" rel="noopener">
            <Discord /> Join the Discord
          </a>
        </div>
      </div>
    </>
  )
}
