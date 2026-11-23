---
title: Chat
description: "The message box, attachments, voice, queued messages, and everything a reply can show: thinking, tool cards, approvals, questions, plans and errors."
updated: 2.0.4-beta.2
---

The chat is where you work with an agent. You type (or speak) what you want, and the agent answers. While it works, you see each step it takes: its thinking, the commands it runs, the files it reads and changes, and the questions it asks you.

**Where:** the first screen of the app. From anywhere else: the floating switcher → **Chat**.

## Start a chat

:::steps
### Pick the agent

A new, empty chat shows a tab for each agent you turned on. Tap the one you want to talk to. See [Choosing an agent](../02-agents/01-overview.md).

### Pick a project

Tap **Select Project** in the header and choose the folder the agent should work in. You can skip this to just ask questions. See [Projects](./04-projects.md).

### Type and send

Type your message in the box at the bottom and tap the orange arrow (**Send**). The reply streams in live.
:::

To start over at any time, tap **New chat** (top right). Your old chats stay in the drawer (**☰**). See [Chat history](./03-chat-history.md).

## The message box

The rounded box at the bottom. The text field is on top. The row under it has, from left to right: **+**, the model chip, the voice buttons, and the send button. The placeholder text says who you are talking to, for example "Reply to Claude...".

![The message box with an image attached, the model chip with its usage badge, and the voice buttons](/screens/chat_input_bar.webp "frame")

### Add attachments (+)

The **+** button (bottom left) opens **Add to Chat**:

| Option | What it does |
| :--- | :--- |
| **Camera Photo** | Take a photo with the camera and attach it. |
| **Photo / Image** | Pick an image. The model sees the image directly. Big photos are shrunk first. |
| **Document / File** | Pick any file. It is copied from your phone to the agent's machine. Avoid large files here: copying takes time and storage. |
| **From Files** | Pick files from the agent's own machine (the Files browser opens, titled **Attach files**). Nothing is copied: the agent opens the original file, so any size works. |

Attached files show as small cards above the text. While a file is still being prepared or copied, the card says **Preparing attachment…** or **Copying 45%**, and you can't send until it is ready. Tap a card to preview it, or **Remove** (×) to take it off.

> [!NOTE]
> If the model you picked can't read images, a line under the attachment says so: "… can't read images, so it won't see this one. Tap to switch model, or send anyway." Claude models also can't read audio or video files; remove them, or dictate instead.

### Mention a file with @

When the chat has a project, type `@` and the start of a file or folder name. A list of matching files from the project appears above the box. Tap one to put its path in your message, so the agent knows exactly which file you mean.

### Slash commands

Type `/` at the start of a word to open the command list above the box. It shows your **Custom commands**, **Custom AntiGem plugins**, **Skills & plugins**, the agent's own **Commands**, and commands that **Opens in the app** (they open a screen of AntiGem instead of going to the agent). Each line shows the command, what it expects after it, and a short description.

Tap a command to put it in the box. Some commands are marked **runs**: they run as soon as you tap them. Commands marked **opens** open something in the app. Type `/plu:` to browse your custom plugins and their skills.

See [Slash commands](../04-tools-and-extensions/06-slash-commands.md) to make your own.

### The model chip

The pill in the middle of the bottom row (**Switch Model**). It shows the model this chat uses. When your plan has usage limits, a small colored badge shows how much is left: for example `62%` for the 5-hour limit, or `7d 40%` for the weekly one. Tap the chip to pick another model, also in the middle of a chat. See [Models, thinking and usage limits](../02-agents/06-models-and-usage.md).

### Agent controls above the box

Claude Code, OpenCode and Codex chats show a row of small chips right above the message box. Depending on the agent, they set the permission mode, the effort or reasoning level, thinking on or off, and plan mode, and Claude Code also shows the cache, the context used and your 5-hour usage. You can change them during a chat. Each agent's page explains its chips: [Claude Code](../02-agents/03-claude-code.md), [OpenCode](../02-agents/04-opencode.md), [Codex](../02-agents/05-codex.md).

## Voice

The voice buttons sit right of the model chip. Which ones you see depends on the agent. AntiGem asks for the microphone the first time.

| Agent | Voice call | Live Dictation | Mic button |
| :--- | :---: | :---: | :--- |
| Antigravity | ✅ | ✅ | **Record voice note**: sends audio |
| Claude Code | | ✅ | **Record and transcribe**: sends text |
| Codex | | ✅ | **Record and transcribe**: sends text |
| OpenCode | | | none |

### Start voice call

The headset button, Antigravity chats only. It starts a live spoken conversation with the agent. During a call the button turns blue (**Open voice call**) and opens the call again. A small call pill shows above the message box while a call runs minimized. See [Antigravity](../02-agents/02-antigravity.md).

### Live Dictation

The sound-wave button. Tap it and speak: your words appear in the text box as you talk. A banner says **Listening... Speak now**, with **Pause** / **Resume** and **Stop**. Tap the wave button again (**Stop Dictation**) or **Stop** to finish, then edit the text and send it. Live Dictation is hidden while the agent is working.

### Record voice note

The round mic button on the right, shown while the text box is empty. In Antigravity chats it records an audio clip that the model hears. While recording, the box shows a red dot, the time and a live wave, with four buttons:

- **Pause** / **Resume**: pause the recording.
- **Cancel recording**: throw it away.
- **Stop & Attach**: stop and add the clip to your message as "Voice Note (0:12)", so you can add text before sending.
- **Send voice note**: stop and send it at once.

### Record and transcribe

In Claude Code and Codex chats the mic button records and turns your speech into text, because these models can't take audio. The recording shows a small **Transcribe** badge. **Stop & Attach** puts the text in the box; **Send voice note** sends the text right away. "No speech recognized" means it heard nothing it could turn into words.

## Send, stop and queue

### Send

The orange arrow (**Send**) appears as soon as you type something or attach a file. When it is faint, you can't send yet, and tapping it tells you why: you are signed out, the server is offline, or an attachment isn't ready.

### Stop

While the agent works and the text box is empty, the send button becomes an orange square (**Stop**). Tapping it asks **Stop Generation?**. **Stop Output** stops the reply at once; what the agent already did stays done.

### Messages sent while the agent works

You don't have to wait. Type and tap **Send** while the agent is working: the message waits in a card above the box that says **Sends when the agent is done**, and goes out when the current reply ends. Some agents (Claude Code) can take it in during the turn instead.

Each waiting message has two buttons:

- **Send now** (arrow): stops the current work and delivers this message now.
- **Delete** (trash): removes it before it is sent.

## The conversation

### Your messages

Tap one of your messages to show its actions under it:

- **Copy**: copies the text.
- **View full prompt**: shows the message exactly as it was sent, including the hidden parts AntiGem adds (for example your global context).
- **Undo and edit prompt**: takes the chat back to right before this message and puts its text in the box, so you can change it and send again. If replies come after it, AntiGem asks first (**Edit Message?**): everything after this message is removed from the chat. Files the agent changed stay as they are.
- **Restore to before this message**: shown when a project checkpoint was saved before this message. It puts the project's files back as they were. See [Project checkpoints](../05-power-features/11-project-checkpoints.md).

A small **Restore point** label under a message means a checkpoint exists for it. Messages you said in an Antigravity voice call show a **Voice** badge.

### Replies and their actions

Under every reply there is a row of small buttons:

- **Copy message**: copies the reply as text.
- **Select text**: opens the whole reply in a sheet where you can select any part of it.
- **Regenerate response**: asks first (**Regenerate response?**), then sends the same message again and replaces this reply with a new one.
- **View Raw Request Payload**: shows the raw data behind the reply, when there is any. **Wrap: ON/OFF** wraps long lines, **Copy JSON** copies it.
- **View Artifacts**: shown when the chat has artifacts; opens the artifacts drawer. See [Chat history](./03-chat-history.md#artifacts).

Above these buttons, a line of message stats shows the tokens in and out, the cache hits and the time. Tap it for **Reply details**: the model, input and output tokens, cache read and write, total, time and (when known) the cost. You can hide the stats in **Settings → Appearance → Show Message Stats**.

### Thinking

When the model thinks before answering, a fold-out shows **Thinking...** while it thinks, then **Thought for 12s**. Tap it to read the thoughts, tap again to fold them away.

### Tool cards

Every action the agent takes is a card: **Ran bash**, **Read file**, **Edited file**, **Listed directory**, **Searched code**, **Web search**, **Read page**, **Generated image**, **MCP tool** and so on. While it runs, the card says what is happening ("Editing file...", "Searching web..."). A card that went wrong says **Failed:**, **Rejected:** or **Stopped:**. Commands show their exit code (`exit 1`) and how long they took.

- **Tap a card** to open it and see the command or file and its full output. Tap again to close it.
- **Copy Output** copies the output.
- A generated image shows right in the card: tap it to see it full size.

### Stop command

A running command card has a small red stop button (**Stop command**). In Antigravity chats it stops only that command and asks what to do next (**Command Terminated**): type an optional note for the agent, then **Send to AI & Proceed** to let it continue, or **Stop Turn Here** to end the reply. In the other agents' chats it stops the whole reply.

### Grouped steps

Steps in a row fold into one pill, so long replies stay short. While the agent works the pill says **Working 12s · 5 tool calls · 2 running**; when it is done, **Worked 40s · …**. The second line shows the latest step. Tap the pill (**Show steps**) to see every step, and again (**Hide steps**) to fold them.

Turn this off, or choose after how many steps it folds, in **Settings → Appearance → Group Agent Steps**. See [Appearance](../06-settings/03-appearance.md).

### Subagents

A subagent is a helper the agent starts for part of a job (see [Subagent](../01-getting-started/02-key-concepts.md#subagent)). In Claude Code chats, a chip above the message box says how many are working ("2 agents", with a green dot). Tap it to list the chat's subagents, and tap one to open its chat. A subagent's chat is read only: a note says "… · read only. It worked for the chat it is listed under; continue there." Tap **Back** (top left) to return. In the drawer, subagent chats are listed under their main chat.

### Approvals

When the agent wants to do something that needs your OK (run a command, edit a file, use a tool), a panel slides up above the message box. It shows:

- what the agent wants to do, for example **Run a command?** or **Edit a file?**, with the agent's name and the tool;
- the file, web address or command it is about;
- a preview: the command, or the change, with added lines in green and removed lines in red;
- sometimes the agent's reason.

Then choose:

- **Allow**: allow this one time.
- **Always…**: allow it and don't ask again. The menu offers the choices this agent supports. For Antigravity: **For this conversation**, **In this workspace** or **Everywhere**. Claude Code, Codex and OpenCode offer similar options for this session or this project.
- **Deny**: refuse. A box opens where you can tell the agent what to do instead (optional), then tap **Deny** again. **Back** returns to the choices.

When several requests wait, the panel shows **1 of 3**, and its **⋮** menu has **Allow all 3** and **Deny all 3**.

How often you are asked depends on the agent's [permission mode](../01-getting-started/02-key-concepts.md#permission-mode). See each agent's page for its approval settings.

### Plan approval

In [plan mode](../01-getting-started/02-key-concepts.md#plan-mode), the agent first writes a plan and asks you to approve it. The approval panel shows the plan (scroll it to read it all) and stacked choices. In Claude Code these are:

- **Approve · auto-accept edits**: start, and make the file edits without asking.
- **Approve · review each edit**: start, but ask before each edit.
- **Keep planning…**: say what should change in the plan; the agent goes on planning.

### Questions from the agent

Sometimes the agent asks you to choose, for example between two ways to build something. A panel slides up above the message box: "Claude Code has a question" (or "has 3 questions", with **1 of 3**).

- Tap an option. **Choose one** means a single answer, **Choose any** means you can pick several.
- **Other…** lets you type your own answer.
- **Next** goes to the next question (it says **Skip question** when you haven't answered), **Back** to the previous one, **Submit** sends your answers.
- **Skip** (or **Skip all**) answers nothing; **Dismiss question** (×) closes the questions.

In the chat itself, the question shows as a card that says **Waiting for your answer**, then **Answer sent** or **Question dismissed**.

### Errors

When something goes wrong, the reply shows a red error card with a title (for example **Agent Execution Error**), the message and sometimes a code. **Copy Error Details** copies everything, to paste into a bug report. Tap the card to see the full error. Some errors offer a fix button, such as **Reconnect in Settings** for an account that needs signing in again.

To try again, tap **Regenerate response** under the reply, or send your message again.

### Connection banners

- **Antigravity Disconnected**, with **Reconnect**: the chat lost its connection to the Antigravity hub. Tap **Reconnect**. While it tries, it says **Connecting to Antigravity...**.
- **Unable to Load Chat**, with **Retry**: an old chat couldn't be loaded. Tap **Retry**.

### Jump to top or bottom

While you scroll, a round arrow button appears: **Jump to Bottom** takes you to the newest message, **Jump to Top** to the first.

## What chats can show

Replies are formatted, not plain text:

- **Text formatting**: headings, lists, task lists, tables, quotes, notes and warnings, fold-out sections and math formulas.
- **Code blocks** with colors for the language and a line count. **Copy code** copies it. Long blocks are cut short: **Show all N lines** opens them. **Fullscreen** shows the code on its own screen.
- **Shell commands** (bash, sh…) have a **Run in terminal** button: you can edit the command, then **Run** opens it in a new terminal session.
- **Web code** (HTML, SVG) gets **Code** and **Preview** tabs: Preview shows the page live, **Reload preview** loads it again.
- **Interactive apps**: the agent can put a small working app in the chat, with **App** and **Code** tabs, **Restart App** and **Open Fullscreen**.
- **Diagrams** (Mermaid): tap **Expand** to see them full screen with **Zoom In**, **Zoom Out** and **Reset Zoom**.
- **STEM blocks**: chemistry, graphs, geometry, simulations and circuits. See [STEM and diagrams](../05-power-features/16-stem-and-diagrams.md).
- **Images**: tap one to see it full screen.
- **Audio**: a player with **Play** / **Pause** and the time.
- **Video**: plays in AntiGem's own player. YouTube links play in the chat, with **Open in YouTube**.
- **File paths**: tap a path the agent mentions to open the file. Text files open in the [code editor](./05-editor-and-git.md); other files ask how to open them (see [Files](./09-files-and-notes.md#opening-files)).
- **Memory notes**: when the agent saves something to its memory, a small chip shows it, with **Undo**. See [Agent memory](../04-tools-and-extensions/08-agent-memory.md).

To make the chat text bigger or smaller, use **Settings → Appearance → Chat Text Scaling**.

## Troubleshooting

:::details The Send button is faint and nothing happens
Tap it once: a message says why. "Please sign in first to send messages." means the agent is signed out: tap the status dot in the header and **Sign in**. "Wait until the attachments are ready." means a file is still copying. An "offline" message means the local server or the agent isn't running: tap the status dot, then **Start** or **Restart server**.
:::

:::details I don't see the voice buttons
OpenCode chats have no voice input. Live Dictation is hidden while the agent is working, and the mic button only shows while the text box is empty. **Start voice call** is only in Antigravity chats.
:::

:::details "Microphone permission required for speech recognition"
AntiGem may not use the microphone. Allow it in Android's settings: **Settings → Apps → AntiGem → Permissions → Microphone**.
:::

:::details The agent keeps asking for approval
That is the agent's permission mode. Use **Always…** to stop being asked for the same thing, or change the permission mode in the chips above the message box or in the agent's settings. See your agent's page.
:::

:::details The reply stopped in the middle with an error
Read the error card: it usually says what happened (a usage limit, a sign-in problem, a network error). Fix that, then tap **Regenerate response**. If it keeps failing, tap **Copy Error Details** and [ask for help](../08-help/04-get-help.md).
:::

:::cards
- [Chat history](./03-chat-history.md) — Find, fork, rename, export and share chats.
- [Models, thinking and usage limits](../02-agents/06-models-and-usage.md) — Pick a model and read your limits.
- [Slash commands](../04-tools-and-extensions/06-slash-commands.md) — Your own / commands.
- [Global context](../04-tools-and-extensions/07-global-context.md) — Instructions every chat gets.
:::
