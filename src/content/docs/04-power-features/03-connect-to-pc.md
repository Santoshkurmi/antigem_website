---
title: Connect to PC
description: Use the agents on your PC from your phone, with AntiGem for VS Code.
draft: true
---

With [AntiGem for VS Code](https://github.com/Santoshkurmi/antigem_vscode_extension), the agents run on your PC and the phone becomes a second screen for the same chats.

## Step by step

:::steps
### Start pairing on the PC

In VS Code, open **Settings → Connect phone → Start pairing**.

### Add the PC on the phone

Turn on **Settings → Connect to PC**, tap **Add a PC**, pick it from **Nearby PCs** and type the 6-digit code.

### Switch

The PC button in the side bar lists your paired PCs. Pick one, or go back to **Use this phone**.

:::

## Good to know

- The phone connects over SSH with its own key; no PC password is stored.
- The code is checked with SPAKE2, so nobody on the Wi-Fi can learn it.

> [!NOTE] Draft page
> This page is a starting point. Screenshots and details are still to come.
