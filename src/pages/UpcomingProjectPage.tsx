import { Link } from 'react-router'
import type { UpcomingProject } from '../content/upcomingProjects'
import { useLocale } from '../i18n/useLocale'
import { Icon } from '../components/Icon'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
import { usePageMetadata } from '../hooks/usePageMetadata'
import styles from '../components/Pages.module.css'

export function UpcomingProjectPage({ project }: { project: UpcomingProject }) {
  const { path, profile, ui } = useLocale()
  usePageMetadata()

  return (
    <div className={styles.pageShell}>
      <SiteHeader />
      <main id="content" tabIndex={-1} className={styles.pageMain}>
        <Link to={path('/#upcoming-projects')} className={styles.backLink}>
          <span aria-hidden="true">←</span> {ui.upcomingProjects}
        </Link>
        <div className={`${styles.projectIntro} ${styles.upcomingIntro}`}>
          <p className={styles.label}>{ui.inDevelopment} / {project.category}</p>
          <h1>{project.name}</h1>
          <p className={styles.pageLead}>{project.tagline}</p>
          <p className={styles.upcomingIntroduction}>{project.introduction}</p>
          <div className={styles.availability}>
            <span className={styles.statusDot} aria-hidden="true" />
            {project.availability}
          </div>
          <ul className={styles.areaList} aria-label={ui.builtWith}>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <section className={styles.prototypeSection} aria-labelledby="preview-heading">
          <div className={styles.previewHeader}>
            <h2 id="preview-heading" className={styles.sectionLabel}>{ui.firstTaste}</h2>
            <p>{ui.hogaroPeek}</p>
          </div>
          <div className={styles.prototypeGrid}>
            {project.screenshots.map((screen) => (
              <figure key={screen.src} className={styles.prototypeFigure}>
                <div className={styles.prototypeFrame}>
                  <p className={styles.prototypeLabel}>
                    <span aria-hidden="true">△</span> {ui.prototypeImage}
                    <span> {ui.designMayChange}</span>
                  </p>
                  <img
                    className={screen.cropSideGutters ? styles.cropSideGutters : undefined}
                    src={screen.src}
                    alt={screen.alt}
                    width={screen.width}
                    height={screen.height}
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <h3>{screen.title}</h3>
                  <p>{screen.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section className={styles.detailSection} aria-labelledby="vision-heading">
          <h2 id="vision-heading" className={styles.sectionLabel}>{ui.shelfToTable}</h2>
          <div className={styles.prose}>
            <p>
              {ui.hogaroVision}
            </p>
          </div>
        </section>
        <div className={styles.upcomingFeatures}>
          {project.features.map((feature, index) => (
            <article key={feature.title} className={styles.upcomingFeature}>
              <span className={styles.contributionNumber} aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
        <section className={styles.detailSection} aria-labelledby="next-heading">
          <h2 id="next-heading" className={styles.sectionLabel}>{ui.yourKitchen}</h2>
          <div className={styles.prose}>
            <p>
              {ui.hogaroFuture}
            </p>
            <p className={styles.contextNote}>
              {ui.hogaroStatus}
            </p>
            <div className={styles.upcomingLinks}>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(ui.hogaroTestingSubject)}`}
                className={styles.externalLink}
              >
                <Icon name="email" width="16" height="16" />
                <span>{ui.hogaroTestingLink}</span>
              </a>
              <a href="https://hogaro.app" target="_blank" rel="noreferrer" className={styles.externalLink}>
                {ui.hogaroSiteLink} <Icon name="arrow" width="17" height="17" />
                <span className="sr-only"> {ui.newTab}</span>
              </a>
            </div>
          </div>
        </section>
        <Link to={path('/#upcoming-projects')} className={styles.nextProject}>
          <span>
            <span className={styles.label}>{ui.backToPortfolio}</span>
            <span className={styles.nextProjectName}>{ui.upcomingProjects}</span>
          </span>
          <Icon name="arrow" width="32" height="32" />
        </Link>
      </main>
      <SiteFooter />
    </div>
  )
}
