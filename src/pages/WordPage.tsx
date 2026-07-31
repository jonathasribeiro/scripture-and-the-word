import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '@/components/SectionTitle'
import { ScriptureCard } from '@/components/ScriptureCard'
import { ObjectionAccordion } from '@/components/ObjectionAccordion'
import { TraditionCard } from '@/components/TraditionCard'
import { AuthorCard } from '@/components/AuthorCard'
import { scripturePassages } from '@/data/scriptures'
import { objections } from '@/data/objections'
import { traditions } from '@/data/traditions'
import { modernTheologians } from '@/data/modernTheologians'
import { reformers } from '@/data/reformers'
import { mapModernToAuthor, mapReformerToAuthor } from '@/utils/mappers'
import { useApp } from '@/context/AppContext'
import { applySeo } from '@/utils/seo'

export function WordPage() {
  const { t } = useTranslation()
  const { language } = useApp()

  useEffect(() => {
    applySeo({
      title:
        language === 'pt-BR' ? 'A Palavra | Logos, Rhema e Graphē' : 'The Word | Logos, Rhema, and Graphē',
      description: t('logos.intro'),
      lang: language,
      path: '/word',
    })
  }, [language, t])

  const logos = scripturePassages.filter(
    (p) => p.section === 'logos' || p.section === 'johnExegesis',
  )
  const rhema = scripturePassages.filter((p) => p.section === 'rhema')
  const graphe = scripturePassages.filter((p) => p.section === 'graphe')

  return (
    <div className="section-pad max-w-6xl mx-auto">
      <SectionTitle title={t('logos.title')} subtitle={t('logos.intro')} />

      <section className="mb-16" id="logos-passages">
        <h3 className="font-display text-2xl mb-2 text-wine dark:text-gold">
          {t('logos.johnExegesisTitle')}
        </h3>
        <p className="prose-academic mb-6">{t('logos.johnExegesisIntro')}</p>
        <div className="grid md:grid-cols-2 gap-4">
          {logos.map((p) => (
            <ScriptureCard key={p.id} passage={p} />
          ))}
        </div>
      </section>

      <section className="mb-16" id="rhema">
        <SectionTitle title={t('rhema.title')} subtitle={t('rhema.intro')} />
        <p className="prose-academic mb-6 border-l-2 border-gold pl-4">{t('rhema.caution')}</p>
        <div className="grid md:grid-cols-2 gap-4">
          {rhema.map((p) => (
            <ScriptureCard key={p.id} passage={p} />
          ))}
        </div>
      </section>

      <section className="mb-16" id="graphe">
        <SectionTitle title={t('graphe.title')} subtitle={t('graphe.intro')} />
        <article className="manuscript-card p-6 mb-6">
          <h3 className="font-display text-2xl text-wine dark:text-gold mb-2">
            {t('graphe.jesusNotGrapheTitle')}
          </h3>
          <p className="prose-academic drop-cap">{t('graphe.jesusNotGrapheBody')}</p>
        </article>
        <div className="grid md:grid-cols-2 gap-4">
          {graphe.map((p) => (
            <ScriptureCard key={p.id} passage={p} />
          ))}
        </div>
      </section>

      <section className="mb-16" id="positions">
        <SectionTitle title={t('positions.title')} subtitle={t('positions.intro')} />
        <div className="grid md:grid-cols-2 gap-4">
          {traditions.map((p) => (
            <TraditionCard key={p.id} position={p} />
          ))}
        </div>
      </section>

      <section className="mb-16" id="reformers">
        <SectionTitle title={t('reformers.title')} subtitle={t('reformers.intro')} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reformers.map((r) => (
            <AuthorCard key={r.id} author={mapReformerToAuthor(r)} />
          ))}
        </div>
      </section>

      <section className="mb-16" id="modern">
        <SectionTitle title={t('modern.title')} subtitle={t('modern.intro')} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modernTheologians.map((m) => (
            <AuthorCard key={m.id} author={mapModernToAuthor(m)} />
          ))}
        </div>
      </section>

      <section id="objections-full">
        <SectionTitle title={t('objections.title')} subtitle={t('objections.intro')} />
        <ObjectionAccordion items={objections} />
      </section>
    </div>
  )
}
