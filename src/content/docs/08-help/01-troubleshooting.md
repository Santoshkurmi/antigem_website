---
title: Troubleshooting
description: Problems and their fixes, grouped by area. Find what you see, open it, follow the steps.
updated: 2.0.4-beta.2
---

Find what you see below and open it. Each fix links to the full page for more. If nothing here helps, use the [debugging tools](./02-debugging.md) to find out more, then [ask for help](./04-get-help.md).

> [!TIP] First, the two quick fixes
> 1. Tap the coloured **dot** next to **Select Project** (top of the chat) to see each agent's state, and tap **Restart server** if something says **Offline** or **Error**.
> 2. Make sure AntiGem may show **notifications**. Without them Android stops its background work. See [Running in the background](../03-using-the-app/11-background-and-notifications.md).

## Installing

:::details Android says "App not installed"
A differently signed build of AntiGem is installed, the file is older than the installed app, the download was cut short, or the phone is out of space. See [Install AntiGem](../01-getting-started/05-installation.md#troubleshooting).
:::

:::details Play Protect blocks the app
Tap **More details → Install anyway**. AntiGem isn't from the Play Store, so Play Protect doesn't know it. See [Install AntiGem](../01-getting-started/05-installation.md#troubleshooting).
:::

:::details "Not available on this phone"
Your phone is 32-bit. The Linux environment needs 64-bit, but you can use AntiGem with [server mode](../05-power-features/02-server-mode.md). See [What to download](../01-getting-started/04-downloads.md#which-processor-does-my-phone-have).
:::

## First setup

:::details The Linux download fails or is very slow
Choose the other download site (**GitHub** or **Hugging Face**) and tap **Download from …**. If both fail, your network may block them: try another network, or download the ZIP in your browser and use **From a ZIP file**. See [First launch](../01-getting-started/06-first-launch.md#troubleshooting).
:::

:::details The install fails while unpacking
Usually not enough space: the Full environment needs about 2 GB. Free some space and tap **Try again**.
:::

:::details I skipped the setup and the terminal doesn't work
The setup screen comes back the next time you open AntiGem, and opening the terminal offers to install the Linux environment. See [First launch](../01-getting-started/06-first-launch.md#troubleshooting).
:::

## Agents

:::details The agent says "not installed" or "not found"
Tap **Install** (or **Set up Claude Code**) on the empty chat, or install it from its page in **Settings**. Don't install agents with their official commands in the terminal: on the phone they need setup that only the app's installer does. See the agent's page: [Antigravity](../02-agents/02-antigravity.md), [Claude Code](../02-agents/03-claude-code.md), [OpenCode](../02-agents/04-opencode.md), [Codex](../02-agents/05-codex.md).
:::

:::details Signing in doesn't come back to the app
Some sign-ins open your browser. Finish signing in there, then come back to AntiGem by hand if the browser doesn't. Codex has **Use a code** for this case: you type a code on the website instead. Check the agent's state with the coloured dot next to **Select Project**.
:::

:::details The agent doesn't answer, or keeps "working" forever
1. Wait a minute the first time: the agent starts in the background.
2. Tap **Stop**, then send again.
3. Tap the coloured dot next to **Select Project**. If the agent says **Offline** or **Error**, tap **Restart server**.
4. Open **Server logs** from the same menu and look at the last lines for the error.
5. Start a new chat: a very long chat can get slow.
:::

:::details "Usage limit reached", "quota exhausted" or rate limit errors
Your plan's limit for now is used up. The model picker shows how much is left and when it resets. Switch to a smaller model, wait, or use another agent. See [Models, thinking and usage limits](../02-agents/06-models-and-usage.md).
:::

:::details The agent asks for approval for every little thing
That's its permission mode. Pick a mode that allows more without asking (for example edits). See [Permission mode](../01-getting-started/02-key-concepts.md#permission-mode) and your agent's page.
:::

:::details The agent says it can't use a tool (browser, phone, notes…)
The tool comes from an MCP server that isn't added for this agent. Add the preset in the agent's **MCP** settings. See [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md).
:::

## Linux and packages

:::details `pkg install` fails with mirror or "Unable to locate package" errors
Run `pkg update` first, then try again. If a mirror is down, `pkg` picks another one by itself; you can also choose one with `termux-change-repo`. Check your internet connection and any VPN.
:::

:::details `npm` fails with "Cannot find module" errors
Some setups have a broken `npm`. Reinstall it:

```bash title="Terminal"
pkg uninstall npm
pkg install npm
```
:::

:::details `pip` fails with "No module named pip._internal…"
Reinstall pip:

```bash title="Terminal"
pkg install python-pip
```

If Python then fails with `cannot locate symbol "XML_GetCurrentLineNumber64"`, update `libexpat`: `pkg install libexpat` (or `pkg upgrade`).
:::

:::details "command not found"
The program isn't installed. Many are one `pkg install <name>` away; `pkg search <word>` finds the package name. Some programs only exist for normal Linux (glibc): those need the [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md) on rooted phones.
:::

:::details The agent can't see my files in Downloads or other folders
Allow **Files** (All files access) in Android's settings for AntiGem. See [First launch](../01-getting-started/06-first-launch.md#troubleshooting).
:::

:::details Out of space
Check free space with `df -h ~` in the terminal. Big folders are usually `node_modules`, build outputs and package caches (`pkg clean` clears the package cache).
:::

## Background and battery

:::details Agents, builds or servers stop when I leave the app or turn the screen off
1. Allow notifications for AntiGem (the background service needs them).
2. Let AntiGem ignore battery optimization: Android's **Settings → Apps → AntiGem → Battery → Unrestricted** (the words differ by phone).
3. Some phone makers (Xiaomi, Oppo, OnePlus, Realme, Vivo, Samsung…) stop apps on their own. Look for **Autostart**, **Background activity** or **Sleeping apps** in the phone's settings and allow AntiGem.

See [Running in the background](../03-using-the-app/11-background-and-notifications.md).
:::

:::details Processes are killed with "signal 9", especially with many running (Android 12 and newer)
Android 12+ limits how many processes all apps together may start (about 32), and kills the extra ones. Running a desktop, many servers or many agents at once can hit it. To lift the limit:

- Some phones (Android 14 and newer) have **Disable child process restrictions** in **Developer options**.
- Or run this from a computer with adb (or from AntiGem's terminal with [ADB Connect](../05-power-features/07-device-access.md)):

```bash title="adb"
adb shell "/system/bin/device_config set_sync_disabled_for_tests persistent; /system/bin/device_config put activity_manager max_phantom_processes 2147483647"
adb shell settings put global settings_enable_monitor_phantom_procs false
```

The [X11 desktop](../05-power-features/14-x11-desktop.md) page has a button that does this for you.
:::

## Browser

:::details The browser can't open my local server (`localhost`)
Make sure the server is still running (in the terminal or the Run screen) and use the port it printed, like `http://localhost:8080`. If the server only listens on another address, start it with `--host 0.0.0.0` (or the tool's own option). In [server mode](../05-power-features/02-server-mode.md) and [Connect to PC](../05-power-features/03-connect-to-pc.md) the server runs on the other machine: see those pages. See [Browser](../03-using-the-app/08-browser.md).
:::

:::details A page is blank or broken
Reload it, try **Desktop** mode, or clear the browser's cache and data from its menu. **DevTools** shows the page's errors. See [Browser](../03-using-the-app/08-browser.md).
:::

## MCP servers and plugins

:::details An MCP server's tools don't appear in the chat
Check that the server is turned on in that agent's **MCP** settings, then start a new chat (agents read their tools when a chat starts). For your own servers, check the command or address. See [Add your own MCP server](../04-tools-and-extensions/03-add-your-own-mcp-server.md).
:::

:::details A plugin doesn't work
Check it's enabled in **Settings → Custom AntiGem Plugins**, reload it, and check that the **Custom Plugin MCP** preset is added for your agent. See [Custom AntiGem plugins](../04-tools-and-extensions/04-custom-plugins.md).
:::

## Slow phone, heat, memory

:::details The app is slow or the phone gets hot
Each running agent program uses memory. In the drawer, chats with a green **RUNNING** badge still have a program running: tap the badge and **Terminate & Free RAM** for the ones you don't need. Close servers you started. The [Diagnostics HUD](./02-debugging.md#3-diagnostics--performance) shows what's busy.
:::

## Other features

Each of these pages has its own troubleshooting section:

:::cards
- [Server mode](../05-power-features/02-server-mode.md) — Can't connect to the server, SSH errors.
- [Connect to PC](../05-power-features/03-connect-to-pc.md) — The PC isn't listed, the pairing code fails.
- [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md) — Root, mounts, packages.
- [Jarvis](../05-power-features/01-jarvis.md) — It doesn't hear you, or sends too early.
- [Mini Apps](../05-power-features/09-mini-apps.md) — Install errors, permissions.
- [Linux desktop (X11)](../05-power-features/14-x11-desktop.md) — Black screen, the desktop won't start.
- [Termux:API](../05-power-features/15-termux-api.md) — `termux-*` commands do nothing.
:::

## Crashes

:::details AntiGem crashed
The crash screen (**Oops! AntiGem tripped over something**) lets you **Report on GitHub** or **Share crash report**. Please send it: it's how crashes get fixed. Check it for file names you don't want to share first. See [Debugging tools](./02-debugging.md#5-crash-reports).
:::
