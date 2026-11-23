---
title: Choosing an agent
description: "Antigravity, Claude Code, OpenCode and Codex: what each needs and is good at, how to turn them on and off, and how to pick one for a chat."
updated: 2.0.4-beta.2
---

AntiGem runs four coding [agents](../01-getting-started/02-key-concepts.md#agent). Each one is the real CLI of its maker, so it works like on a computer. You can turn on one, several or all four, and pick the agent for each chat.

**Where:** ☰ (top left) → **Settings** → **Agents**

## The four agents

| | Antigravity | Claude Code | OpenCode | Codex |
| :--- | :--- | :--- | :--- | :--- |
| **Made by** | Google (`agy` CLI) | Anthropic (`claude` CLI) | Open source (`opencode`) | OpenAI (`codex` CLI) |
| **Account** | Google account | Claude subscription (Pro / Max) or Anthropic Console account | None for the free models; your own keys or subscriptions for the rest | ChatGPT account (Free, Plus, Pro, Business…) |
| **Models** | Gemini and Claude models of your Google plan | Claude models, plus Anthropic-compatible providers (OpenRouter, Kimi, DeepSeek, Z.ai…) | 200+ providers, any OpenAI- or Anthropic-compatible API, local models, free models | The models your ChatGPT account can use |
| **Limits** | Your Google plan's quota, per group of models | 5-hour and weekly limits of your Claude plan (none with the Console) | Your provider's | Your ChatGPT plan's limits (for example 5-hour and weekly) |
| **Special** | Cloud agents, live voice calls, Google plugins | Plan mode, permission rules, command sandbox, prompt-cache timer, `CLAUDE.md` | Build and Plan agents, many providers at once, effort per model | Plan mode, `/review`, queued messages |

Every agent gets the same app: chat, approvals, [MCP servers](../01-getting-started/02-key-concepts.md#mcp), [skills](../01-getting-started/02-key-concepts.md#skill), the terminal, the editor and the browser.

## Which one should I use?

- **You pay for a Google AI plan**, or want to start with your Google account: **Antigravity**.
- **You pay for Claude Pro or Max**, or have an Anthropic Console account: **Claude Code**.
- **You pay for ChatGPT**: **Codex**.
- **You want free models, your own API keys, or local models** (Ollama, LM Studio…): **OpenCode**.
- **Not sure?** Turn on several. They share the chat list, and you pick the agent for each new chat.

Each agent needs its own sign-in. Only the agents you turn on run, so turn off the ones you don't use.

## Where they run

All four run in the app's [Linux environment](../01-getting-started/02-key-concepts.md#linux-environment), started and watched by the local server (the [bridge](../01-getting-started/02-key-concepts.md#the-bridge)):

```text title="How the agents run"
AntiGem app
  └─ local server (agy_ide_bridge)
       ├─ Antigravity hub (agy)      all Antigravity chats
       ├─ Claude Code (claude)       one process per chat
       ├─ OpenCode (opencode serve)  one server for all chats
       └─ Codex (codex app-server)   one server for all chats
```

The same agents can run on your own server instead ([server mode](../05-power-features/02-server-mode.md)), in the [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md) on rooted phones, or on your PC ([Connect to PC](../05-power-features/03-connect-to-pc.md)). See [Where agents run](../06-settings/04-where-agents-run.md).

## Turn agents on and off

You chose your agents on first launch (**Choose your agents**). You can change that any time.

:::steps
### Open Settings → Agents

Tap **☰** (top left), then **Settings**, then **Agents**. The row shows which agents are on, for example **Claude Code**, **AGY + Claude** or **All agents**.

### Tick the agents you want

Tap an agent to turn it on or off. At least one stays on.

### Apply

Tap **Apply and restart app** (it says **No changes** until you change something). Confirm with **Restart app** in **Restart to apply?**.

The local server stops and the app restarts with the new agents, so nothing of a turned-off agent keeps running. Replies in progress stop.
:::

An agent you turn off doesn't run at all. Its settings row and its chats are hidden. The chats stay on the phone: turn the agent back on and they are there again.

The same page also has **Global context**, **Agent memory & history**, **EGM · Elephant-Goldfish** and **Vibrate when a chat finishes**. See [Settings → Agents](../06-settings/05-agents.md).

## Install and sign in

Each agent is installed and signed in from its own settings page, or from the card a new chat shows when it isn't ready:

| Agent | Install | Sign in |
| :--- | :--- | :--- |
| Antigravity | **Settings → Antigravity → Account & CLI → Install agy** | **Sign in with Google** |
| Claude Code | **Settings → Claude Code → Account & CLI → Install Claude Code** | **Sign in** (subscription or Console) |
| OpenCode | **Settings → OpenCode → OpenCode CLI → Install OpenCode** | Not needed for free models; providers in **Custom providers** |
| Codex | **Settings → Codex → Account & CLI → Install Codex** | **Sign in with ChatGPT** |

The steps are on each agent's page: [Antigravity](./02-antigravity.md), [Claude Code](./03-claude-code.md), [OpenCode](./04-opencode.md), [Codex](./05-codex.md).

## Pick the agent for a chat

With two or more agents on, a new chat shows the agent tabs at the top (for example **Antigravity · Claude Code · OpenCode · Codex**). Tap one before you send the first message. Each tab has a dot with the agent's state. With only one agent on, there are no tabs.

![A new chat: the agent tabs at the top and the Sign in card](/screens/main_empty_chat.webp "frame")

A chat stays with its agent. To ask another agent, start a new chat and pick it. You can run chats of different agents at the same time.

If the agent isn't ready, the new chat shows why, with a button to fix it: **Install**, **Sign in**, **Set up Claude Code**, **Restart server** and so on.

## Check the agents' state

Next to the chat title is a small dot: one slice per agent that is on. Green means ready. Tap it to see **AGENTS**: each agent's state (for example **Ready**, **Sign in required**, **Not installed**, **Offline**) with a button to fix it. At the bottom are **Server logs** and **Restart server**.

The account button at the bottom of the drawer (☰) shows one picture per agent. Tap it to see every agent's account, with **Sign out** and **Settings**.

## Troubleshooting

:::details An agent is missing from the agent tabs
It is turned off. Turn it on in **Settings → Agents** and tap **Apply and restart app**. With only one agent on, the tabs don't show at all.
:::

:::details An agent's row is missing in Settings
The **Antigravity**, **Claude Code**, **OpenCode** and **Codex** rows only show for agents that are on. Turn it on in **Settings → Agents**.
:::

:::details My chats of an agent are gone
You turned the agent off. Its chats are hidden, not deleted. Turn the agent back on.
:::

:::details The agent says "Not installed"
Tap **Install** on the new chat's card, or install it from the agent's settings page (see the table above).
:::

:::details The agents show "Offline" or "Server offline"
The local server that runs the agents isn't running. Tap the dot next to the chat title, then **Start** or **Restart server**. **Server logs** shows what went wrong. More in [Troubleshooting](../08-help/01-troubleshooting.md).
:::

:::cards
- [Antigravity](./02-antigravity.md) — Google's agent, with cloud agents and voice calls.
- [Claude Code](./03-claude-code.md) — Anthropic's agent.
- [OpenCode](./04-opencode.md) — Open source, 200+ providers and free models.
- [Codex](./05-codex.md) — OpenAI's agent, with your ChatGPT account.
- [Models, thinking and usage limits](./06-models-and-usage.md) — Pick a model and watch your limits.
- [Bring your own models](./07-bring-your-own-models.md) — Your own keys and local models.
:::
