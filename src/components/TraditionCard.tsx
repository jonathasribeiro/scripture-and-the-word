import type { TraditionPosition } from '@/data/types'
import { useApp } from '@/context/AppContext'

interface TraditionCardProps {
  position: TraditionPosition
}

export function TraditionCard({ position }: TraditionCardProps) {
  const { isPt } = useApp()

  return (
    <article className="manuscript-card p-5" id={`pos-${position.id}`}>
      <h3 className="font-display text-xl text-wine dark:text-gold mb-2">
        {isPt ? position.namePt : position.nameEn}
      </h3>
      <p className="prose-academic text-sm mb-3">
        {isPt ? position.definitionPt : position.definitionEn}
      </p>
      {position.representatives && (
        <p className="text-xs mb-2 text-graphite/70 dark:text-cream/60">
          {position.representatives.join(' · ')}
        </p>
      )}
      <div className="grid sm:grid-cols-2 gap-3 text-sm">
        <div>
          <p className="font-medium text-manuscript mb-1">{isPt ? 'Virtudes' : 'Virtues'}</p>
          <p>{isPt ? position.virtuesPt : position.virtuesEn}</p>
        </div>
        <div>
          <p className="font-medium text-wine mb-1">{isPt ? 'Críticas' : 'Critiques'}</p>
          <p>{isPt ? position.critiquesPt : position.critiquesEn}</p>
        </div>
      </div>
      <p className="text-sm mt-3 pt-3 border-t border-beige dark:border-graphite">
        {isPt ? position.thesisRelationPt : position.thesisRelationEn}
      </p>
    </article>
  )
}
