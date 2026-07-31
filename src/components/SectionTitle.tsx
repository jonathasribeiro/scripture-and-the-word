import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface SectionTitleProps {
  title: string
  subtitle?: string
  id?: string
  ornament?: boolean
}

export function SectionTitle({ title, subtitle, id, ornament = true }: SectionTitleProps) {
  return (
    <header id={id} className="mb-10 scroll-mt-28 text-center">
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink dark:text-cream font-semibold tracking-tight">
        {title}
      </h2>
      {ornament && <div className="ornament-line my-4" aria-hidden />}
      {subtitle && (
        <p className="max-w-3xl mx-auto prose-academic text-lg">{subtitle}</p>
      )}
    </header>
  )
}

export function EditorialNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-6 border-l-2 border-gold pl-4 text-sm text-graphite/80 dark:text-cream/70 italic font-quote">
      {children}
    </aside>
  )
}

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  const { t } = useTranslation()
  return (
    <nav aria-label={t('common.filters')} className="mb-6 text-sm text-graphite/70 dark:text-cream/60">
      <ol className="flex flex-wrap gap-2 items-center">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {item.to ? (
              <Link to={item.to} className="hover:text-wine dark:hover:text-gold transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink dark:text-cream">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
