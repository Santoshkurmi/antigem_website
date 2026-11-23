---
title: FAQ
description: Short answers to the questions people ask most. Cost, accounts, privacy, root, storage, offline use and more.
updated: 2.0.4-beta.2
---

## Cost and accounts

:::details Is AntiGem free?
Yes. The app is free and open source (GPLv3). The AI models are not AntiGem's: you use your own accounts. What that costs depends on your plan (Google, Claude, ChatGPT) or your API keys. OpenCode also has free models that need no account.
:::

:::details Which account do I need?
At least one of: a Google account (Antigravity), a Claude subscription or Anthropic Console account (Claude Code), a ChatGPT account (Codex), or an API key from almost any provider (OpenCode). With OpenCode's free models you need none. See [Choosing an agent](../02-agents/01-overview.md).
:::

:::details Can I use my own API keys, OpenRouter or local models?
Yes. OpenCode works with 200+ providers and any OpenAI-compatible API, including Ollama and LM Studio. Claude Code can use OpenRouter, Kimi, DeepSeek, Z.ai and any Anthropic-compatible API. See [Bring your own models](../02-agents/07-bring-your-own-models.md).
:::

:::details Can I use several agents at the same time?
Yes. Turn on as many as you like in **Settings → Agents**, and pick the agent for each new chat. Several chats can work at once.
:::

## Privacy and safety

:::details Is my code sent anywhere?
Only to the AI provider of the agent you use (Google, Anthropic, OpenAI, or the provider you set up), because the model needs to see it to help. AntiGem has no server of its own in between. Your sign-ins stay on your phone.
:::

:::details Does AntiGem collect data?
It counts how many people use the app: app opens, an anonymous install ID, session counts, phone model, Android and app version. It doesn't collect chats, prompts, code, files, terminal output, account emails or API keys.
:::

:::details Can an agent break my phone?
Agents work inside AntiGem's own Linux environment, which can't change the rest of Android. They can change your projects and, if you allowed **Files**, files in your phone's storage. Approvals and [checkpoints](../05-power-features/11-project-checkpoints.md) keep you in control. Features that reach further (ADB Connect, Android automation, root) are off until you turn them on.
:::

## Phone and system

:::details Which phones does it run on?
Android 7.0 or newer, with a 64-bit processor for the built-in Linux environment (nearly all phones). 32-bit phones can use [server mode](../05-power-features/02-server-mode.md). Emulators and Intel/AMD Chromebooks use the x86_64 APK. See [What to download](../01-getting-started/04-downloads.md).
:::

:::details Is there an iPhone version?
No, AntiGem is Android only. On a computer there's [AntiGem for VS Code](../09-other-apps/01-vscode-extension.md).
:::

:::details Do I need root?
No. Root is only needed for optional extras: the [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md), and root as one of the [device access](../05-power-features/07-device-access.md) modes.
:::

:::details Is AntiGem a Termux fork? Do I need Termux?
No to both. The app was written from scratch. It uses Termux's packages for its Linux environment and Termux's terminal display, and installs next to the Termux app without needing it. See [How AntiGem works](../01-getting-started/03-how-it-works.md).
:::

:::details Why isn't it on the Play Store?
AntiGem is distributed through its GitHub releases, and it updates itself from there. See [Install AntiGem](../01-getting-started/05-installation.md).
:::

:::details How much storage does it use?
About 2 GB for the Full Linux environment, plus the agents you install, the packages you add and your projects. `df -h ~` in the terminal shows the free space.
:::

:::details Does it drain the battery?
An agent mostly waits for the AI provider, which uses little power. Builds, servers and big installs use the processor like on any computer. Stop servers and agent programs you don't need (see [Debugging tools](./02-debugging.md#running-agent-programs)).
:::

:::details Does it work offline?
The terminal, the editor, Git and your files work offline. The agents need the internet to reach their AI provider, unless you use a local model (for example Ollama on your PC on the same Wi-Fi). See [Bring your own models](../02-agents/07-bring-your-own-models.md).
:::

## Files and data

:::details Where are my files?
Projects can live in AntiGem's own home folder (inside the app) or in your phone's storage (with the **Files** permission). The terminal's home is `~`. See [Projects](../03-using-the-app/04-projects.md).
:::

:::details How do I back up or move to a new phone?
**Settings → Backups & Restore → Back up environment**, then restore it on the new phone's setup screen with **From a ZIP file**. See [Move to a new phone](../07-guides/11-move-to-a-new-phone.md).
:::

:::details What happens if I uninstall?
Everything inside the app is deleted: the Linux environment, chats, sign-ins and projects in AntiGem's folders. Back up first. See [Updating and uninstalling](../01-getting-started/09-updating-and-uninstalling.md#uninstalling).
:::

## The project

:::details Who makes AntiGem? Can I help?
AntiGem is open source on [GitHub](https://github.com/santoshkurmi/antigem). Bug reports, ideas and pull requests are welcome. See [Getting help and reporting bugs](./04-get-help.md) and [Build AntiGem from source](../10-developers/03-build-from-source.md).
:::

:::details Where can I ask questions?
In the [Discord](https://discord.gg/pJvvTDTc6G), or open an issue on GitHub. See [Getting help](./04-get-help.md).
:::
