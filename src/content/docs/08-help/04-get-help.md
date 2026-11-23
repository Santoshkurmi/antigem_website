---
title: Getting help and reporting bugs
sidebar: Getting help
description: Where to ask, how to report a bug so it gets fixed fast, and how to suggest a feature.
updated: 2.0.4-beta.2
---

Most answers are in these docs: try the search (press <kbd>/</kbd> or <kbd>Ctrl</kbd> + <kbd>K</kbd>) and [Troubleshooting](./01-troubleshooting.md) first. If you're still stuck, ask.

## Where to ask

| Where | Best for |
| :--- | :--- |
| [Discord](https://discord.gg/pJvvTDTc6G) | Questions, help with setup, sharing what you built. Usually the fastest answer. |
| [WhatsApp group](https://chat.whatsapp.com/IGQX8q9zSVV0RarG70sclV) | Questions and news, if you prefer WhatsApp. |
| [GitHub issues](https://github.com/santoshkurmi/antigem/issues) | Bugs and feature requests, so they're tracked until fixed. |

## Report a bug

A good report gets fixed much faster. Open a [new issue](https://github.com/santoshkurmi/antigem/issues/new) and include:

:::steps
### The versions

The app version from **☰ → Settings → About & Info** (for example `2.0.4-beta.2`), your phone model and your Android version.

### Where it happened

Which agent (Antigravity, Claude Code, OpenCode, Codex), which model, and where the agents run (**Settings → Where agents run**: AntiGem, Ubuntu chroot or a server).

### What you did

The steps to make it happen again, what you expected, and what happened instead. A screenshot or screen recording helps a lot.

### The logs

One or more of these (see [Debugging tools](./02-debugging.md)):

- **Server logs**: tap the coloured dot next to **Select Project** → **Server logs** → **Copy log**.
- The last **tool card** of the agent, if the problem is in a chat.
- The **crash report**, if the app crashed (**Report on GitHub** fills the issue for you).
:::

> [!WARNING]
> Logs and reports can contain file names, folder names or project details. Read them before you post, and remove anything private. Never post API keys, tokens or backup files with sign-ins.

## Suggest a feature

Open an issue on GitHub that says what you want to do and why (the problem, not only the solution), or talk about it in the Discord first.

## Contribute

AntiGem is open source. Pull requests to the [app](https://github.com/santoshkurmi/antigem) and to [these docs](https://github.com/santoshkurmi/antigem-website) are welcome: every docs page has an **Edit this page on GitHub** link at the bottom. See [Build AntiGem from source](../10-developers/03-build-from-source.md).
