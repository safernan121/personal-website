import type { SectionId } from '../content/profile'
import { useLocale } from '../i18n/useLocale'
import { Navigation } from './Navigation'
import { SocialLinks } from './SocialLinks'
import styles from './Portfolio.module.css'

export function Profile({ activeSection }: { activeSection: SectionId }) {
  const { profile, ui } = useLocale()
  return (
    <header className={styles.profile}>
      <div>
        <p className={styles.eyebrow}>
          <span className={styles.smallLine} /> {ui.profileEyebrow}
        </p>
        <h1 className={styles.name}>
          <span>{profile.firstName}</span> <span>{profile.lastName}</span>
        </h1>
        <p className={styles.role}>{profile.role}</p>
        <p className={styles.tagline}>{profile.tagline}</p>
        <dl className={styles.stack} aria-label={ui.techStack}>
          {profile.stack.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
        <Navigation activeSection={activeSection} />
      </div>
      <div className={styles.profileFooter}>
        <SocialLinks />
      </div>
    </header>
  )
}
