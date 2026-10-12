import { Fragment } from 'react'
import { useLocale } from '../i18n/useLocale'
import { SocialLinks } from './SocialLinks'
import styles from './Portfolio.module.css'

export function Profile() {
  const { profile, ui } = useLocale()
  const focusAreas = ui.profileEyebrow.split(' · ')
  return (
    <header className={styles.profile}>
      <p className={styles.graph}>
        <span className="sr-only">{ui.profileEyebrow}</span>
        <span className={styles.graphNodes} aria-hidden="true">
          {focusAreas.map((area, index) => (
            <Fragment key={area}>
              {index > 0 && (
                <svg
                  className={styles.graphWire}
                  viewBox="0 0 100 72"
                  preserveAspectRatio="none"
                >
                  <path
                    d={index % 2 ? 'M0 15 C55 15 45 57 100 57' : 'M0 57 C55 57 45 15 100 15'}
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              )}
              <span className={styles.graphNode}>{area}</span>
            </Fragment>
          ))}
        </span>
      </p>
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.role}>{profile.role}</p>
      <p className={styles.tagline}>{profile.tagline}</p>
      <section className={styles.stackNode} aria-labelledby="stack-heading">
        <h2 id="stack-heading" className={styles.nodeTitle}>
          {ui.techStack}
        </h2>
        <dl className={styles.stack}>
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
      </section>
      <SocialLinks />
    </header>
  )
}
