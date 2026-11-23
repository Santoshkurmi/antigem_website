---
title: How AntiGem works
sidebar: How it works
description: What runs where. The app, the bridge, the agents and the Linux environment, in plain words.
updated: 2.0.4-beta.2
---

You don't need to know any of this to use AntiGem. It helps when something doesn't work, or when you choose between running the agents on the phone, in the Ubuntu chroot, on a server or on your PC.

## The three layers

```text title="What runs where"
┌───────────────────────────────────────────────────────────┐
│                       AntiGem app                         │
│      chat · IDE · terminal · browser · settings           │
│      built-in MCP servers · Jarvis                        │
└───────────────┬──────────────────────────────┬────────────┘
                │                              │
┌───────────────┴──────────────────┐   ┌───────┴────────────┐
│     The bridge (agy_ide_bridge)  │   │  Antigravity hub   │
│  files · Git · plugins           ├──►│  (Google's agy)    │
│  starts and watches the agents   │   └────────────────────┘
└──────┬─────────────┬─────────────┬┘
       │             │             │
┌──────┴──────┐ ┌────┴────────┐ ┌──┴──────────┐
│ Claude Code │ │  OpenCode   │ │    Codex    │
│ one program │ │ one shared  │ │ one shared  │
│  per chat   │ │   server    │ │ app-server  │
└─────────────┘ └─────────────┘ └─────────────┘
```

1. **The app** is what you see: the chat, the IDE, the terminal, the browser, the settings. It also hosts AntiGem's own MCP servers (browser, terminal, Android, notes, theme, Jarvis…), so agents can use parts of the app as tools.
2. **The bridge** is a small program that runs in the [Linux environment](./02-key-concepts.md#linux-environment). It starts each agent, passes your messages to it, and sends its answers back to the app. It also does the file, Git and plugin work for the app.
3. **The agents** are the official programs from each company: Google's `agy` for Antigravity, Anthropic's `claude`, OpenCode, and OpenAI's `codex`. AntiGem doesn't copy or change them. It installs them for you and talks to them the same way their own desktop apps do.

The app reads each agent's structured output, not its terminal text. That's how it can show streaming replies, tool cards, approvals, questions and file changes as normal chat parts.

## Where your messages go

When you send a message, the agent (running on your phone) sends it, with the files it needs, to its AI provider: Google, Anthropic, OpenAI, or the provider you set up. The answer comes back to the agent, which acts on it on your phone. AntiGem has no server of its own in the middle.

Your sign-ins stay on the phone, in each agent's own folder in the Linux environment (for example `~/.claude` or `~/.codex`).

> [!NOTE] Analytics
> AntiGem counts how many people use the app (app opens, an anonymous install ID, phone model, Android and app version). It doesn't collect chats, prompts, code, files, terminal output, account emails or API keys.

## The Linux environment

Agents need a real Linux to work in: a shell, Git, Python, Node.js. AntiGem installs one inside the app on first launch, built from [Termux packages](./02-key-concepts.md#termux-packages).

- **No root, no proot.** Termux packages expect to live in the Termux app's folder. Instead of faking that folder (proot, which slows every program down), AntiGem adjusts each package while it installs, so programs run at full speed.
- **Private to the app.** It lives in AntiGem's private storage. Your phone's shared storage (Downloads, Pictures) is reachable once you allow **Files**.
- **Yours to extend.** Install anything with `pkg install` in the terminal.

## Other places the agents can run

The app works the same in every case. Only the place where the bridge and the agents run changes.

| Where | What runs there | Good for |
| :--- | :--- | :--- |
| **AntiGem** (default) | Everything on the phone, in the built-in Linux environment | Most people |
| **Ubuntu chroot** | Everything on the phone, in a real Ubuntu (rooted phones) | `apt`, `sudo` and programs that need a normal Linux |
| **Your server** | Bridge, agents, projects and terminal on your server; the phone is only the screen | Long jobs, a light phone, a fast machine |
| **Connect to PC** | The agents on your computer in AntiGem for VS Code; the same chats on both | Using your PC's agents and files from the couch |

Choose in **Settings → Where agents run** (and **Settings → Connect to PC** for the PC). See [Server mode](../05-power-features/02-server-mode.md), [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md) and [Connect to PC](../05-power-features/03-connect-to-pc.md).

## Want more detail?

The site's [How it works](/how-it-works) page goes deeper, with the protocols each agent uses.

:::cards
- [Key concepts](./02-key-concepts.md) — Every word explained.
- [What to download](./04-downloads.md) — The right file for your phone.
- [Debugging tools](../08-help/02-debugging.md) — See what each layer is doing when something breaks.
:::
