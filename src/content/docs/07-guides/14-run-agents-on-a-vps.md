---
title: Run the agents on a VPS
description: The short version of server mode. The agents, projects and terminal run on your server, and the phone is the screen.
updated: 2.0.4-beta.2
---

At the end, the bridge and the agents run on your own server (a VPS, a home server or a spare PC), they keep working when your phone sleeps, and AntiGem on the phone shows everything as usual. This is the short version; the full guide is [Server mode](../05-power-features/02-server-mode.md).

> [!CAUTION]
> A server on the internet is a target. The bridge gives whoever controls it the power of the server user. Use a dedicated VPS and a normal (non-root) user, keep nothing on it you can't afford to lose, and prefer the **SSH tunnel**.

:::steps
### Prepare the server

A Linux server with a normal user, `sshd`, `tmux` and `git`. You'll log in with an SSH key.

### Put the bridge on the server

The app doesn't contain the server's bridge and never uploads anything. Build `agy_ide_bridge` once with Go for the server's processor (amd64 or arm64), from the **same version as your app**, copy it to `~/.antigem/agy_ide_bridge` on the server and make it executable (`chmod +x`). See [Server mode](../05-power-features/02-server-mode.md) for the exact commands.

### Connect from the app

**Settings → Where agents run** → **Your server** → **SSH tunnel**. The addresses fill in as `http://127.0.0.1:<port>`; keep the default ports. Enter the **SSH host**, user and private key, tap **Test SSH**, then **Save Server & Security Settings** and **Reopen Now**. The app connects over SSH, opens the tunnels and starts the bridge. See [Where agents run](../06-settings/04-where-agents-run.md).

### Install the agents from the app

On each agent's page tap its install button: **Settings → Antigravity → Account & CLI → Install agy**, **Settings → Claude Code → Account & CLI → Install Claude Code**, and so on. The app installs them on the server and sets them up for the bridge. See [Server mode](../05-power-features/02-server-mode.md#install-the-agents-on-the-server).

### Sign in and chat

Sign in to the agents (their sign-ins live on the server now), and start chatting.
:::

## Good to know

- Chats, files and sign-ins in server mode live on the server, separate from the phone's.
- Back up the server yourself (the phone's **Backups & Restore** page is hidden in server mode).
- To open a dev server running on the VPS in the phone's browser, add a **port forward** on the Where agents run page.
