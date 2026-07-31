import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '@/components/SectionTitle'
import { ResourceLibrary } from '@/components/ResourceLibrary'
import { SourceButton } from '@/components/SourceButton'
import { resources } from '@/data/resources'
import { onlineSources } from '@/data/onlineSources'
import { useApp } from '@/context/AppContext'
import { applySeo } from '@/utils/seo'

export function LibraryPage() {
  const { t } = useTranslation()
  const { language, isPt } = useApp()

  useEffect(() => {
    applySeo({
      title: language === 'pt-BR' ? 'Biblioteca de Fontes' : 'Source Library',
      description: t('library.intro'),
      lang: language,
      path: '/library',
    })
  }, [language, t])

  return (
    <div className="section-pad max-w-6xl mx-auto">
      <SectionTitle title={t('library.title')} subtitle={t('library.intro')} />
      <ResourceLibrary resources={resources} />

      <section className="mt-16" id="online">
        <SectionTitle title={t('online.title')} subtitle={t('online.intro')} />
        <p className="text-sm italic mb-6 text-center">{t('online.endorsementDisclaimer')}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {onlineSources.map((s) => (
            <article key={s.id} className="manuscript-card p-4 flex flex-col">
              <h3 className="font-display text-lg text-wine dark:text-gold mb-1">
                {isPt ? (s.namePt ?? s.name) : (s.nameEn ?? s.name)}
              </h3>
              <p className="text-sm prose-academic mb-4 flex-1">
                {isPt ? s.descriptionPt : s.descriptionEn}
              </p>
              <SourceButton href={s.url}>
                {isPt ? 'Abrir fonte' : 'Open source'}
              </SourceButton>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
