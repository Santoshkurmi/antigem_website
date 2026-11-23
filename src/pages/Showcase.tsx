import { createMemo, createSignal, For, Show } from 'solid-js'
import Play from 'lucide-solid/icons/play'
import ArrowRight from 'lucide-solid/icons/arrow-right'
import Maximize from 'lucide-solid/icons/maximize-2'
import { reveal, useTitle } from '~/lib/reveal'
import { shots, shotSet, shotSrc, SHOT_H, SHOT_W, type Shot } from '~/lib/screens'
import { asset, site } from '~/lib/site'
import { openViewer } from '~/lib/ui'
import '~/styles/pages.css'

const filters: { id: 'all' | Shot['group']; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'agents', label: 'Agents & chat' },
  { id: 'build', label: 'Build & run' },
  { id: 'customize', label: 'Make it yours' },
]

const story = [
  { shot: 'chat_agent_working', step: 'Ask', text: 'One prompt: “build a weather dashboard”. Claude Code plans it and writes the files.' },
  { shot: 'terminal_fastfetch', step: 'Run', text: 'It starts a web server in the Linux terminal, right on the phone.' },
  { shot: 'browser_live_preview', step: 'Preview', text: 'The built-in browser opens the result. No laptop anywhere.' },
]

export default function Showcase() {
  useTitle('Showcase · AntiGem')
  const [filter, setFilter] = createSignal<(typeof filters)[number]['id']>('all')
  const [playing, setPlaying] = createSignal(false)
  const list = createMemo(() => (filter() === 'all' ? shots : shots.filter((s) => s.group === filter())))

  const view = (i: number) =>
    openViewer(
      list().map((s) => ({ src: shotSrc(s.name, 960), srcset: shotSet(s.name), alt: s.title, title: s.title, caption: s.caption })),
      i,
    )

  return (
    <>
      <section class="page-hero">
        <div class="glow" aria-hidden="true" />
        <div class="container">
          <span class="eyebrow">Showcase</span>
          <h1>
            See AntiGem <span class="grad-text">in action</span>
          </h1>
          <p class="lead">Real screens from a real phone: the agents at work, the tools they use, and the ways to make the app your own.</p>
        </div>
      </section>

      <section class="container video-wrap" ref={reveal}>
        <div class="video-card">
          <Show
            when={playing()}
            fallback={
              <button class="video-poster" onClick={() => setPlaying(true)} aria-label="Play the video tour">
                <img src={asset('og.webp')} width="1200" height="588" alt="AntiGem on five phones: editor, browser, chat, terminal and model picker" />
                <span class="play">
                  <Play />
                </span>
                <span class="video-label">
                  <strong>Full tour on a real phone</strong>
                  <span>Claude Code builds an animated solar system from one prompt · sped up</span>
                </span>
              </button>
            }
          >
            <video src={site.video} controls autoplay playsinline preload="metadata" />
          </Show>
        </div>
      </section>

      <section class="section story-section">
        <div class="container">
          <div class="section-head center" ref={reveal}>
            <span class="eyebrow">One prompt, start to finish</span>
            <h2 class="h2">From an idea to a running app</h2>
          </div>
          <ol class="story">
            <For each={story}>
              {(s, i) => (
                <li ref={reveal} style={{ 'transition-delay': `${i() * 90}ms` }}>
                  <img src={shotSrc(s.shot)} srcset={shotSet(s.shot)} sizes="(max-width: 760px) 60vw, 280px" width={SHOT_W} height={SHOT_H} alt={s.step} loading="lazy" decoding="async" />
                  <div class="story-text">
                    <span class="story-step">
                      {i() + 1}. {s.step}
                    </span>
                    <p>{s.text}</p>
                  </div>
                </li>
              )}
            </For>
          </ol>
        </div>
      </section>

      <section class="section gallery-section">
        <div class="container">
          <div class="section-head" ref={reveal}>
            <span class="eyebrow">Every screen</span>
            <h2 class="h2">Gallery</h2>
            <p class="lead">Tap any screenshot to see it full size.</p>
          </div>
          <div class="filters" role="tablist" aria-label="Filter screenshots">
            <For each={filters}>
              {(f) => (
                <button role="tab" aria-selected={filter() === f.id} classList={{ active: filter() === f.id }} onClick={() => setFilter(f.id)}>
                  {f.label}
                </button>
              )}
            </For>
          </div>
          <div class="shots">
            <For each={list()}>
              {(s, i) => (
                <figure class="shot-card">
                  <button onClick={() => view(i())} aria-label={`Open ${s.title}`}>
                    <img src={shotSrc(s.name)} srcset={shotSet(s.name)} sizes="(max-width: 600px) 45vw, 260px" width={SHOT_W} height={SHOT_H} alt={s.title} loading="lazy" decoding="async" />
                    <span class="zoom">
                      <Maximize />
                    </span>
                  </button>
                  <figcaption>
                    <strong>{s.title}</strong>
                    <span>{s.caption}</span>
                  </figcaption>
                </figure>
              )}
            </For>
          </div>
          <div class="center-link">
            <a class="link-arrow" href={site.releases} target="_blank" rel="noopener">
              Try it yourself: download AntiGem <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
