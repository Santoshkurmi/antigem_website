---
title: "MCP: how agents use tools"
sidebar: How MCP works
description: What MCP is, what an MCP server is, and how AntiGem gives every agent tools for the browser, the terminal, your phone and more.
updated: 2.0.4-beta.2
---

Out of the box, an agent can read and write files and run commands. **MCP** gives it more: control of the browser, your notes, your phone's screen, a design tool, a database, almost anything. This page explains the idea; the next pages show how to add servers.

## The idea in one minute

- A **tool** is one thing an agent can do, with a name and a description: "open this URL", "tap at this point", "add a to-do".
- An **MCP server** is a program that offers a set of tools. The agent asks it "what tools do you have?", and then calls them when it needs to.
- **MCP** (Model Context Protocol) is the common language between them. Because it's a standard, any MCP server works with any agent that speaks MCP. All four agents in AntiGem do.

```text title="How a tool call travels"
 You: "Open my site and check the login button works"
        │
        ▼
 ┌──────────────┐  "browser_open_url  http://localhost:5173"   ┌──────────────────┐
 │    Agent     │ ───────────────────────────────────────────► │  Browser MCP     │
 │ (Claude Code,│                                              │  server (in the  │
 │  Codex, …)   │ ◄─────────────────────────────────────────── │  AntiGem app)    │
 └──────────────┘        "page loaded, title: My site"         └────────┬─────────┘
                                                                        │ drives
                                                                        ▼
                                                              AntiGem's built-in browser
```

Each call shows in the chat as a [tool card](../01-getting-started/02-key-concepts.md#tool-call). Depending on the agent's [permission mode](../01-getting-started/02-key-concepts.md#permission-mode), it may ask your [approval](../01-getting-started/02-key-concepts.md#approval) first.

## Two kinds of MCP servers

| Kind | What it is | Example |
| :--- | :--- | :--- |
| **Local (command)** | A program the agent starts on the same machine, and talks to through its input and output (called *stdio*). You give the command to run. | `npx -y @modelcontextprotocol/server-filesystem ~/notes` |
| **Remote (HTTP)** | A server at an address. You give the URL, and often a header with a key. Some older servers use *SSE*, a form of HTTP. | `https://stitch.googleapis.com/mcp` with an API key |

## How AntiGem does it

### The app is an MCP server too

AntiGem itself offers MCP servers for its own parts: the **Browser**, the **Terminal**, your **Notes & To-dos**, **Android** (the phone's screen), **Theme**, **Jarvis**, and the developer tools for plugins and mini apps. They run inside the app, on the phone, at a local address that only apps on the phone can reach. A secret header (your device's ID) is added for you, so other apps can't use them.

You don't need to know the addresses: each one is a **preset**. One tap adds it to an agent. See [Built-in MCP servers](./02-built-in-mcp-servers.md).

### Every agent has its own MCP list

Each agent keeps its own list of servers, in its own settings file, so a server you add to Claude Code isn't automatically in Codex. Each agent's **MCP** page in **Settings** has the same presets, so adding the same server everywhere takes a few taps:

| Agent | Where | Saved in |
| :--- | :--- | :--- |
| Antigravity | **Settings → Antigravity → MCP Servers** | Its global config, `~/.gemini/config/mcp_config.json` |
| Claude Code | **Settings → Claude Code → MCP servers** | For all projects, or for one project (you choose) |
| OpenCode | **Settings → OpenCode → MCP servers** | OpenCode's config; works in every OpenCode chat |
| Codex | **Settings → Codex → MCP servers** | Codex's own config; works in every Codex chat |

See [Add your own MCP server](./03-add-your-own-mcp-server.md) and [Give every agent the same MCP server](../07-guides/05-same-mcp-for-every-agent.md).

### When servers connect

Agents connect to their MCP servers **when a chat starts**. After you add or change a server, start a new chat to use it.

## Fewer tools work better

Every tool's name and description is sent to the model with each message, so it knows what it can use. That takes room in the [context window](../01-getting-started/02-key-concepts.md#context-window) and can confuse the model when there are hundreds of tools.

- Add only the servers you use. You can turn them off without removing them.
- Big servers often let you pick a smaller set. For example **REA** can show only some tool groups, or run **on demand**: the agent gets a few small tools and looks up the rest only when it needs them. See [Reverse engineering](../05-power-features/06-reverse-engineering.md).

## Is it safe?

An MCP server can do whatever its tools do, so treat adding one like installing an app:

- AntiGem's built-in servers only work on your phone, and only for apps that know your device's ID header.
- Add servers from sources you trust. A local server runs as a program with the same access as the agent.
- Keep approvals on for tools that change things (tapping on your phone, deleting notes), at least until you trust how the agent uses them.

:::cards
- [Built-in MCP servers](./02-built-in-mcp-servers.md) — Every preset and what the agent can do with it.
- [Add your own MCP server](./03-add-your-own-mcp-server.md) — Command and HTTP servers, for each agent.
- [Custom AntiGem plugins](./04-custom-plugins.md) — Add-ons that bring their own tools.
:::
