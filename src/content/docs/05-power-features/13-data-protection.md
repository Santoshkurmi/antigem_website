---
title: Data loss protection
description: Guard your Linux environment, projects and chats against an accidental uninstall or "Clear data" in Android's App info.
updated: 2.0.4-beta.2
---

Your Linux environment, packages, projects and chats live inside the app. One wrong tap on **Uninstall** or **Clear data** in Android's settings deletes all of it. Data loss protection adds two guards.

**Where:** ☰ → **Settings** → **Data Loss Protection** (the page is called **Data Loss Prevention**)

> [!TIP]
> Protection stops accidents, not every loss. Keep a backup too: [Backups and restore](./12-backups.md).

## Accidental Uninstall Protection

**Default:** off (**Status: Inactive (Optional)**).

Tap **Activate Uninstall Protection** and allow AntiGem as a **device admin app** in the Android dialog. The status changes to **Status: Protected (Device Admin Active)**. While it's on, Android won't let AntiGem be uninstalled.

To uninstall later (or to turn it off), tap **Deactivate Uninstall Protection** first. If the prompt doesn't open, **Open System Device Admin Apps List** opens Android's list of device admin apps, where you can turn AntiGem on or off by hand.

> [!NOTE]
> Device admin here is used only to block uninstalling. AntiGem doesn't use it to control or lock your phone.

## App Info Clear Data Shield

**Default:** on (**Enabled (Replaces Clear Data with Space Manager)**).

In Android's **App info → Storage** for AntiGem, the **Clear data** button normally wipes everything at once. With the shield on, that button opens AntiGem's **Space Manager** instead (on most phones it's then called **Manage space**). Off: **Disabled (Standard OS Clear Data)**.

**Open Space Manager Preview** shows it; **Open App Info** opens Android's page for AntiGem.

### The Space Manager

- **Total App Footprint**: how much space AntiGem uses (Linux packages, AI settings and local data).
- **Temporary Cache**: its size, and **Clear Temporary Cache**. Safe to clear: removes temporary logs and cached files without touching your code or chats. Use this when you only want space back.
- **Danger Zone: Factory Reset**: **Wipe All App Data** deletes everything (Linux packages, projects in the app, accounts and chats). It asks twice; to confirm, type `iknowwhatiamdoing` and tap **Delete Everything**.

The same full reset is in **Settings → Terminal → Delete all app data**. See [Terminal settings](../06-settings/06-terminal.md#delete-all-app-data).

## Troubleshooting

:::details I can't uninstall AntiGem
**Accidental Uninstall Protection** is on. Turn it off on this page (**Deactivate Uninstall Protection**), or in Android's device admin apps list (search your phone's settings for "device admin"), then uninstall. Back up first.
:::

:::details "Clear data" in App info doesn't clear anything
That's the shield: it opens the Space Manager instead. Use **Clear Temporary Cache** there, or turn the shield off on this page if you really want Android's normal **Clear data**.
:::
