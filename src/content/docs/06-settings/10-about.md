---
title: About & Info
description: The app version and build details, update checks, What's new, exporting the bridge, and links.
updated: 2.0.4-beta.2
---

The version you have, how it was built, and useful links. Look here first when you report a bug.

**Where:** ☰ → **Settings** → **About & Info**. The row shows your app version.

## What's new

This version's changes. Tap it for the full list of every version. See [Updates and What's new](./09-updates.md#whats-new).

## Build & Package Information

What to copy into a bug report:

- The **version** (for example `2.0.4-beta.2`).
- **IDE Bridge (connected)**: whether the app reaches the [bridge](../01-getting-started/02-key-concepts.md#the-bridge).
- **Application ID**: `ai.antigem` for the normal app.
- **Build Type**: release or debug.
- **Native Architecture**: your phone's processor type, for example `arm64-v8a`.

## Software Updates

**Check for Updates** checks GitHub releases for a newer version and downloads the matching APK. It says **AntiGem is up to date** if there's nothing new. Beta and background-check options are in [Updates](./09-updates.md).

## AGY IDE Bridge Binary

**Export to Downloads** saves a copy of the bridge program (`agy_ide_bridge`) to your phone's Download folder, to run it yourself in another chroot, Termux, or a terminal elsewhere. The card shows **IN DOWNLOADS** or **NOT EXPORTED**, with the path, size and date; **View File** opens it.

Most people never need this. For [server mode](../05-power-features/02-server-mode.md), the server needs a bridge built for the server's processor (see that page).

## Resources & Repository

- **Discord Community**: get help, share builds and ideas.
- **GitHub Repository**: the source code.
- **Release Changelogs**: release notes and APK downloads on GitHub.
