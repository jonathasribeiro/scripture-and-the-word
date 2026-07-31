import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Search } from 'lucide-react'
import type { Resource } from '@/data/types'
import { useApp } from '@/context/AppContext'
import { searchItems } from '@/utils/search'
import { SourceBadge } from './SourceBadge'
import { BibliographyButton } from './BibliographyButton'

interface ResourceLibraryProps {
  resources: Resource[]
}

export function ResourceLibrary({ resources }: ResourceLibraryProps) {
  const { t } = useTranslation()
  const { isPt } = useApp()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [kind, setKind] = useState<'all' | 'primary' | 'secondary'>('all')

  const categories = useMemo(() => {
    const set = new Set(resources.map((r) => r.category))
    return ['all', ...Array.from(set).sort()]
  }, [resources])

  const filtered = useMemo(() => {
    let list = resources
    if (category !== 'all') list = list.filter((r) => r.category === category)
    if (kind !== 'all') list = list.filter((r) => r.primaryOrSecondary === kind)
    return searchItems(
      list,
      query,
      (r) => `${r.title} ${r.author} ${r.summaryPt} ${r.summaryEn} ${(r.tags ?? []).join(' ')}`,
    )
  }, [resources, category, kind, query])

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 mb-6 no-print">
        <label className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-graphite/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('library.searchPlaceholder')}
            className="w-full pl-10 pr-3 py-2.5 rounded-sm border border-beige dark:border-graphite bg-cream dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2.5 rounded-sm border border-beige dark:border-graphite bg-cream dark:bg-dark-card"
          aria-label={t('common.filters')}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === 'all' ? t('library.filterAll') : c}
            </option>
          ))}
        </select>
        <select
          value={kind}
          onChange={(e) => setKind(e.target.value as typeof kind)}
          className="px-3 py-2.5 rounded-sm border border-beige dark:border-graphite bg-cream dark:bg-dark-card"
        >
          <option value="all">{t('common.all')}</option>
          <option value="primary">{t('library.primary')}</option>
          <option value="secondary">{t('library.secondary')}</option>
        </select>
      </div>

      <p className="text-sm text-graphite/60 dark:text-cream/50 mb-4">
        {filtered.length} / {resources.length}
      </p>

      <div className="grid gap-4">
        {filtered.map((r) => (
          <article key={r.id} className="manuscript-card p-5" id={`res-${r.id}`}>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="font-display text-xl text-ink dark:text-cream">{r.title}</h3>
                <p className="text-sm text-graphite/70 dark:text-cream/60">
                  {r.author}
                  {r.year ? ` · ${r.year}` : ''}
                  {r.publisher ? ` · ${r.publisher}` : ''}
                </p>
              </div>
              <SourceBadge
                kind={r.primaryOrSecondary}
                label={
                  r.primaryOrSecondary === 'primary' ? t('library.primary') : t('library.secondary')
                }
                level={r.level}
                language={r.language}
              />
            </div>
            <p className="prose-academic text-sm mb-3">{isPt ? r.summaryPt : r.summaryEn}</p>
            {r.theologicalPosition && (
              <p className="text-xs mb-3 text-manuscript">{r.theologicalPosition}</p>
            )}
            <BibliographyButton
              entry={{
                id: r.id,
                title: r.title,
                author: r.author,
                year: r.year,
                publisher: r.publisher,
                url: r.url,
              }}
              searchQuery={r.searchQuery ?? `${r.author} ${r.title}`}
            />
          </article>
        ))}
      </div>
    </div>
  )
}
