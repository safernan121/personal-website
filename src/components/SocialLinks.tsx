import { useLocale } from '../i18n/useLocale'
import { Icon } from './Icon'
import styles from './Portfolio.module.css'

export function SocialLinks() {
  const { profile, ui } = useLocale()
  return (
    <ul className={styles.socialLinks} aria-label={ui.contactProfiles}>
      {profile.socialLinks.map(({ label, href, icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={
              icon === 'email'
                ? ui.emailSantiago
                : icon === 'resume'
                  ? ui.resumePdf
                  : `${label} ${ui.newTab}`
            }
            hrefLang={icon === 'resume' ? 'en' : undefined}
            type={icon === 'resume' ? 'application/pdf' : undefined}
            target={icon === 'email' ? undefined : '_blank'}
            rel={icon === 'email' ? undefined : 'noopener noreferrer'}
          >
            <Icon name={icon} />
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
