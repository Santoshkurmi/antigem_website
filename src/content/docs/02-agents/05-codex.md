---
title: Codex
description: "OpenAI's codex CLI: install, ChatGPT sign-in, usage limits, permissions, plan mode, commands, MCP, plugins and skills."
updated: 2.0.4-beta.2
---

Codex is OpenAI's coding agent. AntiGem runs OpenAI's official `codex` CLI in its Linux environment and shows its work as normal chat. You use it with your ChatGPT account and its plan.

**Where:** ☰ (top left) → **Settings** → **Codex**

The **Codex** row only shows when Codex is turned on in **Settings → Agents** (see [Choosing an agent](./01-overview.md)). It shows Codex's state, for example **Ready** or **Not installed**.

The Codex settings have six pages:

| Page | What it is for |
| :--- | :--- |
| **Account & CLI** | Sign in with ChatGPT, install, update and restart Codex |
| **Usage limits** | How much of your plan's limits is used, and when they reset |
| **Permissions** | What Codex asks before acting in new chats |
| **MCP servers** | Tools Codex can call: presets and your own servers |
| **Plugins** | Install plugins from Codex' catalog or any GitHub marketplace |
| **Skills** | Add skills from GitHub, update or remove them |

## How it works

The app starts one Codex server (`codex app-server`) that all Codex chats share. It is the same connection the Codex extension for VS Code uses. Codex keeps its chats and its sign-in in the `~/.codex` folder of the Linux environment.

Codex runs where your agents run: on this phone, or on your server in [server mode](../05-power-features/02-server-mode.md). See [Where agents run](../01-getting-started/02-key-concepts.md#where-agents-run).

## Set it up

:::steps
### Install Codex

Open **Settings → Codex → Account & CLI** and tap **Install Codex**. You can also open a new Codex chat: it shows **Codex is not installed** with an **Install** button.

- On this phone, the app installs the Termux package (the same as `pkg install codex` in the terminal).
- On a server, the app downloads OpenAI's official Linux build into `~/.local/bin`.

The install log shows under the button. When it says **Install: done**, Codex is ready to sign in.

![Settings → Codex → Account & CLI after install, not signed in yet](/screens/codex_account.webp "frame")

### Sign in with ChatGPT

On the same page, tap **Sign in with ChatGPT**. Use the ChatGPT account whose plan Codex should use (Free, Plus, Pro, Business…).

Your browser opens. Sign in there. The app shows "Finish signing in in your browser. Codex picks it up by itself." When it is done, the page shows your email and plan.

### If the browser can't come back to the app, use a code

Tap **Use a code** instead. The app shows a short code. Tap **Open sign-in page**, sign in with your ChatGPT account and type the code.

> [!NOTE]
> ChatGPT may first ask you to allow code sign-in: in ChatGPT, open **Settings → Security**. In [server mode](../05-power-features/02-server-mode.md) you always get a code, because the browser can't reach the server.

### Start a chat

Start a new chat, pick **Codex** in the agent tabs, and send a message.
:::

## Account & CLI

### Codex CLI

Shows the Codex version and whether it is **running** or **starts when needed**, plus where the `codex` program is.

- **Check for updates** installs a newer Codex if there is one. The log shows **Update: done** or **Update: failed**.
- **Restart** stops Codex and starts it again. Replies that are running stop. Use it when Codex hangs or after you changed its files by hand.

### Account

Shows your email and plan, for example `you@example.com · Plus plan`. Tap the refresh icon to check again.

- **Sign out** signs Codex out of your ChatGPT account.
- **Cancel** stops a sign-in that you started.

## Usage limits

Shows your plan and how much of each limit is used: one row per limit window, for example **5-hour limit** and **7-day limit**, with **N% used**, a bar and **resets in …**. The bar turns red at 90%.

Every Codex model counts toward the same limits. The **Usage limits** row in **Settings → Codex** shows the first limit, for example **35% used**. The model picker shows the same limits as the share left (see [Models, thinking and usage limits](./06-models-and-usage.md)).

If you see "No limits reported for this account.", your account has no plan limits that Codex reports.

## Permissions

**Approvals:** what Codex asks before acting. This sets the mode for new chats. Each chat can change it from the chip above the message box.

**Default:** Auto

### Read only

Codex reads the project. It asks before changing files or running anything that needs more.

Use it when you only want answers or a review, and nothing changed.

### Ask first

Codex edits files in the project, but asks before running commands (except known safe ones).

Use it when you want to see each command before it runs.

### Auto

Codex's default. It edits files and runs commands inside the project. It asks before going outside the project or online.

Good for most work.

### Full access

No sandbox and no questions: Codex can change anything and use the network. Its chip is highlighted, so you notice.

> [!WARNING]
> Use **Full access** only in a project you can restore (for example with git or [project checkpoints](../05-power-features/11-project-checkpoints.md)).

## In the chat

Above the message box, Codex chats have a row of chips:

| Chip | What it does |
| :--- | :--- |
| **Plan** / **Plan mode** | Turns plan mode on or off (see below). |
| **Reasoning: …** | How long Codex thinks before answering. Only shows when the model has levels. |
| **Read only** / **Ask first** / **Auto** / **Full access** | The approval mode of this chat. |
| **Implement plan** | Shows after Codex made a plan in plan mode. |

### Model

Tap the model name in the message bar to open **Select model**. It lists the models your account can use. The default one says **· default**. Above the list, the plan's limits show for **All models**, because every model shares them. **Codex account and settings** at the bottom opens **Settings → Codex**.

### Reasoning

The **Reasoning** sheet sets how long Codex thinks before answering:

- **Low** (and **Minimal** or **None** where the model has them): fast answers for simple tasks.
- **Medium**: balanced, the usual choice.
- **High**: thinks longer on hard problems (uses more of your limits).
- **Extra high** and above: longest thinking (uses the most of your limits).
- **Default**: the model's own default.

It applies to the next message and to new chats. **Default:** the model's default.

### Plan mode

In plan mode Codex plans before changing anything. Turn it on with the **Plan** chip, or type `/plan` (or `/plan` and the task, which sends the task in plan mode).

When the plan is ready, tap **Implement plan**. The app turns plan mode off and asks Codex to carry out the plan.

### Commands

Type `/` in the message box to see them (all but `/stop` are in the menu).

| Command | What it does |
| :--- | :--- |
| `/compact` | Summarizes the chat so far to free up context. |
| `/review` | Reviews the uncommitted changes of the project. Add text to say what to check: `/review the login code`. |
| `/plan` | Turns plan mode on (with text: plans that task). |
| `/fork` | Copies this chat into a new one. |
| `/stop` | Stops the reply. |
| `/model` | Opens the model picker. |
| `/status` | Opens **Settings → Codex** (account, usage limits, settings). `/usage`, `/limits`, `/account`, `/login` and `/logout` do the same. |
| `/mcp` | Opens **Settings → Codex → MCP servers**. |
| `/new` | Starts a new Codex chat. `/clear` does the same. |

Your Codex [skills](../04-tools-and-extensions/05-skills.md) show in the same menu as `/skill-name`. See also [Slash commands](../04-tools-and-extensions/06-slash-commands.md).

### Messages you send while Codex works

You can keep typing while Codex works. A message you send then waits in a queue: a card above the message box shows **1 queued message · Sends when the agent is done**.

- **↑** (Send now) gives the message to Codex now. Codex reads it at its next step, in the running turn.
- **✕** deletes it from the queue.

### Approvals

When Codex wants to do something its mode doesn't allow, a request shows above the message box:

| Request | Your choices |
| :--- | :--- |
| **Run a command?** or **Allow network access?** | **Allow** · **Allow for this session** (Codex asks again after a restart) · **Always allow** a command prefix Codex suggests (Codex saves this rule) |
| **Change files?** | **Allow** · **Allow edits for this session** |
| **Grant more access?** | **Allow for this turn** · **Allow for this session** |
| An MCP server asks something | **Continue** |

Every request can also be denied. You can add a note ("Tell Codex what to do instead"), which Codex gets right away. See [Chat](../03-using-the-app/02-chat.md) for how the approval panel works.

## MCP servers

MCP servers give Codex more tools (see [MCP](../01-getting-started/02-key-concepts.md#mcp)). Servers you add here go into Codex's own config, so every Codex chat can use them, and so can the `codex` CLI in the terminal. They connect when a chat starts.

- **Quick presets** add the app's [built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md) in one tap: **Browser**, **Terminal**, **Android**, **Notes & To-dos**, **Jarvis**, **Theme**, **Plugin Developer**, **Mini App Developer**, **Custom Plugin MCP**, **Stitch**, **REA** and **Custom server**. An added preset says **Added**.
- **Servers (N)** lists your servers with their state: **Connected · N tools**, **Connecting…**, **Connects with the next chat**, **Needs sign-in**, **Disabled** or **Failed**. Tap **Edit** to change one, or the bin to remove it.

**Custom server** opens **Add an MCP server**: a **Name**, then **Remote (HTTP)** with a **URL** and **Headers**, or **Local (command)** with a **Command** and **Environment**. A local server runs in Codex's environment. Full guide: [Add your own MCP server](../04-tools-and-extensions/03-add-your-own-mcp-server.md).

## Plugins

Three tabs:

- **Installed**: your plugins, with **Uninstall**.
- **Discover**: plugins from Codex' catalog and your marketplaces. Search, then tap **Install**.
- **Marketplaces**: **Add a marketplace** from GitHub (`owner/repo`, `owner/repo@branch`, or a git URL). Open one to see and install its plugins, refresh it to get new ones, or remove it.

Plugins are loaded when a chat starts: start a new chat after you install or remove one.

## Skills

Add skills from a GitHub repository, update them or remove them. This works the same for every agent: see [Skills](../04-tools-and-extensions/05-skills.md). Start a new chat after you change skills.

## Troubleshooting

:::details "Codex is not installed"
Codex isn't in the Linux environment yet. Tap **Install** on the chat card, or **Install Codex** in **Settings → Codex → Account & CLI**. If the install log says **failed**, read its last lines: a broken internet connection is the usual cause. Try again.
:::

:::details "Sign in to Codex" or "Not signed in"
Codex is installed but has no account. Tap **Sign in** on the chat card, or **Sign in with ChatGPT** in **Account & CLI**.
:::

:::details The browser signed in, but the app still says "Not signed in"
The browser could not hand the sign-in back to Codex. Tap **Cancel**, then sign in with **Use a code**. If ChatGPT refuses the code, allow code sign-in in ChatGPT under **Settings → Security** first.
:::

:::details "Starting Codex…" doesn't go away
The local server is still starting, which takes a few seconds after the app opens. If it stays, tap the status dot next to the chat title: **Server logs** shows what went wrong, and **Restart server** starts it again.
:::

:::details "Turned off on the server" or "Server update needed"
"Turned off on the server" means the server was started with Codex off: tap **Restart**. "Server update needed" means the server has no Codex support yet: update it (see [Server mode](../05-power-features/02-server-mode.md)), then tap **Restart**.
:::

:::details "Server offline"
The server that runs the agents isn't running. Tap **Start**. If it doesn't start, see [Troubleshooting](../08-help/01-troubleshooting.md).
:::

:::details "Wait for the reply to finish first" or "Nothing to compact yet."
`/compact` and `/review` only work when Codex isn't replying, and `/compact` needs a chat with messages. Wait for the reply, or stop it, then try again.
:::

:::details "Send a message first: there is nothing to copy yet."
`/fork` copies a chat, so the chat needs at least one message first.
:::

:::details "This Codex is too old to manage plugins."
Update Codex in **Settings → Codex → Account & CLI** with **Check for updates**.
:::

:::details Codex hangs or doesn't answer
Open **Settings → Codex → Account & CLI** and tap **Restart**. Replies that are running stop, but your chats stay. If you see "Reconnecting…" above the message box, Codex is retrying by itself after an error: wait a moment.
:::

:::cards
- [Choosing an agent](./01-overview.md) — Compare the four agents.
- [Models, thinking and usage limits](./06-models-and-usage.md) — The model picker and your plan's limits.
- [MCP: how agents use tools](../04-tools-and-extensions/01-mcp-explained.md) — What MCP servers are.
- [Chat](../03-using-the-app/02-chat.md) — Messages, approvals and attachments.
:::
