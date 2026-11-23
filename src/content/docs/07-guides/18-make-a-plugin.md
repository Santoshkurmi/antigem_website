---
title: Make a custom plugin
description: Build an AntiGem plugin with new tools for your agents, with the Plugin Developer MCP, without writing code yourself.
updated: 2.0.4-beta.2
---

At the end, you have a custom AntiGem plugin that gives your agents a new tool, for example to automate a website you use.

**Before you start:** an agent installed and signed in. Know what the tool should do, and on which website if it uses one. See [Custom AntiGem plugins](../04-tools-and-extensions/04-custom-plugins.md) for what plugins are.

:::steps
### Add the Plugin Developer preset

In your agent's MCP servers, tap **Plugin Developer**. See [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md#plugin-developer). Start a new chat.

### Ask for the plugin

Use the ready-made `/custom_plugin` command:

```text title="Prompt"
/custom_plugin A tool that searches Hacker News for a topic and returns the
top 10 stories from the last week, with their links and points.
```

The agent reads the plugin SDK, creates a draft (manifest, worker, an icon and a skill that explains the tools), installs it, tests the tools, reads the worker's logs and fixes errors until it works.

### Connect it to your agents

When it's done, the agent tells you the plugin's ID. Open your agent's MCP servers, tap **Custom Plugin MCP**, and pick the plugin. Do it for every agent that should use it. Start a new chat.

### Use it

Ask the agent to use the tool ("what's new on Hacker News about Rust?"), or type `/plu:` and pick the plugin and its skill.
:::

## Change or share it

- Ask the agent with **Plugin Developer** for changes; it updates the plugin and raises its version.
- Find the plugin in **Settings → Custom AntiGem Plugins** (and its files in `~/extensions/<folder>`). **Download as ZIP** from its card to share it, or put it in a GitHub plugin repository.

Full reference: [Build custom plugins](../10-developers/02-build-plugins.md).
