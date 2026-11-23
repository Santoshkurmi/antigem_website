---
title: Agent memory and saved chats
sidebar: Agent memory
description: What agents remember across chats, the chat history they can look up, and how to read, edit or remove it.
updated: 2.0.4-beta.2
---

Normally an agent forgets everything when a chat ends. With **agent memory**, agents keep short notes across chats ("the user's projects use pnpm", "the API key is in .env.local"), and can look up what you did in earlier chats.

**Where:** ☰ → **Settings** → **Agents** → **Agent memory & history**

## How it works

- **Shared by every agent.** One memory for Antigravity, Claude Code, OpenCode and Codex.
- **Agents save memories as they work.** When an agent saves one, the chat shows a small chip; tap it to undo.
- **A new chat is told** the memories set to **Always**, plus the most relevant others (up to **Memories listed per chat**). The agent reads a listed memory in full when it needs it.
- **Stored by the bridge**, next to the agents, so it works on the phone and in server mode.

## Options

### Agent memory

**Default:** on. Turns memory on or off for all agents. While it's off, memories are kept but agents don't get them.

You can also turn it off for single agents. A weak model may not follow the memory rules well: turn it off for the agent that uses it.

### Memories listed per chat

**Default:** 10. How many relevant memories a new chat is told about. Memories set to **Always** are always included in full and don't count.

### Save chat history

**Default:** off. Keeps a cleaned copy of every chat (your messages and the replies, no tool output) that the agents can read when you refer to earlier work ("do it like we did in the login chat").

### Saved chats

**Read, edit or remove the chat history the agents can look up.** Filter by title, project or agent; tap one to read or edit it; **Remove** one or **Remove all saved chats**. Removing only affects what agents can look up: the chats themselves stay in your drawer.

## Managing memories

The page lists the memories, with who saved each one (**Saved by Claude Code**, **Added by you**…). Tap one to edit it, or tap **New memory**:

- **Description**: one line about what it is.
- The text: what the agents should remember.
- **Always**: every chat gets it in full. Otherwise it's listed when relevant and read when needed.
- **All projects** (any chat can get it) or **One project** (only chats in that project folder).

**Search memories and past chats** finds both memories and saved chats.

## Memory vs. other places

| | Use it for |
| :--- | :--- |
| **Agent memory** | Facts learned along the way, that agents save themselves. |
| [Global context](./07-global-context.md) | Rules you set for every chat. |
| Project instructions (`CLAUDE.md`, `AGENTS.md`) | Facts about one project, kept with the project. |

## Troubleshooting

:::details The agent remembered something wrong
Find the memory on this page and edit or delete it. When the agent saves one in a chat, you can tap the chip to undo right away.
:::

:::details "Could not reach the bridge"
Memory is stored by the bridge. Check the agents' state (the coloured dot next to **Select Project**) and tap **Restart server** if it's offline. See [Debugging tools](../08-help/02-debugging.md).
:::
