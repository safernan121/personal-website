import { Link } from 'react-router'
import { SiteHeader, SiteFooter } from '../components/SiteChrome'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLocale } from '../i18n/useLocale'
import styles from '../components/Pages.module.css'

export function NotFoundPage() {
  const { path, ui } = useLocale()
  usePageMetadata()
  return (
    <div className={styles.pageShell}>
      <SiteHeader />
      <main id="content" tabIndex={-1} className={styles.pageMain}>
        <div className={styles.projectIntro}>
          <p className={styles.label}>{ui.wrongTurn}</p>
          <h1>{ui.notFoundTitle}.</h1>
          <p className={styles.pageLead}>
            {ui.notFoundMessage}
          </p>
          <Link className={styles.externalLink} to={path('/')}>
            {ui.backHome} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
