import { A } from '@solidjs/router'
import { Discord, GitHub, Logo, WhatsApp } from './Brand'
import { site } from '~/lib/site'

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <A href="/" class="brand">
              <Logo />
              <span>AntiGem</span>
            </A>
            <p>An AI coding workspace for Android. Four agents, a real Linux terminal, a code editor and a browser, in your pocket.</p>
            <div class="socials">
              <a class="icon-btn" href={site.repo} target="_blank" rel="noopener" aria-label="GitHub"><GitHub /></a>
              <a class="icon-btn" href={site.discord} target="_blank" rel="noopener" aria-label="Discord"><Discord /></a>
              <a class="icon-btn" href={site.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp community"><WhatsApp /></a>
            </div>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><A href="/showcase">Showcase</A></li>
              <li><A href="/how-it-works">How it works</A></li>
              <li><a href={site.releases} target="_blank" rel="noopener">Download</a></li>
              <li><a href={site.releases} target="_blank" rel="noopener">Release notes</a></li>
            </ul>
          </div>
          <div>
            <h4>Docs</h4>
            <ul>
              <li><A href="/docs/getting-started/installation">Install</A></li>
              <li><A href="/docs/agents/overview">Agents</A></li>
              <li><A href="/docs/power-features/jarvis">Jarvis</A></li>
              <li><A href="/docs/help/troubleshooting">Troubleshooting</A></li>
            </ul>
          </div>
          <div>
            <h4>Community</h4>
            <ul>
              <li><a href={site.discord} target="_blank" rel="noopener">Discord</a></li>
              <li><a href={site.whatsapp} target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href={site.issues} target="_blank" rel="noopener">Report a bug</a></li>
            </ul>
          </div>
          <div>
            <h4>Build on it</h4>
            <ul>
              <li><a href={site.vscode} target="_blank" rel="noopener">VS Code extension</a></li>
              <li><a href={site.pluginSdk} target="_blank" rel="noopener">Plugin SDK</a></li>
              <li><a href={site.repo} target="_blank" rel="noopener">Source code</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© {new Date().getFullYear()} AntiGem · Free and open source under {site.license}</span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
