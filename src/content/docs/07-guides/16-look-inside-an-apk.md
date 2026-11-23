---
title: Look inside an APK with REA
description: Set up REA, connect it to your agent, and ask how an installed app is built and what it does.
updated: 2.0.4-beta.2
---

At the end, an agent can unpack and decompile Android apps (APK, Flutter, React Native and native code) and explain how they work.

> [!IMPORTANT]
> Only analyze apps you're allowed to: your own, open-source ones, or for security research you're permitted to do. Respect the app's license and the law where you live.

**Before you start:** AntiGem's Linux environment installed, and about 1 GB of free space for everything APK analysis needs.

:::steps
### Open REA

**Settings → REA · Reverse Engineering** (**Reverse engineering with REA**).

### Get the setup files

Tap **Get setup files**. REA's setup scripts aren't part of the app; they're downloaded from the AntiGem plugins repository.

### Install the parts you need

Pick the parts and install them together, or one at a time. Anything a part needs is added for you.

### Check it works

Tap **Run health check**. It reports which engines REA can use (JADX, apktool, objdump, rizin, adb…). Engines you didn't install show as missing, which is fine.

### Connect REA to your agent

Under **Connect REA to your agent**, add the **REA** preset to your agent's MCP servers. Pick **on demand** (recommended: a few small tools, the rest looked up when needed) or **direct**, and the tool groups. Start a new chat.

### Ask

Try one of the examples from the page:

```text title="Prompts"
Use REA to find the APK of the installed app com.example.app and summarize
its manifest and permissions.

With REA, is com.example.app a Flutter, React Native or native app? Show the evidence.

Decompile the MainActivity of com.example.app with REA and explain what it does.
```
:::

**Phone access (optional):** with [ADB Connect](../05-power-features/07-device-access.md) set up, REA can pull installed apps from the phone itself.

See [Reverse engineering](../05-power-features/06-reverse-engineering.md) for every option.
