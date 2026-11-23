---
title: Make a mini app and share it
description: Ask an agent for a mini app, test it on the phone, then sign it and share it as an .agapp file.
updated: 2.0.4-beta.2
---

At the end, you have your own small app, with its own icon, running full screen like a real Android app, and an `.agapp` file friends with AntiGem can install.

**Before you start:** an agent installed and signed in. A [mini app](../05-power-features/09-mini-apps.md) is HTML, CSS and JavaScript with AntiGem's SDK for storage, files, network, notifications and more. You don't need to know any of it: the agent does the work.

:::steps
### Add the Mini App Developer preset

In your agent's MCP servers, tap **Mini App Developer**. See [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md#mini-app-developer). Start a new chat.

### Turn on Developer mode

Open **Mini Apps** and tap the **</>** button at the top, so apps that are still being built can run (it says **Developer mode on: development apps run, with developer tools**).

### Ask for the app

Use the ready-made `/mini_app` command:

```text title="Prompt"
/mini_app A water tracker: tap a glass to add 250 ml, show today's total and a
7-day chart, and remind me every 2 hours between 9:00 and 21:00.
```

The agent reads the mini app guide, creates the app, writes the files and an icon, checks it, opens it, takes screenshots and reads the console to fix errors.

### Try it

The app opens full screen. If it asks for a permission (notifications, files…), answer the prompt. Ask for changes in the chat: "make the chart bigger", "add a dark mode".

### Sign and share it

Ask: "sign it so I can share it". The agent creates your developer key if you don't have one, asks you to back it up (you type the password only on the phone, never in the chat), signs the app, and tells you where the `.agapp` file is. Share it from the app's **App info**.
:::

## Good to know

- Your apps are in **Mini Apps** (and the **Apps** icon in the chat drawer).
- Keep your developer key's backup (`antigem-key-*.agkey` in `Download/AntiGem`): updates to a shared app must be signed with the same key.
- Ask for the fewest permissions the app really needs.

See [Mini Apps](../05-power-features/09-mini-apps.md) and the full SDK in [Build mini apps](../10-developers/01-build-mini-apps.md).
