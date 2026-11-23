---
title: Bring your own models
description: "Use OpenRouter, Kimi, DeepSeek, Z.ai, Ollama, LM Studio or any OpenAI- or Anthropic-compatible API, with your own keys, free models and local models."
updated: 2.0.4-beta.2
---

You aren't tied to one company's models. Two agents can use other [providers](../01-getting-started/02-key-concepts.md#provider) with your own keys, and their models show in the same model picker as the rest. Antigravity always uses your Google account, and Codex your ChatGPT account.

**Where:** ☰ (top left) → **Settings** → **OpenCode** → **Custom providers**, or **Settings** → **Claude Code** → **Custom providers**

## Which agent to use

| | [OpenCode](./04-opencode.md) | [Claude Code](./03-claude-code.md) |
| :--- | :--- | :--- |
| **Works with** | 200+ built-in providers, any OpenAI-compatible API, any Anthropic-compatible API | Anthropic-compatible APIs only |
| **Examples** | OpenRouter, Groq, Ollama, LM Studio, vLLM, LiteLLM, a company gateway, OpenCode's free models | OpenRouter, Kimi (Moonshot), DeepSeek, Z.ai (GLM) |
| **Sign-in** | API key, browser or code sign-in, or a subscription (ChatGPT, GitHub Copilot, SuperGrok…) | API key |

The app's own advice: **third-party models work better in OpenCode.** Claude Code only speaks Anthropic's API, so the provider must offer an Anthropic-compatible endpoint, and tools or thinking can break on the way. OpenCode talks to each provider in its own format. Use Claude Code's providers when you want Claude Code itself with another model.

## OpenCode: built-in providers

Most providers are already built into OpenCode: open **Settings → OpenCode → Custom providers**, tap a tile under **Connect** or **All providers**, and sign in or paste a key. The steps are on the [OpenCode](./04-opencode.md) page.

## OpenCode: add any API by its address

For an API that isn't built in, or a model server of your own, use **Manual** at the bottom of the same page.

:::steps
### Open the editor

Open **Settings → OpenCode → Custom providers** and tap **Add manually** (under **Manual**). **Add a custom provider** opens full screen.

### Fill in the connection

- **Name**: any name, for example `Ollama on my PC`.
- **OpenAI-compatible** or **Anthropic**: the kind of API.
- **Base URL**: the API's address, usually ending in `/v1`, for example `http://localhost:11434/v1`.
- **API key**: the provider's key. It is optional for local servers.

### Fetch the models

Tap **Fetch from endpoint**. The app asks the API for its models. For a new provider, every model it lists is ticked: untick the ones you don't want.

If the API can't list its models, type a model id under **Add a model id by hand** (for example `llama3.1`) and tap **+**.

### Check what each model can do

Each ticked model has three switches:

- **Images**: you can attach pictures.
- **Reasoning**: the chat shows its thinking.
- **Tools**: it can edit files and run commands. Turn it off only for models that fail with tools.

**Fetch from endpoint** fills these in where it can find out, and shows where from (for example **auto: ollama**). **Images** and **Reasoning** stay off when it can't find out: turn them on yourself if you know the model can do them.

### Save

Tap **Save**. The provider shows under **Manual** with its kind, its number of models and its address. Its models are now in the model picker of OpenCode chats.
:::

![The OpenCode custom provider editor: connection, Fetch from endpoint and the model list with Images, Reasoning and Tools](/screens/opencode_custom_provider.webp "frame")

### Long model lists

Some APIs list hundreds of models (OpenRouter has over 400). The editor helps:

- **Search N models** finds a model by name or id.
- The filters **All**, **Added**, **Images** and **Reasoning** show how many models each has.
- **Select all** / **Select none** ticks or unticks every model that is shown.

### Where the app finds out what a model can do

When you tap **Fetch from endpoint**, the app checks, in this order:

1. The API's own model list (OpenRouter, Mistral, Fireworks, LM Studio, vLLM and others say what their models can do).
2. Ollama, which reports each model's abilities.
3. The models.dev catalog, by model id (for gateways such as LiteLLM that serve well-known models).

### Edit or remove

Tap the pencil next to a provider to change it. Leave **API key** empty to keep the saved key. The bin removes the provider.

## Claude Code: custom providers

:::steps
### Open the page

Open **Settings → Claude Code → Custom providers**. It is titled **Other Anthropic-compatible APIs**.

### Pick a preset

Under **Add a provider**, tap **+ OpenRouter**, **+ Kimi**, **+ DeepSeek**, **+ Z.ai** or **+ Custom**. The presets fill in the address (Kimi, DeepSeek and Z.ai also a first model and the models address). Everything stays editable.

### Fill in the connection

- **Name**.
- **Base URL**: Claude Code calls `<base URL>/v1/messages`.
- **API key**.
- **How the key is sent**: **Bearer token** (used by most providers) or **x-api-key header** (for providers that copy Anthropic's own scheme). **Default:** **Bearer token**.

Tap **Test connection**: it sends one short message to the first model with these exact settings.

### Add the models

Tap **Fetch the provider's list** to load its models (enter the API key first), then tick the ones you want and tap **Add** *N*. For OpenRouter, **Only free models that can call tools** keeps the list to free models that work with Claude Code's tools (**Default:** on). Without a **Models URL**, type model ids yourself (for example `kimi-k2-0905-preview`) and tap **+**.

### Save

Tap **Save**. The provider's models now show in the Claude Code model picker, in their own section marked **custom provider**.
:::

### Models

The models you added, each with **Test**, edit and remove buttons. Tap a model to set:

- **Display name (optional)**.
- **Context window (tokens)**: used by the **Context** chip and for auto-compact. Blank means the provider's default. A model without a size shows "context unknown (tap to set)" in amber: set it, so the chat compacts at the right time.
- **Max output (tokens, optional)**.
- **Thinking**: **Inherit** (the provider's setting), **Never send** or **Custom budget** (at least 1024 tokens; sent when Thinking is on in the chat).

**Field mapping & pagination…** tells the app how to read an unusual model list. The code icon next to **Fetch the provider's list** shows the raw answer, so you can tell a server problem from an app problem.

### Behavior

- **Background model (optional)**: the model for titles and summaries. **Default:** the chat's model. Requests for Sonnet, Opus and subagents always go to the chat's own model, so the provider never gets a Claude model name.
- **Send a thinking budget**: off means Thinking in the chat never sends a token budget (safest; many providers reject it). On sends the **Thinking budget (tokens)** below. **Default:** off.
- **Default context window** and **Default max output**: for models without their own size, for example `128k`.
- **Request timeout, seconds (optional)**. **Default:** Claude Code's own.
- **Retries when a request fails (0-10)**: rate limits, rejected keys and network errors are retried with growing waits; 0 fails at once. **Default:** 3.
- **Disable experimental betas**: turn on if the provider answers 400 about unknown fields or beta headers. **Default:** off.

### Advanced

**Headers (one per line)** and **Environment (NAME=value, one per line)** for this provider's chats. They win over everything above, so they can fix a provider's quirks.

### When changes apply

Changes apply the next time a chat's Claude process starts. When you save changes to a provider you added before, **Saved *name*** asks: **Restart idle chats now** restarts the chats on this provider that aren't replying (the conversation is kept), **Later** leaves them. New chats and chats you reopen use the new settings right away.

### Using a provider in a chat

Pick the provider's model in the model picker. Start a **new** chat for it: moving a running chat to another provider sends the whole conversation again without cache, which costs much more. The app warns you with **Switch provider in this chat?**.

Your Claude login and other chats are not changed. Plan usage and cost only show for Claude's own models: check the provider's dashboard for a provider chat.

> [!NOTE]
> If your `settings.json` already sends every chat to another endpoint, the page shows "settings.json sends every chat to …". Tap **Move into a provider** so only the chats you choose use it.

## Free models

- **OpenCode** has its own free models. They work with no account: pick a model marked **free** in the model picker.
- **OpenRouter** has free models too. Add your OpenRouter key in OpenCode (the **OpenRouter** tile), or in Claude Code with **+ OpenRouter** and **Only free models that can call tools** on.

Step by step: [Use free models](../07-guides/03-use-free-models.md).

## Local models

A local model runs on a machine you own, with a server such as Ollama or LM Studio. Add it in OpenCode with **Add manually**, as an **OpenAI-compatible** provider. The API key can stay empty.

The address must be reachable from where your agents run: this phone, or your server in [server mode](../05-power-features/02-server-mode.md).

| The model server runs on | Base URL |
| :--- | :--- |
| This phone (started in the terminal) | `http://127.0.0.1:<port>/v1` |
| A PC on the same Wi-Fi | `http://<the PC's address>:<port>/v1`, for example `http://192.168.1.20:11434/v1` |

For a PC:

- The model server must listen on all addresses (`0.0.0.0`), not only on `localhost`. By default Ollama and LM Studio only accept the PC itself. For Ollama, set `OLLAMA_HOST=0.0.0.0` before you start it; in LM Studio, turn on serving on the local network.
- The PC's firewall must let the port in. Ollama uses port 11434 and LM Studio port 1234 unless you changed them.
- Find the PC's address in its network settings. The phone and the PC must be on the same network.

Step by step: [Use local models on your PC](../07-guides/04-local-models-on-your-pc.md).

## Troubleshooting

:::details OpenCode: "The endpoint listed no models."
The API answered but listed nothing. Check the **Base URL** (most end in `/v1`) and the key. If the API can't list models, type the model id by hand.
:::

:::details Claude Code: "Could not fetch the models"
Tap the code icon to see the raw answer. "No answer from the server (network or URL problem)." means the address is wrong or not reachable. "The server refused the request (HTTP …): not an app problem." means the key or the URL is wrong for that provider. If the list is unusual, set **Field mapping & pagination…**.
:::

:::details Claude Code: "Connection failed" after Test connection
Read the error and hint under it. Check the **Base URL** (Claude Code adds `/v1/messages` itself), the key and **How the key is sent**.
:::

:::details A local model doesn't answer from the phone
The phone can't reach it. Check that the model server listens on `0.0.0.0`, that the firewall lets the port in, and that you used the PC's address, not `localhost`. `localhost` on the phone means the phone itself.
:::

:::details The model doesn't edit files or run commands
It can't use tools, or **Tools** is off for it. In OpenCode's provider editor, turn **Tools** on. If the model really can't use tools, pick another model.
:::

:::details The model doesn't see my images
In OpenCode's provider editor, turn **Images** on for that model, if it can read images. The message bar warns you when you attach an image to a model that can't read images.
:::

:::details The provider answers 400 about unknown fields or beta headers (Claude Code)
Turn on **Disable experimental betas** in the provider's **Behavior**.
:::

:::details Errors when Thinking is on (Claude Code)
Many providers reject a thinking budget. Turn **Send a thinking budget** off, or set the model's **Thinking** to **Never send**.
:::

:::details The Context chip is wrong, or the chat never compacts (Claude Code)
The model's context window is unknown. Set **Context window (tokens)** for the model, or **Default context window** for the provider.
:::

:::details I changed a provider, but a chat still uses the old settings (Claude Code)
A running chat keeps its settings until its process restarts. Tap **Restart idle chats now** after saving, or use **Restart chat** in the chat's menu in the chat list.
:::

:::cards
- [OpenCode](./04-opencode.md) — Built-in providers and sign-ins.
- [Claude Code](./03-claude-code.md) — Everything else about Claude Code.
- [Models, thinking and usage limits](./06-models-and-usage.md) — The model picker.
- [Use local models on your PC](../07-guides/04-local-models-on-your-pc.md) — Ollama or LM Studio, step by step.
:::
