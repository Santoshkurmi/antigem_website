---
title: "The main screen"
sidebar: "Main screen and moving around"
description: "The chat header, the seven screens of the app, and how to move between them with the switcher, shortcuts and the Back button."
updated: 2.0.4-beta.2
---

AntiGem opens on the **Chat** screen. From there you can reach six more screens: the code editor, the terminal, the browser, notes, files and the Run screen. This page shows what is on the main screen and every way to move around.

**Where:** the screen you see when you open AntiGem. The floating switcher is on the right edge of every screen.

![The empty chat: the header with ☰, the title, Select Project and the New chat button; the agent tabs; the message box with +, the model chip and the voice buttons; Gemmy floating](/screens/main_empty_chat.webp "frame")

## The screens

AntiGem has seven screens. Switching between them closes nothing: your open files, terminals, browser tabs and notes stay where you left them.

| Screen | What it is for | Page |
| :--- | :--- | :--- |
| **Chat** | Talk to an agent and watch it work | [Chat](./02-chat.md) |
| **IDE** | Edit code, use Git, run a file | [Editor and Git](./05-editor-and-git.md) |
| **Terminal** | A Linux shell with `pkg` and `apt` | [Terminal](./07-terminal.md) |
| **Browser** | Open web pages and test your own sites | [Browser](./08-browser.md) |
| **Notes** | Notes and to-do lists | [Files and notes](./09-files-and-notes.md) |
| **Files** | Browse, copy, move and open files | [Files and notes](./09-files-and-notes.md) |
| **Run** | A folder's commands and their live output | [The Run screen](./06-run.md) |

## The chat header

The bar at the top of the Chat screen. From left to right:

### Open Drawer (☰)

**☰** (top left) opens the drawer with your chat history, search, Settings, Themes and Mini Apps. You can also swipe right from the left edge of the screen. See [Chat history](./03-chat-history.md).

When you opened this chat from a link in another chat (for example a subagent's chat, or a task Jarvis points to), a **Back** arrow takes the place of ☰. It returns you to the chat you came from.

### The chat title

The name of the open chat. A new chat shows **New Chat** until the agent gives it a real title, which then fades in. To rename a chat, use its menu in the drawer.

### Select Project

The rounded chip right of the title. Before the first message it reads **Select Project** with a small arrow (**Choose project**). Tap it to pick the folder the agent works in. See [Projects](./04-projects.md).

After the first message, the project of a chat can't change. The chip then shows the project's folder name, or **Outside** for a chat without a project. An Antigravity cloud chat shows **☁** and its cloud project.

### The agent status dot

A small dot at the start of the project chip. It has one slice for each agent you turned on, colored by that agent's state, and it pulses while something is starting. Tap the dot (or, after the first message, the whole chip) to see the **AGENTS** list:

- Each agent with its state: **Ready**, **Starting…**, **Offline**, **Sign in required**, **Not installed**, **Error** and others, with your account under it when signed in.
- A button for the fix when there is one: **Sign in**, **Install**, **Set up**, **Start**, **Restart**, **Retry**, **Check** or **Open**.
- **Server logs**: the output of the local server that runs the agents. Useful when an agent won't start.
- **Restart server**: restarts that server. Running replies stop.

### Screen stays on

While an agent works (or a Jarvis task runs), a small sun appears in the project chip and the screen doesn't turn off by itself. Tap the sun to see why: **The screen won't turn off by itself while:** followed by the reasons, for example "Claude is replying in …". It turns off normally again once the work is done.

### New chat and other shortcuts

The icons at the right end of the header. By default there is one: **New chat**, which starts a new, empty chat with your default agent.

You can add shortcuts to the other screens (**Open IDE**, **Open Terminal**, **Open Browser**, **Open Notes**, **Open Files**, **Open Run panel**), remove **New chat**, or change their order, in **Settings → Appearance → Chat Header Icons**. While a command runs on the Run screen, a ring spins around the Run icon. See [Appearance](../06-settings/03-appearance.md).

### Below the header

- **The agent tabs.** A new, empty chat shows one tab for each agent you turned on (Antigravity, Claude Code, OpenCode, Codex). Tap one to choose who answers. With only one agent turned on, there are no tabs. Turn agents on or off in **Settings → Agents**. See [Choosing an agent](../02-agents/01-overview.md).
- **The message box** at the bottom, with **+**, the model chip and the voice buttons. See [Chat](./02-chat.md#the-message-box).

## Moving between screens

### The floating switcher

A small round button with an arrow, floating on the right edge of every screen. It is always there.

- **Tap it** (**Expand Switcher**) to open it. It shows one icon per screen: **Chat**, **IDE**, **Terminal**, **Browser**, **Notes** and **Files**. The screen you are on is highlighted.
- **Tap an icon** to go to that screen.
- **Double-tap it** to jump back to the screen you were on just before.
- **Tap the arrow** at its end (**Collapse Switcher**) to fold it up again.
- **Drag it** to move it anywhere on the screen. It remembers the place.
- **Hold an icon or the arrow** for half a second to turn it from a column into a row, or back.

The **Run** screen isn't in the switcher by default. You can add it, remove other icons, change the order, pick the layout and make it fold up by itself after a few seconds in **Settings → Appearance → Floating App Switcher**. See [Floating chat, switcher and Gemmy](./10-floating-chat-and-gemmy.md#the-floating-switcher).

> [!NOTE]
> The **Terminal** icon needs a shell. If the Linux environment isn't installed yet (and you don't use a server or SSH), AntiGem offers to install it instead of opening the terminal.

### Other ways to get to a screen

- The header shortcuts on the Chat screen (see [New chat and other shortcuts](#new-chat-and-other-shortcuts)).
- In the IDE, **AI Chat** (the sparkle icon, top right) goes back to the chat.
- A text file the agent mentions in the chat opens in the IDE when you tap its path.
- In Files, **Open this folder in IDE** opens the IDE on that folder.
- In the IDE, **▾** (Run Configurations) → **Open Run screen** opens the Run screen.
- While a command runs, a round **Run** bubble floats on the other screens. Tap it to open the Run screen.

### The Back button

Android's Back button (or the back gesture) works like this:

- **Each screen uses Back for its own things first:** closing a panel or a dialog, leaving a search, going up one folder in Files, going back one page in the browser.
- **After that, Back returns to the screen you came from.** If there is none, it goes to Chat.
- **On the Chat screen, Back puts AntiGem in the background.** It doesn't close the app: agents, terminals and runs keep working. Open AntiGem again to continue where you were.

### Close the app completely

Back never closes AntiGem. To stop everything (agents, the local server, terminals and runs):

- Open the drawer (**☰**) and tap the red power icon at the top right (**Exit App**), then **Exit App**, or
- tap **Exit** in AntiGem's notification.

See [Running in the background](./11-background-and-notifications.md).

## What floats over the screens

Some things float over every screen:

- **Gemmy**, the little buddy. See [Floating chat, switcher and Gemmy](./10-floating-chat-and-gemmy.md#gemmy).
- **The Run bubble**, while a command runs. See [The Run screen](./06-run.md).
- **The Jarvis orb**, only when Jarvis is turned on. See [Jarvis](../05-power-features/01-jarvis.md).

## Troubleshooting

:::details The status dot is red or grey and the agent won't answer
The agent isn't ready: it may be signed out, not installed, or the local server may have stopped. Tap the dot to see each agent's state. Tap the button next to the agent (**Sign in**, **Install**, **Start**…). If that doesn't help, tap **Restart server**. If it still fails, open **Server logs** and send the last lines when you [ask for help](../08-help/04-get-help.md).
:::

:::details I pressed Back and the app disappeared
That is normal. Back on the Chat screen moves AntiGem to the background instead of closing it, so your agents keep working. Open AntiGem from the launcher or its notification to come back.
:::

:::details The switcher covers something I need to tap
Drag it somewhere else. To put it back to its first place, use **Settings → Appearance → Floating App Switcher → Reset Screen Position to Right-Center**.
:::

:::details The Select Project chip doesn't open the project list
After the first message, a chat keeps its project and the chip shows the agents' status instead. Start a new chat (**New chat**) to pick another project.
:::

:::cards
- [Chat](./02-chat.md) — The message box, replies, tool cards and approvals.
- [Chat history](./03-chat-history.md) — The drawer: find, rename, export and share chats.
- [Projects](./04-projects.md) — Pick the folder the agent works in.
- [Floating chat, switcher and Gemmy](./10-floating-chat-and-gemmy.md) — The floating helpers.
:::
