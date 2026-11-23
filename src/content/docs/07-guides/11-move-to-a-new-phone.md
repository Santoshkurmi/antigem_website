---
title: Move to a new phone
description: Back up your Linux environment, sign-ins, chats and projects, and restore everything on another phone.
updated: 2.0.4-beta.2
---

At the end, your new phone has the same packages, settings, agents, sign-ins and projects as the old one.

:::steps
### On the old phone: stop the server

**Settings → Backups & Restore**. If it says **Server is running**, tap **Stop server**.

### Back up the environment

Tap **Back up environment**, turn on **Include SSH keys and sign-ins**, then **Start backup**. Wait until `bootrapz_<time>.zip` appears in `Download/Antigem/backups`. It contains your packages, home folder, projects stored there, the agents' settings and chats (Claude Code, Codex, OpenCode) and your sign-ins.

### Back up Antigravity chats (if you use Antigravity)

Tap **Back up chats**, set a password, **Start backup**. It saves `agy_chats_backup_<time>.zip`.

### Projects outside the app

Projects in your phone's shared storage (outside AntiGem) aren't in the environment backup. Copy those folders too, or use **Manage projects** on the same page.

### Copy the files to the new phone

With a USB cable, a computer, or a private cloud folder. Put them in the new phone's `Download` folder.

> [!CAUTION]
> These files contain your sign-ins and keys. Don't send them through chats or public links, and delete them once you've restored.

### On the new phone: install AntiGem

Install the same kind of APK ([What to download](../01-getting-started/04-downloads.md)). On first launch, allow the permissions, including **Files**.

### Restore the environment

On **Set up your Linux environment**, choose **From a ZIP file** and pick the `bootrapz_…zip`. See [First launch](../01-getting-started/06-first-launch.md).

### Restore Antigravity chats

**Settings → Backups & Restore → Restore chats**, pick the `agy_chats_backup_…zip`, enter its password, **Start restore**.

### Check and clean up

Open a chat with each agent and check they're signed in. Then delete the backup files from both phones (or keep one somewhere safe and private).
:::

## Good to know

- Choose the same agents in **Settings → Agents** on the new phone if they aren't on.
- Companion apps (Termux:API, Termux:X11) need to be installed again on the new phone.
- Some sign-ins are tied to the device and may ask you to sign in again. That's normal.

See [Backups and restore](../05-power-features/12-backups.md) for every option.
