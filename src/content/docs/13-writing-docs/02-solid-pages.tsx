/* ---
title: Pages as Solid components
sidebar: Solid pages
description: When Markdown isn't enough, write a docs page as a Solid component, with state and interactive parts.
--- */
import { createSignal, For } from 'solid-js'
import { Callout, Card, Cards, Code, Gallery, Shot, Step, Steps } from '~/components/docs'
import { themes, setTheme } from '~/lib/theme'

// A docs page can be a .tsx file too. Put the front matter in a comment at the very top (like above),
// and export the page as the default export. It's loaded only when someone opens it.
export default function SolidPages() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <p>
        A <code>.tsx</code> file in <code>src/content/docs</code> becomes a page just like a Markdown file. Use it for things Markdown
        can't do: live demos, calculators, anything with state.
      </p>

      <h2 id="front-matter">Front matter</h2>
      <p>The title and description go in a comment at the very top of the file, written like Markdown front matter:</p>
      <Code
        title="03-my-page.tsx"
        code={`/* ---
title: My page
description: One line about it.
--- */
import { Steps, Step, Shot, Callout } from '~/components/docs'

export default function MyPage() {
  return <p>Hello!</p>
}`}
      />

      <h2 id="building-blocks">Building blocks</h2>
      <p>
        <code>~/components/docs</code> has the same blocks as the Markdown syntax, so both kinds of page look the same:
      </p>
      <Steps>
        <Step title="Steps with screenshots" shot="agent_picker">
          <p>
            <code>{'<Step title="…" shot="agent_picker">'}</code> puts a screenshot beside the step. Use the file name of any screenshot
            in <code>public/screens</code>.
          </p>
        </Step>
        <Step title="Callouts">
          <Callout type="tip">
            <code>{'<Callout type="tip">'}</code>: note, tip, important, warning or caution.
          </Callout>
        </Step>
        <Step title="Galleries and cards">
          <p>
            <code>{'<Gallery shots={[…]} />'}</code>, <code>{'<Cards>'}</code> and <code>{'<Card href="…" title="…">'}</code>.
          </p>
        </Step>
      </Steps>

      <h2 id="live-demo">A live demo</h2>
      <p>Components can have state. This switches the site's theme:</p>
      <div class="cards">
        <For each={themes}>
          {(t) => (
            <button class="card" style={{ 'text-align': 'left' }} onClick={() => (setTheme(t.id), setCount(count() + 1))}>
              <strong>{t.name}</strong>
              <span>
                A {t.scheme} theme. <span style={{ color: t.swatch[1] }}>■</span> <span style={{ color: t.swatch[2] }}>■</span>
              </span>
            </button>
          )}
        </For>
      </div>
      <p>You switched themes {count()} time{count() === 1 ? '' : 's'} on this page.</p>

      <Gallery shots={[{ src: 'themes_light', caption: 'Themes in the app' }, { src: 'settings', caption: 'Settings' }]} />

      <Callout type="note" title="Good to know">
        <p>
          Headings need an <code>id</code> (like <code>{'<h2 id="live-demo">'}</code>) to show up in <strong>On this page</strong>.
          Search only covers the title and description of <code>.tsx</code> pages.
        </p>
      </Callout>

      <Cards>
        <Card href="/docs/writing-docs/markdown-guide" title="Markdown guide">
          Every Markdown feature, with examples.
        </Card>
        <Card href="https://docs.solidjs.com" title="Solid docs">
          Learn more about writing Solid components.
        </Card>
      </Cards>

      <Shot src="solar_system" caption="Built from one prompt" />
    </>
  )
}
