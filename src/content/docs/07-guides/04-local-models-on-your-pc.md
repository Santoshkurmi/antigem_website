---
title: Use Ollama or LM Studio on your PC
description: Run models on your own computer and use them from AntiGem over your Wi-Fi, with OpenCode.
updated: 2.0.4-beta.2
---

At the end, OpenCode on your phone uses a model running on your computer: free, private, and no internet needed once the model is downloaded.

**Before you start:** a computer on the same Wi-Fi as your phone, with [Ollama](https://ollama.com) or [LM Studio](https://lmstudio.ai). A model that can call tools (coding agents need this).

:::steps
### Let the model server accept connections from your Wi-Fi

By default both only answer on the computer itself.

- **Ollama:** start it with `OLLAMA_HOST=0.0.0.0 ollama serve` (or set `OLLAMA_HOST=0.0.0.0` in its settings). It listens on port **11434**.
- **LM Studio:** start its local server and turn on serving on the local network. It listens on port **1234**.

Allow the port in your computer's firewall.

### Find your computer's address

Your computer's local IP address, like `192.168.1.20` (in its network settings, or `ip addr` / `ipconfig`). Check from the phone: open `http://192.168.1.20:11434` in AntiGem's browser; Ollama answers "Ollama is running".

### Add it to OpenCode

**Settings → OpenCode → Custom providers**: add an OpenAI-compatible provider with the base URL `http://192.168.1.20:11434/v1` (Ollama) or `http://192.168.1.20:1234/v1` (LM Studio), no key needed. Use **Fetch from endpoint** to list the models, and keep **Tools** on for the models you'll code with. See [Bring your own models](../02-agents/07-bring-your-own-models.md).

### Pick the model and chat

Pick it in the model chip of an OpenCode chat.
:::

## Good to know

- The phone and the computer must be on the same network, and the computer awake.
- Small local models often struggle with long coding tasks. Bigger ones need a strong computer.
- You can also run small models on the phone itself, but they're slow; a computer is much better.

## If something goes wrong

:::details OpenCode can't reach the model server
Open the address in AntiGem's browser first. No answer: the server only listens on the computer itself (see step 1), the firewall blocks the port, or the IP address is wrong. Guest Wi-Fi networks often block devices from seeing each other.
:::

:::details The model answers but never edits files
It doesn't support tool calling, or **Tools** is off for it in the provider editor. Pick a model that supports tools.
:::
