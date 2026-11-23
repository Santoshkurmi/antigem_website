---
title: Install AntiGem
sidebar: Installation
description: Download the APK from GitHub and install it on your phone. Takes about two minutes.
updated: 2.0.4-beta.2
---

AntiGem isn't on the Play Store. You install it from its GitHub releases page, like many open-source apps. It works on **Android 7.0 and newer**.

## Which file to download

Most people want **`AntiGem-vX.Y.Z.apk`** (for 64-bit ARM phones, nearly all phones). The other two files are for rooted phones with the Ubuntu chroot (`-chroot.apk`) and for emulators and Intel/AMD devices (`-x86_64.apk`). Not sure? See [What to download](./04-downloads.md).

## Install it

:::steps
### Open the releases page

On your phone, open [github.com/santoshkurmi/antigem/releases](https://github.com/santoshkurmi/antigem/releases). The newest release is at the top. **Latest** is the newest stable version; **Pre-release** marks a beta.

### Download the APK

Scroll down to **Assets** and tap `AntiGem-vX.Y.Z.apk`. Your browser downloads it.

> [!NOTE]
> Betas (**Pre-release**) install over the stable app and keep your data. But once you install a beta, you can't go back to stable until the next stable release (uninstalling would delete your data).

### Allow installing apps from your browser

When you open the downloaded file, Android asks for permission to install apps from your browser. Tap **Settings**, turn on **Allow from this source**, then go back.

### Install and open

Tap **Install**. If Google Play Protect warns about an unknown app, see the fold-out below. When it's done, tap **Open**. AntiGem starts with its **Welcome to AntiGem** screen.

![The first screen: three permissions](/screens/setup_permissions.webp "frame")
:::

## Next step

The app now walks you through permissions, its Linux environment and choosing your agents. See [First launch](./06-first-launch.md).

## Troubleshooting

:::details Google Play Protect says the app is unknown or blocks it
Play Protect warns about apps that don't come from the Play Store. AntiGem is open source and its releases are built on GitHub from the public code. Tap **More details**, then **Install anyway** (the words differ a little between phones). If Play Protect offers to scan the app, you can let it.
:::

:::details Android says "App not installed"
Usually one of these:

- **A different build of AntiGem is installed** with another signature (for example a test build). Android can't update an app with a differently signed one. Back up first ([Backups and restore](../05-power-features/12-backups.md)), uninstall the old one, then install.
- **You tried to install an older version** over a newer one. Download the newest release.
- **The download was cut short.** Download the APK again and check its size matches the one on the releases page.
- **Not enough free space.** Free some space; AntiGem also needs about 2 GB more for its Linux environment after install.
:::

:::details My phone is 32-bit
The app installs, but its Linux environment (terminal, IDE backend and agents on the phone) needs a 64-bit processor. First launch shows **Not available on this phone**, and you can still use AntiGem with [server mode](../05-power-features/02-server-mode.md) (the agents run on a computer or server) or over SSH.
:::

:::details Can I install it next to Termux or the old AntiGem?
Yes. From v2.0.0, AntiGem uses its own package name (`ai.antigem`), so it installs next to the real Termux app and next to the old AntiGem (`com.termux`). To move your setup from the old app, see [Moving from the old app](./08-moving-from-the-old-app.md).
:::

:::details Can I install it on an emulator or a Chromebook?
Yes, with `AntiGem-vX.Y.Z-x86_64.apk` for Intel/AMD devices. ARM Chromebooks use the normal APK. See [What to download](./04-downloads.md).
:::
