---
title: Built-in MCP servers
description: Every MCP preset in AntiGem, what the agent can do with it, what it needs first, and example prompts.
updated: 2.0.4-beta.2
---

AntiGem comes with MCP servers for its own parts, plus a few outside ones, as one-tap **presets**. Add a preset and the agent gets its tools in the next chat. New to MCP? Read [MCP: how agents use tools](./01-mcp-explained.md) first.

**Where:** ☰ → **Settings** → your agent → **MCP servers** (for Antigravity: **Settings → Antigravity → MCP Servers**), under **Quick presets**.

## Adding a preset

:::steps
### Open the agent's MCP page

**Settings → Claude Code → MCP servers**, **Settings → OpenCode → MCP servers**, **Settings → Codex → MCP servers** or **Settings → Antigravity → MCP Servers**.

### Tap the preset

Tap its tile under **Quick presets**. AntiGem fills in the name, the address and the secret header for you. Check and save. The tile then says **Added**.

### Start a new chat

Agents connect to their MCP servers when a chat starts. In a new chat, ask the agent to use the tools ("open example.com in the browser").
:::

Each agent has its own list, so add the preset to every agent you use. The presets are the same on every agent's page.

## The presets

### Browser

**Control the in-app browser.** The agent opens, switches and closes tabs, reads pages, clicks and types like a person, fills forms, runs JavaScript, inspects the page's structure, reads console and network logs, handles dialogs, uploads files and takes screenshots.

- **Needs:** nothing. It drives AntiGem's [built-in browser](../03-using-the-app/08-browser.md). While the agent controls a tab, the browser shows a banner.
- **Try:** "Open my dev server at localhost:5173, sign up with a test account and tell me what breaks." · "Read the docs page at … and sum it up."

### Terminal

**Run commands in the terminal.** The agent creates terminal sessions, sends commands, reads their output, lists and closes sessions, and stops processes. Unlike the agent's own command tool, these are real terminal tabs you can watch and type into.

- **Needs:** the Linux environment.
- **Try:** "Start the dev server in a new terminal tab and keep it running." · "Run the tests in a terminal and watch for failures."

### Android

**Tap, type & read this phone.** The agent reads what's on the screen, taps, swipes, scrolls, types, presses keys, takes screenshots, opens and lists apps, opens links and intents, and waits for things to appear. With shell access it can also install, uninstall and force-stop apps and run `adb shell` commands.

- **Needs:** **Settings → Android Automation**: turn on the **AntiGem Android Automation** accessibility service. For the extra shell powers, set up [ADB Connect](../05-power-features/07-device-access.md) (ADB, Shizuku or root). Until the accessibility service is allowed, the server refuses to connect and tells the agent what's missing.
- **Try:** "Open Settings and turn on dark mode." · "Install the APK I just built and open it."

> [!CAUTION]
> This gives the agent full control of your phone: it can read everything on screen, including messages and passwords. Keep approvals on, and turn the service off when you don't need it. See [Android automation](../05-power-features/08-android-automation.md).

### Notes & To-dos

**Read & edit your notes.** The agent lists, reads, creates, edits and deletes your notes, and adds, checks off and removes to-do items. They're the same notes as the app's [Notes](../03-using-the-app/09-files-and-notes.md) screen.

- **Needs:** nothing.
- **Try:** "Make a to-do list of what's left in this project." · "Add 'renew domain' to my to-dos."

### Theme

**Create & switch app themes.** The agent lists, applies, creates, edits, duplicates, imports, exports and deletes AntiGem's color themes, and switches between light and dark.

- **Needs:** nothing.
- **Try:** "Make a dark theme in the colors of my company logo." See [Make your own theme](../07-guides/09-make-a-theme.md).

### Jarvis

**Voice control of this app.** The tools Jarvis, the voice assistant, uses to run the app: speaking, tasks, chats, models, settings, approvals, the IDE and more.

- **Needs:** Jarvis set up. **Settings → Jarvis → Setup** adds it for the agent Jarvis uses. You rarely add it by hand. See [Jarvis](../05-power-features/01-jarvis.md).

### Custom Plugin MCP

**Pick an installed plugin.** Gives the agent the tools of one of your [custom AntiGem plugins](./04-custom-plugins.md). Tapping the tile asks which plugin.

- **Needs:** the plugin installed and enabled in **Settings → Custom AntiGem Plugins**.

### Plugin Developer

**Build & test AntiGem plugins.** Tools to create, install, test and debug custom plugins from the chat. It also gives the agent the full plugin SDK, so it doesn't need the AntiGem source code.

- **Try:** "Make a plugin with a tool that fetches the weather for a city." See [Make a custom plugin](../07-guides/18-make-a-plugin.md) and [Build custom plugins](../10-developers/02-build-plugins.md).

### Mini App Developer

**Build, test & sign mini apps.** The whole loop for [mini apps](../05-power-features/09-mini-apps.md): create, write files, open, read the console, run code in the app, take screenshots, check, sign and install. It also serves the mini app guide that matches your AntiGem version.

- **Needs:** **Developer mode** on in **Mini Apps** (the **</>** button at the top) to run apps that are still being built.
- **Try:** "Make a mini app for tracking my water intake, with a reminder." See [Make a mini app and share it](../07-guides/17-make-a-mini-app.md).

### Stitch

**Google Stitch UI design · API key.** Google's Stitch design tool as an MCP server on the internet. The agent can design UI screens with it.

- **Needs:** your own Stitch API key: paste it after `X-Goog-Api-Key:` in the header field when you add the preset.

### REA

**Reverse engineering · APK & native.** Lets the agent unpack and decompile APKs and look into Flutter, React Native and native libraries. Tapping the tile opens a dialog where you pick the mode (**on demand** or **direct**) and the tool groups. You can add it more than once with different groups.

- **Needs:** REA set up first in **Settings → REA**. See [Reverse engineering](../05-power-features/06-reverse-engineering.md).

### Custom server

**Any remote (HTTP) or local (command) server.** For MCP servers that aren't presets. See [Add your own MCP server](./03-add-your-own-mcp-server.md).

## Antigravity's MCP catalog

Antigravity's MCP page also has **Browse MCP Catalog / Marketplace (1-Click)**: a searchable list of ready-made MCP packages (for example Firebase, BigQuery, Firestore) that you add in one tap. **Test & Refresh** checks that every server answers.

## Troubleshooting

:::details I added a preset but the agent doesn't have the tools
Start a **new** chat: agents connect to MCP servers when a chat starts. Check that the server is listed (and on) on that agent's MCP page. Each agent has its own list.
:::

:::details The Android tools say the service isn't running
Turn on the **AntiGem Android Automation** accessibility service in **Settings → Android Automation**. On Android 13+, if the switch is greyed out, open App info, tap **⋮** (top right) → **Allow restricted settings**, then try again. If the service is on but Android hasn't started it, turn it off and on again. See [Android automation](../05-power-features/08-android-automation.md).
:::

:::details A built-in server says "Unauthorized"
The built-in servers only answer requests with your device's ID header, which the preset fills in. If you typed the server by hand or edited the header, remove it and add the preset again.
:::
