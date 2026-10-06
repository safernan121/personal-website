import type { Review } from '../content/reviews'
import { useLocale } from '../i18n/useLocale'
import { Icon } from './Icon'
import styles from './Pages.module.css'

export function ReviewList({ reviews }: { reviews: Review[] }) {
  const { ui } = useLocale()

  return (
    <ul className={styles.reviewList}>
      {reviews.map((review) => (
        <li key={review.id}>
          <article className={styles.reviewCard}>
            <div className={styles.reviewArtwork}>
              <img
                src={review.image.src}
                alt={review.image.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.reviewCopy}>
              <h2>{review.title}</h2>
              <p className={styles.reviewDescription}>{review.description}</p>
              <a
                href={review.shop.url}
                className={styles.reviewShop}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{review.shop.name}</span>
                <Icon name="arrow" width="15" height="15" />
                <span className="sr-only"> {ui.newTab}</span>
              </a>
              {review.webSaid && review.webSaid.length > 0 && (
                <aside className={styles.reviewWebNotes}>
                  <h3>{ui.whatWebSaid}</h3>
                  <ul>
                    {review.webSaid.map((note) => (
                      <li key={note.source.url}>
                        <p>
                          {note.text}{' '}
                          <a
                            href={note.source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {note.source.label}
                            <span className="sr-only"> {ui.newTab}</span>
                          </a>
                        </p>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}
