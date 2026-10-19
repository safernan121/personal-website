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
              <img src="/images/hogaro/icon.svg" alt="" width="1024" height="1024" loading="lazy" />
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
