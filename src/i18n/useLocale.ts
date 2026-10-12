import { useLocation } from 'react-router'
import { profile, experiences } from '../content/profile'
import { aboutMe } from '../content/about'
import { projects } from '../content/projects'
import { upcomingProjects } from '../content/upcomingProjects'
import { recipes } from '../content/recipes'
import { reviews } from '../content/reviews'
import { cheesecake } from '../content/cheesecake'
import * as spanish from '../content/es'
import { getLocale, localizedPath, withoutLocale } from './locale'
import { ui } from './ui'

export const content = {
  en: { profile, experiences, aboutMe, projects, upcomingProjects, recipes, reviews, cheesecake },
  es: spanish,
}

export function useLocale() {
  const { pathname } = useLocation()
  const locale = getLocale(pathname)
  return {
    ...content[locale],
    locale,
    ui: ui[locale],
    pathname: withoutLocale(pathname).replace(/\/+$/, '') || '/',
    path: (target: string) => localizedPath(target, locale),
  }
}
