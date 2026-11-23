---
title: Use the agents on your PC from the phone
description: Pair the phone with AntiGem for VS Code, and use the same chats, agents and files on both.
updated: 2.0.4-beta.2
---

At the end, the AntiGem app on your phone uses the agents running on your computer. The same chats show on both, replies stream live on both, and you can copy files between them.

**Before you start:** a computer with VS Code (or VSCodium, Cursor…) and [AntiGem for VS Code](../09-other-apps/01-vscode-extension.md), on the same Wi-Fi as your phone. The computer needs its SSH server turned on (Linux: `openssh-server`; macOS: **Remote Login**; Windows: the **OpenSSH Server** feature). VS Code shows the steps for your system.

:::steps
### On the computer: start pairing

In AntiGem for VS Code, open **Settings → Connect phone → Start pairing**. It shows a 6-digit code.

### On the phone: add the PC

**Settings → Connect to PC**: turn it on, tap **Add a PC**, pick your computer from **Nearby PCs**, and type the 6-digit code. If the computer isn't listed (guest Wi-Fi), type the address shown on the computer.

### Switch to the PC

The PC button in the side bar lists your paired PCs. Pick one to use its agents, or **Use this phone** to go back.

### Chat

Start a chat on the phone and continue it in VS Code, or the other way round. Every agent works, with its subagents, images and files.
:::

## Files and terminal

- In this mode the **Files** screen has a **This phone** tab next to the PC's files: copy or cut on one side, paste on the other, folders too.
- With **Allow terminal from phone** on in VS Code, the app's terminal and Run configurations open on the PC. Off (the default), they stay on the phone.

## Is it safe?

The phone connects over SSH with its own key; no PC password is stored. The pairing code is checked so that nobody on the Wi-Fi can learn it. The key can only reach AntiGem on the PC (plus a shell if you allow the terminal). Remove the phone in VS Code to lock it out at once.

See [Connect to PC](../05-power-features/03-connect-to-pc.md) for every option and troubleshooting.
