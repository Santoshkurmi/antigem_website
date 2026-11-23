---
title: "Server mode"
description: "Run the bridge, the agents, your projects and the terminal on your own Linux server, and use the phone as the screen: SSH tunnel or Server, step by step."
updated: 2.0.4-beta.2
---

In server mode, the [bridge](../01-getting-started/02-key-concepts.md#the-bridge), the agents, your projects, your files and the shell all run on a server (a VPS, a home server, any Linux machine) instead of on the phone. The phone only shows the app: chats, the editor, the terminal. Use it when the phone is too slow, when long jobs must keep running while the phone sleeps, or to use the same setup from anywhere.

**Where:** ☰ (top left) → **Settings** → **Where agents run** → **Your server**

Every field of that page is explained in [Where agents run](../06-settings/04-where-agents-run.md). This page is the walkthrough.

> [!CAUTION]
> Nothing here is guaranteed to be secure. This software is young and not independently audited, and a server on the internet is attacked all day. **Assume your server can be hacked**: keep nothing on it you can't afford to lose or leak, and test every protection yourself (see Security below).

## How it works

The app always logs in to the server over SSH: to start and stop the bridge, for the terminal, and for the phone tools. What differs is how the app talks to the bridge and the [Antigravity hub](../01-getting-started/02-key-concepts.md#the-antigravity-hub). Pick one of two modes:

| | **SSH tunnel** (start here) | **Server** |
| :--- | :--- | :--- |
| How the app reaches the bridge and hub | Through the SSH connection | Over the network: a domain with HTTPS, or open ports |
| What you open on the server | Only SSH | SSH, plus 443 (and 80) behind a proxy, or two ports |
| What you set up | Only SSH | A domain, DNS, certificates, a reverse proxy (nginx, Caddy or Apache), firewall rules |
| Encryption | Always, by SSH | Only with `https://` |
| When SSH drops | Chats, files, editor and terminal pause until the app reconnects | Chats, files and the editor keep working; only the terminal and the phone tools wait |
| Speed for big files | Slower (everything goes through SSH) | Full speed |
| Other devices | Only this app on this phone | Any device that can reach the address |

```text title="SSH tunnel mode"
phone (AntiGem)                                 server
 └─ SSH (port 22) ───────────────────────────►  sshd
      · phone 127.0.0.1:1236 ──tunnel──►  bridge  on the server's 127.0.0.1:1236
      · phone 127.0.0.1:1237 ──tunnel──►  agy hub on the server's 127.0.0.1:1237
      · starts and stops the bridge (in tmux), the terminal
      · reverse tunnels: the server's agents reach the phone's MCP tools
```

**Start with the SSH tunnel.** Move to **Server** only if you need full speed, chats that survive SSH drops, or access from other devices, and you are ready to secure and test a public service.

**What the app does:** connects over SSH, starts the bridge in a tmux session with the right options, stops and restarts it, shows its log, and opens the tunnels.
**What you do:** put the bridge on the server, install the agents there (the app can do that for you), and in **Server** mode set up the proxy. The app never uploads the bridge.

## What you need

- A Linux server: **x86_64** (most VPS) or **aarch64** (ARM VPS, Raspberry Pi). Check with `uname -m`.
- `sshd`, `tmux` (strongly recommended: the bridge keeps running when SSH drops), `git` and `curl`.
- A **normal user** for AntiGem, not root. The bridge can read and write everything that user can.
- About 1 GB of free RAM for the agents. Node.js 18 or newer only if you use browser plugins.
- A PC with Go, to build the bridge once.

## Set it up

:::steps
### Prepare the server

On Debian or Ubuntu (use your package manager on other systems):

```bash title="On the server"
sudo apt update
sudo apt install -y openssh-server tmux git curl
sudo adduser antigem
```

Do everything below as that user (`su - antigem`, or log in over SSH as `antigem`).

### Build the bridge on your PC

The bridge (`agy_ide_bridge`) is a single program. It isn't in the releases: build it from the same source version as your app. You need Go (the version in `agy_ide_bridge/go.mod` or newer).

```bash title="On your PC"
git clone https://github.com/santoshkurmi/antigem
cd antigem/agy_ide_bridge
# 64-bit Intel/AMD server (most VPS):
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags "-s -w" -o agy_ide_bridge_linux_amd64 .
# ARM server (aarch64):
CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -trimpath -ldflags "-s -w" -o agy_ide_bridge_linux_arm64 .
```

> [!NOTE]
> Don't use the phone's build of the bridge on a server: it is a different program. The bridge reports the same version as the app it was built with; if they differ, the app shows **Update the IDE bridge**.

### Copy it to the server

The app looks for the bridge at `~/.antigem/agy_ide_bridge` (`~` is the SSH user's home).

```bash title="On your PC"
ssh antigem@your.server 'mkdir -p ~/.antigem'
scp agy_ide_bridge_linux_amd64 antigem@your.server:~/.antigem/agy_ide_bridge
ssh antigem@your.server 'chmod +x ~/.antigem/agy_ide_bridge'
```

Check it on the server with `~/.antigem/agy_ide_bridge --help`: you should see the list of options. "cannot execute binary file" means the wrong CPU build; "Permission denied" means you forgot `chmod +x`.

### Make an SSH key

A private key is better than a password.

```bash title="On your PC"
ssh-keygen -t ed25519 -f ~/.ssh/antigem_server -C "antigem-phone"
ssh-copy-id -i ~/.ssh/antigem_server.pub antigem@your.server
ssh -i ~/.ssh/antigem_server antigem@your.server   # must log in without a password
```

Get the **private** key (the file without `.pub`) to the phone: copy its text for **Paste key**, or save the file for **Choose key file**. Delete it from shared places afterwards.

### Fill in the app

Open **Settings → Where agents run** and pick **Your server → SSH tunnel**.

- **Server addresses**: `http://127.0.0.1:1236` (bridge) and `http://127.0.0.1:1237` (hub) are the defaults. The port is the one the service listens on at the server; the app opens the same port on the phone.
- **SSH access**: host, user, port, and your private key (or a password). Tap **Test SSH**: it should say the login works.
- **Advanced (server paths and ports)**: only change the paths if you put things somewhere else.

Tap **Save Server & Security Settings**, then **Reopen Now**. Details of every field: [Where agents run](../06-settings/04-where-agents-run.md).

### Start the bridge

After the app reopens, it connects over SSH and starts the bridge in a tmux session called `antigem-bridge`. **Server control** on the same settings page shows its state, the SSH connection and the tunnels, with **Start**, **Restart**, **Stop** and **Server log**. Tap **Test Bridge** and **Test Hub** to check both.

### Install the agents on the server

Open each agent's settings page and install it there, like on the phone. The app runs the installer on the server:

| Agent | In the app | Or on the server |
| :--- | :--- | :--- |
| Antigravity | **Settings → Antigravity → Account & CLI → Install agy** | `curl -fsSL https://antigravity.google/cli/install.sh \| bash` |
| Claude Code | **Settings → Claude Code → Account & CLI → Install Claude Code** | `curl -fsSL https://claude.ai/install.sh \| bash` |
| OpenCode | **Settings → OpenCode → OpenCode CLI → Install OpenCode** | `curl -fsSL https://opencode.ai/v2/install \| bash` |
| Codex | **Settings → Codex → Account & CLI → Install Codex** (OpenAI's official Linux build into `~/.local/bin`) | – |

Install them as the AntiGem user, in its home. The bridge also starts without them, so you can install them later.

### Sign in

Sign in to each agent from the app. Because the agents run on the server, browser sign-ins work a little differently:

- **Antigravity**: tap **Sign in**, then **Open Browser** and sign in with Google. The browser ends on an error page for `localhost`: that's expected. Copy the address of that page, paste it into the app's sign-in dialog and tap **Finish**.
- **Claude Code**: use **Browser can't return to the app? Sign in with a code** (see [Claude Code](../02-agents/03-claude-code.md)).
- **Codex**: you always get a code to enter on the sign-in page (see [Codex](../02-agents/05-codex.md)).
- **OpenCode**: a browser sign-in ends on a page that can't load; paste its address under **After you sign in** (see [OpenCode](../02-agents/04-opencode.md)).
:::

## Server mode (domain or open ports)

Pick **Your server → Server** instead of the SSH tunnel when you want a direct connection. Two ways:

- **A domain with HTTPS** (recommended for Server mode): two names like `https://bridge.example.com` and `https://hub.example.com`, behind a reverse proxy with certificates. The bridge and hub listen only on the server's `127.0.0.1`; only the proxy reaches them. Open ports 443 (and 80 for certificates), not 1236 / 1237.
- **An IP and two ports**: `http://203.0.113.5:1236` and `http://203.0.113.5:1237`. The bridge listens on every interface. Open both ports in the firewall, ideally only for your own IP.

> [!WARNING]
> With plain `http://`, the security token travels in clear text: anyone on the way can read it and then read and write files and run commands on your server. Use plain `http://` only on a private network or a VPN (Tailscale, WireGuard).

The address you type decides how the app starts the services: an `https://` address or a host name means "behind a proxy" (the bridge listens on `127.0.0.1`), an IP with a port means "direct" (the bridge listens on `0.0.0.0`). **Ports on the server** overrides this if you need something else.

:::details nginx configuration for the two sub-domains
Get certificates first (for example `sudo certbot certonly --standalone -d bridge.example.com -d hub.example.com`), then save this as `/etc/nginx/conf.d/antigem.conf` and run `sudo nginx -t && sudo systemctl reload nginx`. Use the ports the app shows if you changed them.

```nginx
map $http_upgrade $connection_upgrade { default upgrade; '' close; }

# bridge: REST + WebSocket
server {
    listen 443 ssl http2;
    server_name bridge.example.com;
    ssl_certificate     /etc/letsencrypt/live/bridge.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bridge.example.com/privkey.pem;

    underscores_in_headers on;          # REQUIRED
    client_max_body_size   512m;

    location / {
        proxy_pass http://127.0.0.1:1236;
        proxy_http_version 1.1;
        proxy_set_header Upgrade    $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host       $host;
        proxy_set_header X-Forwarded-For   $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 1h;
        proxy_send_timeout 1h;
        proxy_buffering off;
        proxy_request_buffering off;
    }
}

# hub: gRPC (HTTP/2)
server {
    listen 443 ssl http2;
    server_name hub.example.com;
    ssl_certificate     /etc/letsencrypt/live/hub.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/hub.example.com/privkey.pem;

    underscores_in_headers on;          # REQUIRED
    client_max_body_size   0;

    location / {
        grpc_pass grpc://127.0.0.1:1237;
        grpc_read_timeout 1h;
        grpc_send_timeout 1h;
    }
}
```

`underscores_in_headers on;` is required: the security header has an underscore, and nginx drops such headers by default, so every request would get `401`. If other sites already use port 443, put it in the `http { }` block instead. On nginx 1.25.1 or newer you can write `listen 443 ssl;` plus `http2 on;`.
:::

:::details Caddy configuration (certificates are automatic)
```text title="Caddyfile"
bridge.example.com {
    reverse_proxy 127.0.0.1:1236
}
hub.example.com {
    reverse_proxy h2c://127.0.0.1:1237
}
```
:::

:::details The proxy access header (a second lock, recommended)
The app can add a secret header, such as `X-AntiGem-Key: <random value>`, to every request, and your proxy refuses any request without it. A stranger who finds your sub-domains then gets nothing, even if the bridge or agy had a bug.

1. In **Settings → Where agents run → Proxy access header**, keep the name `X-AntiGem-Key`, tap **Generate** for the value, and tap **Copy nginx rule**.
2. Put the same value in **every** server block of the bridge and of the hub, on every port that reaches them. For nginx:

```nginx
map $http_x_antigem_key $antigem_key_ok { default 0; "PASTE-THE-VALUE-HERE" 1; }

server {
    server_name bridge.example.com;
    if ($antigem_key_ok = 0) { return 444; }
    # ...
}
```

For Caddy, inside each site block: `@nokey not header X-AntiGem-Key "PASTE-THE-VALUE-HERE"` and `abort @nokey`.

3. Reload the proxy, then tap **Test Bridge** and **Test Hub**: both send the header. If the proxy checks the header and the app sends another value, every request is refused.
:::

## Using it

### What runs where

| Feature | Where |
| :--- | :--- |
| Chats, agents, tools, plugins, MCP servers you add | Server |
| Projects, files, git, the editor's backend, search | Server |
| Terminal tabs, Run configurations, chat commands | Server (over SSH) |
| Browser, Android, Notes and Terminal MCP presets | Phone, reached by the server through SSH reverse tunnels |
| Voice dictation, notifications, floating bubble | Phone |
| **Backups & Restore** | Hidden in server mode: back up the server yourself |

The phone must stay online for the phone-side MCP tools. Chats, files and the agents' sign-ins live on the server; they are separate from the ones on the phone.

### Port forwards

To open a dev server of the server on the phone (for example `npm run dev` on port 5173), add it under **Port forwards** and open `http://127.0.0.1:<phone port>` in the app's browser. This works in both modes. See [Where agents run](../06-settings/04-where-agents-run.md).

### adb from the server to your phone

Agents on the server can use `adb` on your phone. Use **Settings → ADB Connect**: in server mode every step works on the **server's** adb (install, pair, connect). See [Device access](./07-device-access.md). adb is full control of the phone: only connect a server you trust.

### Saved profiles

Save "Home server" and "This phone" as profiles to switch quickly. See [Where agents run](../06-settings/04-where-agents-run.md).

### Updating

The app never updates the bridge on the server. When the app shows **Update the IDE bridge** (after an app update), build the bridge again from the new source and replace it:

```bash title="On your PC"
scp agy_ide_bridge_linux_amd64 antigem@your.server:~/.antigem/agy_ide_bridge.new
ssh antigem@your.server 'chmod +x ~/.antigem/agy_ide_bridge.new && mv -f ~/.antigem/agy_ide_bridge.new ~/.antigem/agy_ide_bridge'
```

Then tap **Restart** in **Server control**. Copying to `.new` first avoids "Text file busy". The agents update like on the phone: **Check for updates** on each agent's page.

## Security

The security token is a 12-character secret the app makes and starts the server with: you never type it on the server. The bridge and the hub refuse requests without it. Over the SSH tunnel it is encrypted; on the internet only `https://` protects it.

Do as much of this as you can:

- A dedicated VPS and a dedicated user **without sudo**. Nothing else of value on that machine.
- Firewall: only SSH in tunnel mode; only 22, 80 and 443 behind a proxy. Check IPv4 **and** IPv6, and remember that Docker opens ports around `ufw`.
- SSH: key login only (`PasswordAuthentication no`), no root login, `fail2ban`, a passphrase on the key.
- In Server mode, the proxy access header on every address and port.
- Prefer a VPN (WireGuard, Tailscale) over a public address.
- Change the token (**Randomize**, then **Restart**), the header and the SSH key now and then, and after any doubt.
- Keep backups of the server (`~/.gemini`, `~/.claude`, your projects) off the server, encrypted.

> [!WARNING]
> The app stores the SSH key, password, token and header in its own settings, not encrypted. Protect the phone with a screen lock.

:::details What an attacker gets if something leaks
| If this leaks | The attacker can |
| :--- | :--- |
| The token (and they can reach the bridge) | Read and write all files of the server user, start the agents, use git |
| The token and the hub address | Also use your Antigravity chats |
| The proxy access header only | Pass the proxy; they still need the token |
| Your SSH key or password | Get a shell as the server user |
| The server itself | All of the above, and reach your phone through the tunnels: its browser, Android and notes tools, and adb if you connected it |
| The agents' accounts | Use them: they are stored in the server user's home |
:::

:::details Check what is reachable from the internet
On the server:

```bash
sudo ss -ltnp           # every line should show 127.0.0.1 / [::1], except sshd and your proxy
sudo ufw status verbose
```

From another machine, try the bridge without the token: `curl -i https://bridge.example.com/api/server/info` must not answer `200`.
:::

:::details If you think the server was hacked
1. Stop the bridge: `tmux kill-session -t antigem-bridge; pkill -f agy_ide_bridge; pkill -f 'agy --hub-port'`.
2. Remove the SSH keys you used from `~/.ssh/authorized_keys`, change the passwords, and check `crontab -l` and `~/.bashrc` for things you didn't add.
3. On the phone: forget the paired computer in **Developer options → Wireless debugging** and turn adb off.
4. Sign out of the agents' accounts used on the server and end their sessions on the accounts' websites.
5. Change the token, the proxy header and the SSH key.
6. Rebuild the server from scratch instead of cleaning it.
:::

## Troubleshooting

Work from the bottom up: each layer must work before the next one can.

:::details Check it layer by layer
| # | Check | Where | Expected |
| :--- | :--- | :--- | :--- |
| 1 | **Test SSH** | App | The login works |
| 2 | The bridge file is there | Server: `ls -l ~/.antigem/agy_ide_bridge` | Has `x`, right CPU |
| 3 | The bridge runs | Server: `tmux ls` | Session `antigem-bridge` |
| 4 | It answers locally | Server: `curl -s http://127.0.0.1:1236/api/health` | `{"status":"ok",…}` |
| 5 | The ports listen | Server: `ss -ltnp \| grep -E '1236\|1237'` | Both listening |
| 6 | The proxy reaches it (Server mode) | Anywhere: `curl -s https://bridge.example.com/api/health` | Same answer |
| 7 | The token is accepted | **Test Bridge** | "Bridge reachable…" |
| 8 | The hub is reachable | **Test Hub** | "Hub reachable…" |

Logs: **Server log** in **Server control**, `tail -f ~/.antigem/bridge.log` on the server, or live with `tmux attach -t antigem-bridge` (leave with `Ctrl-b` then `d`; `Ctrl-c` stops the bridge).
:::

:::details "The bridge is not on the server"
The bridge file isn't at the path the app uses. Copy it (see Set it up), or fix **Bridge binary on the server** under **Advanced**.
:::

:::details "The bridge on the server is not executable" or "The bridge path on the server is a folder"
Run `chmod +x ~/.antigem/agy_ide_bridge`, or point the path at the file, not at a folder.
:::

:::details "The bridge stopped right after it was started"
It crashed; the message shows its last log lines. Common causes: a port already in use, the wrong CPU build, or agy installed somewhere the AntiGem user can't write (keep it in `~/.local/bin`, or the hub fails with "Failed to patch AGY binary").
:::

:::details A port is already in use
Something else holds the port, often an old bridge. On the server:

```bash
ss -ltnp | grep -E '1236|1237'
pgrep -af agy_ide_bridge
tmux kill-session -t antigem-bridge
pkill -f 'agy --hub-port'
```

Then tap **Start**. In SSH tunnel mode, the same ports must also be free on the phone: if not, use other ports in both addresses.
:::

:::details "SSH login failed", "timed out" or "refused"
Login failed: wrong user, password, key or passphrase; try the same login from a PC. Timed out or refused: wrong host or port, a firewall, or sshd isn't running.
:::

:::details "The server's SSH host key changed"
If you rebuilt the server, tap **Forget host key**. If you didn't, someone may be in the middle: don't connect.
:::

:::details "Update the IDE bridge"
The bridge's version differs from the app's. Build the bridge from the same source version as the app and replace it (see Updating). **Later** only hides the dialog until you open the app again.
:::

:::details The bridge runs on the server, but the app can't reach https://…
The bridge is fine; the way from the phone isn't. Check DNS, the firewall, the certificate and the proxy, for example with `curl` from your PC.
:::

:::details Test Bridge: token rejected, or 401 on everything
nginx is missing `underscores_in_headers on;`, or the server runs with another token: tap **Restart** in **Server control**. After 30 wrong tokens from one address, the bridge blocks it for 5 minutes (HTTP 429).
:::

:::details Test Hub is green, but Antigravity chats never answer
The proxy doesn't speak HTTP/2 to the hub or drops gRPC trailers. Use nginx (`grpc_pass`) or Caddy (`h2c://`).
:::

:::details Everything pauses now and then (SSH tunnel)
Everything goes through one SSH connection. When it drops (switching networks, the phone sleeping), the app reconnects by itself, after 3 seconds and then up to every 30 seconds. A long reply that was streaming may need to be reopened. If it happens a lot, consider **Server** mode.
:::

:::details Start from scratch
1. In the app, tap **Stop** in **Server control**.
2. On the server: `tmux kill-session -t antigem-bridge; pkill -f agy_ide_bridge; pkill -f 'agy --hub-port'`.
3. Check that `~/.antigem/agy_ide_bridge --help` works, then tap **Start**.

Your chats and projects are not touched.
:::

:::details Running the bridge by hand (for debugging)
The app runs this inside tmux. Stop the app's session first (`tmux kill-session -t antigem-bridge`):

```bash
~/.antigem/agy_ide_bridge -f --token <12 chars> -p 1236 --hub-port 1237 --bind 127.0.0.1 \
    --bin ~/.local/bin/agy --claude-bin ~/.local/bin/claude
```

`--token` must be the app's token, `-p` / `--hub-port` are the ports, `--bind` is `127.0.0.1` for the tunnel and behind a proxy or `0.0.0.0` for a direct address. While the app's bridge runs, `ps aux | grep agy_ide_bridge` shows the exact command it uses.
:::

:::cards
- [Where agents run](../06-settings/04-where-agents-run.md) — Every option of the settings page.
- [Run agents on a VPS](../07-guides/14-run-agents-on-a-vps.md) — The quick version.
- [Connect to PC](./03-connect-to-pc.md) — Use the agents on your PC instead.
- [Device access](./07-device-access.md) — ADB Connect, also from the server.
:::
