import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ptBR from './locales/pt-BR'
import enUS from './locales/en-US'

function getStoredLanguage(): string {
  if (typeof window === 'undefined') return 'pt-BR'
  const stored = localStorage.getItem('satw-lang')
  if (stored === 'pt-BR' || stored === 'en-US') return stored
  return 'pt-BR'
}

void i18n.use(initReactI18next).init({
  resources: {
    'pt-BR': { translation: ptBR },
    'en-US': { translation: enUS },
  },
  lng: getStoredLanguage(),
  fallbackLng: 'pt-BR',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
