import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { after, before, test } from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { createServer } from 'vite'
import { reviewFixtures } from './fixtures/reviews.mjs'

let server, locale, content, ui, routes, getScrollKey, getPageMetadata
before(async () => {
  server = await createServer({
    server: { middlewareMode: true, hmr: false, ws: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
    appType: 'custom',
  })
  locale = await server.ssrLoadModule('/src/i18n/locale.ts')
  ;({ content } = await server.ssrLoadModule('/src/i18n/useLocale.ts'))
  ;({ ui } = await server.ssrLoadModule('/src/i18n/ui.ts'))
  ;({ localizedRoutes: routes, getScrollKey } = await server.ssrLoadModule('/src/routes.tsx'))
  ;({ getPageMetadata } = await server.ssrLoadModule('/src/pageMetadata.ts'))
})
after(async () => { await server?.close() })

test('Spanish is an explicit path prefix; English stays the default', () => {
  for (const path of ['/', '/about', '/espanol', '/esoteric/about', '/projects/es']) {
    assert.equal(locale.getLocale(path), 'en', path)
  }
  for (const path of ['/es', '/es/', '/es/about', '/es/missing']) {
    assert.equal(locale.getLocale(path), 'es', path)
  }
})

test('Switching languages preserves deep links, notebook tabs, and anchors', () => {
  for (const path of [
    '/', '/about', '/projects/uppercap', '/cheesecake/recipes/the-protein-cloud',
    '/#experience', '/cheesecake?tab=reviews#panel-reviews', '/espanol?next=/es/#about',
  ]) {
    const translated = locale.localizedPath(path, 'es')
    assert.equal(locale.localizedPath(translated, 'en'), path)
    assert.equal(locale.localizedPath(translated, 'es'), translated)
  }
  assert.equal(locale.localizedPath('/es', 'en'), '/')
  assert.equal(locale.localizedPath('/es', 'es'), '/es/')
  assert.equal(locale.localizedPath('/es//about', 'en'), '/about')
  assert.equal(locale.localizedPath('/es//about', 'es'), '/es/about')
})

test('Direct section links have distinct scroll positions across pages and languages', () => {
  const initial = { key: 'default', pathname: '/', search: '', hash: '' }
  const keys = [
    initial,
    { ...initial, hash: '#experience' },
    { ...initial, pathname: '/es/', hash: '#experience' },
    { ...initial, pathname: '/cheesecake', search: '?tab=reviews' },
  ].map(getScrollKey)
  assert.equal(new Set(keys).size, keys.length)
  assert.equal(getScrollKey({ ...initial, key: 'history-entry' }), 'history-entry')
})

// Missing entries, fields, or untranslated prose should fail when content grows.
function checkTranslation(english, spanish, path = '') {
  if (Array.isArray(english)) {
    assert.equal(spanish.length, english.length, `${path}: entry count`)
    english.forEach((value, index) => checkTranslation(value, spanish[index], `${path}.${index}`))
  } else if (english && typeof english === 'object') {
    assert.deepEqual(Object.keys(spanish).sort(), Object.keys(english).sort(), `${path}: fields`)
    for (const key of Object.keys(english)) checkTranslation(english[key], spanish[key], `${path}.${key}`)
  } else if (typeof english === 'string') {
    assert.equal(typeof spanish, 'string', path)
    assert.ok(spanish.trim(), `${path}: empty translation`)
    if (path.startsWith('content.') && (path.endsWith('.shop.name') || ['slug', 'id', 'company', 'src', 'image', 'logo', 'source', 'url', 'website', 'href', 'email'].includes(path.split('.').at(-1)))) {
      assert.equal(spanish, english, `${path}: shared identifier or URL`)
    } else if (english.length > 24) {
      assert.notEqual(spanish, english, `${path}: untranslated prose`)
    }
  } else {
    assert.equal(spanish, english, path)
  }
}

test('Spanish covers the same content and UI, retaining identifiers and sources', () => {
  checkTranslation(content.en, content.es, 'content')
  checkTranslation(ui.en, ui.es, 'ui')
})

const pages = [
  ['/', 'Santiago', 'Santiago'],
  ['/about', 'Hi, I’m Santiago.', 'Hola, soy Santiago.'],
  ['/projects/the-beacon', 'The Beacon', 'The Beacon'],
  ['/projects/cryptomkt', 'CryptoMKT', 'CryptoMKT'],
  ['/projects/uppercap', 'Uppercap', 'Uppercap'],
  ['/projects/hogaro', 'Hogaro', 'Hogaro'],
  ['/cheesecake', 'Cheesecake.', 'Tarta de queso.'],
  ['/cheesecake/recipes/the-protein-cloud', 'The Protein Cloud.', 'La nube proteica.'],
  ['/cheesecake/recipes/ricotta-cheesecake', 'Ricotta Cheesecake.', 'Tarta de queso de ricotta.'],
]

function renderPage(path) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  try { return renderToStaticMarkup(createElement(RouterProvider, { router })) }
  finally { router.dispose() }
}

for (const [path, englishHeading, spanishHeading] of pages) {
  test(`Both languages render ${path} with navigation in the chosen language`, () => {
    for (const [language, heading] of [['en', englishHeading], ['es', spanishHeading]]) {
      const html = renderPage(locale.localizedPath(path, language))
      assert.match(html, /<h1[^>]*>/)
      assert.ok(html.includes(heading), heading)
      assert.ok(html.includes(`aria-label="${ui[language].mainNavigation}"`))
      for (const link of html.matchAll(/<a\b([^>]+)>/g)) {
        if (/\bhreflang=/i.test(link[1])) continue
        const href = link[1].match(/href="([^"]+)"/)?.[1]
        if (href?.startsWith('/') && !href.startsWith('/images/')) {
          assert.equal(locale.getLocale(href.split(/[?#]/)[0]), language, href)
        }
      }
    }
  })
}

test('Every sitemap page has its own link preview in both languages', async () => {
  const sitemap = await readFile('public/sitemap.xml', 'utf8')
  for (const [, url] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const { pathname } = new URL(url)
    const { title, description, image } = getPageMetadata(pathname)
    const language = locale.getLocale(pathname)
    assert.ok(!title.startsWith(ui[language].notFoundTitle), pathname)
    assert.ok(description.trim() && image.alt.trim(), pathname)
    await readFile(`public${image.src}`)
    const slug = pathname.match(/\/projects\/([^/]+)$/)?.[1]
    assert.equal(image.src, `/images/previews/${slug ?? 'default'}.png`, pathname)
  }
  assert.ok(getPageMetadata('/es/projects/missing').title.startsWith(ui.es.notFoundTitle))
})

test('Spanish recipe cards retain translated baking and chilling details', () => {
  const html = renderPage('/es/cheesecake')
  assert.ok(html.includes('Horneado: 35–45 minutos'))
  assert.ok(html.includes('Refrigeración: Al menos 3–4 horas'))
})

test('Reviews can be opened directly in either language', () => {
  for (const language of ['en', 'es']) {
    const html = renderPage(locale.localizedPath('/cheesecake?tab=reviews', language))
    assert.match(html, /id="tab-reviews" aria-selected="true"/)
    for (const review of content[language].reviews) {
      assert.ok(html.includes(review.title))
    }
    assert.ok(!html.includes(content[language].cheesecake.tabs[1].status))
  }
})

test('Empty review collections retain the translated empty state', () => {
  for (const language of ['en', 'es']) {
    const reviews = content[language].reviews
    const original = [...reviews]
    reviews.length = 0
    try {
      const html = renderPage(locale.localizedPath('/cheesecake?tab=reviews', language))
      assert.ok(html.includes(content[language].cheesecake.tabs[1].status))
      assert.doesNotMatch(html, /<article\b/)
    } finally {
      reviews.push(...original)
    }
  }
})

test('Published reviews include supplied photos, shop links, and attributed web notes in both languages', async () => {
  for (const english of content.en.reviews) {
    assert.ok((await readFile(new URL(`../public${english.image.src}`, import.meta.url))).length > 0)
    for (const language of ['en', 'es']) {
      const review = content[language].reviews.find((entry) => entry.id === english.id)
      assert.ok(review, `Missing ${language} review: ${english.id}`)
      assert.equal(review.image.src, english.image.src)
      assert.deepEqual(review.shop, english.shop)
      const html = renderPage(locale.localizedPath('/cheesecake?tab=reviews', language))
      const panel = html.match(/<section[^>]*id="panel-reviews"[\s\S]*?<\/section>/)?.[0]
      assert.ok(panel.includes(review.description))
      assert.ok(panel.includes(`alt="${review.image.alt}"`))
      assert.ok(panel.includes(`href="${review.shop.url}"`))
      assert.ok(panel.includes(review.shop.name))
      if (review.webSaid?.length) {
        assert.ok(panel.includes(`<h3>${ui[language].whatWebSaid}</h3>`))
        assert.equal(review.webSaid.length, english.webSaid.length)
        review.webSaid.forEach((note, index) => {
          assert.deepEqual(note.source, english.webSaid[index].source)
          assert.ok(panel.includes(note.text))
          assert.ok(panel.includes(`href="${note.source.url}"`))
          assert.ok(panel.includes(note.source.label))
        })
      }
      assert.doesNotMatch(panel, /<time\b/)
      assert.ok(!panel.includes('Example review'))
    }
  }
})

test('Populated reviews show full translated content, shared shop links, and the chosen order', () => {
  checkTranslation(reviewFixtures.en, reviewFixtures.es, 'content.reviews')
  for (const language of ['en', 'es']) {
    const reviews = content[language].reviews
    const original = [...reviews]
    reviews.length = 0
    reviews.push(...reviewFixtures[language])
    try {
      const html = renderPage(locale.localizedPath('/cheesecake?tab=reviews', language))
      const panel = html.match(/<section[^>]*id="panel-reviews"[\s\S]*?<\/section>/)?.[0]
      assert.ok(panel, 'Reviews panel exists')
      assert.doesNotMatch(panel, /\bhidden=""/)
      assert.ok(!panel.includes(content[language].cheesecake.tabs[1].status))
      assert.equal([...panel.matchAll(/<article\b/g)].length, reviews.length)
      let previousTitleIndex = -1
      for (const review of reviews) {
        const titleIndex = panel.indexOf(review.title)
        assert.ok(titleIndex > previousTitleIndex, 'Reviews retain content order')
        previousTitleIndex = titleIndex
        assert.ok(panel.includes(`<h2>${review.title}</h2>`))
        assert.ok(panel.includes(review.description), 'The complete description is visible')
        assert.ok(panel.includes(`src="${review.image.src}"`))
        assert.ok(panel.includes(`alt="${review.image.alt}"`))
        const link = [...panel.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/g)]
          .map((match) => match[0])
          .find((anchor) => anchor.includes(`href="${review.shop.url}"`))
        assert.ok(link?.includes(review.shop.name))
        assert.ok(link.includes('target="_blank"'))
        assert.ok(link.includes('rel="noopener noreferrer"'))
        assert.ok(link.includes(ui[language].newTab))
      }
      assert.ok(html.includes(`href="${locale.localizedPath('/cheesecake?tab=reviews', language === 'en' ? 'es' : 'en')}"`))
      assert.doesNotMatch(panel, /<time\b/)
    } finally {
      reviews.length = 0
      reviews.push(...original)
    }
  }
})

test('Unknown pages, projects, and recipes use the correct not-found language', () => {
  for (const path of ['/missing', '/projects/missing', '/cheesecake/recipes/missing']) {
    for (const language of ['en', 'es']) {
      const html = renderPage(locale.localizedPath(path, language))
      assert.ok(html.includes(`${ui[language].notFoundTitle}.`))
      assert.ok(html.includes(`href="${locale.localizedPath('/', language)}"`))
    }
  }
})

test('The sitemap lists every public page with reciprocal language alternatives', async () => {
  const xml = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8')
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1])
  assert.equal(entries.length, pages.length * 2)
  for (const [path] of pages) {
    const en = `https://safernan.dev${path}`
    const es = `https://safernan.dev${locale.localizedPath(path, 'es')}`
    for (const url of [en, es]) {
      const entry = entries.find((value) => value.includes(`<loc>${url}</loc>`))
      assert.ok(entry, url)
      for (const [language, href] of [['en', en], ['es', es], ['x-default', en]]) {
        assert.ok(entry.includes(`hreflang="${language}" href="${href}"`))
      }
    }
  }
})
