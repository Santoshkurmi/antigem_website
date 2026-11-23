import { createSignal, For, Index, onMount, Show, type Component } from 'solid-js'
import { A } from '@solidjs/router'
import ArrowRight from 'lucide-solid/icons/arrow-right'
import Download from 'lucide-solid/icons/download'
import BookOpen from 'lucide-solid/icons/book-open'
import Orbit from 'lucide-solid/icons/orbit'
import Asterisk from 'lucide-solid/icons/asterisk'
import Braces from 'lucide-solid/icons/braces'
import Hexagon from 'lucide-solid/icons/hexagon'
import Bot from 'lucide-solid/icons/bot'
import MessageSquareText from 'lucide-solid/icons/message-square-text'
import SquareTerminal from 'lucide-solid/icons/square-terminal'
import CodeXml from 'lucide-solid/icons/code-xml'
import Globe from 'lucide-solid/icons/globe'
import AudioLines from 'lucide-solid/icons/audio-lines'
import Check from 'lucide-solid/icons/check'
import Layers from 'lucide-solid/icons/layers'
import Plug from 'lucide-solid/icons/plug'
import MonitorSmartphone from 'lucide-solid/icons/monitor-smartphone'
import Server from 'lucide-solid/icons/server'
import Hammer from 'lucide-solid/icons/hammer'
import Puzzle from 'lucide-solid/icons/puzzle'
import Bug from 'lucide-solid/icons/bug'
import Palette from 'lucide-solid/icons/palette'
import PanelsTopLeft from 'lucide-solid/icons/panels-top-left'
import MessageCircle from 'lucide-solid/icons/message-square'
import Archive from 'lucide-solid/icons/archive'
import Cloud from 'lucide-solid/icons/cloud'
import Mic from 'lucide-solid/icons/mic'
import ShieldCheck from 'lucide-solid/icons/shield-check'
import Play from 'lucide-solid/icons/play'
import { Discord, GitHub, WhatsApp } from '~/components/Brand'
import { reveal, useTitle } from '~/lib/reveal'
import { shotSet, shotSrc, SHOT_H, SHOT_W } from '~/lib/screens'
import { site } from '~/lib/site'
import { themes } from '~/lib/theme'
import { loadVersion, type VersionInfo } from '~/lib/version'
import '~/styles/home.css'

/** A framed phone screenshot (the image already includes the phone). */
const Phone = (p: { name: string; alt: string; class?: string; eager?: boolean; sizes?: string }) => (
  <img
    class={p.class}
    src={shotSrc(p.name)}
    srcset={shotSet(p.name)}
    sizes={p.sizes ?? '(max-width: 600px) 64vw, 320px'}
    width={SHOT_W}
    height={SHOT_H}
    alt={p.alt}
    loading={p.eager ? 'eager' : 'lazy'}
    decoding="async"
    fetchpriority={p.eager ? 'high' : 'auto'}
  />
)

export default function Home() {
  useTitle('AntiGem · AI coding agents, a Linux terminal and an IDE on your Android phone')
  return (
    <>
      <Hero />
      <Agents />
      <Tour />
      <Bento />
      <Flow />
      <GetStarted />
      <Community />
    </>
  )
}

/* ------------------------------------------------------------------ Hero */

function Hero() {
  // The badge shows the newest release (the beta when there is one). Until it loads, it just says "What's new".
  const [version, setVersion] = createSignal<VersionInfo>()
  onMount(() => loadVersion().then(setVersion))
  const newest = () => version()?.beta?.version_name ?? version()?.version_name
  return (
    <section class="hero">
      <div class="hero-bg" aria-hidden="true" />
      <div class="hero-grid" aria-hidden="true" />
      <div class="container hero-copy">
        <a class="pill" href={site.releases} target="_blank" rel="noopener">
          <span class="pill-tag">New</span>
          <span>{newest() ? `v${newest()} is out` : 'See what’s new'}</span>
          <ArrowRight />
        </a>
        <h1>
          Code with AI agents, <span class="grad-text">right on your phone.</span>
        </h1>
        <p class="lead">
          AntiGem runs Antigravity, Claude Code, OpenCode and Codex on Android, with a real Linux terminal, a code editor and a
          browser the agent can drive. No root, and no PC needed.
        </p>
        <div class="hero-cta">
          <a class="btn btn-primary btn-lg" href={site.releases} target="_blank" rel="noopener">
            <Download /> Download the APK
          </a>
          <A class="btn btn-ghost btn-lg" href="/docs">
            <BookOpen /> Read the docs
          </A>
        </div>
        <ul class="hero-meta">
          <li>
            <Check /> Free and open source
          </li>
          <li>
            <Check /> {site.minAndroid}
          </li>
          <Show when={version()?.version_name}>
            <li>
              <Check /> Stable v{version()!.version_name}
            </li>
          </Show>
        </ul>
      </div>
      <div class="hero-stage" aria-label="AntiGem screenshots">
        <div class="seam" aria-hidden="true" />
        <Phone class="hero-phone side left" name="code_editor" alt="AntiGem's code editor" eager sizes="(max-width: 600px) 48vw, 280px" />
        <Phone class="hero-phone side right" name="terminal_fastfetch" alt="AntiGem's Linux terminal" eager sizes="(max-width: 600px) 48vw, 280px" />
        <Phone class="hero-phone center" name="chat_agent_working" alt="Claude Code writing a weather app in AntiGem's chat" eager sizes="(max-width: 600px) 62vw, 330px" />
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- Agents */

const agents: { name: string; by: string; icon: Component<{ class?: string }>; tone: string; text: string; tags: string[] }[] = [
  {
    name: 'Antigravity',
    by: 'Google · agy CLI',
    icon: Orbit,
    tone: 'a',
    text: 'Gemini and Claude models on your Google plan, with live quota, security presets and cloud agents.',
    tags: ['Google sign-in', 'Cloud agents'],
  },
  {
    name: 'Claude Code',
    by: 'Anthropic · claude CLI',
    icon: Asterisk,
    tone: 'b',
    text: 'Your Claude subscription or Console account, or OpenRouter, Kimi, DeepSeek and GLM with your own key.',
    tags: ['Plan usage', 'Plugins & MCP'],
  },
  {
    name: 'OpenCode',
    by: 'Open source',
    icon: Braces,
    tone: 'c',
    text: '200+ providers with your own keys, local models with Ollama or LM Studio, and free models with no account.',
    tags: ['200+ providers', 'Free models'],
  },
  {
    name: 'Codex',
    by: 'OpenAI · codex CLI',
    icon: Hexagon,
    tone: 'd',
    text: 'Sign in with ChatGPT. Plan mode, /review of your changes, and messages queued while it works.',
    tags: ['ChatGPT sign-in', 'Plan mode'],
  },
]

const stats = [
  { n: '4', l: 'coding agents' },
  { n: '200+', l: 'model providers' },
  { n: '10', l: 'built-in MCP servers' },
  { n: '0', l: 'root or proot needed' },
]

function Agents() {
  return (
    <section class="section agents" id="agents">
      <div class="container">
        <div class="section-head center" ref={reveal}>
          <span class="eyebrow">The agents</span>
          <h2 class="h2">Four real agents. Not wrappers.</h2>
          <p class="lead">
            Each agent is its own official CLI, running in the app's Linux environment. AntiGem reads their structured output, so
            replies, approvals, questions, subagents and diffs show up as a proper chat, not terminal text.
          </p>
        </div>
        <div class="agent-grid">
          <For each={agents}>
            {(a) => (
              <article class={`agent-card tone-${a.tone}`} ref={reveal}>
                <div class="agent-icon">
                  <a.icon />
                </div>
                <h3>{a.name}</h3>
                <div class="agent-by">{a.by}</div>
                <p>{a.text}</p>
                <div class="agent-tags">
                  <For each={a.tags}>{(t) => <span>{t}</span>}</For>
                </div>
              </article>
            )}
          </For>
        </div>
        <dl class="stats" ref={reveal}>
          <For each={stats}>
            {(s) => (
              <div>
                <dt class="grad-text">{s.n}</dt>
                <dd>{s.l}</dd>
              </div>
            )}
          </For>
        </dl>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ Tour */

const tour = [
  {
    id: 'agents',
    label: 'Agents',
    icon: Bot,
    shot: 'agent_picker',
    title: 'Pick the right agent for every chat',
    text: 'Turn on any mix of Antigravity, Claude Code, OpenCode and Codex, then choose one when you start a chat.',
    points: ['Models from every agent in one picker', '5-hour and weekly plan limits at a glance', 'Switch model, effort and thinking mid chat'],
  },
  {
    id: 'chat',
    label: 'Chat',
    icon: MessageSquareText,
    shot: 'chat_agent_working',
    title: 'Watch it think, plan and build',
    text: 'Live replies with collapsible thinking, to-do lists, tool cards and file diffs, all as native UI.',
    points: ['Approve commands and plans inside the chat', 'Attach images and files, or dictate', 'Fork, rename, share and export chats'],
  },
  {
    id: 'terminal',
    label: 'Terminal',
    icon: SquareTerminal,
    shot: 'terminal_fastfetch',
    title: 'A real Linux terminal',
    text: 'A full Linux environment with apt, bash, Python, Node.js, Git and Go. No root, and no proot slowdown.',
    points: ['Several sessions, themes and quick keys', 'Keeps builds and servers running in the background', 'ADB over Wireless debugging and an X11 desktop'],
  },
  {
    id: 'editor',
    label: 'Editor',
    icon: CodeXml,
    shot: 'code_editor',
    title: 'An editor made for touch',
    text: 'Tabs, syntax highlighting for every common language, find and replace, and a file explorer.',
    points: ['Run commands from a terminal sheet', 'Git: clone, diff, commit, pull and push', 'Sign in to GitHub and browse your repos'],
  },
  {
    id: 'browser',
    label: 'Browser',
    icon: Globe,
    shot: 'browser_live_preview',
    title: 'Preview it. Let the agent click around.',
    text: 'The built-in browser shows your local dev server, and the Browser MCP lets the agent use it like you would.',
    points: ['Desktop and mobile modes', 'Eruda DevTools built in', 'Screenshots, console logs and DOM for the agent'],
  },
  {
    id: 'jarvis',
    label: 'Jarvis',
    icon: AudioLines,
    shot: 'jarvis_settings',
    title: 'The whole app, by voice',
    text: 'Jarvis drives AntiGem hands-free on top of any agent: open projects, start tasks, answer approvals.',
    points: ['Hand over big jobs, get told when they finish', 'Wake phrase, headset button or Quick Settings tile', 'Device or online voices, your own phrases'],
  },
]

function Tour() {
  const [active, setActive] = createSignal(0)
  // Only screenshots that were opened once are loaded.
  const [opened, setOpened] = createSignal<Set<number>>(new Set([0]))
  const select = (i: number) => {
    setActive(i)
    if (!opened().has(i)) setOpened(new Set([...opened(), i]))
  }
  const item = () => tour[active()]

  return (
    <section class="section tour-section lazy-section" id="tour">
      <div class="container">
        <div class="section-head" ref={reveal}>
          <span class="eyebrow">Showcase</span>
          <h2 class="h2">A whole studio, in one app</h2>
          <p class="lead">Chat, terminal, editor and browser share one workspace, so the agent can write the code, run it and show you the result.</p>
        </div>
        <div class="tour" ref={reveal}>
          <div class="tour-tabs" role="tablist" aria-label="Features">
            <Index each={tour}>
              {(t, i) => (
                <button role="tab" id={`tab-${t().id}`} aria-selected={active() === i} aria-controls="tour-panel" classList={{ active: active() === i }} onClick={() => select(i)}>
                  {(() => {
                    const Icon = t().icon
                    return <Icon />
                  })()}
                  {t().label}
                </button>
              )}
            </Index>
          </div>
          <div class="tour-stage">
            <div class="tour-glow" aria-hidden="true" />
            <Index each={tour}>
              {(t, i) => (
                <Show when={opened().has(i)}>
                  <Phone class={active() === i ? 'tour-phone active' : 'tour-phone'} name={t().shot} alt={t().title} sizes="(max-width: 600px) 64vw, 300px" eager={active() === i} />
                </Show>
              )}
            </Index>
          </div>
          <div class="tour-panel" id="tour-panel" role="tabpanel" aria-labelledby={`tab-${item().id}`}>
            <Show when={item()} keyed>
              {(t) => (
                <div class="tour-copy">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <ul>
                    <For each={t.points}>
                      {(p) => (
                        <li>
                          <Check /> {p}
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              )}
            </Show>
            <A href="/showcase" class="link-arrow">
              See every screen <ArrowRight />
            </A>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- Bento */

const providers = ['OpenRouter', 'Ollama', 'LM Studio', 'DeepSeek', 'Kimi', 'Z.ai GLM', 'GitHub Copilot', 'xAI', 'vLLM', 'LiteLLM', 'OpenCode Zen', 'Any OpenAI API']
const mcps = ['Browser', 'Terminal', 'Android', 'Notes & To-dos', 'Theme', 'Jarvis', 'Stitch', 'REA', 'Plugin Developer', 'Custom Plugin']

const small: { icon: Component; title: string; text: string; href?: string }[] = [
  { icon: Server, title: 'Ubuntu chroot', text: 'Rooted? Run the agents in a real Ubuntu with apt, glibc and sudo, at full speed.' },
  { icon: Hammer, title: 'Build Android apps', text: 'Kotlin / Compose, Flutter and React Native, built on the phone itself.' },
  { icon: Puzzle, title: 'Plugins', text: 'Add MCP tools with a manifest and a JS worker. Chrome extension APIs work too.' },
  { icon: Bug, title: 'Reverse engineering', text: 'REA lets agents unpack and decompile APKs, Flutter, React Native and native code.' },
  { icon: PanelsTopLeft, title: 'Linux desktop', text: 'Run an XFCE or LXQt desktop and Linux GUI apps through Termux:X11.' },
  { icon: MessageCircle, title: 'Floating bubble', text: 'Chat with your agent, and keep notes, on top of any other app.' },
  { icon: Archive, title: 'Backups', text: 'Back up the Linux environment, projects and chats, and restore them on a new phone.' },
  { icon: Cloud, title: 'Cloud agents', text: 'Run Antigravity chats on a Google cloud machine instead of the phone.' },
]

function Bento() {
  return (
    <section class="section bento-section lazy-section">
      <div class="container">
        <div class="section-head center" ref={reveal}>
          <span class="eyebrow">Power features</span>
          <h2 class="h2">There's a lot more in your pocket</h2>
          <p class="lead">Bring your own models, give agents new tools, run a real Ubuntu, or keep working with the agents on your PC.</p>
        </div>
        <div class="bento">
          <article class="tile wide" ref={reveal}>
            <div class="tile-icon"><Layers /></div>
            <h3>Bring your own models</h3>
            <p>OpenCode connects to 200+ providers and Claude Code to any Anthropic-compatible API. Local models work too.</p>
            <div class="chips">
              <For each={providers}>{(p) => <span>{p}</span>}</For>
            </div>
          </article>
          <article class="tile wide" ref={reveal}>
            <div class="tile-icon"><Plug /></div>
            <h3>10 built-in MCP servers</h3>
            <p>One tap gives every agent a browser to drive, a terminal, control of your phone, your notes and more.</p>
            <div class="chips">
              <For each={mcps}>{(p) => <span>{p}</span>}</For>
            </div>
          </article>
          <article class="tile wide connect" ref={reveal}>
            <div class="tile-icon"><MonitorSmartphone /></div>
            <h3>Connect to your PC</h3>
            <p>Pair with AntiGem for VS Code and continue the same chats on your phone. Replies stream live on both.</p>
            <div class="pair" aria-hidden="true">
              <div class="pair-device phone-d">
                <span />
              </div>
              <div class="pair-line">
                <i />
                <ShieldCheck />
                <i />
              </div>
              <div class="pair-device laptop-d">
                <span />
              </div>
            </div>
            <div class="pair-note">SSH with its own key · 6-digit code checked with SPAKE2</div>
          </article>
          <For each={small.slice(0, 2)}>{(s) => <SmallTile {...s} />}</For>
          <For each={small.slice(2, 4)}>{(s) => <SmallTile {...s} />}</For>
          <article class="tile wide themes-tile" ref={reveal}>
            <div class="tile-icon"><Palette /></div>
            <h3>Make it yours</h3>
            <p>Light, dark and custom themes, in the app and in the terminal. Ask an agent to design one with the Theme MCP.</p>
            <div class="theme-dots">
              <For each={themes}>
                {(t) => (
                  <span style={{ background: t.swatch[0] }} title={t.name}>
                    <i style={{ background: t.swatch[1] }} />
                    <i style={{ background: t.swatch[2] }} />
                  </span>
                )}
              </For>
            </div>
          </article>
          <For each={small.slice(4)}>{(s) => <SmallTile {...s} />}</For>
        </div>
      </div>
    </section>
  )
}

const SmallTile = (s: { icon: Component; title: string; text: string }) => (
  <article class="tile small" ref={reveal}>
    <div class="tile-icon">
      <s.icon />
    </div>
    <div>
      <h3>{s.title}</h3>
      <p>{s.text}</p>
    </div>
  </article>
)

/* ------------------------------------------------------------------ Flow */

const flow = [
  { icon: Mic, title: 'Ask', text: 'Type it, attach a screenshot, or just say it to Jarvis.' },
  { icon: Bot, title: 'The agent works', text: 'It plans, edits files and runs commands in the Linux environment on your phone.' },
  { icon: ShieldCheck, title: 'You stay in control', text: 'Approve commands, answer its questions and review every diff in the chat.' },
  { icon: Play, title: 'See it live', text: 'Open the result in the built-in browser, or let the agent test it for you.' },
]

function Flow() {
  return (
    <section class="section flow-section lazy-section">
      <div class="container">
        <div class="section-head center" ref={reveal}>
          <span class="eyebrow">How it works</span>
          <h2 class="h2">From a prompt to a running app</h2>
          <p class="lead">Everything happens on the phone: the agent, the files, the commands and the preview.</p>
        </div>
        <ol class="flow">
          <For each={flow}>
            {(f, i) => (
              <li ref={reveal} style={{ 'transition-delay': `${i() * 70}ms` }}>
                <div class="flow-icon">
                  <f.icon />
                  <span>{i() + 1}</span>
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            )}
          </For>
        </ol>
        <div class="center-link" ref={reveal}>
          <A href="/how-it-works" class="link-arrow">
            See how AntiGem works inside <ArrowRight />
          </A>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ Get started */

const steps = [
  { title: 'Download the APK', text: 'Get the latest AntiGem from GitHub Releases and install it. It is free.' },
  { title: 'Pick your agents', text: 'Antigravity, Claude Code, OpenCode, Codex, or any mix. You can change this later.' },
  { title: 'Set up Linux', text: 'The full environment (~350 MB) or a minimal one (~33 MB). It installs in the background.' },
  { title: 'Sign in and ask', text: "Sign in to your agent's account or add an API key, then ask for anything." },
]

function GetStarted() {
  return (
    <section class="section start-section lazy-section">
      <div class="container start">
        <div>
          <div class="section-head" ref={reveal}>
            <span class="eyebrow">Get started</span>
            <h2 class="h2">Up and running in minutes</h2>
          </div>
          <ol class="start-steps">
            <For each={steps}>
              {(s, i) => (
                <li ref={reveal}>
                  <span class="num">{i() + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              )}
            </For>
          </ol>
          <div class="start-cta" ref={reveal}>
            <a class="btn btn-primary" href={site.releases} target="_blank" rel="noopener">
              <Download /> Download
            </a>
            <A class="btn btn-ghost" href="/docs/getting-started/installation">
              Step-by-step guide <ArrowRight />
            </A>
          </div>
        </div>
        <div class="start-visual" ref={reveal}>
          <div class="start-glow" aria-hidden="true" />
          <Phone name="agent_picker" alt="Choosing agents in AntiGem" sizes="(max-width: 600px) 64vw, 320px" />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- Community */

function Community() {
  return (
    <section class="section community-section lazy-section">
      <div class="container">
        <div class="community" ref={reveal}>
          <div class="community-glow" aria-hidden="true" />
          <h2 class="h2">
            Built in the open, <span class="grad-text">with its community.</span>
          </h2>
          <p class="lead">Get help, share what you build, ask for features and hear about new releases first.</p>
          <div class="community-cta">
            <a class="btn btn-primary btn-lg" href={site.discord} target="_blank" rel="noopener">
              <Discord /> Join the Discord
            </a>
            <a class="btn btn-ghost btn-lg" href={site.whatsapp} target="_blank" rel="noopener">
              <WhatsApp /> WhatsApp
            </a>
            <a class="btn btn-ghost btn-lg" href={site.repo} target="_blank" rel="noopener">
              <GitHub /> Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
