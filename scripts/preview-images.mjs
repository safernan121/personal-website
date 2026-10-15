// Renders the 1200×630 link-preview images in public/images/previews/ with
// headless Chrome. Run `npm run previews` after changing a logo or this file.
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const root = resolve(import.meta.dirname, '..')
const output = join(root, 'public/images/previews')
const asset = (path) => pathToFileURL(join(root, path)).href
const font = asset('node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2')
const siteMark = readFileSync(join(root, 'public/favicon.svg'), 'utf8')

// The Hogaro shelf mark from src/components/UpcomingProjectList.tsx.
const shelf = `<svg viewBox="0 0 40 40" fill="currentColor"><rect x="9.2" y="11.7" width="5.1" height="6.3" rx="1.4"/><rect x="15.6" y="9.4" width="5.1" height="8.6" rx="1.4"/><rect x="22" y="12.9" width="8.8" height="5.1" rx="1.4"/><rect x="7.8" y="18.8" width="24.4" height="1.6" rx="0.8"/><rect x="9.2" y="22.7" width="8.8" height="5.9" rx="1.4"/><rect x="19.3" y="21.1" width="5.1" height="7.4" rx="1.4"/><rect x="25.7" y="23.4" width="5.1" height="5.1" rx="1.4"/><rect x="7.8" y="29.3" width="24.4" height="1.6" rx="0.8"/></svg>`

const dark = { background: '#101113', heading: '#eef0f4', muted: '#8a909a', accent: '#8fa2ff' }
const light = { background: '#f3f4f2', heading: '#15181d', muted: '#5f6570', accent: '#2a47c4' }

const cards = [
  {
    file: 'default.png',
    theme: dark,
    body: `<div class="site">${siteMark}<p>Santiago Fernández</p></div>`,
  },
  { file: 'the-beacon.png', theme: dark, body: `<img class="logo" src="${asset('public/images/the-beacon/logo.webp')}" alt="">` },
  { file: 'cryptomkt.png', theme: dark, body: `<img class="logo wide" src="${asset('public/images/cryptomkt/logo.png')}" alt="">` },
  { file: 'uppercap.png', theme: light, body: `<img class="logo" src="${asset('public/images/uppercap/logo-2021.png')}" alt="">` },
  { file: 'hogaro.png', theme: light, body: `<div class="hogaro">${shelf}<p>Hogaro</p></div>` },
]

function page({ theme, body, file }) {
  const footer = file === 'default.png' ? '' : `<footer>${siteMark}<span>safernan.dev</span></footer>`
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    @font-face { font-family: Inter; src: url('${font}') format('woff2'); font-weight: 100 900; }
    * { box-sizing: border-box; margin: 0; }
    html, body { width: 1200px; height: 630px; overflow: hidden; }
    body {
      display: flex; align-items: center; justify-content: center; position: relative;
      font-family: Inter, sans-serif; color: ${theme.heading}; background: ${theme.background};
    }
    .logo { width: 760px; max-height: 300px; object-fit: contain; margin-bottom: 40px; }
    .logo.wide { width: 820px; }
    .site { display: flex; flex-direction: column; align-items: center; gap: 40px; }
    .site svg { width: 240px; height: 240px; }
    .site p, .hogaro p { font-size: 64px; font-weight: 650; letter-spacing: -0.03em; }
    .hogaro { display: flex; align-items: center; gap: 28px; margin-bottom: 40px; color: ${theme.accent}; }
    .hogaro svg { width: 150px; height: 150px; }
    .hogaro p { font-size: 104px; color: ${theme.heading}; }
    footer {
      position: absolute; left: 0; right: 0; bottom: 48px;
      display: flex; align-items: center; justify-content: center; gap: 14px;
      font-size: 28px; font-weight: 550; color: ${theme.muted};
    }
    footer svg { width: 40px; height: 40px; }
  </style></head><body>${body}${footer}</body></html>`
}

const workspace = mkdtempSync(join(tmpdir(), 'previews-'))
try {
  for (const card of cards) {
    const html = join(workspace, card.file.replace('.png', '.html'))
    writeFileSync(html, page(card))
    execFileSync(chrome, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
      '--window-size=1200,630', '--virtual-time-budget=2000',
      `--screenshot=${join(output, card.file)}`, pathToFileURL(html).href,
    ], { stdio: 'ignore' })
    console.log(`public/images/previews/${card.file}`)
  }
} finally {
  rmSync(workspace, { recursive: true, force: true })
}
