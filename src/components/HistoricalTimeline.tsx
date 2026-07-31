import type { Manuscript } from '@/data/types'
import { useApp } from '@/context/AppContext'
import { SourceButton } from './SourceButton'

interface HistoricalTimelineProps {
  items: Manuscript[]
}

export function HistoricalTimeline({ items }: HistoricalTimelineProps) {
  const { isPt } = useApp()
  const sorted = [...items].sort((a, b) => (a.sortYear ?? 0) - (b.sortYear ?? 0))

  return (
    <ol className="relative border-l-2 border-gold/60 ml-3 md:ml-6 space-y-8">
      {sorted.map((m) => (
        <li key={m.id} className="ml-6 md:ml-8" id={`ms-${m.id}`}>
          <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-wine border-2 border-gold" />
          <article className="manuscript-card p-5">
            <p className="text-xs uppercase tracking-wider text-gold mb-1">{m.dateApprox}</p>
            <h3 className="font-display text-xl text-ink dark:text-cream mb-2">
              {isPt ? m.namePt : m.nameEn}
            </h3>
            <p className="text-sm prose-academic mb-2">{isPt ? m.importancePt : m.importanceEn}</p>
            <dl className="grid sm:grid-cols-2 gap-2 text-sm mb-3">
              <div>
                <dt className="text-graphite/50 dark:text-cream/40">
                  {isPt ? 'Idioma' : 'Language'}
                </dt>
                <dd>{m.language}</dd>
              </div>
              <div>
                <dt className="text-graphite/50 dark:text-cream/40">
                  {isPt ? 'Local' : 'Location'}
                </dt>
                <dd>{isPt ? m.locationPt : m.locationEn}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-graphite/50 dark:text-cream/40">
                  {isPt ? 'Conteúdo' : 'Content'}
                </dt>
                <dd>{isPt ? m.contentPt : m.contentEn}</dd>
              </div>
            </dl>
            {m.institutionalUrl && (
              <SourceButton href={m.institutionalUrl}>
                {isPt ? 'Página institucional' : 'Institutional page'}
              </SourceButton>
            )}
          </article>
        </li>
      ))}
    </ol>
  )
}
