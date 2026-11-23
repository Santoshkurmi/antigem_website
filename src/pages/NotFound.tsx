import { A } from '@solidjs/router'
import ArrowLeft from 'lucide-solid/icons/arrow-left'
import { useTitle } from '~/lib/reveal'

export default function NotFound() {
  useTitle('Page not found · AntiGem')
  return (
    <section class="not-found container">
      <div>
        <div class="code404 grad-text">404</div>
        <h1 style={{ 'font-size': 'clamp(1.5rem, 4vw, 2.2rem)', 'margin-top': '12px' }}>This page defied gravity</h1>
        <p class="lead" style={{ margin: '12px auto 28px' }}>It floated off somewhere. Try the docs search, or head back home.</p>
        <A href="/" class="btn btn-primary">
          <ArrowLeft /> Back home
        </A>
      </div>
    </section>
  )
}
