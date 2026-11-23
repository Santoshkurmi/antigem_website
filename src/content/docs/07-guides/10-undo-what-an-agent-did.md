---
title: Undo what an agent did
description: Put your files back with a checkpoint or with git when an agent broke something.
updated: 2.0.4-beta.2
---

An agent changed the wrong files, or broke your project. Here's how to get back, from easiest to most manual.

## 1. A checkpoint (if turned on)

With [project checkpoints](../05-power-features/11-project-checkpoints.md) on, every message has a restore point.

:::steps
### Find the message

Scroll to the message *before which* things were fine.

### Tap Restore point

Under it, tap **Restore point** (clock icon).

### Choose Files only (or Chat and files)

**Files only** puts the project back; **Chat and files** also rewinds the chat. Check the preview of what changes, then restore.
:::

Changed your mind? **Undo that restore**.

> [!TIP]
> Turn checkpoints on now for next time: **Settings → Project checkpoints** → **All git projects**.

## 2. Ask the agent

Often simplest: "Undo everything you changed in this chat" or "put `login.ts` back the way it was". The agent can use git to see and revert its own changes. Check the result.

## 3. Git

If the project uses git and you committed before the agent started:

```bash title="Terminal, in the project folder"
git status              # what changed
git diff                # how it changed
git restore .           # throw away all uncommitted changes to tracked files
git clean -n            # list new files it created (dry run)
git clean -f            # delete them (careful)
```

Or use the IDE's **Git** view to see the changes and discard them file by file. See [Editor and Git](../03-using-the-app/05-editor-and-git.md).

## What can't be undone this way

Packages the agent installed, files outside the project, servers it started, and anything it sent (messages, pushes, deployments). Keep approvals on for those.

## Next time

- Commit before big tasks (or ask the agent to).
- Use [plan mode](../01-getting-started/02-key-concepts.md#plan-mode) for big changes, so you approve the plan first.
- Keep [checkpoints](../05-power-features/11-project-checkpoints.md) on.
