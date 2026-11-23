---
title: Project checkpoints
description: Save the project's files before every message, and go back to before any message, with a preview of what changes.
updated: 2.0.4-beta.2
---

Agents sometimes break things. With **checkpoints** on, AntiGem saves a hidden copy of the project's files before every message you send (to Claude Code, Codex, OpenCode or Antigravity). Each message then gets a **restore point**: go back to before it, with a preview of every file that changes. Your own git history, branches, staging and stashes are never touched.

**Where:** ☰ → **Settings** → **Project checkpoints**

## Turn it on

### Checkpoints

**Default:** **No checkpoints are made**.

- **Projects I choose**: a new chat in a project asks once (**Keep checkpoints for …?**) whether to keep checkpoints for it.
- **All git projects**: every git project gets checkpoints (turn single projects off in the list below).

Checkpoints work in **git projects** only (a folder where `git init` was done). Nested repositories inside a project are saved too. Not a git project yet? Run `git init` in it, or ask the agent to.

## Go back to before a message

:::steps
### Tap the restore point

Under a message that has a checkpoint, tap **Restore point** (the clock icon, **Restore to before this message**).

### Choose what goes back

Under **What goes back**:

- **Chat and files**: the chat goes back to before this message (its text returns to the message box), and the files go back too.
- **Files only**: only the project files go back; the chat stays as it is.
- **Chat only**: only the chat goes back; the files stay as they are now.

### Check the preview

The app compares the project with the checkpoint and lists every file that would change. Tap a file to see exactly what changes in it. **No file changes** means the files are already as they were.

### Restore

Tap **Restore chat & files**, **Restore files** or **Restore chat**. When it's done: **Files restored**.
:::

### Undo a restore

A restore first saves the files as they are, so **Undo that restore** always works: the files go back to how they were right before it.

> [!NOTE]
> The agent must not be working in that chat: stop it first, then restore.

## What isn't undone

- Only files **inside the project** go back. Packages the agent installed, files outside the project, servers it started or things it sent (messages, pushes) are not undone.
- Files your `.gitignore` ignores (and `node_modules`, `.gradle`, caches) are not saved, and never changed by a restore.
- Going back in a chat with **Edit** only changes the chat. Files go back only through a restore point.

## Storage options

Old checkpoints are removed automatically (the oldest first when a project uses too much space). Deleting old ones never breaks newer ones: each checkpoint is complete on its own.

### Delete checkpoints older than

**Default:** 30 days.

### At most per chat

**Default:** 100 checkpoints.

### Space per project

**Default:** 500 MB.

### Skip files larger than

**Default:** 20 MB. Bigger files aren't saved.

The list at the bottom shows each project with checkpoints, where you can turn single projects on or off and delete their checkpoints. The copies live with the bridge (`~/.antigem_bridge/checkpoints`), on the machine where the project is.

## Checkpoints vs. git

| | Checkpoints | Git |
| :--- | :--- | :--- |
| Made | Automatically, before every message | When you (or the agent) commit |
| Good for | "Undo what the agent just did" | Your project's real history |
| Touches your git? | Never | — |

Use both: checkpoints for quick undo, commits for the milestones. See [Undo what an agent did](../07-guides/10-undo-what-an-agent-did.md).

## Troubleshooting

:::details There's no Restore point under my messages
Checkpoints are off, the project isn't a git project, or this project isn't chosen (with **Projects I choose**). Check this page, then send a new message: restore points start from the next message.
:::

:::details "Restore failed: nothing was changed"
Nothing was changed, so your files are safe. Try again; if it keeps failing, check that the bridge is running (the coloured dot next to **Select Project**).
:::
