---
title: Skills
description: Instructions an agent loads only when it needs them. What skills are, where they come from, and how to add, update and remove them for each agent.
updated: 2.0.4-beta.2
---

A **skill** is a short guide that teaches an agent how to do one kind of task: "how to write release notes for this team", "how to use this API", "how to make a PDF report". The agent sees only each skill's name and one-line description, and reads the full guide when a task needs it. So you can have many skills without filling up the chat.

## What a skill looks like

A skill is a folder with a `SKILL.md` file in it (and sometimes extra files the guide refers to):

```markdown title="my-skills/release-notes/SKILL.md"
---
name: release-notes
description: Write release notes from the git log in our house style.
---

1. Read the commits since the last tag with `git log`.
2. Group them into Added, Changed and Fixed.
3. Write short, plain sentences. No commit hashes.
```

Skills are shared on GitHub in repositories with one or more of these folders.

## Where skills come from

- **The agent itself:** some agents come with built-in skills.
- **GitHub:** add any repository of skills (below).
- **Plugins:** Claude Code, Codex and Antigravity plugins can bring skills, and so can [custom AntiGem plugins](./04-custom-plugins.md) (pick one in the chat by typing `/plu:`).
- **A project:** Antigravity also reads skills inside the open project, in `.agents/skills/`.

## Add skills from GitHub

**Where:** ☰ → **Settings** → **Claude Code**, **OpenCode** or **Codex** → **Skills**

:::steps
### Tap Add skills from GitHub

### Enter the repository

A GitHub repository (`owner/repo`), or a link to a folder in one. Every folder with a `SKILL.md` in it is a skill.

### Pick the skills

The app lists the skills it found (**Looking for skills in the repository…**). Tick the ones you want (**Select all** / **Select none**) and tap **Add N skills**. A skill you already have says **Already added: adding it again updates it**.

### Start a new chat

The agent reads its skills when a chat starts: start a new chat after adding, updating or removing one.
:::

Your skills are listed under **Your skills**, with where each came from (a repository, or **Added by hand**). For each one:

### Update from GitHub

Downloads the newest version from the repository it came from.

### Remove

Deletes the skill's folder.

> [!NOTE]
> If the repository is a **plugin** or a **plugin marketplace** rather than plain skills, the app says so and points you to the agent's **Plugins** page instead.

## Antigravity

**Where:** ☰ → **Settings** → **Antigravity** → **Skills & Plugins**

Antigravity's page lists **Antigravity skills** by where they come from:

- **Global (Default)**: skills for every chat.
- **Workspace**: skills inside the open project (`.agents/skills/`).
- **Built-in**: skills that come with Antigravity.

It also has **Install a plugin from GitHub**: an Antigravity or Claude Code plugin (or a Claude Code marketplace, which installs all its plugins), given as `owner/repo` or a `github.com` link. Antigravity's own installer adds it, the same as `agy plugin install`. Installed bundles and the skills inside them are listed under **Installed Bundles & Extensions**, stored in `~/.gemini/config/plugins/`. See [Antigravity](../02-agents/02-antigravity.md).

## Skills vs. other ways to instruct an agent

| | Use it for |
| :--- | :--- |
| **Skill** | A how-to for one kind of task, read only when needed. |
| [Global context](./07-global-context.md) | Instructions every chat should always follow. |
| [Slash command](./06-slash-commands.md) | A prompt you send often, by typing `/name`. |
| Project instructions (`CLAUDE.md`, `AGENTS.md`) | Facts about one project. See your agent's page. |

## Troubleshooting

:::details "No skills found"
The repository (or folder) has no folder with a `SKILL.md` file. Check the link, or link straight to the folder that holds the skills.
:::

:::details The agent ignores my skill
Start a new chat (skills load at the start). Make the skill's `description` say clearly when to use it, since that's all the agent sees until it opens the skill. You can also ask for it by name: "use the release-notes skill".
:::
