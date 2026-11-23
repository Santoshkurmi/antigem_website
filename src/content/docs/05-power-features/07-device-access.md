---
title: "ADB Connect, Shizuku and root"
sidebar: "ADB, Shizuku and root"
description: "Give the terminal and the agents shell access to this phone: adb over Wireless debugging (paired from a notification), Shizuku, or root."
updated: 2.0.4-beta.2
---

**ADB Connect** gives the terminal and the agents shell access to the phone itself, as Android's `shell` user (or as root). With it they can install and uninstall apps, read logs, change settings with `settings` and `pm`, take screenshots and more. Android automation, Android development and REA all use it.

**Where:** **Settings → ADB Connect**.

## How it works

At the top, under **How AntiGem reaches this phone**, pick one of three ways:

| Way | How | Runs as | For |
| :--- | :--- | :--- | :--- |
| **ADB** | adb over Wireless debugging: pair once, then AntiGem connects by itself. | the shell user | Any phone with Android 11 or newer. **Default.** |
| **Shizuku** | Through the Shizuku app. No pairing here. | the shell user (or root, if Shizuku runs as root) | People who already use Shizuku. |
| **Root** | Through the phone's `su` (Magisk, KernelSU, APatch). | root | Rooted phones. |

The page below the picker shows the steps for the way you picked. [Android automation](./08-android-automation.md) uses the one picked here. In a chat, you can ask an agent for any way that is set up: "use adb" (`adb shell …`), "use shizuku" (`rish -c …`) or "use su".

> [!CAUTION]
> Shell access lets agents do almost anything the shell user can: install and remove apps, change settings, read app lists and logs. Root goes further: full control of the phone. Use it only with agents you trust, and keep approvals on.

## ADB

:::steps
### Install ADB

Tap **Install android-tools**. It installs `adb` and `fastboot` in the terminal. In the [Ubuntu chroot](./04-ubuntu-chroot.md) the button is **Install adb and fastboot** and installs Ubuntu's packages, which run as your user without `sudo` (also for USB and OTG devices).

If the step says **Broken** ("adb is installed but can't start"), a library adb needs is too old. Tap **Repair ADB**: it updates the package lists and upgrades adb and its libraries.

### Turn on Wireless debugging

The step tells you what is missing:

- "Open About phone and tap Build number 7 times to unlock Developer options."
- "In Developer options, turn on Wireless debugging. Your phone must be on Wi-Fi."
- When it says **Ready**, you're done. Wireless debugging uses a new port each time it turns on; AntiGem finds it for you.

### Pair this device

You only do this once per phone.

1. Tap **Start pairing**. A notification appears and Wireless debugging opens.
2. Tap **Pair device with pairing code**.
3. Pull down the notification shade and type the 6-digit code into the AntiGem notification.

Stay in Settings while you do this: Android closes the pairing dialog as soon as you leave it. The page follows along ("Pairing dialog found on port …", "Pairing with …") and ends with "Paired. You won't need to do this again on this phone."

**Stop** cancels, **Open Wireless debugging** opens the settings page again.

### Connect

Tap **Connect**. Leave **Port** empty (**Auto**): AntiGem finds it on this phone. **IP** is `localhost` for this phone. For another device on your Wi-Fi, enter its IP and port. **Disconnect** ends all connections.
:::

![ADB Connect: the How AntiGem reaches this phone picker, and the first ADB steps](/screens/settings_adb_connect.webp "frame")

### The pairing notification

The pairing code goes into a notification so you never have to leave the pairing dialog. It shows **Waiting for pairing code**, **Pairing service found**, **Pairing…**, **Paired** or **Pairing failed**, with a reply box (**Enter pairing code**) and **Stop**.

AntiGem's notifications must be allowed for this. If they are off, the step says so, with **Allow notifications**.

On a split screen, or for another device, you can also type the **Port** and **Code** shown in the pairing dialog right on the page and tap **Pair**.

### Reconnect automatically

When Wireless debugging turns on again (for example after Wi-Fi reconnects), AntiGem finds the new port and connects while it runs. **Default:** on.

### Turn Wireless debugging on by itself

After a reboot, or when Wi-Fi comes back, AntiGem switches Wireless debugging on again by itself (while it runs), so adb reconnects without opening Settings. **Default:** off.

Turning it on grants AntiGem a system permission (`WRITE_SECURE_SETTINGS`) once, through adb, Shizuku or root. On a Wi-Fi network you haven't allowed before, Android still asks you first. Reinstalling AntiGem removes the permission: then turn this off and on again.

### Devices

Lists the connected devices with their state (`device` when it works). The icon on each row disconnects it.

### Older phones (Android 10 and below)

Wireless debugging needs Android 11 or newer. On older phones, run `adb tcpip 5555` once from a computer, then connect to `localhost` port `5555` in step 4.

### adb in the terminal

```bash title="Terminal"
adb devices
adb shell
adb install app.apk
```

## Shizuku

[Shizuku](https://shizuku.rikka.app) is a free app that lets other apps run commands as the shell user (like `adb shell`), without a computer.

:::steps
### Install Shizuku

Tap **Get Shizuku**. It opens Shizuku's download page.

### Start Shizuku

In the Shizuku app, start it with Wireless debugging (no PC needed) or with root. **Open Shizuku** opens it. Without root, Shizuku stops at every reboot: start it there again.

### Allow AntiGem

Tap **Allow AntiGem**. Shizuku asks once whether AntiGem may use it. If you denied it, tap again, or allow AntiGem in the Shizuku app's list of apps.
:::

The status at the top says **Shizuku not installed**, **Shizuku not running**, **Shizuku too old** (update to v11 or newer), **Permission needed** or **Ready** ("Commands run as …").

### rish in the terminal

```bash title="Terminal"
rish -c 'pm list packages'
rish dumpsys battery
rish            # interactive
```

`rish` runs commands on the phone through AntiGem, so AntiGem must be running. It works in the Ubuntu chroot too.

## Root

For rooted phones (Magisk, KernelSU, APatch). Root gives the agents full control of the phone, beyond what adb or Shizuku allow.

:::steps
### Allow AntiGem root

Tap **Check root**. Your root manager asks you to allow AntiGem. The status then says **Root granted**: "Commands run as root through su".
:::

If your root manager shows a message every time AntiGem uses root, you can turn those off for AntiGem in the root manager.

### su in the terminal

The terminal uses the phone's own `su`:

```bash title="Terminal"
su -c 'pm list packages'
su
```

In the Ubuntu chroot, `su` and `sudo` are Ubuntu's own. There, `android-su` runs commands as root on the phone itself, through AntiGem:

```bash title="Ubuntu chroot"
android-su -c 'pm list packages'
android-su            # interactive
```

## Test

The **Test** card runs `id` through the way you picked (**Run id**) and shows the result, for example `uid=2000(shell)`. Use it to check that everything works.

## Troubleshooting

:::details "adb is installed but can't start"
A library adb needs is older than adb itself. Tap **Repair ADB**.
:::

:::details The pairing dialog closes before I can enter the code
Android closes it as soon as you leave Settings. Type the code into AntiGem's notification instead: pull down the shade without leaving the pairing dialog. If you see no notification, allow AntiGem's notifications first.
:::

:::details "Pairing failed"
The code was wrong or expired. Tap **Start pairing** again and use the new code shown in Wireless debugging.
:::

:::details adb disconnects after Wi-Fi changes or a reboot
Wireless debugging turns itself off then, and gets a new port. Keep **Reconnect automatically** on, and turn on **Turn Wireless debugging on by itself**, so AntiGem switches it back on and connects again.
:::

:::details Wireless debugging won't turn on
It needs Wi-Fi. Connect to a Wi-Fi network (any network works, even with no internet). On a network you haven't used before, Android asks you to allow debugging on it.
:::

:::details Shizuku says "Shizuku not running" after a reboot
Without root, Shizuku stops at every reboot. Open Shizuku and start it again.
:::

:::cards
- [Android automation](./08-android-automation.md) — Let agents see and control the phone.
- [Build Android apps](./05-android-development.md) — Agents install the apps they build.
- [Reverse engineering](./06-reverse-engineering.md) — REA's phone tools use adb.
- [Terminal](../03-using-the-app/07-terminal.md) — Where you use adb, rish and su.
:::
