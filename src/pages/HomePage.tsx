import { useTranslation } from 'react-i18next'
import { Hero } from '@/components/Hero'
import { SectionTitle, EditorialNote } from '@/components/SectionTitle'
import { LogosDiagram } from '@/components/Diagrams'
import { ObjectionAccordion } from '@/components/ObjectionAccordion'
import { ShareButton } from '@/components/ShareButton'
import { Link } from 'react-router-dom'
import { objections } from '@/data/objections'
import { applySeo } from '@/utils/seo'
import { useApp } from '@/context/AppContext'
import { useEffect } from 'react'

const THESIS_CARDS = [
  'card1',
  'card2',
  'card3',
  'card4',
  'card5',
  'card6',
] as const

export function HomePage() {
  const { t } = useTranslation()
  const { language } = useApp()

  useEffect(() => {
    applySeo({
      title:
        language === 'pt-BR'
          ? 'A Bíblia é ou contém a Palavra de Deus? | Cristo, Escritura e Cânon'
          : 'Is the Bible the Word of God? | Christ, Scripture, and Canon',
      description:
        language === 'pt-BR'
          ? 'Estudo bíblico, linguístico, patrístico e histórico sobre Cristo como Logos, a inspiração das Escrituras, a Septuaginta, os cânones bíblicos e a formação da Bíblia.'
          : 'A biblical, linguistic, patristic, and historical study of Christ as the Logos, the inspiration of Scripture, the Septuagint, biblical canons, and the formation of the Bible.',
      lang: language,
      path: '/',
    })
  }, [language])

  return (
    <>
      <Hero />

      <section className="section-pad max-w-6xl mx-auto" id="thesis" aria-labelledby="thesis-title">
        <div className="flex justify-end mb-4 no-print">
          <ShareButton title={t('thesis.title')} hash="thesis" />
        </div>
        <SectionTitle id="thesis-title" title={t('thesis.title')} subtitle={t('thesis.intro')} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {THESIS_CARDS.map((key) => (
            <article key={key} className="manuscript-card p-5">
              <h3 className="font-display text-xl text-wine dark:text-gold mb-2">
                {t(`thesis.${key}Title`)}
              </h3>
              <p className="prose-academic text-sm drop-cap">{t(`thesis.${key}Body`)}</p>
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-10">
          <LogosDiagram />
          <div>
            <EditorialNote>{t('thesis.diagramNote')}</EditorialNote>
            <p className="quote-text text-2xl text-wine dark:text-gold leading-snug">
              {t('thesis.conclusion')}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link to="/word" className="btn-primary">
                {t('nav.word')}
              </Link>
              <Link to="/languages" className="btn-secondary">
                {t('nav.languages')}
              </Link>
              <Link to="/canon" className="btn-secondary">
                {t('nav.canon')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad max-w-4xl mx-auto bg-cream/40 dark:bg-dark-surface/50" id="objections">
        <SectionTitle title={t('objections.title')} subtitle={t('objections.intro')} />
        <ObjectionAccordion items={objections.slice(0, 8)} />
        <p className="text-center mt-6">
          <Link to="/word#objections-full" className="text-wine dark:text-gold hover:underline">
            {t('nav.word')} →
          </Link>
        </p>
      </section>
    </>
  )
}
