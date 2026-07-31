import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '@/components/SectionTitle'
import { ManuscriptGallery } from '@/components/ManuscriptGallery'
import { HistoricalTimeline } from '@/components/HistoricalTimeline'
import { manuscripts } from '@/data/manuscripts'
import { historicalImages, imagesData } from '@/data/images'
import { useApp } from '@/context/AppContext'
import { applySeo } from '@/utils/seo'

function withSortYear(
  list: typeof manuscripts,
): (typeof manuscripts[number] & { sortYear: number })[] {
  return list.map((m, i) => {
    if (m.sortYear != null) return { ...m, sortYear: m.sortYear }
    const match = m.dateApprox.match(/(-?\d{2,4})/)
    const year = match ? Number(match[1]) : 100 + i * 50
    // Heuristic: BCE often written as negative elsewhere; DSS ~ -100
    const lower = m.dateApprox.toLowerCase()
    const sortYear =
      lower.includes('bce') || lower.includes('bc') || lower.includes('a.e.c')
        ? -Math.abs(year)
        : year
    return { ...m, sortYear }
  })
}

export function ManuscriptsPage() {
  const { t } = useTranslation()
  const { language, isPt } = useApp()

  useEffect(() => {
    applySeo({
      title: language === 'pt-BR' ? 'Manuscritos | Galeria e Linha do Tempo' : 'Manuscripts | Gallery and Timeline',
      description: t('manuscripts.intro'),
      lang: language,
      path: '/manuscripts',
    })
  }, [language, t])

  return (
    <div className="section-pad max-w-6xl mx-auto">
      <SectionTitle title={t('manuscripts.title')} subtitle={t('manuscripts.intro')} />
      <p className="text-sm italic text-center mb-10 text-graphite/70 dark:text-cream/60">
        {isPt ? imagesData.editorialNotePt : imagesData.editorialNoteEn}
      </p>

      <section className="mb-16" id="gallery">
        <ManuscriptGallery images={historicalImages} />
      </section>

      <section id="timeline">
        <h3 className="font-display text-3xl text-center mb-8">Timeline</h3>
        <HistoricalTimeline items={withSortYear(manuscripts)} />
      </section>
    </div>
  )
}
