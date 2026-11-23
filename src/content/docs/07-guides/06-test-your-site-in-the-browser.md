---
title: Let the agent test your site
description: The agent opens your site in AntiGem's browser, clicks through it like a person, finds what breaks and fixes it.
updated: 2.0.4-beta.2
---

At the end, the agent has used your web app in the built-in browser, found problems, and fixed them in the code.

**Before you start:** a web app running on the phone (see [Build a web app and preview it](./01-build-a-web-app.md)), or any public website.

:::steps
### Add the Browser preset

In your agent's MCP servers (**Settings → Claude Code → MCP servers**, or the same page of your agent), tap **Browser**. See [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md#browser).

### Start a new chat

Tools load when a chat starts.

### Ask for a test

Either type it yourself, or use the ready-made `/browser_mcp` command:

```text title="Prompt"
Open http://localhost:5173 in the browser. Sign up with a test account, add
three items, edit one, delete one, then reload the page. Tell me everything
that looks wrong or throws an error in the console, then fix it in the code.
```

### Watch it work

Open the **Browser** from the app switcher to watch: while the agent controls a tab, the browser shows a banner. Each click, form fill and screenshot also shows as a tool card in the chat.
:::

## What the agent can check

- Clicks, typing, forms, dialogs and file uploads, like a person.
- What's on the page (text and structure) and how it looks (screenshots).
- Console errors and network requests, to find the cause of a bug.
- Mobile and desktop view (**Desktop** mode).

## Tips

- Give it clear steps and what "working" means.
- Ask it to stop and ask you before anything outward-facing: real sign-ins, payments, sending messages.
- If a page needs you to sign in or solve a captcha, do it in the browser yourself, then tell the agent to go on.
