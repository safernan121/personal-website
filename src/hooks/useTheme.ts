import { useEffect, useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark'

// public/theme-init.js applies the saved choice before the first paint; the
// root element's data-theme is the shared source of truth afterwards.
const listeners = new Set<() => void>()
let theme: Theme =
  typeof document !== 'undefined' && document.documentElement.dataset.theme === 'dark'
    ? 'dark'
    : 'light'

function apply(next: Theme) {
  theme = next
  const root = document.documentElement
  root.dataset.theme = theme
  const background = getComputedStyle(root).getPropertyValue('--background').trim()
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background)
  listeners.forEach((listener) => listener())
}

function hasSavedTheme() {
  try {
    return localStorage.getItem('theme') !== null
  } catch {
    return false
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useTheme() {
  const current = useSyncExternalStore(subscribe, () => theme, () => 'light' as Theme)

  useEffect(() => {
    // Follow the system setting until the visitor picks a mode.
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const follow = (event: MediaQueryListEvent) => {
      if (!hasSavedTheme()) apply(event.matches ? 'dark' : 'light')
    }
    query.addEventListener('change', follow)
    return () => query.removeEventListener('change', follow)
  }, [])

  return {
    theme: current,
    toggleTheme: () => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        // Storage can be unavailable in private windows; the choice still applies to this visit.
      }
      apply(next)
    },
  }
}
