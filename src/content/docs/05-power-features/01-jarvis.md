---
title: Jarvis
description: "Use AntiGem hands-free by voice: waking Jarvis, sending what you said, tasks, approvals by voice, the orb and panel, and every Jarvis setting."
updated: 2.0.4-beta.2
---

Jarvis lets you use AntiGem by voice. Talk to it while you cook, walk or drive: it opens your projects and files, answers questions, starts and watches long jobs for you, reads approvals out loud, changes settings and tells you how the app works. You can also type to it.

**Where:** ☰ (top left) → **Settings** → **Jarvis**

Jarvis is **off by default**. Nothing listens until you turn it on.

## How it works

Jarvis is not a separate AI. It runs on one of your agents (Antigravity, Claude Code, OpenCode or Codex) in a hidden chat of its own, and controls the app through the **Jarvis** [built-in MCP server](../04-tools-and-extensions/02-built-in-mcp-servers.md). It controls **AntiGem only**, not the rest of your phone (that is what the Android MCP is for, see [Android automation](./08-android-automation.md)).

- The first message of every Jarvis chat carries Jarvis' whole guide: its rules, its tools, your persona and notes, and what is on screen.
- Every later message carries a short hidden note with fresh context: the screen, the open project and file, the chat on screen, tasks, approvals and timers. You only see your own words.
- Big jobs run as **tasks**: separate chats that the app watches for you while you keep talking.

## Set it up

:::steps
### Turn on Jarvis

Open **Settings → Jarvis** and switch on **Turn on Jarvis**.

### Pick its agent and model

Tap **Voice agent & model** and pick **Claude Code**, **Antigravity**, **OpenCode** or **Codex**, and a **Model** if you like. Until you pick one, Jarvis can't answer. A fast model feels best for voice: big jobs run as tasks in their own chats anyway.

### Work through Setup

Tap **Setup** and do each step:

1. **Add the Jarvis MCP server** (required): the tools Jarvis controls the app with.
2. **Let Jarvis' tools run without asking** (Claude Code only): otherwise every spoken answer would need an approval.
3. **Allow the microphone**: needed to hear you.
4. **Optional: install the Jarvis skill**. Not needed: the guide goes with the first message.

### Add send phrases

Open **Listening & sending**. Under **Send with a phrase**, tap **Edit**, then **Add suggestions** to add phrases like "send it" or "bhej do". (The lists start empty, so nothing is sent by a phrase you didn't choose.)

### Talk

A small orb shows on the edge of the screen. Tap it and talk. End with a send phrase, or tap **Send** on the card.
:::

To use Jarvis with the screen off or from other apps, turn on **Hands-free mode** (see Waking Jarvis below).

## Settings → Jarvis

![Settings → Jarvis: Turn on Jarvis, Floating button & voice, and the rows for each Jarvis page](/screens/jarvis_settings.webp "phone")

### Turn on Jarvis

Turns Jarvis on or off. **Default:** off.

### Floating button & voice

The voice side of Jarvis: the orb, the microphone, the wake phrase and answers read out loud. Off means "chat only": no orb, no microphone, nothing read out; you type to Jarvis in a Jarvis chat (chat list → **Jarvis** tab → **New Jarvis chat**). **Default:** on.

### Jarvis chats in the chat list

Where Jarvis chats are listed:

- **Only under Jarvis** (default): only under the **Jarvis** tab. Work chats Jarvis starts for its tasks are normal chats and always show in **All**.
- **My Jarvis chats in All too**: the Jarvis chats you opened yourself also show in **All** and the agent tabs.
- **All Jarvis chats in All too**: every Jarvis chat, also the voice chats Jarvis opens by itself.

## Voice agent & model

**Where:** **Settings → Jarvis → Voice agent & model**

The agent Jarvis talks to: **Claude Code**, **Antigravity**, **OpenCode** or **Codex**, and its **Model** (**Default model** or any model of that agent). **Default:** not set. The agent must be on in **Settings → Agents**; if it isn't, the page says so.

Jarvis talks to a normal hidden chat of this agent. You can open it under **Jarvis** in the chat list. After you switch the agent, Jarvis starts a new chat.

## Personality & you

**Where:** **Settings → Jarvis → Personality & you**

### Jarvis speaks as

**Not set**, **Female**, **Male** or **Neutral**: the grammatical gender Jarvis uses for itself. It matters in languages like Hindi ("main kar rahi hoon" / "main kar raha hoon"). Pick a matching voice under **Voice output**. **Default:** **Not set**.

### About you and extra instructions

Anything Jarvis should always know, for example "Call me Santosh. Reply in Hinglish. I mostly work on the antigem project." It is sent with the first message of every new Jarvis chat. When you change it (or the persona), the open chat is told with your next message.

This is separate from **Jarvis memory** (on the **Jarvis chat** page), which Jarvis edits itself.

## Setup

**Where:** **Settings → Jarvis → Setup** (shows once Jarvis is on)

The steps for the agent that runs Jarvis (see Set it up above). Each step shows **Allowed**, **Added** or **Installed** when it is done. If Jarvis reports that its app tools are missing, this page shows a warning: add the Jarvis MCP server, then start a fresh Jarvis chat.

## Waking Jarvis

**Where:** **Settings → Jarvis → Waking Jarvis**

| How | What to do |
| :--- | :--- |
| **The orb** | Tap the orb to talk. Long-press it for the Jarvis panel. |
| **Quick Settings tile** | Pull down the notification shade, edit the tiles and add **Jarvis**. Tap it to talk from anywhere. While AntiGem runs in the background, it listens without opening the app. |
| **App shortcut** | Long-press the AntiGem icon → **Jarvis**, or tap **Add to home screen**. |
| **Notification** | With hands-free mode on: **Talk**, **Send** and **Stop**. |
| **Headset or Bluetooth button** | With hands-free mode on: one press talks (or sends), two presses stop. |
| **Wake phrase** | Say "Hey Jarvis" (or your own phrase). Needs hands-free mode and **Wake phrase too**. |

### Trigger

**Button / tile / headset** or **Wake phrase too**. **Default:** **Button / tile / headset**.

The wake phrase uses Android's speech recognizer all the time, which costs battery. You can say it together with your request: "Hey Jarvis, what's running?"

### Wake phrase(s), comma separated

Shows with **Wake phrase too**. **Default:** `hey jarvis`. Add more with commas: `hey jarvis, ok jarvis`. Common mishearings of "Jarvis" count too.

Match **Whole phrase** (default) or **The name alone** ("Jarvis, open my project").

### Hands-free mode

Keeps Jarvis' microphone service running, so the wake phrase and the headset button work with the screen off or another app open. A notification shows its state with **Talk** / **Send** / **Stop**. **Default:** off.

### Headset button

With hands-free mode on: one press talks (or sends), two presses stop. It works while no music app holds the button. **Default:** on.

## Listening & sending

**Where:** **Settings → Jarvis → Listening & sending**

By default nothing is sent while you pause to think. You decide when Jarvis gets your words: say a send phrase at the end, tap **Send** on the card, press the headset button, or use **Send** in the notification.

### Send automatically when I pause

Sends what you said after a pause. **Default:** off.

- **Smart pause** (default): Jarvis waits longer when you sound unfinished ("…and", "…the") and less for short answers.
- **Fixed pause**: always the same pause. **Pause before sending:** 0.6 to 4 s, **Default:** 1.5 s.

A bar fills on the card while it counts down. Tap **Wait** to keep talking.

### Answers to Jarvis' questions

**Like everything else** (default): answers are sent like any other message. **Send on pause**: when Jarvis just asked you something, your answer is sent after the pause, even with auto-send off.

### Send with a phrase and Cancel with a phrase

End with a send phrase and your message is sent at once (the phrase itself is not sent). End with a cancel phrase and nothing is sent. **Default:** both on, with **empty lists**.

Tap **Edit** to open a list: **Add suggestions** adds the common ones ("send it", "send kar do", "bhej do"… and "scratch that", "never mind", "rehne do"…), **×** removes one, and you can add a word or a whole sentence. You can also ask Jarvis: "add 'chalo bhejo' as a send phrase".

A phrase only counts when it really is a command:

- only at the very end of what you said;
- not when it belongs to your sentence ("write an email to Bob **and send it**");
- never after a negation: "don't send it" never sends;
- short or common phrases ("send", "over", "do it") only count when said on their own after a short pause.

If a phrase keeps firing by mistake, remove it or use a longer one ("jarvis send it now").

### After Jarvis speaks, listen for your reply

- **When it expects an answer** (default): Jarvis decides. After "Done, want me to run it?" the microphone opens; after "Saved the file." it doesn't. Questions always open it.
- **Always**: after every answer while you are talking to Jarvis.
- **Never**: only when you tap or wake Jarvis.

**Wait for a reply:** 3 to 20 s, **Default:** 8 s. If you say nothing in that time, the microphone closes with a soft tone.

### Longest single message

20 to 240 s. **Default:** 90 s. Whatever was heard is sent then.

### Talking to other people nearby

- **Smart** (default): during follow-up listening, Jarvis ignores what was clearly said to someone else, and filler like "um".
- **Strict**: during follow-up listening, Jarvis only reacts when you say its name (or answer its question).
- **Off**: everything heard is for Jarvis.

### Speaking while Jarvis is still working

- **My interrupt phrases** (default): only a message that starts with one of your interrupt phrases (see Voice shortcuts) stops Jarvis' work; anything else waits.
- **Wait for it**: your message waits until Jarvis is done.
- **Always interrupt**: a new message always stops the current work.

### Tones when the microphone opens and closes

**Default:** on.

### Speech recognition

**Same as agent** (default), **Claude**, **Antigravity** or **This device** (Android's own recognizer), and the **Language** (**Default:** `en`).

### Voice shortcuts

Your own phrases that act at once, without asking the model, when you say them on their own (optionally with "Jarvis" or "please"): **Stop everything**, **End the conversation**, **Repeat the last answer**, **Speak slower**, **Speak faster**, **Quiet mode on**, **Quiet mode off**, **Start a new session**, and **Interrupt Jarvis' work (starts a message)**.

**Default:** none. Until you add them, a plain "okay" or "stop" goes to Jarvis like anything else.

## Voice output

**Where:** **Settings → Jarvis → Voice output**

### Quiet mode

Jarvis shows its answers on the card instead of saying them (meetings, night). **Default:** off. Also in the Jarvis quick settings.

### Engine

- **This device** (default): Android's text-to-speech, with a voice picker (**System default**) and an optional language.
- **Google Cloud**: an API key, a **Voice name** (for example `en-US-Neural2-F`) and a **Language code**.
- **OpenAI-compatible**: **Base URL** (default `https://api.openai.com/v1`), **Model** (default `tts-1`), **Voice** (default `alloy`) and an API key.

If an online voice fails, Jarvis falls back to this device's voice.

### Speed and pitch

0.5 to 2. **Default:** 1.0 each. **Test voice** plays a sample.

### Speak progress updates

Jarvis says a short line while a long step runs. **Default:** off.

## Manager & tasks

**Where:** **Settings → Jarvis → Manager & tasks**

Say "build the release and tell me when it's done": Jarvis starts a **task** in its own chat and watches it. Jarvis tells you when a task finishes, fails, makes no progress, needs an approval or asks a question (which you can answer by voice). You can ask how it is going, change its course ("tell it to also run the lint"), stop it, or open its chat.

### When a task finishes, fails or gets stuck

**Jarvis decides** (default): Jarvis reads the result, tells you the gist and follows up; this uses a model turn per event. **Just tell me**: a short announcement ("Release build is done"), no model turn.

### Approvals inside tasks

**Use my approval rules** (default): approvals follow **Approvals** (below). **Jarvis decides**: Jarvis approves what clearly serves the task's goal and asks you about anything risky or unclear (needs **Jarvis decides** above).

### Report a task with no progress after

**Never**, **5 min**, **10 min**, **20 min** or **45 min**. **Default:** 10 min.

### Announcements

- **Say when any other chat finishes**: "*chat title* is done. Please check it." for chats that are not Jarvis tasks. **Default:** off. With it on, **Not for the chat I'm looking at** (**Default:** on).
- **Also read the start of the reply**, for announcements without a model turn. **Default:** off.
- **Warn when the 5-hour usage is almost gone**: once per window, at about 15% left (Claude Code). **Default:** off.

### Command center

Type to Jarvis in a Jarvis chat (chat list → **Jarvis** tab → **New Jarvis chat**) and give it a big job: it writes a mission (goal, done-when, steps), creates teams of agents (for example builders and reviewers), hands out tasks in parallel, checks what comes back and keeps going. The strip above the message box shows the mission and the teams' tasks. Several Jarvis chats can work at the same time; each one only hears about its own tasks.

- **Read replies out loud in new Jarvis chats**: the default for new chats; each chat has its own **Voice** switch. **Default:** off.
- **When Jarvis sleeps or polls while waiting for its tasks**: **Stop it, hand it the news** (default), **Only remind it** or **Leave it**.
- **Collect news before sending it**: **At once**, **2 s** (default), **5 s** or **15 s**. News that comes in meanwhile goes to Jarvis together in one message.
- **Autopilot gives up after**: **2**, **4** (default), **8** or **15 nudges**. With autopilot on, Jarvis is nudged to continue when it stops before the mission is done; nudges in a row without progress pause it.

## Approvals

**Where:** **Settings → Jarvis → Approvals**

When an agent wants to run a command or edit a file, Jarvis can read it out and wait for your **yes** or **no**.

### Approval policy

- **Ask me each time** (default): Jarvis reads each request out and waits for your yes or no.
- **Auto: read-only**: reading files and searching is approved; anything else is read out.
- **Auto: except risky**: everything is approved except risky actions (deleting, pushing, installing from the web), which are read out first.
- **Auto: everything**: nothing is asked. The app asks **Approve everything automatically?** first.

If your answer is unclear, nothing is approved. Jarvis' own tools never need approval.

### Let Jarvis change app settings

Lets Jarvis change the theme, chat font size, floating bubble and switcher, and the new-chat agent by voice. Jarvis' own voice and listening options can always be changed by voice; approval and security settings never. **Default:** off.

## Screen & look

**Where:** **Settings → Jarvis → Screen & look**

### Keep the screen on

**While Jarvis is on** (default), **While it's active** (while Jarvis listens, works or speaks, or a task runs) or **Never**. Running chats keep the screen on anyway.

### Orb while idle

**Tiny**, **Small** (default), **Normal** or **Hidden** (shown only while Jarvis is active: use the tile, headset or wake phrase). Drag the orb anywhere: it rests on the nearest edge.

### Style

**Floating card** (default) or **Full screen** while Jarvis listens and speaks.

### Float over other apps

Outside AntiGem the orb floats over any app: tap it to talk, long-press it for the Jarvis panel. Drag it onto the **✕** at the bottom to hide it until you talk to Jarvis in AntiGem again. It is hidden during Antigravity voice calls. **Default:** off. It needs **Display over other apps**: **Allow** opens the setting.

### Vibrate, activity and transcript

**Vibrate when listening starts**, **Show what Jarvis is doing** (a slim status line, "Checking the build…") and **Show what Jarvis heard and said**. **Default:** all on.

## Jarvis chat

**Where:** **Settings → Jarvis → Jarvis chat**

### Send live context with every message

The screen, project, chat on screen, tasks, approvals and timers, so Jarvis rarely has to look them up. **Default:** on.

### Start a fresh chat

**Start a fresh chat after idle time** (**Never**, 5 min, 15 min, 30 min, 1 h, 3 h) and **Start a fresh chat after this many messages** (**Never**, 10, 20, 40, 80). **Default:** **Never** for both, so Jarvis never forgets mid-task. A chat is only replaced when you speak the next message, never while it is working. **Start a fresh chat now** does it at once; you can also say "start again" or "new session".

### Carry the conversation over

A new chat starts with the Jarvis memory note and the last lines of the old conversation. **Default:** on.

### Jarvis memory

A note Jarvis keeps across chats ("remember that I prefer short answers"). You can edit it here; Jarvis edits it too.

## The orb, the card and the panel

- **Idle**: the orb rests on the edge of the screen.
- **Working**: a slim status line shows what Jarvis is doing, with a stop button.
- **Listening or speaking**: the card opens with what Jarvis heard or said and its buttons, for example **Send** and **Wait** while it listens.

**The Jarvis panel** (long-press the orb) shows Jarvis' state ("Ready · runs on Claude Code"), quick switches (**More** opens all of them), your **Tasks** with **Open**, **Stop** and **Dismiss**, the **Conversation**, and a **Type to Jarvis…** box. At the bottom: **New Jarvis chat**, **Jarvis settings**, **New session** and **Stop all**.

## What you can ask

Anything you would ask the agent, plus control of AntiGem. Some examples:

- **The app:** "Open the antigem project and MainActivity." · "Show the terminal." · "Search the code for onCreate." · "Use the Obsidian theme."
- **Chats and models:** "What's running?" · "Find my chat about the login bug." · "Switch this chat to Opus." · "Set effort to high."
- **Help:** "How do I add an MCP server?" · "Is Claude signed in?" · "How much usage do I have left?"
- **Everyday:** "Set a timer for 12 minutes for the pasta." · "Remember that I prefer short answers."
- **Jarvis itself:** "Turn on auto send." · "Make the orb tiny." · "Speak a bit faster."

## Troubleshooting

:::details Jarvis says its app tools aren't connected
The Jarvis MCP server is missing for the agent that runs Jarvis. Open **Settings → Jarvis → Setup**, tap **Add** at step 1, then say "start again" (or tap **Start a fresh chat now** on the **Jarvis chat** page).
:::

:::details "No agent picked" or Jarvis doesn't answer at all
Pick an agent in **Settings → Jarvis → Voice agent & model**, and make sure that agent is on in **Settings → Agents** and signed in.
:::

:::details Jarvis doesn't hear me
Allow the microphone (**Setup**), or set **Speech recognition** to **This device**.
:::

:::details What I say is never sent
Auto-send is off and the send phrase lists start empty. Tap **Send** on the card, add send phrases (**Listening & sending → Send with a phrase → Edit → Add suggestions**), or turn on **Send automatically when I pause**.
:::

:::details A phrase sends or cancels by mistake
Remove it in **Listening & sending**, or replace it with a longer sentence.
:::

:::details Jarvis is silent
Check that **Quiet mode** is off, and that the voice works (**Voice output → Test voice**).
:::

:::details The wake phrase doesn't work
Turn on **Hands-free mode** and set **Trigger** to **Wake phrase too** (**Waking Jarvis**).
:::

:::details The headset button does nothing
It needs **Hands-free mode**. A music app may be holding the button: pause or close it.
:::

:::details Every answer asks for approval (Claude Code)
Open **Setup** and tap **Allow** at **Let Jarvis' tools run without asking**.
:::

:::details "stop" or "repeat that" goes to the model instead of acting at once
Voice shortcuts are empty until you add them. Add your phrases under **Listening & sending → Voice shortcuts**.
:::

:::details Jarvis forgot what we discussed
A new Jarvis chat started (your fresh-chat rules, "start again", or the chat was deleted). With **Carry the conversation over** on, the last lines come along. Put lasting facts in **Jarvis memory**.
:::

## Privacy

- Jarvis is off until you turn it on. The microphone only opens when you trigger it, or for a few seconds after Jarvis asked you something.
- Hands-free mode keeps a microphone service running and always shows a notification.
- What you say goes to the speech recognizer you chose (your agent's dictation, or Android's recognizer, which may use Google's servers) and then to your agent, like a normal chat message.
- Online voices (Google Cloud, OpenAI-compatible) receive the text Jarvis speaks.

:::cards
- [Code hands-free with Jarvis](../07-guides/19-code-hands-free.md) — A walkthrough.
- [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md) — The Jarvis MCP and the others.
- [Choosing an agent](../02-agents/01-overview.md) — The agents Jarvis can run on.
:::
