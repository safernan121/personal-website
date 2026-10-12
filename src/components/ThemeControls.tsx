import { useTheme } from '../hooks/useTheme'
import { useLocale } from '../i18n/useLocale'
import { Icon } from './Icon'
import styles from './Pages.module.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { ui } = useLocale()
  const label = theme === 'dark' ? ui.switchToLight : ui.switchToDark
  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} width="17" height="17" />
    </button>
  )
}

