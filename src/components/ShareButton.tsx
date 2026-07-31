import { useState } from 'react'
import { Share2, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { shareSection, sectionUrl, copyText } from '@/utils/share'

interface ShareButtonProps {
  title: string
  text?: string
  hash?: string
  compact?: boolean
}

export function ShareButton({ title, text, hash, compact }: ShareButtonProps) {
  const { t } = useTranslation()
  const [status, setStatus] = useState<'idle' | 'ok'>('idle')

  const onShare = async () => {
    const url = hash ? sectionUrl(hash) : window.location.href
    const result = await shareSection({ title, text: text ?? title, url })
    if (result !== 'failed') {
      setStatus('ok')
      window.setTimeout(() => setStatus('idle'), 2000)
    }
  }

  const onCopyLink = async () => {
    const url = hash ? sectionUrl(hash) : window.location.href
    if (await copyText(url)) {
      setStatus('ok')
      window.setTimeout(() => setStatus('idle'), 2000)
    }
  }

  return (
    <div className="inline-flex gap-1">
      <button
        type="button"
        onClick={() => void onShare()}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-beige dark:border-graphite rounded-sm hover:bg-gold/15 transition-colors"
        aria-label={t('common.share')}
      >
        {status === 'ok' ? <Check className="w-4 h-4 text-manuscript" /> : <Share2 className="w-4 h-4" />}
        {!compact && <span>{status === 'ok' ? t('common.copied') : t('common.share')}</span>}
      </button>
      {!compact && (
        <button
          type="button"
          onClick={() => void onCopyLink()}
          className="px-2 py-1.5 text-xs text-graphite/70 dark:text-cream/60 hover:text-wine"
        >
          #
        </button>
      )}
    </div>
  )
}
