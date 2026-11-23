---
title: "Android automation"
description: "Let agents see the screen and tap, type and swipe in other apps: the accessibility service, screenshots, shell access, the Android MCP tools and how to stay safe."
updated: 2.0.4-beta.2
---

**Android automation** lets AI agents use your phone like a person: read what is on the screen, tap, type, scroll and swipe, open apps and settings, and take screenshots. Use it to let an agent do a task in another app, or to test the app you are building.

**Where:** **Settings → Android Automation** ("Let AI agents see and control this phone").

> [!CAUTION]
> This gives AI agents full control of your phone: they can read everything on screen (including messages and passwords you can see), tap, type, and open or uninstall apps. Only allow it if you trust the agents you connect, and review what they do. Turn it off when you don't need it.

## How it works

```text
 Agent ──► Android MCP ──► AntiGem's accessibility service ──► the screen
                       └─► shell access (ADB, Shizuku or root), optional
```

- **The accessibility service** ("AntiGem Android Automation") reads the screen, taps, swipes, types and takes screenshots. It is required.
- **Shell access** adds what accessibility can't do: pressing any key, installing, uninstalling and force-stopping apps, and running shell commands. It is optional and goes through [ADB Connect](./07-device-access.md).
- **The Android MCP** is how agents reach it. You add it to each agent with one tap.

The card at the top shows the state: **Allowed** ("Agents with the Android Automation MCP can control this phone"), **Not running** or **Not allowed**.

## Set it up

:::steps
### Accessibility service

Tap **Open Accessibility**. In Android's Accessibility settings, open **AntiGem Android Automation** (it may be under **Installed apps** or **Downloaded apps**) and turn it on. Come back: the step says **Allowed**.

If shell access is already set up, you can skip Android's settings: tap **Turn on with ADB** (or **with Shizuku**, **with Root**).

### Screenshots

Nothing to do: screenshots come with the accessibility service. Apps that block screenshots (banking, protected video) show up black. On Android 10 and older, screenshots through accessibility aren't possible: connect ADB to allow them.

### Shell access (optional)

Set up one way in **Settings → ADB Connect** (**Open ADB Connect**): ADB, Shizuku or root. The step shows **ADB ready** (or Shizuku, Root) when it works.

### Add the MCP

In your agent's MCP servers, tap the **Android** preset ("Tap, type & read this phone"). It is there for Antigravity (**Settings → MCP Servers**), Claude Code, OpenCode and Codex. Start a new chat.
:::

Until the accessibility service is allowed, the MCP server refuses to connect, and the agent is told what is missing.

### Android 13 and newer: "Restricted setting"

Android 13+ blocks accessibility for apps installed from a file, like AntiGem. If the switch is greyed out or Android says **Restricted setting**:

1. Go back to AntiGem and tap **Open App info** (on the automation page).
2. Tap **⋮** (top right) → **Allow restricted settings**.
3. Turn the service on again in Accessibility.

Or set up ADB, Shizuku or root first and use **Turn on with…**.

## What agents can do

The Android MCP gives agents these tools:

| Tool | What it does | Needs shell access |
| :--- | :--- | :---: |
| `android_get_status` | Screen size, the app in front, screen on or locked, and which access is available | |
| `android_get_device_info` | Information about the phone | |
| `android_get_ui_tree` | The elements on screen, with their text and ids | |
| `android_screenshot` | A picture of the screen | |
| `android_tap` | Tap or long-press an element or a point | |
| `android_type_text` | Type into a text field | |
| `android_scroll`, `android_swipe` | Scroll a list, swipe between points | |
| `android_global_action` | Back, home, recent apps, notifications, quick settings, power menu, lock screen, split screen | |
| `android_list_apps`, `android_launch_app` | List and open apps | |
| `android_open_intent` | Open a link, a deep link or a settings page | |
| `android_wait_for` | Wait until text shows up or goes away, or the screen stops changing | |
| `android_press_key` | Press a key (Back, Home and App switch work without shell access) | ✅ |
| `android_install_apk` | Install an APK | ✅ |
| `android_uninstall_app` | Uninstall an app. Without shell access, Android's dialog opens and you tap OK. | |
| `android_force_stop_app` | Force-stop an app | ✅ |
| `android_adb_shell` | Run a shell command (`pm`, `am`, `settings`, `dumpsys`…), as the shell user or root | ✅ |

Agents are told to always ask you before uninstalling an app.

### The /automation command

Start your message with `/automation` and a task. It tells the agent how to work with these tools step by step, and to check that the MCP is set up first:

```text title="Prompt"
/automation Open the Clock app and set an alarm for 6:30 tomorrow morning.
```

Keep the phone unlocked and the screen on while the agent works.

## Stay safe

- **Watch it work.** The agent acts on your real phone and accounts.
- **Keep approvals on**, especially for messages, calls, payments, deleting and uninstalling. Refuse anything you didn't ask for.
- **Don't use it for banking or payment apps.** Many block automation anyway.
- **Turn it off when you are done:** **Turn off in Accessibility** on the automation page opens the switch.

## Troubleshooting

:::details The switch is greyed out, or "Restricted setting"
See [Android 13 and newer](#android-13-and-newer-restricted-setting): **Open App info** → **⋮** → **Allow restricted settings**, or use **Turn on with…**.
:::

:::details "Not running": the service is on but nothing happens
Android hasn't started the service. Turn it off and on again in Accessibility. Some phones stop accessibility services to save battery: remove AntiGem's battery limits (see [Running in the background](../03-using-the-app/11-background-and-notifications.md)).
:::

:::details The agent says it has no android_ tools
Add the **Android** preset to that agent's MCP servers and start a new chat. If the tools return a permission error, finish step 1 first.
:::

:::details Screenshots are black
The app on screen blocks screenshots (banking apps, protected video). The agent can still read the screen's elements with `android_get_ui_tree`.
:::

:::details The agent can't install or force-stop apps
These need shell access. Set up **Settings → ADB Connect** (ADB, Shizuku or root).
:::

:::cards
- [Let the agent use your phone](../07-guides/07-let-the-agent-use-your-phone.md) — The short guide.
- [ADB Connect, Shizuku and root](./07-device-access.md) — Shell access for more tools.
- [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md) — All of AntiGem's MCP presets.
- [Approval](../01-getting-started/02-key-concepts.md#approval) — How approvals work.
:::
