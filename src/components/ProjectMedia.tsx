import type { Project } from '../content/projects'
import { useLocale } from '../i18n/useLocale'
import styles from './Pages.module.css'

export function ProjectMedia({ project }: { project: Project }) {
  const { ui } = useLocale()
  const media = project.media
  if (!media) return null

  return (
    <figure className={styles.archiveHero}>
      <div className={styles.archiveFrame}>
        <div
          className={`${styles.archiveBrand} ${media.lightLogoPanel ? styles.lightBrand : ''}`}
        >
          <img
            src={media.logo}
            alt={`${project.name} ${ui.logo}`}
            width={media.logoWidth}
            height={media.logoHeight}
          />
          <span>
            {ui.archive} <span aria-hidden="true">↘</span>
          </span>
        </div>
        <img
          className={styles.archiveImage}
          src={media.image}
          alt={media.imageAlt}
          width={media.imageWidth}
          height={media.imageHeight}
          fetchPriority="high"
        />
      </div>
      <figcaption>
        <span>{media.caption}</span>
        <a href={media.source} target="_blank" rel="noreferrer">
          {media.sourceLabel} ↗
          <span className="sr-only"> {ui.newTab}</span>
        </a>
      </figcaption>
    </figure>
  )
}
