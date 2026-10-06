import { Link } from 'react-router'
import { SiteHeader, SiteFooter } from '../components/SiteChrome'
import { usePageMetadata } from '../hooks/usePageMetadata'
import styles from '../components/Pages.module.css'

export function NotFoundPage() {
  usePageMetadata(
    'Page not found — Santiago Fernández',
    'Return to Santiago Fernández’s portfolio.',
  )
  return (
    <div className={styles.pageShell}>
      <SiteHeader />
      <main id="content" tabIndex={-1} className={styles.pageMain}>
        <div className={styles.projectIntro}>
          <p className={styles.label}>404 / A wrong turn</p>
          <h1>Page not found.</h1>
          <p className={styles.pageLead}>
            This page doesn’t exist. Let’s get you back to the portfolio.
          </p>
          <Link className={styles.externalLink} to="/">
            Back to home <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
