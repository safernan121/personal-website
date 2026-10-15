import { Link } from 'react-router'
import { useLocale } from '../i18n/useLocale'
import { Icon } from './Icon'
import styles from './Pages.module.css'

export function UpcomingProjectList() {
  const { upcomingProjects, path, ui } = useLocale()
  return (
    <ul className={styles.upcomingList}>
      {upcomingProjects.map((project) => (
        <li key={project.slug}>
          <Link
            to={path(`/projects/${project.slug}`)}
            className={`${styles.projectCard} ${styles.upcomingCard}`}
          >
            <span className={styles.hogaroMark} aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="currentColor" width="40" height="40">
                <rect x="9.2" y="11.7" width="5.1" height="6.3" rx="1.4" />
                <rect x="15.6" y="9.4" width="5.1" height="8.6" rx="1.4" />
                <rect x="22" y="12.9" width="8.8" height="5.1" rx="1.4" />
                <rect x="7.8" y="18.8" width="24.4" height="1.6" rx="0.8" />
                <rect x="9.2" y="22.7" width="8.8" height="5.9" rx="1.4" />
                <rect x="19.3" y="21.1" width="5.1" height="7.4" rx="1.4" />
                <rect x="25.7" y="23.4" width="5.1" height="5.1" rx="1.4" />
                <rect x="7.8" y="29.3" width="24.4" height="1.6" rx="0.8" />
              </svg>
            </span>
            <span className={styles.projectCardCopy}>
              <span className={styles.upcomingLabel}>{ui.inDevelopment}</span>
              <span className={styles.projectCardTitle}>
                {project.name} <Icon name="arrow" width="18" height="18" />
              </span>
              <span className={styles.projectCardTagline}>{project.summary}</span>
              <span className={styles.cardAvailability}>{project.availability}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
