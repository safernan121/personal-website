import { profile } from '../content/profile'
import { Icon } from './Icon'
import styles from './Portfolio.module.css'

export function SocialLinks() {
  return (
    <ul className={styles.socialLinks} aria-label="Contact and profiles">
      {profile.socialLinks.map(({ label, href, icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={
              icon === 'email'
                ? 'Email Santiago Fernández'
                : `${label} (opens in a new tab)`
            }
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
