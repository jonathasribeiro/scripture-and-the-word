import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-beige dark:border-graphite bg-cream/60 dark:bg-dark-surface mt-auto no-print">
      <div className="max-w-7xl mx-auto section-pad py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-display text-2xl text-ink dark:text-cream mb-2">Scripture &amp; the Word</p>
            <p className="text-sm prose-academic">{t('footer.thesis')}</p>
          </div>
          <div>
            <p className="font-medium text-ink dark:text-cream mb-2">{t('nav.sources')}</p>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/library" className="hover:text-wine dark:hover:text-gold">
                  {t('nav.library')}
                </Link>
              </li>
              <li>
                <Link to="/manuscripts" className="hover:text-wine dark:hover:text-gold">
                  {t('nav.manuscripts')}
                </Link>
              </li>
              <li>
                <Link to="/canon" className="hover:text-wine dark:hover:text-gold">
                  {t('nav.canon')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm prose-academic space-y-2">
            <p>{t('footer.academicNote')}</p>
            <p>{t('footer.licenseNote')}</p>
          </div>
        </div>
        <div className="ornament-line mb-6" />
        <p className="text-center text-xs text-graphite/60 dark:text-cream/50">
          © {year} Scripture &amp; the Word · {t('footer.builtWith')}
        </p>
      </div>
    </footer>
  )
}
