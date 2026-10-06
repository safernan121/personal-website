import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectPage } from './pages/ProjectPage'
import { CheesecakePage } from './pages/CheesecakePage'
import { RecipePage } from './pages/RecipePage'
import { NotFoundPage } from './pages/NotFoundPage'
import type { Location } from 'react-router'

const pages = [
  { index: true, element: <HomePage /> },
  { path: 'about', element: <AboutPage /> },
  { path: 'projects/:slug', element: <ProjectPage /> },
  { path: 'cheesecake', element: <CheesecakePage /> },
  { path: 'cheesecake/recipes/:slug', element: <RecipePage /> },
  { path: '*', element: <NotFoundPage /> },
]

export const localizedRoutes = [{ path: 'es', children: pages }, ...pages]

// Fresh document navigations share "default"; keep their scroll positions
// separate by URL so a deep link cannot restore another page's position.
export function getScrollKey({ key, pathname, search, hash }: Location) {
  return key === 'default' ? `${pathname}${search}${hash}` : key
}
