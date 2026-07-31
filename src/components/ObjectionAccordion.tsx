import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Objection } from '@/data/types'
import { useApp } from '@/context/AppContext'

interface ObjectionAccordionProps {
  items: Objection[]
}

export function ObjectionAccordion({ items }: ObjectionAccordionProps) {
  const { isPt } = useApp()
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const open = openId === item.id
        return (
          <div key={item.id} className="manuscript-card overflow-hidden">
            <h3>
              <button
                type="button"
                className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-display text-lg hover:bg-gold/10 transition-colors"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>{isPt ? (item.questionPt ?? item.objectionPt) : (item.questionEn ?? item.objectionEn)}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            {open && (
              <div className="px-5 pb-5 prose-academic border-t border-beige dark:border-graphite pt-4">
                {isPt ? item.answerPt : item.answerEn}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
