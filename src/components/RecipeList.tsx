import { Link } from 'react-router'
import { recipes } from '../content/recipes'
import { CheesecakeIllustration } from './CheesecakeIllustration'
import { Icon } from './Icon'
import styles from './Pages.module.css'

export function RecipeList() {
  return (
    <>
      <div className={styles.notebookHeading}>
        <h2>From my kitchen</h2>
        <span>
          {recipes.length} {recipes.length === 1 ? 'recipe' : 'recipes'}
        </span>
      </div>
      <ul className={styles.recipeList}>
        {recipes.map((recipe) => (
          <li key={recipe.slug}>
            <Link
              to={`/cheesecake/recipes/${recipe.slug}`}
              className={styles.recipeCard}
            >
              <div className={styles.recipeArtwork}>
                {recipe.image ? (
                  <img
                    src={recipe.image.src}
                    alt={recipe.image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <CheesecakeIllustration />
                )}
              </div>
              <div className={styles.recipeCardCopy}>
                <p className={styles.recipeCategory}>{recipe.category}</p>
                <h3>{recipe.name}</h3>
                <p className={styles.recipeSubtitle}>{recipe.subtitle}</p>
                <p className={styles.recipeCardDescription}>
                  {recipe.description}
                </p>
                <ul className={styles.recipeCardMeta}>
                  {recipe.details
                    .filter(
                      (detail) => detail.label === 'Bake' || detail.label === 'Chill',
                    )
                    .map((detail) => (
                      <li key={detail.label}>
                        {detail.label}: {detail.value}
                      </li>
                    ))}
                </ul>
                <span className={styles.recipeCardLink}>
                  Read recipe <Icon name="arrow" width="15" height="15" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
