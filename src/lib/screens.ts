import { asset } from './site'

// Screenshots in public/screens/<width>/<name>.webp (made from media/screens by `pnpm images`).
// They already include the phone frame and a transparent background.
export const SHOT_W = 1310
export const SHOT_H = 2669

export interface Shot {
  name: string
  title: string
  caption: string
  group: 'agents' | 'build' | 'customize'
}

export const shots: Shot[] = [
  { name: 'agent_picker', title: 'Four agents, one app', caption: 'Pick Antigravity, Claude Code, OpenCode or Codex for each chat.', group: 'agents' },
  { name: 'chat_agent_working', title: 'Thinking, to-dos and live edits', caption: 'Watch the agent plan, write a to-do list and edit files as it goes.', group: 'agents' },
  { name: 'chat_agent_summary', title: 'Tool cards and token stats', caption: 'Every file change and command as a card, with the tokens each reply used.', group: 'agents' },
  { name: 'model_picker_usage', title: 'Models and plan usage', caption: 'Switch model mid chat and see your 5-hour and weekly limits.', group: 'agents' },
  { name: 'code_editor', title: 'Code editor', caption: 'Tabs, syntax highlighting, find and replace, and Git.', group: 'build' },
  { name: 'terminal_fastfetch', title: 'Real Linux terminal', caption: 'apt, Python, Node.js, Git and Go. No root, no proot.', group: 'build' },
  { name: 'browser_live_preview', title: 'Live preview', caption: 'The built-in browser shows what the agent just built.', group: 'build' },
  { name: 'solar_system', title: 'Built from one prompt', caption: 'An animated solar system, written and run on the phone.', group: 'build' },
  { name: 'themes_light', title: 'Light and dark themes', caption: 'A theme gallery, or make your own.', group: 'customize' },
  { name: 'settings', title: 'Settings', caption: 'Agents, providers, servers, backups and more.', group: 'customize' },
  { name: 'mcp_presets', title: 'One-tap MCP servers', caption: 'Give every agent a browser, a terminal, your phone and more.', group: 'customize' },
  { name: 'jarvis_settings', title: 'Jarvis voice assistant', caption: 'Run the whole app hands-free, by voice.', group: 'customize' },
]

export const shotSrc = (name: string, w: 480 | 960 = 480) => asset(`screens/${w}/${name}.webp`)
export const shotSet = (name: string) => `${shotSrc(name, 480)} 480w, ${shotSrc(name, 960)} 960w`
