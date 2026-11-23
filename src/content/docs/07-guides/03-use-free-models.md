---
title: Use free models
description: Code without paying, with OpenCode's free models or free models on OpenRouter in Claude Code.
updated: 2.0.4-beta.2
---

You can use AntiGem without any paid plan. Two ways:

## OpenCode's free models (no account)

OpenCode comes with free models that work without signing up.

:::steps
### Turn on OpenCode and install it

**Settings → Agents**: tick **OpenCode**, **Apply and restart app**. On the empty chat, tap the **OpenCode** tab and **Install**.

### Pick a free model

Tap the model chip at the bottom of the message box. Free models are in OpenCode's own list. See [OpenCode](../02-agents/04-opencode.md).

### Chat

Send a message. That's it.
:::

## OpenRouter's free models (free account)

[OpenRouter](https://openrouter.ai) has free versions of many models, with a free account and API key. Use them in **Claude Code** or **OpenCode**:

- **Claude Code:** **Settings → Claude Code → Custom providers**, the **OpenRouter** preset, paste your key, and fetch only the free models that can call tools.
- **OpenCode:** **Settings → OpenCode → Custom providers**, sign in to OpenRouter with your key.

See [Bring your own models](../02-agents/07-bring-your-own-models.md).

## Good to know

- Free models are usually smaller and slower, and have daily limits. Keep tasks small and specific.
- Coding agents need models that can **call tools**. A model without tool calling can chat but can't edit files or run commands. Pick models marked for tools.
- Antigravity can also be used with a free Google account, with smaller limits than a paid plan. See [Antigravity](../02-agents/02-antigravity.md).
