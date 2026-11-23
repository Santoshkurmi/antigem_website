---
title: Build a web app and preview it
description: Ask an agent for a web app, let it run a dev server on the phone, and open the result in the built-in browser.
updated: 2.0.4-beta.2
---

At the end you'll have a small web app built by an agent, running on your phone, open in AntiGem's browser.

**Before you start:** one agent installed and signed in ([Your first chat](../01-getting-started/07-first-chat.md)), and Node.js in the terminal (`pkg install nodejs`; the Full environment usually has it).

:::steps
### Make a project

Tap **Select Project** at the top of the chat and create a new project, for example `todo-app`. See [Projects](../03-using-the-app/04-projects.md).

### Ask for the app

Send something like:

```text title="Prompt"
Make a to-do list web app with Vite and plain JavaScript: add, check off and
delete items, saved in localStorage. Then start the dev server so I can open it,
and tell me the address.
```

Approve the commands it wants to run (creating files, `npm install`, starting the server). See [Chat](../03-using-the-app/02-chat.md).

### Keep the server running

Dev servers keep running in the background. If the agent started it in its own command, it may stop when the reply ends: ask it to "start the dev server in a terminal tab" (with the [Terminal MCP](../04-tools-and-extensions/02-built-in-mcp-servers.md#terminal)), start it yourself in the terminal (`npm run dev`), or use the [Run screen](../03-using-the-app/06-run.md).

### Open it in the browser

Open the **Browser** from the app switcher and go to the address the server printed, usually `http://localhost:5173`. Tap a link to the address in the chat to open it directly. See [Browser](../03-using-the-app/08-browser.md).

### Change it

Back in the chat: "make the buttons bigger and add a dark mode". Vite reloads the page by itself when the files change.
:::

## Let the agent check its own work

Add the **Browser** preset to your agent ([Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md#browser)) and ask: "Open the app in the browser, add three items, check one off, and tell me if anything is broken." See [Let the agent test your site](./06-test-your-site-in-the-browser.md).

## If something goes wrong

:::details The page doesn't load
Check the server still runs (terminal or Run screen) and use the exact port it printed. If it listens on another address, start it with `npm run dev -- --host 0.0.0.0`. See [Troubleshooting](../08-help/01-troubleshooting.md#browser).
:::

:::details npm install fails
See [Troubleshooting → Linux and packages](../08-help/01-troubleshooting.md#linux-and-packages) (broken npm, mirrors, space).
:::
