/* @refresh reload */
import { render } from 'solid-js/web'
import { Route, Router } from '@solidjs/router'
import { lazy } from 'solid-js'
import '@fontsource-variable/inter'
import './styles/themes.css'
import './styles/base.css'
import App from './App'
import Home from './pages/Home'
import { BASE } from './lib/site'

// The home page is in the main bundle; every other page loads when it is first opened.
const Showcase = lazy(() => import('./pages/Showcase'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const DocsLayout = lazy(() => import('./pages/docs/DocsLayout'))
const DocsIndex = lazy(() => import('./pages/docs/DocsIndex'))
const DocPage = lazy(() => import('./pages/docs/DocPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

render(
  () => (
    <Router root={App} base={BASE}>
      <Route path="/" component={Home} />
      <Route path="/showcase" component={Showcase} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/docs" component={DocsLayout}>
        <Route path="/" component={DocsIndex} />
        <Route path="/*slug" component={DocPage} />
      </Route>
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  document.getElementById('root')!,
)
