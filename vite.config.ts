import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import docs from './plugins/docs.ts'

// The site is served from https://santoshkurmi.github.io/antigem/ (GitHub Pages), so every URL starts with
// /antigem/. For a custom domain, build with SITE_BASE=/ (and set VITE_SITE_URL in .env).
export default defineConfig({
  base: process.env.SITE_BASE ?? '/antigem/',
  plugins: [
    docs({
      dir: 'src/content/docs',
      // Pages that get their own index.html on build (docs pages are added automatically).
      routes: [
        { path: 'showcase', title: 'Showcase · AntiGem', description: 'Screenshots and a video tour of AntiGem: AI coding agents, a Linux terminal, a code editor and a browser on an Android phone.' },
        { path: 'how-it-works', title: 'How it works · AntiGem', description: 'How AntiGem runs Antigravity, Claude Code, OpenCode and Codex on Android: the app, the Go bridge, the Linux environment and MCP tools.' },
        { path: 'docs', title: 'Docs · AntiGem', description: 'Step-by-step guides for every part of AntiGem.' },
      ],
    }),
    solid(),
  ],
  resolve: {
    alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    target: 'es2020',
    modulePreload: { polyfill: false },
    reportCompressedSize: true,
  },
})
