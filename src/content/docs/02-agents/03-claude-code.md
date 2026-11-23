---
title: Claude Code
description: "Anthropic's claude CLI: install, sign-in, plan usage, chat controls, permission modes, rules, MCP, plugins, CLAUDE.md and memory."
updated: 2.0.4-beta.2
---

Claude Code is Anthropic's coding agent. AntiGem runs Anthropic's official `claude` CLI in its Linux environment and shows its work as normal chat. You use it with a Claude subscription (Pro or Max), an Anthropic Console account, or another provider's API.

**Where:** ☰ (top left) → **Settings** → **Claude Code**

The **Claude Code** row only shows when Claude Code is turned on in **Settings → Agents** (see [Choosing an agent](./01-overview.md)). It shows your plan (for example **Pro** or **Max**), **Signed out**, or another state.

The Claude Code settings have nine pages:

| Page | What it is for |
| :--- | :--- |
| **Account & CLI** | Sign-in, plan usage, install and update Claude Code |
| **Chat defaults** | Model, effort, thinking, permission mode, output style |
| **Custom providers** | OpenRouter, Kimi and other Anthropic-compatible APIs |
| **Permission rules** | What Claude may do without asking |
| **MCP servers** | Tools Claude can call |
| **Plugins** | Installed plugins, catalog and marketplaces |
| **Skills** | Add skills from GitHub, update or remove them |
| **Memory** | Instructions (`CLAUDE.md`) and the notes Claude saved |
| **Advanced** | Edit `~/.claude/settings.json` directly |

## How it works

Each Claude chat runs its own `claude` process. The first message of a chat starts it, which can take a little while on a phone. Claude Code keeps its settings in `~/.claude/settings.json`, the same file the `claude` command in the terminal uses, so changes in one show in the other.

Claude Code runs where your agents run: on this phone, or on your server in [server mode](../05-power-features/02-server-mode.md). See [Where agents run](../01-getting-started/02-key-concepts.md#where-agents-run).

## Set it up

:::steps
### Install Claude Code

Open **Settings → Claude Code → Account & CLI** and tap **Install Claude Code**. You can also open a new Claude chat: it shows **Claude Code not found** with **Set up Claude Code**, which opens this page.

The app downloads the official Claude Code release (about 250 MB per version) and keeps the newest few versions. The log shows under the button.

### Sign in

On the same page, tap **Sign in**. The **Sign in to Claude Code** dialog asks how you pay for Claude:

- **Claude subscription (Pro / Max)**: your claude.ai plan, with its 5-hour and weekly limits.
- **Anthropic Console (API billing)**: you pay per use with your Console account.

Your browser opens on claude.com. Approve the sign-in there and come back. The dialog closes by itself when you are signed in.

![The Sign in to Claude Code dialog with the two ways to pay](/screens/claude_login.webp "frame")

### If the browser can't come back to the app, use a code

In the dialog, tap **Browser can't return to the app? Sign in with a code**. After you approve, Claude shows a code. Paste it into the field (it looks like `code#state`) and tap **Submit code**.

This always works, also in [server mode](../05-power-features/02-server-mode.md).

### Start a chat

Start a new chat, pick **Claude Code** in the agent tabs, and send a message.
:::

> [!TIP]
> You don't need a Claude account to use Claude Code with another provider's models (OpenRouter, Kimi, DeepSeek, Z.ai…). See [Bring your own models](./07-bring-your-own-models.md).

## Account & CLI

### Claude Code CLI

Shows the installed version and where the `claude` program is. **Check for updates** installs a newer version if there is one. The log shows under the button.

### Account

Shows your email, your plan (**Plan: Pro**, **Plan: Max**…) and how you signed in. **Sign out** signs Claude Code out.

### Plan usage

How much of your plan's limits is used, with a bar and when each one resets:

- **5-hour limit**: the current session.
- **Weekly limit (all models)**.
- **Weekly limit (*model*)**: a model with its own weekly share, on plans that have one.

Tap the refresh icon for fresh numbers. With an Anthropic Console account you see "Plan limits are not available for this account (API billing has no 5-hour / weekly limits)." See [Models, thinking and usage limits](./06-models-and-usage.md).

## In the chat

Above the message box, Claude chats have a row of chips:

| Chip | What it shows | Tap it to |
| :--- | :--- | :--- |
| **Manual** / **Accept edits** / **Plan** / **Auto** / **Don't ask** | The permission mode | Change the mode |
| **Effort · …** | The effort level. Only for models that have levels. | Change the effort |
| **N agents** | Subagents this chat started that are working. Shows once there is one. | See the list and open one |
| **Thinking** / **No thinking** | Whether Claude reasons first | Turn thinking on or off |
| **Cache 4m** / **Cache cold** | The prompt cache | Read what it means |
| **Context 12%** | How full the context window is | See what uses it |
| **5h 30%** | How much of your 5-hour limit is used. Only for Claude's own models. | – |

### Permission mode

What Claude may do without asking you. Each chat can have its own mode.

**Default:** Auto (change it in **Chat defaults**)

- **Manual**: asks before edits and commands.
- **Accept edits**: applies file edits without asking.
- **Plan**: explores and proposes a plan, no changes (see Plan approval below).
- **Auto**: Claude decides what is safe to run, and asks only for risky actions.
- **Don't ask**: never asks; denies anything that your permission rules don't allow (see Permission rules below).

**Auto** only shows for models that support it. "This model has no Auto mode; chats on it start in Manual." The app never offers Claude's "bypass all permissions" mode. For fewer questions without giving up checks, turn on **Sandbox commands** (see Permission rules below).

### Effort

How hard Claude works on each reply. It shows only for models that have levels.

- **Default**: the model's own default. The chip may show the level the chat really runs, for example **Effort · Default (High)**.
- **Minimal**: barely any reasoning, fastest replies.
- **Low**: quick answers with light reasoning.
- **Medium**: balanced speed and depth.
- **High**: thorough work on hard tasks.
- **Extra high**: extra depth for complex changes.
- **Max**: most thorough; uses plan limits fastest.

**Default:** Default (change it in **Chat defaults**). Higher levels take longer and use more of your limits.

### Thinking

When on, Claude reasons before answering; the chat shows a short summary of it. Tap the chip to switch it. **Default:** on (change it in **Chat defaults**).

### Prompt cache

Claude Code caches the start of the conversation, so the next message costs less. The chip counts down the minutes the cache stays warm (a 5-minute or 1-hour cache). When it says **Cache cold**, your next message sends the whole conversation again, which costs more. If you plan to continue, send your next message before it runs out.

### Context window

The chip shows how much of the model's [context window](../01-getting-started/02-key-concepts.md#context-window) is used. Tap it to see how many tokens are used and by what. Send `/compact` to summarize the conversation and free space.

### Model, effort and fast mode

Tap the model name in the message bar to open **Select model**:

- Claude's models, grouped by the plan limits they count against, with the share left and when it resets.
- Your [custom providers](./07-bring-your-own-models.md), each in its own section marked **custom provider**.
- **Effort**: the same levels as the chip.
- **Reasoning**: the **Thinking** switch, and **Fast mode** for models that support it. Send `/fast` in the chat to turn fast mode on or off.

"This chat is running …" under the title shows the model the chat really uses. More in [Models, thinking and usage limits](./06-models-and-usage.md).

### Plan approval

In **Plan** mode, Claude explores and writes a plan without changing anything. Then a **Review the plan** card shows:

- **Approve · auto-accept edits**: Claude carries out the plan and applies edits without asking.
- **Approve · review each edit**: Claude carries out the plan and asks before each edit.
- **Keep planning**: tell Claude what should change in the plan.

### Approvals

When Claude needs your OK, a request shows above the message box, for example **Run a command?**, **Edit a file?**, **Create a file?**, **Fetch a web page?** or **Read outside the project?** It shows the command or the change.

- **Allow** allows it once.
- **Always…** lists the rules Claude suggests, for example "Always allow Bash(npm test) in this project (only me)". The choices end with **for this session**, **in this project (only me)**, **in this project (shared)** or **everywhere**.
- **Deny**, with an optional note ("Tell Claude what to do instead").

See [Chat](../03-using-the-app/02-chat.md) for how the approval panel works.

### Slash commands the app answers

Most `/` commands go to Claude Code. These open a screen of the app instead:

| Command | What it does |
| :--- | :--- |
| `/usage` or `/cost` | Shows **Usage**: your 5-hour and weekly limits, and what this chat would cost at API prices |
| `/context` | Shows the **Context window** dialog |
| `/model` | Opens the model picker. `/model` and a name switches to that model. |
| `/effort` | Opens the model picker. `/effort high` sets the effort; `/effort default` goes back to the model's default. |
| `/mcp` | Opens **Settings → Claude Code → MCP servers** |
| `/config` | Opens **Settings → Claude Code → Chat defaults** |
| `/clear` or `/new` | Starts a new Claude chat |
| `/rename` and a name | Renames the chat |

See [Slash commands](../04-tools-and-extensions/06-slash-commands.md) for your own commands.

## Chat defaults

These apply to new Claude chats. They are saved in `~/.claude/settings.json`, so the `claude` command in the terminal uses them too.

### Default model

The model new chats start with. **Default:** **Default** (Claude Code's own choice).

### Default effort

The effort new chats start with. Shows only when the model has levels. **Default:** **Default**.

### Thinking

"Reason before answering." **Default:** on.

### Default permission mode

The mode new chats start in: **Manual**, **Accept edits**, **Plan**, **Auto** or **Don't ask** (see Permission mode above). **Default:** **Auto**.

### Output style

How Claude writes its replies. Only shows when Claude Code lists output styles. **Default:** **default**.

### Dictation language

The language code for voice input in Claude chats, for example `en`, `es`, `de` or `ja`. Type it and tap **Save**. **Default:** `en`.

## Permission rules

### Sandbox commands

Runs Claude's shell commands in an isolated container (no network, limited files). Commands that stay inside it run without asking. It is the safe way to get fewer questions.

**Default:** off. If your device can't run it, the row says "Not available here" and why, and the switch is off.

### Add a rule

Rules say what Claude may do without asking. Type a rule in the CLI's syntax, pick **Allow**, **Ask** or **Deny**, and tap **Add**. Examples:

```text title="Rule examples"
Bash(npm test)
Bash(git log *)
Read(./src/**)
Edit(docs/**)
WebFetch(domain:github.com)
mcp__server__tool
```

**Deny** wins over **Ask**, and **Ask** wins over **Allow**.

### Your rules

Three lists: **Allowed without asking**, **Always ask** and **Never allowed**. Tap the bin next to a rule to remove it. These are the rules for all projects.

## MCP servers

MCP servers give Claude more tools (see [MCP](../01-getting-started/02-key-concepts.md#mcp)). The list includes the servers of the project that is open.

- **Quick presets** add the app's [built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md) in one tap: **Browser**, **Terminal**, **Android**, **Notes & To-dos**, **Jarvis**, **Theme**, **Plugin Developer**, **Mini App Developer**, **Custom Plugin MCP**, **Stitch**, **REA** and **Custom server**.
- **Configured servers (N)** lists your servers and their tools. Claude Code starts each server to list its tools; this can take a few seconds.

**Custom server** opens **Add MCP server**: a **Name**, a **Transport** (`stdio`, `http` or `sse`) and **Available in**:

- **All projects**
- **This project (me)**: only you, only in the open project.
- **This project (.mcp.json)**: saved in the project, so everyone who opens it gets the server.

The two project choices need an open project. A `stdio` server needs its **Command and arguments** (and **Environment**), the others a **URL** (and **Headers**). Full guide: [Add your own MCP server](../04-tools-and-extensions/03-add-your-own-mcp-server.md).

## Plugins

Three tabs:

- **Installed**: your plugins, with **Update** and **Uninstall**.
- **Discover**: the plugins of every marketplace. Search, then tap **Install**.
- **Marketplaces**: a marketplace is a catalog of plugins (a git repo with a `marketplace.json`). **Add a marketplace** with a GitHub `owner/repo`, a git URL, or a URL to `marketplace.json`. Tap one to see and install its plugins; refresh it to get its newest plugins.

The catalog can take a few seconds to load.

## Skills

Add skills from a GitHub repository, update them or remove them. This works the same for every agent: see [Skills](../04-tools-and-extensions/05-skills.md). Start a new chat after you change skills.

## Memory

### Instructions (CLAUDE.md)

Rules Claude follows in every chat, for example "Run the tests before committing". Pick where they apply:

- **All projects**: your own `CLAUDE.md`, used in every project.
- The open project's name: the project's `CLAUDE.md`, used only there.

Type and tap **Save**. New chats read it right away. A chat that is already running reads it the next time its Claude process starts.

### Claude's memory

Notes Claude saved by itself while working in this project. This is what Claude checks when you ask what it remembers. Tap a note to read it, or the bin to delete it ("Claude forgets what this note says.").

For memory that every agent shares, see [Agent memory](../04-tools-and-extensions/08-agent-memory.md).

## Advanced

Every Claude Code setting lives in `~/.claude/settings.json`: permissions, hooks, environment variables, model, status line… This page shows the whole file. Edit it and tap **Validate & save**; **Reload** reads it again. The app refuses text that is not valid JSON. Changes apply to new Claude chats.

> [!WARNING]
> Only change what you understand. A wrong setting here can stop Claude Code from starting.

## Custom providers

Use the models of OpenRouter, Kimi (Moonshot), DeepSeek, Z.ai (GLM) or any other Anthropic-compatible API in Claude Code, with your own key. They show in the model picker next to Claude's own. The full guide is [Bring your own models](./07-bring-your-own-models.md).

## Troubleshooting

:::details "Claude Code not found"
The `claude` CLI isn't installed. Tap **Set up Claude Code**, then **Install Claude Code**. After it is done, tap **Check again** on the chat card.
:::

:::details "Sign in to Claude Code" or "Claude Code is signed out"
Claude Code is installed but signed out. Tap **Sign in**. If you only want to use another provider's models, you can skip this and add a [custom provider](./07-bring-your-own-models.md).
:::

:::details The browser approved the sign-in, but the app still waits
The browser could not hand the sign-in back. In the dialog, tap **Browser can't return to the app? Sign in with a code**, approve again, paste the code and tap **Submit code**. **Cancel sign-in** stops a sign-in that is stuck.
:::

:::details "Restart the local server" or "Restart needed"
The running local server can't run Claude Code yet (it is older, or was started with Claude Code off). Tap **Restart server**.
:::

:::details "Local server offline"
Claude Code runs through the local server. Tap **Retry**. If it stays offline, tap **Server logs** and see [Troubleshooting](../08-help/01-troubleshooting.md).
:::

:::details "Couldn't check Claude Code"
The status check failed, but you can still send a message. Tap **Check again**. If messages fail too, restart the server from the status dot next to the chat title.
:::

:::details The first reply takes long
The first message of a chat starts Claude Code, which can take a little while on a phone. Later messages in the same chat are faster.
:::

:::details The model picker says "Sign in to Claude Code … to use Claude's models"
Claude's own models need the Claude login. Sign in, or pick a model of a custom provider.
:::

:::details "No models loaded"
Claude Code hasn't listed its models yet. Tap **Try again** or the refresh icon at the top of the picker.
:::

:::details I changed a setting, but a running chat doesn't use it
A running chat keeps the settings its Claude process started with. Open the chat list, open the chat's menu and tap **Restart chat**. The conversation is kept.
:::

:::details "Switch provider in this chat?"
You picked a model of another provider in a running chat. Moving a chat to another provider sends the whole conversation again without cache, so the next reply costs much more, and thinking or Auto mode may not carry over. Tap **Start a new chat with it** (best), **Cancel**, or **Switch anyway**.
:::

:::details Auto is missing from the permission modes
The model has no Auto mode, or the chat runs on a custom provider. Chats on it start in **Manual**.
:::

:::cards
- [Bring your own models](./07-bring-your-own-models.md) — OpenRouter, Kimi, DeepSeek, Z.ai and more.
- [Models, thinking and usage limits](./06-models-and-usage.md) — The model picker and your limits.
- [MCP: how agents use tools](../04-tools-and-extensions/01-mcp-explained.md) — What MCP servers are.
- [Chat](../03-using-the-app/02-chat.md) — Messages, approvals and attachments.
:::
