import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Library } from 'lucide-react'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden section-pad pb-8 md:pb-12">
      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23A98143' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-6xl mx-auto relative grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gold font-display text-lg md:text-xl tracking-wide mb-3">
            Scripture &amp; the Word
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] font-semibold text-ink dark:text-cream mb-5">
            {t('hero.title')}
          </h1>
          <div className="ornament-line mb-5 ml-0" />
          <p className="prose-academic text-lg md:text-xl max-w-xl mb-4">{t('hero.subtitle')}</p>
          <p className="quote-text text-xl text-wine dark:text-gold mb-8 max-w-xl">
            {t('hero.highlight')}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/word" className="btn-primary">
              {t('hero.ctaExplore')} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/library" className="btn-secondary">
              <Library className="w-4 h-4" /> {t('hero.ctaLibrary')}
            </Link>
          </div>
        </div>

        <div className="relative" aria-hidden>
          <HeroDiagram />
        </div>
      </div>
    </section>
  )
}

function HeroDiagram() {
  return (
    <svg viewBox="0 0 480 420" className="w-full max-w-lg mx-auto drop-shadow-lg" role="img">
      <title>Logos, revelation, Scripture, proclamation</title>
      <defs>
        <linearGradient id="scrollGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FAF7F0" />
          <stop offset="100%" stopColor="#DED1B8" />
        </linearGradient>
        <filter id="soft">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2" />
        </filter>
      </defs>
      {/* parchment */}
      <rect x="40" y="60" width="280" height="300" rx="4" fill="url(#scrollGrad)" stroke="#A98143" strokeWidth="2" filter="url(#soft)" />
      <path d="M70 100h220M70 130h180M70 160h200M70 190h160" stroke="#241C17" strokeOpacity="0.25" strokeWidth="2" />
      {/* codex */}
      <path d="M300 120h120v200c-30-20-60-20-90 0-30-20-60-20-90 0V160c30 15 60 15 90 0z" fill="#6B2D31" opacity="0.9" />
      <path d="M300 160c30 15 60 15 90 0" stroke="#A98143" strokeWidth="1.5" fill="none" />
      {/* cross */}
      <g transform="translate(380,40)">
        <rect x="18" y="0" width="8" height="56" fill="#A98143" />
        <rect x="4" y="14" width="36" height="8" fill="#A98143" />
      </g>
      {/* Greek logos */}
      <text x="90" y="280" className="greek" fill="#6B2D31" fontSize="36" fontFamily="Noto Serif, serif">
        λόγος
      </text>
      {/* Hebrew davar */}
      <text x="90" y="330" fill="#344E41" fontSize="28" fontFamily="Noto Serif Hebrew, Noto Serif, serif">
        דָּבָר
      </text>
      {/* connection lines */}
      <g stroke="#A98143" strokeWidth="1.5" fill="none" strokeDasharray="4 3">
        <path d="M200 40 L200 60" />
        <path d="M240 360 L240 400" />
      </g>
      <text x="150" y="36" fill="#241C17" fontSize="12" fontFamily="Inter, sans-serif" opacity="0.7">
        Χριστός → γραφή → κήρυγμα
      </text>
      {/* manuscript fragment */}
      <rect x="330" y="300" width="100" height="70" rx="2" fill="#F3EBDD" stroke="#344E41" strokeWidth="1.5" transform="rotate(-8 380 335)" />
      <text x="345" y="340" fill="#241C17" fontSize="10" fontFamily="Noto Serif" opacity="0.6" transform="rotate(-8 380 335)">
        P52 · ἐν ἀρχῇ
      </text>
    </svg>
  )
}
