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
}
