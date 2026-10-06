import { Link } from 'react-router'
import { Icon } from '../components/Icon'
import { SiteHeader, SiteFooter } from '../components/SiteChrome'
import { aboutMe } from '../content/about'
import { usePageMetadata } from '../hooks/usePageMetadata'
import styles from '../components/Pages.module.css'

export function AboutPage() {
  usePageMetadata('Behind the keyboard — Santiago Fernández', aboutMe.description)

  return (
    <div className={styles.pageShell}>
      <SiteHeader />
      <main id="content" tabIndex={-1} className={styles.pageMain}>
        <Link to="/" className={styles.backLink}>
          <span aria-hidden="true">←</span> Back to portfolio
        </Link>
        <div className={styles.projectIntro}>
          <p className={styles.label}>{aboutMe.label}</p>
          <h1>{aboutMe.title}</h1>
          <p className={styles.pageLead}>{aboutMe.introduction}</p>
        </div>
        <div className={styles.personalLayout}>
          <div className={styles.prose}>
            {aboutMe.paragraphs.map((paragraph, index) => (
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
          <div>
            <dl className={styles.personalDetails}>
              {aboutMe.details.map(({ label, text }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
            <Link to="/cheesecake" className={styles.externalLink}>
              Visit my cheesecake notebook
              <Icon name="arrow" width="14" height="14" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
