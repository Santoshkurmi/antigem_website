---
title: AntiGem for VS Code
description: All four agents in one sidebar in VS Code, with the same look and features as the phone app, and the phone as a second screen.
updated: 2.0.4-beta.2
---

**AntiGem for VS Code** is the desktop version of AntiGem: **Antigravity**, **Claude Code**, **Codex** and **OpenCode** in one sidebar inside VS Code, with one chat UI, one chat list and one settings screen. It looks and works almost like the phone app, so everything in these docs about chats, agents, MCP servers and plugins applies there too.

**Get it:** search **AntiGem** in VS Code's Extensions view, or install it from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=santoshkurmi.antigem-vscode-extension) or [Open VSX](https://open-vsx.org/extension/santoshkurmi/antigem-vscode-extension) (for VSCodium, Cursor, Windsurf and other VS Code based editors).

## Get started

:::steps
### Install the extension

From the Marketplace or Open VSX.

### Install an agent

At least one of `agy`, `claude`, `codex` or `opencode`. Each agent's **Account & CLI** page in AntiGem's settings has **Install** / **Update** buttons that install the official build.

### Open AntiGem

Click the **AntiGem** icon in the activity bar, pick the agents you want, and sign in to each.

### Chat

Pick the project folder, model and agent, then type.
:::

AntiGem starts its own bridge on your computer. All VS Code windows share one bridge, so chats keep running while you switch windows.

## Use your PC's agents from the phone

With **Connect phone**, the AntiGem app on your phone uses the agents on your computer: the same chats on both, files copied between them. Pair once with a 6-digit code. See [Connect to PC](../05-power-features/03-connect-to-pc.md) and the guide [Use the agents on your PC from the phone](../07-guides/13-use-agents-on-your-pc.md).

## What's different from the phone app

- **Built into the editor:** chats about the open file, files attached as chips, code blocks that run in a VS Code terminal, diffs in editor tabs.
- **Your real browser:** with the [AntiGem Browser Bridge](./02-chrome-extension.md) Chrome extension, agents control your Chrome instead of a built-in browser.
- **Not on the desktop:** voice (Jarvis voice and dictation are phone-only), Antigravity cloud agents, and the phone-only tools (the terminal MCP, Android automation).
- **Antigravity chat history:** shows your Antigravity IDE history by default; switch in **Settings → Antigravity → Chat history**.

## Platforms

Windows (x64), macOS (Intel and Apple silicon) and Linux (x64, arm64). 32-bit systems aren't supported. It's tested mostly on Linux.

For everything else (commands, VS Code settings, privacy, troubleshooting), see the extension's [README](https://github.com/Santoshkurmi/antigem_vscode_extension).
