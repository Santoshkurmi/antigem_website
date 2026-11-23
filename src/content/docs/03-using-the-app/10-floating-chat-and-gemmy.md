---
title: "Floating chat, switcher and Gemmy"
sidebar: "Floating chat and Gemmy"
description: "The floating chat window over other apps, the floating app switcher and its gestures, and Gemmy, the buddy that reacts while your agent works."
updated: 2.0.4-beta.2
---

Three things in AntiGem float: the **floating chat**, a chat window you open on top of any other app; the **floating switcher**, the button for moving between AntiGem's screens; and **Gemmy**, a little buddy who keeps you company while the agent works.

**Where:** the floating chat opens from AntiGem's notification (**Float**). The switcher and Gemmy float over every screen of the app.

## The floating chat

Talk to your agent without leaving the app you are in, for example to ask about a web page or an error while you look at it.

### Open it

:::steps
### Pull down the notification shade

From any app, swipe down from the top of the screen.

### Tap Float

AntiGem's notification (titled **AntiGem**) has three buttons: **Exit**, the wake lock button, and **Float**. Tap **Float**.

### Chat

A chat window opens over the app you were using. It is the same chat as in the full app: the same chats, drawer, message box, attachments and voice buttons.
:::

![The floating chat window over another app, with the Minimize to Bubble and Open Full Screen buttons at the top right](/screens/floating_chat_window.webp "frame")

### Its buttons

The window's header has two extra buttons at the top right:

- **Minimize to Bubble** (−): closes the window and returns you to the app below. The agent keeps working. Open the window again with **Float**.
- **Open Full Screen** (the arrow box): opens the full AntiGem app on the same chat.

Tapping outside the window, or Back on the chat, closes it too.

### Other screens in the window

The chat header's shortcuts for the **IDE**, **Terminal** and **Browser** work inside the floating window: they open in the window, and Back returns to the chat. Notes, Files and the Run screen are only in the full app: tap **Open Full Screen** for them.

> [!NOTE]
> The floating chat needs AntiGem's notification. If you don't see it, allow AntiGem's notifications in Android's settings and open AntiGem once. See [Running in the background](./11-background-and-notifications.md).

## The floating switcher

The small round button with an arrow, on the right edge of every screen of the full app. It is how you move between Chat, IDE, Terminal, Browser, Notes, Files and Run.

![The switcher opened: a column of screen icons with the Chat icon highlighted, and the arrow to fold it](/screens/main_switcher_expanded.webp "frame")

### Gestures

| Do this | What happens |
| :--- | :--- |
| Tap the button (**Expand Switcher**) | It opens and shows one icon per screen. The screen you are on is highlighted. |
| Tap an icon | Go to that screen. |
| Double-tap the button | Jump back to the screen you were on before. |
| Tap the arrow at its end (**Collapse Switcher**) | It folds up again. |
| Drag it, open or folded | Move it anywhere. It stays there, also after a restart. |
| Hold an icon or the arrow for half a second | Switch between a column and a row (**Toggle switcher orientation**). |

It opens toward the middle of the screen, so it never goes off the edge.

### Change it

In **Settings → Appearance → Floating App Switcher** you can choose:

- **Layout Orientation**: **Vertical** (**default**) or **Horizontal**.
- **Auto-Collapse Timeout**: fold up by itself after 3 to 15 seconds. **Default:** **Never**.
- **Customize Icons & Order**: which screens it shows, and in what order. **Default:** Chat, IDE, Terminal, Browser, Notes and Files. Add **Run** here.
- **Reset Screen Position to Right-Center**: put it back in its first place.

See [Appearance](../06-settings/03-appearance.md).

## Gemmy

**Gemmy** is the little purple buddy who floats over the app. Gemmy has no job: it is there for fun, and to show at a glance whether your agent is working.

![Gemmy floating over the chat, thinking with a glowing antenna while the agent works](/screens/gemmy_working.webp "frame")

### Meet Gemmy

After the first-launch setup, AntiGem asks once, **Meet Gemmy 👋**. Leave **Show Gemmy** on and tap **Let's go!**, or turn it off and tap **Continue without Gemmy**. Gemmy only appears after you answer.

### Play with Gemmy

- **Drag** Gemmy anywhere, or **fling** it: it bounces off the edges of the screen. Shake it and it gets dizzy.
- **Tap** it for a random reaction: a hop, hearts, a "Boop! 👉". Poke it five times fast and it gets angry.
- **Double-tap** it to make it spin ("Wheee! ✨").
- **Long-press** it to open its menu:
  - **💃 Dance**
  - **😴 Nap**: it falls asleep.
  - **👋 Hide**: it waves goodbye and disappears until the app starts again.

The menu closes by itself after a few seconds, or when you tap Gemmy.

Left alone, Gemmy wanders around, waves, hops, spins and yawns, and falls asleep after about a minute without being touched.

### While the agent works

When the agent starts working in the open chat, Gemmy starts thinking: its antenna glows, dots circle around it, and sometimes it says "On it! 🛠️", "Thinking… 🤔" or "Agent is cooking 🍳". When the agent finishes, Gemmy jumps, sparkles and cheers: "Done! ✨", "Ta-da! 🎉" or "All finished! 🙌".

### Battery

Gemmy uses almost no battery. A few seconds after you last touch it, it stops moving and the app stops drawing it, waking only for a blink or a small trick now and then. It stops completely while AntiGem is in the background.

### Turn Gemmy off

Turn off **Gemmy** in **Settings → Appearance**. **Default:** on. **Hide** in its menu only hides it until the next start. See [Appearance](../06-settings/03-appearance.md).

## Troubleshooting

:::details There is no Float button in the notification
AntiGem's notification is missing or folded. Allow notifications for AntiGem in Android's settings, open AntiGem once so its background service starts, then expand the notification to see its buttons.
:::

:::details The switcher is gone or off screen
It is always on, but it may be behind the keyboard or in a corner. Close the keyboard, or use **Settings → Appearance → Floating App Switcher → Reset Screen Position to Right-Center**.
:::

:::details Gemmy disappeared
You may have tapped **Hide**: Gemmy comes back the next time AntiGem starts. If it doesn't, check that **Gemmy** is on in **Settings → Appearance**.
:::

:::cards
- [The main screen](./01-main-screen.md) — The screens and how to move around.
- [Appearance](../06-settings/03-appearance.md) — Switcher, header icons and Gemmy settings.
- [Running in the background](./11-background-and-notifications.md) — The notification and its buttons.
- [Jarvis](../05-power-features/01-jarvis.md) — Talk to the app hands-free.
:::
