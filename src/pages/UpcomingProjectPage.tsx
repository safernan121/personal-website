import { Link } from 'react-router'
import type { UpcomingProject } from '../content/upcomingProjects'
import { Icon } from '../components/Icon'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
import { usePageMetadata } from '../hooks/usePageMetadata'
import styles from '../components/Pages.module.css'

export function UpcomingProjectPage({ project }: { project: UpcomingProject }) {
  usePageMetadata(
    `${project.name} — Coming to iOS and Android — Santiago Fernández`,
    `${project.summary} ${project.availability}. Currently in development.`,
  )

  return (
    <div className={styles.pageShell}>
      <SiteHeader />
      <main id="content" tabIndex={-1} className={styles.pageMain}>
        <Link to="/#upcoming-projects" className={styles.backLink}>
          <span aria-hidden="true">←</span> Upcoming projects
        </Link>
        <div className={`${styles.projectIntro} ${styles.upcomingIntro}`}>
          <p className={styles.label}>In development / {project.category}</p>
          <h1>{project.name}</h1>
          <p className={styles.pageLead}>{project.tagline}</p>
          <p className={styles.upcomingIntroduction}>{project.introduction}</p>
          <div className={styles.availability}>
            <span className={styles.statusDot} aria-hidden="true" />
            {project.availability}
          </div>
        </div>
        <section className={styles.prototypeSection} aria-labelledby="preview-heading">
          <div className={styles.previewHeader}>
            <h2 id="preview-heading" className={styles.sectionLabel}>A first taste</h2>
            <p>A peek inside PantryApp. Still taking shape.</p>
          </div>
          <div className={styles.prototypeGrid}>
            {project.screenshots.map((screen) => (
              <figure key={screen.src} className={styles.prototypeFigure}>
                <div className={styles.prototypeFrame}>
                  <p className={styles.prototypeLabel}>
                    <span aria-hidden="true">△</span> Early prototype image
                    <span> Design may change</span>
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
          <h2 id="vision-heading" className={styles.sectionLabel}>From shelf to table</h2>
          <div className={styles.prose}>
            <p>
              Less time wondering what’s in the fridge. More good meals with
              what’s already there. Here’s how PantryApp will help.
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
          <h2 id="next-heading" className={styles.sectionLabel}>Your kitchen, your way</h2>
          <div className={styles.prose}>
            <p>
              Cooking for yourself or sharing a fridge? I want PantryApp to feel
              like a helping hand in your kitchen. I’m starting with English and
              Spanish, and building for both iPhone and Android.
            </p>
            <p className={styles.contextNote}>
              Still cooking. PantryApp is in development, and these screens are
              a first taste of what’s coming.
            </p>
          </div>
        </section>
        <Link to="/#upcoming-projects" className={styles.nextProject}>
          <span>
            <span className={styles.label}>Back to the portfolio</span>
            <span className={styles.nextProjectName}>Upcoming projects</span>
          </span>
          <Icon name="arrow" width="32" height="32" />
        </Link>
      </main>
      <SiteFooter />
    </div>
  )
}
