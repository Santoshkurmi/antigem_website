---
title: Moving from the old app
description: The old AntiGem was installed as com.termux. Here is how to move your setup to ai.antigem.
---

From **v2.0.0**, AntiGem has its own package name, `ai.antigem`. The old app was installed as `com.termux`, the Termux project's name, which we used only so Termux packages could run at full speed. AntiGem now rewrites `com.termux` to `ai.antigem` inside each package as it installs it, with no proot and no slowdown.

> [!IMPORTANT]
> The old app keeps working, but its last version is **v1.2.1** and it gets no more updates. New features and fixes only come to `ai.antigem`.

Both apps can be installed at the same time, and nothing in the old one is touched. Move over whenever you're ready.

## Move your setup

:::steps
### Back up the old app

In the old app, open **Settings → Backups & Restore → Back up environment**. Tick **Include SSH keys and sign-ins** to keep your logins. The backup is saved to `Download/Antigem/backups`.

> [!CAUTION]
> A backup with sign-ins contains your keys. Never share that file.

### Install the new app

Install `AntiGem-v2.x.x.apk` from the [releases page](https://github.com/santoshkurmi/antigem/releases). Versions below 2.0.0 are the old app. See [Install AntiGem](./02-installation.md).

### Restore the backup

On the new app's setup screen, choose **From a ZIP file** and pick your backup. Every `com.termux` path is rewritten for `ai.antigem` while it restores.

### Clean up

When everything works, uninstall the old app, and delete the backup if it contains your sign-ins.
:::

The new app is brand new: a few packages, the Linux desktop (X11) and some `termux-*` commands are still being tested. If something breaks, please [open an issue](https://github.com/santoshkurmi/antigem/issues).
