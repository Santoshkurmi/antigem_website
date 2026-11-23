---
title: Codex
description: "OpenAI's codex CLI: install, ChatGPT sign-in, permissions and plan mode."
draft: true
---

Codex runs OpenAI's official `codex` CLI. The app talks to it through its `app-server` protocol, the same one the Codex VS Code extension uses.

## Step by step

:::steps
### Install it

Open **Settings → Codex → Server & install**. On the phone this installs the Termux package.

![Codex](/screens/chat_agent_working.webp "phone")

### Sign in with ChatGPT

In the browser, or with a device code.

### Set permissions

Choose what Codex asks before it runs commands or edits files. Approvals appear in the chat.

:::

## Good to know

- Plan mode, `/review` of uncommitted changes, `/compact` and `/fork` are supported.
- Messages you send while Codex works are queued for its next turn.

> [!NOTE] Draft page
> This page is a starting point. Screenshots and details are still to come.
