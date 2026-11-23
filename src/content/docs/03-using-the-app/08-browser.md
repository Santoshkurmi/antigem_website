---
title: Browser
description: "The built-in browser: the address bar, tabs, shortcuts, desktop mode, DevTools, clearing data, testing your local server, Google sign-in, and what you see when an agent uses it."
updated: 2.0.4-beta.2
---

AntiGem has its own browser. Use it to look things up, to test the website or web app you (or the agent) are building, and to let agents use web pages for you. Its tabs stay open while you switch to other screens.

**Where:** the floating switcher → **Browser** (the globe icon).

![The browser on a local dev server: the address bar with the Local server badge on top, the page, and the bottom bar with Back, Forward, Home, the tab counter and More options](/screens/browser_local_server.webp "frame")

## The address bar

The rounded bar at the top.

### Type an address or a search

Tap the bar and type. It shows the full address of the page, all selected, so you can type over it. Tap **Go** on the keyboard.

- An address (`github.com`, `https://…`) opens the page.
- `localhost:3000`, `127.0.0.1:8080`, `192.168.1.5:5173` and other local addresses open with `http://`.
- Anything else is searched on Google.

When you aren't typing, the bar shows only the site's name (and its port, for example `localhost:8080`).

### Suggestions

While the bar is selected, a list opens under it:

- **Search Google for "…"** at the top, for what you typed.
- **Recent Searches** (when the bar is empty) or **History Suggestions** (while you type): addresses and searches you typed before. **Insert** puts one in the bar to edit it, **Delete** removes it. **Clear All** (shown when the bar is empty) removes all of them.

Only what you typed and the shortcuts you tapped are remembered, not every page you visit. Tap outside the list to close it.

### The badge on the left

- A lock (**Secure connection**): an `https://` page.
- **Local server**: a page on `localhost` or `127.0.0.1`.
- **Not secure**: an `http://` page on the internet.

### Reload and Stop

The button at the right end of the bar: **Reload** the page, or **Stop** while it is loading. While you type it is **Clear** (×). A thin line under the bar shows the loading progress.

## The bottom bar

From left to right:

- **Back** and **Forward**: go through the pages of this tab.
- **Home**: show the start page in this tab.
- **The tab counter**: a square with the number of open tabs. Tap it to see all tabs.
- **More options** (⋯): the browser menu.

The Android Back button first closes the address bar or the tab list, then goes back one page, and when there are no pages left, closes the browser.

## The start page

A new tab shows the start page: round shortcuts to your favorite sites. **Default:** **Google** and **YouTube**.

### Add a shortcut

Tap **Add** (the + tile, **Add shortcut**). In **Add Shortcut**, type a **Name** (for example "GitHub") and a **URL** (for example `https://github.com`), then tap **Add**.

### Remove a shortcut

Long-press a shortcut. **Remove Shortcut** asks "Remove '…' from your home shortcuts?". Tap **Remove**.

## Tabs

Tap the tab counter to see all tabs as cards with a small picture of each page. The active tab has an orange outline. At the top: **Tabs (3)** and **Done**.

- **Tap a card** to switch to that tab.
- **Close a tab**: tap its ×, or swipe the card sideways. A message **Tab closed** with **Undo** shows for a few seconds.
- **New tab** (bottom right) opens a new tab.
- **Delete all** (bottom left) asks **Close All Tabs**: "Are you sure you want to close all open tabs and return to chat?". **Close All** closes them and the browser.

Links that open a new window open as a new tab. Closing the last tab closes the browser.

> [!NOTE]
> Tabs stay open while you use other screens, but not when the app restarts: AntiGem then starts with one new tab. There is no private (incognito) mode.

## The browser menu

Tap **More options** (⋯, bottom right). The top shows the page's title and site. Then a row of four buttons:

### New tab

Opens a new tab with the start page.

### Reload

Loads the page again. Not available on the start page.

### Desktop

Shows the page as on a computer instead of a phone. It is highlighted while on, and it is set for each tab on its own. **Default:** off (mobile).

In desktop mode, the browser tells websites it is a Linux computer with a large screen, lays the page out 1280 pixels wide (pinch to zoom), and switches some mobile sites to their desktop version (YouTube, Facebook, Twitter, Wikipedia). Turning it off loads the mobile page again.

### DevTools

Opens **Eruda**, a set of developer tools inside the page: **Console** (logs and JavaScript), **Elements** (the page's HTML), **Network**, **Resources** (storage and cookies) and **Sources**. The first tap turns it on for this tab and opens it. Later taps open or hide the panel. Once on, it stays on (as a small floating button on the page) until you close the tab.

Eruda loads from the internet (`cdn.jsdelivr.net`), so it needs a connection.

### Clear tab cache

"Reload this site's files fresh". Clears the saved copies of page files, so the next reload gets everything new from the server. Use it when your own website doesn't show your latest changes. A message says **Tab cache cleared**. Reload the page afterwards.

### Clear browsing data

"Cookies, logins, history and all tabs". It asks first, **Clear browsing data?**, and lists what goes: all cookies, site data, the cache, saved site logins, site permissions and history, and it closes every tab. You are signed out of every website, including Google. Your start page shortcuts are kept. Tap **Clear all**. A message says **Browsing data cleared**.

### Close browser

Leaves the browser and goes back to the screen you came from. Your tabs stay open for when you come back.

## Test your own website

The browser is made for testing the sites you build on the phone:

:::steps
### Start your dev server

In the [terminal](./07-terminal.md) or on the [Run screen](./06-run.md), start it, for example `npm run dev`. Note the port it prints, for example `5173`.

### Open it

In the browser, type `localhost:5173` and tap **Go**. The badge shows **Local server**.

### Look inside

Open **More options** → **DevTools** to see console errors and network requests. Use **Desktop** to check the computer layout, and **Clear tab cache** if old files stick around.
:::

Pages on `localhost`, `127.0.0.1`, `192.168.x.x` and `10.0.x.x` load even when they use a self-signed HTTPS certificate.

See the guide [Test your site in the browser](../07-guides/06-test-your-site-in-the-browser.md).

## Google sign-in

Google often blocks sign-in inside apps. AntiGem's browser presents itself to websites as the normal Chrome browser of your phone, the same way every time, so signing in to Google (and to sites that use "Sign in with Google") usually works. On Google's sign-in pages, nothing extra is added to the page: no desktop mode tweaks and no DevTools.

If sign-in still fails, clear the site's data with **Clear browsing data** and try again.

## When an agent uses the browser

Agents can open pages, read them, click and type in the browser, for you or to test your site. See [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md) and the guide [Test your site in the browser](../07-guides/06-test-your-site-in-the-browser.md).

While an agent works in a tab you see:

- **An orange glow** around the page, a moving arrow cursor and little ripples where it clicks.
- A caption **AI is using this tab**, or **AI · …** with what it is doing. It fades out a few seconds after the agent's last action.

You can still scroll and zoom. During each agent action (and a few seconds after) the keyboard is blocked, so you don't type into the page at the same time.

### When the agent locks a tab

For longer tasks the agent can lock its tabs, so your taps don't get in its way. A pill on the page says **AI controls this tab**, and the tab's card in the tab list shows an **AI** badge (**Locked by AI**).

- **Unlock** in the pill gives you the tab back. The agent is told, and that tab stays unlocked until the agent locks it again.
- Drag the pill (**Drag**) if it covers something.

Another kind of browser automation shows a pill **AI is working…** at the top instead, and blocks touches until it is done. When it is idle the pill says **Controlled by AI**, with **Unlock**. This unlock lasts until you leave the tab or the browser.

### Page pop-ups

When a page shows an alert, a question or "Leave this page?" while an agent works (or the tab isn't on screen), it appears as a card on the page: **This page says**, **This page asks**, **This page asks for input** or **Leave this page?**, with the site's name, and **OK** / **Cancel** or **Stay** / **Leave**.

## Troubleshooting

:::details My local site doesn't open ("connection refused" or a blank page)
Your dev server isn't running, or it uses another port. Check the terminal or the Run screen for the address it prints, and type exactly that.
:::

:::details My changes don't show up after reload
The browser used saved copies of the files. Open **More options** → **Clear tab cache**, then **Reload**.
:::

:::details A site shows its mobile version, or looks broken
Turn on **More options** → **Desktop**. Turn it off again for the phone layout.
:::

:::details I can't type in the page
An agent is using or has locked this tab. Wait for it to finish, or tap **Unlock** in the pill on the page.
:::

:::details Google says the browser isn't secure
Try again after **Clear browsing data**. If it keeps failing, sign in with a different method the site offers, or in another app.
:::

:::details A download link does nothing
The built-in browser doesn't download files. Open the page in another browser to download, or use `curl -LO <link>` in the terminal.
:::

:::cards
- [Test your site in the browser](../07-guides/06-test-your-site-in-the-browser.md) — Step by step, with an agent.
- [Built-in MCP servers](../04-tools-and-extensions/02-built-in-mcp-servers.md) — The tools agents use to control the browser.
- [The Run screen](./06-run.md) — Start your dev server.
- [Terminal](./07-terminal.md) — Start servers by hand.
:::
