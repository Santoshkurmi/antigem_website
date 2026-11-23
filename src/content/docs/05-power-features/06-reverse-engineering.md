---
title: Reverse engineering
sidebar: "Reverse engineering (REA)"
description: "Set up REA so agents can take apart APKs, Flutter, React Native and native code: install, tool groups, on-demand or direct tools, and the REA preset."
updated: 2.0.4-beta.2
---

**REA** lets agents look inside Android apps and native code: decompile an APK's classes, read its manifest, resources and strings, inspect `.so` libraries, tell whether an app is Flutter, React Native or native, and look at the apps installed on your phone. REA is an open-source [MCP server](../01-getting-started/02-key-concepts.md#mcp-server) (github.com/morluto/rea). AntiGem installs it for you and connects it to any agent.

**Where:** **Settings → REA · Reverse Engineering** (the page title is **Reverse engineering with REA**).

> [!IMPORTANT]
> Only analyze apps you're allowed to: your own, open-source ones, or for security research you're permitted to do. Respect each app's license and the law where you live.

## How it works

- **REA runs in Ubuntu.** AntiGem installs it in an Ubuntu container (proot-distro) inside the terminal, the same container [Android development](./05-android-development.md) uses. On a rooted phone with the [Ubuntu chroot](./04-ubuntu-chroot.md), it goes into the chroot instead.
- **The setup files are downloaded.** REA's setup scripts (`rea-setup.sh`, the `rea-mcp` launcher and the default tool groups) aren't part of the app. They come from the AntiGem plugins repository.
- **Agents reach it as an MCP server.** You add the **REA** preset to an agent's MCP servers. Any agent can use it: Antigravity, Claude Code, OpenCode or Codex.
- **Tool groups keep it small.** REA has over 200 tools. Tool groups choose which ones each REA server lets the agent use.

The top card shows **Not set up**, **Partly set up** or **Ready**. Everything for APK analysis takes about 1 GB.

> [!NOTE]
> REA works when the agent runs on this phone. In [server mode](./02-server-mode.md) the agents start MCP servers on the server, where this phone's REA isn't installed.

## Set it up

:::steps
### Setup files

Tap **Get setup files**. Later, **Check for update** looks for a new version and **Update to v…** gets it. **Change** lets you use another repository or branch (`owner/repo@branch`); **Default** restores `Santoshkurmi/antigem_plugins@main`.

### Install

Pick the parts and tap install, or install them one at a time with the button on each. Anything a part needs is added for you ("Also installs: …"). **Select all** and **Clear** change the ticks. Keep AntiGem open while it runs; **Stop** is safe, install the part again to finish it.

### Tool groups

Tap **Edit tool groups** to see or change which tools are in each group (see [Edit tool groups](#edit-tool-groups)). **Refresh tool list** reads REA's tools again after an update.

### Connect REA to your agent

Add the **REA** preset ("Reverse engineering · APK & native") where you manage the agent's MCP servers. It asks how the agent sees REA's tools and which groups it may use (see [The REA preset](#the-rea-preset)). Start a new chat.

### Check it works

**Run health check** runs `rea doctor`: it reports which engines REA can use (JADX, apktool, objdump, rizin, adb…). Engines you didn't install show as missing, which is fine.
:::

### The parts

**Needed for APK analysis:**

| Part | What it is | Space |
| :--- | :--- | :--- |
| **Ubuntu container** | proot-distro and Ubuntu 24.04 that REA runs in. Other Linux tools can use it too (`proot-distro login ubuntu`). | ≈150 MB |
| **Base tools** | curl, Python, git, unzip and procps. | ≈60 MB |
| **Java 21** | OpenJDK 21, headless. JADX and apktool run on it. | ≈290 MB |
| **Node.js 24** | Installed with nvm. REA runs on it. | ≈240 MB |
| **REA** | REA's command and MCP server. Install again to update it. | ≈60 MB |
| **JADX decompiler** | Java/Kotlin source of an APK's classes and methods, the manifest and references. | ≈45 MB |
| **apktool** | Manifest, resources and strings. | ≈16 MB |
| **MCP launcher** | `rea-mcp` (the command agents start), `rea-shell` and the tool group filter. | <1 MB |

**Optional:**

| Part | What it is | Space |
| :--- | :--- | :--- |
| **Native code tools** | objdump and rizin for `.so` libraries (`libapp.so`, `libflutter.so`, JNI code). | ≈40 MB |
| **adb** | For REA's phone tools: installed apps, logcat, screenshots. | ≈10 MB |
| **React Native (hermes-dec)** | Decompiles Hermes bytecode, the `index.android.bundle` of most React Native apps. | ≈40 MB |
| **Debugger (gdb)** | Debugging native programs in the container. | ≈70 MB |
| **Firmware (binwalk)** | Finding and extracting firmware images. | ≈30 MB |

## The REA preset

When you add the **REA** preset to an agent, a window opens: **Add REA to <agent>**. If REA isn't installed yet it says so, with **Open REA setup**.

### Server name

The name of this REA server. Type an existing name to change that server instead of adding a new one. You can add REA to several agents, each with its own choices.

### How the agent sees REA's tools

- **On demand** (**Recommended**): the agent gets 4 small tools. It lists REA's tools by name, reads the details of the ones it needs, then runs them. The context stays small however many tools you allow. The first use of a tool takes 1–2 extra steps. Tools that change things (installing apps, debuggers, Frida…) run through their own tool, so you can approve them separately.
- **Directly**: every allowed tool is a normal MCP tool, so the agent uses it straight away. But every tool's description is sent with every request: the default groups cost about 24k tokens, all of REA about 75k. Allow only a few groups.

### Tools the agent may use

- **Chosen tool groups**: tick the groups this server offers. Each shows its size.
- **All REA tools**: every tool.

**Default:** Basics, Android apps, Flutter, Phone (adb) and Native code.

### Also offer directly (optional)

In On demand mode, you can pick groups whose tools are offered directly too, skipping the lookup step. Each adds its size to every request. Usually not needed.

The window shows what your choice costs in context per request, and warns when it gets over 40k tokens: agents then get slower and use up their context sooner.

### Full output schemas

Describes the shape of every REA result in the tool list, which makes directly offered tools much bigger. **Default:** off. Leave it off unless your agent needs it.

Tap **Save**. Changes apply when the server restarts.

### Another agent, or by hand

For an agent without the preset, add a stdio (local command) MCP server with the command and environment variables the page shows under **Another agent, or by hand**. `REA_MODE` is `lazy` (on demand) or `direct`; `REA_GROUPS` is `all` or group ids such as `core,android`.

## Edit tool groups

**Where:** REA page → **Edit tool groups** (or **Edit tool groups** in the preset window).

Each REA server lets the agent use the tools of the groups chosen for it. A tool can be in several groups. Sizes are what a group costs per request when its tools are offered directly; on demand, groups cost nothing up front. Tools marked **✎** change things (apps, files, sessions).

The built-in groups:

| Group | For |
| :--- | :--- |
| **Basics** | Session status, settings, evidence bundles, generic file inspection. Most work needs these. |
| **Android apps** | APK manifest, permissions and components, Java/Kotlin classes (JADX). |
| **Flutter** | Flutter build identity and the Dart snapshot (`libapp.so`) strings. |
| **Phone (adb)** | This phone or another device over adb: installed apps, pulling APKs, logcat, screenshots. |
| **Native code** | `.so` and other binaries: objdump, rizin, ELF notes, exports. |
| **JavaScript & React Native** | JavaScript bundles (React Native without Hermes, Electron, web apps). |
| **Unity games** | Unity IL2CPP metadata. |
| **Debuggers** | GDB and rizin debug sessions. |
| **Frida** | Dynamic instrumentation (needs a reachable frida-server). |
| **Firmware** | Firmware images. |
| **Network captures** | Saved packet captures (pcap). |
| **Apple / iOS** | iOS and macOS apps. |
| **Windows & .NET** | Windows PE files and .NET assemblies. |
| **Decompiler session** | Functions, pseudo-code and cross references of an opened binary. |

What you can do:

- **New group**: make your own group with a **Name** and **What it is for (optional)**.
- A group's menu: **Edit tools** (search tools, tick or untick them, **Add … shown** / **Remove … shown**), **Rename / describe**, **Reset to default** (built-in groups) and **Delete**.
- **In no group**: tools that no group has, for example new tools from a REA update. **Add to…** puts one in a group.
- **Refresh tools**: read REA's tool list again.
- **Reset all groups to the defaults**.

Changes apply when the server restarts.

## Other options

### Try in chat

The page has example prompts:

```text title="Prompts"
Use REA to find the APK of the installed app com.example.app and summarize
its manifest and permissions.

Decompile the MainActivity of com.example.app with REA and explain what it does.
```

### REA skill

A skills-only plugin that teaches agents to use REA well (installed apps, split APKs, Flutter, React Native, native code), to check that REA works and tell you what to fix, and how to install REA from the terminal. Install it on the page. To give an agent the skill, type `/plu:` in its chat and pick **REA**, or add it with the **Custom Plugin** MCP preset → **REA**.

### Phone access (optional)

REA's phone tools (installed apps, pulling APKs, logcat, screenshots, starting apps) use adb. Install **adb** above, then **Set up ADB Connect** once. Without it, agents can still read installed apps' APKs (`pm path <package>` gives the path). See [ADB Connect, Shizuku and root](./07-device-access.md).

### Websites (optional)

Lets agents analyze websites open in AntiGem's browser with REA: page structure, scripts and the APIs they call, libraries, network and console errors, accessibility, storage and screenshots. REA only observes; agents open pages and click with the browser MCP.

Turn on **Browser connection**: it opens a local port so REA can reach the browser's tabs through Chrome DevTools. Only browser tabs are shown, never your chats. REA servers you added before only get the **Websites** group once it is chosen: open the REA preset, type the server's name, tick **Websites** and save.

### Set up in the terminal

**Show** lists the setup steps as commands, useful for setting up Claude Code, OpenCode or Codex by hand. Each step can be run again to repair or update it.

### Remove

- **Remove REA**: removes REA, and keeps the Ubuntu container (and Java and Node.js in it) for other uses.
- **Delete container**: deletes the whole Ubuntu container and frees all the space. Android development uses the same container.

## Troubleshooting

:::details The agent has no REA tools
Check that you added the **REA** preset to that agent, then start a new chat. In server mode, REA on the phone isn't available to the agents.
:::

:::details The health check says an engine is missing
Engines you didn't install show as missing, which is fine. Install the part that has it (for example **Native code tools** for objdump and rizin) if you need it.
:::

:::details The agent is slow, or runs out of context fast
REA's tools take up the agent's context. Use **On demand**, or fewer groups, in the REA preset window.
:::

:::details REA can't see the phone's installed apps
Install **adb** and connect it with **Set up ADB Connect**. Or ask the agent to use `pm path <package>` to find an app's APK.
:::

:::cards
- [Look inside an APK with REA](../07-guides/16-look-inside-an-apk.md) — The short guide.
- [Add your own MCP server](../04-tools-and-extensions/03-add-your-own-mcp-server.md) — How MCP servers are added.
- [ADB Connect, Shizuku and root](./07-device-access.md) — For REA's phone tools.
- [Build Android apps](./05-android-development.md) — Shares the Ubuntu container.
:::
