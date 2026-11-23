---
title: Build mini apps
description: Where to start with the mini app SDK, whether you build with an agent or by hand.
updated: 2.0.4-beta.2
---

A [mini app](../05-power-features/09-mini-apps.md) is a plain folder of HTML, CSS and JavaScript that AntiGem opens full screen like a real Android app, with native storage, files, network, notifications, reminders and background tasks through its JavaScript SDK (`window.AntiGem`). Apps are built on the phone, usually by an agent, with no build step, and shipped as signed `.agapp` packages.

## The fastest way: let an agent build it

Add the **Mini App Developer** preset to your agent and use `/mini_app`. The agent gets the same guide as below, matching your AntiGem version, plus tools to create, run, inspect, sign and install the app. See [Make a mini app and share it](../07-guides/17-make-a-mini-app.md).

## The SDK guide

The full guide is in the **Mini app SDK** section of these docs:

:::cards
- [Overview](../11-mini-app-sdk/01-overview.md) — How mini apps work and where things live on the phone.
- [Getting started](../11-mini-app-sdk/02-getting-started.md) — Build a first app step by step.
- [manifest.json](../11-mini-app-sdk/03-manifest.md) — Every field of the manifest.
- [Permissions](../11-mini-app-sdk/04-permissions.md) — What an app may use, and how the user decides.
- [API reference](../11-mini-app-sdk/10-api-reference.md) — The whole `AntiGem` SDK on one page.
- [Signing and distribution](../11-mini-app-sdk/06-signing-and-distribution.md) — The developer key, `.agapp` packages, installs and updates.
- [Developing on a PC](../11-mini-app-sdk/07-pc-development.md) — `agapp.mjs` and building from a computer.
- [Troubleshooting](../11-mini-app-sdk/08-troubleshooting.md) — Common problems and where the logs are.
:::
