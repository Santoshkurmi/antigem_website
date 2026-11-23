---
title: Markdown guide
description: How to add a docs page, and every Markdown feature these docs support, with examples.
---

Docs pages live in `website/src/content/docs`. Each `.md` file is a page, each folder is a group in the sidebar.

## Add a page

:::steps
### Create the file

Put a `.md` file in a folder. The number in front sets the order and is left out of the URL:

```text title="Files and URLs"
src/content/docs/
  01-getting-started/          -> sidebar group "Getting started"
    02-installation.md         -> /docs/getting-started/installation
  04-power-features/
    01-jarvis.md               -> /docs/power-features/jarvis
```

### Add the front matter

Start the file with a title and a one-line description. The description shows under the title, in search and in link previews.

```md title="02-installation.md"
---
title: Install AntiGem
description: Download the APK from GitHub and install it on your phone.
sidebar: Installation   # optional: a shorter name for the sidebar
draft: true             # optional: shows a "Draft" badge
---

Your text starts here. Don't add a # title: it comes from the front matter.
```

### Save

With `pnpm dev` running, the page shows up at once. A new folder becomes a new sidebar group. To name a group differently from its folder, add a `_meta.json` next to the pages: `{ "title": "Writing these docs" }`.
:::

## Text

Normal Markdown works: **bold**, *italic*, `code`, [links](https://github.com/santoshkurmi/antigem), lists, tables, ~~strikethrough~~ and <kbd>Ctrl</kbd> + <kbd>C</kbd> keys.

- [x] Task lists
- [ ] work too

Link to another page by its file, so the link keeps working in your editor: `[Install](../01-getting-started/02-installation.md)` becomes [Install](../01-getting-started/02-installation.md). Links like `/docs/agents/codex` work too.

## Headings

Use `##` for sections and `###` for sub-sections. They appear in **On this page** and in search.

## Screenshots

Put the image on its own line. The text in `[ ]` becomes the caption. The word in quotes sets the style:

````md
![A screenshot that already has a phone frame](/screens/settings.webp "phone")
![A plain screenshot, framed by the site](/screens/raw-capture.png "frame")
![A wide image](/images/diagram.png)
````

![Screenshots open full size when tapped](/screens/settings.webp "phone")

> [!TIP]
> Put new screenshots in `website/media/screens/` and run `pnpm images`. It makes small and large copies in `public/screens/`, and the docs pick the right size for each screen. Then write `/screens/<name>.webp`.

## Callouts

````md
> [!NOTE]
> Useful information.

> [!TIP] Your own title
> A tip with a custom title.
````

> [!NOTE]
> Useful information the reader should know.

> [!TIP]
> A helpful hint.

> [!IMPORTANT]
> Something they shouldn't miss.

> [!WARNING]
> Something that could go wrong.

> [!CAUTION]
> Something risky. Think twice.

## Steps

Wrap the steps in `:::steps` and `:::`. Each `###` heading starts a step. A `"phone"` screenshot inside a step sits beside the text on wide screens and under it on phones.

````md
:::steps
### Open settings

Tap the menu, then **Settings**.

![Settings](/screens/settings.webp "phone")

### Pick a theme

Choose one you like.
:::
````

:::steps
### Open settings

Tap the menu, then **Settings**.

![Settings](/screens/settings.webp "phone")

### Pick a theme

Choose one you like. This step has no screenshot.
:::

## Gallery

A row of screenshots people can swipe through.

````md
:::gallery
![Agents](/screens/agent_picker.webp)
![Models](/screens/model_picker_usage.webp)
![Chat](/screens/chat_agent_summary.webp)
:::
````

:::gallery
![Agents](/screens/agent_picker.webp)
![Models](/screens/model_picker_usage.webp)
![Chat](/screens/chat_agent_summary.webp)
![MCP servers](/screens/mcp_presets.webp)
:::

## Cards

A list of links shown as cards.

````md
:::cards
- [Install AntiGem](../01-getting-started/02-installation.md) — Download and set it up.
- [Jarvis](../04-power-features/01-jarvis.md) — Use the app by voice.
:::
````

:::cards
- [Install AntiGem](../01-getting-started/02-installation.md) — Download and set it up.
- [Jarvis](../04-power-features/01-jarvis.md) — Use the app by voice.
:::

## Fold-outs

````md
:::details Why isn't it on the Play Store?
Some answer.
:::
````

:::details Why isn't it on the Play Store?
The text inside can use any Markdown.
:::

## Code

Code gets colors for its language, a copy button, and an optional title.

````md
```bash title="Terminal"
pkg install python nodejs git
```
````

```bash title="Terminal"
pkg install python nodejs git
python -m http.server 8080
```

```json
{ "version_name": "2.0.3", "is_critical": false }
```

## Tables

| Syntax | What it makes |
| :--- | :--- |
| `> [!TIP]` | A callout |
| `:::steps` | Numbered steps |
| `"phone"` after an image | A phone-sized screenshot |

> [!WARNING]
> Containers like `:::steps` can't be put inside each other, and can't contain a line that starts with `:::`.

Need something Markdown can't do, like an interactive demo? Write the page as a [Solid component](./02-solid-pages.tsx) instead.
