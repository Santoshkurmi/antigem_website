---
title: "Models, thinking and usage limits"
description: "Picking a model for each agent, quota meters and the 5-hour and weekly limits, thinking and effort levels, the context window and token details."
updated: 2.0.4-beta.2
---

This page explains how to pick a [model](../01-getting-started/02-key-concepts.md#model), how much it should think, how to watch your plan's [usage limits](../01-getting-started/02-key-concepts.md#usage-limits), and what the numbers under each reply mean.

**Where:** the model name in the message bar, between **+** and the buttons on the right

## The model in the message bar

The message bar shows the model of the chat and, next to it, a number like **85%**. The number is how much of the model's limit is **left**. Its color:

| Color | Left |
| :--- | :--- |
| Green | more than 50% |
| Amber | more than 20% |
| Red | 20% or less |

The number is the 5-hour limit, or the weekly one when you chose **7d** (it then shows as **7d 40%**). Models with no 5-hour limit always show the weekly one. Models without limits (most OpenCode providers) show no number.

Tap the name to open **Select model**. The top of the sheet shows the agent, how many models there are, and a refresh icon that loads the models and the limits again.

## The model picker of each agent

The picker looks alike for every agent, but each agent fills it differently:

| Agent | How models are grouped | What else is in the picker |
| :--- | :--- | :--- |
| [Antigravity](./02-antigravity.md) | By quota group: models that share the same limits. Each group shows its 5-hour and 7-day share left. | A **Low** / **Medium** / **High** selector per model |
| [Claude Code](./03-claude-code.md) | **All models** (your 5-hour and weekly limits), plus a group for a model with its own weekly share. Your custom providers each get a section. | **Effort**, **Thinking**, **Fast mode** |
| [OpenCode](./04-opencode.md) | By provider, with a search box. Free models say **free**. | – (effort and thinking are chips above the message box) |
| [Codex](./05-codex.md) | One group, **All models**: every Codex model shares your plan's limits. | – (reasoning is a chip above the message box) |

The model you pick applies to the chat.

![The model picker (here Claude Code): the 5-hour and weekly usage meters, and the models to pick from](/screens/model_picker_usage.webp "phone")

### Shown in chat

In the Antigravity and Claude Code pickers: which limit the message bar shows, **5h** or **7d**. "Models with no 5h limit show 7d."

**Default:** **5h**

### Edit quota groups

In the Antigravity and Claude Code pickers, when there is more than one group: the pencil at the top turns on group editing. Each model then gets a button to move it to another group, or back to **Automatic**. A moved model says **moved**. Tap **Done** when you finish.

Use it when the app put a model in the wrong group, for example after Google renamed a model. Your choice is saved on this phone only.

## Usage limits

Subscription plans limit how much you can use in a time window. AntiGem shows two windows where the plan has them:

- **5h**: a 5-hour window (Claude Code calls it the current session).
- **7d**: the weekly window.

Each meter shows the share **left** and when it resets, for example **5h ▬▬▬▭ 85% · 2h 4m**. When a window is used up, pick a model from another group (Antigravity) or wait for the reset.

Where to see your limits:

| Agent | Where |
| :--- | :--- |
| Antigravity | The model picker: one set of meters per quota group |
| Claude Code | The model picker; the **5h** chip above the message box (shows how much is **used**); **Settings → Claude Code → Account & CLI → Plan usage**; `/usage` in a chat |
| Codex | The model picker; **Settings → Codex → Usage limits** (shows how much is **used**) |
| OpenCode | Your provider's own website. OpenCode providers usually bill per use. |

> [!NOTE]
> An Anthropic Console account (API billing) has no 5-hour or weekly limits, and neither do API keys: you pay for the tokens instead.

## Thinking and effort

A model that "thinks" reasons step by step before it answers (see [Thinking and effort](../01-getting-started/02-key-concepts.md#thinking-and-effort)). More thinking gives better answers on hard problems, but the reply takes longer and uses more tokens, so more of your limits or money.

- **Raise it** for hard bugs, big changes across many files, and planning.
- **Lower it** for quick questions, small edits and simple tasks.

Each agent sets it differently:

| Agent | Control | Levels |
| :--- | :--- | :--- |
| Antigravity | The selector on each model in the picker | **Low**, **Medium**, **High** (what the model offers) |
| Claude Code | The **Effort · …** and **Thinking** chips, or the picker | Effort: **Default**, **Minimal**, **Low**, **Medium**, **High**, **Extra high**, **Max** (what the model offers). Thinking: on or off. |
| OpenCode | The **Effort · …** and **Thinking** chips | What the model offers. Only shows for models that can think. |
| Codex | The **Reasoning: …** chip | **Default** and what the model offers, for example **Low**, **Medium**, **High**, **Extra high** |

**Default** always means the model's own default. Claude's effort levels in short: **Minimal** barely reasons and is fastest, **Medium** is balanced, **High** is thorough, **Max** is the most thorough and uses plan limits fastest.

Codex uses your choice for new chats too, OpenCode remembers it for each model, and new Claude chats start with **Settings → Claude Code → Chat defaults**. Claude Code also has **Fast mode** for models that support it: send `/fast` in the chat.

## The context window

The [context window](../01-getting-started/02-key-concepts.md#context-window) is how much text the model can keep in mind at once: your messages, its replies, files it read and tool results. When it is full, older parts must be summarized.

- **Claude Code**: the **Context N%** chip shows how full it is. Tap it to see what uses the space. Send `/compact` to summarize the chat so far.
- **Codex**: send `/compact` to summarize the chat so far.
- **OpenCode**: while it compacts the chat, the line above the chips says "Compacting the conversation…".

A summary keeps the important parts, but details of old messages can be lost. For a new task, a new chat is often better than a long old one.

When older turns of a chat were compressed into a summary, a **Context Memory** card (**Active Summary**) shows in the chat. Tap it to read the summary. The pencil edits it ("The AI will use this as its permanent context"), the bin deletes it.

## Token details under each reply

Under each reply, a small line shows what it used: tokens, the share read from the cache, and the time. "(est.)" means the numbers are estimates.

Tap it to open **Reply details**:

| Row | What it means |
| :--- | :--- |
| **Model** | The full model name (copy button), and the **Provider** |
| **Input tokens** | What was sent to the model |
| **Output tokens** | What the model wrote |
| **Cache read** | Input tokens read from the prompt cache, and their share of the input. Cached tokens cost less. |
| **Cache write** | Tokens stored in the cache for the next message |
| **Total** | All tokens of the reply |
| **Time** | How long the reply took |
| **Cost** | What the reply cost, when the agent reports it |

Rows an agent doesn't report are left out. **View raw payload** shows the raw data.

### Show Message Stats

**Where:** **Settings → Appearance → Show Message Stats**

Shows or hides the token line under each reply. **Default:** on. See [Appearance](../06-settings/03-appearance.md).

## Troubleshooting

:::details The picker says "No models loaded"
The agent hasn't listed its models yet, or you aren't signed in. Sign in to the agent, then tap the refresh icon at the top of the picker. For Antigravity: "Connect your Google account in Settings or tap refresh to load your models."
:::

:::details The meters or the number next to the model are missing
The agent hasn't reported limits yet, or the account has none (API billing, most OpenCode providers). Tap refresh in the picker.
:::

:::details The numbers look old
Tap the refresh icon in the picker. Claude Code's **Plan usage** and Codex's **Usage limits** pages have their own refresh icon.
:::

:::details A model is in the wrong quota group
Tap the pencil in the picker and move the model to the right group (see Edit quota groups above).
:::

:::details The token numbers say "(est.)"
The agent didn't report exact numbers for this reply, so the app estimated them.
:::

:::cards
- [Choosing an agent](./01-overview.md) — Which agent has which models.
- [Bring your own models](./07-bring-your-own-models.md) — Add providers, local and free models.
- [Claude Code](./03-claude-code.md) — Plan usage, prompt cache and context.
- [Key concepts](../01-getting-started/02-key-concepts.md) — What the words mean.
:::
