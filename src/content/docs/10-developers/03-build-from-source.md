---
title: Build AntiGem from source
description: Build the app yourself, how the code is organized, and how to contribute.
updated: 2.0.4-beta.2
---

AntiGem is open source (GPLv3). You can build the APK yourself, change it, and send improvements back.

## What you need

- **JDK 17** or newer
- The **Android SDK** (the project compiles against a recent API level; Android Studio installs what's missing)
- **Go** (for the bridge, `agy_ide_bridge`; see `agy_ide_bridge/go.mod` for the version)
- For the x86_64 build: the **Android NDK** (its bridge is linked through the NDK's clang)
- A Linux or macOS computer is easiest

## Build it

```bash title="Terminal"
git clone https://github.com/santoshkurmi/antigem.git
cd antigem
./scripts/build_all_apks.sh            # debug APK for arm64 phones
```

The script builds the bridge and the app, and copies the APK to `output/` as `AntiGem-v<version>-debug.apk`.

| Option | Builds |
| :--- | :--- |
| *(none)* | The normal arm64 app, debug |
| `--release` | A release build (needs your own signing key) |
| `--chroot` | The arm64 app with the Ubuntu chroot's Linux bridge (`-chroot` APK) |
| `--x86_64` | The x86_64 app (emulators, Intel/AMD devices), with the chroot bridge |

The version comes from `version.json` (the newer of its stable release and its beta).

> [!NOTE]
> A build you make yourself is signed with a different key than the official releases, so it can't update an installed official app (Android says "App not installed"). Back up and uninstall first, or install it on another phone or an emulator. The debug build uses its own package name (`ai.antidev`), so it installs next to the official app.

## How the code is organized

```text title="The repository"
antigem/
├── app/src/main/
│   ├── java/ai/antigem/
│   │   ├── data/          agent backends (agy, claude, opencode, codex), terminal, ADB, automation, notes, updater…
│   │   ├── domain/        chat models and parsing
│   │   └── ui/            Compose screens: chat, IDE, browser, notes, settings…
│   ├── java/com/termux/   Termux's terminal-view widget
│   └── assets/browser-runtime/  the plugin host and its Chrome API
├── agy_ide_bridge/        the Go bridge: agy hub, agent relays, Git, plugins
├── extensions/            bundled plugins
├── extension_docs/        plugin SDK docs and examples (also on this site)
├── mini_app_docs/         mini app SDK docs (also on this site)
├── scripts/               build, backup and restore scripts
└── version.json           version and changelog used by the in-app updater
```

See [How AntiGem works](../01-getting-started/03-how-it-works.md) for how the parts fit together.

## Contribute

- **Bugs and ideas:** [GitHub issues](https://github.com/santoshkurmi/antigem/issues). See [Getting help and reporting bugs](../08-help/04-get-help.md).
- **Code:** fork, make a branch, and open a pull request with what you changed and why.
- **These docs:** every page has **Edit this page on GitHub** at the bottom; the docs live in the [website repository](https://github.com/santoshkurmi/antigem-website). See [Markdown guide](../13-writing-docs/01-markdown-guide.md).
- **Talk first** about big changes in the [Discord](https://discord.gg/pJvvTDTc6G).
