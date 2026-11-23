---
title: "EGM: design reviews"
sidebar: EGM design reviews
description: Plan a design with the agent, let fresh reviewers try to break it, and write code only after you approve.
updated: 2.0.4-beta.2
---

**EGM** is Google's open-source **Elephant-Goldfish Model** for planning before coding. The agent (the **Elephant**) works out a design with you and writes it down. Then fresh reviewers (the **Goldfish**), who never saw your conversation, read only the document and try to break it. The design is fixed until it passes and you approve it; only then is code written.

It catches the mistakes that are expensive to fix later: a wrong data format, a missing case, an API that doesn't fit.

**Where:** ☰ → **Settings** → **Agents** → **EGM · Elephant-Goldfish**

## Install it

Tap **Install EGM**. It downloads EGM from GitHub (the skills, the reviewer personas and the review standards) into a folder every agent on the phone can read. Choose **Install the newest release** or **Install the development version**. Later, **Check for update**, **Update** or **Reinstall** from the same page.

> [!NOTE]
> EGM uses more tokens than a plain chat: every reviewer reads the document, its persona and project files. On a phone, Quick or Standard reviewers are usually enough.

## Which command?

Type a command at the start of a message in any chat. The rest of the message is the task.

### /egm

For a new feature or a big change, where a wrong design costs a lot (several files, data formats, APIs). Uses the most tokens.

1. The agent asks you questions until the idea is clear.
2. It writes the design document, section by section, and asks for your OK on each.
3. The reviewers attack the document; the agent fixes it or explains why a finding is wrong.
4. You approve the design.
5. Only then does it write the code.

Example: `/egm add offline sync for notes, with conflict handling`

### /egm-lite

For small changes: a bug fix, a refactor, a small feature. Much cheaper than `/egm`.

1. The agent first points out risks and gaps in the task, then waits.
2. Type **checklist**: it writes a short plan (`egm_lite_checklist.md`).
3. Type **goldfish**: one fresh reviewer checks the plan (you can skip this).
4. Type **exec**: it makes the change.
5. Type **review**: one fresh reviewer checks the changes.

Example: `/egm-lite fix the crash when the chat list is empty`

### /egm-review

When a plan or design document already exists and you want it checked before anyone builds it. The reviewers check it and the agent writes their findings into a report. Then you choose: the agent fixes them, you fix them, or you stop.

Example: `/egm-review docs/sync-design.md`

## During a run

- Answer the agent's questions; it asks one at a time.
- Everything is saved as files in your project: the design document and every review report. Open them in **Files**.
- Nothing is coded before you approve. To approve, just say so; or ask for changes, or one more review round.
- You can stop any time. The files stay, and you can check the document later with `/egm-review`.

## Normal chat or Jarvis chat?

- **Normal chat** (Claude Code, Codex…): the agent does everything in that chat and runs the reviewers as its own hidden [subagents](../01-getting-started/02-key-concepts.md#subagent). The simplest and lightest way. If the agent has no subagent tool, it stops and tells you to use a Jarvis chat.
- **Jarvis chat** (the Jarvis tab): Jarvis manages the run. It starts every reviewer as a separate chat, shows the phases as mission steps and asks you to approve the design. See [Jarvis](../05-power-features/01-jarvis.md).

## Options

### Goldfish reviewers

Which reviewer personas look at a design (for `/egm` and `/egm-review`). Each is a separate reviewer run that costs tokens. `/egm-lite` always uses one reviewer. Start with **Quick** or **Standard**; **Full** runs eight reviewers in every round.

### Stop after each review stage

On: you see every stage's report before the next stage runs. Off: all stages run, then one combined report.

### Re-reviews after fixes

How often a review stage may run again once the document is fixed. 0 = never.

### Reviewers at the same time

Each running reviewer is a full agent: more at once is faster but needs more memory. If the phone gets slow, set it to 1.

### Jarvis chats

Who is the Elephant (writes and fixes the design) when you type an EGM command in a Jarvis chat. The reviewers are always separate chats that Jarvis starts.

### Instructions

What each command tells the agent (for **Normal chats** and **Jarvis chats**), after the facts from this page. Edit it to change how the agent or Jarvis runs EGM.

### Remove EGM

Deletes EGM and its rules files from the phone. The `/egm` commands stop working; your design documents and reports stay in your projects.

Learn more about the method at [github.com/google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model).
