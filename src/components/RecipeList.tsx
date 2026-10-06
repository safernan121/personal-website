import { Link } from 'react-router'
import { useLocale } from '../i18n/useLocale'
import { CheesecakeIllustration } from './CheesecakeIllustration'
import { Icon } from './Icon'
import styles from './Pages.module.css'

export function RecipeList() {
  const { recipes, path, ui } = useLocale()
  return (
    <>
      <div className={styles.notebookHeading}>
        <h2>{ui.fromKitchen}</h2>
        <span>
          {recipes.length} {recipes.length === 1 ? ui.recipe : ui.recipes}
        </span>
      </div>
      <ul className={styles.recipeList}>
        {recipes.map((recipe) => (
          <li key={recipe.slug}>
            <Link
              to={path(`/cheesecake/recipes/${recipe.slug}`)}
              className={styles.recipeCard}
            >
              <div className={styles.recipeArtwork}>
                {recipe.image ? (
                  <img
                    src={recipe.image.src}
                    alt={recipe.image.alt}
                    style={{ objectPosition: recipe.image.position }}
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
                      (detail) => detail.id === 'bake' || detail.id === 'chill',
                    )
                    .map((detail) => (
                      <li key={detail.label}>
                        {detail.label}: {detail.value}
                      </li>
                    ))}
                </ul>
                <span className={styles.recipeCardLink}>
                  {ui.readRecipe} <Icon name="arrow" width="15" height="15" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
