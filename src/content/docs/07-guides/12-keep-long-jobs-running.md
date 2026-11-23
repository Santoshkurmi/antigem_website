---
title: Keep long jobs running
description: Make builds, servers and agents keep going when you leave the app or the screen turns off.
updated: 2.0.4-beta.2
---

Android likes to stop apps in the background to save battery. These steps make sure a long build, a dev server or an agent's task keeps going while you do something else.

:::steps
### Allow notifications

AntiGem's background service needs to show a notification to keep running. Android's **Settings → Apps → AntiGem → Notifications**: allowed. See [Running in the background](../03-using-the-app/11-background-and-notifications.md).

### Turn off battery optimization for AntiGem

Android's **Settings → Apps → AntiGem → Battery** → **Unrestricted** (or **Don't optimize**). The words differ by phone maker.

### Check your phone maker's extra settings

Many phones (Xiaomi, Oppo, OnePlus, Realme, Vivo, Huawei, Samsung…) stop apps on their own. Look for **Autostart**, **Background activity**, **App launch** or **Sleeping apps / Never sleeping apps**, and allow AntiGem. The site [dontkillmyapp.com](https://dontkillmyapp.com) has steps for each brand.

### Keep the phone awake for very long jobs

In the terminal, `termux-wake-lock` keeps the processor awake until `termux-wake-unlock`. Use it for jobs that run for hours, then turn it off (it uses battery).

### Lift Android's process limit if processes get killed

On Android 12 and newer, Android kills processes past a limit. If you see processes ending with "signal 9", see the fix in [Troubleshooting](../08-help/01-troubleshooting.md#background-and-battery).
:::

## Even better: run it elsewhere

For jobs that run all night, or when the phone needs to sleep, run the agents on a computer: [server mode](../05-power-features/02-server-mode.md) (a VPS or home server) or [Connect to PC](../05-power-features/03-connect-to-pc.md). They keep working when the phone is off.

## Get told when it's done

- **Vibrate when a chat finishes** (**Settings → Agents**, on by default) buzzes once when a chat stops.
- For terminal jobs: `long-command && termux-notification -t "Done"`. See [Termux:API](../05-power-features/15-termux-api.md).
