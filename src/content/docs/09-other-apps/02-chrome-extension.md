---
title: AntiGem Browser Bridge
description: The Chrome extension that lets agents in AntiGem for VS Code use your real browser. The phone app doesn't need it.
updated: 2.0.4-beta.2
---

The **AntiGem Browser Bridge** is a Chrome extension that lets the agents you use in [AntiGem for VS Code](./01-vscode-extension.md) work in your real browser: open pages, read them, click and type, fill forms, take screenshots, run JavaScript, read console and network logs, handle dialogs and upload files. It's the desktop half of AntiGem's **Browser** MCP server, and it also powers plugins that use the browser (like Google Flow).

> [!NOTE]
> **You don't need it on the phone.** The phone app has its own built-in browser that agents control. This extension only works together with AntiGem for VS Code.

**Works in:** Chrome, Chromium, Brave and Edge (version 120 or newer), on Linux and macOS. Windows isn't supported yet.

## Install

It isn't in the Chrome Web Store yet, so Chrome loads it from a folder.

:::steps
### Copy the extension

In VS Code: AntiGem → **Settings → Browser** → **Open the extension folder**. It copies the extension to `~/.antigem/chrome-extension` and opens the folder.

### Load it in Chrome

Open `chrome://extensions` (Brave: `brave://extensions`, Edge: `edge://extensions`), turn on **Developer mode** (top right), click **Load unpacked** and pick `~/.antigem/chrome-extension`. (Hidden folder: press <kbd>Ctrl</kbd> + <kbd>H</kbd> in the file dialog, or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> on macOS.)

### Connect it to VS Code

Back in **Settings → Browser**, press **Register with Chrome**. Restart the browser if it was open.

### Check and use it

Click the AntiGem icon in Chrome's toolbar: it should say **connected**. Then add the **Browser** tile on each agent's MCP page in AntiGem, and ask: "open example.com and tell me what the page says".
:::

## Updating

After an AntiGem update with a new extension: **Open the extension folder** again, then click **Reload** (↻) on the extension's card in `chrome://extensions`. If **Settings → Browser** warns about an old path, press **Register with Chrome** again.

For uninstalling and troubleshooting, see the extension's [README](https://github.com/Santoshkurmi/antigem-browser-extension).
