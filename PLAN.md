# AntiGem docs: the plan

The goal: **the docs answer every question, so nobody has to ask.** What each part of the app is, where it is,
what every option does, how to set things up, how they work inside, and how to fix problems.

- The docs live only on this website: `src/content/docs/` (Markdown pages, see `07-writing-docs/01-markdown-guide.md`).
- The repo's `user_docs/` folder will be deleted once this is done. Don't copy from it: it's partly out of date.
  Read it for ideas at most.
- **The phone app is the main subject.** AntiGem for VS Code and the Chrome extension get one short page each.
- **Text first.** Every step says where things are in words, so a page works without pictures. Screenshot
  placeholders go only where a picture really helps, and anyone can fill them later (Phase 0).

Work through the phases in order. Each page is a checkbox: tick it when the page is written, checked against the
code, and its `draft: true` is removed.

---

## How to write a page

### Rules

1. **The code is the truth.** Labels, option names, defaults, conditions ("only on rooted phones", "only in
   server mode") come from the Kotlin source. Copy labels exactly as the app shows them. If the code doesn't make
   something clear, leave it out or check it on a phone. Never guess.
2. **Simple English.** Short sentences, plain words, "you". Many readers don't speak English as their first language.
   Explain a technical word the first time, or link it to the glossary.
3. **Say where things are.** Every page starts with a **Where** line:
   `**Where:** ☰ (top left) → **Settings** → **Appearance**`. Use the same names the app uses: **☰** opens the
   drawer, **⋮** is a menu, buttons and rows in **bold**, paths joined with **→**.
4. **Every option gets its own `###` heading.** Headings show in search and get a link (`#chat-text-size`), so
   anyone can send a link straight to one option. Under it: what it does, the default, when to change it, and
   anything to watch out for.
5. **Don't repeat, link.** A thing is explained fully in one place. Other pages link to it.
6. **No developer words in user pages.** No class names, file paths of the app's code or internal ids, unless
   the reader needs them (a terminal command or a folder on the phone).
7. **Front matter:** `title`, `description` (one line, shown in search and previews), optional `sidebar`, and
   `updated: 2.0.4` (the app version the page was checked against; see Phase 0).

### Page templates

**Concept or feature page** (Jarvis, MCP, Mini Apps…)
1. One paragraph: what it is and what you use it for.
2. **Where** line.
3. `## How it works`: plain-language explanation, a small text diagram (a ```text code block) if it helps. The site has no Mermaid renderer.
4. `## Set it up`: `:::steps`.
5. `## Using it`: the everyday things.
6. `## Options`: each option as `###` (or a link to its settings page).
7. `## Troubleshooting`: `:::details` fold-outs, one per problem: symptom as the title, cause, fix.
8. `:::cards` with related pages.

**Settings page** (one per settings section)
1. One line: what this page is for. **Where** line.
2. Optional: when this page or a row is hidden (conditions from code).
3. Each option as `###`: what it does · **Default:** … · when to change it.
4. Related pages.

**How-to guide**
1. One line: what you'll have at the end. "Before you start": what you need.
2. `:::steps`, each step one action with its exact path and labels.
3. "Check that it worked", "If something goes wrong" (links to Help).

**Troubleshooting entry**
`:::details <What the user sees, in their words>` → why it happens → the fix, step by step → what to send if it
still fails.

### Sources (read these, in this order)

`A/` = `app/src/main/java/ai/antigem/`

| Source | What it gives |
| :--- | :--- |
| `A/ui/**` | The screens: labels, buttons, dialogs, when things show |
| `A/ui/settings/SettingsDialog.kt` | `SettingsSection` (every settings page: title and subtitle), `MainSettingsMenu` (the real order and groups), and most settings pages |
| `A/data/preferences/**` | Defaults of options |
| `A/data/**` | How features work (agents, Jarvis, REA, chroot, mini apps, PC, server…) |
| `docs/jarvis.md`, `docs/chroot.md`, `docs/remote-server.md`, `docs/connect-to-pc-protocol.md` | Long guides already written: move them into the website, updated |
| `extension_docs/` | Custom plugins SDK (Phase 10) |
| `mini_app_docs/` | Mini apps SDK (Phase 10) |
| `README.md` | Feature list, download notes, Termux compatibility, how it works |
| `.github/workflows/release.yml`, `scripts/build_all_apks.sh`, `version.json` | What each release contains, beta channel |
| `antigem-vscode/README.md`, `antigem-chrome-extension/README.md` | The two companion pages |
| A phone with the debug app (`ai.antidev`) | To check anything the code leaves unclear |

---

## The sidebar (final shape)

The number in front of a name sets the order and is left out of the URL. Existing links from the site
(`Footer.tsx`, `Home.tsx`, `HowItWorks.tsx`) are `getting-started/installation`, `agents/overview`,
`power-features/jarvis` and `help/troubleshooting`: these slugs must stay.

```text
01-getting-started/     Getting started
02-agents/              Agents
03-using-the-app/       Using the app            (was 03-workspace)
04-tools-and-extensions/ Tools & extensions      (MCP, plugins, skills, slash commands, context, memory)
05-power-features/      Power features           (was 04-power-features)
06-settings/            Settings                 (was 05-customize)
07-guides/              Guides                   (how-to tasks)
08-help/                Help                     (was 06-help)
09-other-apps/          Other AntiGem apps       (VS Code, Chrome, Termux:API, Termux:X11)
10-developers/          For developers           (overviews: build mini apps, build plugins, build AntiGem)
11-mini-app-sdk/        Mini app SDK             (mini_app_docs/, moved in by a script)
12-plugin-sdk/          Plugin SDK               (extension_docs/, moved in by a script)
13-writing-docs/        Writing these docs       (was 07-writing-docs)
```

---

## Phase 0: groundwork (code, small)

The only phase with code changes. Everything after it is writing.

### 0.1 Screenshot placeholders

A screenshot that doesn't exist yet is written exactly like a real one:

```md
![Settings → Appearance, top of the page](/screens/settings_appearance.webp "phone")
```

- [x] **`plugins/markdown.ts`: find missing images.** It already checks `public/screens/480/<name>.webp`. If
      neither that nor the plain file exists, the image is *missing*.
- [x] **Production build (`pnpm build`): missing images are left out completely.** No figure, no caption, no
      broken image, no empty space. A `:::steps` step whose picture is missing renders as a normal text step. A
      `:::gallery` drops missing pictures, and disappears if none are left. Readers never see that a picture was
      planned.
- [x] **Dev (`pnpm dev`): missing images show as a placeholder box.** A dashed box the size of a phone screenshot
      (or a wide one for `"frame"`/wide images) with a camera icon, **Screenshot needed**, the file name
      (`settings_appearance`) and the caption, so whoever takes it knows what to capture.
- [x] **Dev toggle: show or hide placeholders.** A small pill in the corner of docs pages, only in dev:
      **Placeholders: shown / hidden**, remembered in `localStorage`. Hidden = the page looks exactly like the
      production build (steps go back to text-only layout). Implement with a class on `<html>` and CSS, so
      toggling is instant and needs no reload.
- [x] **Adding a picture needs no page edit.** Put `settings_appearance.png` in `media/screens/`, run
      `pnpm images`. The docs plugin watches `public/screens/` in dev and reloads the pages that use it, so the
      placeholder turns into the screenshot by itself.
- [x] **`pnpm shots`** (`scripts/shots.mjs`): lists every missing screenshot as a to-do list (page, file name,
      caption, style), and every image in `media/screens/` that no page uses. `pnpm shots --md` writes it as a
      Markdown checklist to paste into an issue.
- [x] **Screenshot rules** in the Markdown guide page: file names `<area>_<screen>[_<detail>]`
      (`setup_linux`, `chat_tool_card`, `settings_appearance`); full-width phone capture with the status bar
      cropped off; default theme (Midnight Aurora) unless the page is about themes; no real names, emails or
      private chats; `"frame"` for raw captures.

Already captured (in `media/screens/`, status bar cropped): `setup_permissions`, `setup_linux`,
`setup_installing`, `setup_done`, `setup_agents`, `setup_terminal_icon`, `setup_gemmy`, `main_empty_chat`,
`update_dialog`, `codex_account`. (`pnpm images` done.) More raw captures (unused) are in
`~/agy_cli_hub/antigem-demo-ref/`.

### 0.2 Structure

- [x] Move and rename the folders to the sidebar shape above. Add a `_meta.json` where the folder name isn't the
      right title (`{ "title": "Tools & extensions" }`, `{ "title": "Other AntiGem apps" }`,
      `{ "title": "For developers" }`).
- [x] Check that the four slugs linked from the site still work.
- [x] **Broken links fail loudly.** `markdown.ts` already warns about a link to a missing page. Make `pnpm build`
      list all of them at the end (and exit with an error), so no page ships with a dead link.
- [x] **`updated:` in front matter.** Show it small under the page title ("Checked with AntiGem 2.0.4"), so
      readers and writers can see when a page may be out of date.
- [x] Update the Markdown guide page (`13-writing-docs/01-markdown-guide.md`) with: placeholders, `pnpm shots`,
      the Where line, the templates and rules above (short version).

---

## Phase 1: Getting started (`01-getting-started/`)

The first pages people read. After this phase someone can download, install, set up and send a first message
without help.

- [x] **`01-introduction.md`: Introduction** (exists, review)
  - What AntiGem is in one paragraph; what you can do; what it is *not* (not a Termux fork, not a cloud
    service: runs on your phone, your accounts).
  - "Where to start" cards. Keep it short.
- [x] **`02-key-concepts.md`: Key concepts** (new). *The "what is what" page. Every other page links here.*
  - One `###` per term, 2 to 4 sentences each, plain language, with a link to its full page:
    agent · model · provider · plan / subscription vs API key · chat · project / workspace folder ·
    Linux environment (rootfs) · Termux packages (`pkg`/`apt`) · the bridge (`agy_ide_bridge`) · the
    Antigravity hub (`agy`) · MCP and MCP server · built-in MCP presets · tool call · approval · permission
    mode · plan mode · thinking / effort · context window · quota / usage limits · subagent · skill ·
    plugin (custom AntiGem plugin) · slash command · global context · agent memory · checkpoint ·
    artifacts · STEM blocks · server mode · Where agents run · Ubuntu chroot · Connect to PC · Jarvis ·
    Gemmy · floating chat · mini app · `.agapp` · Developer mode · ADB Connect / Shizuku / root ·
    Android automation · REA · EGM · X11 desktop · Termux:API.
  - Sources: everything; `README.md` "What it is", "How it works".
- [x] **`03-how-it-works.md`: How AntiGem works** (new, short; links to the site's How it works page for more)
  - App ↔ bridge ↔ agents diagram (from `README.md`), in plain words: what runs where, why there's a Linux
    environment, why it's not proot, what server mode / chroot / Connect to PC change.
- [x] **`04-downloads.md`: What to download** (new). *Answers "which file do I need?"*
  - The releases page and how to read it: **Latest** vs **Pre-release** (beta), Assets list.
  - Table, one row per file, "who it's for":
    - `AntiGem-vX.apk`: almost everyone (arm64 phones). 32-bit ARM phones can install it but only use
      **server mode** (the local Linux environment is arm64 only).
    - `AntiGem-vX-chroot.apk`: rooted phones using the Ubuntu chroot (the normal app offers to install it from the
      chroot page).
    - `AntiGem-vX-x86_64.apk`: emulators, Intel/AMD Chromebooks (includes chroot support).
    - `*-mapping.zip`: not for users (decodes crash reports for developers).
    - Source code archives: not needed to use the app.
  - How to tell your phone's CPU (the setup screen shows it: `aarch64`, …); how to check Android version (7.0+).
  - Other downloads and when you need them: **Full environment** rootfs (GitHub / Hugging Face, downloaded by the
    app itself), Termux:API companion, Termux:X11 app and `.deb`, AntiGem for VS Code, Chrome extension.
  - Betas: how to get them (**Settings → Updates**), that they install over stable and keep data.
  - Sources: `.github/workflows/release.yml`, `scripts/build_all_apks.sh`, `version.json`, `README.md` Download,
    `A/ui/settings/UpdateSettingsScreen.kt`, `A/data/updater/`.
- [x] **`05-installation.md`: Install AntiGem** (exists as `02-installation.md`, review; the number changes but
      the slug stays `getting-started/installation`)
  - Steps: download, allow installs from browser, install, open. Play Protect warning (why, what to do).
  - Fold-outs: "App not installed" (signature / other build / partial download), install next to Termux and the
    old app, 32-bit phones, Android 7–8.
- [x] **`06-first-launch.md`: First launch** (exists as draft; rewrite fully)
  - Every setup screen in order, every choice explained:
    1. Notification permission prompt.
    2. **Welcome to AntiGem**: Notifications (required: why), Files (All files access: why, what breaks without
       it), Microphone (what for). "You can change these anytime in Android settings."
    3. **Set up your Linux environment**: **Full environment** (Recommended, ~350 MB, GitHub / Hugging Face
       links), **Minimal** (~33 MB), **Ubuntu chroot (root)** (opens its own setup page), **From a ZIP file**
       (backup or custom rootfs). CPU info line. **Install**, **Skip for now**, **Skip**: when to skip (server
       mode / Connect to PC only).
    4. **Installing**: the four stages (Download, Unpack files, Configure shell, Verify), **Show details** log,
       **Continue in background**. **You're all set** → **Get started**.
    5. Possible **New Update Available** dialog (Later / Update).
    6. **Step 1 of 2: Choose your agents** (each agent's one-line description; "Continue with N agents").
    7. **Step 2 of 2: Terminal App Setup**: the **Standalone Terminal App Icon** (AntiTerm) and what it adds to
       the launcher.
    8. **Meet Gemmy**: Show Gemmy toggle, Let's go.
    9. The empty chat: agent tabs, **Sign in** / **not installed** states → next page.
  - Shots (already captured): `setup_permissions`, `setup_linux`, `setup_installing`, `setup_done`,
    `setup_agents`, `setup_terminal_icon`, `setup_gemmy`, `main_empty_chat`, `update_dialog`.
  - Sources: `A/ui/onboarding/*`, `A/ui/settings/FullScreenLocalToolsInstaller.kt`,
    `A/ui/settings/LocalToolsInstallDialog.kt`, `A/ui/updater/AppUpdateDialog.kt`, `MainActivity.kt`.
- [x] **`07-first-chat.md`: Your first chat** (new)
  - Install + sign in to one agent (short, links to each agent page), pick a project (or none), type, send,
    watch it work, approve a tool call, see the answer, open the files it made.
- [x] **`08-moving-from-the-old-app.md`: Moving from the old app** (exists, review)
- [x] **`09-updating-and-uninstalling.md`: Updating and uninstalling** (new)
  - In-app updates (**Settings → Updates**, beta channel, check interval), **What's new**; updating by APK;
    what an uninstall deletes; **Data Loss Protection** (link); back up first (link).

---

## Phase 2: Agents (`02-agents/`)

After this phase someone can choose, install, sign in to and configure any agent.

- [x] **`01-overview.md`: Choosing an agent** (slug must stay `agents/overview`)
  - Comparison table: who makes it, account needed (Google / Claude / ChatGPT / your own keys / free), models,
    special features, runs where. "Which one should I use?" in plain advice.
  - Turning agents on and off (**Settings → Agents**), picking the agent for a new chat (tabs on the empty chat),
    several at once.
  - Sources: `README.md` "What it is", `A/ui/agents/AgentsSetupUi.kt`, `A/ui/components/AgentPicker.kt`.
- [x] **`02-antigravity.md`: Antigravity**
  - What it is (Google's `agy` CLI, the hub). Install / update (**Account & CLI**), Google sign-in, accounts
    (several Google accounts, switching), tiers and quotas in the model picker.
  - Models and thinking; the model picker with live quota (link to "Models" page in Phase 3).
  - Settings sub-pages: **Account & CLI**, **Cloud agents**, **Voice calls**, **MCP Servers**,
    **Skills & Plugins**, **Commands & Permissions** (auto-run policy, sandbox, tool approvals, per-project
    rules). Each option as `###`.
  - **Cloud agents** (Remote Agents): what they are, turning on, what works (port preview) and what doesn't.
  - **Voice calls**: the live voice call, the tile and shortcut, the floating call window.
  - Troubleshooting: sign-in loop, hub not starting, quota exhausted, "account login issue" errors.
  - Sources: `A/ui/agents/AgyAccountsUi.kt`, `AgyApprovals.kt`, `A/ui/cloud/*`, `A/ui/voice/*`,
    `SettingsDialog.kt` (ANTIGRAVITY, AGY_CLI, AGY_CLOUD, AGY_VOICE, MCP, SKILLS_PLUGINS, COMMANDS),
    `A/data/agent/` (agy parts), `A/data/voice/`.
- [x] **`03-claude-code.md`: Claude Code**
  - Install / update from **Settings → Claude Code**; sign in (subscription vs Anthropic Console, login dialog);
    plan label; usage (prompt-cache timer, context use, 5-hour and weekly limits, tokens per reply).
  - Chat controls: model, thinking, effort, fast mode, permission modes (each explained: what Claude may do
    without asking), plan approval.
  - Every Claude settings page (`CLAUDE_PAGE`): account, models, permissions and rules, sandbox, MCP, plugins and
    marketplaces, `CLAUDE.md`, memory, providers.
  - Third-party providers (short; full guide in "Bring your own models").
  - Sources: `A/ui/claude/*`, `A/data/agent/claude/`.
- [x] **`04-opencode.md`: OpenCode**
  - Install, server, providers (quick sign-ins, API key, device code), free models, the model sheet (variants,
    effort / thinking), **Build** / **Plan** agents and **Ask first** approvals, MCP, server logs.
  - Every OpenCode settings page (`OPENCODE_PAGE`).
  - Sources: `A/ui/opencode/*`, `A/data/agent/opencode/`.
- [x] **`05-codex.md`: Codex**
  - Install (`pkg install codex`, from the tab or **Codex · Account & CLI**), **Check for updates**, **Restart**,
    sign in (**Sign in with ChatGPT**, **Use a code** and when you need it), **Usage limits**, **Permissions**
    (Auto…), **MCP servers**, **Plugins**, **Skills**. Plan mode, `/review`, `/compact`, `/fork`, queued messages.
  - Sources: `A/ui/codex/*`, `A/data/agent/codex/`.
- [x] **`06-models-and-usage.md`: Models, thinking and usage limits** (new)
  - The model picker for each agent, quota pills (5-hour / weekly), thinking and effort levels (what they cost and
    when to raise them), context window and summaries (summary model), token usage details sheet.
  - Sources: `A/ui/models/*`, `A/domain/model/Models.kt` (ThinkingLevel), `ModelQuotaGroups.kt`,
    `A/ui/components/TokenUsageDetailsSheet.kt`, `SummaryModelPickerDialog.kt`, `ContextSummaryCard.kt`.
- [x] **`07-bring-your-own-models.md`: Bring your own models**
  - Claude Code providers (OpenRouter, Kimi, DeepSeek, Z.ai presets, any Anthropic-compatible API; test
    connection, fetch models, free tool-calling models on OpenRouter).
  - OpenCode custom providers (OpenAI- or Anthropic-compatible endpoint; Ollama, LM Studio, vLLM, LiteLLM;
    "Fetch from endpoint"; Images / Reasoning / Tools switches per model; search, filters, select all).
  - Local models: on the phone vs on a PC on your Wi-Fi (addresses, `0.0.0.0` binding, firewall).
  - Sources: `A/ui/claude/ClaudeProvidersPage.kt`, `A/ui/opencode/OpenCodeProvidersPage.kt`, `version.json`
    beta changelog.

---

## Phase 3: Using the app (`03-using-the-app/`)

The tour: every screen, every button, every gesture.

- [x] **`01-main-screen.md`: The main screen and moving around** (new)
  - Header: **☰** (drawer), chat title, **Select Project**, **New chat**. The screens (Chat, IDE, Terminal,
    Browser, Notes, Files, Run) and how to switch: the floating switcher (**Expand Switcher**), the drawer,
    back button behavior (main chat → background).
  - Sources: `MainActivity.kt` (`AppViewMode`), `A/ui/main/*`, `A/ui/components/FloatingSwitcherWidget.kt`,
    `A/ui/drawer/ChatHistoryDrawer.kt`.
- [x] **`02-chat.md`: Chat** (exists as draft; rewrite)
  - The input bar: attachments (**+**: photo, file), model chip, mode chips per agent, voice (**Start voice
    call**, **Live Dictation**, **Record voice note**, speech-to-text modes), send / stop, queued messages,
    slash command menu (`/`).
  - The conversation: thinking accordion, tool cards (collapse/expand), step groups, diffs, subagents,
    approvals panel (each choice explained), questions card, plan approval, error cards, **Retry**.
  - Message actions: copy, edit, retry, regenerate, select text, show details / raw payload, telemetry.
  - What chats can show: Markdown, code, Mermaid, images, audio, video, STEM blocks, interactive HTML.
  - Sources: `A/ui/chat/*`, `A/ui/components/` (ChatInputBar, MessageBubble, AgentToolCallCard,
    ThinkingAccordion, ChoiceQuestionnaireCard, QueuedMessagesCard, AttachmentSelectorBottomSheet,
    SpeechToTextModeDialog, ChatAudioPlayer, RawPayloadDialog, ChatTelemetryDialog, InteractiveUiView,
    StemBlocks, SelectTextSheet), `A/ui/agents/AgentApprovalPanel.kt`, `AgentQuestionPanel.kt`,
    `A/ui/chat/StepGroupPill.kt`.
- [x] **`03-chat-history.md`: Chat history, sharing and exporting** (new)
  - The drawer: search, chat list per agent, chat menu (**Copy Conversation ID**, **Fork Conversation**,
    **Rename**, **Restart chat**, **Export Markdown (.md)**, **Export Standalone HTML**, **Share**, **Delete**),
    shared chat viewer, profiles / accounts, artifacts drawer, **Active CLI Process** (Terminate & Free RAM).
  - Sources: `A/ui/drawer/*`, `A/ui/components/ConversationExportHelper.kt`, `ConversationShareHelper.kt`,
    `SharedChatViewerModal.kt`.
- [x] **`04-projects.md`: Projects** (new)
  - What a project is (the folder the agent works in), **Select Project**, new project, clone from Git, open a
    folder, where projects live on the phone, using phone storage.
  - Sources: `A/ui/components/ProjectPickerBottomSheet.kt`, `WorkspaceFolderBrowserDialog.kt`,
    `GitCloneDialog.kt`, `A/ui/ide/NewProjectDialog.kt`.
- [x] **`05-editor-and-git.md`: Editor and Git** (exists as draft; rewrite)
  - IDE toolbar (Undo, Redo, Save, Run configurations, Git, AI chat, ⋮), tabs, project sidebar and its menu,
    find and replace, image / SVG preview, unsaved-changes and conflict dialogs, daemon status and logs.
  - Git: changes, stage, commit, branch, stash, pull, push, author setup, diff viewer.
  - Sources: `A/ui/ide/*`.
- [x] **`06-run.md`: The Run screen** (new)
  - Run configurations: a folder's commands and live output, runs that keep going on other screens.
  - Sources: `A/ui/run/RunScreen.kt`, `A/data/run/`, `A/ui/ide/IdeExecutionRunner.kt`.
- [x] **`07-terminal.md`: Terminal** (exists as draft; rewrite)
  - Sessions, the extra keys rows, text selection, font size, the floating session pill, AntiTerm launcher icon,
    `pkg` / `apt` basics, storage access (`~/storage`), background service and wake lock, SSH terminals,
    Termux compatibility (what works, Termux:API built-ins).
  - Sources: `A/ui/components/LocalTerminalDialog.kt`, `TerminalActivity.kt`, `A/theme/ThemeTerminal.kt`,
    `SettingsDialog.kt` (TERMINAL), `README.md` Termux compatibility.
- [x] **`08-browser.md`: Browser** (exists as draft; rewrite)
  - Address bar, tabs, shortcuts, desktop / mobile mode, DevTools (Eruda), clearing data, previewing a local dev
    server, Google sign-in in the browser, when an agent is controlling it (the automation banner).
  - Sources: `A/ui/browser/BrowserScreen.kt`, `BrowserSessionManager.kt`, `ErudaHelper.kt`,
    `BrowserIdentity.kt`, `BrowserAutomationController.kt`.
- [x] **`09-files-and-notes.md`: Files and notes** (exists as draft; rewrite)
  - File explorer (breadcrumbs, search, views, select, actions, open with, zip), sharing files into AntiGem from
    other apps, Notes and to-dos.
  - Sources: `A/ui/files/*`, `A/ui/notes/NotesScreen.kt`.
- [x] **`10-floating-chat-and-gemmy.md`: Floating chat, switcher and Gemmy** (new)
  - The floating chat bubble over other apps, the app switcher widget, Gemmy (tap, double-tap, fling,
    long-press menu, what it shows while the agent works).
  - Sources: `A/ui/bubble/*`, `A/ui/components/FloatingSwitcherWidget.kt`, `FloatingMascot.kt`,
    `A/ui/onboarding/GemmyIntroDialog.kt`.
- [x] **`11-background-and-notifications.md`: Running in the background** (new)
  - The background service and its notification, what keeps running when you leave the app, battery
    optimization, phone makers that kill apps, Android 12+ process limits, how to keep long jobs alive.
  - Sources: `A/app/TermuxService.kt`, `A/data/service/`, `A/ui/components/AppPermissionsDialog.kt`.

---

## Phase 4: Tools & extensions (`04-tools-and-extensions/`)

How the agents get extra abilities. Explain the *idea* first, then the how.

- [x] **`01-mcp-explained.md`: MCP: how agents use tools** (new). *The concept page.*
  - What MCP is in plain words (a standard way to give an agent tools), what an MCP server is, local (command)
    vs remote (HTTP) servers, tools and their schemas, approvals for tool calls.
  - How AntiGem does it: the app itself hosts built-in MCP servers (browser, terminal, Android, notes, theme,
    Jarvis…) that every agent can connect to through its own MCP settings; presets add them in one tap; every
    agent equally (Antigravity, Claude Code, OpenCode, Codex). Diagram: agent → MCP client → built-in server in
    the app / bridge → the feature.
  - Context cost of tools (why fewer tools is better; REA on-demand mode as an example).
  - Sources: `README.md` "Built-in MCP servers", `SettingsDialog.kt` (MCP), `A/ui/claude/ClaudeSettingsScreen.kt`,
    `A/ui/opencode/OpenCodeMcpPage.kt`, `A/ui/codex/CodexMcpPage.kt`, `A/ui/settings/CascadeMcpCatalogDialog.kt`,
    `A/ui/browser/mcp/`, `A/theme/ThemeMcp.kt`, `agy_ide_bridge/` (MCP endpoints).
- [x] **`02-built-in-mcp-servers.md`: Built-in MCP servers** (new; replaces `02-mcp-servers.md`)
  - One `##` per preset: **Browser**, **Terminal**, **Android**, **Notes & To-dos**, **Custom Plugin MCP**,
    **Custom AntiGem Plugin Developer**, **Mini App Developer**, **Jarvis**, **Theme**, **Stitch**, **REA**.
    For each: what the agent can do, what it needs first (e.g. Android needs Android Automation, REA needs its
    setup), example prompts, safety notes.
  - Sources: the preset lists in each agent's MCP page, `A/ui/browser/mcp/`, `A/data/automation/`,
    `A/data/notes/`, `A/ui/miniapps/MiniAppDevMcp.kt`, `A/data/jarvis/`, `A/theme/ThemeMcp.kt`, `A/data/rea/`.
- [x] **`03-add-your-own-mcp-server.md`: Add your own MCP server** (new)
  - For each agent, where its MCP list is and how to add a command server or an HTTP server, environment
    variables and headers, enabling / disabling, reloading, checking that the tools appear. A worked example.
- [x] **`04-custom-plugins.md`: Custom AntiGem plugins** (exists as `04-plugins.md`; rewrite)
  - What a plugin is (a small package: `manifest.json` + JavaScript worker, can add MCP tools and skills), how
    it works (the app's extension host, Chrome extension APIs subset, runs in the app), install from ZIP or a
    plugin repository on GitHub, update checks, enable / disable / reload, using a plugin's tools in chat
    (Custom Plugin MCP), safety.
  - Build your own → link to Phase 10.
  - Sources: `A/ui/settings/WebViewExtensionsScreen.kt`, `PluginUi.kt`, `PluginRepositoriesTab.kt`,
    `A/ui/browser/BrowserExtensionManager.kt`, `PluginBridge.kt`, `PluginRepositories.kt`, `ExtensionSkills.kt`,
    `extension_docs/README.md`, `lifecycle.md`, `plugin-repository.md`.
- [x] **`05-skills.md`: Skills** (new)
  - What a skill is (Markdown instructions an agent loads when needed), where skills come from (each agent's
    skills, Google plugins, plugin skills), managing them per agent.
  - Sources: `A/ui/settings/SkillsAndPluginsSubScreen.kt`, `AgentSkillsPanel.kt`, `A/data/skills/`,
    `A/ui/codex/CodexPluginsPage.kt`.
- [x] **`06-slash-commands.md`: Slash commands** (new)
  - Built-in commands per agent (list them from code), custom slash commands (what they expand to, creating,
    editing), the `/` menu.
  - Sources: `A/ui/chat/SlashCommandOverlay.kt`, `A/ui/settings/CustomSlashCommandsScreen.kt`,
    `A/data/remote/CustomSlashCommands.kt`.
- [x] **`07-global-context.md`: Global context** (new)
  - What every chat is told about the app, your own standing instructions, how it's added for each agent.
  - Sources: `SettingsDialog.kt` (GLOBAL_CONTEXT), `A/data/context/`.
- [x] **`08-agent-memory.md`: Agent memory and saved chats** (new)
  - Memories every agent keeps across chats, saved chats agents can look up, reading / editing / removing.
  - Sources: `A/ui/settings/AgentMemoryScreen.kt`, `AgentHistoryScreen.kt`, `A/data/memory/`.
- [x] **`09-egm.md`: EGM (Elephant-Goldfish design reviews)** (new)
  - What it is (plan a design, fresh reviewers attack it before any code), `/egm`, the settings.
  - Sources: `A/ui/settings/EgmScreen.kt`, `A/data/egm/`.

---

## Phase 5: Power features (`05-power-features/`)

Each is a full feature page (template above). Several have long guides in `docs/` already: move them in,
update them against the code, and split very long ones into a page plus a reference section.

- [x] **`01-jarvis.md`: Jarvis** (slug must stay `power-features/jarvis`). Source: `docs/jarvis.md` (446 lines,
      move in and check), `A/ui/jarvis/*`, `A/data/jarvis/*`. All 10 settings sub-pages as `##` sections.
- [x] **`02-server-mode.md`: Server mode (run the agents on a VPS)**. Source: `docs/remote-server.md`
      (1051 lines: split into "Server mode" + "Server setup reference"), `A/ui/settings/ServersSettingsScreen.kt`,
      `README.md` Server mode.
- [x] **`03-connect-to-pc.md`: Connect to PC**. Pairing, nearby PCs, the PC button, files between phone and PC,
      terminal on the PC, security, what the PC needs. Sources: `A/ui/pc/ConnectPcScreen.kt`, `A/data/pc/`,
      `README.md`, `docs/connect-to-pc-protocol.md` (only the user-facing parts).
- [x] **`04-ubuntu-chroot.md`: Ubuntu chroot**. Source: `docs/chroot.md` (614 lines), `A/ui/settings/chroot/*`,
      `A/data/local/chroot/`. Risks first, setup page step by step, the chroot page, switching.
- [x] **`05-android-development.md`: Build Android apps on the phone**. Sources: `A/ui/settings/AndroidDevScreen.kt`,
      `A/data/androiddev/`, `antigem_plugins/android-dev/` (what gets installed), the `adev` commands, arm64 only.
- [x] **`06-reverse-engineering.md`: Reverse engineering (REA)**. Sources: `A/ui/settings/ReaScreen.kt`,
      `ReaGroupsScreen.kt`, `A/data/rea/`, `antigem_plugins/rea/`. On-demand vs direct mode, tool groups.
- [x] **`07-device-access.md`: ADB Connect, Shizuku and root** (new). Sources: `A/ui/settings/AdbConnectScreen.kt`,
      `A/data/adb/`. The three access modes, Wireless debugging pairing from the notification, reconnects,
      `adb` in the terminal.
- [x] **`08-android-automation.md`: Android automation** (new). Sources: `A/ui/settings/AndroidAutomationScreen.kt`,
      `A/data/automation/`. Letting agents see and control the phone, accessibility service, what the Android
      MCP can do, safety.
- [x] **`09-mini-apps.md`: Mini Apps** (new; the user side, developers in Phase 10). What a mini app is, opening
      and installing (`.agapp`), its own icon and Recents card, permissions you grant, App info, updates and the
      developer key check, Developer mode and development apps, uninstalling, where data lives. Sources:
      `mini_app_docs/README.md`, `permissions.md`, `signing-and-distribution.md`, `A/ui/miniapps/*`,
      `A/data/miniapps/`.
- [x] **`10-github.md`: GitHub**. Sources: `A/ui/settings/GitHubScreen.kt`, `A/data/github/`. Sign in with the CLI
      (device code / token), git identity, repositories (clone and open).
- [x] **`11-project-checkpoints.md`: Project checkpoints**. Sources: `A/ui/checkpoint/*`, `A/data/checkpoint/`.
      Going back to before any message, the restore preview.
- [x] **`12-backups.md`: Backups and restore**. Sources: `SettingsDialog.kt` (BACKUPS), `A/data/local/`. What is
      backed up (rootfs, chats, sign-ins option), where the file goes, restoring (also from setup), moving phones.
- [x] **`13-data-protection.md`: Data loss protection**. Sources: `SettingsDialog.kt` (DATA_PROTECTION),
      `A/data/admin/`, `A/ui/settings/ManageSpaceActivity.kt`. Uninstall shield, Clear data guard.
- [x] **`14-x11-desktop.md`: Linux desktop (X11)**. Sources: `A/ui/settings/X11DesktopScreen.kt`, `A/data/x11/`,
      `README.md` X11.
- [x] **`15-termux-api.md`: Termux:API**. Sources: `SettingsDialog.kt` (TERMUX_SUPPORT, TERMUX_API), `README.md`
      Termux compatibility. Built-in commands table, the companion app, switching handlers.
- [x] **`16-stem-and-diagrams.md`: STEM and diagrams in chats** (or under Settings, see Phase 6). Sources:
      `A/ui/settings/StemRenderingScreen.kt`, `A/ui/components/StemBlocks.kt`, `A/data/render/`.

---

## Phase 6: Settings (`06-settings/`)

A reference that mirrors the real settings screen. Rows that have a full page elsewhere link there instead of
repeating it.

- [x] **`01-overview.md`: The settings screen**
  - **Where**, then the six groups exactly as `MainSettingsMenu` builds them, in order, every row with its title,
    subtitle (from `SettingsSection`), what the value on the right means, when the row is hidden, and a link:
    1. Themes · Appearance · STEM & diagrams · Where agents run · Connect to PC
    2. Agents · Antigravity · Claude Code · OpenCode · Codex · Jarvis (agent rows only show when the agent is on)
    3. Custom AntiGem Plugins · Slash Commands · Project checkpoints
    4. Terminal · GitHub · ADB Connect · Android Automation · REA · Android Development · Termux Support (or X11
       Desktop with the chroot) · Diagnostics & Performance (Utilities is hidden while empty)
    5. Backups & Restore (only with the phone's Linux environment, not in server mode) · Data Loss Protection
    6. Updates · About & Info
  - Termux-only pages and what the chroot shows instead.
- [x] **`02-themes.md`: Themes**. `ThemeGallery.kt`, `ThemeQuickPanel.kt`, `A/theme/*`. Light / dark / follow
      system, the gallery, making your own (Theme MCP), terminal colors.
- [x] **`03-appearance.md`: Appearance**. `SettingsDialog.kt` (APPEARANCE): chat text size, agent steps (grouping,
      minimum steps), message stats, header icons, the app switcher, Gemmy.
- [x] **`04-where-agents-run.md`: Where agents run**. `ServersSettingsScreen.kt`: This phone (AntiGem / Ubuntu
      chroot) or your server, saved profiles, status; links to server mode and chroot.
- [x] **`05-agents.md`: Agents**. `AgentsSetupUi.kt`: turning agents on and off, Global context, Agent memory,
      EGM rows (links).
- [x] **`06-terminal.md`: Terminal settings**. `SettingsDialog.kt` (TERMINAL): font, cursor, colors, SSH for
      terminal tabs.
- [x] **`07-termux-support.md`: Termux Support**: links to Termux:API and X11.
- [x] **`08-diagnostics.md`: Diagnostics & Performance**. `SettingsDialog.kt` (DIAGNOSTICS),
      `FloatingDiagnosticsOverlay.kt`, `NetworkInspectorDialog.kt`, `FloatingNetworkInspectorBubble.kt`,
      `FloatingTerminalInspector.kt`: the HUD, network inspector, streams, threads.
- [x] **`09-updates.md`: Updates and What's new**. `UpdateSettingsScreen.kt`, `ChangelogScreen.kt`.
- [x] **`10-about.md`: About & Info**. `SettingsDialog.kt` (ABOUT): version, package details, bridge export.
- [x] The agent settings (Antigravity, Claude Code, OpenCode, Codex) are documented on their agent pages
      (Phase 2); Jarvis, REA, Android Development, ADB, Automation, GitHub, chroot, Connect to PC, plugins, slash
      commands, checkpoints, backups, data protection on their feature pages (Phases 4–5). The overview links to
      each one, to the exact heading.

---

## Phase 7: Guides (`07-guides/`)

Short task pages that walk through one goal start to finish, linking to the feature pages for details.

- [x] Build a web app and preview it on the phone
- [x] Start from a GitHub repository (clone, open, ask the agent to explain it)
- [x] Use free models (OpenCode free models, OpenRouter free models in Claude Code)
- [x] Use Ollama or LM Studio on your PC from the phone
- [x] Give every agent the same MCP server
- [x] Let the agent test your site in the browser
- [x] Let the agent use your phone (Android automation)
- [x] Make your own slash command
- [x] Make your own theme
- [x] Undo what an agent did (checkpoints, git)
- [x] Back up everything and move to a new phone
- [x] Keep long jobs running when the screen is off
- [x] Use the agents on your PC from the phone (Connect to PC)
- [x] Run the agents on a VPS (server mode, quick version)
- [x] Build an APK on the phone and install it
- [x] Look inside an APK with REA
- [x] Make a mini app with an agent and share it
- [x] Make a custom plugin with the Plugin Developer MCP
- [x] Code hands-free with Jarvis
- [x] Share or export a chat

---

## Phase 8: Help (`08-help/`)

The pages that stop the questions. Build them from every troubleshooting section of the pages above, plus:
error messages in the code (`grep` for user-facing error strings), GitHub issues, Discord questions,
`mini_app_docs/troubleshooting.md`, the troubleshooting parts of `docs/jarvis.md`, `docs/chroot.md`,
`docs/remote-server.md`.

- [x] **`01-troubleshooting.md`: Troubleshooting** (slug must stay `help/troubleshooting`). Problems grouped by
      area, each a `:::details` (symptom → cause → fix), linking to the full fix on its page:
  - **Installing:** App not installed, Play Protect, 32-bit phone, Android 7–8.
  - **Setup:** Linux install fails or stops (network, space, mirror), Full download slow, restoring a ZIP fails.
  - **Linux and packages:** `pkg` mirror errors, broken `npm` / `pip` after setup and the fix, "command not
    found", storage permission, out of space.
  - **Agents:** "not installed", sign-in doesn't come back to the app (use a code), quota / limit reached, agent
    stuck on "working", no reply, chat errors, restarting a chat, the bridge not running.
  - **Background:** the app or a job stops when the screen is off (battery settings per phone maker, Android 12+
    limits, notification permission).
  - **Browser:** can't open `localhost`, Google sign-in blocked, page blank.
  - **MCP and plugins:** tools don't appear, server won't connect, plugin errors.
  - **Server mode, Connect to PC, chroot, Jarvis, mini apps, X11, Termux:API:** the common ones, each linking to
    its page's troubleshooting section.
  - **Crashes:** the crash screen, what to send.
- [x] **`02-debugging.md`: Debugging tools** (new). How to see what's going on: Diagnostics HUD, network
      inspector, daemon logs, server logs (agent tabs), raw payload of a message, chat telemetry, active CLI
      processes, the crash report, `adb logcat` for advanced users, where log files are on the phone.
- [x] **`03-faq.md`: FAQ** (slug `help/faq`). Is it free, which accounts, is my code sent anywhere, Play Store,
      iPhone, root needed?, Termux relation, battery use, storage use, offline use, privacy / analytics
      (`README.md` Analytics), license.
- [x] **`04-get-help.md`: Getting help and reporting bugs** (new). Discord, GitHub issues, what to include (app
      version from **About & Info**, phone model, Android version, agent, steps, logs from Phase 8.2), feature
      requests.
- [x] **`05-limitations.md`: Known limitations** (new). arm64-only local environment, x86_64 notes, what doesn't
      work in the chroot (Termux-only pages), features still being tested.

---

## Phase 9: Other AntiGem apps (`09-other-apps/`)

Short pages: what it is, where to get it, how it connects to the phone app, what's different. Link to its own
README for the rest.

- [x] **AntiGem for VS Code**: one sidebar for all four agents in VS Code; Marketplace / Open VSX; **Connect
      phone** (link to Connect to PC); what differs from the phone app. Source: `antigem-vscode/README.md`.
- [x] **AntiGem Browser Bridge (Chrome extension)**: lets agents in AntiGem for VS Code use your real browser;
      not needed on the phone. Source: `antigem-chrome-extension/README.md`.
- [x] **Termux:API companion** and **Termux:X11 for AntiGem**: why AntiGem's own builds are needed (shared user),
      where to download, moving from the old app. (Short, links to the Phase 5 pages.)

---

## Phase 10: For developers (`10-developers/`, `11-mini-app-sdk/`, `12-plugin-sdk/`)

Done 2026-11-23: the two SDKs were copied in with a script (front matter from each file's `#` title and first sentence, links rewritten, non-Markdown files linked on GitHub). The script is not in the repo; if the SDK folders change, either edit the website pages directly (they are now the main copy) or redo the copy.

Move the two SDKs into the website, so the repo folders can point here. Keep their content, update it, split into
pages that fit the sidebar.

- [x] **Build mini apps** (from `mini_app_docs/`: README, getting-started, manifest, permissions, storage, files,
      network, ui, notifications, background, threads, intents, shared-data, mcp, developer-mcp,
      signing-and-distribution, pc-development, api-reference, troubleshooting). One page each, or merge the small
      ones.
- [x] **Build custom plugins** (from `extension_docs/`: README, developer-mcp, lifecycle, skills,
      plugin-repository, pc-development, chrome-api, antigem-api, mcp, google-flow; link the JSON schemas and the
      example).
- [x] **Build AntiGem from source** (`README.md` "Building from source", "Project structure"; arm64 / chroot /
      x86_64 variants), **Contributing**.

---

## Phase 11: Polish and keep it fresh

- [ ] Screenshot pass: run `pnpm shots`, take the ones that really help (aim for most pages with zero or one).
- [ ] Link the glossary terms on first use in each page.
- [x] Check every page against the latest app version, update `updated:` (all pages: 2.0.4-beta.2, 2026-11-23).
- [x] `pnpm build` with no broken links (checked after every batch; the build now fails on a broken link).
- [ ] Point `user_docs/`, `docs/*.md`, `mini_app_docs/`, `extension_docs/` and the README's long sections to the
      website, then delete `user_docs/` (the user decides when).
- [ ] **When the app changes:** each page lists its sources (here, in this plan). When a source file changes in a
      release, re-check the pages that use it, and bump their `updated:`.

---

## Order of work

1. Phase 0 (groundwork), so placeholders and the new structure exist before any writing.
2. Phases 1 → 2 → 3: with these, a new user can install, set up and use the app.
3. Phase 8 (Help) early, because it stops the most questions; then keep adding to it from every later phase.
4. Phases 4 → 5 → 6 → 7.
5. Phases 9 → 10 → 11.

About 90 pages in total (Phase 10 adds about 30 more from the two SDKs).
