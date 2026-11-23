---
title: STEM and diagrams
description: Chemistry, molecules, graphs, geometry, physics simulations, circuits and Mermaid diagrams drawn right in the chat, offline.
updated: 2.0.4-beta.2
---

Chats can show more than text. Turn these on and the agents can answer with chemical equations, molecule drawings, function graphs, draggable geometry, physics simulations you can touch, circuits and other TeX figures, and diagrams. Great for study notes. Everything runs on the phone, offline.

**Where:** ☰ → **Settings** → **STEM & diagrams**

## Set it up

:::steps
### Download the offline bundle

Tap **Download bundle**. It downloads the drawing libraries (SmilesDrawer, function-plot, JSXGraph, Matter.js, TikZJax and Mermaid, at fixed versions) from AntiGem's GitHub release, checks them against a fixed checksum, and keeps them in the app's private storage.

### Turn on what you want

Under **What to use**, switch on the kinds of blocks you need. All are off at first. A block that's off shows as plain code, and agents aren't told about it.

### Tell the agents

Keep **Tell agents about these blocks** on: every chat gets a short list of the blocks that work here, with their exact versions (in the [global context](../04-tools-and-extensions/07-global-context.md), on the first message). **Show exactly what is sent** shows the text.
:::

Then ask, for example: "Explain photosynthesis with the chemical equation", "Plot sin(x) and its derivative", "Simulate a ball bouncing down stairs".

## The blocks

| Block | What it draws | Library |
| :--- | :--- | :--- |
| **Chemical equations** | `\ce{…}` reactions and formulas inside `$…$`, drawn natively (no download needed) | mhchem syntax |
| **Molecule structures** | 2D structures from SMILES strings (` ```smiles `) | SmilesDrawer 2.4.1 |
| **Function plots** | Graphs, derivatives, tangents, areas (` ```functionplot `) | function-plot 1.26.0 |
| **Interactive geometry** | Draggable geometry, loci, graphs (` ```jsxgraph `) | JSXGraph 1.14.3 |
| **Physics simulations** | 2D rigid-body simulations you can touch (` ```matter `) | Matter.js 0.20.0 |
| **TikZ, circuits & figures** | TikZ, circuitikz, pgfplots, chemfig, tikz-cd (` ```tikz `), compiled once with TeX and cached | TikZJax 1.0.0-beta24 |
| **Offline Mermaid** | Mermaid diagrams use the bundled copy instead of loading it from the internet | Mermaid 10.9.8 |

Normal math (`$…$` and `$$…$$`) works without any of these.

**Guide: syntax and live examples** opens the **STEM & diagrams guide** with the syntax of each block and examples that run.

## Performance

> [!WARNING]
> These blocks are heavy on the phone. Each diagram block runs in its own web view, and TikZ pictures run TeX on the phone. Chats with many diagrams can lag or scroll less smoothly, especially on older phones. Switch off what you don't use.

**Clear TikZ cache** frees the space used by compiled TikZ pictures (they're compiled again when shown).

## Remove the bundle

**Remove** deletes the downloaded libraries. Blocks that need them show as code until you download the bundle again. Compiled TikZ pictures are removed too.

## Troubleshooting

:::details A block shows as code instead of a drawing
Its kind is switched off under **What to use**, or the bundle isn't downloaded. Turn it on, or tap **Download bundle**.
:::

:::details The download fails
Check your connection and tap **Try again**. The bundle comes from GitHub; if GitHub is blocked on your network, try another network.
:::

:::details The agent never uses these blocks
Keep **Tell agents about these blocks** on and start a new chat (it's sent on the first message). Ask for it directly: "draw it as a molecule" or "show a graph".
:::
