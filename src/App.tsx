import { useEffect, useRef } from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from 'react-router'
import { PointerGlow } from './components/PointerGlow'
import { useLocale } from './i18n/useLocale'
import { getScrollKey, localizedRoutes } from './routes'

function SiteLayout() {
  const { pathname } = useLocation()
  const { ui } = useLocale()
  const previousPath = useRef(pathname)
  useEffect(() => {
    // Announce page changes without moving focus when a notebook tab changes.
    if (previousPath.current !== pathname) {
      document.getElementById('content')?.focus({ preventScroll: true })
      previousPath.current = pathname
    }
  }, [pathname])

  return (
    <>
      <a href="#content" className="skip-link">
        {ui.skipToContent}
      </a>
      <PointerGlow />
      <Outlet />
      <ScrollRestoration getKey={getScrollKey} />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: localizedRoutes,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
