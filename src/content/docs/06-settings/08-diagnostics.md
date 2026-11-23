---
title: Diagnostics & Performance
description: The network inspector, the floating network bubble and the diagnostics HUD, for finding out why something is slow or stuck.
updated: 2.0.4-beta.2
---

Tools for looking inside the app when something is slow, stuck or failing. You don't need them day to day. For the whole debugging toolbox (agent status, server logs, crash reports), see [Debugging tools](../08-help/02-debugging.md).

**Where:** ☰ → **Settings** → **Diagnostics & Performance**. The row shows **HUD on** while the HUD is shown.

## Network Inspector (Live Logs)

**Default:** off. Records every call between the app, the bridge and the Antigravity hub, live: what was sent, what came back, and how long it took. It's marked **ACTIVE** while on.

Turning it on or off asks to **Restart App**: the recorder is added to (or fully removed from) the app's network code at start, so with it off the app runs at full speed with no recording at all.

**Open Network Inspector (N calls recorded)** shows the list of calls.

### Floating Network Bubble

A small draggable pill on screen with the live number of calls and open streams. Needs the Network Inspector on.

## Floating Diagnostics HUD

**Default:** off (**DISABLED** / **VISIBLE**). A live on-screen monitor of threads, queues and connections. Turn it on while you make a slow or stuck state happen, then take a screenshot for your bug report.

The page also shows a **Current Telemetry Snapshot**:

| Line | What it shows |
| :--- | :--- |
| **Active JVM Threads** | How many threads the app is running. Keeps climbing = something is stuck. |
| **AgyHub Stream / RPCs** | Antigravity requests running (`Run`) and waiting (`Q`). |
| **AgyHub Connection Pool** | Open connections to the Antigravity hub. |
| **IDE Bridge Sockets** | Open connections to the bridge. |
| **Event Loop IO Latency** | How quickly the app responds. High = the app is busy or blocked. |
| **Thread Breakdown** | Threads grouped by what they do. |

> [!TIP]
> When you report "AntiGem gets slow after a while", turn on the HUD, use the app until it gets slow, and send a screenshot with the HUD visible. It helps a lot.
