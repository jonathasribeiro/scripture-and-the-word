import type { HebrewTerm } from '@/data/types'
import { useApp } from '@/context/AppContext'
import { ShareButton } from './ShareButton'
import { SourceButton } from './SourceButton'

interface HebrewWordCardProps {
  term: HebrewTerm
}

export function HebrewWordCard({ term }: HebrewWordCardProps) {
  const { isPt } = useApp()

  return (
    <article className="manuscript-card p-5" id={`hebrew-${term.id}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <p className="hebrew text-3xl text-manuscript dark:text-gold mb-1" lang="he" dir="rtl">
            {term.hebrew}
          </p>
          <p className="text-sm text-graphite/70 dark:text-cream/60">{term.transliteration}</p>
        </div>
        <ShareButton title={term.hebrew} hash={`hebrew-${term.id}`} compact />
      </div>
      <p className="prose-academic mb-3" dir="ltr">
        {isPt ? term.definitionPt : term.definitionEn}
      </p>
      <p className="text-sm mb-2" dir="ltr">
        <span className="font-medium text-manuscript">
          {isPt ? 'Campo semântico: ' : 'Semantic field: '}
        </span>
        {isPt ? term.semanticFieldPt : term.semanticFieldEn}
      </p>
      <p className="text-sm text-wine/90 dark:text-gold/90 mb-4" dir="ltr">
        {isPt
          ? (term.notesPt ?? term.commonMistakesPt)
          : (term.notesEn ?? term.commonMistakesEn)}
      </p>
      <div className="flex flex-wrap gap-2" dir="ltr">
        {term.lexiconLinks?.map((link) => (
          <SourceButton key={link.url} href={link.url}>
            {link.label}
          </SourceButton>
        ))}
      </div>
    </article>
  )
}
