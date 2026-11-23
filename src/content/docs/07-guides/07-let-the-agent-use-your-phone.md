---
title: Let the agent use your phone
description: Turn on Android automation, add the Android preset, and give the agent a task in other apps.
updated: 2.0.4-beta.2
---

At the end, an agent can read your screen and tap, type and swipe in other apps to do a task for you.

> [!CAUTION]
> This gives the agent full control of your phone: it can read everything on screen, including messages and passwords. Keep approvals on, watch what it does, and turn the service off when you're done.

:::steps
### Turn on the accessibility service

**Settings → Android Automation** → **Open Accessibility** → turn on **AntiGem Android Automation**. On Android 13+, if the switch is greyed out, go back, tap **Open App info**, then **⋮** (top right) → **Allow restricted settings**, and try again. See [Android automation](../05-power-features/08-android-automation.md).

### Optional: shell access

For pressing any key, installing, uninstalling and force-stopping apps, and shell commands, set up **Settings → ADB Connect** (Wireless debugging, Shizuku or root). See [ADB Connect, Shizuku and root](../05-power-features/07-device-access.md).

### Add the Android preset

In your agent's MCP servers, tap **Android**. Start a new chat.

### Give it a task

Use the ready-made `/automation` command, or type it yourself:

```text title="Prompt"
/automation Open the Clock app and set an alarm for 6:30 tomorrow morning.
```

The agent looks at the screen, taps, and checks the result after each step. Keep the phone unlocked while it works.
:::

## Good tasks

- Changing settings ("turn on dark mode", "turn off Bluetooth").
- Testing your own app: "install the APK I just built, open it, and try the login screen".
- Repetitive work in an app you use.

## Not good for

- Banking or payment apps (many block screenshots and automation, and you shouldn't hand them to an agent).
- Anything you can't undo, unless you approve each step.

The agent should ask before uninstalling apps, deleting data, sending messages, calls or payments. If it doesn't, refuse the approval.
