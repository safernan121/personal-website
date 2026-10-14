import { Link, useParams } from 'react-router'
import { CheesecakeIllustration } from '../components/CheesecakeIllustration'
import { SiteHeader, SiteFooter } from '../components/SiteChrome'
import type { Recipe } from '../content/recipes'
import { useLocale } from '../i18n/useLocale'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { NotFoundPage } from './NotFoundPage'
import styles from '../components/Pages.module.css'

export function RecipePage() {
  const { recipes } = useLocale()
  const { slug } = useParams()
  const recipe = recipes.find((item) => item.slug === slug)
  return recipe ? <RecipeDetail recipe={recipe} /> : <NotFoundPage />
}

function RecipeDetail({ recipe }: { recipe: Recipe }) {
  const { path, ui } = useLocale()
  usePageMetadata()

  return (
    <div className={`${styles.pageShell} ${styles.cheesecakePage}`}>
      <SiteHeader />
      <main id="content" tabIndex={-1} className={styles.pageMain}>
        <Link to={path('/cheesecake')} className={styles.backLink}>
          <span aria-hidden="true">←</span> {ui.allRecipes}
        </Link>
        <div className={styles.recipeIntro}>
          <div>
            <p className={styles.label}>{ui.fromKitchen} / {recipe.category}</p>
            <h1>{recipe.name}.</h1>
            <p className={styles.recipeIntroSubtitle}>{recipe.subtitle}</p>
            <p className={styles.recipeLead}>{recipe.description}</p>
          </div>
          <div className={styles.recipeHeroArtwork}>
            {recipe.image ? (
              <img
                src={recipe.image.src}
                alt={recipe.image.alt}
                style={{ objectPosition: recipe.image.position }}
              />
            ) : (
              <CheesecakeIllustration />
            )}
          </div>
        </div>
        <dl className={styles.recipeDetails}>
          {recipe.details.map((detail) => (
            <div key={detail.label}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
        <div className={styles.recipeBody}>
          <section aria-labelledby="ingredients-heading">
            <h2 id="ingredients-heading" className={styles.recipeSectionTitle}>
              {ui.ingredients}
            </h2>
            <ul className={styles.recipeIngredients}>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient.name}>
                  <div>
                    <span>{ingredient.name}</span>
                    {ingredient.note && <small>{ingredient.note}</small>}
                  </div>
                  <span className={styles.ingredientQuantity}>
                    {ingredient.quantity}
                  </span>
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="method-heading">
            <h2 id="method-heading" className={styles.recipeSectionTitle}>
              {ui.method}
            </h2>
            <ol className={styles.recipeSteps}>
              {recipe.steps.map((step, index) => (
                <li key={step.title}>
                  <span className={styles.recipeStepNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
        <section
          className={styles.recipeNutrition}
          aria-labelledby="nutrition-heading"
        >
          <div className={styles.nutritionHeading}>
            <h2 id="nutrition-heading" className={styles.recipeSectionTitle}>
              {ui.nutrition}
            </h2>
            <p>{recipe.nutrition.scope} · {ui.approximate}</p>
          </div>
          <dl className={styles.nutritionValues}>
            {recipe.nutrition.values.map((macro) => (
              <div key={macro.label}>
                <dt>{macro.label}</dt>
                <dd>{macro.value}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.nutritionNote}>{recipe.nutrition.note}</p>
        </section>
        {recipe.notes.length > 0 && (
          <section className={styles.recipeNotes} aria-labelledby="notes-heading">
            <h2 id="notes-heading" className={styles.recipeSectionTitle}>
              {ui.kitchenNotes}
            </h2>
            <ul>
              {recipe.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
