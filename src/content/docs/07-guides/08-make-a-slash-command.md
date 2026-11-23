---
title: Make your own slash command
description: Save a prompt you send often as a / command that works with every agent.
updated: 2.0.4-beta.2
---

At the end, typing `/review-pr` (or any name you like) sends your full, carefully written prompt.

:::steps
### Open Slash Commands

**Settings → Slash Commands** → **Add command**.

### Name it

**Name**: what you'll type after `/`, like `review-pr`. Letters, numbers, `-` and `_`.

### Describe it

**Description (shown in the / list)**: one line, like "Review my changes before a pull request".

### Write the prompt

**Expands to**: the full prompt. Put `$ARGUMENTS` where the text you type after the command should go:

```text title="Expands to"
Review the uncommitted changes in this project like a strict senior reviewer.
Focus on: $ARGUMENTS
List real problems only, most important first, with the file and line.
Don't change any code.
```

### Save and use it

Save. In any chat, type `/review-pr error handling`. The chat shows the short command; the agent gets the full prompt.
:::

## Ideas

| Command | Expands to |
| :--- | :--- |
| `/tests` | Write unit tests for `$ARGUMENTS`, run them, fix failures, report coverage. |
| `/explain` | Explain `$ARGUMENTS` to a beginner, with a small example. |
| `/commit` | Look at the changes, write a good commit message, and commit. |
| `/docs` | Update the README and code comments for the changes made in this chat. |

You can also attach a custom plugin (and one of its skills) to a command, so it always uses that plugin's tools. See [Slash commands](../04-tools-and-extensions/06-slash-commands.md).
