---
title: Build an APK on the phone
description: Set up Android development, have an agent build an app, and install it on the same phone.
updated: 2.0.4-beta.2
---

At the end, an agent has built an Android app (Kotlin with Jetpack Compose, Flutter or React Native) on your phone, and it's installed next to your other apps.

**Before you start:** AntiGem's Linux environment installed, and a few GB of free space. Builds are for arm64 phones (nearly all phones).

:::steps
### Open Android Development

**Settings → Android Development** (**Build Android apps on this phone**).

### Get the setup files

Tap **Get setup files**. The setup script and the `adev` commands aren't part of the app; they're downloaded from the AntiGem plugins repository.

### Pick what you'll build

Under **What will you build?**, tick **Kotlin / Java** (the others build on it), and **Flutter** or **React Native** if you want them. Tap **Install selected**.

Keep AntiGem open while it runs: the screen stays on. Stopping half way is safe; install the part again to finish it.

### Try a test build

Tap **Build a test app**, then **Install on this phone**. If that works, everything is ready.

### Ask an agent for your app

Start a chat in a new project:

```text title="Prompt"
Make an Android app with Kotlin and Jetpack Compose: a tip calculator with a
bill amount, a tip slider and the result. Build it and install it on this phone.
```

The agent uses the `adev` commands to create, build and install the app.
:::

## Good to know

- **Optional: Set up ADB Connect** lets the agent install apps and read their logs itself. See [ADB Connect, Shizuku and root](../05-power-features/07-device-access.md).
- **Check the tools** prints the version of every tool (Java, the SDK platforms, `aapt2`, `adb`, Node.js, Flutter, CMake), handy when something fails.
- Builds target arm64 phones. For other processors, build on a computer.

See [Build Android apps on the phone](../05-power-features/05-android-development.md) for every option.
