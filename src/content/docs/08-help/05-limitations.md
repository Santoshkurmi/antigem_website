---
title: Known limitations
description: What AntiGem can't do yet, on which phones, and what to use instead.
updated: 2.0.4-beta.2
---

AntiGem does a lot on a phone, but some things depend on your phone or aren't possible yet. Here they are, with what to use instead.

## Phones and processors

- **The built-in Linux environment needs a 64-bit processor.** On 32-bit phones the app installs, but agents can only run on a computer: use [server mode](../05-power-features/02-server-mode.md).
- **Intel/AMD devices** (emulators, some Chromebooks) need the `-x86_64.apk`. Its Linux environment downloads from GitHub only (not Hugging Face).
- **Android 7.0 or newer** is needed.

## The Linux environment

- **It isn't a full standard Linux.** It's built from Termux packages, which cover most tools (Python, Node.js, Go, Rust, Git, compilers…). Programs that only exist as normal Linux (glibc) builds don't run directly. On a rooted phone, use the [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md); otherwise run them on a server.
- **Android limits background processes.** Android 12+ kills extra processes past a limit, and some phone makers stop apps in the background. See [Running in the background](../03-using-the-app/11-background-and-notifications.md) and [Troubleshooting](./01-troubleshooting.md#background-and-battery).
- **Being tested in the new app:** a few packages, the [Linux desktop (X11)](../05-power-features/14-x11-desktop.md) and some `termux-*` commands. Please report what breaks.

## Ubuntu chroot

- Needs a **rooted** phone (Magisk, KernelSU or APatch). Root inside the chroot is root of the whole phone.
- Some pages only work with AntiGem's built-in environment and show **Termux only** while the chroot runs the phone: **Termux Support** (and **Termux:API**), **Backups & Restore** and **GitHub**. The X11 desktop, REA and Android development work in the chroot too.

## Building apps on the phone

- [Android development](../05-power-features/05-android-development.md) builds apps for **arm64** phones. For other processors, build on a computer.

## Server mode

- In server mode, chats, files and the agents' sign-ins live on the server. They're separate from the chats you have on the phone.
- **Backups & Restore** is for the phone's own Linux environment, so it isn't shown in server mode. Back up the server yourself.

## Cloud agents (Antigravity)

- Running Antigravity chats on a Google cloud machine needs **Google AI Pro or Ultra** on a personal Google account. See [Antigravity](../02-agents/02-antigravity.md).

## Help us fix it

If something here blocks you, or you found a limit that isn't listed, tell us in the [Discord](https://discord.gg/pJvvTDTc6G) or on [GitHub](https://github.com/santoshkurmi/antigem/issues).
