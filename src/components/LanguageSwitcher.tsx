import { Link, useLocation } from 'react-router'
import { localizedPath } from '../i18n/locale'
import { useLocale } from '../i18n/useLocale'
import styles from './Pages.module.css'

export function LanguageSwitcher() {
  const { pathname, search, hash } = useLocation()
  const { locale, ui } = useLocale()
  const currentPath = `${pathname}${search}${hash}`

  return (
    <nav className={styles.languageSwitcher} aria-label={ui.language}>
      <Link
        to={localizedPath(currentPath, 'en')}
        lang="en"
        hrefLang="en"
        aria-label="English"
        aria-current={locale === 'en' ? 'page' : undefined}
      >
        EN
      </Link>
      <span aria-hidden="true">/</span>
      <Link
        to={localizedPath(currentPath, 'es')}
        lang="es"
        hrefLang="es"
        aria-label="Español"
        aria-current={locale === 'es' ? 'page' : undefined}
      >
        ES
      </Link>
    </nav>
  )
}
