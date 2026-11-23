---
title: Terminal
description: "The Linux terminal: sessions, the extra keys, text selection and font size, installing packages, phone storage, SSH terminals and Termux compatibility."
updated: 2.0.4-beta.2
---

The terminal is a full Linux shell on your phone, the same one the agents use. Install packages with `pkg` or `apt`, run scripts and servers, use Git, Python, Node.js and more. It runs Termux packages at full speed, with no root and no proot.

**Where:** the floating switcher → **Terminal** (the `>_` icon). Also: the IDE sidebar's **Terminal** button (opens in the project folder), or the separate terminal icon on your home screen if you turned it on.

![The terminal full screen: the session pill at the top right, and the two rows of extra keys at the bottom](/screens/terminal_fastfetch.webp "phone")

## Before you start

The terminal needs a shell to open. That is one of:

- AntiGem's **Linux environment** on this phone, which the app installs on first launch;
- the **Ubuntu chroot**, on a rooted phone (see [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md));
- **your server**, in [server mode](../05-power-features/02-server-mode.md);
- an **SSH** login you set in **Settings → Terminal**.

If none is ready, tapping **Terminal** offers to install the Linux environment first.

## Sessions

A **session** is one shell, like a tab in a desktop terminal. You can have several, each running its own program. They keep running when you leave the terminal screen or switch apps.

### The session pill

The small pill at the top right of the terminal. It shows the name of the session you see. Drag it anywhere on the screen if it covers something.

- **Tap the name** (**Switch Tab**) to see all sessions. A green dot means the session is running, red means its program has ended. Tap one to switch to it.
- **New Session** (at the bottom of that list) opens a new session. **Long-press** it to open a plain Bash shell instead of your default shell ("Created Bash session"), useful if your own shell setup is broken.
- **Close Tab** (× next to a session) closes it. It asks first: "Any process running in this session will be terminated." Tap **Close Tab**.
- **Close** (× on the pill) leaves the terminal screen. Your sessions keep running.

When the program in a session ends (for example after `exit`), press **Enter** to close that session. When you close the last session, the terminal screen closes too.

### Leaving the terminal

The Back button leaves the terminal and returns to the screen you came from. Nothing stops. Come back with the switcher to find every session as you left it. To stop all sessions, close them, or exit the app (see [Running in the background](./11-background-and-notifications.md)).

## Typing

### The keyboard

Tap the terminal to open Android's keyboard.

### The extra keys

Two rows of keys above the keyboard, for keys a phone keyboard doesn't have:

| Row | Keys, left to right |
| :--- | :--- |
| Top | **ESC**, **/**, **-**, **HOME**, **↑**, **END**, **PGUP** |
| Bottom | **↹** (Tab), **CTRL**, **ALT**, **←**, **↓**, **→**, **PGDN** |

- **Hold** an arrow, **/**, **-**, **↹**, **PGUP** or **PGDN** to repeat it.
- **CTRL** and **ALT**: tap once, and they apply to the next key only (for example **CTRL**, then `c` to stop a program). **Long-press** to lock them on until you tap them again. A locked key is highlighted.
- **↹** completes file and command names, like Tab on a computer.

### Select and copy text

Long-press on the text to start selecting. Drag the handles to choose what to copy, then use the small menu that appears to **Copy** it. **Paste** puts the clipboard's text into the session.

### Text size

Pinch with two fingers to make the text bigger or smaller. AntiGem remembers the size. You can also set it, with the cursor style and scrollback, in **Settings → Terminal**. See [Terminal settings](../06-settings/06-terminal.md).

## Packages

The terminal uses Termux's package collection. Common commands:

```bash title="Terminal"
pkg update                 # get the newest package list
pkg install python nodejs git
pkg search rust            # find a package
pkg uninstall nodejs
```

`apt` works too (`apt install`, `apt upgrade`). Packages install at full speed, as in Termux. AntiGem fixes each package as it installs it so it runs under its own name (see [Termux packages](../01-getting-started/02-key-concepts.md#termux-packages)).

> [!TIP]
> Language tools work as usual once installed: `pip install` for Python packages, `npm install -g` for Node.js tools, `cargo` for Rust.

> [!IMPORTANT]
> Install the coding agents themselves (Antigravity, Claude Code, OpenCode, Codex) with their **Install** buttons in **Settings**, not with their official install commands in the terminal. On the phone they need setup that only the app's installer does, so a terminal install doesn't work.

## Phone storage

Your home folder (`~`) is private to AntiGem. To reach your phone's shared storage (Downloads, Pictures, Documents…) from the terminal, run:

```bash title="Terminal"
termux-setup-storage
```

The first time, Android asks to give AntiGem **All files access**: allow it, then run the command again. It makes a `~/storage` folder with links:

| Link | Goes to |
| :--- | :--- |
| `~/storage/shared` | The whole internal storage |
| `~/storage/downloads` | Download |
| `~/storage/dcim` | DCIM (camera photos) |
| `~/storage/pictures`, `music`, `movies`, `documents`, `podcasts` | The matching folders |
| `~/storage/external-0`, `media-0`… | AntiGem's own folders on storage and SD cards |

A message says "Storage symlinks setup in ~/storage" when it worked.

## Keep it running

Sessions keep running while AntiGem is in the background, thanks to its background service. For long jobs with the screen off, also hold a wake lock: run `termux-wake-lock` (and `termux-wake-unlock` when done), or tap **Acquire wakelock** in AntiGem's notification. See [Running in the background](./11-background-and-notifications.md).

For builds and servers you run often, the [Run screen](./06-run.md) is easier: it keeps each command's output in its own tab.

## SSH terminals

Terminal sessions can open over SSH instead of on this phone:

- **In server mode**, the terminal runs on your server, using the SSH login from the server settings.
- **On the phone**, **Settings → Terminal → Use Terminal via SSH** connects to an SSH server you choose (host, port, user and password), with **Test SSH Connection**.

When `tmux` is installed on the other machine, AntiGem keeps the sessions there in tmux. If the connection drops or the app restarts, it finds them again ("Restoring active terminal sessions...").

See [Terminal settings](../06-settings/06-terminal.md) and [Server mode](../05-power-features/02-server-mode.md).

## The separate terminal icon

You can add a second icon to your home screen that opens only the terminal, without the chat. Turn on **Separate Terminal App Icon** in **Settings → Appearance** and pick its style: **AntiTerm** (an icon in AntiGem's style) or **Termux** (the classic `>_` icon and name). **Default:** off. See [Appearance](../06-settings/03-appearance.md).

## Termux compatibility

Packages, `pkg` / `apt`, the shell and almost everything else work as in Termux.

### Termux:API commands

The common Termux:API commands are built in and work right away:

| Command | What it does |
| :--- | :--- |
| `termux-toast` | Show a short message |
| `termux-vibrate` | Vibrate |
| `termux-clipboard-get` / `termux-clipboard-set` | Read or set the clipboard |
| `termux-torch` | Flashlight on or off |
| `termux-tts-speak` | Speak text out loud |
| `termux-notification` / `termux-notification-remove` | Show or remove a notification |
| `termux-volume` | Read or set the volume |
| `termux-battery-status` | Battery level and state |
| `termux-open` / `termux-open-url` | Open a file or link in another app |
| `termux-wake-lock` / `termux-wake-unlock` | Keep the phone awake |

For other commands (location, camera, sensors, SMS, Wi-Fi…), install AntiGem's own Termux:API companion app and choose it in **Settings → Termux Support → Termux:API**. The official Termux:API app doesn't work with AntiGem. See [Termux:API](../05-power-features/15-termux-api.md).

### Linux desktop

A full Linux desktop (XFCE or LXQt) can run through AntiGem's build of Termux:X11. See [Linux desktop (X11)](../05-power-features/14-x11-desktop.md).

### A full Ubuntu

On a rooted phone, the [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md) gives you a real Ubuntu with `apt`, `glibc` and `sudo`.

## Troubleshooting

:::details Tapping Terminal asks me to install something
The Linux environment isn't installed (or is turned off). Follow the install window. If you use a server, check that server mode is on in **Settings → Where agents run**.
:::

:::details "command not found"
The program isn't installed. Find its package with `pkg search <name>` and install it with `pkg install <package>`.
:::

:::details The session's dot is red and typing does nothing
The program in that session has ended. Press **Enter** to close the session, then open a **New Session**.
:::

:::details My shell setup is broken and every session closes at once
Open the session list and **long-press New Session**. That opens a plain Bash shell, where you can fix your shell's startup files.
:::

:::details `termux-setup-storage` does nothing, or `~/storage` is empty
AntiGem doesn't have **All files access** yet. Allow it on the Android page that opens (on most phones also under **Apps → Special app access → All files access**), then run `termux-setup-storage` again.
:::

:::details A long job stopped when the screen was off
Android paused or closed it to save battery. Hold a wake lock and allow AntiGem to run without battery limits. See [Running in the background](./11-background-and-notifications.md).
:::

:::cards
- [Terminal settings](../06-settings/06-terminal.md) — Font, cursor, colors and SSH.
- [The Run screen](./06-run.md) — Saved commands with their own output tabs.
- [Running in the background](./11-background-and-notifications.md) — Keep long jobs alive.
- [Termux:API](../05-power-features/15-termux-api.md) — More phone features from the shell.
:::
