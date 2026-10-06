import { Link } from 'react-router'
import { upcomingProjects } from '../content/upcomingProjects'
import { Icon } from './Icon'
import styles from './Pages.module.css'

export function UpcomingProjectList() {
  return (
    <ul className={styles.upcomingList}>
      {upcomingProjects.map((project) => (
        <li key={project.slug}>
          <Link
            to={`/projects/${project.slug}`}
            className={`${styles.projectCard} ${styles.upcomingCard}`}
          >
            <span className={styles.pantryMark} aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
                <path
                  d="M20 31V18m0 7C9 25 8 17 8 12c9 0 12 4 12 10m0-4c0-7 5-11 13-11 0 8-5 13-13 13"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={styles.projectCardCopy}>
              <span className={styles.upcomingLabel}>In development</span>
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
