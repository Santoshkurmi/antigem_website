---
title: Custom AntiGem plugins
sidebar: Custom plugins
description: Small add-ons that give agents new tools and skills. What they are, how they work, and how to install, update and remove them.
updated: 2.0.4-beta.2
---

A **custom AntiGem plugin** is a small add-on that gives your agents new abilities: tools they can call, skills that teach them how to do something, or both. For example, the built-in **Google Flow** plugin lets an agent make videos with Google Flow in the browser.

**Where:** ☰ → **Settings** → **Custom AntiGem Plugins**

## How plugins work

A plugin is a ZIP file with:

- `manifest.json`: its name, ID, version, and the list of tools it offers.
- A **background worker**: JavaScript that does the work when a tool is called.
- A `skills/` folder (optional): Markdown guides that teach the agent how to use the tools.

AntiGem runs plugins in its own **plugin host**, a small JavaScript engine inside the app on your phone. It understands a large part of the **Chrome extension** API (tabs, page scripting, storage and more), so a plugin can work with pages in AntiGem's built-in browser, store data and use the network.

Agents reach a plugin's tools through MCP: each plugin is an MCP server, and the **Custom Plugin MCP** preset connects an agent to it.

```text title="From a chat to a plugin"
 Agent ──MCP──► Custom Plugin MCP ──► plugin's worker (in the plugin host) ──► browser tab, storage, network
```

A plugin with skills also gets three tools for free: `get_skills` (the list), `get_skill` (one guide) and `get_skill_file` (its extra files). The agent reads a guide only when it needs it. In the chat you can type `/plu:` to pick a plugin and one of its skills yourself.

New to these words? See [MCP](../01-getting-started/02-key-concepts.md#mcp), [Skill](../01-getting-started/02-key-concepts.md#skill) and [MCP: how agents use tools](./01-mcp-explained.md).

## Install a plugin

### From a ZIP file

:::steps
### Get the ZIP

From the plugin's author, a website or a GitHub release. The ZIP may contain `manifest.json` directly or inside one folder.

### Install it

In **Settings → Custom AntiGem Plugins**, tap **Install ZIP** and pick the file. Choose a **Folder name** (it must not be taken by another plugin). The plugin starts right away: no app restart.

### Connect it to your agent

Open your agent's **MCP servers** page, tap **Custom Plugin MCP** (**Pick an installed plugin**) and choose the plugin. The address, the plugin's ID and the device header are filled in for you. Save, then start a new chat.
:::

### From a plugin repository on GitHub

A plugin repository is a GitHub repository that lists one or more plugins. Open the **Repositories** tab, tap **Add repository** and enter one of:

- `owner/repo` (its default branch)
- `owner/repo@branch` or `owner/repo@v2.0` (a branch or a tag)
- `https://github.com/owner/repo` or `https://github.com/owner/repo/tree/branch`

The app reads the repository (**Reading the repository…**) and lists its plugins. Tap **Install** on the ones you want, then connect them to your agent as above.

Installs remember where they came from, so the plugin's card shows when the repository has a newer version. The app checks repositories for updates in the background.

> [!WARNING]
> Only add repositories and ZIPs you trust: plugins run code on your device. Only public GitHub repositories work.

## Managing plugins

Each installed plugin has a card with its name, icon and version.

### Update

When a newer version is out (from its repository, or a newer ZIP you pick with **Update ZIP**), the card says **Update available: v1.0 → v1.1**. Tap **Update**. The plugin keeps its ID, its stored data and its MCP connection. If the new version fails to start, the old one is put back.

### Reload

Restarts the plugin's worker. Use it after you changed its files by hand. Data the plugin saved stays; jobs it was running in memory stop.

### Enable or disable

Turns the plugin off without removing it: its tools disappear, and it stops running. Turn it back on any time.

### Remove

Deletes the plugin's folder. Tick **Also delete its stored data** to remove what it saved too (otherwise it's kept, in case you reinstall). If you added it in an agent's MCP settings, remove that server there too.

> [!NOTE]
> **Google Flow** is built into the app: removing it only lasts until the app restarts. To keep it off, disable it instead.

### Install as new

If you install a ZIP of a plugin that's already installed, you can update it or **Install as new plugin**: a second copy with its own ID, next to the first. Add the copy to your MCP settings separately.

### Where plugins live

Installed plugins are folders in `~/extensions/<folder>` in AntiGem's Linux environment. You can open and edit them in the IDE, then tap **Reload**.

## Make your own

You don't need to be a developer: an agent can build a plugin for you.

- Add the **Plugin Developer** preset to your agent ([Built-in MCP servers](./02-built-in-mcp-servers.md#plugin-developer)) and describe the plugin you want. The agent gets the whole SDK, writes the files, installs, tests and reads the worker's logs. See [Make a custom plugin](../07-guides/18-make-a-plugin.md).
- To build on a computer, tap **Download plugin SDK ZIP** (**Plugin SDK for PC**): all plugin docs and examples, starting with `pc-development.md`.
- To share several plugins, **Host your own repository** opens the guide for laying out a GitHub repository.
- The full reference is in [Build custom plugins](../10-developers/02-build-plugins.md).

## Troubleshooting

:::details The agent doesn't have the plugin's tools
1. Check the plugin is enabled in **Settings → Custom AntiGem Plugins**.
2. Check it's added to this agent: **MCP servers → Custom Plugin MCP**.
3. Start a new chat.
:::

:::details "Enable or install a plugin in Settings → Custom AntiGem Plugins first."
You tapped **Custom Plugin MCP**, but no plugin is installed and enabled. Install one first.
:::

:::details "A plugin already uses this folder name"
Choose another **Folder name**, or update the existing plugin instead.
:::

:::details A tool call fails or does nothing
Open the plugin's page in your browser if it works with a website (some tools need you to be signed in there). Tap **Reload** and try again. If you built it, ask the agent with the **Plugin Developer** preset to read the worker's logs.
:::

:::details "This repository lists no plugins"
The repository has no plugin index or plugin folders that AntiGem understands. Check the address and branch, or ask its author. See [Build custom plugins](../10-developers/02-build-plugins.md).
:::
