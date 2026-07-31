import { createContext, useContext, useState, type ReactNode } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage, type AppLanguage } from '@/hooks/useLanguage'
import { useFavorites } from '@/hooks/useFavorites'

export interface AppContextValue {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  language: AppLanguage
  setLanguage: (lang: AppLanguage) => void
  isPt: boolean
  favorites: string[]
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
  readingMode: boolean
  setReadingMode: (v: boolean) => void
  presentationMode: boolean
  setPresentationMode: (v: boolean) => void
}

export const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, isPt } = useLanguage()
  const { favorites, toggleFavorite, isFavorite } = useFavorites()
  const [readingMode, setReadingMode] = useState(false)
  const [presentationMode, setPresentationMode] = useState(false)

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        setLanguage,
        isPt,
        favorites,
        toggleFavorite,
        isFavorite,
        readingMode,
        setReadingMode,
        presentationMode,
        setPresentationMode,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
