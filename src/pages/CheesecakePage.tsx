import { useRef, type KeyboardEvent } from 'react'
import { Link, useSearchParams } from 'react-router'
import { SiteHeader, SiteFooter } from '../components/SiteChrome'
import { cheesecake } from '../content/cheesecake'
import { usePageMetadata } from '../hooks/usePageMetadata'
import styles from '../components/Pages.module.css'

type TabId = (typeof cheesecake.tabs)[number]['id']

function CheesecakeIllustration() {
  return (
    <svg
      viewBox="0 0 280 250"
      fill="none"
      className={styles.cakeIllustration}
      aria-hidden="true"
    >
      <circle
        cx="142"
        cy="128"
        r="103"
        stroke="currentColor"
        strokeOpacity=".14"
      />
      <circle
        cx="142"
        cy="128"
        r="83"
        stroke="currentColor"
        strokeOpacity=".09"
        strokeDasharray="3 7"
      />
      <ellipse
        cx="147"
        cy="188"
        rx="87"
        ry="15"
        fill="#182234"
        stroke="#48505a"
      />
      <path
        d="M69 130 179 99l52 39-125 31Z"
        fill="#f2d9a8"
        stroke="#d9b97e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m69 130 37 39v28l-37-37Z"
        fill="#d5b781"
        stroke="#d9b97e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m106 169 125-31v28l-125 31Z"
        fill="#efce93"
        stroke="#d9b97e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m69 156 37 34 125-31v7l-125 31-37-37Z" fill="#a97e50" />
      <path d="m69 130 37 34 125-26-52-39Z" fill="#a86b40" />
      <path d="m74 132 104-28 46 33-116 24Z" fill="#be854e" />
      <path
        d="m97 136 72-20M123 144l58-15"
        stroke="#e3ad65"
        strokeOpacity=".5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m204 59 3 10 10 3-10 3-3 10-3-10-10-3 10-3ZM74 63l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z"
        fill="currentColor"
      />
      <path
        d="M125 79c-9-13 9-16 1-29m20 32c-9-13 9-16 1-29"
        stroke="currentColor"
        strokeOpacity=".45"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CheesecakePage() {
  usePageMetadata('Cheesecake — Santiago Fernández', cheesecake.introduction)
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
        <Link to="/" className={styles.backLink}>
          <span aria-hidden="true">←</span> Back to portfolio
        </Link>
        <div className={styles.cheesecakeHero}>
          <div>
            <p className={styles.label}>
              Beyond the keyboard / A personal notebook
            </p>
            <h1>{cheesecake.title}</h1>
            <p className={styles.pageLead}>{cheesecake.introduction}</p>
          </div>
          <CheesecakeIllustration />
        </div>
        <div
          role="tablist"
          aria-label="Cheesecake notebook"
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
          <span className={styles.notebookNote}>Made to be savored.</span>
        </div>
        {cheesecake.tabs.map((tab) => (
          <section
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            tabIndex={0}
            className={styles.tabPanel}
          >
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
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  )
}
