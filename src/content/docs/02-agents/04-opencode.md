---
title: OpenCode
description: "The open-source agent: install, free models, 200+ providers, Build and Plan agents, approvals, effort, MCP and skills."
updated: 2.0.4-beta.2
---

OpenCode is an open-source coding agent. It works with 200+ providers using your own keys or subscriptions, with any OpenAI- or Anthropic-compatible API (local models too), and with OpenCode's own free models, which need no account at all.

**Where:** ☰ (top left) → **Settings** → **OpenCode**

The **OpenCode** row only shows when OpenCode is turned on in **Settings → Agents** (see [Choosing an agent](./01-overview.md)). It shows OpenCode's state, for example **Ready** or **Not installed**.

The OpenCode settings have five pages:

| Page | What it is for |
| :--- | :--- |
| **OpenCode CLI** | Install, update and restart OpenCode |
| **Permissions** | What OpenCode asks before acting, and the agent of new chats |
| **Custom providers** | Sign in or add an API key, or add any OpenAI- or Anthropic-compatible API manually |
| **MCP servers** | Tools OpenCode can call: presets and your own servers |
| **Skills** | Add skills from GitHub, update or remove them |

## How it works

The app starts one OpenCode server (`opencode serve`) that all OpenCode chats share. OpenCode talks to each provider in that provider's own format, so tools and thinking work well with many kinds of models.

OpenCode runs where your agents run: on this phone, or on your server in [server mode](../05-power-features/02-server-mode.md). Your provider keys are saved by OpenCode there. See [Where agents run](../01-getting-started/02-key-concepts.md#where-agents-run).

## Set it up

:::steps
### Install OpenCode

Open **Settings → OpenCode → OpenCode CLI** and tap **Install OpenCode**. The app downloads the official build (about 250 MB) into `~/.opencode/bin`. You can also open a new OpenCode chat: it shows **OpenCode is not installed** with an **Install** button.

The install log shows under the button. When it says **Install: done**, OpenCode starts.

### Try it with a free model

You don't need an account to start. Open a new chat, pick **OpenCode** in the agent tabs, tap the model name in the message bar and pick a model marked **free**.

### Connect your own provider

Open **Settings → OpenCode → Custom providers**. Tap one of the tiles under **Connect** (for example **ChatGPT / OpenAI** or **OpenRouter**), or **All providers** to search every provider. Sign in or paste an API key. Its models then show in the model picker.

![Settings → OpenCode → Custom providers: the Connect tiles and All providers](/screens/opencode_providers.webp "frame")
:::

## OpenCode CLI

Shows OpenCode's state, version and whether the **server running**, plus where the `opencode` program is.

- **Check for updates** installs a newer OpenCode if there is one.
- **Restart OpenCode** (or **Start OpenCode** when it isn't running) starts it again. Replies that are running stop.

While OpenCode isn't installed, the page also shows the official install command, to run in a terminal on the server:

```bash title="Terminal"
curl -fsSL https://opencode.ai/v2/install | bash
```

## Permissions

### Approvals

What OpenCode asks before doing things. It applies to new chats and to the chat on screen. Each chat can change it from the chip above the message box.

**Default:** Ask first

- **Ask first**: asks before commands, file changes and web access. Reading the project is allowed.
- **Allow all**: commands, edits and web access run without asking. The chip is highlighted so you notice.
- **OpenCode rules**: OpenCode's own rules from its config. By default most tools run without asking.

Choose **Ask first** while you get to know a model. Choose **Allow all** for long jobs in a project you can restore (git or [project checkpoints](../05-power-features/11-project-checkpoints.md)).

### Agent for new chats

Which OpenCode agent new chats start with.

**Default:** Build

- **Build** makes changes: it edits files and runs commands to get the job done.
- **Plan** only reads: it explores the code and plans the work, without changing files.

Agents you made yourself in OpenCode's config show here too. Switch any time from the chip above the message box.

## Custom providers

This page has four parts: **Your providers**, **Models**, **Connect** and **Manual**.

### Your providers

The providers you are connected to, each with its accounts (**API key** or **Signed in**). "Nothing connected yet: OpenCode's free models work without an account." shows until you connect one.

- **Add account** adds another account to the same provider.
- **Use this** switches to that account when a provider has several (the one in use says **in use**).
- **Disconnect** removes the account.

### Models

Every provider that has models (your accounts, OpenCode's free models, your custom endpoints), each with a switch. Turn a provider or a single model off to keep it out of the model picker. Tap a provider to see its models, with **All on** and **All off**, and a search box for long lists.

**Default:** everything on. The app keeps this choice; OpenCode itself still has the models.

### Connect

Quick tiles for the subscriptions people use most:

| Tile | Hint |
| :--- | :--- |
| **ChatGPT / OpenAI** | ChatGPT Plus / Pro, or an API key |
| **GitHub Copilot** | Your Copilot subscription |
| **Claude subscription** | Uses Claude Code's login |
| **SuperGrok / xAI** | Grok subscription or API key |
| **OpenCode Zen** | OpenCode Console account |
| **OpenCode Go** | OpenCode's plan · key |
| **OpenRouter** | Hundreds of models · key |
| **Anthropic API** | Claude models · key |

A connected tile says **Connected · tap to add another**. **All providers** opens **Connect a provider**: search all of them and tap one.

### Ways to sign in

When you tap a provider, it shows **Connect your account** and the ways it offers:

- **API key**: paste the provider's key and tap **Connect**. OpenCode saves it on the server. A provider keeps one key: a new key replaces the old one.
- A browser sign-in: tap **Start sign-in**, then sign in on the provider's page.
- A code sign-in: tap **Start sign-in** and the app shows a short code. Tap **Copy code & open sign-in page** and paste the code on the provider's site. This works from any device.
- **Use the server's login**: uses credentials already set up on the server.

The names of the ways come from the provider, so they can differ a little.

While you sign in, the sheet says "Waiting for you to finish signing in" with the time left. If the provider shows a code to paste back, paste it into **Code from the provider** and tap **Submit code**. **Other ways** goes back to the list.

> [!NOTE]
> In [server mode](../05-power-features/02-server-mode.md), a browser sign-in ends on a page that can't load (an address starting with `http://127.0.0.1` or `http://localhost`). That's expected: copy the whole address from the browser's address bar, paste it under **After you sign in** and tap **Finish sign-in**.

### Manual

Add any OpenAI-compatible API (Ollama, LM Studio, vLLM, LiteLLM, a company gateway…) or an Anthropic-compatible one by its address, with **Add manually**. The full guide, with model switches and local models, is in [Bring your own models](./07-bring-your-own-models.md).

## In the chat

Above the message box, OpenCode chats have a row of chips:

| Chip | What it does |
| :--- | :--- |
| **Build** / **Plan** | The agent of this chat. Switching applies to the next message. |
| **Ask first** / **Allow all** / **OpenCode rules** | The approval mode. Applies to this chat right away and to new chats. |
| **Effort · …** | How hard the model thinks on each reply. Only for models that have levels. |
| **Thinking** / **No thinking** | Turns thinking on or off. Only for models that can think. |

Some models always think: tapping **Thinking** then says "*Model* always thinks; it can't be turned off." The app remembers the effort and thinking you picked for each model. See [Models, thinking and usage limits](./06-models-and-usage.md).

A line above the chips shows what OpenCode does in the background, for example "Compacting the conversation…" when the chat gets too long for the model.

### Model

Tap the model name in the message bar to open **Select model**. Models are grouped by provider, with a search box when there are many. Each model shows its provider, its context size (for example **128K context**) and **free** when it costs nothing. **Connect providers or add an OpenAI-compatible endpoint** at the bottom opens the OpenCode settings.

If you attach an image to a model that can't read images, the message bar warns you: tap to switch the model, or send anyway.

### Approvals

When OpenCode needs your OK, a request shows above the message box, for example **Run a command?**, **Change a file?**, **Create a file?**, **Fetch a web page?**, **Search the web?** or **Work outside the project?**

- **Allow** allows it once.
- **Always allow** (for example `git *`): OpenCode remembers this for the project.
- **Deny**, with an optional note ("Tell OpenCode what to do instead").

See [Chat](../03-using-the-app/02-chat.md) for how the approval panel works.

### Commands

Type `/` to see OpenCode's own commands and your skills. See [Slash commands](../04-tools-and-extensions/06-slash-commands.md).

## MCP servers

MCP servers give OpenCode more tools (see [MCP](../01-getting-started/02-key-concepts.md#mcp)). Servers you add here work in every OpenCode chat and survive restarts. They connect when a chat starts.

- **Quick presets** add the app's [built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md) in one tap: **Browser**, **Terminal**, **Android**, **Notes & To-dos**, **Jarvis**, **Theme**, **Plugin Developer**, **Mini App Developer**, **Custom Plugin MCP**, **Stitch**, **REA** and **Custom server**.
- **Servers (N)** lists your servers. Tap **Edit** to change one, or the bin to remove it.

**Custom server** opens a dialog: a **Name**, then **Remote (HTTP)** with a **URL** and **Headers**, or **Local (command)** with a **Command** and **Environment**. A local server runs in OpenCode's environment. Full guide: [Add your own MCP server](../04-tools-and-extensions/03-add-your-own-mcp-server.md).

## Skills

Add skills from a GitHub repository, update them or remove them. This works the same for every agent: see [Skills](../04-tools-and-extensions/05-skills.md). Start a new chat after you change skills.

## Troubleshooting

:::details "OpenCode is not installed"
OpenCode isn't in the Linux environment yet. Tap **Install** on the chat card, or **Install OpenCode** in **Settings → OpenCode → OpenCode CLI**. The download is about 250 MB, so use a good connection. If the log says **failed**, try again.
:::

:::details "Starting OpenCode…" doesn't go away
The server needs a few seconds after the app opens. If it stays, tap the status dot next to the chat title: **Server logs** shows what went wrong, and **Restart server** starts it again.
:::

:::details "OpenCode is unavailable" or "OpenCode is not available: … Check Settings → OpenCode."
Open **Settings → OpenCode → OpenCode CLI** and read the error under the state. Tap **Restart OpenCode**. If the card shows **Server logs**, tap it to see more.
:::

:::details "Turned off on the server" or "Server update needed"
"Turned off on the server" means the server was started with OpenCode off: tap **Restart**. "Server update needed" means the server has no OpenCode support yet: update it (see [Server mode](../05-power-features/02-server-mode.md)), then tap **Restart**.
:::

:::details A provider is connected, but its models are not in the picker
Open **Settings → OpenCode → Custom providers** and check **Models**: the provider or the model may be switched off. Then tap the refresh icon in the model picker.
:::

:::details "The sign-in expired. Start it again."
Sign-ins and codes only work for a few minutes. Close the sheet, tap the provider again and start over.
:::

:::details The browser shows a page that can't load after signing in
You use [server mode](../05-power-features/02-server-mode.md). Copy the whole address from the browser's address bar and paste it under **After you sign in**, then tap **Finish sign-in**.
:::

:::details The model doesn't see my image
The model can't read images. Pick a model that can (the message bar warns you). For a custom provider, turn on **Images** for that model (see [Bring your own models](./07-bring-your-own-models.md)).
:::

:::cards
- [Bring your own models](./07-bring-your-own-models.md) — Custom endpoints and local models.
- [Models, thinking and usage limits](./06-models-and-usage.md) — Effort, thinking and the model picker.
- [Use free models](../07-guides/03-use-free-models.md) — Start without paying.
- [MCP: how agents use tools](../04-tools-and-extensions/01-mcp-explained.md) — What MCP servers are.
:::
