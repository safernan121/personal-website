import { useEffect, useRef } from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from 'react-router'
import { PointerGlow } from './components/PointerGlow'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { CheesecakePage } from './pages/CheesecakePage'
import { NotFoundPage } from './pages/NotFoundPage'

function SiteLayout() {
  const { pathname } = useLocation()
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
        Skip to content
      </a>
      <PointerGlow />
      <Outlet />
      <ScrollRestoration />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects/:slug', element: <ProjectPage /> },
      { path: 'cheesecake', element: <CheesecakePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
