import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BookOpen, Menu, Printer, Share2, X, BookMarked, Mic2, Presentation } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'
import { useApp } from '@/context/AppContext'
import { shareSection } from '@/utils/share'

const links = [
  { to: '/', key: 'home' },
  { to: '/word', key: 'word' },
  { to: '/languages', key: 'languages' },
  { to: '/canon', key: 'canon' },
  { to: '/manuscripts', key: 'manuscripts' },
  { to: '/fathers', key: 'fathers' },
  { to: '/library', key: 'library' },
] as const

export function Header() {
  const { t } = useTranslation()
  const { readingMode, setReadingMode, presentationMode, setPresentationMode } = useApp()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('reading-mode', readingMode)
    document.body.classList.toggle('presentation-mode', presentationMode)
  }, [readingMode, presentationMode])

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-2 py-1 text-sm whitespace-nowrap transition-colors border-b-2 ${
      isActive
        ? 'border-gold text-wine dark:text-gold font-medium'
        : 'border-transparent text-graphite/80 dark:text-cream/75 hover:text-wine dark:hover:text-gold'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all no-print ${
        scrolled
          ? 'bg-parchment/95 dark:bg-dark-bg/95 backdrop-blur-md border-beige dark:border-graphite shadow-sm'
          : 'bg-parchment/80 dark:bg-dark-bg/80 border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-wine focus:text-cream focus:px-3 focus:py-2"
      >
        {t('common.skipToContent')}
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-3">
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <BookOpen className="w-6 h-6 text-wine group-hover:text-gold transition-colors" />
            <span className="font-display text-lg md:text-xl font-semibold text-ink dark:text-cream hidden sm:inline">
              Scripture &amp; the Word
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1 overflow-x-auto" aria-label="Main">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={navClass}>
                {t(`nav.${l.key}`)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              className="hidden md:inline-flex p-2 rounded-sm border border-beige dark:border-graphite hover:bg-gold/15"
              aria-label={t('common.share')}
              onClick={() =>
                void shareSection({
                  title: t('hero.title'),
                  text: t('hero.subtitle'),
                })
              }
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="hidden lg:inline-flex p-2 rounded-sm border border-beige dark:border-graphite hover:bg-gold/15"
              aria-label={t('common.print')}
              onClick={() => window.print()}
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="hidden lg:inline-flex p-2 rounded-sm border border-beige dark:border-graphite hover:bg-gold/15"
              aria-label={t('common.readingMode')}
              aria-pressed={readingMode}
              onClick={() => setReadingMode(!readingMode)}
            >
              <BookMarked className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="hidden lg:inline-flex p-2 rounded-sm border border-beige dark:border-graphite hover:bg-gold/15"
              aria-label={t('common.presentationMode')}
              aria-pressed={presentationMode}
              onClick={() => setPresentationMode(!presentationMode)}
            >
              <Presentation className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="hidden lg:inline-flex p-2 rounded-sm border border-beige dark:border-graphite hover:bg-gold/15"
              aria-label={t('common.podcastMode')}
              onClick={() => {
                const el = document.getElementById('main')
                if (el) {
                  el.classList.toggle('podcast-mode')
                  window.speechSynthesis?.cancel()
                }
              }}
            >
              <Mic2 className="w-4 h-4" />
            </button>
            <Link to="/library" className="hidden sm:inline-flex btn-primary text-sm py-1.5 px-3">
              {t('nav.openLibrary')}
            </Link>
            <button
              type="button"
              className="xl:hidden p-2 rounded-sm border border-beige dark:border-graphite"
              aria-expanded={open}
              aria-label={t('common.menu')}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            className="xl:hidden pb-4 flex flex-col gap-1 border-t border-beige dark:border-graphite pt-3"
            aria-label="Mobile"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-sm ${isActive ? 'bg-gold/20 text-wine dark:text-gold' : 'hover:bg-beige/40 dark:hover:bg-graphite'}`
                }
              >
                {t(`nav.${l.key}`)}
              </NavLink>
            ))}
            <Link
              to="/library"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              {t('nav.openLibrary')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
