---
title: Global context
description: What every chat, in every agent, is told about where it runs, and your own standing instructions.
updated: 2.0.4-beta.2
---

**Global context** is text that AntiGem adds, hidden, in front of your messages, for every agent. The chat doesn't show it. It has two parts: AntiGem's **built-in context** and **your context**.

**Where:** ☰ → **Settings** → **Agents** → **Global context**

## Built-in context

**By AntiGem · read-only · first message.** Tells the agent where it runs, so it uses the right commands. For example, in AntiGem's built-in environment: use `$TMPDIR`, not `/tmp`; use `pkg`, not `sudo`. In the Ubuntu chroot it says `apt` works and that `sudo` is root of the whole phone. On a server it says so.

Tap **Show exactly what is sent** to read the full text (**Hide the text** folds it again).

Without it, agents often try commands that don't work on a phone (like `sudo apt install`). Keep it on unless you know why you'd turn it off.

## Your context

**Your own instructions for every chat.** Good for things you'd otherwise repeat in every chat:

- "Never run `git push`."
- "My projects are in `~/work`."
- "Answer in short sentences."

Tap **New context** and fill in:

### What the agent should know or do

The instruction itself, in plain words.

### When to send

- **First message of each chat** (default): sent once per chat, and again only when you change it. Enough for most things.
- **Every message**: sent with each message. For rules the agent must never forget, even in long chats. Costs a few tokens each time.

### Also for Jarvis

**Default:** off. Jarvis has strict rules of its own (speaking, not waiting for tasks), so a note meant for normal chats can clash. When on, Jarvis gets it marked "Jarvis rules win on conflict", and it also reaches the chats Jarvis starts for tasks.

Tap an entry to **Edit context**, or delete it. A deleted entry isn't sent with new messages; chats that already got it keep what they were told.

## Global context vs. other places

| | Use it for |
| :--- | :--- |
| **Global context** | Rules for every chat, in every agent. |
| Project instructions (`CLAUDE.md`, `AGENTS.md` in a project) | Facts about one project. See your agent's page. |
| [Agent memory](./08-agent-memory.md) | Facts the agents learn and remember as you work. |
| [Skills](./05-skills.md) | How-tos for one kind of task, read only when needed. |

## Troubleshooting

:::details The agent ignores my instruction in long chats
Long chats get summarized, and the first message can drop out of view. Set the entry to **Every message**.
:::
