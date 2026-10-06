import type { Project } from '../content/projects'
import { useLocale } from '../i18n/useLocale'
import { Icon } from './Icon'
import styles from './Pages.module.css'

export function ProjectScreens({ project }: { project: Project }) {
  const { ui } = useLocale()
  if (!project.screenshots?.length) return null

  return (
    <section className={styles.screenSection} aria-labelledby="screens-heading">
      <h2 id="screens-heading" className={styles.sectionLabel}>
        {ui.insidePlatform}
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
              aria-label={`${ui.fullSizeImage} ${screen.title} ${ui.newTab}`}
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
                {ui.officialGuide} <Icon name="arrow" width="12" height="12" />
                <span className="sr-only">: {screen.title} {ui.newTab}</span>
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
