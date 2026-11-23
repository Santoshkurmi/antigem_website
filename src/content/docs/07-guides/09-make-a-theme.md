---
title: Make your own theme
description: Ask an agent to create a color theme for AntiGem, check it, and tweak it.
updated: 2.0.4-beta.2
---

At the end, AntiGem uses a color theme you designed (by describing it), in the chat, the editor and the terminal.

:::steps
### Add the Theme preset

In an agent's MCP servers, tap **Theme**. See [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md#theme). Start a new chat.

### Describe the theme

```text title="Prompt"
Create a dark theme called "Deep Sea": very dark navy background, teal accent,
soft coral for warnings, and code colors that are easy on the eyes. Check that
all text is readable, then apply it.
```

The agent sees every color the app uses, creates the theme, checks the readability warnings, fixes them, and applies it.

### Tweak it

"Make the accent a bit brighter", "the code comments are too dark". Each change shows right away.

### Find it later

**Settings → Themes** (or the **Themes** button in the drawer): your theme is in the gallery, marked **Custom**. See [Themes](../06-settings/02-themes.md).
:::

## Tips

- Start from a built-in theme: "duplicate Nord and make the background warmer".
- Make a matching light theme too, and set the mode to **Auto (System)**.
- Ask for an export to share it with friends; they can import it the same way.
- Jarvis can switch themes by voice: "switch to Deep Sea".
