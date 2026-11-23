import { For, type Component } from 'solid-js'
import { A } from '@solidjs/router'
import Smartphone from 'lucide-solid/icons/smartphone'
import Workflow from 'lucide-solid/icons/workflow'
import Bot from 'lucide-solid/icons/bot'
import SquareTerminal from 'lucide-solid/icons/square-terminal'
import Plug from 'lucide-solid/icons/plug'
import Server from 'lucide-solid/icons/server'
import Laptop from 'lucide-solid/icons/laptop'
import Cpu from 'lucide-solid/icons/cpu'
import KeyRound from 'lucide-solid/icons/key-round'
import ShieldCheck from 'lucide-solid/icons/shield-check'
import Lock from 'lucide-solid/icons/lock'
import CodeXml from 'lucide-solid/icons/code-xml'
import ArrowRight from 'lucide-solid/icons/arrow-right'
import { reveal, useTitle } from '~/lib/reveal'
import '~/styles/pages.css'

interface Layer {
  icon: Component
  name: string
  role: string
  chips: string[]
  link?: string
}

const layers: Layer[] = [
  {
    icon: Smartphone,
    name: 'AntiGem app',
    role: 'What you see and touch. Native Android UI built with Jetpack Compose.',
    chips: ['Chat', 'Code editor', 'Terminal', 'Browser', 'Files', 'Jarvis'],
  },
  {
    icon: Workflow,
    name: 'Go bridge',
    role: 'Starts the agents, speaks each one’s protocol, and streams their events to the app as one common format.',
    chips: ['agy_ide_bridge', 'Sessions', 'Approvals', 'Usage'],
  },
  {
    icon: Bot,
    name: 'Agents',
    role: 'The official CLIs, unchanged. Each chat gets its own agent working in your project folder.',
    chips: ['agy', 'claude', 'opencode', 'codex'],
  },
  {
    icon: SquareTerminal,
    name: 'Linux environment',
    role: 'Where the agents, your code and your commands run: Termux packages built for AntiGem. No root, no proot.',
    chips: ['apt / pkg', 'bash', 'Python', 'Node.js', 'Git', 'Go'],
  },
]

const links = ['Your message, model, effort and permission mode', 'Streaming events: replies, tool calls, diffs, questions', 'Files and commands in your project']

const protocols = [
  { agent: 'Antigravity', runs: 'Google’s agy CLI', talk: 'The agy hub, over gRPC' },
  { agent: 'Claude Code', runs: 'Anthropic’s claude CLI, one process per chat', talk: 'stream-json' },
  { agent: 'Codex', runs: 'OpenAI’s codex CLI', talk: 'app-server, the protocol of the Codex VS Code extension' },
  { agent: 'OpenCode', runs: 'The opencode server', talk: 'Its server API and event stream' },
]

const places: { icon: Component; title: string; text: string; tag: string }[] = [
  { icon: Smartphone, title: 'On the phone', text: 'The default. A Linux environment inside the app, with full-speed Termux packages.', tag: 'No root' },
  { icon: Cpu, title: 'Ubuntu chroot', text: 'On rooted phones: a real Ubuntu with apt, glibc and sudo, still at full speed.', tag: 'Rooted phones' },
  { icon: Server, title: 'Your server', text: 'Point the app at a Linux server and let it do the heavy work while the phone stays cool.', tag: 'Remote mode' },
  { icon: Laptop, title: 'Your PC', text: 'With AntiGem for VS Code, the phone becomes a second screen for the same chats.', tag: 'Connect to PC' },
]

const life = [
  { title: 'You send a message', text: 'Text, images and files, or your voice through Jarvis.' },
  { title: 'The app hands it to the bridge', text: 'Along with the chat’s agent, model, effort and permission mode.' },
  { title: 'The agent gets to work', text: 'It reads your project, edits files, runs commands and calls tools.' },
  { title: 'It asks when it should', text: 'Approvals, plans and questions appear in the chat, or Jarvis reads them out.' },
  { title: 'Events stream back', text: 'Replies, thinking, tool cards, diffs and token usage, drawn as native UI.' },
  { title: 'You see the result', text: 'Open it in the browser or the editor, keep chatting, or fork the chat.' },
]

const mcps = [
  ['Browser', 'Tabs, clicks, typing, JavaScript, DOM, console and screenshots.'],
  ['Terminal', 'Sessions, commands, output, processes, theme and font.'],
  ['Android', 'The screen’s UI tree, taps, swipes, typing, apps and ADB.'],
  ['Notes & To-dos', 'Read and update your notes and to-do lists.'],
  ['Theme', 'List, switch, create and edit the app’s color themes.'],
  ['Jarvis', 'Drive the app for the voice assistant: tasks, chats, settings.'],
  ['Plugins', 'Tools from your installed AntiGem plugins, and a plugin builder.'],
  ['REA & Stitch', 'Reverse engineering, and Google Stitch UI design.'],
]

const trust: { icon: Component; title: string; text: string }[] = [
  { icon: KeyRound, title: 'Your sign-ins stay on the phone', text: 'Each agent signs in with its own official CLI, inside the app’s Linux environment.' },
  { icon: ShieldCheck, title: 'You approve what runs', text: 'Permission modes and per-command approvals, for every agent, in the chat.' },
  { icon: Lock, title: 'Locked-down PC pairing', text: 'SSH with the phone’s own key. The pairing code is checked with SPAKE2, so nobody on the Wi-Fi learns it.' },
  { icon: CodeXml, title: 'Open source', text: 'GPLv3. Read every line, build it yourself, or send a fix.' },
]

export default function HowItWorks() {
  useTitle('How it works · AntiGem')
  return (
    <>
      <section class="page-hero">
        <div class="glow" aria-hidden="true" />
        <div class="container">
          <span class="eyebrow">How it works</span>
          <h1>
            Real agents, <span class="grad-text">a real Linux,</span> a native app
          </h1>
          <p class="lead">
            AntiGem doesn’t scrape terminal text. It runs each agent’s official CLI and talks to it in its own structured protocol, so
            every reply, approval and file change becomes proper app UI.
          </p>
        </div>
      </section>

      <section class="section arch-section">
        <div class="container">
          <div class="arch">
            <For each={layers}>
              {(l, i) => (
                <>
                  <div class="layer" ref={reveal}>
                    <div class="layer-icon">
                      <l.icon />
                    </div>
                    <div class="layer-body">
                      <h3>{l.name}</h3>
                      <p>{l.role}</p>
                      <div class="chips">
                        <For each={l.chips}>{(c) => <span>{c}</span>}</For>
                      </div>
                    </div>
                  </div>
                  {i() < layers.length - 1 && (
                    <div class="link" aria-hidden="true">
                      <span class="wire">
                        <i />
                      </span>
                      <span class="link-label">{links[i()]}</span>
                    </div>
                  )}
                </>
              )}
            </For>
            <aside class="arch-side" ref={reveal}>
              <div class="layer-icon small">
                <Plug />
              </div>
              <div>
                <h3>MCP tools</h3>
                <p>Built-in servers every agent can use: the browser, the terminal, your phone, your notes, themes and plugins.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section class="section alt-section">
        <div class="container two-col">
          <div class="section-head" ref={reveal}>
            <span class="eyebrow">Structured, not scraped</span>
            <h2 class="h2">Each agent, in its own language</h2>
            <p class="lead">
              The bridge speaks every agent’s native protocol. That is how the app can show live thinking, ask you to approve a command,
              show a subagent’s progress or a diff, and know exactly how many tokens a reply used.
            </p>
          </div>
          <div class="proto-table" ref={reveal}>
            <table>
              <thead>
                <tr>
                  <th>Agent</th>
                  <th>What runs</th>
                  <th>How the app talks to it</th>
                </tr>
              </thead>
              <tbody>
                <For each={protocols}>
                  {(p) => (
                    <tr>
                      <td>
                        <strong>{p.agent}</strong>
                      </td>
                      <td>{p.runs}</td>
                      <td>{p.talk}</td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head center" ref={reveal}>
            <span class="eyebrow">Where agents run</span>
            <h2 class="h2">Your phone, or something bigger</h2>
            <p class="lead">Switch any time in Settings → Where agents run. Your chats look and work the same everywhere.</p>
          </div>
          <div class="places">
            <For each={places}>
              {(p) => (
                <article class="place" ref={reveal}>
                  <div class="place-top">
                    <div class="layer-icon small">
                      <p.icon />
                    </div>
                    <span class="tag">{p.tag}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="section alt-section">
        <div class="container two-col">
          <div class="section-head sticky-head" ref={reveal}>
            <span class="eyebrow">Life of a prompt</span>
            <h2 class="h2">What happens when you hit send</h2>
            <p class="lead">Six steps, a few seconds, all on your phone.</p>
          </div>
          <ol class="timeline">
            <For each={life}>
              {(s, i) => (
                <li ref={reveal}>
                  <span class="dot">{i() + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              )}
            </For>
          </ol>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head center" ref={reveal}>
            <span class="eyebrow">Tools</span>
            <h2 class="h2">Agents that can use your phone</h2>
            <p class="lead">Turn on a preset in Settings → MCP Servers and every agent gets the tools.</p>
          </div>
          <div class="mcp-grid">
            <For each={mcps}>
              {([name, text]) => (
                <div class="mcp" ref={reveal}>
                  <strong>{name}</strong>
                  <span>{text}</span>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="section alt-section">
        <div class="container">
          <div class="section-head center" ref={reveal}>
            <span class="eyebrow">Trust</span>
            <h2 class="h2">Safe by design</h2>
          </div>
          <div class="trust">
            <For each={trust}>
              {(t) => (
                <article ref={reveal}>
                  <div class="layer-icon small">
                    <t.icon />
                  </div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </article>
              )}
            </For>
          </div>
          <div class="center-link">
            <A class="btn btn-primary" href="/docs/getting-started/installation">
              Install AntiGem <ArrowRight />
            </A>
          </div>
        </div>
      </section>
    </>
  )
}
