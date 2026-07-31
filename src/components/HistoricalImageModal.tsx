import { useState } from 'react'
import { X, ZoomIn, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { HistoricalImage } from '@/data/types'
import { useApp } from '@/context/AppContext'
import { SourceButton } from './SourceButton'

interface HistoricalImageModalProps {
  image: HistoricalImage | null
  onClose: () => void
}

export function HistoricalImageModal({ image, onClose }: HistoricalImageModalProps) {
  const { t } = useTranslation()
  const { isPt, isFavorite, toggleFavorite } = useApp()
  const [zoomed, setZoomed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/80 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={isPt ? image.titlePt : image.titleEn}
      onClick={onClose}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
    >
      <div
        className="bg-cream dark:bg-dark-card max-w-4xl w-full max-h-[90vh] overflow-auto rounded-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-beige dark:border-graphite">
          <h3 className="font-display text-xl">{isPt ? image.titlePt : image.titleEn}</h3>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => toggleFavorite(image.id)}
              className="p-2 hover:bg-gold/15 rounded-sm"
              aria-label={t('common.favorite')}
            >
              <Heart
                className={`w-4 h-4 ${isFavorite(image.id) ? 'fill-wine text-wine' : ''}`}
              />
            </button>
            <button type="button" onClick={onClose} className="p-2 hover:bg-gold/15 rounded-sm" aria-label={t('common.close')}>
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="relative bg-beige/40 dark:bg-ink/40 min-h-[200px]">
          {!loaded && <div className="skeleton absolute inset-0 min-h-[280px]" />}
          <img
            src={image.imageUrl}
            alt={isPt ? image.altPt : image.altEn}
            className={`w-full transition-transform duration-300 ${zoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'} ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            onClick={() => setZoomed((z) => !z)}
          />
          <button
            type="button"
            className="absolute bottom-3 right-3 p-2 bg-cream/90 dark:bg-dark-surface rounded-sm"
            onClick={() => setZoomed((z) => !z)}
            aria-label={t('common.zoom')}
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
        <div className="p-4 space-y-2 text-sm">
          <p>{isPt ? image.descriptionPt : image.descriptionEn}</p>
          {image.period && (
            <p>
              <strong>{isPt ? 'Período' : 'Period'}:</strong> {image.period}
            </p>
          )}
          {image.institution && (
            <p>
              <strong>{isPt ? 'Instituição' : 'Institution'}:</strong> {image.institution}
            </p>
          )}
          <p className="text-graphite/70 dark:text-cream/60">
            {t('common.credits')}: {image.credit}
          </p>
          {image.license && <p className="text-xs">{image.license}</p>}
          <SourceButton href={image.sourceUrl}>
            {isPt ? 'Fonte' : 'Source'}
          </SourceButton>
        </div>
      </div>
    </div>
  )
}
