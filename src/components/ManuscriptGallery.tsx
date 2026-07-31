import { useState } from 'react'
import type { HistoricalImage } from '@/data/types'
import { useApp } from '@/context/AppContext'
import { HistoricalImageModal } from './HistoricalImageModal'
import { useTranslation } from 'react-i18next'

interface ManuscriptGalleryProps {
  images: HistoricalImage[]
}

export function ManuscriptGallery({ images }: ManuscriptGalleryProps) {
  const { isPt } = useApp()
  const { t } = useTranslation()
  const [selected, setSelected] = useState<HistoricalImage | null>(null)
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({})

  return (
    <>
      <p className="text-sm italic text-graphite/70 dark:text-cream/60 mb-6">
        {t('manuscripts.imageDisclaimer')}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((img) => (
          <button
            key={img.id}
            type="button"
            className="manuscript-card text-left overflow-hidden group"
            onClick={() => setSelected(img)}
          >
            <div className="relative aspect-[4/3] bg-beige/50 overflow-hidden">
              {!loadedMap[img.id] && <div className="skeleton absolute inset-0" />}
              <img
                src={img.imageUrl}
                alt={isPt ? img.altPt : img.altEn}
                loading="lazy"
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  loadedMap[img.id] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setLoadedMap((m) => ({ ...m, [img.id]: true }))}
              />
            </div>
            <div className="p-4">
              <h3 className="font-display text-lg text-ink dark:text-cream mb-1">
                {isPt ? img.titlePt : img.titleEn}
              </h3>
              <p className="text-xs text-graphite/60 dark:text-cream/50 line-clamp-2">
                {img.credit}
              </p>
            </div>
          </button>
        ))}
      </div>
      <HistoricalImageModal image={selected} onClose={() => setSelected(null)} />
    </>
  )
}
