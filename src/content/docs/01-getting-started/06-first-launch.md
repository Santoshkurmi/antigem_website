---
title: First launch
description: Every setup screen in order. Permissions, the Linux environment, choosing your agents, and what each choice means.
updated: 2.0.4-beta.2
---

The first time you open AntiGem, it walks you through a few screens. It takes about five minutes, most of it waiting for the Linux environment to download. Here is every screen and every choice.

## The setup screens

:::steps
### Allow notifications

Right away, Android asks: **Allow AntiGem to send you notifications?** Tap **Allow**. AntiGem needs this to keep its background service running (see below).

### Welcome to AntiGem: three permissions

The **Welcome to AntiGem** screen asks for three things. Tap **Allow** next to each. The bar at the top counts them (**1 of 3 allowed**…).

- **Notifications** (Required): keeps the background service running and shows progress. Without it Android can stop the agents and the terminal when you leave the app. **Continue** stays disabled (**Allow notifications to continue**) until you allow it.
- **Files**: opens Android's **All files access** page. Turn on **Allow access to manage all files**, then go back. AntiGem needs it to open projects and files on your phone's storage (Downloads, your project folders). Without it, agents only see AntiGem's own folders.
- **Microphone**: for dictating messages, voice notes, voice calls and Jarvis. Optional.

Tap **Continue**. You can change these any time in Android's settings for the app.

![Welcome to AntiGem, with the three permissions](/screens/setup_permissions.webp "frame")

### Set up your Linux environment

AntiGem's terminal, IDE and agents run on a small Linux system inside the app. Choose how to install it:

- **Full environment** (Recommended, about 350 MB): a ready-made system with the tools and settings already in place. The two buttons under it choose where it downloads from: **GitHub** (selected by default) or **Hugging Face**. Pick the other one if a download is slow or fails. The small arrow on each opens that download page in your browser. **Choose this unless you have a reason not to.**
- **Minimal** (about 33 MB): a clean Termux base with only the core tools and the package manager. Smaller, but you install what you need yourself (`pkg install …`), and agents may need extra packages before they work.
- **Ubuntu chroot (root)**: for rooted phones (Magisk, KernelSU or APatch). A real Ubuntu instead of AntiGem's built-in system. It opens its own setup page: see [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md).
- **From a ZIP file**: install from a file on your phone, such as an AntiGem backup or a downloaded copy of the Full environment (useful offline, or to restore your old setup).

The line at the bottom shows your phone's processor (for example `aarch64 · 39-bit address space · LSE atomics`), which is useful when you ask for help.

Tap **Install** (the button shows the size of your choice).

![Set up your Linux environment](/screens/setup_linux.webp "frame")

### Installing

The install goes through four stages: **Download**, **Unpack files**, **Configure shell** and **Verify**, with a percentage and the download speed. **Show details** opens the log of what it's doing.

It takes a few minutes. Tap **Continue in background** to start using the app meanwhile: the install keeps going, with its progress in the notification.

![Installing: Download, Unpack files, Configure shell, Verify](/screens/setup_installing.webp "frame")

### You're all set

When it's done, the screen says **You're all set**: the shell, core tools and AGY tools are installed, and the terminal, the IDE backend and the Antigravity language server are ready to run. Tap **Get started**.

![You're all set](/screens/setup_done.webp "frame")

### Step 1 of 2: Choose your agents

Tick the coding agents you want to use: **Antigravity**, **Claude Code**, **OpenCode** and **Codex**. The app runs only the ones you pick. You can tick several: then you pick the agent for each new chat on the empty chat screen. Tap **Continue with N agents**.

Not sure which? Tick them all and try each one, or read [Choosing an agent](../02-agents/01-overview.md). You can change this later in **Settings → Agents**.

![Choose your agents](/screens/setup_agents.webp "frame")

### Step 2 of 2: Terminal App Setup

**Standalone Terminal App Icon** adds a second icon, **AntiTerm**, to your launcher, which opens the terminal in one tap. The preview at the top shows what your home screen will have. It's off by default. Tap **Save & Continue**. You can change it later in **Settings**.

![Terminal App Setup](/screens/setup_terminal_icon.webp "frame")

### Meet Gemmy

**Gemmy** is a little buddy that floats over the app. It thinks while your agent works and cheers when it's done. Tap it, drag it, fling it, or long-press it for its menu. Turn **Show Gemmy** off if you don't want it, then tap **Let's go!** You can change it later in **Settings → Appearance**.

![Meet Gemmy](/screens/setup_gemmy.webp "frame")
:::

## After setup: the empty chat

You land on an empty chat. If you ticked several agents, their names are tabs in the middle of the screen; tap one to pick the agent for this chat.

Each agent still needs to be installed and signed in once:

- **Antigravity** shows **Sign in to Antigravity** with a **Sign In** button (your Google account).
- **Claude Code** shows **Claude Code not found** with **Set up Claude Code**.
- **OpenCode** and **Codex** show **… is not installed** with an **Install** button.

![The empty chat, with the agent tabs and the Sign in prompt](/screens/main_empty_chat.webp "frame")

Next: [Your first chat](./07-first-chat.md) walks you through installing one agent, signing in and sending a message.

## The update dialog

If a newer version is out, a **New Update Available** dialog can appear on launch, with what's new. Tap **Update** to download and install it, or **Later**. A **Critical Release** can't be skipped. See [Updating and uninstalling](./09-updating-and-uninstalling.md).

![The New Update Available dialog, with what's new](/screens/update_dialog.webp "frame")

## Troubleshooting

:::details The download fails or stops
On a failed download, the screen lets you pick **GitHub** or **Hugging Face** again and tap **Try again** or **Download from …** (the other site). **Change source** goes back to the list of choices. Common causes: no internet, a network that blocks GitHub (some schools and offices), or a VPN. Switching the download site fixes most cases.

Still failing? Download the Full environment ZIP in your browser from the [rootfs-v2 release](https://github.com/Santoshkurmi/antigem/releases/tag/rootfs-v2) or [Hugging Face](https://huggingface.co/datasets/santoshkurmi/rootfs-v2/tree/main), then choose **From a ZIP file**.
:::

:::details "Not enough space" or the install fails while unpacking
The Full environment needs about 2 GB of free space once installed (and room for the download). Free some space and try again.
:::

:::details I skipped the Linux setup. How do I install it later?
**Skip** (top right) and **Skip for now** let you go into the app without a Linux environment, for example if you only use [server mode](../05-power-features/02-server-mode.md) or [Connect to PC](../05-power-features/03-connect-to-pc.md). The setup screen comes back the next time you open AntiGem, and opening the terminal offers to install it too.
:::

:::details It says "Not available on this phone"
Your phone has a 32-bit processor, and the Linux environment needs a 64-bit one. Tap **Continue to AntiGem**: you can still use [server mode](../05-power-features/02-server-mode.md) (the agents run on a computer or server) or SSH.
:::

:::details I left the app during the install
If you only switched to another app (or tapped **Continue in background**), the install keeps going and shows its progress in the notification. If AntiGem was closed completely and the install stopped, open AntiGem again: the setup screen comes back and you can start the install again.
:::

:::details I said no to Notifications or Files
Open Android's **Settings → Apps → AntiGem → Permissions** (or **Notifications**) and allow it there. For Files, look for **All files access** or **Files and media**. The exact names differ between phone makers.
:::
