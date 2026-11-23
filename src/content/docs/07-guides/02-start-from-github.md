---
title: Start from a GitHub repository
description: Clone a repository onto the phone, open it as a project, and ask the agent to explain it.
updated: 2.0.4-beta.2
---

At the end, a GitHub repository is on your phone as a project, and the agent has explained how it's built.

**Before you start:** an agent installed and signed in. For private repositories, sign in to GitHub first: [GitHub](../05-power-features/10-github.md).

:::steps
### Clone it

Either:

- **From your GitHub account:** **Settings → GitHub**, find the repository, tap **Clone and open**.
- **From any URL:** tap **Select Project** at the top of the chat and choose to clone from Git, then paste the repository's URL. See [Projects](../03-using-the-app/04-projects.md).
- **In the terminal:** `git clone https://github.com/owner/repo` in your projects folder, then pick the folder with **Select Project**.

### Pick it as the project

Make sure the chat's project (top of the chat) is the cloned folder. The agent works only inside it.

### Ask for a tour

```text title="Prompt"
Explain this project: what it does, how it's organized, how to run it, and
where I'd start to add a new feature. Keep it short.
```

### Run it

Ask: "Install what's needed and run it." Approve the commands. Some projects need packages that aren't in the Linux environment yet; the agent will try `pkg install …`.
:::

## Tips

- Start a new chat per task ("fix issue #12", "add tests"): shorter chats work better.
- Ask the agent to make a branch before changes: "make a branch called `fix-login` first".
- Turn on [checkpoints](../05-power-features/11-project-checkpoints.md) for the project, so you can undo any message.

## If something goes wrong

:::details Clone fails with "Authentication failed" or asks for a password
The repository is private, or git isn't set up with your GitHub sign-in. Sign in at **Settings → GitHub** and tap **Set up git**.
:::

:::details The project needs a program that doesn't exist on the phone
Some tools only exist for normal Linux. See [Known limitations](../08-help/05-limitations.md#the-linux-environment).
:::
