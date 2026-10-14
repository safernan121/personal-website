import react from '@vitejs/plugin-react'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { defineConfig, runnerImport, type Plugin } from 'vite'

interface PageMetadata {
  title: string
  description: string
  image: { src: string; alt: string }
}

const metadataModule = join(import.meta.dirname, 'src/pageMetadata.ts')
const placeholder = '<!-- page-metadata -->'

// Link-preview crawlers don't run JavaScript, so each page in the sitemap gets
// its own HTML file with its title, description, and preview image. The app
// keeps them current after client-side navigation (src/hooks/usePageMetadata.ts).
function pageMetadata(): Plugin {
  let outDir = 'dist'
  let template = ''

  async function render(pathname: string, html: string) {
    const { module } = await runnerImport<{
      siteUrl: string
      getPageMetadata: (pathname: string) => PageMetadata
    }>(metadataModule, { configFile: false, logLevel: 'error' })
    const { siteUrl, getPageMetadata } = module
    const { title, description, image } = getPageMetadata(pathname)
    const spanish = pathname === '/es/' || pathname.startsWith('/es/')
    const englishPath = spanish ? pathname.slice(3) || '/' : pathname
    const spanishPath = englishPath === '/' ? '/es/' : `/es${englishPath}`
    const escape = (value: string) =>
      value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const tags = [
      `<link rel="canonical" href="${siteUrl}${pathname}" />`,
      `<link rel="alternate" hreflang="en" href="${siteUrl}${englishPath}" />`,
      `<link rel="alternate" hreflang="es" href="${siteUrl}${spanishPath}" />`,
      `<link rel="alternate" hreflang="x-default" href="${siteUrl}${englishPath}" />`,
      `<meta name="description" content="${escape(description)}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:url" content="${siteUrl}${pathname}" />`,
      `<meta property="og:site_name" content="Santiago Fernández" />`,
      `<meta property="og:title" content="${escape(title)}" />`,
      `<meta property="og:description" content="${escape(description)}" />`,
      `<meta property="og:image" content="${siteUrl}${image.src}" />`,
      `<meta property="og:image:type" content="image/png" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta property="og:image:alt" content="${escape(image.alt)}" />`,
      `<meta property="og:locale" content="${spanish ? 'es_ES' : 'en_US'}" />`,
      `<meta property="og:locale:alternate" content="${spanish ? 'en_US' : 'es_ES'}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${escape(title)}" />`,
      `<meta name="twitter:description" content="${escape(description)}" />`,
      `<meta name="twitter:image" content="${siteUrl}${image.src}" />`,
      `<meta name="twitter:image:alt" content="${escape(image.alt)}" />`,
      `<title>${escape(title)}</title>`,
    ]
    return html
      .replace('<html lang="en">', `<html lang="${spanish ? 'es' : 'en'}">`)
      .replace(placeholder, tags.join('\n    '))
  }

  return {
    name: 'page-metadata',
    configResolved(config) {
      outDir = join(config.root, config.build.outDir)
    },
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        template = html
        return render('/', html)
      },
    },
    async closeBundle() {
      if (!template) return
      const sitemap = await readFile(join(import.meta.dirname, 'public/sitemap.xml'), 'utf8')
      for (const [, url] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
        const pathname = new URL(url).pathname
        if (pathname === '/') continue
        // Cloudflare serves /about from about.html and /es/ from es/index.html.
        const file = join(outDir, pathname.endsWith('/') ? `${pathname}index.html` : `${pathname}.html`)
        await mkdir(dirname(file), { recursive: true })
        await writeFile(file, await render(pathname, template))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pageMetadata()],
})
