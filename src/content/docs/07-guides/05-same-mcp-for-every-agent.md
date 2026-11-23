---
title: Give every agent the same MCP server
description: Add one MCP server, a preset or your own, to Antigravity, Claude Code, OpenCode and Codex.
updated: 2.0.4-beta.2
---

Each agent keeps its own list of MCP servers, so a server added to one isn't in the others. Here's how to add the same one everywhere in a few minutes.

**Before you start:** know which server you want: a preset like **Browser**, or your own (its command or address). See [MCP: how agents use tools](../04-tools-and-extensions/01-mcp-explained.md).

:::steps
### Antigravity

**Settings → Antigravity → MCP Servers** → tap the preset under **Quick Presets & Templates**, or **Add Server** for your own. Save.

### Claude Code

**Settings → Claude Code → MCP servers** → tap the preset, or **Custom server**. For your own server, choose the scope **All projects** so every chat gets it.

### OpenCode

**Settings → OpenCode → MCP servers** → tap the preset, or **Custom server**.

### Codex

**Settings → Codex → MCP servers** → tap the preset, or **Custom server**.

### Start new chats

Agents connect to MCP servers when a chat starts. Start a new chat with each agent and ask it to use a tool, for example "open example.com in the browser".
:::

The presets are the same on every agent's page and fill in everything for you. For your own server, type the same name, command or address on each page. See [Add your own MCP server](../04-tools-and-extensions/03-add-your-own-mcp-server.md).

> [!TIP]
> Turned off agents (in **Settings → Agents**) don't show their settings. Only add servers to the agents you use.
