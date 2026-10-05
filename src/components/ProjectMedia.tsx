import type { Project } from '../content/projects'
import styles from './Pages.module.css'

export function ProjectMedia({ project }: { project: Project }) {
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
            alt={`${project.name} logo`}
            width={media.logoWidth}
            height={media.logoHeight}
          />
          <span>
            From the archive <span aria-hidden="true">↘</span>
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
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </figcaption>
    </figure>
  )
}
