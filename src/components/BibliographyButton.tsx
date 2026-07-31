import { Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { toBibTeX, toRIS, downloadText, scholarSearchUrl, type BibEntry } from '@/utils/bibliography'
import { SourceButton } from './SourceButton'

interface BibliographyButtonProps {
  entry: BibEntry
  searchQuery?: string
}

export function BibliographyButton({ entry, searchQuery }: BibliographyButtonProps) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-wrap gap-2">
      {entry.url ? (
        <SourceButton href={entry.url}>{t('common.openSource')}</SourceButton>
      ) : (
        <SourceButton href={scholarSearchUrl(searchQuery ?? `${entry.author} ${entry.title}`)}>
          {t('library.searchWork')}
        </SourceButton>
      )}
      <button
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm
          border border-beige dark:border-graphite bg-cream/50 dark:bg-dark-surface
          hover:border-gold hover:bg-gold/15 transition-colors"
        onClick={() => downloadText(`${entry.id}.bib`, toBibTeX(entry))}
      >
        <Download className="w-3 h-3" /> BibTeX
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm
          border border-beige dark:border-graphite bg-cream/50 dark:bg-dark-surface
          hover:border-gold hover:bg-gold/15 transition-colors"
        onClick={() => downloadText(`${entry.id}.ris`, toRIS(entry))}
      >
        <Download className="w-3 h-3" /> RIS
      </button>
    </div>
  )
}
