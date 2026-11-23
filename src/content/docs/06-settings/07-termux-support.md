---
title: Termux Support
description: The two Termux companion features, Termux:API and the X11 desktop, and where to set them up.
updated: 2.0.4-beta.2
---

AntiGem's Linux environment is built from Termux packages, and two Termux extras work with it: **Termux:API** (phone features from the terminal) and **Termux:X11** (a Linux desktop). This page is a menu for both.

**Where:** ☰ → **Settings** → **Termux Support**

| Row | What it's for | Page |
| :--- | :--- | :--- |
| **Termux:API** | How `termux-*` commands are handled: **Built-in** or **AntiGem's Termux:API app** | [Termux:API](../05-power-features/15-termux-api.md) |
| **X11 Desktop** | Linux desktop apps with Termux:X11 | [Linux desktop (X11)](../05-power-features/14-x11-desktop.md) |

> [!NOTE]
> With the [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md) running the phone, **Termux Support** and **Termux:API** show **Termux only**, and the main settings list shows **X11 Desktop** directly instead (the desktop works in the chroot too).

Both companion apps must be AntiGem's own builds, not the official Termux ones. See [Termux:API and Termux:X11 for AntiGem](../09-other-apps/03-termux-companions.md).
