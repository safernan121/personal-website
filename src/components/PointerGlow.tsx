import { useEffect, useRef } from 'react'
import styles from './Portfolio.module.css'

export function PointerGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const query = window.matchMedia(
      '(min-width: 960px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    )
    let frame = 0
    let x = 0
    let y = 0
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      x = event.clientX
      y = event.clientY
      if (frame) return
      frame = requestAnimationFrame(() => {
        const glow = glowRef.current
        if (glow) {
          glow.style.setProperty('--pointer-x', `${x}px`)
          glow.style.setProperty('--pointer-y', `${y}px`)
          glow.style.opacity = '1'
        }
        frame = 0
      })
    }
    const hide = () => {
      cancelAnimationFrame(frame)
      frame = 0
      if (glowRef.current) glowRef.current.style.opacity = '0'
    }
    const detach = () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', hide)
      window.removeEventListener('blur', hide)
      hide()
    }
    const sync = () => {
      detach()
      if (!query.matches) return
      window.addEventListener('pointermove', move, { passive: true })
      document.documentElement.addEventListener('pointerleave', hide)
      window.addEventListener('blur', hide)
    }
    sync()
    query.addEventListener('change', sync)
    return () => {
      query.removeEventListener('change', sync)
      detach()
    }
  }, [])

  return <div ref={glowRef} className={styles.pointerGlow} aria-hidden="true" />
}
