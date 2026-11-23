---
title: Key concepts
description: What every word in AntiGem means. Agents, models, MCP, the bridge, projects and more, in plain words.
updated: 2.0.4-beta.2
---

AntiGem puts a lot of tools in one app. This page explains each word you'll meet, in a few sentences, with a link to its full page. The other docs pages link here when they use one of these words.

## The basics

### Agent

An **agent** is an AI program that can do work, not only answer questions. It reads your files, writes code, runs commands in the terminal and checks the result, then tells you what it did. AntiGem runs four agents: **Antigravity**, **Claude Code**, **OpenCode** and **Codex**. You choose which ones are on, and which one each chat uses. See [Choosing an agent](../02-agents/01-overview.md).

### Model

The **model** is the AI "brain" an agent uses, like Gemini, Claude Sonnet or GPT. One agent can use many models. You pick the model from the chip at the bottom of the chat (next to **+**), and you can change it during a chat. Bigger models are smarter but slower and use more of your limits. See [Models, thinking and usage limits](../02-agents/06-models-and-usage.md).

### Provider

A **provider** is the company or service that runs a model: Google, Anthropic, OpenAI, OpenRouter, or your own computer with Ollama. Antigravity, Claude Code and Codex come with their own provider. OpenCode, and Claude Code with extra providers, can use many others. See [Bring your own models](../02-agents/07-bring-your-own-models.md).

### Plan or API key

There are two ways to pay for a model:

- **A plan (subscription):** you sign in with your account (Google, Claude, ChatGPT) and use the limits of your plan. No key to copy.
- **An API key:** a secret code from a provider's website. You pay for what you use, or use the provider's free models.

The agent pages say which way each agent supports.

### Chat

A **chat** is one conversation with one agent. It keeps its history, so the agent remembers what you said earlier in it. Old chats are in the drawer (**☰**, top left), where you can open, rename, fork, export or delete them. See [Chat](../03-using-the-app/02-chat.md) and [Chat history](../03-using-the-app/03-chat-history.md).

### Project

A **project** is the folder the agent works in: its files are what the agent reads and changes. Pick one with **Select Project** at the top of the chat. A chat without a project can still answer questions and make files in a default folder. See [Projects](../03-using-the-app/04-projects.md).

## Where things run

### Linux environment

Coding agents need a computer to work on: a shell, Git, Python, Node.js and so on. AntiGem installs a small **Linux system** inside the app, on first launch (the **Full environment** is a download of about 350–380 MB that takes about 2 GB once installed). The terminal, the IDE and the agents all run in it. It doesn't need root and doesn't touch the rest of your phone. See [First launch](./06-first-launch.md).

### Termux packages

The Linux environment is built from the packages of [Termux](https://termux.dev), a well-known Linux terminal for Android. You install more with `pkg install <name>` (or `apt`) in the terminal, like on a normal Linux. AntiGem isn't Termux and doesn't need the Termux app; it only uses Termux's packages and its terminal display. See [Terminal](../03-using-the-app/07-terminal.md).

### The bridge

The **bridge** (`agy_ide_bridge`) is a small program that runs in the Linux environment and sits between the app and the agents. It starts and watches every agent, and handles files, Git and plugins for the app. You don't use it directly. If an agent doesn't answer, the bridge is one of the things to check: see [Debugging tools](../08-help/02-debugging.md).

### The Antigravity hub

Antigravity runs as a **hub**: Google's `agy` program started in a mode that the app talks to. Like the bridge, it runs in the background by itself. See [Antigravity](../02-agents/02-antigravity.md).

### Where agents run

By default everything runs on the phone. **Settings → Where agents run** lets you choose: **AntiGem** (the built-in Linux environment), the **Ubuntu chroot** (rooted phones) or **your server**. The app looks the same in all three. See [Where agents run](../06-settings/04-where-agents-run.md).

### Server mode

In **server mode**, the agents, your projects and the terminal run on a computer you own (a VPS, a home server, a spare PC). The phone only shows the app. Agents keep working while the phone sleeps, and the phone stays light. See [Server mode](../05-power-features/02-server-mode.md).

### Ubuntu chroot

On a **rooted** phone, AntiGem can run a real **Ubuntu** instead of its built-in Linux environment: `apt`, `sudo` and normal Linux programs, at full speed. Root inside it is root of the phone, so read the risks first. See [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md).

### Connect to PC

**Connect to PC** lets the phone use the agents running on your computer in **AntiGem for VS Code**. The same chats show on both, and you can copy files between them. See [Connect to PC](../05-power-features/03-connect-to-pc.md).

## Tools and abilities

### MCP

**MCP** (Model Context Protocol) is a standard way to give an agent extra **tools**. With the right tools an agent can control a browser, read your notes or tap buttons on your phone. Every agent in AntiGem speaks MCP. See [MCP: how agents use tools](../04-tools-and-extensions/01-mcp-explained.md).

### MCP server

An **MCP server** is a program that offers a set of tools to an agent. It can run on the phone (a command) or somewhere on the internet (an address). You add MCP servers in each agent's **MCP** settings. See [Add your own MCP server](../04-tools-and-extensions/03-add-your-own-mcp-server.md).

### Built-in MCP servers

AntiGem has its own MCP servers that you add in one tap (**presets**): **Browser**, **Terminal**, **Android**, **Notes & To-dos**, **Theme**, **Jarvis**, **REA** and others. They let any agent use the parts of the app. See [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md).

### Tool call

A **tool call** is one action the agent takes: read a file, run a command, open a web page. Each one shows in the chat as a small card you can open to see what was sent and what came back. See [Chat](../03-using-the-app/02-chat.md).

### Subagent

Some agents can start **subagents**: helpers that do one part of a job on their own (for example, search the code) and report back. Their progress shows inside the chat.

### Skill

A **skill** is a page of instructions that teaches an agent how to do one kind of task. The agent reads it only when it needs it, so skills don't fill up the chat. Skills come with agents, plugins or from you. See [Skills](../04-tools-and-extensions/05-skills.md).

### Plugin

A **custom AntiGem plugin** is a small add-on (a ZIP file) that gives agents new tools, and sometimes skills to go with them. You install plugins from a file or from a plugin repository on GitHub. See [Custom AntiGem plugins](../04-tools-and-extensions/04-custom-plugins.md).

### Slash command

Type `/` in the message box to see **slash commands**: shortcuts like `/compact` or `/review`, depending on the agent. You can also make your own that expand into a full prompt. See [Slash commands](../04-tools-and-extensions/06-slash-commands.md).

### Global context

**Global context** is text that every chat, in every agent, gets at the start: what the app is, plus your own standing instructions ("always answer in short sentences"). See [Global context](../04-tools-and-extensions/07-global-context.md).

### Agent memory

**Agent memory** is what agents remember across chats (facts about you and your projects), and the past chats they can look up. You can read, edit or remove it. See [Agent memory and saved chats](../04-tools-and-extensions/08-agent-memory.md).

## Working safely

### Approval

Before an agent does something that can change your files or your phone, it can stop and ask you first. That question is an **approval**: it shows in the chat with buttons to allow or refuse it (some agents also let you allow it for the rest of the chat, or always). See [Chat](../03-using-the-app/02-chat.md).

### Permission mode

The **permission mode** decides what the agent may do without asking: ask before every change, allow edits but ask before commands, or allow everything. Each agent has its own modes and you can change them during a chat. See the page of your agent in [Agents](../02-agents/01-overview.md).

### Plan mode

In **plan mode** the agent only reads and thinks. It writes a plan and waits for your OK before it changes anything. Good for big changes.

### Checkpoint

With **checkpoints** turned on, AntiGem saves a hidden copy of your project before every message you send. If an agent breaks something, you can put the files back the way they were before that message, with a preview first. Checkpoints are off by default and work in git projects. See [Project checkpoints](../05-power-features/11-project-checkpoints.md).

## How models work

### Thinking and effort

**Thinking** lets a model reason step by step before it answers. **Effort** sets how hard it tries. More thinking gives better answers on hard problems, but takes longer and uses more of your limits. See [Models, thinking and usage limits](../02-agents/06-models-and-usage.md).

### Context window

The **context window** is how much a model can keep in mind at once: your messages, its answers, the files it read and the tools it has. When a chat gets too long, older parts are summarized or the agent forgets details. Starting a new chat for a new task helps.

### Usage limits

Plans have **usage limits**: how much you can use in a few hours and in a week. The model picker shows how much you have left and when it resets. See [Models, thinking and usage limits](../02-agents/06-models-and-usage.md).

## Inside the app

### Artifacts

**Artifacts** are what the agent made along the way: plans, walkthroughs and generated images. Find them in the **Artifacts** drawer, and save them to `Downloads/AntiGem`. See [Chat history](../03-using-the-app/03-chat-history.md).

### STEM blocks

Chats can show more than text: chemistry formulas, graphs, geometry, physics simulations, circuits and diagrams, drawn right in the message. See [STEM and diagrams](../05-power-features/16-stem-and-diagrams.md).

### Jarvis

**Jarvis** is AntiGem's voice assistant. You talk, it does: open files, switch screens, start tasks, read approvals out loud. It's off until you turn it on. See [Jarvis](../05-power-features/01-jarvis.md).

### Gemmy

**Gemmy** is the little purple buddy that floats over the app. It thinks while your agent works and cheers when it's done. Drag it, tap it, or long-press it for its menu, or turn it off. See [Floating chat, switcher and Gemmy](../03-using-the-app/10-floating-chat-and-gemmy.md).

### Floating chat

The **floating chat** is a chat window you open on top of any other app (from AntiGem's notification, **Float**), so you can talk to your agent without leaving what you're doing. See [Floating chat, switcher and Gemmy](../03-using-the-app/10-floating-chat-and-gemmy.md).

### Mini app

A **mini app** is a small app made of HTML, CSS and JavaScript, often built by an agent on the phone. AntiGem opens it full screen like a real Android app, with its own icon. Finished mini apps are shared as signed `.agapp` files. See [Mini Apps](../05-power-features/09-mini-apps.md).

### Developer mode

**Developer mode** (in **Mini Apps**, the **</>** button at the top) lets mini apps that are still being built run, with developer tools. With it off, only installed, signed mini apps run.

## Phone and power tools

### ADB Connect

**ADB Connect** gives the terminal and the agents shell access to the phone itself, through Wireless debugging, Shizuku or root. That lets them install apps, read logs and more. See [ADB Connect, Shizuku and root](../05-power-features/07-device-access.md).

### Android automation

**Android automation** lets agents see the screen and tap, type and swipe on your phone, to do tasks in other apps. See [Android automation](../05-power-features/08-android-automation.md).

### REA

**REA** (reverse engineering) lets agents look inside Android apps: unpack and decompile APKs, Flutter, React Native and native code. See [Reverse engineering](../05-power-features/06-reverse-engineering.md).

### EGM

**EGM** (Elephant-Goldfish) is a way to plan before coding: you write a design, and fresh reviewers who know nothing else attack it to find the holes. Start it with `/egm`. See [EGM: design reviews](../04-tools-and-extensions/09-egm.md).

### X11 desktop

The **X11 desktop** is a full Linux desktop (XFCE or LXQt) with windows and Linux apps, shown through the Termux:X11 app. See [Linux desktop (X11)](../05-power-features/14-x11-desktop.md).

### Termux:API

**Termux:API** commands (`termux-toast`, `termux-vibrate`, `termux-clipboard-get`…) let scripts in the terminal use phone features. The common ones are built in; others need a companion app. See [Termux:API](../05-power-features/15-termux-api.md).
