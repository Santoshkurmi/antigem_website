---
title: Where agents run
description: Run the bridge, the agents and the terminal on this phone (AntiGem or Ubuntu chroot) or on your server, and every option of this page.
updated: 2.0.4-beta.2
---

This page decides where the [bridge](../01-getting-started/02-key-concepts.md#the-bridge), the agents and the terminal run. The app looks the same in every mode; only the place changes. For the full server walkthrough, see [Server mode](../05-power-features/02-server-mode.md).

**Where:** ☰ → **Settings** → **Where agents run**. The row shows **AntiGem**, **Ubuntu chroot** or **Server**, plus a problem if the app can't reach it.

## Agents run on

Pick one of four:

| Choice | What runs where |
| :--- | :--- |
| **This phone → AntiGem** (default) | This phone, in AntiGem's built-in environment: the bridge, the agents and the terminal. No root needed. |
| **This phone → Ubuntu chroot** | This phone, in the rooted Ubuntu chroot: the bridge, the agents and the terminal (`apt`, glibc, `sudo`). Install the chroot first: see [Ubuntu chroot](../05-power-features/04-ubuntu-chroot.md). |
| **Your server → SSH tunnel** | On your server, reached through an SSH connection: no open ports, no domain, no reverse proxy. **Start here** if you use a server. |
| **Your server → Server** | The bridge and the agents run on your server, reached by a domain or open ports. The app manages them over SSH. |

After you change something, tap **Save Server & Security Settings** at the bottom. The app asks **Reopen AntiGem?**: **Reopen Now** restarts the connections with the new settings.

> [!NOTE]
> Chats, files and the agents' sign-ins live where the agents run. Your server's chats are separate from the ones on the phone.

## Saved profiles

Save the current settings as a profile and switch back to it later, for example "Home server" and "This phone".

### Save as profile

Give it a **Profile name**. **Include SSH password and key** is off by default: anyone using this phone could read them.

### Loading, updating and deleting

**Saved profiles (N)** lists them, marked **LOCAL**, **SERVER** or **SSH TUNNEL**. Tap one to load it: its mode is selected for you; press **Save** to apply. **Update** overwrites a profile with what's in the form now (same mode only). **Delete** removes it. Profiles are saved only on this phone.

## Server addresses

### IDE Bridge address and AGY Hub address

Where the app reaches the bridge and the Antigravity hub.

- **SSH tunnel:** use `http://127.0.0.1` with the ports the bridge and the hub listen on at the server (by default **1236** and **1237**). The app starts them on the server's `127.0.0.1` only and forwards the same ports on the phone to them over SSH. Use `http://`: SSH already encrypts the connection.
- **Server:** two addresses, like `https://bridge.example.com` and `https://hub.example.com` behind nginx or Apache, or `http://203.0.113.5:1236` and `http://203.0.113.5:1237` straight to the ports.
- **This phone:** where this phone's bridge and hub listen. Leave them as they are.

**Test Hub** and **Test Bridge** check the connection (in SSH tunnel mode once the settings are saved and SSH is connected).

### Ports on the server

In **Server** mode, with a reverse proxy: **Bridge listens on** and **Hub listens on** are the ports the services use on the server, and **Bridge bind address** the address they listen on. The addresses above are what the phone connects to (the proxy).

### Proxy access header (second layer)

Optional, for **Server** mode behind a proxy. The app adds this header to every request to the bridge and the hub, and your proxy refuses requests without it. Set a **Header name** and a **Header value (secret)** (**Generate** makes one), then **Copy nginx rule** for your proxy's config.

> [!WARNING]
> If you set a value, the proxy must check the same one, or every request is refused. It only protects traffic through the proxy, and only over `https://`.

## SSH access

Used to install, start and stop the bridge, for the terminal, and to let the server's agents use this phone's MCP tools.

- **SSH host**, the user, and the port.
- **Password (optional when a key is set)**, or a **Private key (recommended)**: **Choose key file** or **Paste key**, plus a **Key passphrase (if it has one)**.
- **Test SSH** checks it.
- **Forget host key**: the server's SSH key is pinned the first time you connect, and a different key later is refused. If you rebuilt the server, forget the old key; the next connection trusts the current one.

## Security Token (Header Obfuscation)

The secret that protects the bridge. The app starts the server with it. Over the SSH tunnel it's encrypted, and it still keeps other users of the server out of the bridge. On the internet, use `https://`: over plain `http` the token is visible on the network. **Randomize** makes a new one; **Copy Header** copies the **Framed Security Header**.

## Port forwards (server → this phone)

Reach a port of your server on the phone. For example, a dev server started with `npm run dev` on port 5173: add **Server port** `5173`, a **Phone port** (1024–65535) and a **Name (optional)** like "Vite dev server". Then open `http://127.0.0.1:<phone port>` in the browser (**Copy address**).

- The program on the server must listen on `127.0.0.1` or `0.0.0.0` (for Vite: `npm run dev -- --host 127.0.0.1`).
- Only this phone can use the forwarded port; nothing is opened on the server.

## Server control

Shows **Bridge running on the server**, **Bridge stopped** or **Not started**, with the SSH and tunnel state. **Start**, **Restart**, and **Server log** to see what the bridge prints.

## Advanced (server paths and ports)

Where things are on the server (`~` is the SSH user's home): the **Bridge binary on the server** and the **Bridge folder**. The app never uploads the bridge: you copy `agy_ide_bridge` to the server yourself. See [Server mode](../05-power-features/02-server-mode.md).

### Agent paths in AntiGem / in the Ubuntu chroot

Where each program is: **IDE Bridge**, **AGY Hub (agy)**, **Claude Code**, **OpenCode**, **Codex**. For advanced use only: leave them empty and the defaults (shown in grey) are used. **Reset to defaults** / **Reset All to Defaults** clears them.

## Troubleshooting

:::details "Unsaved Server Settings"
You changed something and tried to leave. Tap **Save Server & Security Settings**, or **Discard Changes**.
:::

:::details Test SSH fails
Check the host, user and port, and that the key or password is right. A key file must be a private key (`-----BEGIN … PRIVATE KEY-----`). If the server was rebuilt, tap **Forget host key**.
:::

:::details Test Hub or Test Bridge fails
In SSH tunnel mode: save first and check SSH is connected, and that both addresses are `http://127.0.0.1:<port>` with two different ports. In Server mode: check the addresses, the proxy, and the access header on both sides. Then check **Server log**. See [Server mode](../05-power-features/02-server-mode.md#troubleshooting).
:::

:::details "Install the Ubuntu chroot first"
You picked **Ubuntu chroot** but it isn't installed. Install it (Ubuntu chroot page), or choose **AntiGem**.
:::
