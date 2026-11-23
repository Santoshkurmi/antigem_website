---
title: Termux:API and Termux:X11 for AntiGem
sidebar: Termux companions
description: Why AntiGem needs its own builds of Termux:API and Termux:X11, where to get them, and what to do when moving from the old app.
updated: 2.0.4-beta.2
---

Two Termux companion apps add features to AntiGem's terminal. Both must be **AntiGem's own builds**.

| App | Adds | Get it | Set it up |
| :--- | :--- | :--- | :--- |
| **Termux:API for AntiGem** | `termux-*` commands for phone hardware: location, camera, sensors, SMS, Wi-Fi… (the common commands are already built in) | [termux-api releases](https://github.com/Santoshkurmi/termux-api/releases) | [Termux:API](../05-power-features/15-termux-api.md) |
| **Termux:X11 for AntiGem** | A Linux desktop (XFCE, LXQt) and Linux apps with windows | [termux-x11 releases](https://github.com/Santoshkurmi/termux-x11/releases/latest): the APK and the `.deb` | [Linux desktop (X11)](../05-power-features/14-x11-desktop.md) |

## Why AntiGem's own builds?

These apps talk to AntiGem directly, as the same Linux user (they share AntiGem's user ID). Android only allows that between apps signed by the same developer and built for the same package. So:

- The **official Termux** versions (from F-Droid, GitHub or the Play Store) don't work with AntiGem.
- The versions made for the **old AntiGem** (`com.termux`) don't work with the current app (`ai.antigem`).
- For Termux:X11, don't install `termux-x11-nightly` from the x11-repo: it only works with the official Termux:X11 app. Use AntiGem's `.deb` instead.

## Moving from the old app

If you used these with the old `com.termux` AntiGem, download them again from the links above and install them for `ai.antigem`. The old ones keep working only with the old app. See [Moving from the old app](../01-getting-started/08-moving-from-the-old-app.md).
