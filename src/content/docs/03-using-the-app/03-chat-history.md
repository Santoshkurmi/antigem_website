---
title: "Chat history, sharing and exporting"
sidebar: "Chat history"
description: "The drawer: find, pin, fork, rename, archive, export, share and delete chats, plus artifacts, accounts and exiting the app."
updated: 2.0.4-beta.2
---

Every chat you have with any agent is kept in the drawer. From there you can open an old chat, search all of them, and copy, export, share or delete them. The drawer also holds the buttons for Settings, Themes, Mini Apps and your accounts.

**Where:** on the Chat screen, tap **☰** (top left), or swipe right from the left edge of the screen.

![The drawer: the header icons, the agent filters, a chat, and the bottom bar with Settings, Themes, Mini Apps and the accounts button](/screens/drawer_chat_list.webp "frame")

## The drawer header

At the top: the name **AntiGem**, then four icons on the right.

### Search

The magnifier (**Search**) opens a search field, **Search chats**. As you type, the list shows only chats whose title matches, with "3 chats found" above it. **Clear** (×) empties the field. Tap **Search** again to close it.

For a deeper search, tap **Advanced Search** (the icon at the end of the field) or **Advanced Search ›** under it. See [Advanced search](#advanced-search).

### Group by Workspace

The folder icon (**Group by Workspace**) sorts the list into groups, one per project folder. Chats without a project go into **General**, and pinned chats into **Pinned** at the top. Each group shows its number of chats and its 5 newest; tap **Show 3 more** (or the group's name) to see all of them, and **Show less** to fold it again. Tap the icon again (**Disable Workspace Grouping**) for one plain list.

**Default:** off (one list, newest first).

### Show Archived Chats

The box icon (**Show Archived Chats**) shows only your archived chats, under the title **Archived chats · 4**. Tap **Back to chats** (or the icon again, **Show Chats**) to go back to the normal list. See [Archive](#archive).

### Exit App

The red power icon (**Exit App**) closes AntiGem completely. It asks first: **Exit AntiGem?**. Exiting stops all background services, the local server, the agents and the terminals. Tap **Exit App** to confirm.

When you use the [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md), the dialog has one more checkbox, **Also stop the Ubuntu chroot**. With it off, the agents in the chroot keep working while AntiGem is closed.

## The agent filters

Under the header, a row of filters: **All**, then one per agent you use (**Antigravity**, **Claude**, **OpenCode**, **Codex**). Tap one to see only that agent's chats. With [Jarvis](../05-power-features/01-jarvis.md) turned on, a **Jarvis** filter lists Jarvis' chats and has a **New Jarvis chat** button. The row is hidden when there is only one agent.

## The chat list

Chats are listed newest first, pinned chats on top. Tap a chat to open it.

Each row shows the chat's title and how long ago it was last used. It may also show:

| You see | It means |
| :--- | :--- |
| A green dot | The agent is working in this chat right now. |
| An amber dot | The chat has work going on in the background. |
| **RUNNING** (green badge) | An Antigravity process for this chat is running. Tap it to see it, or stop it (see below). |
| An orange chat icon | A Claude Code chat. |
| A cloud | An Antigravity cloud chat. |
| A pin | The chat is pinned to the top. |
| A number with an arrow | The chat started subagents. Tap the arrow (**Expand subagents**) to list their chats under it, and again (**Collapse subagents**) to hide them. |

### Active CLI Process

Tap a chat's **RUNNING** badge to open **Active CLI Process**. It shows the chat, the model, how long it has been running (**Uptime**) and its process number.

- **Terminate & Free RAM**: stops the process now, to free memory. The chat itself is not deleted.
- **Keep Running**: closes the dialog.

## The chat menu

Each chat has a **⋮** button (**Options**) at the right end of its row. Subagent chats, which are read only, have none.

### Pin to top

Keeps the chat at the top of the list (in the **Pinned** group when grouping is on). **Unpin** puts it back in its normal place.

### Copy Conversation ID

Copies the chat's ID. You need it when a guide or a bug report asks for the conversation ID.

### Fork Conversation

Makes a copy of the chat, with everything said so far, and opens the copy. Use it to try a different direction without changing the original chat.

### Rename

Opens **Rename chat**. Type the new name and tap **Save**.

### Restart chat

**Claude Code chats only.** Restarts the Claude Code process of this chat, so its next message uses your current provider settings. Use it after you changed a provider or API key in Claude Code's settings. A message says "Restarted: the next message uses the current provider settings".

### Export Markdown (.md)

Saves the chat as a Markdown text file. The file goes to `Download/AntiGem/Exports` on your phone. A message at the bottom says where it was saved, with **Open**.

### Export Standalone HTML

Saves the chat as one HTML web page you can open in any browser, also in `Download/AntiGem/Exports`.

### Share

Saves the chat as an `.antigem` file in `Download/AntiGem/Exports` and opens Android's share menu, so you can send it to someone. See [Open a shared chat](#open-a-shared-chat).

> [!CAUTION]
> A shared or exported chat contains everything in it: your messages, the agent's replies, commands and file contents it showed. Check it before you send it to anyone.

### Archive

Moves the chat out of the main list without deleting it. Its subagent chats move with it. Find archived chats with **Show Archived Chats** in the header. **Unarchive** brings a chat back.

### Delete Conversation

Deletes the chat. It asks first: **Delete Conversation?** "This will permanently remove all messages and trajectory data." Tap **Delete** to confirm. This can't be undone. Files the agent made in your project are not deleted.

## Advanced search

The **Search Conversations** window searches more than titles: it also looks in the chat's topic summary and its model name. It says how many chats it searches ("120 total chats indexed").

- Type in **Search by title, topic, or model...**.
- Pick a time: **All**, **Today**, **Past 7d** or **Past 30d**.
- Pick a project folder, when your chats use more than one.

It shows "5 matches", or **No conversations found**. Each result shows how many turns the chat has. Tap a result to open that chat.

## Open a shared chat

Open an `.antigem` file on a phone with AntiGem: tap it in a file manager or a messaging app, or share it to AntiGem. AntiGem shows **Opening Shared Chat** while it reads it (**Don't Open** cancels), then opens it in a viewer marked **READ-ONLY**, with "24 messages · AntiGem Shared Trajectory". You can read it all, but not continue it. **Close** (×) closes the viewer.

See the guide [Share or export a chat](../07-guides/20-share-or-export-a-chat.md).

## Artifacts

**Artifacts** are files the agent made along the way: plans, walkthroughs and generated images (see [Artifacts](../01-getting-started/02-key-concepts.md#artifacts)).

**Where:** under a reply, tap **View Artifacts** (the layers icon). It is shown when the chat has artifacts.

The artifacts drawer slides in from the right, titled **Artifacts** with their number and "Generated files, plans & media". Plans show as **Implementation Plan**, walkthroughs as **Walkthrough**.

- Tap an artifact to open it. Images open full screen.
- The download button (**Download to Downloads/AntiGem**) saves a copy to `Download/AntiGem` on your phone.
- **Close** (×) or the Back button closes the drawer.

An empty drawer says **No artifacts generated yet**.

## The drawer's bottom bar

### Settings

The gear (bottom left) opens Settings. See [Settings overview](../06-settings/01-overview.md).

### Themes

The palette icon opens a floating theme picker over the drawer and chat, so you can try themes and see them live. See [Themes](../06-settings/02-themes.md).

### Mini Apps

Opens your mini apps: small apps that run inside AntiGem. See [Mini Apps](../05-power-features/09-mini-apps.md).

### The PC button

Shown when **Connect to PC** is turned on. It shows which PC you use, lets you switch to another one or back to this phone, and add a PC. See [Connect to PC](../05-power-features/03-connect-to-pc.md).

### Accounts

The button at the bottom right shows your agents' accounts. Tap it to open **Accounts**: each agent with its state, your email and plan, and its CLI version. Each has **Sign out** (or a sign-in button when you are signed out) and **Settings**, which opens that agent's settings page.

## Troubleshooting

:::details A chat is missing from the list
Check three things: the agent filter at the top (tap **All**), the archive (**Show Archived Chats**), and the search field (clear it). A subagent's chat is listed under the chat that started it: tap the arrow next to that chat to show it.
:::

:::details The list shows "Unable to load chats"
AntiGem couldn't reach the agents' server. Tap **Retry**. If it keeps failing, close the drawer, tap the status dot in the chat header and **Restart server**.
:::

:::details Where are my exported files?
In `Download/AntiGem/Exports` on your phone's storage. Open them with any file manager, or with AntiGem's **Files** screen (Places → Download).
:::

:::details Can I restore a deleted chat?
No. Deleting a chat removes it for good. Archive chats you might need later instead, or [back them up](../05-power-features/12-backups.md).
:::

:::cards
- [Chat](./02-chat.md) — Everything inside a chat.
- [Share or export a chat](../07-guides/20-share-or-export-a-chat.md) — Step by step.
- [Backups](../05-power-features/12-backups.md) — Keep your chats safe.
- [Jarvis](../05-power-features/01-jarvis.md) — Voice control and Jarvis chats.
:::
