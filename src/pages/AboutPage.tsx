import { Link } from 'react-router'
import { Icon } from '../components/Icon'
import { SiteHeader, SiteFooter } from '../components/SiteChrome'
import { useLocale } from '../i18n/useLocale'
import { usePageMetadata } from '../hooks/usePageMetadata'
import styles from '../components/Pages.module.css'

export function AboutPage() {
  const { aboutMe, path, ui } = useLocale()
  usePageMetadata()

  return (
    <div className={styles.pageShell}>
      <SiteHeader />
      <main id="content" tabIndex={-1} className={styles.pageMain}>
        <Link to={path('/')} className={styles.backLink}>
          <span aria-hidden="true">←</span> {ui.backToPortfolio}
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
            <Link to={path('/cheesecake')} className={styles.externalLink}>
              {ui.visitNotebook}
              <Icon name="arrow" width="14" height="14" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
