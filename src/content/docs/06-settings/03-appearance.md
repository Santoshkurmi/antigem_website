---
title: Appearance
description: Chat text size, how agent steps are grouped, message stats, the floating app switcher, Gemmy, the terminal icon and the chat header buttons.
updated: 2.0.4-beta.2
---

How the chat and the app look and feel. For colors, see [Themes](./02-themes.md).

**Where:** ☰ → **Settings** → **Appearance**

## Chat

### Chat Text Scaling

**Default:** 100% (**Normal**). Makes messages, Markdown and code blocks bigger or smaller: **Small**, **Normal**, **Medium**, **Large** or **Huge**, or drag the slider. The **Live Preview** under it shows the result. **Reset (1.0x)** goes back to normal.

### Group Agent Steps

**Default:** on. While an agent works, its thinking and tool calls in a row fold into one pill that shows the progress; tap it to see the steps. Off: every step is its own tile in the chat. Turn it off if you like to watch every step.

### Fold after (steps in a row)

**Default:** 2. How many steps in a row it takes before they fold into a pill (1 to 10). Only with **Group Agent Steps** on.

### Show Message Stats

**Default:** on. Shows the token counts, the cache percentage and the time under each reply. Tap them for the details. Turn it off for a cleaner chat. See [Models, thinking and usage limits](../02-agents/06-models-and-usage.md).

## Floating App Switcher

The floating pill, on every screen, for switching between Chat, IDE, Terminal, Browser, Notes and more. **Default:** on. See [Floating chat, switcher and Gemmy](../03-using-the-app/10-floating-chat-and-gemmy.md).

### Layout Orientation

**Default:** **Vertical**. **Vertical** or **Horizontal**.

### Auto-Collapse Timeout

**Default:** **Never**. Folds the switcher into a small arrow handle after it's not used for **3s**, **5s**, **10s** or **15s**. Tap the handle to open it again.

### Customize Icons & Order

Which screens the switcher shows, and in what order: **Chat**, **IDE (Code Editor)**, **Terminal**, **Web Browser**, **Notes & To-dos**, **Files (file explorer)** and **Run (build & run commands)**. Turn each on or off and use **Move Up** / **Move Down**. **Default:** Chat, IDE, Terminal, Browser, Notes and Files.

### Reset Screen Position to Right-Center

Puts the switcher back at the middle of the right edge, if you dragged it somewhere awkward.

## Gemmy

**Default:** on. A floating cartoon buddy across the app: drag or fling it, tap, double-tap or long-press it. It reacts while the agent works and rests (using almost no battery) when left alone. Turn it off here if you don't want it. See [Floating chat, switcher and Gemmy](../03-using-the-app/10-floating-chat-and-gemmy.md).

## Separate Terminal App Icon

**Default:** off (you chose this on first launch). Shows a dedicated terminal icon on your home screen and in the app drawer, which opens the terminal in one tap.

### Launcher Icon & Name Style

How that icon looks:

- **AntiTerm**: the modern AntiGem-style icon and name.
- **Termux**: the classic `>_` prompt icon and name.

## Chat Header Icons

Shortcut buttons in the chat's top bar, next to the project name. **Default:** only **New Chat**. Turn any on or off (all off is fine) and set their order, left to right: **New Chat**, **IDE (Code Editor)**, **Terminal**, **Web Browser**, **Notes & To-dos**, **Files (file explorer)**, **Run (build & run commands)**. Use **Move Up** / **Move Down** to order them.

> [!TIP]
> If you switch screens a lot, add your favorites as header icons and set the floating switcher to **Auto-Collapse** after a few seconds: more room for the chat.
