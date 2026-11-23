---
title: "The Run screen"
sidebar: "Run"
description: "A folder's commands in one place: run builds, servers and scripts, watch their live output, and send a failed run to the chat."
updated: 2.0.4-beta.2
---

The **Run** screen keeps a folder's commands in one place: build the app, start the dev server, run the tests. Tap a command and its live output opens in a tab. Runs keep going while you use other screens, and a failed run can go straight to the agent to fix.

**Where:** the chat header's **Open Run panel** icon, the IDE's **▾** → **Open Run screen**, or the floating switcher → **Run** (add it first in **Settings → Appearance → Floating App Switcher**).

![The Run screen: the folder card, the Project / Global / Suggested filters, a list of commands and the New command button](/screens/run_commands.webp "frame")

## How it works

- **Commands belong to a folder.** You pick a folder at the top, and see the commands saved for it.
- **Project commands** are saved in the folder's `.antigem/run.json`. The IDE's run profiles and the agents use the same file, so a command saved in one place shows up everywhere.
- **Global commands** work in any folder, for example `adb devices` or a backup script. They are saved in `~/.antigem/global-run.json` and run in the folder picked at the top.
- **Suggested commands** are found by AntiGem in the folder itself (see [Suggested](#suggested)).
- **Each run gets a tab** with a real terminal. Runs keep going when you leave the screen.

## The header

- **Back** (←, top left): returns to the screen you came from. Runs keep going.
- **Commands** / **Runs**: switch between the list of commands and the open runs. The Runs button shows how many there are (**Runs (2)**), or how many are running (**Runs · 1 running**).

## Commands

### The folder card

The card at the top shows the folder in use, or **Choose a folder**. Tap it (**Change folder**) for a list of folders: the IDE's project, folders you used recently, and your projects. **Browse…** opens a folder browser for any other folder.

**Default:** the folder you used last time, or else the IDE's open project.

### The filters

Three pills under the folder card: **Project**, **Global** and **Suggested**, each with its number of commands. **Default:** Project. When the folder has no saved commands but AntiGem found some, it shows **Suggested** by itself.

### Run a command

**Tap a command** (or its ▶ button, **Run <name>**) to run it. The screen switches to **Runs** and shows its output. Each row shows the command's name, the command itself, and the folder it runs in when that isn't the project's top folder.

### Edit, Duplicate, Delete

Long-press a command, or tap its **⋮** (**More**):

- **Edit**: change it.
- **Duplicate**: make a copy named "<name> copy".
- **Delete**: asks `Delete "<name>"?`, then **Delete**.

### New command

The **New command** button at the bottom opens a form:

- **Name**: what the list shows, for example "Build debug APK".
- **Command**: what to run, for example `adev ./gradlew assembleDebug`.
- **Folder (optional)**: a sub-folder to run it in, for example `android`. Empty means the project folder.
- **Save to**: **This project** (saved in the project's `.antigem/run.json`) or **Global (any folder)** (saved in the app, runs in the folder picked on the screen). Without a folder picked, only Global is possible.

Tap **Save**. It is enabled once **Name** and **Command** are filled.

### Suggested

AntiGem looks at the folder's files and suggests the usual commands:

| It finds | It suggests |
| :--- | :--- |
| `package.json` | one **npm run <script>** per script, and **Install packages** |
| A Flutter project (`pubspec.yaml`) | **Flutter run (hot reload)**, **Get packages**, **Clean**, and the Android items |
| A React Native project | **Start Metro**, **Install npm packages**, **Clean**, and the Android items |
| An Android Gradle project | the Android items, **Clean** |
| Another Gradle project | **Build**, **Run**, **Test** |
| `go.mod` or `Cargo.toml` | **Run**, **Build**, **Test** |
| `manage.py`, `main.py`, `app.py` or `requirements.txt` | **Django server** (with `manage.py`), **Run main.py** or **Run app.py**, **Install requirements** (with `requirements.txt`) |
| `Makefile` | **make** |

The **Android items** are **Build debug APK**, **Build, install & open**, **Install & open**, **Install with Android's installer** (no adb needed: tap Install on the screen that opens) and **App log (logcat)**. The install items need adb connected to this phone (**Settings → ADB Connect**). Android, Flutter and React Native commands need the Android build tools: if they are missing, a note says "These need the Android build tools: set them up in Settings → Android Development first." See [Android development](../05-power-features/05-android-development.md).

Tap a suggestion to run it once. Tap its bookmark (**Save to this project**) to keep it in the project's commands.

## Runs

**Where:** the **Runs** button in the header. Starting a command opens it too.

### Run tabs

One tab per run. Each shows a spinner while it runs, then **Done**, **Failed** or **Stopped**, and the run's name. The × on a tab (**Stop and close**, or **Close** when it is done) stops the run and removes the tab.

### The info row

Under the tabs: the command, and a status line such as **Running · 12s · my-app**, **Done in 40s · exit 0 · my-app** or **Failed after 3s · exit 1 · my-app**. Next to it:

- **Stop**: shown while it runs. It sends Ctrl+C first, and ends anything still running a few seconds later.
- **Send output to chat**: shown when the run is over (see below).
- **Run again**: run the same command again in the same tab.

### The output

A full terminal with the same key rows as the [Terminal](./07-terminal.md) screen. You can type into it when the program asks for input. Tap it to open the keyboard. When the program has finished, pressing Enter closes the tab.

### Send output to chat

When a run fails, a banner says **Failed. Send the output to the chat so the agent can fix it**. Tap it (or **Send output to chat**): AntiGem switches to the chat and puts a message in the box with the command, how it ended, and the last 80 lines of its output. It doesn't send it yet, so you can add a note first. Then tap **Send**.

With nothing running, the Runs view says **Nothing running.**, with **Show commands**.

## While runs keep going

Runs don't stop when you leave the Run screen or switch apps:

- **The Run bubble.** On every other screen a small round button floats while a command runs, with a spinner and the number of runs. When a run ends, it shows ✓ (**Runs finished**) or ✗ (**A run failed**) until you look. Tap it to open the Run screen on that run. Drag it out of the way if it covers something.
- **The chat header's Run icon** gets a spinning ring while something runs.
- **The screen stays on** and the phone doesn't go to sleep while a command runs (for up to 3 hours).
- **AntiGem's notification** counts them: "1 session · 1 running".

Runs live in the app's memory. If AntiGem is closed (for example with **Exit App**), they stop and their tabs are gone. See [Running in the background](./11-background-and-notifications.md).

## Troubleshooting

:::details ".antigem/run.json in this folder isn't valid JSON"
The file was edited by hand (or by an agent) and has a mistake. Open it in the IDE (**▾** → **Edit run.json in Editor**), fix it, or delete it to start fresh.
:::

:::details "This PC doesn't let the phone run commands"
You are connected to a PC whose AntiGem for VS Code doesn't allow commands from the phone. Turn on **Allow terminal from phone** in VS Code, or switch back to this phone. See [Connect to PC](../05-power-features/03-connect-to-pc.md).
:::

:::details Some of my IDE profiles don't show here
Profiles that use the IDE's open file (`${file}` and similar) only make sense in the IDE, so the Run screen hides them and says how many it hid.
:::

:::details The run fails with "command not found"
The tool isn't installed. Install it in the terminal (for example `pkg install nodejs`), or for Android builds set up **Settings → Android Development**.
:::

:::cards
- [Editor and Git](./05-editor-and-git.md#run-a-file) — Run the open file and make run profiles.
- [Terminal](./07-terminal.md) — The full Linux shell.
- [Keep long jobs running](../07-guides/12-keep-long-jobs-running.md) — Builds and servers that take hours.
- [Build an APK](../07-guides/15-build-an-apk.md) — Build and install an Android app on the phone.
:::
