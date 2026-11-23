---
title: Build custom plugins
description: Where to start with the plugin SDK, whether you build with an agent or by hand.
updated: 2.0.4-beta.2
---

A [custom AntiGem plugin](../04-tools-and-extensions/04-custom-plugins.md) is a ZIP with a `manifest.json` and a JavaScript background worker (and optionally Markdown skills). It gives agents new MCP tools, and runs in AntiGem's plugin host, which implements a large part of the Chrome extension API, so many Chrome extension workers can be ported.

## The fastest way: let an agent build it

Add the **Plugin Developer** preset to your agent and use `/custom_plugin`. The agent gets the whole SDK, plus tools to write, install, test and debug the plugin. See [Make a custom plugin](../07-guides/18-make-a-plugin.md).

To build on a computer, download the SDK in **Settings → Custom AntiGem Plugins → Download plugin SDK ZIP**, and start with its `pc-development.md`.

## The SDK guide

The full reference is in the **Plugin SDK** section of these docs:

:::cards
- [Overview](../12-plugin-sdk/01-overview.md) — A minimal plugin, manual install, porting Chrome extensions.
- [Developer MCP](../12-plugin-sdk/02-developer-mcp.md) — Create, install and test with the developer MCP.
- [Packages and lifecycle](../12-plugin-sdk/03-lifecycle.md) — The manifest, storage, the worker's life, the JavaScript environment.
- [Skills](../12-plugin-sdk/04-skills.md) — Markdown guides served as tools.
- [Plugin repositories](../12-plugin-sdk/05-plugin-repository.md) — Host your plugins on GitHub.
- [Building on a PC](../12-plugin-sdk/06-pc-development.md) — Work in a repository on your computer.
- [Chrome API](../12-plugin-sdk/07-chrome-api.md) — Every extension API the host provides.
- [AntiGem API](../12-plugin-sdk/08-antigem-api.md) — Native automation, file uploads and files.
- [MCP endpoints](../12-plugin-sdk/09-mcp.md) — The MCP protocol and management endpoints.
- [Google Flow](../12-plugin-sdk/10-google-flow.md) — The bundled Flow plugin's tools and recipes.
:::

A working example is in the repository: [extension_docs/examples/hello-mcp](https://github.com/santoshkurmi/antigem/tree/standalone/extension_docs/examples/hello-mcp).
