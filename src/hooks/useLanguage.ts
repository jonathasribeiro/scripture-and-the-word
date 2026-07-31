import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export type AppLanguage = 'pt-BR' | 'en-US'

function getInitialLanguage(): AppLanguage {
  if (typeof window === 'undefined') return 'pt-BR'
  const stored = localStorage.getItem('satw-lang')
  if (stored === 'pt-BR' || stored === 'en-US') return stored
  const params = new URLSearchParams(window.location.search)
  const q = params.get('lang')
  if (q === 'pt-BR' || q === 'en-US' || q === 'en') return q === 'en' ? 'en-US' : q
  return 'pt-BR'
}

export function useLanguage() {
  const { i18n } = useTranslation()
  const [language, setLanguageState] = useState<AppLanguage>(getInitialLanguage)

  useEffect(() => {
    void i18n.changeLanguage(language)
    localStorage.setItem('satw-lang', language)
    document.documentElement.lang = language === 'pt-BR' ? 'pt-BR' : 'en'
  }, [language, i18n])

  const setLanguage = useCallback((lang: AppLanguage) => {
    setLanguageState(lang)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguageState((l) => (l === 'pt-BR' ? 'en-US' : 'pt-BR'))
  }, [])

  return { language, setLanguage, toggleLanguage, isPt: language === 'pt-BR' }
}
