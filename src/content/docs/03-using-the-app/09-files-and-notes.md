---
title: Files and notes
description: "The Files screen (folders, places, tabs, search, copy and move, ZIP, open with), files shared into AntiGem from other apps, and Notes and to-do lists."
updated: 2.0.4-beta.2
---

**Files** is AntiGem's file manager: browse the agents' folders and your phone's storage, copy and move, zip and unzip, and open files in the right place. **Notes** keeps notes and to-do lists, which agents can read and update too.

**Where:** the floating switcher → **Files** (the folder icon), or → **Notes** (the note icon).

## Files

![The Files screen: the top bar, the path bar with the Places button, a list of folders and files, and the round Create button](/screens/files_list.webp "frame")

Files shows the folders of the machine where the agents run: this phone's Linux environment, or your server or PC. With a [server](../05-power-features/02-server-mode.md) or a [PC](../05-power-features/03-connect-to-pc.md), it also has a **Phone** tab for this phone's files, so you can copy files between the two.

### The top bar

From left to right:

- **Back**: go to the folder you were in before. With nothing to go back to, it closes Files.
- The name of the current folder.
- **Search**: search this folder (see [Search](#search)).
- **Open folders in tabs** (this phone only): turn tabs on, to keep several folders open. **Turn off tabs** turns them off. **Default:** off.
- **Grid view** / **List view**: show files as a grid of tiles or a list.
- **More** (⋮):
  - **New folder**, **New file**
  - **Select all**
  - **Show hidden files** (files whose name starts with a dot, like `.git`)
  - **Sort & view…** (see [Sort and view](#sort-and-view))
  - **Refresh**
  - **Open this folder in IDE**: open the folder as a project in the code editor
  - **Copy folder path**
  - **Folder details**

You can also pull the list down and let go to refresh it.

### The path bar

Under the top bar, the folders from the top down to where you are, for example **Home**, `projects`, `my-app`. Tap one to jump to it. Long-press it to copy the current folder's path. The first one is **Home**, **Internal storage** or **Root** (`/`), depending on where you are.

### Places

The storage button at the left of the path bar (**Places**) opens a list of places to jump to:

- **Home**, **Projects**, **Internal storage**, **Downloads**, **Documents**, **Camera**, **Pictures**, **Movies**, **Music**, an **SD card**, and **Root**: each one only when it exists. Storage places show how much space is free; the bar turns red below 10%.
- **PROJECTS**: your recent IDE projects.
- **RECENT**: folders you opened lately.

Phone storage needs Android's **All files access** (AntiGem asks on first launch). On the **Phone** tab, without it you see **Allow access to this phone's files** with an **Allow** button, which opens the right Android page.

### Tabs

With tabs on, each tab keeps its own folder. **New tab** (+) opens one; **Close tab** (×) closes it. Tabs are named **Home**, **Phone**, **Internal storage** or after their folder. With a server or PC, tabs are always on: the first is that machine, the second is this phone, and **New tab** asks which one. AntiGem remembers your tabs and last folders.

### Search

Tap **Search** and type in **Search in <folder>**:

- **This folder** (**default**): filters the list by name as you type.
- **All subfolders**: searches everything below this folder. Pressing the keyboard's search key switches to it. Results show which subfolder they are in.

Hidden files are only searched when **Show hidden files** is on. **Clear** empties the field, **Close search** (the back arrow) closes it.

### Sort and view

**More** → **Sort & view…**:

| Option | Choices | Default |
| :--- | :--- | :--- |
| **Sort by** | **Name**, **Date modified**, **Size**, **Type** | Name |
| Order | **Ascending**, **Descending** | Ascending |
| **Layout** | **List**, **Grid** | List |
| **Folders first** | on / off | On |
| **Show hidden files** | on / off | Off |
| **Image thumbnails** | on / off | On |

Names sort the way people count: `file2` comes before `file10`.

**Forget "always open with" choices** clears the apps you chose with **Always open .ext files this way** (see [Opening files](#opening-files)).

### Select files

- **Long-press** a file or folder to start selecting. Then tap others to add or remove them.
- **More** → **Select all** selects everything here.

The selection bar shows **3 selected** and:

- **Clear selection** (×), **Select all**
- **Copy**, **Cut**, **Delete** (red)
- **More** (⋮): **Share**, **Compress to ZIP**, **Copy to…**, **Move to…**, **Copy paths**, and for one item **Rename** and **Details**

### Copy, cut and paste

After **Copy** or **Cut**, open the folder where the files should go (in any tab). A bar at the bottom says what you are copying or moving, with **Paste** and **Cancel**. Tap **Paste**.

When files with the same name are already there, AntiGem asks what to do:

- **Keep both**: the new ones get a number, like "name (1)".
- **Skip**: leave the existing ones alone.
- **Replace**: the existing items are deleted first.

**Copy to…** and **Move to…** do the same with a folder picker: open the target folder, then tap **Copy here** or **Move here**.

### The item menu

In list view, each item has a **⋮** (**More for <name>**). Its top row has **Open**, **Share** (files), **Copy**, **Cut**, **Rename** and **Delete**. Below:

- Folders: **Open folder in IDE** ("Use it as the active project").
- Files: **Open with…** ("Choose the editor or another app") and **Open in code editor**.
- ZIP and other archives: **View contents**, **Extract here** ("Into a new folder next to it") and **Extract to…**.
- Always: **Compress to ZIP**, **Copy to…**, **Move to…**, **Duplicate**, **Copy path** and **Details**.

In grid view there is no ⋮: long-press to select, and use the selection bar.

### Create a file or folder

Tap **Create** (the round + button, bottom right) and choose:

- **Folder**: type its name, tap **Create**.
- **File** ("Empty file, any extension"): type a name with its extension, for example `main.py`. After it is made, **Edit** opens it in the IDE.
- **Project from template**: a new project folder from a template. See [Projects](./04-projects.md#make-a-new-project).

### Delete

**Delete** asks first, with the names of what you delete. Deleting is **permanent**: there is no recycle bin. For a folder with files in it, or more than 5 items, you must also tick **I understand, delete permanently**. Open editor tabs of deleted files close.

### Rename, compress, extract and details

- **Rename**: type the new name. For a file, only the part before the extension is selected, so you don't change it by mistake.
- **Compress to ZIP**: type the ZIP's name and tap **Compress**. It is saved in the same folder (renamed if the name is taken).
- **View contents**: see what is inside an archive, with **Extract here** and **Extract to…**.
- **Details**: the location (**Copy path**), size, what it contains, the date it was changed, the type, the permissions and the access. On the agents' machine, files also have an **Executable** switch, to let a script run (`chmod +x`).

Folders can't be shared directly: compress them to ZIP first.

### Opening files

Tap a file to open it. AntiGem asks how, with the best choice marked **Recommended**:

| Choice | For |
| :--- | :--- |
| **Code editor** ("Edit in the IDE") | Text and code files |
| **Preview** ("Rendered Markdown") | Markdown files |
| **View in AntiGem** ("Built-in viewer: zoom, save, share") | Images |
| **Play in AntiGem** ("Built-in player: full screen, seek, speed") | Videos |
| **View contents** | ZIP and other archives |
| **Open in …** / **Install app** / **Install mini app** | Another app on the phone: gallery, PDF reader, music player, the APK installer, the mini app installer |
| **Share** ("Send it to another app") | Anything |

Tick **Always open .<ext> files this way** to skip the question next time for that file type. Change it later with **Sort & view…** → **Forget "always open with" choices**.

Files the agent mentions in the chat open the same way when you tap their path: text files go straight to the code editor.

> [!NOTE]
> The code editor opens text files up to 20 MB, and other files up to 2 MB. Opening a file that isn't text shows **Not a text file**: the editor may show garbled text, and saving can damage the file. Choose **Open anyway**, **Other app** or **Cancel**.

## Share files into AntiGem

You can send files and text to AntiGem from any other app: tap **Share** (or **Open with**) in that app and pick **AntiGem**.

- **A shared chat** (`.antigem` file) opens in the chat viewer. See [Chat history](./03-chat-history.md#open-a-shared-chat).
- **A mini app** (`.agapp` file) opens the mini app installer. See [Mini Apps](../05-power-features/09-mini-apps.md).
- **Anything else** opens **File received** (or **3 files received**): "What would you like to do with it?"

The choices:

- **Open in code editor** ("Edit now, save it anywhere later"): for text and code. Shared text without a file becomes a new file too.
- **Preview** ("Rendered Markdown"): for Markdown files.
- **View in IDE** ("Image viewer with zoom"): for images.
- **Save to a folder…** / **Save all to a folder…** ("Pick any folder, like a project or Downloads"): copy the files to a folder on the agents' machine. Pick the folder, check the **File name**, and tap **Save** (or **Save here** for several files).
- **Cancel**.

When saving is done, AntiGem says **Saved** (or **Saved 3 files**), with **Open in IDE**, **Show in Files** and **Done**.

## Notes

![Notes: the All, Notes and To-dos filters, a pinned to-do list and two notes](/screens/notes_list.webp "frame")

Notes holds two kinds of items: **notes** (a title and text) and **to-do lists** (a title and items you can check off). They are saved on the phone, inside AntiGem.

### The list

- **Search** (top right): find notes by their title, text or to-do items. Type in **Search notes**; **Clear search** empties it.
- **All**, **Notes**, **To-dos**: filter the list. Each shows its number.
- Notes are listed by the last change, newest first. Pinned ones are on top under **PINNED**, the others under **OTHERS**.
- Each card shows the title (or **Untitled**), up to 4 lines or to-do items, the time it was changed, and for to-do lists how many are done ("2/5 done").

With nothing there, it says **No notes or to-do lists yet**, with "Tap + to add one, or ask an agent with the Notes MCP".

### Make a note or a list

Tap **+** (bottom right) and choose **Note** or **To-do list**. Type a **Title** and the **Note** text, or the list's items.

Everything saves by itself as you type: there is no Save button. Tap **Back** to go back to the list. A new note you left empty is thrown away.

### To-do lists

- Tap the box in front of an item to check it. Checked items are crossed out.
- Type an item in **List item**. The keyboard's Next key adds a new item under it. **Add item** at the end adds one too.
- **Remove item** (×) removes one.
- The list shows how many are done ("2 of 5 done").

### The note menu

In an open note, the top bar has **Pin** / **Unpin** (keep it on top of the list) and **More** (⋮):

- For to-do lists: **Check all**, **Uncheck all**, **Clear completed** (removes the checked items).
- **Turn into note** / **Turn into to-do list**: change the kind. A list becomes lines like `[x] item`; a note becomes one item per line.
- **Delete**: deletes the note at once. A message says **Note deleted** (or **To-do list deleted**) with **Undo**.

### Notes and agents

Agents can read, create and update your notes and to-do lists through the **Notes & To-dos** MCP server ("Read & edit your notes"). Add it with one tap in your agent's MCP settings. Changes made by an agent show up live, even in the note you have open. Agents are told to ask before deleting anything they didn't make. See [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md).

## Troubleshooting

:::details "Files are not available"
Files couldn't read the folder from the agents' machine; the message under it says why. Tap **Retry**, or **Go home**. If the local server is down, restart it from the status dot in the chat header.
:::

:::details I don't see a file I know is there
It may be hidden (its name starts with a dot): turn on **More** → **Show hidden files**. If the folder says **Only hidden files here**, that is the case.
:::

:::details "Folders cannot be shared. Compress them to ZIP first."
Android can only share files. Select the folder, **More** → **Compress to ZIP**, then share the ZIP.
:::

:::details A file opens in the wrong app every time
You ticked **Always open .ext files this way** for it. Clear it in **More** → **Sort & view…** → **Forget "always open with" choices**.
:::

:::details I deleted a note by mistake
Tap **Undo** in the message right after deleting. After that message is gone, the note can't be brought back.
:::

:::cards
- [Projects](./04-projects.md) — Open a folder as the chat's project.
- [Editor and Git](./05-editor-and-git.md) — Edit the files you open.
- [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md) — Let agents use your notes.
- [Connect to PC](../05-power-features/03-connect-to-pc.md) — Copy files between the phone and a PC.
:::
