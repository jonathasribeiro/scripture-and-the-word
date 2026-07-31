import type { ScripturePassage } from '@/data/types'
import { useApp } from '@/context/AppContext'
import { copyText } from '@/utils/share'
import { Copy } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface ScriptureCardProps {
  passage: ScripturePassage
}

export function ScriptureCard({ passage }: ScriptureCardProps) {
  const { isPt } = useApp()
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const verseSnippet = isPt ? passage.snippetPt : passage.snippetEn

  const onCopy = async () => {
    const parts = [
      passage.reference,
      verseSnippet,
      isPt ? passage.summaryPt : passage.summaryEn,
    ].filter(Boolean)
    if (await copyText(parts.join('\n'))) {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <article className="manuscript-card p-5" id={`scripture-${passage.id}`}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-display text-xl text-wine dark:text-gold font-semibold">
          {passage.reference}
        </h3>
        <button
          type="button"
          onClick={() => void onCopy()}
          className="p-1.5 hover:bg-gold/15 rounded-sm"
          aria-label={t('common.copy')}
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
      {copied && <p className="text-xs text-manuscript mb-2">{t('common.copied')}</p>}
      {verseSnippet && (
        <p className="quote-text text-lg mb-3 text-ink dark:text-cream/90">{verseSnippet}</p>
      )}
      <p className="prose-academic mb-2">{isPt ? passage.summaryPt : passage.summaryEn}</p>
      <p className="text-sm text-graphite/75 dark:text-cream/65 mb-2">
        {isPt ? passage.contextPt : passage.contextEn}
      </p>
      {passage.greekTerms && passage.greekTerms.length > 0 && (
        <p className="greek text-sm mb-2 text-manuscript">{passage.greekTerms.join(' · ')}</p>
      )}
      <p className="text-sm border-t border-beige dark:border-graphite pt-3 mt-2">
        {isPt ? passage.thesisRelationPt : passage.thesisRelationEn}
      </p>
    </article>
  )
}
