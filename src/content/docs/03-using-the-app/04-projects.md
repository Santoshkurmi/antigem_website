---
title: Projects
description: "What a project is, how to pick one for a chat, make a new one, clone one from Git, or open any folder, also on phone storage."
updated: 2.0.4-beta.2
---

A **project** is the folder the agent works in. The agent reads the files in it, changes them and runs its commands there. You choose the project when you start a chat, and the code editor opens the same folder.

**Where:** on the Chat screen, before your first message, tap **Select Project** (the chip right of the chat title, top of the screen).

## How it works

- **One project per chat.** You pick it before the first message. After that the chat keeps it: the chip shows the folder's name and can't change it. To work in another folder, start a new chat.
- **The project is a normal folder.** Nothing special is added to it. You can open it in the [IDE](./05-editor-and-git.md), the [terminal](./07-terminal.md) and [Files](./09-files-and-notes.md) too.
- **Picking a project also sets the IDE's project**, so the editor shows the files the agent is working on.
- **Projects live where the agents run.** On this phone, that is AntiGem's Linux environment (your home folder is `~`). With a [server](../05-power-features/02-server-mode.md) or a [PC](../05-power-features/03-connect-to-pc.md), the projects are folders on that machine.

## Pick a project

:::steps
### Open the project list

Tap **Select Project** at the top of a new chat. The **Select Workspace** list opens, with the number of available workspaces.

### Choose a folder

Tap a project. The one in use is marked **Active**. The list closes and the chip shows the project's name.

![The Select Workspace list: General (No Workspace), a few projects with their paths, and the two buttons at the bottom](/screens/chat_project_picker.webp "frame")

### Send your first message

From now on this chat works in that folder.
:::

### The project list

The list shows:

- **General (No Workspace)** at the top: "Chat without attaching to a directory". Use it for questions that need no files. After the first message such a chat shows **Outside** in the header.
- **Every folder inside `~/projects`.**
- **Every folder you picked before**, from any place, and the projects of your earlier chats. AntiGem remembers them.

Each row shows the folder's name and its full path. **Refresh** (top right) reads the list again, for example after you made a new folder in the terminal. **Close** (×) closes it without changing anything.

### Cloud projects

In Antigravity chats with cloud agents turned on, the list also has a **Cloud** part: projects that run in Google's cloud with your GitHub repositories, "also while the phone is off". It has **New cloud project** and **Manage**. See [Antigravity](../02-agents/02-antigravity.md).

## Clone a project from Git

Get a project from GitHub (or any Git server) straight into a new chat.

:::steps
### Open the clone window

In the project list, tap **Use Git Repository...** at the bottom. The **Clone Git Repository** window opens.

### Paste the address

In **Repository URL**, paste the `https://` address of the repository, for example `https://github.com/owner/repo`. Only `https://` addresses work.

When you are signed in to GitHub in **Settings → GitHub**, private repositories work too, and you can pick one from your own list (**Search repositories**). See [GitHub](../05-power-features/10-github.md).

### Name it (optional)

**Project name (optional)** sets the folder's name. Leave it empty to use the repository's name. Use only letters, numbers, `.`, `_` and `-`.

### Clone

Tap **Clone**. The window shows git's progress live. **Stop** cancels it. When it is done, the new folder becomes the chat's project and the window closes by itself.
:::

On this phone the repository goes into your home folder, as `~/<name>`. On a server or in the Ubuntu chroot it goes into the projects folder there (usually `~/projects/<name>`).

See the guide [Start from a GitHub project](../07-guides/02-start-from-github.md).

## Open any folder

To use a folder that isn't in the list, tap **Browse or Open Other Folder...** at the bottom of the project list. A file browser opens, titled **Choose the chat's project folder**. It works like the [Files](./09-files-and-notes.md) screen: tap folders to go in, use the path bar at the top to go back up, and **Places** to jump to Home, Projects, Internal storage, Downloads and more.

When you are in the folder you want, tap **Use this folder**. AntiGem adds it to the project list for next time.

### Make a new project

In the same browser you can start a fresh project:

:::steps
### Go to the parent folder

Open the folder that should hold the new project, for example **Projects**.

### Create it

Tap **Create** (the round button), then **Project from template** ("Python, Node.js, Web, Kotlin, C++…").

### Fill in the name and template

In **New project**, type a **Project name** and pick a template: **Python**, **Node.js**, **Web**, **Kotlin**, **C++** or **Blank**. **Default:** Python.

### Create & open

Tap **Create & open**. The folder is made from the template and becomes the chat's project.
:::

If it fails with "Could not create the project (does it already exist?)", a folder with that name is already there: pick another name.

## Use phone storage

You can use a folder on your phone's storage (where your downloads, documents and photos are) as a project. In the folder browser, tap **Places** → **Internal storage**, or **Downloads** / **Documents**, and pick a folder.

AntiGem needs Android's **All files access** for this. It asks on first launch (**Files**: "Open projects and files on your storage"). If you skipped it, turn it on for AntiGem in Android's settings (on most phones under **Apps → Special app access → All files access**), then come back.

> [!TIP]
> Android's shared storage doesn't support symbolic links or running programs from it, so some developer tools (for example `npm install`) may fail in a project there. Keep code projects in your home folder or `~/projects`, and use phone storage for documents, media and files you want to open with other apps.

## Projects in the IDE

The IDE's side panel has its own project chooser at the top. It shows the same list, plus **Browse / File Manager...** and **+ New Project**. Folders you added yourself have an × (**Remove project**): it takes the folder off the list, and doesn't delete it. See [Editor and Git](./05-editor-and-git.md#the-project-sidebar).

## Troubleshooting

:::details My folder isn't in the project list
Tap **Refresh** in the list. Only folders inside `~/projects` show up by themselves. For a folder anywhere else, use **Browse or Open Other Folder...** once; after that it stays in the list.
:::

:::details I can't change the project of a chat
A chat keeps its project after the first message. Tap **New chat** and pick the project there.
:::

:::details Cloning fails
Check the address: it must start with `https://`. A private repository needs you to sign in in **Settings → GitHub** first. If the project name is taken, type another one in **Project name (optional)**. The log in the clone window shows git's own error message.
:::

:::details Phone storage is missing or shows nothing
AntiGem doesn't have **All files access**. Turn it on for AntiGem in Android's settings (on most phones under **Apps → Special app access → All files access**), then go back and tap **Refresh**.
:::

:::cards
- [Chat](./02-chat.md) — Start working in your project.
- [Editor and Git](./05-editor-and-git.md) — Edit the project's files and commit.
- [Start from a GitHub project](../07-guides/02-start-from-github.md) — Clone, open, build.
- [Project checkpoints](../05-power-features/11-project-checkpoints.md) — Undo what an agent did to your files.
:::
