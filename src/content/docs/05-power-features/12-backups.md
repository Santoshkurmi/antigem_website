---
title: Backups and restore
description: Back up the Linux environment, Antigravity chats and projects to your phone's storage, and restore them on this or another phone.
updated: 2.0.4-beta.2
---

Back up everything you'd hate to lose: the Linux environment with all your packages and settings, your Antigravity chats and sign-in, and your projects. Backups are ZIP files in your phone's `Download/Antigem/backups` folder, so they survive an uninstall, and you can copy them to a computer or a new phone.

**Where:** ☰ → **Settings** → **Backups & Restore**. Shown when the phone's own Linux environment is installed and you're not in server mode.

> [!IMPORTANT]
> **Stop the server first.** If the page says **Server is running**, tap **Stop server** before backing up or restoring, so no database is written to while it's being archived. The app also asks before each backup.

## Backup

### Linux environment

**Installed packages, binaries and your home folder.** A full, portable copy of the Linux system (`/usr`) and your home folder (`$HOME`, which includes the agents' settings and your projects stored there). Sockets and caches are left out.

Tap **Back up environment**. In the dialog:

- **Include SSH keys and sign-ins**: SSH keys, agent and GitHub logins, shell history. **Default:** off. Turn it on when you move to a new phone or app, so you don't have to sign in to everything again.

Tap **Start backup**. It saves `Download/Antigem/backups/bootrapz_<time>.zip`. The file appears only once the backup is complete and checked.

> [!CAUTION]
> A backup with sign-ins lets anyone who has it sign in to your accounts and servers. Never share it, and delete it once you have restored it.

**To restore it**, use the setup screen's **From a ZIP file** option: on a new phone (or after **Delete all app data**), choose it and pick this file. See [First launch](../01-getting-started/06-first-launch.md#set-up-your-linux-environment).

### Chats & credentials

**Conversations, transcripts, skills and login.** Archives your `~/.gemini` folder: Antigravity's chat history, transcripts, summaries, custom skills and its sign-in token. Tap **Back up chats**, optionally enter an **Encryption Password (Optional)** (empty = a normal unencrypted ZIP), and **Start backup**. It saves `Download/Antigem/backups/agy_chats_backup_<time>.zip`.

> [!WARNING]
> It includes your login token. Don't share this file: anyone who has it can sign in as you. Use a password.

## Restore

### Restore chats

**From a chats backup zip.** Restores Antigravity's chats, the conversation index and your login. Your current `~/.gemini` is kept as `~/.gemini.bak` first, so nothing is lost. Tap **Restore chats**, **Choose File**, enter the **Archive Password (if encrypted)**, and **Start restore**.

## Projects

### Manage projects

**Back up or restore selected projects.** Pick projects from the IDE and chat workspaces. Choose a **clean git-aware archive** (skips `node_modules` and build output) or a **full copy**. Restores put each project back in its right folder, with a safety backup first.

## What's in which backup?

| You want to keep | Use |
| :--- | :--- |
| Everything (packages, settings, home folder, optionally sign-ins) | **Back up environment** |
| Antigravity chats and sign-in only | **Back up chats** |
| One or more projects | **Manage projects** |
| Claude Code, OpenCode or Codex chats | **Back up environment** (they're in your home folder: `~/.claude`, `~/.local/share/opencode`, `~/.codex`) |

See [Move to a new phone](../07-guides/11-move-to-a-new-phone.md) for the whole move, step by step.

> [!NOTE]
> With the [Ubuntu chroot](./04-ubuntu-chroot.md) running the phone, this page shows **Termux only**. The chroot has its own backup and restore on its page. In [server mode](./02-server-mode.md), back up the server yourself.

## Troubleshooting

:::details "Stop the server first"
Tap **Stop server** when asked, wait a moment, then run the backup or restore again. The agents start again by themselves afterwards.
:::

:::details The backup file isn't in Downloads
It appears only once the backup is complete and checked. A big environment takes a few minutes. Make sure AntiGem has the **Files** permission and there's enough free space (about as much as the environment uses).
:::

:::details Restoring the environment ZIP fails on the new phone
Use the same kind of app (the normal APK for arm64 phones). Make sure the file was copied completely (same size as the original). An environment backup from the old `com.termux` app works too: its paths are rewritten while it restores. See [Moving from the old app](../01-getting-started/08-moving-from-the-old-app.md).
:::
