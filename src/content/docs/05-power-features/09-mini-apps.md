---
title: "Mini Apps"
description: "Small apps made of HTML and JavaScript that AntiGem runs like real Android apps: the Mini Apps screen, installing .agapp files, permissions, App info, updates, Developer mode and where data lives."
updated: 2.0.4-beta.2
---

A **mini app** is a small app made of HTML, CSS and JavaScript that AntiGem opens full screen, like a real Android app. It gets its own card in Android's recent apps, its own home-screen icon if you want one, native screens and dialogs, storage, files, notifications and reminders. Agents build them on the phone in minutes, and finished apps are shared as signed `.agapp` files that install and update like APKs.

This page is about using mini apps. To build them, see [Build mini apps](../10-developers/01-build-mini-apps.md), or the guide [Make a mini app and share it](../07-guides/17-make-a-mini-app.md).

**Where:** the drawer (**☰**, top left) → the **Mini Apps** icon in the bottom bar.

## How it works

- **Two kinds of apps.**
  - **Installed apps** come from a signed `.agapp` package. Their code is kept read-only in AntiGem's private storage, and every file is checked against the developer's signature each time it loads. They always run.
  - **Development apps** are folders in `~/mini-apps/` that an agent (or you) is still working on. They aren't signed, they reload as you edit them, and they only run with [Developer mode](#developer-mode) on. They have a **DEV** label.
- **Permissions like a small Android.** An app can only use what it declared, and you allow or deny each permission. See [Permissions](#permissions).
- **Each app is its own window.** It has its own card in recent apps with its name, icon and color, and a splash screen.
- **Its data is separate from its code.** Updating or replacing an app never touches its data.

## The Mini Apps screen

A grid of your apps. Tap one to open it. **Long-press** one for its [App info](#app-info).

Under each icon: the version (installed apps), **DEV · <version>** (development apps), or a red **modified** (an installed app whose files were changed; see [Troubleshooting](#troubleshooting)). Dimmed icons can't run right now.

The top bar, right side:

- **Get apps** (the shop icon): the AntiGem mini app catalog. See [Get apps](#get-apps).
- **Developer mode** (`</>`): turns development apps on or off. See [Developer mode](#developer-mode).
- **Install or update an app (.agapp)** (the install icon): **Install from a file** or **Install from a link**.
- **Developer key** (the key icon): for people who sign their own apps. See [Build mini apps](../10-developers/01-build-mini-apps.md).
- **Refresh**: read the list again.

With no apps it says **No mini apps yet**, with **Get apps**, and suggests asking an agent: "make me a habit tracker mini app".

## Get apps

**Get apps** (**Get mini apps**) lists the apps published in AntiGem's mini app repository on GitHub. Each shows its developer, version, size and what it **Asks for**, with **Install**, **Update** or **Open**. Installing goes through the normal install screen, after the download is checked against the catalog. The icon at the top opens the repository on GitHub.

If you have a development copy with the same id, the button is **Replace**: it asks **Replace the development copy?**, then deletes that folder and its data and installs the published app.

## Install an app

You can install an `.agapp` file the way you install an APK:

- **Tap the file** in a messaging app, email, a file manager or your browser's downloads, and pick **Mini app installer** (or **AntiGem**).
- **Share** the file to AntiGem.
- In AntiGem's **Files**: tap the file → **Install mini app** ("Check the developer's signature, then install or update").
- **Mini Apps → Install or update an app (.agapp)** → **Install from a file**, or **Install from a link** ("An https:// link to an .agapp file (a release page download, your server, a cloud drive's direct link)") → **Download**.

Links must be `https://`. Files over 100 MB are refused.

### The install screen

AntiGem checks the package's signature first, then shows what will happen:

| Screen | When | What happens |
| :--- | :--- | :--- |
| **Install <name>?** | A new app. | "A new app from this developer. Only packages signed with the same key can update it." It lists the permissions it will ask for. |
| **Update <name>?** | Same developer, newer version. | "Same developer as the installed version. Its data and permissions are kept." New permissions are listed. |
| **Reinstall <name>?** | Same developer, same version. | Files replaced, data and permissions kept. |
| **Go back to an older <name>?** | Same developer, older version. | The red **Downgrade** button installs it. Its data is kept. |

The screen always shows **Signed by <developer>**, the developer's **Key** (a short fingerprint like `AB12:CD34:EF56:7890`) and the version. After installing: **App installed.** or **App updated.**, with **Open** and **Done**.

### Updates and the developer key check

An installed app can only be updated by a package signed with **the same developer key**. This keeps anyone else from replacing an app you trust with their own. A package from another developer is refused: "This package is signed by a different developer than the installed …". Only the original developer can update it; if you trust the new one, uninstall the old app first (its data is deleted).

To update an app, open the newer package the same way you installed it. The installer shows **Update**.

## Permissions

Each app lists what it may use. On its first launch, a dialog **<App> wants to** lists them, each with a switch ("You can change these later in App info."). Tap **Continue**, or **Deny all**. Later, an app can ask for one with **Allow <App> to use this?** (**Allow** / **Don't allow**).

| Permission | What it allows |
| :--- | :--- |
| **Internet** | Connect to the listed websites, or to any website (with a warning) |
| **Local servers** | Servers running on this phone |
| **Folder <path>** | One folder of your storage: "Read only", "Write (not read)" or "Read and change" |
| **All files** | All your shared storage and home folder (a warning, and you must type to confirm) |
| **Notifications** | Show notifications and set reminders |
| **Run in the background** | "Do tasks while closed, up to 48 times a day" |
| **Clipboard** | Read your clipboard |
| **Camera**, **Microphone** | Use them (with a warning) |
| **AntiGem tools: <server>** | Use one of AntiGem's MCP servers, for example your notes |

An app needs no permission for its own storage, dialogs, writing to the clipboard and sharing text.

Some permissions can be **required**: "Required: the app won't open without it". If one is off, the app shows **<App> can't run without** and the missing ones, with **Review permissions** and **Close**.

### What a mini app can never reach

Whatever you allow, a mini app can never read other mini apps' code or data, AntiGem's own folder (`~/.antigem`, with your settings and the browser profile), hidden folders like `~/.ssh` or `~/.claude` (unless it declares one and you allow it), AntiGem's private files, or AntiGem's own local servers.

## App info

**Long-press** an app in Mini Apps. (In a development app, also through the developer bubble → **App info & permissions**.) It shows the name, version and id, the description, and:

- **Permissions**: one switch per permission. Required ones are marked **Required**; turning one off asks first (**<App> needs this**). **Folders you picked** lists folders the app was given, with **Remove**. An app without permissions says "This app asks for no permissions. It can only use its own storage."
- **Storage**: where its code and data are.
- **Clear data** (**Clear <name>'s data?**): "Its storage, databases, files and logs are deleted. The app itself stays." Its permissions are kept.
- **Reset permissions**: forgets every decision and picked folder. The app asks again next time. Its data stays.
- **Add to home screen**: puts the app's own icon on your home screen.
- **Share app** (installed apps): sends the exact signed package it was installed from, as `<Name>-<version>.agapp`.
- **Uninstall** (installed apps): see below.
- **Export signed package** (development apps): for developers, see [Build mini apps](../10-developers/01-build-mini-apps.md).

## Developer mode

**Mini Apps → `</>`** (**Developer mode**). It decides whether development apps can run. **Default:** on in the beta.

- **On:** "Developer mode on: development apps run, with developer tools". Development apps open with a developer bubble.
- **Off:** "Developer mode off: only installed (signed) apps run". Development apps are dimmed, and opening one explains that it only runs with Developer mode on. Their background tasks don't run.

Turn it off if you only use apps from others and don't build your own.

## Uninstall

- **Installed apps:** App info → **Uninstall** → **Uninstall <name>?** "The app and all its data (storage, files, reminders, background tasks, notifications) are removed." Its permissions and home-screen icon go too.
- **Development apps:** delete the app's folder in `~/mini-apps` (in Files or the terminal). Its data stays until you use **Clear data** first.

## Where things live

| What | Where |
| :--- | :--- |
| Development apps | `~/mini-apps/<folder>/` |
| Installed apps' code | AntiGem's private storage (read-only) |
| Every app's data | `~/.antigem/mini-apps/<id>/` |
| Packages exported from the phone | `~/mini-apps-dist/` |
| Developer key backups | `Download/AntiGem/antigem-key-*.agkey` |

## Troubleshooting

:::details An app is marked "modified" and won't open
Its files were changed after it was installed, so they are no longer the ones the developer signed. Uninstall it and install it again from its developer.
:::

:::details A DEV app won't open
Development apps only run with **Developer mode** on: tap `</>` in Mini Apps.
:::

:::details "<App> can't run without …"
A permission the app needs is off. Tap **Review permissions** and allow it, or long-press the app → App info → **Permissions**.
:::

:::details The install is refused: "signed by a different developer"
Only the original developer can update an installed app. If you trust the new package, uninstall the installed app first (its data is deleted), then install.
:::

:::details "Can't install"
The package failed the signature check, is broken, or is over 100 MB. Get it again from its developer. A link must start with `https://`.
:::

:::details Reminders or notifications come late or silent
Android limits apps in the background. Remove AntiGem's battery limits (see [Running in the background](../03-using-the-app/11-background-and-notifications.md)) and check the app's **Notifications** permission.
:::

:::cards
- [Make a mini app and share it](../07-guides/17-make-a-mini-app.md) — Have an agent build one.
- [Build mini apps](../10-developers/01-build-mini-apps.md) — The SDK, manifest, signing and publishing.
- [Files and notes](../03-using-the-app/09-files-and-notes.md) — Open .agapp files from Files.
- [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md) — The tools mini apps can ask for.
:::
