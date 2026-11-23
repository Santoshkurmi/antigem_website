---
title: Build Android apps
description: "Set up Gradle, the Android SDK, Flutter and React Native on the phone, then build and install apps with the adev commands or an agent."
updated: 2.0.4-beta.2
---

**Android Development** sets up everything needed to build real Android apps on the phone itself: Kotlin or Java with Jetpack Compose, Flutter, and React Native. Agents (or you, in the terminal) can then create a project, build its APK and install it next to your other apps, with no computer.

**Where:** **Settings → Android Development** (the page title is **Build Android apps on this phone**).

> [!NOTE]
> Android development is for **arm64 phones** (nearly all phones). The tools are adapted to run on arm64, and the apps are built for arm64 (`arm64-v8a`). The x86_64 build of AntiGem (emulators, Chromebooks) doesn't show this page.

## How it works

- **The tools run in Ubuntu.** Gradle, the Android SDK and Flutter need a normal Linux system. AntiGem installs them in an Ubuntu container (proot-distro) inside the terminal, the same container [REA](./06-reverse-engineering.md) uses. On a rooted phone with the [Ubuntu chroot](./04-ubuntu-chroot.md), they go into the chroot instead.
- **Nothing ships inside the app.** The setup script (`android-setup.sh`) and the `adev` commands are downloaded from the AntiGem plugins repository when you ask for them.
- **Some Google tools only exist for PCs.** AntiGem swaps them for arm64 ones: Termux's (or Ubuntu's) `aapt2`, Ubuntu's LLVM, CMake and Ninja for the NDK, and an emulator layer (qemu) for Flutter's release compiler.
- **`adev` runs a command with every tool ready.** For example `adev ./gradlew assembleDebug` builds a project. `adev-new` creates a new project that already builds.

The top card shows the state: **Not set up**, **Partly set up** or **Ready**.

## Set it up

:::steps
### Setup files

Tap **Get setup files**. The step then shows the version you have. Later, **Check for update** looks for a newer one, and **Update to v…** gets it. **Download again** replaces them.

The files come from `Santoshkurmi/antigem_plugins@main`. **Change** lets you use another repository or branch (`owner/repo@branch`); **Default** puts the normal one back.

### Install

Under **What will you build?**, tick what you need:

| Choice | What it is | Space |
| :--- | :--- | :--- |
| **Kotlin / Java · Jetpack Compose** | Native Android apps with Gradle. Flutter and React Native need this too. | ≈1.2 GB with Gradle's first downloads |
| **Flutter** | Dart apps with Flutter (stable), debug and release builds. | +≈1.6 GB |
| **React Native** | JavaScript / TypeScript apps with the React Native CLI. | +≈1.8 GB, ≈400 MB per project |

Under **Extras**, you can add **adb** (to install and debug your apps; **adb and fastboot** in the chroot) and **C/C++ (NDK)**.

The line under it says what will be installed ("Installs 5 parts: …"). Tap **Install selected (5)**. Keep AntiGem open: the screen stays on while it runs. **Stop** is safe: install the part again to finish it.

### Build a test app

Each framework you installed has a row with **Build**. It creates a hello-world app in `~/AndroidProjects/hello-<kind>` and builds its debug APK. When it is done, the row says **APK built**: tap **Install** to open Android's installer, or **Rebuild**.

The first build of each kind downloads Gradle and libraries (several hundred MB) and takes 5–15 minutes. Later builds are much faster.

### Use it

Ask an agent, or use the commands yourself (see [Using it](#using-it)).
:::

### All parts

**All parts (install, repair or update one)** opens the list of every part, each with its size and **Install**, **Reinstall** or (Flutter) **Update**. A part shows "Also installs: …" when it needs others first.

| Part | What it is | Space |
| :--- | :--- | :--- |
| **Ubuntu container** | proot-distro and Ubuntu 24.04, shared with REA. In the chroot: **Ubuntu chroot**, nothing to add. | ≈150 MB |
| **Base tools** | curl, git, zip, unzip, xz, Python and binutils. | ≈70 MB |
| **Java 21** | OpenJDK 21, headless. Shared with REA. | ≈290 MB |
| **Android SDK** | Command-line tools, Android 16 (API 36), build-tools 36, an arm64 `aapt2`. | ≈500 MB |
| **adev commands** | `adev` and `adev-new`. | <1 MB |
| **Flutter** | Flutter stable from GitHub. Install again to update it. | ≈1.5 GB |
| **Flutter release builds** | Runs Flutter's PC-only release compiler through qemu, so `flutter build apk --release` works. Each release build takes a few minutes longer. Debug builds don't need it. | ≈110 MB |
| **Node.js 24** | Installed with nvm, shared with REA. React Native and Expo run on it. | ≈240 MB |
| **C/C++ (NDK)** | The Android NDK and CMake, with arm64 LLVM, CMake and Ninja. React Native needs it. | ≈1.5 GB |
| **adb** | adb in the terminal, to install and debug apps. Connect it in ADB Connect. | ≈10 MB |

## Using it

### Ask an agent

Any agent that can run terminal commands can build apps: Antigravity, Claude Code, OpenCode or Codex. The page has examples under **Try in chat**:

```text title="Prompts"
Create a Jetpack Compose app called Notes in ~/AndroidProjects/notes with a list
and an add button, build it and give me the APK.

Make a Flutter counter app in ~/AndroidProjects/counter, build the debug APK and
install it on this phone.

Create a React Native app in ~/AndroidProjects/hello-rn that shows today's date,
and build it.
```

### In the terminal

```bash title="Terminal"
adev-new compose ~/AndroidProjects/my-app
cd ~/AndroidProjects/my-app && adev ./gradlew assembleDebug
```

`adev` runs a command in the current folder with Java, the SDK, Gradle, Flutter and Node.js on its PATH. `adev-new` makes `compose`, `flutter` and `rn` (React Native) projects.

> [!IMPORTANT]
> Keep your projects in the terminal's home folder (like `~/AndroidProjects`), not on the phone's shared storage.

The [Run screen](../03-using-the-app/06-run.md#suggested) suggests the usual build, install and log commands for Android, Flutter and React Native projects.

### Android Development skill for agents

A skills-only plugin that teaches agents to check the setup, install what is missing (asking you first), create projects with `adev-new`, build with `adev`, install the APK and fix the usual errors of building on a phone. **Recommended.**

Tap **Install skill** (later **Update skill**). To give an agent the skill, type `/plu:` in its chat and pick **Android Development**, or add the plugin in that agent's MCP settings with the **Custom Plugin** preset. **Plugins** opens the plugin list. See [Skills](../04-tools-and-extensions/05-skills.md).

### Install on this phone

The **Install** buttons open Android's own installer: you tap **Install** on its screen. For agents to install and start apps themselves (and read logcat), install **adb** (an extra above), then connect it once: **Set up ADB Connect**. When it is connected the card says **adb connected**. See [ADB Connect, Shizuku and root](./07-device-access.md).

### Check the tools

**Check** prints the version of every tool: Java, the SDK platforms, `aapt2`, `adb`, Node.js, Flutter and CMake. Run it when a build fails and send the output if you ask for help.

### Set up in the terminal

**Show** under **Set up in the terminal** lists the same setup steps as commands, for people who prefer the terminal. Each step can be run again to repair or update it.

### Free space / remove

Under **Free space / remove** (tap **Show**):

- **Clean Gradle cache** ("Delete Gradle's caches?"): frees the space Gradle's downloads use. The next build of every project downloads them again, which is slow.
- **Remove Flutter**: deletes Flutter and its package cache (≈1.5 GB). Your Flutter projects stay.
- **Remove all** ("Remove the Android tools?"): deletes the Android SDK, Flutter, Gradle's files and the `adev` commands. Java, Node.js (REA uses them) and your projects stay.

Your projects are never deleted. The Ubuntu container itself is removed on the REA page (**Delete container**), since both use it. In the chroot, the chroot is deleted on its own page.

## Troubleshooting

:::details "Install the terminal first"
The tools install into AntiGem's Linux environment, which isn't installed yet. Install it, then come back.
:::

:::details The first build takes very long
That's normal: the first build of each kind downloads Gradle and its libraries (several hundred MB) and can take 5–15 minutes. Keep AntiGem open and on Wi-Fi. Later builds are much faster.
:::

:::details The build fails right away
Tap **Check** under **Check the tools** and look for a missing tool. Install the missing part from **All parts**. Make sure the project is in the home folder, not on shared storage.
:::

:::details `flutter build apk --release` fails
Release builds need the **Flutter release builds** part. Install it from **All parts** (it comes with the Flutter choice).
:::

:::details The phone runs out of space
Use **Clean Gradle cache**, or remove Flutter if you don't need it. React Native projects take about 400 MB each: delete old ones.
:::

:::details The built app won't install
Android's installer may need permission to install apps from AntiGem: allow it when Android asks. If an app with the same package name but another signature is installed, uninstall it first.
:::

:::cards
- [Build an APK on the phone](../07-guides/15-build-an-apk.md) — The short step-by-step guide.
- [ADB Connect, Shizuku and root](./07-device-access.md) — Let agents install apps and read logs.
- [The Run screen](../03-using-the-app/06-run.md) — Build and install with one tap.
- [Reverse engineering](./06-reverse-engineering.md) — Uses the same Ubuntu container.
:::
