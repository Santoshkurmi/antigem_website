---
title: Terminal settings
description: Local or SSH terminal tabs, font size, cursor style, scrollback, and the full app reset.
updated: 2.0.4-beta.2
---

How the terminal looks, and where its tabs open a shell. How to use the terminal itself is on [Terminal](../03-using-the-app/07-terminal.md).

**Where:** ☰ → **Settings** → **Terminal**. The row shows **Local** or **SSH**.

## Where terminal tabs open

### Use Terminal via SSH

**Default:** off (**Local Mode**).

- **Local Mode**: terminal tabs open a shell where the agents run on this phone: AntiGem's built-in environment or the Ubuntu chroot, chosen in [Where agents run](./04-where-agents-run.md).
- **SSH Mode**: terminal tabs open a shell on another machine over SSH. Fill in **SSH Host**, **Port**, **User** and **Password**, tap **Test SSH Connection**, then **Save SSH Settings**.

In [server mode](../05-power-features/02-server-mode.md) the terminal always runs on your server, with the SSH login from **Where agents run**: the page says **Remote server mode is on**.

## Terminal Customization

### Font Size

**Default:** 14. From 10 to 24.

### Cursor Style

**Default:** **Bar |**. **Block █**, **Underline** or **Bar |**.

### Scrollback Buffer

How many lines of output the terminal keeps to scroll back through: **1k**, **5k**, **10k**, **20k**, **50k**, **100k** or **Unlimited**. More lines use more memory.

### Launch Terminal Now

Opens the terminal.

The terminal's colors follow the app's theme. See [Themes](./02-themes.md).

## Delete all app data

> [!CAUTION]
> This wipes **everything**: the Linux environment and every package, projects in AntiGem's folders, chats, sign-ins and settings. Like uninstalling and installing again. Back up first: [Backups and restore](../05-power-features/12-backups.md).

Tap **Delete all app data** → **Delete All & Factory Reset?** → **Yes, Continue**. To confirm, type the phrase shown (`iknowwhatiamdoing`) and tap **Delete All Data**. AntiGem wipes its data and closes after a short countdown; open it again to start fresh from [first launch](../01-getting-started/06-first-launch.md).
