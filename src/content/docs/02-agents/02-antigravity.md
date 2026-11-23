---
title: Antigravity
description: "Google's agy CLI: install, Google sign-in and several accounts, models and quota, security settings, MCP, skills, cloud agents and voice calls."
updated: 2.0.4-beta.2
---

Antigravity is Google's coding agent. AntiGem runs Google's official `agy` CLI in its Linux environment and shows its work as normal chat. You sign in with your Google account and use the Gemini and Claude models of your Google plan.

**Where:** ☰ (top left) → **Settings** → **Antigravity**

The **Antigravity** row only shows when Antigravity is turned on in **Settings → Agents** (see [Choosing an agent](./01-overview.md)). Its page has six rows:

| Row | What it is for | What the row shows |
| :--- | :--- | :--- |
| **Account & CLI** | Google sign-in, agy version and install | The agy version, or **Not installed** |
| **Cloud agents** | Antigravity chats on a Google cloud machine | **On** or **Off** |
| **Voice calls** | The Voice call tile and shortcut, and the floating call window | **Floating on** when the floating window is on |
| **MCP Servers** | Tools Antigravity can call | **N active**, **All off** or **None** |
| **Skills & Plugins** | Skills, plugins and Google's plugin store | **N skills · N plugins** |
| **Commands & Permissions** | Auto-run policy, sandbox mode, and tool approvals | **Auto-run**, **Smart safety** or **Ask first** |

## How it works

`agy` runs as a hub, the [Antigravity hub](../01-getting-started/02-key-concepts.md#the-antigravity-hub), which the local server starts and watches. All Antigravity chats go through it. Your Google sign-in, MCP servers, skills and plugins live in agy's own folders (`~/.gemini`), so the `agy` command in the terminal sees the same things.

Antigravity runs where your agents run: on this phone, or on your server in [server mode](../05-power-features/02-server-mode.md). See [Where agents run](../01-getting-started/02-key-concepts.md#where-agents-run).

## Set it up

:::steps
### Install agy

Open **Settings → Antigravity → Account & CLI** and tap **Install agy**. You can also open a new Antigravity chat: it shows **Antigravity is not installed** with an **Install** button.

The app uses Google's official installer (`antigravity.google/cli/install.sh`), which puts `agy` into `~/.local/bin`. The log shows on the page. When agy is installed, the hub starts.

### Sign in with Google

On the same page, under **Account**, tap **Sign in with Google**. (In a new chat you can also tap **Sign In** on the **Sign in to Antigravity** card.)

Your browser opens. Sign in with your Google account and come back to the app. If the page still says "Finish signing in with Google in your browser.", tap **Check**. When it is done, the page shows your name, email and plan.

### Pick a model

Start a new chat, pick **Antigravity** in the agent tabs, and tap the model name in the message bar. Pick a model and how much it thinks (**Low**, **Medium** or **High**). Then send a message.
:::

## Account & CLI

### Antigravity CLI (agy)

Shows the agy version and where it is installed.

- **Install agy** shows while agy isn't installed.
- **Check for updates** runs `agy update`. When a newer agy was installed, the server restarts so it is used: "Updated to agy *version*. The server restarted to use it."

agy also updates itself when you run it in a terminal. Voice calls need agy 1.5 or newer.

> [!NOTE]
> On the x86_64 app (emulators, Chromebooks), Google has no Android build of agy. The app installs Google's Linux x64 build and runs it through its own libraries. Its own updater is off, so use **Check for updates**.

### Account

Shows the Google account Antigravity uses: name, email and plan tier.

- **Sign in with Google** when you are signed out.
- **Check** and **Cancel** while a sign-in runs.
- **Sign out** to sign out.

### Saved accounts

Keep several Google accounts and switch between them. Antigravity uses the new one right away, without a restart.

- **Save** keeps a copy of the account you are signed in with ("Signed in now, not saved").
- **Switch** changes to a saved account. The one in use says **Active**.
- **Add account** signs you out and starts a new Google sign-in with the other account.
- The bin deletes the saved copy of an account. To use it again, you have to sign in again.

If the signed-in account isn't saved yet, the app asks first ("*email* isn't saved"): **Save and switch** keeps it, **Switch without saving** drops it. If a reply is running, the app warns that switching may stop it.

## Models and quota

The model name in the message bar shows the model of the chat and how much of its limit is left (for example **85%**, or **7d 40%** for a weekly limit). Tap it to open **Select model**:

- Models are grouped by their **quota group**: models in one group share the same limits. Each group shows its 5-hour and 7-day share left and when it resets.
- Each model has a **Low** / **Medium** / **High** selector: how much it thinks. Tapping the model itself picks its default level (or **Medium**).
- **Shown in chat** picks which limit the message bar shows: **5h** or **7d**.
- The pencil lets you move a model to another quota group if the app put it in the wrong one.

The whole picture (limits, thinking, tokens) is in [Models, thinking and usage limits](./06-models-and-usage.md).

## Approvals

When Antigravity needs your OK, a request shows above the message box, for example **Run a command?**, **Edit a file?**, **Read files?**, **Search the web?**, **Open a web page?** or **Generate an image?**

- **Allow** allows it once.
- **Always…** offers **For this conversation** (don't ask again in this chat), **In this workspace** (don't ask again in this project) and **Everywhere** (don't ask again anywhere).
- **Deny**, with an optional note ("Tell Antigravity what to do instead").

What needs approval at all is set in **Commands & Permissions** below. See [Chat](../03-using-the-app/02-chat.md) for how the approval panel works.

## Commands & Permissions

**Where:** **Settings → Antigravity → Commands & Permissions**

These are agy's own live settings, for all your projects ("Global Security & Policies"). The page loads them from the hub, so the hub must be running.

### Artifact Review Policy

Whether Antigravity asks you to review documents it creates (its [artifacts](../01-getting-started/02-key-concepts.md#artifacts)).

- **⚡ Auto (Turbo)**: edits and creates documents immediately without asking.
- **✋ Always Ask**: stops and asks for your approval before saving document edits.

### Security Presets

Controls running terminal commands and reading or writing files outside the project folder:

| Preset | Badge | What it allows |
| :--- | :--- | :--- |
| **🛡️ Default Mode** | Recommended | Terminal commands need your OK. Files outside the project need your OK. |
| **💻 Full Machine Mode** | Open Files | Terminal commands need your OK. Full read and write access to all files on the device. |
| **⚡ Turbo Mode** | Full Auto | Terminal commands run at once, and all files can be used. |
| **⚙️ Custom Granular Mode** | Custom | You set both parts yourself (see below). |

With **⚙️ Custom Granular Mode** selected, two more choices show:

- **Terminal Command Execution:** **✋ Ask Every Time** or **⚡ Auto-Run (Eager)**.
- **Files Outside Workspace:** **✋ Ask**, **✅ Allow** or **🚫 Deny**.

Choose **🛡️ Default Mode** unless you have a reason. Use **⚡ Turbo Mode** only in a project you can restore.

### Terminal Sandbox Isolation

When on, commands run in a sandbox without network access. When off, they run directly in the app's Linux environment. The page calls off "Recommended for Hub".

### Review File Edits & Writes

When on, Antigravity asks before it saves file edits or writes code to disk. **Default:** off.

### Granular Permission Grants

Your own rules: allow, deny or ask for single commands, MCP tools or file paths. Filter the list by **⌨️ Command**, **🔌 MCP**, **📖 Read** or **✏️ Write**, or remove a rule with its bin.

**Add Rule** opens **Add Permission Grant Rule**:

1. **Operation Type**: **⌨️ Command**, **🔌 MCP Tool**, **📖 Read File** or **✏️ Write File**.
2. **Target Pattern**: the command, tool or path the rule is for.
3. **Policy Decision**: **✅ Allow**, **🚫 Deny** or **❓ Ask**.

### Project Overrides & Inheritance

Each project can follow the settings above, or use its own preset: **🌐 Set to Inherit Global Settings**, or under **Set Project Override:** one of **🛡️ Default**, **💻 Machine** and **⚡ Turbo**. The header shows how many projects inherit.

### Default Approval Scope

When you tap approve on a request, how long the permission lasts:

- **Run Once**: a single call.
- **This Chat**: the current session.
- **Workspace**: always, in this project.

**Default:** **Run Once**.

## MCP Servers

MCP servers give Antigravity more tools (see [MCP](../01-getting-started/02-key-concepts.md#mcp)). They are saved in agy's global config, `~/.gemini/config/mcp_config.json`, and every Antigravity chat can use their tools.

- **Add Server** adds a local (command) or remote server.
- **Browse MCP Catalog / Marketplace (1-Click)** installs servers from a catalog.
- **Quick Presets & Templates** add the app's [built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md) in one tap.
- **Configured Servers (N)** lists your servers with their tools. Use the switch to turn one off, or **Edit** and **Remove**.

Full guide: [Add your own MCP server](../04-tools-and-extensions/03-add-your-own-mcp-server.md).

## Skills & Plugins

Three tabs:

- **Skills**: every skill Antigravity has, filtered by **Global (Default)**, **Project / Workspace** or **All**. Tap one to read its `SKILL.md`. **Add skills from GitHub** (button **From GitHub**) adds skills from any repository.
- **Plugins**: installed plugin bundles (in `~/.gemini/config/plugins/`) and the skills they bring. **Install a plugin from GitHub** installs an Antigravity or Claude Code plugin with agy's own installer (the same as `agy plugin install`).
- **Store**: **Official 'Build with Google' Plugins**. Tap **Install**.

More about skills: [Skills](../04-tools-and-extensions/05-skills.md).

## Cloud agents

Cloud agents (Antigravity's "Remote Agents") run an Antigravity chat on a Google cloud machine with your GitHub repos, instead of on the phone. The chat keeps working while your phone is off.

**Where:** **Settings → Antigravity → Cloud agents**

> [!IMPORTANT]
> Cloud agents need **Google AI Pro or Ultra** on a personal Google account, and agy 1.5 or newer.

### Cloud agents switch

Turns cloud agents on. When on, cloud projects show in the project picker of Antigravity chats, and cloud chats in the chat list. They are ready about a minute after the Antigravity server starts. When off, the app doesn't ask for cloud projects or cloud chats.

**Default:** off

### Cloud projects & repos

A cloud project is a set of GitHub repos the cloud agent works in. Tap the row to manage them (tab **Projects**): **New cloud project**, **Repos** to pick its GitHub repos, **New chat here**, and **Rename** or **Delete** in its menu. Deleting a project deletes it and its cloud chats in Google's cloud; your GitHub repos are not touched. A project with no repos starts in an empty folder.

Private repos in one project must have the same owner. If no repos show, share them with the Antigravity app in GitHub's settings.

### Connections (GitHub, Drive…)

The services the cloud agent may use. **Connect** opens Antigravity's page for it in your browser, as your Antigravity Google account. Connect it there, then come back. **Disconnect** removes it.

### Start a cloud chat

Start a new Antigravity chat and open its project picker. Under **Cloud** ("Runs in Google's cloud with your GitHub repos, also while the phone is off"), pick a project or **New cloud project**. See [Projects](../03-using-the-app/04-projects.md).

A cloud chat has a strip above the message box:

- The project name: tap it to change projects.
- **Preview**: see a web app running in the cloud machine. Pick its **Port** (ports from the agent's commands are marked with a dot), then **Open in app** or **Open in browser**. Ask the agent to start the server on `0.0.0.0`. Live reload doesn't work: reload the page to see changes.
- **Run**: **Run a command in the cloud VM**. The agent runs it and the output shows in the chat.

### What doesn't work in cloud chats

- There is no terminal: the cloud machine has none for apps. Use **Run**, or ask the agent.
- No voice calls: agy only allows them in chats that run on the Antigravity server.
- No live reload in **Preview**.

## Voice calls

Talk to Antigravity in a live voice call about the chat on screen. The agent works in the chat while you talk.

### Start a call

In an Antigravity chat, tap the headset button in the message bar (**Start voice call**). The first time, pick a voice: swipe to hear each one, then tap **Call with *voice***. Allow the microphone when Android asks.

The call screen has **Mute**, **Speaker** / **Earpiece**, **Captions**, **Voice** and **End**. **⌄** makes it small: it then shows as a pill above the message box. Tap the headset button or the pill to open the call again. The **ⓘ** button shows the **Call log**.

After the call, the chat shows a line like "Voice call · 2:11 PM · 3m 01s". Tap it to read what was said.

> [!NOTE]
> Voice calls need agy 1.5 or newer, a running server, and a chat that runs on the Antigravity server (not a cloud chat).

### Voice, language and speed

Tap **Voice** during a call (or **Browse voices**) to change:

- **Voice**: tap a voice to hear it, then switch the call to it.
- **Language**: the language the voice talks in. **Default:** **Phone language** (your phone's language list).
- **Speed**: from 0.75× to 2×. **Default:** 1×.

### Call from anywhere

**Where:** **Settings → Antigravity → Voice calls**

The **Voice call** tile in Quick Settings and the **Voice call** shortcut (long-press the AntiGem icon) call Antigravity in the last chat that had a call, or in a new chat the first time. When AntiGem is running, the call starts without opening it; otherwise the app opens and calls once the server is up. During a call, tap the tile to end it.

- **Add tile** adds the tile to Quick Settings (on phones that allow it). Otherwise: pull down Quick Settings, tap the pencil (edit) and drag **Voice call** up.
- **Add to home screen** adds the shortcut as an icon.

### Floating call window

While a call runs and AntiGem is not on screen, the call shows over other apps: a panel on the lower half of the screen with the status, the voice's orb, live captions and the call's buttons. Minimize it (**⌄** or drag it down) to a small circle you can drag anywhere; tap the circle to open the panel again.

**Default:** off. It needs Android's **Display over other apps** permission: when it is missing, the page says so and **Allow** opens the setting.

## Troubleshooting

:::details "Antigravity is not installed"
agy isn't in the Linux environment yet. Tap **Install** on the chat card, or **Install agy** in **Settings → Antigravity → Account & CLI**. If the log ends with an error, check your internet connection and try again.
:::

:::details The sign-in stays on "Signing in…"
The app waits until agy sees your Google sign-in. Finish signing in in the browser, come back to the app and tap **Check**. agy needs a few seconds after the browser. If it still doesn't work, tap **Cancel** and sign in again. "Cannot sign in: no internet connection." means just that.
:::

:::details "Account Verification Required" or "Can't sign in to Antigravity"
Google signed you in, but agy refused the account. The dialog says why (for example, an age rule). If it has **Verify Account**, tap it and follow Google's steps, then sign in again. Otherwise use another Google account.
:::

:::details "Offline: The Antigravity hub is stopped." or "The local server is not running."
Tap the status dot next to the chat title. Tap **Restart** (hub stopped) or **Start** (server not running). **Server logs** shows what went wrong.
:::

:::details "Unable to Load Permissions from AGY Hub" or "Unable to Load MCP Servers"
These pages read their settings from the hub, and the hub isn't answering. Wait until Antigravity is ready (green dot), then tap **Retry Connection**.
:::

:::details A model's quota is used up
In the model picker, the model's group shows **0%** left in red, with the time until it resets. Pick a model from another quota group, or wait for the reset.
:::

:::details "No models loaded"
Antigravity has no model list yet. Sign in with Google in **Settings → Antigravity → Account & CLI**, or tap the refresh icon in the picker.
:::

:::details "Agy on this computer keeps its login in the system keychain, so accounts can't be switched here."
agy runs on a computer that stores its login in the system keychain (for example with [Connect to PC](../05-power-features/03-connect-to-pc.md)). Saved accounts only work where agy keeps its login in a file.
:::

:::details Cloud agents: "Cloud agents need Google AI Pro or Ultra on a personal Google account (and agy 1.5 or newer)."
Your account or agy can't use cloud agents. Check your Google plan, and update agy in **Account & CLI**. "This agy does not support cloud agents yet" also means: update agy.
:::

:::details Cloud agents: "Cloud agents start about a minute after the Antigravity server starts."
Wait a minute and try again.
:::

:::details Cloud agents: busy, or a limit is reached
Google's limits, in the app's words:

- "Cloud agents are busy right now." Try again in a few minutes.
- "Today's cloud VM time is used up." It resets tomorrow.
- "Too many cloud environments are running." Let one finish, then try again.
- "Today's limit of cloud chats is reached." It resets tomorrow.
- "The limit of cloud chats is reached." Delete old cloud chats to start new ones.
:::

:::details Voice calls: "Voice calls need microphone access."
Allow the microphone for AntiGem in Android's settings, then start the call again.
:::

:::details Voice calls: "Start the server to call Antigravity." or "The call couldn't continue"
The server must run for a call. Start it from the status dot next to the chat title. If the call screen says "The call couldn't continue", tap **Try again**, or **Update agy** if it offers that. **Details** shows the call log.
:::

:::cards
- [Models, thinking and usage limits](./06-models-and-usage.md) — Quota groups, tiers and limits.
- [MCP: how agents use tools](../04-tools-and-extensions/01-mcp-explained.md) — What MCP servers are.
- [Projects](../03-using-the-app/04-projects.md) — Pick the folder or cloud project of a chat.
- [Jarvis](../05-power-features/01-jarvis.md) — Use the whole app by voice.
:::
