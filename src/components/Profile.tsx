import type { SectionId } from '../content/profile'
import { useLocale } from '../i18n/useLocale'
import { Icon } from './Icon'
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
        <Navigation activeSection={activeSection} />
      </div>
      <div className={styles.profileFooter}>
        <p className={styles.location}>
          <Icon name="pin" width="15" height="15" />
          {profile.location}
        </p>
        <SocialLinks />
      </div>
    </header>
  )
}
