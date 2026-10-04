import { sections, type SectionId } from '../content/profile'
import styles from './Portfolio.module.css'

export function Navigation({ activeSection }: { activeSection: SectionId }) {
  return (
    <nav className={styles.navigation} aria-label="On this page">
      {sections.map(({ id, label, number }) => (
        <a
          key={id}
          href={`#${id}`}
          className={styles.navLink}
          aria-current={activeSection === id ? 'location' : undefined}
        >
          <span className={styles.navNumber}>{number}</span>
          <span className={styles.navLine} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  )
}
