import { Link, useLocation } from 'react-router'
import { profile } from '../content/profile'
import styles from './Pages.module.css'

const copyrightYear = new Date().getFullYear()

export function SiteHeader() {
  const { pathname } = useLocation()
  return (
    <header className={styles.header}>
      <Link
        to="/"
        className={styles.brand}
        aria-label="Santiago Fernández — home"
      >
        sf<span>.</span>
      </Link>
      <span className={styles.headerLabel}>Personal portfolio</span>
      <nav aria-label="Main navigation" className={styles.headerNav}>
        <Link
          to="/#projects"
          aria-current={pathname.startsWith('/projects/') ? 'page' : undefined}
        >
          Work
        </Link>
        <Link
          to="/cheesecake"
          aria-current={pathname === '/cheesecake' ? 'page' : undefined}
        >
          Cheesecake
        </Link>
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <span>
        © {copyrightYear} {profile.name}
      </span>
      <Link to="/">
        Back to portfolio <span aria-hidden="true">↗</span>
      </Link>
    </footer>
  )
}
