---
title: What to download
sidebar: What to download
description: Every file on the releases page and who it is for, plus the companion apps and when you need them.
updated: 2.0.4-beta.2
---

Everything is on the [releases page](https://github.com/santoshkurmi/antigem/releases) on GitHub. AntiGem isn't on the Play Store. This page tells you which file you need.

> [!TIP] Short answer
> Almost everyone needs only **`AntiGem-vX.Y.Z.apk`** from the newest release. The app downloads everything else it needs by itself.

## Reading the releases page

- The newest release is at the top. The one marked **Latest** is the newest **stable** version.
- Releases marked **Pre-release** are **betas**: newer features, possibly some bugs. They install over the stable app and keep your data. See [Updating](./09-updating-and-uninstalling.md#beta-updates).
- A release called **rootfs-v2** is not an app. It holds the Linux environment that the app downloads on first launch (see below).
- Open **Assets** under a release to see its files.

## The app files

Each release has three APKs. Pick the one for your phone:

| File | Who it's for |
| :--- | :--- |
| `AntiGem-vX.Y.Z.apk` | **Almost every phone.** Phones with a 64-bit ARM processor (arm64), which is nearly every phone from the last years. |
| `AntiGem-vX.Y.Z-chroot.apk` | Rooted phones that will run the agents in the [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md). You don't have to choose it up front: the normal app offers to install this one from its Ubuntu chroot page. |
| `AntiGem-vX.Y.Z-x86_64.apk` | Android emulators on a PC, and Chromebooks or tablets with an Intel or AMD processor. Includes Ubuntu chroot support. |

The other files under **Assets** are not for using the app:

| File | What it is |
| :--- | :--- |
| `…-mapping.zip` | Helps developers read crash reports. Don't install it. |
| **Source code** (zip / tar.gz) | The app's source code, added by GitHub to every release. |

### Which processor does my phone have?

- **Most phones:** arm64. Take the normal APK.
- **Not sure?** Install the normal APK. On the Linux setup screen, the line under the choices shows your processor (for example `aarch64`, which is arm64).
- **Old 32-bit phones** (`armeabi-v7a`) can install the normal APK, but the Linux environment needs a 64-bit processor. The app tells you so on first launch, and you can still use it with [server mode](../05-power-features/02-server-mode.md) (the agents run on a computer) or over SSH.

### Which Android version?

Android **7.0 or newer**. Check yours in your phone's **Settings → About phone → Android version**.

## The Linux environment (downloaded by the app)

On first launch the app downloads its Linux environment for you. You don't need to download it yourself, except in two cases:

- your phone can't reach GitHub or Hugging Face from the app, or
- you want to install it offline, or on many phones.

Then download the ZIP by hand from the [rootfs-v2 release](https://github.com/Santoshkurmi/antigem/releases/tag/rootfs-v2) (or the [Hugging Face copy](https://huggingface.co/datasets/santoshkurmi/rootfs-v2/tree/main)), and on the setup screen choose **From a ZIP file**. See [First launch](./06-first-launch.md#set-up-your-linux-environment).

| File in rootfs-v2 | For |
| :--- | :--- |
| `bootrapz_<date>.zip` | arm64 phones (also on Hugging Face) |
| `bootrapz_x86_64_<date>.zip` | the x86_64 app (GitHub only) |

## Companion apps (only if you need them)

| App | You need it when | Where |
| :--- | :--- | :--- |
| **Termux:API for AntiGem** | You want `termux-*` commands that use phone hardware, like `termux-location` or `termux-camera-photo`. The common ones (`termux-toast`, `termux-clipboard-*`, `termux-vibrate`…) are built in. | [termux-api releases](https://github.com/Santoshkurmi/termux-api/releases) · [Termux:API](../05-power-features/15-termux-api.md) |
| **Termux:X11 for AntiGem** | You want a Linux desktop (XFCE, LXQt) and Linux apps with windows. | [termux-x11 releases](https://github.com/Santoshkurmi/termux-x11/releases/latest) · [Linux desktop (X11)](../05-power-features/14-x11-desktop.md) |
| **AntiGem for VS Code** | You want the same agents and chats on your computer, or to use your PC's agents from the phone. | VS Code Marketplace or Open VSX · [AntiGem for VS Code](../09-other-apps/01-vscode-extension.md) |
| **AntiGem Browser Bridge** (Chrome extension) | Only with AntiGem for VS Code, so agents on your computer can use your real Chrome. The phone app doesn't need it. | [AntiGem Browser Bridge](../09-other-apps/02-chrome-extension.md) |

> [!IMPORTANT]
> Termux:API and Termux:X11 must be **AntiGem's own builds**, from the links above. The official Termux versions, and the ones made for the old `com.termux` AntiGem, don't work with the current app.

## Next step

:::cards
- [Install AntiGem](./05-installation.md) — Install the APK, step by step.
- [First launch](./06-first-launch.md) — Every setup screen explained.
:::
