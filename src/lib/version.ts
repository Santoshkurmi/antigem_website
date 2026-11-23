import { site } from './site'

// The app's version.json (in the antigem repo), fetched in the browser so the site always shows the newest
// release without being rebuilt. Kept for the browser session; if it can't be loaded, the badge stays generic.
export interface VersionInfo {
  version_name: string
  beta?: { version_name: string }
}

const KEY = 'ag-version'

export async function loadVersion(): Promise<VersionInfo | undefined> {
  try {
    const cached = sessionStorage.getItem(KEY)
    if (cached) return JSON.parse(cached)
  } catch {}
  try {
    const res = await fetch(site.versionJson)
    if (!res.ok) return
    const data = (await res.json()) as VersionInfo
    const info: VersionInfo = { version_name: data.version_name, beta: data.beta && { version_name: data.beta.version_name } }
    try {
      sessionStorage.setItem(KEY, JSON.stringify(info))
    } catch {}
    return info
  } catch {
    return
  }
}
