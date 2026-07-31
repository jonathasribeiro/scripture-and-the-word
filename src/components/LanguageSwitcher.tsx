import { useTranslation } from 'react-i18next'
import { useApp } from '@/context/AppContext'
import type { AppLanguage } from '@/hooks/useLanguage'

export function LanguageSwitcher() {
  const { t } = useTranslation()
  const { language, setLanguage } = useApp()

  const set = (lang: AppLanguage) => {
    setLanguage(lang)
  }

  return (
    <div
      className="inline-flex rounded-sm border border-beige dark:border-graphite overflow-hidden"
      role="group"
      aria-label={t('common.language')}
    >
      <button
        type="button"
        onClick={() => set('pt-BR')}
        className={`px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
          language === 'pt-BR'
            ? 'bg-wine text-cream'
            : 'bg-cream/50 dark:bg-dark-card text-graphite dark:text-cream hover:bg-gold/20'
        }`}
        aria-pressed={language === 'pt-BR'}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => set('en-US')}
        className={`px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
          language === 'en-US'
            ? 'bg-wine text-cream'
            : 'bg-cream/50 dark:bg-dark-card text-graphite dark:text-cream hover:bg-gold/20'
        }`}
        aria-pressed={language === 'en-US'}
      >
        EN
      </button>
    </div>
  )
}
