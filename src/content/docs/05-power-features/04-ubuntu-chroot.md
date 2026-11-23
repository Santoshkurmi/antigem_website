---
title: Ubuntu chroot
description: "Rooted phones: run the bridge, the agents and the terminal in a real Ubuntu (apt, glibc, sudo) at full speed. Risks, setup, every option and troubleshooting."
updated: 2.0.4-beta.2
---

On a rooted phone (Magisk, KernelSU or APatch), AntiGem can run its bridge, the agents (Antigravity, Claude Code, OpenCode, Codex) and the terminal inside a **real Ubuntu** instead of its built-in [Linux environment](../01-getting-started/02-key-concepts.md#linux-environment). Ubuntu is unpacked into a folder on `/data` and entered with `chroot` through your root manager. Programs run natively at full speed, with Ubuntu's own `apt`, `glibc` and `sudo`.

**Where:** ☰ (top left) → **Settings** → **Where agents run** → **This phone → Ubuntu chroot**

It is optional. AntiGem's built-in environment needs no root and is the right choice for most people.

## Risks: read this first

> [!CAUTION]
> **Root inside the chroot is root of your phone.** A chroot is not a sandbox. A process running as root inside Ubuntu (through `sudo`, or the **Root shell**) can leave the chroot and change anything on the phone: system files, other apps' data, the root manager.

- **sudo without a password** is on by default, so agents can `apt install` what they need. An agent that runs `sudo` then has that power. Agents are told never to use `sudo` or `su` on their own and to ask you first, but that is an instruction, not a lock. To make it a lock, set a password and turn off **sudo without a password** (on the chroot's page, under **User**).
- **Your files:** with **Phone storage at /sdcard** and **/storage** on, programs in Ubuntu (and agents) can change and delete your phone's files. Turn on **Read-only** if they should only read them.
- **Shared folders are the real folders.** Deleting something in one inside Ubuntu deletes it on the phone.
- **Deleting the Ubuntu folder:** always use **Delete this Ubuntu…** on the chroot's page. With the **Global** mount namespace, deleting the folder another way (a root file manager, `rm -rf`) while it is mounted would delete the contents of `/sdcard`, USB drives and shared folders.
- **SELinux** doesn't protect the phone from the chroot: its processes run in your root manager's unrestricted context.
- **USB:** with an OTG cable, programs in the chroot talk to USB devices directly. A wrong `fastboot flash` can break the device it targets.

## Should you use it?

| | AntiGem (built in) | Ubuntu chroot | [Your server](./02-server-mode.md) |
| :--- | :--- | :--- | :--- |
| Root needed | No | **Yes** | No |
| Packages | `pkg install` (Termux packages) | `apt install` (all of Ubuntu) | Whatever the server has |
| Linux programs from the web | Often don't run | Run (glibc, arm64 / x86_64 builds) | Run |
| Speed | Native | Native | The server's |
| Storage on the phone | Light | About 1 to 3 GB | Nothing |
| Isolation from the phone | The app's own sandbox | **None for root** | A separate machine |

Stay on **AntiGem** if it does what you need. Choose the **Ubuntu chroot** when you need a package only Ubuntu has, a prebuilt Linux tool that doesn't run in the built-in environment, or `apt`, `sudo` and a normal Linux layout for the agents. Both can be installed at the same time; switching takes one tap.

## What you need

- **A rooted phone** with Magisk, KernelSU or APatch that grants AntiGem root. Your root manager asks the first time.
- **The chroot build of AntiGem** (`AntiGem-v2.x.x-chroot.apk`), or the x86_64 build, which includes it. See [Downloads](../01-getting-started/04-downloads.md).
- **Free space on `/data`:** at least 1 GB, 2 to 3 GB is comfortable.
- **An arm64 phone** (or the x86_64 build on an x86_64 device).
- For the recommended **Private** mount namespace: the `unshare` and `nsenter` tools. Magisk, KernelSU and APatch ship them, and recent Android has them. The setup page checks it.

## Set it up

:::steps
### Get the chroot build

Open **Settings → Where agents run → Ubuntu chroot**. On the normal build, the page says **Needs the chroot build of AntiGem**. Tap **Download and install the chroot build**, then confirm in Android's installer. It is the same app with the same signature: it installs over this one and keeps your chats, settings and environment. Its updates are chroot builds too.

### Open the setup page

Tap **Install or find an Ubuntu chroot** (or pick **Ubuntu chroot (root)** on the first-launch screen). Accept your root manager's prompt. **This phone** checks root, the CPU, SELinux, the mount tools and the free space.

### Pick the source

**Ubuntu 24.04 LTS (Noble)** is the recommended choice (see Source below). If **Found on this phone** lists an Ubuntu you installed before, tap **Use this** instead.

### Check the options

The defaults are fine for most people: **Location** `/data/local/antigem/<name>`, user `ubuntu` with **sudo without a password**, phone storage at `/sdcard`, Python and Node.js. Change what you want (see the options below).

### Install

Tap **Install Ubuntu chroot**. The page shows each step with a live log: check root and space, download, verify the checksum, extract, set up Ubuntu and the user, install packages, finish. **Continue in background** hides the page; if a step fails, **Retry** continues from it.

### Switch to it

When it is done, it is the one in use. Later, switch in **Settings → Where agents run → Agents run on**, tap **Save Server & Security Settings** and **Reopen Now**.

### Install the agents

Install each agent from its settings page as usual (**Settings → Claude Code → Account & CLI → Install Claude Code**, and so on). Inside the chroot, the app uses each agent's official Linux installer.
:::

## Setup options

### Source

| Choice | What it is |
| :--- | :--- |
| **AntiGem Ubuntu (prebuilt)** | Ubuntu 24.04 with sudo, git, curl, Node.js, Python and the Android fixes already set up. Says *not published yet* until it is available. |
| **Ubuntu 24.04 LTS (Noble)** | Official Ubuntu Base (about 30 MB), checked against Ubuntu's checksums. **Recommended.** |
| **Ubuntu 26.04 LTS** | The newest LTS, for newer packages. |
| **Ubuntu 22.04 LTS (Jammy)** | The older LTS, only for tools that need it. |
| **Another URL** | Any rootfs `.tar.gz` / `.tar.xz` (Debian, Kali, Arch ARM …), with an optional **sha256**. Advanced. |
| **A file on this phone** | An AntiGem backup (keeps its user, home, settings and packages), or any rootfs archive. |

### Location

The rootfs needs Linux permissions, so it must be on `/data` (`/sdcard` can't hold it).

- **`/data/local/antigem/<name>`** (recommended): stays when AntiGem is uninstalled or its data is cleared, and is found again after a reinstall.
- **AntiGem's app storage**: removed together with the app (uninstall or **Clear data**). Private mount namespace only.
- **Another folder on /data**: advanced.

The **Name** (for example `ubuntu-24.04`) is the folder name and the label in the app.

### User

- **User name**: lowercase letters, digits, `_` and `-`. **Default:** `ubuntu`. It gets AntiGem's own user id, not Ubuntu's usual 1000 (on Android, 1000 is the system user), so files in shared folders belong to both sides.
- **Password (optional)**: without one, the user can only become root through sudo without a password.
- **sudo without a password**: "Agents can install packages without asking (recommended for agents)". **Default:** on. See Risks.

### Phone storage at /sdcard

Your phone's files (Download, DCIM …) inside Ubuntu. **Default:** on.

- **Read-only**: programs in the chroot can read the phone's files but never change or delete them. **Default:** off.
- **USB drives and SD cards (/storage)**: every storage volume, including drives plugged in while the chroot runs. **Default:** on. Off while `/sdcard` is read-only.

### Automatic DNS

Uses the phone's DNS servers at every start, with 1.1.1.1 and 8.8.8.8 as fallbacks. **Default:** on. Turn it off to type your own **DNS servers (comma separated)**.

### Mount namespace

- **Private** (recommended): the chroot's mounts exist only for its own processes. Nothing outside can reach your files through the rootfs folder.
- **Global (whole phone)**: the mounts are visible to the whole phone until the chroot is stopped. For advanced users. Not allowed in AntiGem's app storage. See Risks.

### Shared folders

**Add a folder** to see a phone folder inside Ubuntu:

- **AntiGem home** (shown at `~/antigem_home`, so both environments see the same projects), **Download**, **Documents**, **DCIM**, **Pictures**, **Browse…** for any folder, Android's `/system`, `/vendor`, `/apex`, `/product` (read-only by default) and `/data/local/tmp`, or any path.
- Where it shows up inside Ubuntu: Android's folders at the same place, everything else at `~/<folder name>`. You can change it.
- **Read-only**, if Ubuntu should never change it.

Folders Ubuntu needs (`/`, `/etc`, `/usr`, `/dev` …) can't be used as targets. A bad folder is skipped with a message; the chroot still starts.

### Packages

- **Essentials** (always): sudo, certificates, curl, wget, git, ripgrep and other basics the agents need.
- **Python** and **Node.js 22 LTS**: on by default; most agents and MCP servers use them.
- **Build tools**, **Command-line extras** (htop, tmux, jq, vim…) and **Android tools** (adb, fastboot, lsusb, for another phone over USB OTG).
- **More packages (space separated)**: any Ubuntu package names.

## The Ubuntu chroot page

**Where:** **Settings → Where agents run → Ubuntu chroot → Manage** (one page per install)

### Overview

The state (**Running · N processes**, **Mounted, nothing running** or **Stopped**), how much space it uses, and whether the bridge runs.

- **Stop**: stops every process in it (the bridge and agents too) and unmounts everything.
- **Start**: for the install in use, starts the chroot and the bridge.
- For the install in use: **Restart bridge**, **Terminal** (a shell as your user) and **Root shell** (`sudo -i`).
- **Delete this Ubuntu…**: lists everything still mounted inside, unmounts it, refuses while anything stays mounted, and never crosses into another filesystem. You type the name to confirm. **Forget (keep files)** only removes it from AntiGem's list.

### Mounts

What is mounted inside it now, with **Unmount** for each.

### Settings

`/sdcard` (and read-only), `/storage`, DNS, the `/dev/shm` size (shared memory for browsers and Python, 256 MB by default), the mount namespace and the shared folders. They are saved inside the rootfs, so they travel with it and its backups. Mount changes apply at the next start: **Stop**, then **Start**.

### Storage

How much each part takes. **Clean apt cache** frees the downloaded packages and lists.

### Packages

Install the same bundles as at setup, any packages by name, or **Update & upgrade all**. AntiGem doesn't update Ubuntu's packages by itself.

### User

Set the password, and choose whether `sudo` asks for it.

### When AntiGem exits

The chroot's bridge and agents run as their own processes, so Android doesn't stop them when you leave or swipe away AntiGem. Agents can finish their work while the app is closed, and AntiGem reconnects when you open it again. Open terminal shells close with the app. Nothing starts when the phone boots: the next time AntiGem opens, it starts the chroot again.

This option decides what **Exit** (side menu or notification) does:

- **Keep running** (default): the bridge and the agents keep working.
- **Stop the bridge and agents**: the mounts stay, so the next start is quick.
- **Stop everything**: every process stops and the folders are unmounted.

The **Exit** dialog also has **Also stop the Ubuntu chroot**, to choose for that one exit.

### Processes

Every process running in it, with **Kill**.

### Repair

Sets up Android's network groups, the user (moved to AntiGem's user id), DNS and this app's bridge again. Use it after restoring an old backup, after updating AntiGem, or when something inside stopped working.

### About this phone

The root manager, the mount tools, SELinux, the kernel and where the install came from.

## Backup and restore

On the chroot's page, **Backup & restore**.

- **Back up…**: choose **.tar.gz (fast)** (default) or **.tar.xz (smaller, slow)** and where to save it. The file has everything of this Ubuntu: system, packages, your home, agent logins, chats and settings. It never contains `/proc`, `/sys`, `/dev`, `/sdcard`, `/storage`, `/tmp` or the contents of shared folders. It works while the chroot runs.
- **Restore a backup…**: installs it as a **new copy** (nothing is overwritten). Its user moves to this app's user id, so it works on another phone too. Choose it in **Where agents run** to use it.
- **Export a clean image…**: an image to share, without your home folders, logins, history, logs and caches.

> [!CAUTION]
> A backup contains your agent logins and tokens. Keep it private.

AntiGem's built-in environment keeps its own backups in **Settings → Backups & Restore** (see [Backups](./12-backups.md)).

## Agents inside the chroot

| Agent | Installed with | Default path |
| :--- | :--- | :--- |
| Antigravity | Google's install script | `~/.local/bin/agy` |
| Claude Code | Anthropic's install script | `~/.local/bin/claude` |
| OpenCode | OpenCode's official Linux build | `~/.opencode/bin/opencode` |
| Codex | OpenAI's installer | `~/.local/bin/codex` |

Change the paths only if you moved an agent on purpose (**Where agents run → Agent paths in the Ubuntu chroot**). Agent logins and chats live in the chroot user's home, separate from AntiGem's built-in environment: each environment has its own. Share **AntiGem home** if you want the same projects in both.

The chroot's bridge and hub use AntiGem's ports **+ 100** (for example 1336 / 1337), so a chroot bridge that still runs never blocks AntiGem's own after a switch. Leaving the chroot stops its bridge; its mounts stay until you stop it.

### USB devices

The chroot's user is in Android's `usb` group, so `fastboot` and `adb` work without `sudo`. Install the **Android tools** bundle, plug the other phone in over OTG and run `fastboot devices` or `adb devices`. Serial adapters (`/dev/ttyUSB*`) may need `sudo`.

## What doesn't work in the chroot (yet)

These use the tools of AntiGem's built-in environment, so they show a notice while the chroot is in use:

- **Termux:API**
- **Settings → Backups & Restore** (the chroot has its own)
- **Settings → GitHub** (the GitHub CLI page). Cloning repositories still works.

Also, `termux-*` commands don't exist inside Ubuntu, and mini apps and EGM keep their folders in AntiGem's built-in home (share **AntiGem home** if agents should work on them). [REA](./06-reverse-engineering.md), [Android development](./05-android-development.md) and the [X11 desktop](./14-x11-desktop.md) install into the chroot and work there.

## Troubleshooting

:::details "No root access"
Allow AntiGem in your root manager (Magisk → Superuser; KernelSU or APatch → app list), then check again on the setup page.
:::

:::details "Needs the chroot build of AntiGem"
You have the normal build. Tap **Download and install the chroot build**. If Android asks, allow AntiGem to install apps, come back and tap **Install**.
:::

:::details "The private mount namespace needs unshare and nsenter" or "Could not make the mount namespace a slave"
Your root manager has no tools for the private namespace. Choose **Global** under **Options**, and mind its risk.
:::

:::details An install shows "Mounted, nothing running"
Mounts left behind by an older launcher. **Stop** unmounts them.
:::

:::details Backing up asks you to Stop first
Its mounts are visible to the whole phone (Global namespace or leftovers). Stop it, back up, then Start.
:::

:::details Delete refuses: "still mounted"
The dialog lists what is mounted and where. **Stop**, then delete again. If it stays, restart the phone (that removes every mount), then delete.
:::

:::details The bridge doesn't come up
Read its log (the *Server Runner* terminal, or `<rootfs>/.antigem/run/bridge.log`). Then tap **Repair**, and **Restart bridge**.
:::

:::details apt or downloads fail ("temporary failure resolving")
Turn off **Automatic DNS** and type DNS servers your network allows. Check that the phone itself is online.
:::

:::details A USB drive isn't in /storage
Turn on **USB drives and SD cards (/storage)** (not possible with read-only `/sdcard`), save, then **Stop** and **Start**.
:::

:::details fastboot or adb can't open the device
Run **Repair** once (it adds the user to Android's `usb` group), then unplug and plug in again.
:::

:::details Codex runs, but its commands fail
Codex runs its commands in a `bwrap` sandbox, and some Android kernels lack what it needs. Choose **Full access** in Codex's permissions: it runs without the sandbox, and also without asking you (see [Codex](../02-agents/05-codex.md)).
:::

:::details Magisk shows a "granted superuser" toast all the time
AntiGem uses root for every terminal and status check. Turn off notifications for AntiGem in Magisk's superuser list.
:::

:::details After reinstalling AntiGem, my Ubuntu is gone from the list
The folder in `/data/local/antigem` is still there. On the setup page, under **Found on this phone**, tap **Use this**.
:::

:::details Something inside stopped working after an update
Tap **Repair** on the chroot's page.
:::

Still stuck? [Open an issue](../08-help/04-get-help.md) with the log from the setup page and the **About this phone** details.

:::cards
- [Where agents run](../06-settings/04-where-agents-run.md) — Switch between AntiGem, the chroot and a server.
- [Server mode](./02-server-mode.md) — Run the agents on a server instead.
- [Downloads](../01-getting-started/04-downloads.md) — Which APK to get.
:::
