---
title: GitHub
description: Sign in with the GitHub CLI so git, the terminal and your agents can use your repositories, set your commit identity, and clone your repositories.
updated: 2.0.4-beta.2
---

Sign in to GitHub once, and git, the terminal and your agents can pull, push and open pull requests on your repositories, private ones too. It uses the official GitHub CLI (`gh`).

**Where:** ☰ → **Settings** → **GitHub**. The row shows whether you're signed in.

## Set it up

:::steps
### Install the GitHub CLI

If the page says **GitHub CLI not installed**, tap **Install gh**. (In [server mode](./02-server-mode.md) it runs on your server: install `gh` there, then tap **Refresh**. **Install guide** shows how.)

### Sign in with your browser

Tap **Sign in with browser**. The app asks GitHub for a sign-in code and shows **Your one-time code**. Tap **Copy code & open GitHub**, paste the code on the page that opens, and approve. The app finishes (**Finishing sign-in and setting up git…**).

### Check your commit identity

Under **Commit identity**, git needs a name and email for your commits (**Not set yet: git won't commit until it knows who you are.**). Set it here. If your GitHub email is private, the app offers your `…@users.noreply.github.com` address: it keeps your email private and still links commits to you.
:::

### Or use a personal access token

Tap **Use a personal access token instead**, then **Create a token on GitHub**. Classic tokens need the `repo` and `read:org` scopes (and `workflow` to push GitHub Actions files). Fine-grained tokens work as well. Paste it into **Token** and tap **Sign in with token**.

## The Account card

Once signed in (**SIGNED IN**), the page shows your **Username**, **Email**, **Repositories**, **Followers**, **Member since**, the **Token scopes**, where the token is stored, the **Git protocol**, and where the GitHub CLI **Runs on** (**This phone** or **Server**). **Open profile** opens your GitHub profile.

### Set up git

Connects git to your GitHub sign-in. Without this, git asks for a password (and fails) on private repositories and on push. The app does it at sign-in; tap it again if pushes stop working.

### Sign out

Signs out of GitHub on this phone (or the server).

## Your repositories

The list of your repositories, with **Search repositories** and **Reload repositories**. Archived ones are marked **Archived**. For each one:

- **Clone and open**: clones it into a project and opens it.
- **Open on GitHub**.
- **Copy clone URL**.

See [Start from a GitHub repository](../07-guides/02-start-from-github.md).

## Using GitHub from chats

After signing in, agents can use `git` and `gh` in their commands: "commit this and open a pull request", "list the open issues", "check why the CI failed". Their approvals show each command before it runs.

> [!NOTE]
> With the [Ubuntu chroot](./04-ubuntu-chroot.md) running the phone, this page shows **Termux only**. Install and sign in to `gh` inside Ubuntu instead (`apt install gh`, then `gh auth login`).

## Troubleshooting

:::details git push asks for a password or fails with "Authentication failed"
Tap **Set up git** on this page. If you used a token, check it has the `repo` scope (and `workflow` for Actions files) and hasn't expired.
:::

:::details "git won't commit until it knows who you are"
Set your **Commit identity** (name and email) on this page.
:::

:::details The browser sign-in never finishes
Make sure you approved the code on GitHub with the account you want. Tap **Refresh**. Or use a personal access token instead.
:::
