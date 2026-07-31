import { useState } from 'react'
import { User } from 'lucide-react'
import type { AuthorEntry } from '@/data/types'
import { getAuthorPortrait } from '@/data/portraits'
import { useApp } from '@/context/AppContext'
import { SourceButton } from './SourceButton'

interface AuthorCardProps {
  author: AuthorEntry
}

export function AuthorCard({ author }: AuthorCardProps) {
  const { isPt } = useApp()
  const portrait = getAuthorPortrait(author.id)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  const initials = (isPt ? author.namePt : author.nameEn)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')

  const showImage = Boolean(portrait && !failed)

  return (
    <article className="manuscript-card overflow-hidden h-full flex flex-col" id={`author-${author.id}`}>
      <div className="relative aspect-[4/3] bg-beige/60 dark:bg-ink/50 overflow-hidden">
        {showImage && portrait ? (
          <>
            {!loaded && <div className="skeleton absolute inset-0" aria-hidden />}
            <img
              src={portrait.imageUrl}
              alt={isPt ? portrait.altPt : portrait.altEn}
              loading="lazy"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
            />
          </>
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-beige via-cream to-gold/20 dark:from-dark-card dark:via-ink dark:to-wine/30"
            aria-hidden
          >
            <div className="w-16 h-16 rounded-full border-2 border-gold/50 flex items-center justify-center bg-cream/80 dark:bg-dark-surface/80">
              {initials ? (
                <span className="font-display text-2xl text-wine dark:text-gold">{initials}</span>
              ) : (
                <User className="w-7 h-7 text-gold" />
              )}
            </div>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-gold uppercase tracking-wide mb-1">{author.period}</p>
        <h3 className="font-display text-xl text-wine dark:text-gold mb-1">
          {isPt ? author.namePt : author.nameEn}
        </h3>
        {author.tradition && (
          <p className="text-xs text-graphite/60 dark:text-cream/50 mb-3">{author.tradition}</p>
        )}
        <p className="prose-academic text-sm mb-3 flex-1">
          {isPt ? author.summaryPt : author.summaryEn}
        </p>
        {author.logosPositionPt && (
          <p className="text-sm mb-2">
            <span className="font-medium">Logos: </span>
            {isPt ? author.logosPositionPt : author.logosPositionEn}
          </p>
        )}
        {author.scripturePositionPt && (
          <p className="text-sm mb-3">
            <span className="font-medium">{isPt ? 'Escritura: ' : 'Scripture: '}</span>
            {isPt ? author.scripturePositionPt : author.scripturePositionEn}
          </p>
        )}
        {portrait && !failed && (
          <p className="text-[10px] text-graphite/50 dark:text-cream/40 mb-2">
            {portrait.credit}
            {portrait.license ? ` · ${portrait.license}` : ''}
          </p>
        )}
        {(author.sources?.length || portrait) && (
          <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-beige dark:border-graphite">
            {author.sources?.map((s) => (
              <SourceButton key={s.url} href={s.url}>
                {s.label}
              </SourceButton>
            ))}
            {portrait && (
              <SourceButton href={portrait.sourceUrl} variant="secondary">
                {isPt ? 'Imagem' : 'Image'}
              </SourceButton>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
