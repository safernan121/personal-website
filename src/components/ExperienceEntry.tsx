import type { Experience } from '../content/profile'
import styles from './Portfolio.module.css'

export function ExperienceEntry({ experience }: { experience: Experience }) {
  const { id, role, company, start, end, current, summary, context, highlights, areas } =
    experience

  return (
    <li className={styles.experienceEntry}>
      <article aria-labelledby={`${id}-title`}>
        <div className={styles.period}>
          <span>
            {start} <span aria-hidden="true">—</span>
            <span className="sr-only">to</span> {end}
          </span>
          {current && (
            <span className={styles.current}>
              <span />
              Current
            </span>
          )}
        </div>
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
        <ul className={styles.tags} aria-label="Technologies and focus areas">
          {areas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </article>
    </li>
  )
}
