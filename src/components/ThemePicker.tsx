import { createSignal, For, onCleanup, onMount, Show } from 'solid-js'
import Palette from 'lucide-solid/icons/palette'
import Check from 'lucide-solid/icons/check'
import { setTheme, themeChoice, themes } from '~/lib/theme'

export default function ThemePicker() {
  const [open, setOpen] = createSignal(false)
  let wrap!: HTMLDivElement

  onMount(() => {
    const close = (e: Event) => {
      if (open() && !wrap.contains(e.target as Node)) setOpen(false)
    }
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', esc)
    onCleanup(() => {
      document.removeEventListener('pointerdown', close)
      document.removeEventListener('keydown', esc)
    })
  })

  const pick = (id: string) => {
    setTheme(id)
    setOpen(false)
  }

  return (
    <div class="popover-wrap" ref={wrap}>
      <button class="icon-btn" aria-label="Change theme" aria-haspopup="menu" aria-expanded={open()} onClick={() => setOpen(!open())}>
        <Palette />
      </button>
      <Show when={open()}>
        <div class="popover" role="menu">
          <div class="popover-title">Theme</div>
          <button class="theme-option" role="menuitemradio" aria-checked={themeChoice() === 'system'} onClick={() => pick('system')}>
            <span class="swatch system" />
            Match device
            <Show when={themeChoice() === 'system'}>
              <Check class="check" />
            </Show>
          </button>
          <For each={themes}>
            {(t) => (
              <button class="theme-option" role="menuitemradio" aria-checked={themeChoice() === t.id} onClick={() => pick(t.id)}>
                <span class="swatch" style={{ background: t.swatch[0] }}>
                  <i style={{ background: t.swatch[2] }} />
                  <i style={{ background: t.swatch[1] }} />
                </span>
                {t.name}
                <Show when={themeChoice() === t.id}>
                  <Check class="check" />
                </Show>
              </button>
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}
