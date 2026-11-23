// Links and facts used across the site. Change them here.
export const site = {
  name: 'AntiGem',
  tagline: 'A gem that defies gravity.',
  repo: 'https://github.com/santoshkurmi/antigem',
  releases: 'https://github.com/santoshkurmi/antigem/releases',
  latest: 'https://github.com/santoshkurmi/antigem/releases/latest',
  issues: 'https://github.com/santoshkurmi/antigem/issues',
  discord: 'https://discord.gg/pJvvTDTc6G',
  whatsapp: 'https://chat.whatsapp.com/IGQX8q9zSVV0RarG70sclV',
  vscode: 'https://github.com/Santoshkurmi/antigem_vscode_extension',
  pluginSdk: 'https://github.com/santoshkurmi/antigem/tree/standalone/extension_docs',
  video: 'https://github.com/user-attachments/assets/821731b9-9713-4988-b358-09dc62aef006',
  /** This website's own repository. */
  websiteRepo: 'https://github.com/santoshkurmi/antigem_website',
  /** "Edit this page" links: this + the page's path inside src/content/docs. */
  editDocs: 'https://github.com/santoshkurmi/antigem_website/edit/main/src/content/docs/',
  /** The app's version and changelog, read in the browser for the "New version" badge. */
  versionJson: 'https://raw.githubusercontent.com/santoshkurmi/antigem/standalone/version.json',
  minAndroid: 'Android 7.0+',
  license: 'GPLv3',
}

/** URL of a file in public/, with the site's base path in front. */
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '')

/** The base path without the trailing slash, like `/antigem` ('' at the domain root). */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
/** The router's location.pathname includes the base; this gives the path inside the site, like `/docs`. */
export const stripBase = (path: string) => (BASE && path.startsWith(BASE) ? path.slice(BASE.length) || '/' : path)
