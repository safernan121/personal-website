import { useRef, type KeyboardEvent } from 'react'
import { Link, useSearchParams } from 'react-router'
import { SiteHeader, SiteFooter } from '../components/SiteChrome'
import type { cheesecake as englishCheesecake } from '../content/cheesecake'
import { useLocale } from '../i18n/useLocale'
import { CheesecakeIllustration } from '../components/CheesecakeIllustration'
import { RecipeList } from '../components/RecipeList'
import { ReviewList } from '../components/ReviewList'
import { usePageMetadata } from '../hooks/usePageMetadata'
import styles from '../components/Pages.module.css'

type TabId = (typeof englishCheesecake.tabs)[number]['id']

export function CheesecakePage() {
  const { cheesecake, recipes, reviews, path, ui } = useLocale()
  usePageMetadata(`${ui.cheesecake} — Santiago Fernández`, cheesecake.introduction)
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab: TabId =
    searchParams.get('tab') === 'reviews' ? 'reviews' : 'recipes'
  const tabRefs = useRef<Partial<Record<TabId, HTMLButtonElement | null>>>({})

  function selectTab(id: TabId) {
    if (id === activeTab) return
    const nextParams = new URLSearchParams(searchParams)
    nextParams.set('tab', id)
    setSearchParams(nextParams, { preventScrollReset: true })
  }

  function handleTabKey(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number
    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (index + 1) % cheesecake.tabs.length
        break
      case 'ArrowLeft':
        nextIndex =
          (index - 1 + cheesecake.tabs.length) % cheesecake.tabs.length
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = cheesecake.tabs.length - 1
        break
      default:
        return
    }
    event.preventDefault()
    const id = cheesecake.tabs[nextIndex].id
    selectTab(id)
    tabRefs.current[id]?.focus()
  }

  return (
    <div className={`${styles.pageShell} ${styles.cheesecakePage}`}>
      <SiteHeader />
      <main id="content" tabIndex={-1} className={styles.pageMain}>
        <Link to={path('/')} className={styles.backLink}>
          <span aria-hidden="true">←</span> {ui.backToPortfolio}
        </Link>
        <div className={styles.cheesecakeHero}>
          <div>
            <p className={styles.label}>
              {ui.notebookEyebrow}
            </p>
            <h1>{cheesecake.title}</h1>
            <p className={styles.pageLead}>{cheesecake.introduction}</p>
          </div>
          <CheesecakeIllustration />
        </div>
        <div
          role="tablist"
          aria-label={ui.notebook}
          className={styles.tabs}
        >
          {cheesecake.tabs.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              ref={(element) => {
                tabRefs.current[tab.id] = element
              }}
              onClick={() => selectTab(tab.id)}
              onKeyDown={(event) => handleTabKey(event, index)}
            >
              <span aria-hidden="true">0{index + 1}</span> {tab.label}
            </button>
          ))}
          <span className={styles.notebookNote}>{ui.savor}</span>
        </div>
        {cheesecake.tabs.map((tab) => (
          <section
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            tabIndex={0}
            className={
              (tab.id === 'recipes' ? recipes.length > 0 : reviews.length > 0)
                ? styles.notebookPanel
                : styles.tabPanel
            }
          >
            {tab.id === 'recipes' && recipes.length > 0 ? (
              <RecipeList />
            ) : tab.id === 'reviews' && reviews.length > 0 ? (
              <ReviewList reviews={reviews} />
            ) : (
              <>
                <div className={styles.emptyIcon} aria-hidden="true">
                  <svg
                    viewBox="0 0 32 32"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {tab.id === 'recipes' ? (
                      <path d="M16 8C11 4 7 5 3 6v21c5-2 9-1 13 2 4-3 8-4 13-2V6c-4-1-8-2-13 2Zm0 0v21M7 12l5 1m-5 5 5 1m8-6 5-1m-5 7 5-1" />
                    ) : (
                      <path d="m16 3 3.8 7.7 8.5 1.2-6.1 6 1.4 8.4-7.6-4-7.6 4 1.4-8.4-6.1-6 8.5-1.2Z" />
                    )}
                  </svg>
                </div>
                <p className={styles.label}>{tab.status}</p>
                <h2>{tab.title}</h2>
                <p className={styles.emptyDescription}>{tab.description}</p>
              </>
            )}
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  )
}
