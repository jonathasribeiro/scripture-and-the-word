import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useApp } from '@/context/AppContext'

export function ThemeToggle() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useApp()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-sm border border-beige dark:border-graphite hover:bg-gold/15 transition-colors"
      aria-label={isDark ? t('common.lightMode') : t('common.darkMode')}
    >
      {isDark ? <Sun className="w-4 h-4 text-gold" /> : <Moon className="w-4 h-4 text-ink" />}
    </button>
  )
}
