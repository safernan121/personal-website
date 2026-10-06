import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { getLocale, localizedPath } from '../i18n/locale'

export function usePageMetadata(title: string, description: string) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title
    const locale = getLocale(pathname)
    document.documentElement.lang = locale
    const canonicalPath = localizedPath(pathname.replace(/\/+$/, '') || '/', locale)
    const canonicalUrl = `https://safernan.dev${canonicalPath}`
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', locale === 'es' ? 'es_ES' : 'en_US')
    document.querySelector('meta[property="og:locale:alternate"]')?.setAttribute('content', locale === 'es' ? 'en_US' : 'es_ES')
    for (const language of ['en', 'es', 'x-default'] as const) {
      document.querySelector(`link[rel="alternate"][hreflang="${language}"]`)
        ?.setAttribute('href', `https://safernan.dev${localizedPath(canonicalPath, language === 'es' ? 'es' : 'en')}`)
    }
    for (const selector of [
      'meta[name="description"]',
      'meta[property="og:description"]',
      'meta[name="twitter:description"]',
    ]) {
      document.querySelector(selector)?.setAttribute('content', description)
    }
    for (const selector of [
      'meta[property="og:title"]',
      'meta[name="twitter:title"]',
    ]) {
      document.querySelector(selector)?.setAttribute('content', title)
    }
  }, [title, description, pathname])
}
