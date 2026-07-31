import { useMemo, useState } from 'react'
import type { CanonBook, CanonTradition } from '@/data/types'
import { useApp } from '@/context/AppContext'
import { useTranslation } from 'react-i18next'

interface CanonMatrixProps {
  traditions: CanonTradition[]
  books: CanonBook[]
}

const FILTERS = [
  'all',
  'protocanonical',
  'deuterocanonical',
  'anagignoskomena',
  'apocrypha',
  'pseudepigrapha',
  'ot',
  'nt',
] as const

export function CanonMatrix({ traditions, books }: CanonMatrixProps) {
  const { isPt } = useApp()
  const { t } = useTranslation()
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('all')

  const filtered = useMemo(() => {
    return books.filter((b) => {
      if (filter === 'all') return true
      if (filter === 'ot') return b.testament === 'ot'
      if (filter === 'nt') return b.testament === 'nt'
      return b.categories?.includes(filter)
    })
  }, [books, filter])

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4 no-print">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-3 py-1 text-xs rounded-sm border transition-colors ${
              filter === f
                ? 'bg-wine text-cream border-wine'
                : 'border-beige dark:border-graphite hover:bg-gold/15'
            }`}
          >
            {t(`canon.filters.${f}`, { defaultValue: f })}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto manuscript-card">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-beige/50 dark:bg-ink/40">
              <th className="sticky left-0 bg-beige/80 dark:bg-dark-card px-3 py-2 text-left font-display text-base">
                {isPt ? 'Livro' : 'Book'}
              </th>
              {traditions.map((tr) => (
                <th key={tr.id} className="px-2 py-2 text-center font-medium whitespace-nowrap">
                  {isPt ? tr.namePt : tr.nameEn}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((book) => (
              <tr key={book.id} className="border-t border-beige/60 dark:border-graphite/60">
                <td className="sticky left-0 bg-cream/95 dark:bg-dark-card px-3 py-1.5 font-medium whitespace-nowrap">
                  {isPt ? book.namePt : book.nameEn}
                </td>
                {traditions.map((tr) => {
                  const included = book.traditions.includes(tr.id)
                  return (
                    <td key={tr.id} className="px-2 py-1.5 text-center">
                      <span
                        className={`inline-block w-3 h-3 rounded-sm ${
                          included ? 'bg-manuscript' : 'bg-beige dark:bg-graphite'
                        }`}
                        title={included ? 'Yes' : 'No'}
                        aria-label={included ? 'included' : 'not included'}
                      />
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function CanonComparison({ traditions }: { traditions: CanonTradition[] }) {
  const { isPt } = useApp()
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {traditions.map((tr) => (
        <article key={tr.id} className="manuscript-card p-5">
          <h3 className="font-display text-xl text-wine dark:text-gold mb-2">
            {isPt ? tr.namePt : tr.nameEn}
          </h3>
          <p className="text-sm prose-academic mb-2">{isPt ? tr.summaryPt : tr.summaryEn}</p>
          {tr.bookCount && (
            <p className="text-xs text-graphite/60 dark:text-cream/50">
              ~{tr.bookCount} books (counting conventions vary)
            </p>
          )}
        </article>
      ))}
    </div>
  )
}
