import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { getLocale, localizedPath } from '../i18n/locale'
import { getPageMetadata, siteUrl } from '../pageMetadata'

export function usePageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { title, description, image } = getPageMetadata(pathname)
    document.title = title
    const locale = getLocale(pathname)
    document.documentElement.lang = locale
    const canonicalPath = localizedPath(pathname.replace(/\/+$/, '') || '/', locale)
    const canonicalUrl = `${siteUrl}${canonicalPath}`
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', locale === 'es' ? 'es_ES' : 'en_US')
    document.querySelector('meta[property="og:locale:alternate"]')?.setAttribute('content', locale === 'es' ? 'en_US' : 'es_ES')
    for (const language of ['en', 'es', 'x-default'] as const) {
      document.querySelector(`link[rel="alternate"][hreflang="${language}"]`)
        ?.setAttribute('href', `${siteUrl}${localizedPath(canonicalPath, language === 'es' ? 'es' : 'en')}`)
    }
    const values: Record<string, string> = {
      'meta[name="description"]': description,
      'meta[property="og:description"]': description,
      'meta[name="twitter:description"]': description,
      'meta[property="og:title"]': title,
      'meta[name="twitter:title"]': title,
      'meta[property="og:image"]': `${siteUrl}${image.src}`,
      'meta[name="twitter:image"]': `${siteUrl}${image.src}`,
      'meta[property="og:image:alt"]': image.alt,
      'meta[name="twitter:image:alt"]': image.alt,
    }
    for (const [selector, value] of Object.entries(values)) {
      document.querySelector(selector)?.setAttribute('content', value)
    }
  }, [pathname])
}
