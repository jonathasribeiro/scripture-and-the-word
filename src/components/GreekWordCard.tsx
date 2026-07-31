import { useTranslation } from 'react-i18next'
import { Volume2 } from 'lucide-react'
import type { GreekTerm } from '@/data/types'
import { useApp } from '@/context/AppContext'
import { ShareButton } from './ShareButton'
import { SourceButton } from './SourceButton'

interface GreekWordCardProps {
  term: GreekTerm
}

export function GreekWordCard({ term }: GreekWordCardProps) {
  const { t } = useTranslation()
  const { isPt } = useApp()

  const speak = () => {
    if (!window.speechSynthesis) return
    const u = new SpeechSynthesisUtterance(term.transliteration)
    u.lang = 'el-GR'
    window.speechSynthesis.speak(u)
  }

  return (
    <article className="manuscript-card p-5" id={`greek-${term.id}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <p className="greek text-3xl text-wine dark:text-gold mb-1">{term.greek}</p>
          <p className="text-sm text-graphite/70 dark:text-cream/60">{term.transliteration}</p>
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={speak}
            className="p-2 rounded-sm hover:bg-gold/15"
            aria-label="Audio"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <ShareButton title={term.greek} hash={`greek-${term.id}`} compact />
        </div>
      </div>
      <p className="prose-academic mb-3">{isPt ? term.definitionPt : term.definitionEn}</p>
      <p className="text-sm mb-2">
        <span className="font-medium text-manuscript">
          {isPt ? 'Campo semântico: ' : 'Semantic field: '}
        </span>
        {isPt ? term.semanticFieldPt : term.semanticFieldEn}
      </p>
      {term.ntExamples?.length > 0 && (
        <p className="text-sm mb-2">
          <span className="font-medium">NT: </span>
          {term.ntExamples.join(' · ')}
        </p>
      )}
      <p className="text-sm text-wine/90 dark:text-gold/90 mb-4">
        {isPt ? term.commonMistakesPt : term.commonMistakesEn}
      </p>
      <div className="flex flex-wrap gap-2">
        {term.lexiconLinks.map((link) => (
          <SourceButton key={link.url} href={link.url}>
            {link.label}
          </SourceButton>
        ))}
      </div>
      <p className="mt-3 text-xs text-graphite/50 dark:text-cream/40">
        {t('online.endorsementDisclaimer')}
      </p>
    </article>
  )
}
