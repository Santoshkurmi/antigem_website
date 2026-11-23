---
title: Agents settings
description: Turn agents on and off, get a buzz when a chat finishes, and find global context, agent memory and EGM.
updated: 2.0.4-beta.2
---

Choose which coding agents run, and open the settings every agent shares.

**Where:** ☰ → **Settings** → **Agents**. The row shows which agents are on (**All agents**, **Claude + Codex**, **Claude Code**…).

## Choose your agents

Tick the agents you want: **Antigravity**, **Claude Code**, **OpenCode** and **Codex**. At least one must stay on. With several on, you pick the agent for each new chat on the empty chat screen. Not sure which to use? See [Choosing an agent](../02-agents/01-overview.md).

Agents you turn off **don't run at all**: the local server starts without them, and their settings and chats are hidden (their chats stay on disk and come back when you turn the agent on again).

### Apply and restart app

Changes apply after a restart. Tap **Apply and restart app** (it says **No changes** until you change something) and confirm **Restart app**. The local server stops and the app restarts with the new agents, so nothing of a turned-off agent keeps running. Replies in progress stop, and an open chat of a turned-off agent is closed.

## Vibrate when a chat finishes

**Default:** on. One light buzz when a chat stops running (its dot in the chat list goes away). Handy when you put the phone down while an agent works. Turn it off if it bothers you.

## Shared by every agent

These rows open pages that apply to all agents:

| Row | What it's for | Page |
| :--- | :--- | :--- |
| **Global context** | What every chat is told about the app, and your own standing instructions | [Global context](../04-tools-and-extensions/07-global-context.md) |
| **Agent memory & history** | Memories every agent keeps across chats, and past chats they can look up | [Agent memory and saved chats](../04-tools-and-extensions/08-agent-memory.md) |
| **EGM · Elephant-Goldfish** | Plan a design and have fresh reviewers attack it before any code (`/egm`) | [EGM: design reviews](../04-tools-and-extensions/09-egm.md) |

Each agent's own settings (account, models, permissions, MCP servers, plugins, skills) are in its own row on the main settings screen. See [Antigravity](../02-agents/02-antigravity.md), [Claude Code](../02-agents/03-claude-code.md), [OpenCode](../02-agents/04-opencode.md) and [Codex](../02-agents/05-codex.md).
