---
title: Your first chat
description: Install and sign in to one agent, pick a project, send a message and see what the agent did.
updated: 2.0.4-beta.2
---

After [first launch](./06-first-launch.md), each agent needs to be installed and signed in once. This page takes you from the empty chat to a finished first task.

## Before you start

Pick the agent that matches an account you already have:

| You have… | Use |
| :--- | :--- |
| A Google account (Gemini plan, or free) | **Antigravity** |
| A Claude subscription or an Anthropic Console account | **Claude Code** |
| A ChatGPT account | **Codex** |
| No account, or your own API key | **OpenCode** (it has free models that need no account) |

More help choosing: [Choosing an agent](../02-agents/01-overview.md).

## Send your first message

:::steps
### Pick the agent

On the empty chat, tap the agent's name in the tabs in the middle of the screen. (If you turned on only one agent, there are no tabs.)

### Install it or sign in

The empty chat tells you what the agent still needs, with a button:

- **Antigravity:** **Sign In**, then sign in with your Google account.
- **Claude Code:** **Set up Claude Code** opens **Settings → Claude Code**, where you install it and sign in.
- **OpenCode:** **Install**. When it's ready, pick a free model or add a provider.
- **Codex:** **Install**, then **Sign in with ChatGPT** on the page that opens.

Each agent's page has the details: [Antigravity](../02-agents/02-antigravity.md), [Claude Code](../02-agents/03-claude-code.md), [OpenCode](../02-agents/04-opencode.md), [Codex](../02-agents/05-codex.md).

### Pick a project

Tap **Select Project** at the top. A project is the folder the agent works in: it reads and changes the files there. For a first try, create a new empty project. You can also chat without one. See [Projects](../03-using-the-app/04-projects.md).

### Check the model

The chip at the bottom left of the message box (next to **+**) shows the model. Tap it to pick another one. The default is fine to start with. See [Models, thinking and usage limits](../02-agents/06-models-and-usage.md).

### Type and send

Tap the message box (it says **Reply to …**), describe what you want, and tap **Send**. Try something small and checkable:

```text title="A good first prompt"
Make a simple to-do list web page in index.html, with a box to add items
and a button to remove them. Then start a web server so I can open it.
```

### Watch it work

The reply streams in. You'll see:

- **Thinking**: the model's reasoning, folded up (tap to open).
- **Tool cards**: each action, like reading a file, writing `index.html` or running a command. Tap a card to see the details.
- **Approvals**: depending on the agent's permission mode, it may stop and ask before it changes files or runs a command. Read what it wants to do, then allow or refuse.

To stop it at any time, tap **Stop** (the send button turns into it while the agent works).

### See the result

When it's done, the agent sums up what it did. Open the files it made in the IDE (from the app switcher, or a file link in the chat), and open the page it serves in the built-in browser. See [Build a web app and preview it](../07-guides/01-build-a-web-app.md).
:::

## What next?

- **Keep going in the same chat.** Ask for changes ("make the buttons bigger"). The agent remembers the chat.
- **Start a new chat for a new task.** Tap **New chat** (top right). Short, focused chats work better and use less of your limits.
- **Find old chats** in the drawer: tap **☰** (top left). See [Chat history](../03-using-the-app/03-chat-history.md).
- **Learn the chat screen**: [Chat](../03-using-the-app/02-chat.md).

## Troubleshooting

:::details The agent doesn't answer, or keeps spinning
Wait a little the first time: the agent starts in the background. If nothing happens after a minute, tap **Stop** and send again. Still nothing? See [Troubleshooting](../08-help/01-troubleshooting.md) and check the agent's status in **Settings** (its row shows whether it's ready).
:::

:::details It says I reached my limit
Your plan's usage limit is used up for now. The model picker shows when it resets. Pick a smaller model, wait, or use another agent. See [Usage limits](./02-key-concepts.md#usage-limits).
:::

:::details The agent asks for approval for everything
That's its permission mode. You can allow more without asking, for example file edits. See your agent's page for its modes, and [Permission mode](./02-key-concepts.md#permission-mode).
:::
