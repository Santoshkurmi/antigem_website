---
title: The settings screen
sidebar: Overview
description: Every row of AntiGem's settings, in the order the app shows them, with what it's for and where it's explained.
updated: 2.0.4-beta.2
---

Everything in AntiGem is set up from one settings screen. This page lists every row in the same order as the app, so you can find what you're looking for and jump to its page.

**Where:** ☰ (top left) → **Settings**. The screen is called **Settings & Preferences**. Tap a row to open it, **Back** (top left) to go up one level, and **Done** (top right) to close settings.

Many rows show a value on the right, like the current theme, an agent's state or **On** / **Off**, so you can check things at a glance.

![The settings screen](/screens/settings_main.webp "frame")

## Look and connection

| Row | What it's for | Value on the right | Page |
| :--- | :--- | :--- | :--- |
| **Themes** | Light and dark mode, and the theme gallery | The current theme | [Themes](./02-themes.md) |
| **Appearance** | Chat text size, agent steps, message stats, header icons, the app switcher and Gemmy | | [Appearance](./03-appearance.md) |
| **STEM & diagrams** | Chemistry, graphs, geometry, simulations, circuits and offline Mermaid in chats | | [STEM and diagrams](../05-power-features/16-stem-and-diagrams.md) |
| **Where agents run** | This phone (AntiGem or Ubuntu chroot) or your server, and how the app reaches it | **AntiGem**, **Ubuntu chroot** or **Server**, plus a problem if there is one | [Where agents run](./04-where-agents-run.md) |
| **Connect to PC** | Use the agents on your PC (AntiGem in VS Code) from this phone | | [Connect to PC](../05-power-features/03-connect-to-pc.md) |

## Agents

| Row | What it's for | Value on the right | Page |
| :--- | :--- | :--- | :--- |
| **Agents** | Run Antigravity, Claude Code, OpenCode, Codex or several; global context, memory, EGM | Which agents are on (**All agents**, **Claude + Codex**…) | [Agents settings](./05-agents.md) |
| **Antigravity** | Account & CLI, MCP servers, skills & plugins, commands & permissions | Number of MCP servers | [Antigravity](../02-agents/02-antigravity.md) |
| **Claude Code** | Account, models, permissions, MCP, plugins & memory | Your plan or **Signed out** | [Claude Code](../02-agents/03-claude-code.md) |
| **OpenCode** | CLI, providers, custom OpenAI-compatible endpoints & approvals | Its state | [OpenCode](../02-agents/04-opencode.md) |
| **Codex** | Account & CLI, usage limits, permissions, MCP | Its state | [Codex](../02-agents/05-codex.md) |
| **Jarvis** | Hands-free voice control of the whole app | **On** / **Off** | [Jarvis](../05-power-features/01-jarvis.md) |

An agent's row only shows when that agent is turned on in **Agents**.

## Extending the agents

| Row | What it's for | Page |
| :--- | :--- | :--- |
| **Custom AntiGem Plugins** | Install and manage plugins: MCP tools and skills | [Custom AntiGem plugins](../04-tools-and-extensions/04-custom-plugins.md) |
| **Slash Commands** | Your own / commands and what they expand to | [Slash commands](../04-tools-and-extensions/06-slash-commands.md) |
| **Project checkpoints** | Go back to before any chat message: files restored with a preview | [Project checkpoints](../05-power-features/11-project-checkpoints.md) |

MCP servers are set up per agent, inside each agent's row. See [MCP: how agents use tools](../04-tools-and-extensions/01-mcp-explained.md).

## Tools and the phone

| Row | What it's for | Page |
| :--- | :--- | :--- |
| **Terminal** | Font, cursor and colors, and SSH for terminal tabs (value: **Local** or **SSH**) | [Terminal settings](./06-terminal.md) |
| **GitHub** | Sign in with the GitHub CLI, your repositories and git credentials | [GitHub](../05-power-features/10-github.md) |
| **ADB Connect** | Shell access to this phone through adb (Wireless debugging), Shizuku or root | [ADB Connect, Shizuku and root](../05-power-features/07-device-access.md) |
| **Android Automation** | Let AI agents see and control this phone | [Android automation](../05-power-features/08-android-automation.md) |
| **REA · Reverse Engineering** | Let agents analyze APKs, Flutter, React Native and native code | [Reverse engineering](../05-power-features/06-reverse-engineering.md) |
| **Android Development** | Build Kotlin / Compose, Flutter and React Native apps on this phone | [Build Android apps on the phone](../05-power-features/05-android-development.md) |
| **Termux Support** | Termux:API and the X11 desktop. With the Ubuntu chroot, this row is **X11 Desktop** instead. | [Termux Support](./07-termux-support.md) |
| **Diagnostics & Performance** | Live network connections, active streams and the thread HUD (value: **HUD on** when the HUD is shown) | [Diagnostics & Performance](./08-diagnostics.md) |

## Your data

| Row | What it's for | Page |
| :--- | :--- | :--- |
| **Backups & Restore** | Back up the Linux environment and chat histories. Only shown when the phone's own Linux environment is installed and you're not in server mode. | [Backups and restore](../05-power-features/12-backups.md) |
| **Data Loss Protection** | An uninstall shield and protection against **Clear data** in App info | [Data loss protection](../05-power-features/13-data-protection.md) |

## The app

| Row | What it's for | Page |
| :--- | :--- | :--- |
| **Updates** | Beta updates, and how often AntiGem checks for a new version | [Updates and What's new](./09-updates.md) |
| **About & Info** | App version, package details and bridge export (value: the app version) | [About & Info](./10-about.md) |

## Pages inside pages

Some rows open a list of more pages:

- **Antigravity** → **Account & CLI**, **Cloud agents**, **Voice calls**, **MCP Servers**, **Skills & Plugins**, **Commands & Permissions**.
- **Claude Code**, **OpenCode** and **Codex** → their own pages (account, permissions, MCP servers, plugins, skills…). See each agent's page.
- **Agents** → **Global context**, **Agent memory & history** (→ **Saved chats**) and **EGM · Elephant-Goldfish**.
- **Jarvis** → ten pages, from **Jarvis · Agent** to **Jarvis · Jarvis chat**. See [Jarvis](../05-power-features/01-jarvis.md).
- **Where agents run** → **Ubuntu chroot** (rooted phones).
- **REA** → **REA Tool Groups**.
- **Termux Support** → **Termux:API** and **X11 Desktop**.
- **About & Info** → **What's new**.

## With the Ubuntu chroot

When the [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md) runs the phone, pages that use AntiGem's built-in environment (**Termux Support** with **Termux:API**, **Backups & Restore** and **GitHub**) show a **Termux only** note instead (**Works with the Termux environment**). The X11 desktop, REA and Android development work in the chroot too.
