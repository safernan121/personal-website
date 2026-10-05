import { Link } from 'react-router'
import { projects } from '../content/projects'
import { Icon } from './Icon'
import styles from './Pages.module.css'

export function ProjectList() {
  return (
    <ul className={styles.projectList}>
      {projects.map((project) => (
        <li key={project.slug}>
          <Link to={`/projects/${project.slug}`} className={styles.projectCard}>
            <span
              className={`${styles.projectMark} ${project.slug === 'the-beacon' ? styles.beaconMark : ''}`}
              aria-hidden="true"
            >
              {project.slug === 'the-beacon' ? (
                <img
                  src="/images/the-beacon/combat.webp"
                  alt=""
                  width="1540"
                  height="1096"
                  loading="lazy"
                />
              ) : project.media ? (
                <img
                  className={`${styles.cardLogo} ${project.media.lightLogoPanel ? styles.lightCardLogo : ''}`}
                  src={project.media.logo}
                  alt=""
                  width={project.media.logoWidth}
                  height={project.media.logoHeight}
                  loading="lazy"
                />
              ) : (
                'U'
              )}
            </span>
            <span className={styles.projectCardCopy}>
              <span className={styles.label}>{project.category}</span>
              <span className={styles.projectCardTitle}>
                {project.name} <Icon name="arrow" width="18" height="18" />
              </span>
              <span className={styles.projectCardTagline}>
                {project.tagline}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
