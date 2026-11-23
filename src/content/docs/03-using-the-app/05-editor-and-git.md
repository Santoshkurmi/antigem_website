---
title: Editor and Git
description: "The IDE: the toolbar, tabs, the project sidebar, find, image preview, running a file, and the Git panel with changes, commits, branches, stash, pull and push."
updated: 2.0.4-beta.2
---

The **IDE** is AntiGem's code editor. Open the project's files, change them, run them, and save your work to Git. It shows the same project as the chat, so you can look at what the agent changed, or fix something yourself.

**Where:** the floating switcher → **IDE** (the `</>` icon). Or tap a text file's path in a chat.

![The IDE with a file open: the toolbar on top, the tab row under it, and line numbers](/screens/code_editor.webp "phone")

## The toolbar

The bar at the top. From left to right:

### Toggle Sidebar

**☰** (top left) opens or closes the project sidebar with the file tree and Git. You can also swipe in from the left edge. See [The project sidebar](#the-project-sidebar).

### The title

The name of the open project, or **antiGem IDE** when no project is open.

### More editor options

The **⋮** menu. It shows while a text file is open:

- **Word Wrap** (a checkbox): wraps long lines so you don't need to scroll sideways. **Default:** off. It resets when the app restarts.
- **Find in File**: opens the find bar. See [Find in a file](#find-in-a-file).
- For SVG images only: **Edit SVG XML Source** shows the image's code, **Preview SVG Graphic** shows the picture again.

### Undo and Redo

**Undo** and **Redo** step back and forward through your edits in the open file.

### Save File

The disk icon. It is active when the open file has unsaved changes. Tap it to save; a short message says **Saved**. Nothing saves by itself: there is no autosave, so save before you leave a file.

For a file opened from another app (for example a file shared to AntiGem), the button is **Save As...**: pick a folder and a name to save a copy.

### Run Active File

The green **▶**. It runs the open file with the right program for its type, for example `python3` for a `.py` file. The output opens in a terminal panel. See [Run a file](#run-a-file).

When you picked a run profile, the button turns blue with a small dot (**Run Profile: <name>**) and runs that profile instead.

### Run Configurations

The **▾** next to ▶. It opens the run menu. See [The run menu](#the-run-menu).

### AI Chat

The sparkle icon (top right). Goes back to the chat.

## Tabs

Every file you open gets a tab in the row under the toolbar. Tap a tab to switch to it.

- A **\*** after the name (for example `main.py *`) means the file has unsaved changes.
- **Close Tab** (× on the tab) closes it. If it has unsaved changes, AntiGem asks first. See [Unsaved Changes](#unsaved-changes).
- A lock icon (**Read-Only**) marks an old version of a file from Git. You can read it, not change it.
- **Diff: <file>** tabs show a file's changes. See [The diff viewer](#the-diff-viewer).

With no tab open, the editor says **Select a file from the sidebar to start editing**.

## The editor

- **Line numbers** on the left, always shown.
- **Colors** for the code's language. They follow your app theme.
- **Word wrap** from the **⋮** menu.

### When a file changes on disk

The agent may change a file while you have it open. AntiGem checks the open file every few seconds:

- If you haven't changed it, AntiGem loads the new version and shows **<name> reloaded from disk** for a moment.
- If you have unsaved changes too, a banner says **File modified on disk externally**. Tap **Resolve** to choose which version to keep (see [File Conflict Detected](#file-conflict-detected)).

The file tree refreshes by itself too.

### Find in a file

**⋮** → **Find in File** opens a bar above the code.

- Type in **Find in file...**. Matches are marked as you type, and a counter shows `2/7`, or **0 matches** in red.
- **Previous Match** and **Next Match** (the arrows) jump between them. At the end it starts again from the top.
- **Aa** turns on case-sensitive search. **Default:** off.
- **Clear** (×) empties the field. **Close Find**, or the Back button, closes the bar.

The editor has no replace. To change many places at once, ask the agent, or use `sed` in the terminal.

### Image and SVG preview

Images (PNG, JPG, WebP, GIF, BMP, ICO) and SVG files open as a picture. Pinch to zoom and drag to move it. The bar at the bottom shows the file name, the size in pixels (or **Vector SVG**), the file size and the zoom level. Its buttons:

- **Toggle Background**: switches between a checkerboard, white and the editor's background, so you can see transparent parts.
- **Zoom Out**, **1:1** (back to normal size) and **Zoom In**.
- **View SVG XML Source** (SVG only): shows the code.

## Dialogs

### Unsaved Changes

Shown when you close a tab with unsaved changes: "Do you want to save the changes made to '<name>' before closing?"

- **Save & Close**: save, then close the tab.
- **Don't Save**: close and lose the changes.
- Tap outside the dialog to keep the tab open.

### File Conflict Detected

Shown when a file was changed on disk (often by the agent) while you were editing it: "The file '<name>' has been modified on disk or by AI."

- **Overwrite Disk (Keep Mine)**: save your version over the other one.
- **Revert to Disk**: throw away your edits and load the version on disk.

### Non-Text File Warning

Shown when you open a file that isn't text (for example a ZIP or a program). Opening it in the editor may show garbled text, be slow, or damage the file if you save it. **Open Anyway** or **Cancel**.

## The project sidebar

**Where:** **☰** in the IDE (top left), or swipe in from the left edge.

### The project chooser

The card at the top shows the project's name and path, or **Select Project** / **No project opened**. Tap it for **Available Projects**:

- Tap a project to open it. The one in use is highlighted.
- Folders you added yourself have an × (**Remove project**). It takes them off the list; the folder stays.
- **Browse / File Manager...** and **+ New Project** open a file browser, titled **Open a project or file**, where you can find a folder, or make a new project (**Create** → **Project from template**). Tap **Open as project** in the folder you want. See [Projects](./04-projects.md#make-a-new-project).

### Explorer and Git

Under the chooser, two tabs: **Explorer** (the files, shown first) and **Git**.

### The file tree

The **Explorer** tab. Its header **FILES** has these buttons:

- **New File** and **New Folder**: create one in the project's top folder.
- **Terminal**: opens a new terminal in the project folder.
- **File Manager**: opens the file browser.
- **Refresh**: reads the files again.

Tap a folder to open or close it. Tap a file to open it in a tab. Each row has a **⋮** (**Options**):

| On a folder | On a file |
| :--- | :--- |
| **New File**, **New Folder** (inside it) | **Rename** |
| **Terminal** (opens in that folder) | **Share** (to another app) |
| **Rename** | **Details** |
| **Details** | **Delete** |
| **Delete** | |

- **Create File** / **Create Folder**: type a name (for example `utils.py`) and tap **Create**.
- **Rename**: type the **New Name** and tap **Rename**. An open tab of the file is renamed too.
- **Delete**: asks "Are you sure you want to permanently delete …? This action cannot be undone." Tap **Delete**. An open tab of the file closes.
- **Details**: the type, location, folder, size, permissions and last change date, with **Copy Path**.

When the tree is empty it says **Open or create a project to view files**, or **Project is empty**. **IDE Server Offline** means the app's local server isn't reachable; it keeps trying by itself, or tap **Retry Now**.

## Run a file

### The run panel

Tapping **▶** opens a terminal panel over the editor, full screen, with the program's live output. It is a real terminal: you can type into it when the program asks for input. Its header shows a dot (green while running, red when done) and the run's name, and these buttons:

- **Minimize** / **Restore** / **Maximize**: make the panel smaller or full screen again. You can also drag it to any height.
- **Retry**: stop and run it again.
- **Close**: stop the program and close the panel.

The Back button also closes the panel (and stops the program). When the program has finished, pressing Enter closes it too.

Starting a new run from the IDE stops the one before. Every IDE run also shows on the [Run screen](./06-run.md).

### Which program runs a file

| File | Runs with |
| :--- | :--- |
| `.py` | `python3` |
| `.js`, `.mjs`, `.cjs` | `node` |
| `.ts` | `npx tsx` |
| `.c` / `.cpp` | `gcc` / `g++`, then the result |
| `.rs` | `rustc`, then the result |
| `.go` | `go run` |
| `.java` | `javac`, then `java` |
| `.kts` | `kotlinc -script` |
| `.sh`, `.bash`, `.zsh` | `bash` |
| `.php`, `.rb`, `.lua`, `.r` | `php`, `ruby`, `lua`, `Rscript` |

The program must be installed in the Linux environment (for example `pkg install python`). For any other file type, AntiGem says "No default runner for '.<ext>'. Configure a run profile." and opens **Add Run Configuration**.

### The run menu

**▾** (Run Configurations) opens:

- **Auto: Run Active File**: run whatever file is open, with its default program. Tap it to go back to this mode.
- **PROJECT PROFILES (CUSTOM MODE)**: your saved run profiles for this project. Tap one to select it and run it. Until you add one it says **No custom profiles configured**.
- **SUGGESTED FOR THIS PROJECT**: commands AntiGem found in the project, for example `npm run dev` from `package.json`. Tap one to run it once.
- **Open Run screen**: opens the [Run screen](./06-run.md) on this project.
- **Add Run Configuration...**: make a new profile (see below).
- **Edit run.json in Editor**: opens the project's `.antigem/run.json`, where profiles are saved, so you can edit them by hand.

### Add Run Configuration

A run profile is a saved command, for example "start the dev server". Profiles are saved in `.antigem/run.json` in the project, so the agents and the Run screen use them too.

- **Quick Presets**: tap **Python**, **Node.js**, **C Program**, **C++**, **TypeScript**, **PHP**, **Bash Shell**, **Rust**, **Go** or **Dev Server** to fill in the fields.
- **Profile Name**: what the menu shows.
- **Command to Execute**: the command, for example `python3 "${file}"`.
- **Working Directory (CWD)**: the folder it runs in. **Default:** `${workspaceFolder}`, the project folder.

You can use these words in the command and folder; AntiGem replaces them when it runs: `${file}` (the open file), `${fileBasename}`, `${fileBasenameNoExtension}`, `${fileDirname}` (its folder) and `${workspaceFolder}` (the project folder).

Tap **Save Profile**. The new profile becomes the selected one (the ▶ button turns blue), ready to run.

## Git

**Where:** **☰** in the IDE → **Git** tab.

The Git panel shows what changed in the project and lets you commit, switch branches, stash, pull and push. It refreshes every few seconds by itself.

![The Git panel: the branch chip with Pull, Push and Stash, the commit box, and the Staged changes, Changes and Commit history lists](/screens/ide_git_panel.webp "frame")

### Start a repository

If the project isn't a Git repository yet, the panel says **Not a Git Repository**. Tap **Initialize Git Repository** to make it one.

### The Git header

- **The branch chip**: shows the current branch. Tap it for the branch menu.
- **Pull**: get the newest commits from the remote.
- **Push**: send your commits to the remote. A badge shows how many commits aren't pushed yet.
- **Stash**: put your changes aside for later.
- **Git Config**: your name, email, pull mode and remote address.
- **Refresh**: read everything again.

### Changes

Changed files are listed in three groups. Tap a group's title to fold it. Each file shows a letter (**M** changed, **A** added, **D** deleted, **U** untracked…), its name and its folder. **Tap a file to see its changes** in the diff viewer.

- **STAGED CHANGES**: files that go into the next commit. **Unstage** takes one out; **Unstage All** takes all out (it asks first).
- **CHANGES**: changed files not staged yet. **Stage** adds one; **Stage All** adds all. **Discard** throws away the changes in one file, **Discard All** in all of them. Both ask first, and can't be undone.
- **UNTRACKED**: new files Git doesn't track yet. **Stage** / **Stage All Untracked** add them. **Discard** / **Discard All Untracked** delete them (it asks first).

With nothing changed, it says **Working tree is clean**.

### Commit

Type a message in **Commit message...** and tap **Commit**. AntiGem shows **Confirm Commit** with your message; tap **Commit** again. If nothing is staged, all changes are staged first. A message says **Committed successfully!**.

The first time, Git needs your name and email: the **Git Author Setup** window opens. Fill in **Author Name (user.name)** and **Author Email (user.email)**, then tap **Save & Continue**.

### Commit history

**COMMIT HISTORY** lists the last 20 commits: the short ID, a **Not pushed** badge if it isn't on the remote yet, the author, the date and the message. Tap a commit to see its full message and **CHANGED FILES**; tap a file to see what that commit changed in it.

### Branches

Tap the branch chip:

- **+ Create New Branch**: type a name (for example `feature/login`) and tap **Create**. The new branch becomes the current one.
- Tap any branch in the list to switch to it. The current one has a check.

You can't delete a branch here. Use `git branch -d <name>` in the terminal.

### Stash

Tap **Stash**:

- **📦 Stash Changes...**: type an optional message and tap **Stash**. Your changes are put aside and the files go back to the last commit.
- **📤 Pop Stash (Apply & Drop)**: brings the last stashed changes back and removes them from the stash. Shown only when something is stashed.

For other stash commands (list, apply, drop), use the terminal.

### Pull and Push

**Pull** asks "Pull latest changes from the remote repository?"; tap **Pull**. **Push** asks to push your commits on the current branch; tap **Push**. A message says **Git Pull Successful** or **Git Push Successful**. When it fails, a window shows Git's own message, with **Dismiss**.

A remote must be set first: put its address in **Git Config** → **Remote Origin URL**. To push to GitHub, sign in first in **Settings → GitHub**, which sets up your Git login. See [GitHub](../05-power-features/10-github.md).

### Git Config

The gear in the Git header opens **Git Configuration**:

- **Author Name (user.name)** and **Author Email (user.email)**: who you are in commits. Both are required to save.
- **Pull Rebase Strategy (pull.rebase)**: **Merge / Default (false)**, **Rebase (true)** or **Preserve merges (merges)**.
- **Remote Origin URL**: the address of the remote repository, for example `https://github.com/user/repo.git`.
- **Save as Global Config (--global)**: use these settings for all repositories, not only this one. **Default:** off.

Tap **Save**.

### The diff viewer

Opens as a tab when you tap a changed file. The top shows the file, a badge (**WORKING TREE**, **STAGED** or **COMMIT** with its ID), and how many lines were added (`+12`) and removed (`-3`). Below, the changes line by line: added lines green, removed lines red, with the old and new line numbers. Scroll sideways for long lines.

- **Open Current File (Editable)**: open the file as it is now, to edit it.
- **Open Revision File (Read-Only)**: open the old version (from that commit, or the last commit).
- **Close Diff**: close the tab.

It says **No changes detected or binary file.** when there is nothing to show.

## Troubleshooting

:::details "IDE Server Offline" in the sidebar
The editor can't reach AntiGem's local server. It retries by itself; tap **Retry Now** to try at once. If it stays offline, go to the chat, tap the status dot in the header and **Restart server**.
:::

:::details "Cannot open '<name>'. IDE Bridge is offline or file is unreachable."
Same cause as above: the local server is down, or the file was moved or deleted. Restart the server, then refresh the file tree.
:::

:::details ▶ says "No default runner" for my file
AntiGem doesn't know how to run that file type. Add a run profile with the right command: **▾** → **Add Run Configuration...**.
:::

:::details The run panel says "command not found"
The program isn't installed in the Linux environment. Install it in the terminal, for example `pkg install python` or `pkg install nodejs`.
:::

:::details Push or Pull fails
Read the message in the error window: it is Git's own. "No remote" or a missing `origin` means you need to set **Remote Origin URL** in **Git Config**. An authentication error means Git has no login: sign in in **Settings → GitHub**, or use a token. If the remote has new commits, **Pull** before you **Push**.
:::

:::details My edits were replaced
When the open file had no unsaved changes, AntiGem loads the newest version from disk by itself, for example after the agent changed it. Save often. If you have unsaved edits, it never replaces them: it shows the conflict banner instead.
:::

:::cards
- [The Run screen](./06-run.md) — A project's commands and their output.
- [Projects](./04-projects.md) — Pick or make a project.
- [GitHub](../05-power-features/10-github.md) — Sign in, clone and push.
- [Undo what an agent did](../07-guides/10-undo-what-an-agent-did.md) — Get your files back.
:::
