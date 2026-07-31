import type { ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'

interface SourceButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

const variants = {
  primary: `inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm
    border border-gold/40 bg-gold/10 text-ink dark:text-cream
    hover:bg-wine hover:border-wine hover:text-cream
    dark:hover:bg-gold/25 dark:hover:border-gold
    transition-colors focus-visible:outline focus-visible:outline-2
    focus-visible:outline-offset-2 focus-visible:outline-gold`,
  secondary: `inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm
    border border-beige dark:border-graphite bg-cream/50 dark:bg-dark-surface
    text-graphite dark:text-cream/80
    hover:border-gold hover:bg-gold/15
    transition-colors focus-visible:outline focus-visible:outline-2
    focus-visible:outline-offset-2 focus-visible:outline-gold`,
} as const

export function SourceButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: SourceButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variants[variant]} ${className}`.trim()}
    >
      {children}
      <ExternalLink className="w-3 h-3 opacity-70 shrink-0" aria-hidden />
    </a>
  )
}
