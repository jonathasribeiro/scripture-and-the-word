interface SourceBadgeProps {
  kind: 'primary' | 'secondary'
  label: string
  level?: string
  language?: string
}

export function SourceBadge({ kind, label, level, language }: SourceBadgeProps) {
  return (
    <div className="flex flex-wrap gap-1.5 text-xs">
      <span
        className={`px-2 py-0.5 rounded-sm font-medium ${
          kind === 'primary'
            ? 'bg-manuscript/15 text-manuscript dark:bg-manuscript/30 dark:text-cream'
            : 'bg-gold/20 text-ink dark:text-cream'
        }`}
      >
        {label}
      </span>
      {level && (
        <span className="px-2 py-0.5 rounded-sm bg-beige/60 dark:bg-graphite text-graphite dark:text-cream/80">
          {level}
        </span>
      )}
      {language && (
        <span className="px-2 py-0.5 rounded-sm border border-beige dark:border-graphite">
          {language}
        </span>
      )}
    </div>
  )
}
