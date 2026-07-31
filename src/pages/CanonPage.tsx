import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '@/components/SectionTitle'
import { CanonMatrix, CanonComparison } from '@/components/CanonMatrix'
import { TorahComposition, CanonTreeSvg } from '@/components/Diagrams'
import { SourceButton } from '@/components/SourceButton'
import { canonTraditions, canonBooks } from '@/data/canons'
import { deuterocanonBooks } from '@/data/deuterocanon'
import { useApp } from '@/context/AppContext'
import { applySeo } from '@/utils/seo'

export function CanonPage() {
  const { t } = useTranslation()
  const { language, isPt } = useApp()

  useEffect(() => {
    applySeo({
      title: language === 'pt-BR' ? 'Cânones Bíblicos | Comparação' : 'Biblical Canons | Comparison',
      description: t('canon.intro'),
      lang: language,
      path: '/canon',
    })
  }, [language, t])

  return (
    <div className="section-pad max-w-7xl mx-auto">
      <SectionTitle title={t('canon.title')} subtitle={t('canon.intro')} />
      <p className="text-sm italic mb-8 text-center text-graphite/70 dark:text-cream/60">
        {t('canon.disclaimer')}
      </p>

      <section className="mb-14" id="torah">
        <SectionTitle title={t('torah.title')} subtitle={t('torah.intro')} />
        <TorahComposition />
        <p className="text-sm mt-4 text-center">{t('torah.countingNote')}</p>
      </section>

      <section className="mb-14" id="lxx">
        <SectionTitle title={t('lxx.title')} subtitle={t('lxx.intro')} />
        <div className="manuscript-card p-4 mb-4 overflow-x-auto">
          <CanonTreeSvg />
        </div>
        <p className="text-sm">{t('lxx.tableNote')}</p>
      </section>

      <section className="mb-14" id="comparison">
        <h3 className="font-display text-2xl mb-4 text-center">{t('canon.filterLabels')}</h3>
        <CanonComparison traditions={canonTraditions} />
      </section>

      <section className="mb-14" id="matrix">
        <CanonMatrix traditions={canonTraditions} books={canonBooks} />
      </section>

      <section className="mb-14 grid md:grid-cols-3 gap-4" id="traditions-detail">
        <article className="manuscript-card p-5">
          <h3 className="font-display text-xl text-wine dark:text-gold mb-2">{t('catholic.title')}</h3>
          {t('catholic.body')
            .split('\n\n')
            .map((p) => (
              <p key={p.slice(0, 24)} className="prose-academic text-sm mb-3">
                {p}
              </p>
            ))}
        </article>
        <article className="manuscript-card p-5">
          <h3 className="font-display text-xl text-wine dark:text-gold mb-2">{t('protestant.title')}</h3>
          {t('protestant.body')
            .split('\n\n')
            .map((p) => (
              <p key={p.slice(0, 24)} className="prose-academic text-sm mb-3">
                {p}
              </p>
            ))}
        </article>
        <article className="manuscript-card p-5">
          <h3 className="font-display text-xl text-wine dark:text-gold mb-2">{t('orthodox.title')}</h3>
          {t('orthodox.body')
            .split('\n\n')
            .map((p) => (
              <p key={p.slice(0, 24)} className="prose-academic text-sm mb-3">
                {p}
              </p>
            ))}
        </article>
      </section>

      <section className="mb-14" id="deuterocanon">
        <SectionTitle title={t('deuterocanon.title')} subtitle={t('deuterocanon.intro')} />
        <div className="grid md:grid-cols-2 gap-4">
          {deuterocanonBooks.map((book) => (
            <article key={book.id} className="manuscript-card p-5">
              <h3 className="font-display text-xl text-wine dark:text-gold">
                {isPt ? book.namePt : book.nameEn}
              </h3>
              {book.greekName && <p className="greek text-sm mb-2">{book.greekName}</p>}
              <p className="text-xs text-graphite/60 mb-2">
                {book.period} · {book.language}
              </p>
              <p className="prose-academic text-sm mb-2">
                {isPt ? book.contentPt : book.contentEn}
              </p>
              <p className="text-xs">
                <span className="font-medium">{isPt ? 'Aceitam: ' : 'Accept: '}</span>
                {book.traditionsAccept.join(', ')}
              </p>
              <p className="text-xs mb-3">
                <span className="font-medium">{isPt ? 'Rejeitam / distinto: ' : 'Reject / distinct: '}</span>
                {book.traditionsReject.join(', ')}
              </p>
              {book.textUrl && (
                <SourceButton href={book.textUrl}>
                  {isPt ? 'Texto' : 'Text'}
                </SourceButton>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="nt-alone">
        <SectionTitle title={t('ntAlone.title')} subtitle={t('ntAlone.intro')} />
        <article className="manuscript-card p-6 max-w-3xl mx-auto">
          <h3 className="font-display text-2xl mb-3">{t('ntAlone.blueBibleQuestion')}</h3>
          <p className="prose-academic drop-cap">{t('ntAlone.blueBibleBody')}</p>
        </article>
      </section>
    </div>
  )
}
