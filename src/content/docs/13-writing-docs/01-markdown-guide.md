---
title: Markdown guide
description: How to add a docs page, and every Markdown feature these docs support, with examples.
---

Docs pages live in `src/content/docs`. Each `.md` file is a page, each folder is a group in the sidebar. The plan for every page (what it covers and which app code it comes from) is in `PLAN.md` at the root of the website repo.

## Add a page

:::steps
### Create the file

Put a `.md` file in a folder. The number in front sets the order and is left out of the URL:

```text title="Files and URLs"
src/content/docs/
  01-getting-started/          -> sidebar group "Getting started"
    05-installation.md         -> /docs/getting-started/installation
  05-power-features/
    01-jarvis.md               -> /docs/power-features/jarvis
```

### Add the front matter

Start the file with a title and a one-line description. The description shows under the title, in search and in link previews.

```md title="05-installation.md"
---
title: Install AntiGem
description: Download the APK from GitHub and install it on your phone.
sidebar: Installation   # optional: a shorter name for the sidebar
updated: 2.0.4          # the app version you checked the page against
draft: true             # optional: shows a "Draft" badge
---

Your text starts here. Don't add a # title: it comes from the front matter.
```

### Save

With `pnpm dev` running, the page shows up at once. A new folder becomes a new sidebar group. To name a group differently from its folder, add a `_meta.json` next to the pages: `{ "title": "Writing these docs" }`.
:::

## How to write a page

- **The app's code is the truth.** Copy labels exactly as the app shows them, and take defaults and conditions ("only on rooted phones") from the code. If you aren't sure, check on a phone. Never guess.
- **Simple English.** Short sentences, plain words, "you". Many readers don't speak English as their first language. Link technical words to [Key concepts](../01-getting-started/02-key-concepts.md) the first time.
- **Start with a Where line**, so readers can find the screen: `**Where:** ☰ (top left) → **Settings** → **Appearance**`. Buttons and rows in **bold**, paths joined with **→**.
- **Give every option its own `###` heading.** Headings appear in search and get a link (`/docs/settings/appearance#chat-text-size`), so anyone can send a link to one option. Under it: what it does, the default, when to change it.
- **Explain once, link everywhere else.** Each thing has one home page.
- **Problems go in fold-outs**: `:::details` with what the user sees as the title, then the cause and the fix.
- **Set `updated:`** to the app version you checked the page against.

## Text

Normal Markdown works: **bold**, *italic*, `code`, [links](https://github.com/santoshkurmi/antigem), lists, tables, ~~strikethrough~~ and <kbd>Ctrl</kbd> + <kbd>C</kbd> keys.

- [x] Task lists
- [ ] work too

Link to another page by its file, so the link keeps working in your editor: `[Install](../01-getting-started/05-installation.md)` becomes [Install](../01-getting-started/05-installation.md). Links like `/docs/agents/codex` work too.

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
> Put new screenshots in `media/screens/` and run `pnpm images`. It makes small and large copies in `public/screens/`, and the docs pick the right size for each screen. Then write `/screens/<name>.webp`.

### Screenshots that don't exist yet

Most pages need no pictures: the text says where everything is. Where a picture would really help, add it **before it exists**, with the same syntax. The caption says what to capture:

````md
![Settings → Appearance, top of the page](/screens/settings_appearance.webp "phone")
````

- **On the site** (`pnpm build`), a missing screenshot is left out completely: no box, no broken image, no gap. A step without its picture looks like a normal text step, and a gallery with no pictures isn't shown.
- **In `pnpm dev`**, it shows as a dashed **Screenshot needed** box with its file name, like the one below. The pill in the bottom-left corner shows how many a page has and hides them, so you can see the page exactly as readers will.
- **To add it**, save the picture as `media/screens/settings_appearance.png` and run `pnpm images`. The page picks it up by itself.
- **`pnpm shots`** lists every missing screenshot (page, file name, caption). `pnpm shots --md` prints it as a checklist.

![An example placeholder: this picture doesn't exist](/screens/example_placeholder.webp "phone")

**Screenshot rules:** name files `<area>_<screen>[_<detail>]` (`setup_linux`, `chat_tool_card`, `settings_appearance`). Take a full-width phone capture, crop the status bar off, and use `"frame"` for it. Use the default theme (Midnight Aurora) unless the page is about themes. No real names, emails or private chats.

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
- [Install AntiGem](../01-getting-started/05-installation.md) — Download and set it up.
- [Jarvis](../05-power-features/01-jarvis.md) — Use the app by voice.
:::
````

:::cards
- [Install AntiGem](../01-getting-started/05-installation.md) — Download and set it up.
- [Jarvis](../05-power-features/01-jarvis.md) — Use the app by voice.
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
