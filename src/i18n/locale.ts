export type Locale = 'en' | 'es'

export function getLocale(pathname: string): Locale {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en'
}

export function withoutLocale(pathname: string): string {
  return getLocale(pathname) === 'es' ? pathname.slice(3) || '/' : pathname
}

// App paths only. Query strings and anchors are kept verbatim.
export function localizedPath(path: string, locale: Locale): string {
  const [, pathname, suffix = ''] = path.match(/^([^?#]*)(.*)$/)!
  const base = withoutLocale(pathname).replace(/^\/+/, '/')
  return `${locale === 'es' ? `/es${base}` : base}${suffix}`
}
