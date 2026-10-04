import { ExperienceEntry } from './components/ExperienceEntry'
import { Icon } from './components/Icon'
import { PointerGlow } from './components/PointerGlow'
import { Profile } from './components/Profile'
import { experiences, profile } from './content/profile'
import { useActiveSection } from './hooks/useActiveSection'
import styles from './components/Portfolio.module.css'

const copyrightYear = new Date().getFullYear()

export default function App() {
  const activeSection = useActiveSection()

  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <PointerGlow />
      <div id="top" className={styles.shell}>
        <div className={styles.masthead} aria-hidden="true">
          <span className={styles.monogram}>
            sf<span>.</span>
          </span>
          <span>Personal portfolio</span>
          <span className={styles.mastheadRight}>
            Code. Systems. Experiences.
          </span>
        </div>
        <div className={styles.layout}>
          <Profile activeSection={activeSection} />
          <main id="content" className={styles.content} tabIndex={-1}>
            <section id="about" aria-labelledby="about-heading">
              <h2 id="about-heading" className={styles.sectionHeading}>
                <span>01</span> About
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
                  <span>02</span> Experience
                </h2>
                <span className={styles.careerPeriod}>2018 — Present</span>
              </div>
              <ol>
                {experiences.map((experience) => (
                  <ExperienceEntry
                    key={experience.id}
                    experience={experience}
                  />
                ))}
              </ol>
            </section>
            <div className={styles.contact}>
              <p className={styles.contactLabel}>Have something in mind?</p>
              <a
                href={`mailto:${profile.email}`}
                className={styles.contactLink}
              >
                Let’s talk <Icon name="arrow" width="25" height="25" />
              </a>
            </div>
          </main>
        </div>
        <footer className={styles.footer}>
          <span>
            © {copyrightYear} {profile.name}
          </span>
          <a href="#top">
            Back to top <Icon name="up" width="14" height="14" />
          </a>
        </footer>
      </div>
    </>
  )
}
