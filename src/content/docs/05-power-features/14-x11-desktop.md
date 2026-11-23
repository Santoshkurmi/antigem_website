---
title: "Linux desktop (X11)"
description: "Run an XFCE or LXQt Linux desktop and Linux GUI apps (a browser, an IDE, office apps) with AntiGem's build of Termux:X11, also in the Ubuntu chroot."
updated: 2.0.4-beta.2
---

AntiGem can run a full **Linux desktop**, with windows, a taskbar and Linux apps such as a web browser, an IDE or office apps. The desktop is shown by **Termux:X11**, a separate app. AntiGem uses its own build of it, which runs inside AntiGem, so Android keeps the desktop running at full speed while you use it.

**Where:** **Settings → Termux Support → X11 Desktop**. With the [Ubuntu chroot](./04-ubuntu-chroot.md) as your runtime: **Settings → X11 Desktop**.

The page title is **Linux desktop**, with **Running** while a desktop is on.

## How it works

```text
 AntiGem's terminal (or the Ubuntu chroot)        Termux:X11 app
   desktop (XFCE / LXQt) + your Linux apps  ──►   shows the desktop
          └── termux-x11 (the X server) ──────────┘
```

- **The Termux:X11 app** shows the desktop on screen. It must be AntiGem's build: the official Termux:X11 doesn't work with AntiGem.
- **The `termux-x11` command** starts the X server in the terminal. It must match the app.
- **The desktop** (XFCE or LXQt) and its apps run in AntiGem's Linux environment, or in the Ubuntu chroot.

In the Ubuntu chroot, AntiGem starts the X server itself (from the Termux:X11 app) and shares its display with the chroot, so step 2 isn't needed there.

## Set it up

AntiGem's Linux environment must be installed first ("Install the Linux environment first").

:::steps
### Termux:X11 app

Tap **Download & install**: AntiGem downloads its build of Termux:X11 and opens Android's installer. The step then says **Installed** ("AntiGem's build, runs inside AntiGem"). **Update** gets a newer version.

If it says **Wrong build** (**Official build**), you have the official Termux:X11: tap **Uninstall Termux:X11**, then install AntiGem's. **Open the download page** opens the releases page in a browser.

### termux-x11 command

Tap **Install …**: it installs the terminal part that goes with the app you installed. **Reinstall** puts it back. If it says **Wrong package**, reinstall it here. In the Ubuntu chroot this step says **Not needed**.

### Desktop

Pick **XFCE** ("a full, light desktop and a good place to start") or **LXQt** ("a light Qt desktop") and tap **Install XFCE** (or LXQt). It is a large download. In the Termux environment it comes from x11-repo; in the chroot, from Ubuntu (apt), running as your user. An installed desktop shows a ✓.

### Start the desktop

Tap **Start XFCE** (or LXQt). The step shows what it is doing, then **Running**. **Open desktop** switches to the Termux:X11 app; **Stop** shuts the desktop down.
:::

![The Linux desktop page with all four steps done and the desktop running](/screens/settings_x11_desktop.webp "frame")

## Web Browser

**Optional.** Install **Chromium** or **Firefox** to browse the web on your desktop: pick one and tap **Install …** (**Reinstall …** when it is there). In the Termux environment it comes from tur-repo. In the Ubuntu chroot it comes from the xtradeb/apps PPA, because Ubuntu's own packages of both are snaps, which don't run in a chroot. Install a desktop first.

## If the desktop closes by itself

**Optional, Android 12 and newer only.** Android 12 and newer stop the extra processes of apps once there are more than 32 in total. A desktop starts many, so Android may close it.

You can turn this limit off once, over ADB. It stays off until you turn it back on or reset the phone:

:::steps
### Connect adb to this phone

Tap **Set up ADB Connect** and follow it. See [ADB Connect, Shizuku and root](./07-device-access.md).

### Turn off the limit

Back on this page, tap **Turn off the limit**. The output shows the new values.
:::

This also helps when many terminals, servers and builds run at once. See [Running in the background](../03-using-the-app/11-background-and-notifications.md#android-12-and-newer-the-process-limit).

## Set up manually

**Show** under **Set up manually** lists the same steps as terminal commands. For the Termux environment they are:

```bash title="Terminal"
pkg install x11-repo
apt install ./antigem-termux-x11-*-all.deb
pkg install dbus xfce4
termux-x11 :0 -xstartup "dbus-launch --exit-with-session xfce4-session"
```

Get `antigem-termux-x11-sharedUid.apk` and `antigem-termux-x11-*-all.deb` from the [AntiGem Termux:X11 releases](https://github.com/Santoshkurmi/termux-x11/releases/latest) first, install the APK, then run the commands and open Termux:X11.

> [!WARNING]
> Don't install `termux-x11-nightly` from x11-repo: it only works with the official Termux:X11, not AntiGem's build.

## Troubleshooting

:::details The Termux:X11 step says "Wrong build"
You have the official Termux:X11 (or one made for the old `com.termux` app). Uninstall it with **Uninstall Termux:X11** and tap **Download & install** for AntiGem's build.
:::

:::details Moving from the old com.termux app
The Termux:X11 app and `.deb` you installed for the old app only work with it. Install them again for AntiGem from this page, or from the [AntiGem Termux:X11 releases](https://github.com/Santoshkurmi/termux-x11/releases/latest).
:::

:::details The desktop closes by itself after a while
Android 12+ stopped its processes. Turn off the limit as shown in [If the desktop closes by itself](#if-the-desktop-closes-by-itself).
:::

:::details Open desktop shows a black screen
The desktop may still be starting: wait a moment. If it stays black, tap **Stop**, then **Start XFCE** (or LXQt) again, and read the output on the page for errors.
:::

:::cards
- [Termux:API](./15-termux-api.md) — The other Termux Support page.
- [ADB Connect, Shizuku and root](./07-device-access.md) — Needed to lift the process limit.
- [Ubuntu chroot](./04-ubuntu-chroot.md) — Run the desktop in a real Ubuntu.
- [Terminal](../03-using-the-app/07-terminal.md) — Where the desktop's commands run.
:::
