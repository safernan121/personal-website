import type { Project } from '../content/projects'
import { Icon } from './Icon'
import styles from './Pages.module.css'

export function ProjectScreens({ project }: { project: Project }) {
  if (!project.screenshots?.length) return null

  return (
    <section className={styles.screenSection} aria-labelledby="screens-heading">
      <h2 id="screens-heading" className={styles.sectionLabel}>
        Inside the platform
      </h2>
      {project.screenshotNote && (
        <p className={styles.screenNote}>{project.screenshotNote}</p>
      )}
      <div className={styles.screenGrid}>
        {project.screenshots.map((screen) => (
          <figure
            key={screen.src}
            className={screen.wide ? styles.wideScreen : undefined}
          >
            <a
              className={styles.screenImageLink}
              href={screen.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`View full-size image: ${screen.title} (opens in a new tab)`}
            >
              <img
                src={screen.src}
                alt={screen.alt}
                width={screen.width}
                height={screen.height}
                loading="lazy"
                className={screen.wide ? undefined : styles.formScreenImage}
              />
            </a>
            <figcaption>
              <h3>{screen.title}</h3>
              <p>{screen.caption}</p>
              <a
                href={screen.source}
                target="_blank"
                rel="noreferrer"
                className={styles.screenSource}
              >
                Official guide <Icon name="arrow" width="12" height="12" />
                <span className="sr-only">: {screen.title} (opens in a new tab)</span>
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
