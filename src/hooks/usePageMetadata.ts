import { useEffect } from 'react'
import { useLocation } from 'react-router'

export function usePageMetadata(title: string, description: string) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title
    const canonicalPath = pathname.replace(/\/+$/, '') || '/'
    const canonicalUrl = `https://safernan.dev${canonicalPath}`
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
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
