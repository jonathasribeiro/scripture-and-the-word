import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '@/components/SectionTitle'
import { GreekWordCard } from '@/components/GreekWordCard'
import { HebrewWordCard } from '@/components/HebrewWordCard'
import { greekTerms } from '@/data/greekTerms'
import { hebrewTerms } from '@/data/hebrewTerms'
import { useApp } from '@/context/AppContext'
import { applySeo } from '@/utils/seo'

export function LanguagesPage() {
  const { t } = useTranslation()
  const { language } = useApp()

  useEffect(() => {
    applySeo({
      title: language === 'pt-BR' ? 'Grego e Hebraico | Glossários' : 'Greek and Hebrew | Glossaries',
      description: t('greek.intro'),
      lang: language,
      path: '/languages',
    })
  }, [language, t])

  return (
    <div className="section-pad max-w-6xl mx-auto">
      <section className="mb-16" id="greek">
        <SectionTitle title={t('greek.title')} subtitle={t('greek.subtitle')} />
        <p className="prose-academic mb-8 max-w-3xl mx-auto text-center">{t('greek.intro')}</p>
        <div className="grid md:grid-cols-2 gap-4">
          {greekTerms.map((term) => (
            <GreekWordCard key={term.id} term={term} />
          ))}
        </div>
      </section>

      <section id="hebrew">
        <SectionTitle title={t('hebrew.title')} subtitle={t('hebrew.subtitle')} />
        <p className="prose-academic mb-8 max-w-3xl mx-auto text-center">{t('hebrew.intro')}</p>
        <div className="grid md:grid-cols-2 gap-4">
          {hebrewTerms.map((term) => (
            <HebrewWordCard key={term.id} term={term} />
          ))}
        </div>
      </section>
    </div>
  )
}
