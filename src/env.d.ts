/// <reference types="vite/client" />

declare module 'virtual:docs' {
  import type { Component } from 'solid-js'
  export interface DocHeading {
    depth: number
    text: string
    id: string
  }
  export interface DocPage {
    /** URL part after /docs/, like `getting-started/installation`. */
    slug: string
    /** File path inside src/content/docs. */
    path: string
    kind: 'md' | 'tsx'
    title: string
    /** Shorter title for the sidebar (front matter `sidebar:`), else the title. */
    label: string
    description: string
    draft: boolean
    /** The app version the page was last checked against (front matter `updated:`), or ''. */
    updated: string
    section: string
    headings: DocHeading[]
    load: () => Promise<{ default: string | Component }>
  }
  export interface DocSection {
    slug: string
    title: string
  }
  export const pages: DocPage[]
  export const sections: DocSection[]
  /** Names of the screenshots that exist (public/screens/480/<name>.webp). */
  export const screens: Set<string>
}
