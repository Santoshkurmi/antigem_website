---
title: Slash commands
description: Type / in the message box for shortcuts. Each agent's built-in commands, AntiGem's commands, and your own commands that expand into full prompts.
updated: 2.0.4-beta.2
---

Type **/** at the start of the message box and a list of commands opens. Keep typing to filter it, then tap one. Some commands do something right away (`/new`, `/model`); others send a ready-made prompt to the agent, and many accept more text after the name (`/review the login code`).

The list depends on the agent of the chat. It has three kinds of commands:

1. The **agent's own commands** (and its skills).
2. **AntiGem's commands**: `/plu:` and your custom commands.
3. **Your own commands**, made in **Settings → Slash Commands**.

## Each agent's commands

### Antigravity

| Command | What it does |
| :--- | :--- |
| `/goal` | Run a long task and keep going, extra thorough, until the goal is reached (good overnight). |
| `/schedule` | Schedule a one-time timer or a repeating job. |
| `/browser` | Work with web apps, or search and browse the web. |
| `/plan` | Make an implementation plan before doing anything. |
| `/grill-me` | An interview that asks you questions to settle design decisions first. |
| `/teamwork-preview` | Let a team of agents work together. |
| `/learn` | Remember your setup and what it learned, for future tasks. |
| `/boost` | Deep thinking, planning and checking for hard tasks. |
| `/terminal` | Open a terminal session or run shell commands. |
| `/ide` | Open the code editor. |

Your Antigravity skills show in the list too. See [Antigravity](../02-agents/02-antigravity.md).

### Claude Code

Claude Code reports its own list when a chat starts: its built-in commands (such as `/compact` to summarize a long chat), plus commands and skills from your plugins and your `~/.claude/commands` folder. A grey hint after a command shows what it expects you to type after it. See [Claude Code](../02-agents/03-claude-code.md).

### OpenCode

OpenCode reports its commands from its server, including your own OpenCode commands. See [OpenCode](../02-agents/04-opencode.md).

### Codex

| Command | What it does |
| :--- | :--- |
| `/compact` | Summarize the chat so far to free up context. |
| `/review` | Review the uncommitted changes (or `/review what to check`). |
| `/plan` | Plan mode: plan before changing anything (or `/plan the task`). |
| `/fork` | Copy this chat into a new one. |
| `/model` | Pick the model. |
| `/status` | Account, usage limits and settings. |
| `/mcp` | The MCP servers Codex can use. |
| `/new` | Start a new Codex chat. |

See [Codex](../02-agents/05-codex.md).

## AntiGem's commands

### /plu:

Use a [custom AntiGem plugin](./04-custom-plugins.md) and its skills. Type `/plu:` and pick a plugin (and one of its skills): the agent is told where the skill is and which MCP server has the plugin's tools.

### /egm

Start an **EGM** design review: plan a design and let fresh reviewers attack it before any code is written. See [EGM: design reviews](./09-egm.md).

## Your own commands

**Where:** ☰ → **Settings** → **Slash Commands**

Make a command for any prompt you send often. When you send it, the agent gets the full text it **expands to**, while the chat keeps showing the short command. Your commands work with every agent.

### Add a command

Tap **Add command** and fill in:

- **Name**: what you type after `/`. Letters, numbers, `-` and `_`, up to 48 characters, like `tests`.
- **Description (shown in the / list)**: one line, so you remember what it does.
- **Expands to**: the full prompt. Put `$ARGUMENTS` where the text you type after the command should go.
- **Plugin** (optional): attach a custom AntiGem plugin, and one of its skills, like `/plu:` does. **None (whole plugin)** attaches the plugin without a specific skill.

```text title="Example: /tests"
Name:        tests
Description: Write and run tests for something
Expands to:  Write unit tests for $ARGUMENTS. Run them, fix what fails, and
             tell me the coverage at the end.
```

Then `/tests the date parser` sends "Write unit tests for the date parser. Run them…".

### Built-in commands you can edit

AntiGem adds a few ready-made commands, marked **Built-in**. You can edit or delete them like your own; **Restore defaults** brings back the ones you deleted.

| Command | What it does |
| :--- | :--- |
| `/custom_plugin` | Create a custom AntiGem plugin with the Plugin Developer MCP. |
| `/mini_app` | Build a mini app with the Mini App Developer MCP. |
| `/browser_mcp` | Do a task in AntiGem's built-in browser with the Browser MCP. |
| `/automation` | Control this phone (read the screen, tap, type, open apps) with the Android MCP. |

Each one first checks that the agent has the right MCP server, and tells you how to add it if not. Example: `/browser_mcp find the cheapest flight from Delhi to Kathmandu next Friday`.

See [Make your own slash command](../07-guides/08-make-a-slash-command.md).

## Troubleshooting

:::details A command from my plugin or skills folder isn't in the list
Start a new chat: agents report their commands when a chat starts. For Claude Code, check the plugin is installed in **Settings → Claude Code → Plugins**.
:::

:::details The agent says it doesn't have the tools for /browser_mcp or /automation
Add the **Browser** or **Android** preset to that agent's MCP servers, then start a new chat. See [Built-in MCP servers](./02-built-in-mcp-servers.md).
:::
