import type { Experience } from '../content/profile'
import { useLocale } from '../i18n/useLocale'
import styles from './Portfolio.module.css'

export function ExperienceEntry({ experience }: { experience: Experience }) {
  const { ui } = useLocale()
  const { id, role, company, start, end, current, summary, context, highlights, stack } =
    experience

  return (
    <li className={`${styles.experienceEntry} ${current ? styles.currentEntry : ''}`}>
      <article aria-labelledby={`${id}-title`}>
        <div className={styles.period}>
          <span>
            {start} <span aria-hidden="true">—</span>
            <span className="sr-only">{ui.to}</span> {end}
          </span>
          {current && (
            <span className={styles.current}>
              <span />
              {ui.current}
            </span>
          )}
        </div>
        <div className={styles.nodeBody}>
          <h3 id={`${id}-title`} className={styles.jobTitle}>
            {role}
          </h3>
          <p className={styles.company}>{company}</p>
          <p className={styles.summary}>{summary}</p>
          {highlights.length > 0 && (
            <ul className={styles.highlights}>
              {highlights.map((highlight) => (
                <li key={highlight.title}>
                  <strong className={styles.highlightTitle}>{highlight.title}</strong>
                  {highlight.text}
                </li>
              ))}
            </ul>
          )}
          {context && <p className={styles.contextNote}>{context}</p>}
          <ul className={styles.tags} aria-label={ui.technologies}>
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  )
}
