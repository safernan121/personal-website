import { useEffect, useState } from 'react'
import { sections, type SectionId } from '../content/profile'

export function useActiveSection(): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>('about')

  useEffect(() => {
    let frame = 0
    const update = () => {
      // Match the reading position even when sections are taller than the screen.
      const readingLine = Math.min(window.innerHeight * 0.3, 220)
      let active: SectionId = 'about'
      for (const { id } of sections) {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= readingLine)
          active = id
      }
      setActiveSection(active)
    }
    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('hashchange', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('hashchange', schedule)
    }
  }, [])

  return activeSection
}
