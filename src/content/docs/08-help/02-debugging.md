---
title: Debugging tools
description: How to see what's going on when something doesn't work. Agent status, server logs, the network inspector, the HUD, crash reports and more.
updated: 2.0.4-beta.2
---

When an agent doesn't answer, a chat errors out or the app feels slow, these tools show you what's happening. Start at the top: the first two solve most problems.

## 1. The agents' status (start here)

**Where:** the small coloured **dot** at the left of the project button (**Select Project**), top of the chat.

Tap the dot to open **AGENTS**: one line per agent you turned on, with its state:

| State | What it means | What to do |
| :--- | :--- | :--- |
| **Ready** | Installed, signed in, running. | Nothing. |
| **Connecting…** / **Checking sign-in…** | Starting up. | Wait a few seconds. |
| **Not installed** | The agent's program isn't installed. | Tap **Install** (or **Set up**). |
| **Sign in required** | Installed, but not signed in. | Tap **Sign in**. Some sign-ins finish in your browser (**Finish signing in with Google in your browser.**). |
| **Offline** | The app can't reach the bridge or the agent. | Tap **Restart server** (below). |
| **Error** | Something failed; the line says what. | Tap **Retry**, then check **Server logs**. |

The dot itself sums it up: green when everything is fine. When two agents disagree, the dot is split in two colours.

Two more rows at the bottom of the menu:

### Server logs

Opens **Local Server Logs**: the live output of the [bridge](../01-getting-started/02-key-concepts.md#the-bridge) and the agents it starts. Errors from the agents (a failed sign-in, a crash, a missing package) show up here first. **Copy log** copies it, to paste into a bug report. In [server mode](../05-power-features/02-server-mode.md) it shows the server's log (**Server Logs (SSH)**).

The same **Server logs** button is on the empty chat screen when an agent isn't ready.

### Restart server

Restarts the bridge and the agents. Fixes most "Offline" and "stuck" states. Replies that are running stop.

## 2. The chat's own details

### Tool cards

Every action the agent takes is a card in the chat. Tap it to see exactly what was sent (the command, the file) and what came back (the output or the error). When an agent "can't" do something, the answer is usually in its last tool card.

### Raw payload

Under a message, the **View Raw Request Payload** icon (when the message has one) opens **Raw Payload JSON**: what was actually exchanged with the model, with **Copy JSON**. Useful when a reply makes no sense. With message stats on, the token pill above the icons opens it too. See [Chat](../03-using-the-app/02-chat.md).

### Running agent programs

In the drawer (**☰**), a chat whose agent program is still running has a green **RUNNING** badge. Tap it to open **Active CLI Process**: the chat, model, uptime and process ID. **Terminate & Free RAM** stops it (good when the phone is slow or low on memory), **Keep Running** leaves it. See [Chat history](../03-using-the-app/03-chat-history.md).

## 3. Diagnostics & Performance

**Where:** ☰ → **Settings** → **Diagnostics & Performance**

For deeper problems: slow replies, network errors, the app hanging.

### Network Inspector (Live Logs)

Records every call between the app, the bridge and the Antigravity hub, live, with timing and content. **Default:** off. Turning it on or off asks to **Restart App** (it adds a small recorder to the app's network code, which is fully removed again when off). Open the list with **Open Network Inspector (N calls recorded)**.

### Floating Network Bubble

A small draggable pill on screen with the live number of calls and open streams. Needs the Network Inspector on.

### Floating Diagnostics HUD

A live on-screen monitor: threads, the hub's running and queued requests, connections and the app's response time. **Default:** off. Turn it on while you reproduce a slow or stuck state, then send a screenshot with your report. The row shows **HUD on** in the settings list while it's on.

See [Diagnostics & Performance](../06-settings/08-diagnostics.md).

## 4. The terminal

Many problems are easier to see in the terminal (from the app switcher):

```bash title="Quick checks"
claude --version          # is Claude Code installed? which version?
codex --version
opencode --version
df -h ~                   # free space in the Linux environment
pkg list-installed | head # installed packages
```

Run a failing command yourself to see its full error. See [Terminal](../03-using-the-app/07-terminal.md).

## 5. Crash reports

If AntiGem crashes, it opens a screen that says **Oops! AntiGem tripped over something**, with:

- **Show details**: the report (the error, app and Android versions, phone model and memory).
- **Report on GitHub**: opens a new issue with the report filled in (it's also copied, in case something is missing).
- **Share crash report**: send it any other way (Discord, email).
- **Restart app**.

> [!WARNING]
> Check the report before you post it: it may contain file or folder names.

## 6. adb logcat (advanced)

With a computer and USB or Wireless debugging, `adb logcat` shows everything the app logs, including crashes in other parts of Android:

```bash title="On your computer"
adb logcat | grep -iE "antigem|AndroidRuntime"
```

Look for lines with `FATAL` or `Exception` near the time of the problem.

## What to send with a bug report

1. The app version (**Settings → About & Info**) and your phone model and Android version.
2. Which agent, and **Where agents run** (phone, Ubuntu chroot, server).
3. What you did, what you expected, what happened.
4. The **Server logs** (copied), the last tool card, or the crash report.

See [Getting help and reporting bugs](./04-get-help.md).
