import { Navigate } from '@solidjs/router'
import { pages } from 'virtual:docs'

// /docs opens the first page.
export default function DocsIndex() {
  return <Navigate href={`/docs/${pages[0]?.slug ?? ''}`} />
}
