import { Link } from 'react-router'
import { useLocale } from '../i18n/useLocale'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeControls'
import styles from './Pages.module.css'

const copyrightYear = new Date().getFullYear()

export function SiteHeader() {
  const { pathname, path, ui, upcomingProjects } = useLocale()
  const isUpcomingProject = upcomingProjects.some(
    (project) => pathname === `/projects/${project.slug}`,
  )
  return (
    <header className={styles.header}>
      <Link
        to={path('/')}
        className={styles.brand}
        aria-label={`Santiago Fernández — ${ui.home}`}
      >
        <span className={styles.brandPort} aria-hidden="true" />
        sf
      </Link>
      <span className={styles.headerLabel}>{ui.portfolio}</span>
      <nav aria-label={ui.mainNavigation} className={styles.headerNav}>
        <Link
          to={path('/#projects')}
          aria-current={
            pathname.startsWith('/projects/') && !isUpcomingProject
              ? 'page'
              : undefined
          }
        >
          {ui.work}
        </Link>
        <Link
          to={path('/#upcoming-projects')}
          aria-current={isUpcomingProject ? 'page' : undefined}
        >
          {ui.upcoming}
        </Link>
        <Link
          to={path('/cheesecake')}
          aria-current={
            pathname === '/cheesecake' || pathname.startsWith('/cheesecake/')
              ? 'page'
              : undefined
          }
        >
          {ui.cheesecake}
        </Link>
      </nav>
      <div className={styles.headerTools}>
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  )
}

export function SiteFooter() {
  const { profile, path, ui } = useLocale()
  return (
    <footer className={styles.footer}>
      <span>
        © {copyrightYear} {profile.name}
      </span>
      <Link to={path('/')}>
        {ui.backToPortfolio} <span aria-hidden="true">↗</span>
      </Link>
    </footer>
  )
}
