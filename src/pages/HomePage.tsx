import { ExperienceEntry } from '../components/ExperienceEntry'
import { Icon } from '../components/Icon'
import { SiteHeader } from '../components/SiteChrome'
import { ProjectList } from '../components/ProjectList'
import { UpcomingProjectList } from '../components/UpcomingProjectList'
import { Link } from 'react-router'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { Profile } from '../components/Profile'
import { useLocale } from '../i18n/useLocale'
import styles from '../components/Portfolio.module.css'

const copyrightYear = new Date().getFullYear()

export function HomePage() {
  const { experiences, profile, path, ui } = useLocale()
  usePageMetadata(
    `${profile.name} — ${profile.role}`,
    profile.description,
  )

  return (
    <>
      <div id="top" className={styles.shell}>
        <SiteHeader />
        <div className={styles.layout}>
          <Profile />
          <main id="content" className={styles.content} tabIndex={-1}>
            <section id="about" aria-labelledby="about-heading">
              <h2 id="about-heading" className={styles.sectionHeading}>
                {ui.about}
              </h2>
              <p className={styles.aboutLead}>
                {profile.aboutLead[0]}
                <br className={styles.desktopBreak} /> {profile.aboutLead[1]}
              </p>
              <div className={styles.aboutCopy}>
                {profile.about.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph.map((part) =>
                      part.emphasis ? (
                        <strong key={part.text}>{part.text}</strong>
                      ) : (
                        part.text
                      ),
                    )}
                  </p>
                ))}
              </div>
            </section>
            <section
              id="experience"
              aria-labelledby="experience-heading"
              className={styles.experience}
            >
              <div className={styles.sectionHeader}>
                <h2 id="experience-heading" className={styles.sectionHeading}>
                  {ui.experience}
                </h2>
                <span className={styles.careerPeriod}>{ui.careerPeriod}</span>
              </div>
              <ol className={styles.timeline}>
                {experiences.map((experience) => (
                  <ExperienceEntry
                    key={experience.id}
                    experience={experience}
                  />
                ))}
              </ol>
            </section>
            <section
              id="projects"
              aria-labelledby="projects-heading"
              className={styles.experience}
            >
              <h2 id="projects-heading" className={styles.sectionHeading}>
                {ui.selectedProjects}
              </h2>
              <ProjectList />
            </section>
            <section
              id="upcoming-projects"
              aria-labelledby="upcoming-projects-heading"
              className={styles.experience}
            >
              <h2 id="upcoming-projects-heading" className={styles.sectionHeading}>
                {ui.upcomingProjects}
              </h2>
              <p className={styles.sectionIntro}>{ui.upcomingIntro}</p>
              <UpcomingProjectList />
            </section>
            <div className={styles.contact}>
              <p className={styles.contactLabel}>{ui.contactPrompt}</p>
              <a
                href={`mailto:${profile.email}`}
                className={styles.contactLink}
              >
                {ui.letsTalk} <Icon name="arrow" width="25" height="25" />
              </a>
            </div>
          </main>
        </div>
        <footer className={styles.footer}>
          <span>
            © {copyrightYear} {profile.name}
          </span>
          <Link to={path('/about')}>{ui.behindKeyboard} ↗</Link>
          <a href="#top">
            {ui.backToTop} <Icon name="up" width="14" height="14" />
          </a>
        </footer>
      </div>
    </>
  )
}
