import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '@/components/SectionTitle'
import { AuthorCard } from '@/components/AuthorCard'
import { apostolicFathers } from '@/data/apostolicFathers'
import { churchFathers } from '@/data/churchFathers'
import { mapApostolicToAuthor, mapChurchFatherToAuthor } from '@/utils/mappers'
import { useApp } from '@/context/AppContext'
import { applySeo } from '@/utils/seo'

export function FathersPage() {
  const { t } = useTranslation()
  const { language } = useApp()

  useEffect(() => {
    applySeo({
      title: language === 'pt-BR' ? 'Pais da Igreja | Apostólicos e Patrística' : 'Church Fathers | Apostolic and Patristic',
      description: t('fathers.intro'),
      lang: language,
      path: '/fathers',
    })
  }, [language, t])

  return (
    <div className="section-pad max-w-6xl mx-auto">
      <section className="mb-16" id="apostolic">
        <SectionTitle title={t('apostolic.title')} subtitle={t('apostolic.intro')} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {apostolicFathers.map((a) => (
            <AuthorCard key={a.id} author={mapApostolicToAuthor(a)} />
          ))}
        </div>
      </section>

      <section id="fathers">
        <SectionTitle title={t('fathers.title')} subtitle={t('fathers.intro')} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {churchFathers.map((f) => (
            <AuthorCard key={f.id} author={mapChurchFatherToAuthor(f)} />
          ))}
        </div>
      </section>
    </div>
  )
}
