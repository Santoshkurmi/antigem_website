import { site } from './site'

// The app's version.json (in the antigem repo), fetched in the browser so the site always shows the newest
// release without being rebuilt. Kept for the browser session; if it can't be loaded, the badge stays generic.
export interface VersionInfo {
  version_name: string
  version_code?: number
  beta?: { version_name: string; version_code?: number }
}

/** The newest release: the beta only when its version_code is higher than the stable one's (the app's rule too). */
export function newestRelease(v: VersionInfo | undefined): string | undefined {
  if (!v) return
  const beta = v.beta
  if (beta?.version_name && (beta.version_code ?? 0) > (v.version_code ?? 0)) return beta.version_name
  return v.version_name
}

// v2: also keeps the version codes (an older cached copy without them is ignored)
const KEY = 'ag-version-v2'

export async function loadVersion(): Promise<VersionInfo | undefined> {
  try {
    const cached = sessionStorage.getItem(KEY)
    if (cached) return JSON.parse(cached)
  } catch {}
  try {
    const res = await fetch(site.versionJson)
    if (!res.ok) return
    const data = (await res.json()) as VersionInfo
    const info: VersionInfo = {
      version_name: data.version_name,
      version_code: data.version_code,
      beta: data.beta && { version_name: data.beta.version_name, version_code: data.beta.version_code },
    }
    try {
      sessionStorage.setItem(KEY, JSON.stringify(info))
    } catch {}
    return info
  } catch {
    return
  }
}
