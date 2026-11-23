---
title: Connect to PC
description: "Use the agents on your PC from your phone with AntiGem for VS Code: pair once with a 6-digit code, switch in one tap, the same chats on both."
updated: 2.0.4-beta.2
---

With [AntiGem for VS Code](../09-other-apps/01-vscode-extension.md), the agents run on your PC and the phone becomes a second screen for the same chats. Start a chat in VS Code and continue it on the phone, or the other way round. Replies stream live on both.

**Where:** ☰ (top left) → **Settings** → **Connect to PC**

## How it works

- **The PC runs everything.** AntiGem in VS Code runs the bridge and the agents (Antigravity, Claude Code, OpenCode and Codex) on the PC. The phone shows their chats, with subagents, images and files.
- **The phone connects over SSH with its own key.** It gets the key when you pair; no PC password is stored on the phone. The key can only reach AntiGem on the PC (plus a shell if you allow the terminal).
- **Pairing is safe on shared Wi-Fi.** The 6-digit code is checked with SPAKE2: both sides prove they know it without sending it, so nobody on the Wi-Fi can learn it.
- **The phone never starts, stops or installs anything on the PC.** When you switch back to the phone, the PC keeps running its agents for VS Code.

While you use a PC, the phone's own settings for [Where agents run](../06-settings/04-where-agents-run.md) are kept as they were, and used again when you switch back.

## What the PC needs

- **AntiGem for VS Code**, opened once (it starts the agents).
- **The PC's SSH server**, turned on:
  - Linux: `sudo systemctl enable --now sshd` (on Ubuntu, install `openssh-server` first).
  - macOS: **System Settings → General → Sharing → Remote Login**.
  - Windows: **Settings → Optional features → OpenSSH Server**.
- The phone and the PC on the **same Wi-Fi** while you pair.

## Set it up

:::steps
### Turn on Connect to PC

On the phone, open **Settings → Connect to PC** and switch on **Connect to PC**. This adds a PC button to the side bar (☰). Nothing connects until you pick a PC.

### Start pairing on the PC

In VS Code, open AntiGem, then **Connect phone** (**Start pairing**). It shows a 6-digit code. The code only works while **Connect phone** is open.

### Add the PC on the phone

Tap **Add a PC**. The phone looks for PCs on this Wi-Fi ("Looking for PCs on this Wi-Fi…") and lists them. Tap yours.

If it isn't listed (for example on a guest Wi-Fi that blocks this), tap **Not listed? Enter the address shown on the PC** and type it, like `192.168.1.10:1250`, then **Next**.

### Type the code

Type the **6-digit code shown on the PC** and tap **Pair**. When it says **Paired with *name***, tap **Connect now** to use it at once (AntiGem reopens), or **Later**.
:::

![Settings → Connect to PC with one paired PC](/screens/connect_pc.webp "frame")

## Using it

### Switch between the PC and this phone

Tap the PC button in the side bar. It lists your paired PCs: tap one, and confirm **Use *name*?** with **Reopen now**. AntiGem reopens connected to that PC. Agents running on this phone stop; nothing on the PC is stopped.

To go back, pick **Use this phone** (or **Use my server** if you normally use [server mode](./02-server-mode.md)). AntiGem reopens with your own settings again.

**Manage PCs…** in the same list opens **Settings → Connect to PC**.

### Paired PCs

**Settings → Connect to PC** shows **NOW USING** and **PAIRED PCS**. Each PC shows its address, its state (**In use · connected**, **In use · not reachable**, **Reachable** or **Not reachable**), when you last used it, and **terminal on PC** if the terminal is allowed. **Connect** switches to it; its menu has **Rename** and **Remove**. You can pair several PCs.

### Copy files between the phone and the PC

While you use a PC, the Files screen has a **This phone** tab next to the PC's files. Copy or cut on one side and paste on the other, folders too. See [Files and notes](../03-using-the-app/09-files-and-notes.md).

### The terminal on the PC

With **Allow terminal from phone** on in VS Code, the app's terminal and Run configurations open on the PC. Off (the default), they stay on the phone.

## Options

### Connect to PC

Turns the feature on and adds the PC button to the side bar. **Default:** off. Turning it off while you use a PC asks **Turn off Connect to PC?**: **Turn off & reopen** goes back to your own settings and keeps the paired PCs for later.

### Rename

Gives a paired PC another name on this phone (up to 40 characters).

### Remove

The phone forgets the PC and its key for it. You can't remove the PC you are using: switch back first. To block the phone completely, also remove it on the PC (VS Code → AntiGem → **Connect phone**): that locks it out at once.

## Troubleshooting

:::details The PC doesn't show under Add a PC
**Connect phone** must be open on the PC, and both devices on the same Wi-Fi. Some networks (guest Wi-Fi, office networks) block the search: tap **Not listed? Enter the address shown on the PC** and type the address VS Code shows.
:::

:::details Pairing fails
The code is only valid while **Connect phone** is open on the PC, so open it again for a fresh code, then tap **Try again** and type the new code. Check that the PC's SSH server is on (see What the PC needs).
:::

:::details "*name* is not reachable"
The phone can't reach the PC. Is the PC on, with VS Code and AntiGem running, and on the same Wi-Fi as the phone? Tap **Retry**, **Keep waiting**, or switch back to this phone.
:::

:::details The chats are not the ones I expected
While you use a PC, the chats come from the PC. Your phone's own chats come back when you pick **Use this phone**.
:::

:::details The terminal opens on the phone, not on the PC
**Allow terminal from phone** is off in VS Code (it is off by default). Turn it on there.
:::

:::details I lost the phone
Remove the phone in VS Code → AntiGem → **Connect phone**. Its key stops working at once.
:::

:::cards
- [AntiGem for VS Code](../09-other-apps/01-vscode-extension.md) — The extension on the PC.
- [Use agents on your PC](../07-guides/13-use-agents-on-your-pc.md) — A step-by-step guide.
- [Server mode](./02-server-mode.md) — Run the agents on a server instead.
:::
