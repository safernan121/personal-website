import { content } from './i18n/useLocale'
import { getLocale, withoutLocale } from './i18n/locale'
import { ui } from './i18n/ui'

export const siteUrl = 'https://safernan.dev'

export interface PageMetadata {
  title: string
  description: string
  image: { src: string; alt: string }
}

// Link previews come from the static HTML too (see vite.config.ts), so every
// route's title, description, and image are resolved here from the path alone.
// Project images are rendered by scripts/preview-images.mjs.
export function getPageMetadata(pathname: string): PageMetadata {
  const locale = getLocale(pathname)
  const { profile, aboutMe, projects, upcomingProjects, recipes, cheesecake } = content[locale]
  const strings = ui[locale]
  const path = withoutLocale(pathname).replace(/\/+$/, '') || '/'
  const [, section, slug, ...rest] = path.split('/')
  const siteImage = { src: '/images/previews/default.png', alt: strings.previewImageAlt }
  const page = (title: string, description: string, image = siteImage) =>
    ({ title: `${title} — ${profile.name}`, description, image })

  if (path === '/') {
    return { title: `${profile.name} — ${profile.role}`, description: profile.description, image: siteImage }
  }
  if (path === '/about') return page(aboutMe.label, aboutMe.description)
  if (path === '/cheesecake') return page(strings.cheesecake, cheesecake.introduction)
  if (section === 'projects' && slug && !rest.length) {
    const image = (name: string) => ({
      src: `/images/previews/${slug}.png`,
      alt: strings.projectPreviewImageAlt.replace('{project}', name),
    })
    const project = projects.find((item) => item.slug === slug)
    if (project) return page(project.name, project.tagline, image(project.name))
    const upcoming = upcomingProjects.find((item) => item.slug === slug)
    if (upcoming) {
      return page(
        `${upcoming.name} — ${upcoming.availability}`,
        `${upcoming.summary} ${upcoming.availability}. ${strings.currentlyInDevelopment}`,
        image(upcoming.name),
      )
    }
  }
  if (section === 'cheesecake' && slug === 'recipes' && rest.length === 1) {
    const recipe = recipes.find((item) => item.slug === rest[0])
    if (recipe) return page(recipe.name, recipe.description)
  }
  return page(strings.notFoundTitle, strings.notFoundDescription)
}
