---
title: Updating and uninstalling
description: In-app updates, beta versions, background checks, and what happens to your data when you uninstall.
updated: 2.0.4-beta.2
---

AntiGem updates itself from GitHub: it checks for new versions, shows what's new, and installs the update over the old app. Your data stays.

**Where:** ☰ (top left) → **Settings** → **Updates**

## How updates work

AntiGem checks for a new version every time you open it, and in the background (every 12 hours by default). When one is out, the **New Update Available** dialog shows:

- the version you have and the new one,
- **WHAT'S NEW**: the list of changes,
- **GitHub** (opens the release page), **Later** and **Update**.

Tap **Update**: AntiGem downloads the APK (**Downloading…**) and opens Android's installer (**Downloaded! Launching installer…**). Tap **Install**. Your Linux environment, projects, chats and sign-ins are kept.

> [!NOTE]
> The first time, Android may ask you to allow AntiGem to install apps. Turn on **Allow from this source** for AntiGem and go back.

### Critical updates

A dialog marked **Critical Release** (instead of **Release Update**) can't be closed with **Later**: the version you have is too old to keep working, or has a serious problem. Install it to go on.

## Beta updates

### Get beta updates

**Default:** off. Turn it on to get each beta (early versions with new features) as soon as it's out, as well as the stable releases.

> [!WARNING]
> Betas can have bugs. Once a beta is installed, you can't go back to the stable version until the next stable release (uninstalling would delete your data). Turning betas off later stops new betas; you then get the next stable release as a normal update.

The text under the switch tells you where you are, for example **You get the stable releases only.** or **You're on a beta (v2.0.4-beta.2). You get each new beta, and the stable releases.**

## Background checks

### Check in the background

**Default:** on, every **12 hours**. AntiGem checks for a new version even when it's closed, and notifies you when one is out. You can set the number and the unit (up to 999). With it off, AntiGem still checks every time you open it.

## Updating by hand

You can also download the newest APK from the [releases page](https://github.com/santoshkurmi/antigem/releases) and install it over the app. It keeps your data, as long as it's the same kind of build (from the same releases page). See [What to download](./04-downloads.md).

## What's new in each version

**☰ → Settings → About & Info → What's new** lists every version and what changed. See [Updates and What's new](../06-settings/09-updates.md).

## Uninstalling

> [!CAUTION]
> Uninstalling deletes everything inside the app: the Linux environment and every package you installed, projects stored in AntiGem's own folders, chats, and the agents' sign-ins. Android doesn't ask twice.

Before you uninstall:

1. **Back up** with **Settings → Backups & Restore → Back up environment**. The backup is saved to `Download/Antigem/backups`, which survives an uninstall. See [Backups and restore](../05-power-features/12-backups.md).
2. Projects you keep in your phone's shared storage (outside the app) are not deleted.
3. If you turned on **Data loss protection**, turn it off first, or Android won't let you uninstall. See [Data loss protection](../05-power-features/13-data-protection.md).

## Troubleshooting

:::details The update downloads but won't install
Android needs permission to let AntiGem install apps: allow it when asked (or in Android's **Settings → Apps → AntiGem → Install unknown apps**). If Android says "App not installed", the installed app and the update are differently signed builds (for example a test build). See [Install AntiGem](./05-installation.md#troubleshooting).
:::

:::details "Download failed"
Check your internet connection and tap **Update** again. If GitHub is blocked on your network, download the APK from the releases page on another network and install it by hand.
:::

:::details I don't get update notifications
Check that **Check in the background** is on, and that AntiGem may show notifications. Some phones stop background work of apps; see [Running in the background](../03-using-the-app/11-background-and-notifications.md). AntiGem still checks every time you open it.
:::
