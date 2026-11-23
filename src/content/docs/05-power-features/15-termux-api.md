---
title: Termux:API
description: Use termux-* commands in the terminal (toast, clipboard, vibrate, notifications and more), built in or with AntiGem's Termux:API companion app.
updated: 2.0.4-beta.2
---

`termux-*` commands let scripts in the terminal (and agents) use phone features: show a toast, read the clipboard, vibrate, post a notification, take a photo, get the location. The common ones are built into AntiGem. The rest need **AntiGem's Termux:API app**.

**Where:** ☰ → **Settings** → **Termux Support** → **Termux:API**

## Who handles the commands

One of the two, never both:

### Built-in

**Default.** No app needed. AntiGem itself handles clipboard, toast, torch, vibration, text to speech, battery, volume and notifications. Other commands (location, camera, sensors, SMS…) say they need AntiGem's Termux:API app.

### AntiGem's Termux:API app

Every `termux-*` command goes to the companion app, all of them supported. Install the app first (**Get the app**); until it's installed, the commands say so. You can switch back to **Built-in** any time, without reinstalling anything.

## Built-in commands

| Command | Does |
| :--- | :--- |
| `termux-toast "Hi"` | Shows a short message on screen |
| `termux-vibrate` | Vibrates the phone |
| `termux-clipboard-get` / `termux-clipboard-set` | Reads / sets the clipboard |
| `termux-torch on` | Turns the flashlight on or off |
| `termux-tts-speak "Done"` | Speaks text aloud |
| `termux-notification` / `termux-notification-remove` | Posts / removes a notification |
| `termux-volume` | Reads or sets volumes |
| `termux-battery-status` | Battery level and state |
| `termux-open` / `termux-open-url` | Opens a file or a link in another app |
| `termux-wake-lock` / `termux-wake-unlock` | Keeps the phone awake for a long job |

```bash title="Example: tell me when a long build ends"
npm run build && termux-notification -t "Build done" -c "Your build finished" && termux-vibrate
```

## The terminal commands

The `termux-*` commands come from Termux's `termux-api` package, which AntiGem installs during setup. If they're missing, **Install termux-api** on this page installs it.

## Installing the companion app

For location, camera, sensors, SMS, Wi-Fi and the other hardware commands:

1. Download **AntiGem's Termux:API app** from its [releases page](https://github.com/Santoshkurmi/termux-api/releases) and install it.
2. In **Settings → Termux Support → Termux:API**, choose **AntiGem's Termux:API app**.
3. Give the companion app the Android permissions each command asks for (location, camera…).

> [!IMPORTANT]
> It must be **AntiGem's build**: it shares AntiGem's Linux user to talk to it. The official Termux:API app, or the companion made for the old `com.termux` AntiGem, doesn't work with the current app. See [Termux:API and Termux:X11 for AntiGem](../09-other-apps/03-termux-companions.md).

> [!NOTE]
> With the [Ubuntu chroot](./04-ubuntu-chroot.md) running the phone, this page shows **Termux only**.

## Troubleshooting

:::details A command says it needs AntiGem's Termux:API app
It's not one of the built-in commands. Install the companion app and choose it on this page.
:::

:::details "command not found" for termux-* commands
Tap **Install termux-api** on this page (or run `pkg install termux-api`).
:::

:::details The companion app is installed but commands do nothing
Check it's AntiGem's build (not the official Termux one or the old `com.termux` one), that **AntiGem's Termux:API app** is chosen on this page, and that the app has the Android permission the command needs.
:::
