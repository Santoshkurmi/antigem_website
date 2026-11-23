---
title: "Running in the background"
sidebar: "Background and notifications"
description: "What keeps working when you leave AntiGem, its notification and buttons, wake locks, battery settings, phones that close apps, and Android 12's process limit."
updated: 2.0.4-beta.2
---

Agents can work for a long time: a big task, a build, a server. AntiGem keeps them going while you use other apps or turn the screen off. This page explains how, and what to do when Android stops them anyway.

**Where:** AntiGem's notification in the notification shade. Exit is also in the drawer: **☰** (top left) → the red power icon.

## How it works

AntiGem runs a **background service**: a part of the app that Android keeps alive while its notification is shown. As long as it runs, these keep working when you leave the app:

- the agents, and the local server they run in;
- terminal sessions;
- commands on the Run screen;
- the browser's tabs, your open files and everything else you left open.

Pressing **Back** on the Chat screen only moves AntiGem to the background. It doesn't stop anything.

The service starts when you allow notifications. That's why the first-launch screen asks for them (**Notifications**: "Keeps the background service running and shows progress") and doesn't continue without them (**Allow notifications to continue**).

> [!NOTE]
> With [server mode](../05-power-features/02-server-mode.md), the agents run on your server, so they keep working even when the phone is off. Antigravity's [cloud agents](../02-agents/02-antigravity.md) run in Google's cloud. The [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md) runs outside the app and can keep running after you exit AntiGem.

## The notification

AntiGem's notification is titled **AntiGem**. Its text counts your terminal sessions and running commands, for example **2 sessions · 1 running**, and adds **(wake lock held)** while a wake lock is on. Tap it to open the app.

![AntiGem's notification, expanded, with the Exit, Acquire wakelock and Float buttons](/screens/notification_service.webp "frame")

Expand it to see three buttons:

### Exit

Stops everything and closes AntiGem: the local server and agents, all terminal sessions, running commands and the wake lock. With the Ubuntu chroot, its own exit setting decides whether it stops too.

The same thing from inside the app: **☰** → the red power icon (**Exit App**) → **Exit App**. That dialog also asks about the Ubuntu chroot when you use it.

### Acquire wakelock

Keeps the phone's processor and Wi-Fi awake, so jobs don't slow down or stop while the screen is off. It lasts **up to 1 hour**, then ends by itself. A message says **Wake lock activated for 1 hour**, and the button becomes **Release wakelock**.

If AntiGem isn't allowed to ignore battery optimization yet, Android also asks for that: allow it.

Tap **Release wakelock** when your job is done, to save battery (**Wake lock released**).

From the terminal, `termux-wake-lock` and `termux-wake-unlock` do the same.

### Float

Opens the floating chat over the app you are using. See [Floating chat, switcher and Gemmy](./10-floating-chat-and-gemmy.md#the-floating-chat).

> [!TIP]
> The notification is quiet: it makes no sound and shows no badge. In Android's notification settings it is called **AntiGem Terminal & Execution Service**. Don't turn it off: without it, Android may stop the service.

## Things that keep the screen on

- **An agent working.** While an agent replies or a task runs, the screen doesn't turn off by itself. A small sun in the chat header shows it; tap it to see why. See [The main screen](./01-main-screen.md#screen-stays-on).
- **A command running** on the Run screen. It also keeps the processor awake for up to 3 hours. See [The Run screen](./06-run.md#while-runs-keep-going).

Once the work is done, the screen turns off normally again.

## When Android stops AntiGem anyway

Android and many phone makers stop apps in the background to save battery. If agents or terminals stop while AntiGem is in the background, work through these:

### Battery optimization

Set AntiGem's battery use to **Unrestricted** (on some phones **Don't optimize** or **No restrictions**). On most phones: **Android Settings → Apps → AntiGem → Battery**. Tapping **Acquire wakelock** once also asks for this.

### Phones that close apps

Some brands (for example Xiaomi, Huawei, Samsung, OnePlus, Oppo, Vivo) have their own extra app killers, with settings like "Autostart", "Background activity" or "Sleeping apps". Allow AntiGem in each of them, and lock it in the recent apps screen if your phone offers that. The site [dontkillmyapp.com](https://dontkillmyapp.com) has the steps for each brand.

### Android 12 and newer: the process limit

Android 12 and newer stop the extra processes of apps once there are more than 32 in total. Many terminals, servers and builds at the same time (or a Linux desktop) can reach that limit, and Android then closes some of them.

You can turn this limit off once, over ADB. It stays off until you turn it back on or reset the phone:

:::steps
### Connect ADB

Set up **Settings → ADB Connect**, so the terminal's `adb` reaches this phone. See [ADB Connect, Shizuku and root](../05-power-features/07-device-access.md).

### Turn off the limit

Open **Settings → Termux Support → X11 Desktop** (with the Ubuntu chroot: **Settings → X11 Desktop**). Under **If the desktop closes by itself**, tap **Turn off the limit**.
:::

See [Linux desktop (X11)](../05-power-features/14-x11-desktop.md).

## Keep a long job alive

:::steps
### Allow notifications

AntiGem's notification must be there. If it isn't, allow notifications for AntiGem in Android's settings and open the app once.

### Remove battery limits

Set AntiGem's battery use to **Unrestricted**, and allow it in your phone maker's extra settings (see above).

### Hold a wake lock

Tap **Acquire wakelock** in the notification, or run `termux-wake-lock`. Remember it lasts up to 1 hour; tap it again for longer jobs.

### Leave with Back or Home

Don't use **Exit**, and don't swipe AntiGem away if your phone stops apps that way.
:::

See the guide [Keep long jobs running](../07-guides/12-keep-long-jobs-running.md).

## Troubleshooting

:::details There is no AntiGem notification
The background service isn't running, usually because notifications are off for AntiGem. Allow them in **Android Settings → Apps → AntiGem → Notifications**, then open AntiGem. The service starts by itself when the app opens.
:::

:::details My agent or build stopped while the screen was off
Android paused or closed AntiGem to save battery. Remove the battery limits, hold a wake lock, and check your phone maker's app killer (see [When Android stops AntiGem anyway](#when-android-stops-antigem-anyway)).
:::

:::details Terminals close by themselves when many things run
That is likely Android 12's process limit. Turn it off as shown in [Android 12 and newer: the process limit](#android-12-and-newer-the-process-limit).
:::

:::details The wake lock turned itself off
It lasts at most 1 hour. Tap **Acquire wakelock** again.
:::

:::details How do I stop everything to save battery?
Tap **Exit** in the notification, or **☰** → the red power icon → **Exit App**. Nothing keeps running after that, except the Ubuntu chroot if you chose to keep it running.
:::

:::cards
- [Keep long jobs running](../07-guides/12-keep-long-jobs-running.md) — A step-by-step guide.
- [The Run screen](./06-run.md) — Builds and servers that keep going.
- [Terminal](./07-terminal.md) — Sessions that live in the background.
- [Server mode](../05-power-features/02-server-mode.md) — Run the agents on a server instead.
:::
