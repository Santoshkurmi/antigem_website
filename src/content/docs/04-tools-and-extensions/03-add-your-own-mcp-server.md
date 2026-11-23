---
title: Add your own MCP server
description: Connect any MCP server, local (a command) or remote (an address), to Antigravity, Claude Code, OpenCode or Codex.
updated: 2.0.4-beta.2
---

Thousands of MCP servers exist: for GitHub, databases, search, design tools, your own scripts. This page shows how to add one that isn't a preset. Not sure what MCP is? Read [MCP: how agents use tools](./01-mcp-explained.md).

## What you need from the server's instructions

Every MCP server's README tells you one of these:

- **A command** to start it (a *local* or *stdio* server), like `npx -y @modelcontextprotocol/server-filesystem ~/notes`, maybe with environment variables such as `API_KEY=…`.
- **An address** (a *remote* or *HTTP* server), like `https://example.com/mcp`, maybe with a header such as `Authorization: Bearer …`.

Many READMEs show a JSON block for desktop apps, like this. The parts map to the fields below:

```jsonc title="A typical README example"
{
  "mcpServers": {
    "filesystem": {                                   // → Name
      "command": "npx",                               // → Command
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/home/me/notes"],  // → arguments
      "env": { "DEBUG": "true" }                      // → Environment
    }
  }
}
```

> [!TIP]
> A local server runs in AntiGem's Linux environment, so its command must work there. Servers started with `npx` need Node.js, and ones started with `uvx` need `uv`. Install what's missing in the terminal first (`pkg install nodejs`, `pkg install uv`), and try the command by hand to see that it starts.

## Claude Code

**Where:** ☰ → **Settings** → **Claude Code** → **MCP servers**

:::steps
### Tap Custom server

Under **Quick presets**, tap **Custom server** (**Any stdio, HTTP or SSE server**).

### Fill it in

- **Name**: a short name without spaces, like `github`.
- **Transport**: **stdio** for a command, **HTTP** or **SSE** for an address.
- For stdio: **Command and arguments**, and **Environment (KEY=value per line)** if needed.
- For HTTP/SSE: **URL**, and **Headers (Name: value per line)** if needed.
- **Scope**: who gets the server:
  - **All projects**: every Claude chat.
  - **This project (me)**: only chats in the open project, only for you.
  - **This project (.mcp.json)**: saved in the project's `.mcp.json` file, so anyone who opens the project (and commits the file) gets it.

### Save and check

Save. Claude Code starts each server to list its tools, which can take a few seconds (**Checking MCP servers…**). The server shows in **Configured servers** with its state.
:::

Open a project first to see its project servers too (**Includes servers of the open project**).

## OpenCode and Codex

**Where:** ☰ → **Settings** → **OpenCode** → **MCP servers**, or **Settings** → **Codex** → **MCP servers**

:::steps
### Tap Custom server

Under **Quick presets**, tap **Custom server** (**Any remote (HTTP) or local (command) server**). The **Add an MCP server** dialog opens.

### Choose the kind

- **Remote (HTTP)**: **Name**, the address, and **Headers (one per line, Name: value)**.
- **Local (command)**: **Name**, **Command**, and **Environment (one per line, KEY=value)**. It runs where the agent runs (on the phone, or on your server in server mode).

### Save

Servers added here work in every chat of that agent and survive restarts. They connect when a chat starts.
:::

The list (**Servers (N)**) shows each server's state:

| State | Meaning |
| :--- | :--- |
| **Connected · N tools** | Working; the agent has N tools from it. |
| **Connecting…** | Starting. |
| **Connects with the next chat** | Saved; start a new chat to use it. |
| **Needs sign-in** | The server wants you to sign in (some remote servers use a browser sign-in). |
| **Failed** | It didn't start or didn't answer. Check the command or address. |
| **Disabled** | Turned off. |

Tap a server to **Edit** or **Remove** it.

## Antigravity

**Where:** ☰ → **Settings** → **Antigravity** → **MCP Servers**

Antigravity's servers are saved in its global config (`~/.gemini/config/mcp_config.json`), so they work in every Antigravity chat.

:::steps
### Tap Add Server

The **Add MCP Server** dialog opens.

### Fill it in

- **Server Name**: like `stitch`, `filesystem` or `github`.
- **Stdio** (a command): **Command** (like `npx`, `python3`, `node`, `uvx`), **Arguments (space separated)**, an optional **Working Directory**, and **Environment Variables (KEY=VALUE per line)**.
- **SSE** (an address): **SSE Endpoint URL** and **HTTP Headers (Header: Value per line)**.
- Or paste the server's JSON into **Server Configuration JSON** (**Format** tidies it up).

### Save and test

Save, then **Test & Refresh**. Each server shows **Ready**, **RUNNING**, **Disabled** or **Error**.
:::

Antigravity also has a ready-made catalog: **Browse MCP Catalog / Marketplace (1-Click)**. See [Built-in MCP servers](./02-built-in-mcp-servers.md#antigravitys-mcp-catalog).

## Example: a filesystem server for your notes folder

This gives an agent tools to read and search one folder, with Node.js:

```bash title="Terminal: check it starts (Ctrl+C to stop)"
pkg install nodejs
npx -y @modelcontextprotocol/server-filesystem ~/notes
```

Then add it as a local server: **Name** `notes-files`, **Command** `npx`, arguments `-y @modelcontextprotocol/server-filesystem /data/data/ai.antigem/files/home/notes` (use the full path; `~` may not be expanded). Start a new chat and ask: "List the files in my notes folder."

## Troubleshooting

:::details The server shows "Failed" or "Error"
Run the same command in the terminal and read the error. Common causes: the program isn't installed (`npx: command not found` → `pkg install nodejs`), a wrong path, a missing environment variable (API key), or no internet for the first `npx` download. For remote servers: a wrong address or a missing/expired key in the headers.
:::

:::details It's connected but the agent doesn't use the tools
Start a new chat (tools load when a chat starts). Then ask for the tool by what it does ("use the GitHub tools to list my issues"). Too many servers at once can make the model miss tools: turn off the ones you don't need.
:::

:::details A server works on my computer but not on the phone
Some servers need programs that don't exist in AntiGem's Linux environment (they're built only for normal Linux). Try the remote (HTTP) version of the server if it has one, run it on a server, or use the [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md) on a rooted phone.
:::
