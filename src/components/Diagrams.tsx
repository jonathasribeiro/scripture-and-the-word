import { useTranslation } from 'react-i18next'
import { useApp } from '@/context/AppContext'

const STEPS = [
  { key: 'god', pt: 'Deus', en: 'God' },
  { key: 'revelation', pt: 'Revelação', en: 'Revelation' },
  { key: 'christ', pt: 'Cristo, o Logos', en: 'Christ, the Logos' },
  { key: 'apostolic', pt: 'Testemunho apostólico', en: 'Apostolic witness' },
  { key: 'scripture', pt: 'Escrituras inspiradas', en: 'Inspired Scriptures' },
  { key: 'proclamation', pt: 'Proclamação e ensino', en: 'Proclamation and teaching' },
] as const

export function LogosDiagram() {
  const { i18n } = useTranslation()
  const isPt = i18n.language === 'pt-BR'

  return (
    <div className="manuscript-card p-6 md:p-8 max-w-md mx-auto">
      <svg viewBox="0 0 280 420" className="w-full" role="img" aria-label="Revelation diagram">
        {STEPS.map((step, i) => {
          const y = 30 + i * 64
          return (
            <g key={step.key}>
              {i > 0 && (
                <line
                  x1="140"
                  y1={y - 34}
                  x2="140"
                  y2={y - 14}
                  stroke="#A98143"
                  strokeWidth="2"
                  markerEnd="url(#arrow)"
                />
              )}
              <rect
                x="40"
                y={y - 12}
                width="200"
                height="36"
                rx="2"
                fill={i === 2 ? '#6B2D31' : '#FAF7F0'}
                stroke="#A98143"
                strokeWidth="1.5"
              />
              <text
                x="140"
                y={y + 10}
                textAnchor="middle"
                fill={i === 2 ? '#FAF7F0' : '#241C17'}
                fontFamily="Cormorant Garamond, serif"
                fontSize="14"
                fontWeight="600"
              >
                {isPt ? step.pt : step.en}
              </text>
            </g>
          )
        })}
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#A98143" />
          </marker>
        </defs>
      </svg>
    </div>
  )
}

export function CanonTreeSvg() {
  const { isPt } = useApp()

  const labels = {
    title: isPt
      ? 'Bíblia hebraica / LXX / transmissão do NT'
      : 'Hebrew Bible / LXX / NT transmission',
    autographs: isPt ? 'Autógrafos (perdidos)' : 'Autographs (lost)',
    mt: isPt ? 'TM / Massorético' : 'MT / Masoretic',
    dss: isPt ? 'Mar Morto / Hebraico' : 'DSS / Hebrew',
    lxx: isPt ? 'LXX grega' : 'LXX Greek',
    papyri: isPt ? 'Papiros do NT' : 'NT papyri',
    aleppo: 'Aleppo / Leningrad',
    uncials: isPt ? 'Unciais / Minúsculas' : 'Uncials / Minuscules',
    note: isPt
      ? 'As categorias diferem; a autoridade da Escritura não se identifica com uma única cópia'
      : 'Categories differ; authority of Scripture is not identical to any single copy',
  }

  const nodes = [
    { x: 80, label: labels.mt },
    { x: 250, label: labels.dss },
    { x: 400, label: labels.lxx },
    { x: 520, label: labels.papyri },
  ]

  return (
    <svg viewBox="0 0 640 320" className="w-full max-w-3xl mx-auto" role="img">
      <title>{labels.title}</title>
      <text x="320" y="28" textAnchor="middle" fontFamily="Cormorant Garamond" fontSize="18" fill="#241C17">
        {labels.title}
      </text>
      <rect x="250" y="50" width="140" height="36" rx="2" fill="#DED1B8" stroke="#A98143" />
      <text x="320" y="72" textAnchor="middle" fontSize="12" fill="#241C17">
        {labels.autographs}
      </text>
      <line x1="320" y1="86" x2="320" y2="110" stroke="#A98143" />
      <line x1="120" y1="110" x2="520" y2="110" stroke="#A98143" />
      {nodes.map((n) => (
        <g key={n.label}>
          <line x1={n.x + 40} y1="110" x2={n.x + 40} y2="140" stroke="#A98143" />
          <rect x={n.x} y="140" width="100" height="40" rx="2" fill="#FAF7F0" stroke="#344E41" />
          <text x={n.x + 50} y="164" textAnchor="middle" fontSize="11" fill="#241C17">
            {n.label}
          </text>
        </g>
      ))}
      <line x1="160" y1="180" x2="160" y2="220" stroke="#A98143" />
      <line x1="560" y1="180" x2="560" y2="220" stroke="#A98143" />
      <rect x="100" y="220" width="120" height="40" rx="2" fill="#F3EBDD" stroke="#6B2D31" />
      <text x="160" y="244" textAnchor="middle" fontSize="11">
        {labels.aleppo}
      </text>
      <rect x="500" y="220" width="120" height="40" rx="2" fill="#F3EBDD" stroke="#6B2D31" />
      <text x="560" y="244" textAnchor="middle" fontSize="11">
        {labels.uncials}
      </text>
      <text x="320" y="300" textAnchor="middle" fontSize="11" fill="#6B2D31" fontStyle="italic">
        {labels.note}
      </text>
    </svg>
  )
}

export function TorahComposition() {
  const { isPt } = useApp()

  const blocks = [
    {
      title: 'Torah',
      itemsPt: ['Gênesis', 'Êxodo', 'Levítico', 'Números', 'Deuteronômio'],
      itemsEn: ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
      color: '#6B2D31',
    },
    {
      title: "Nevi'im",
      itemsPt: ['Profetas anteriores', 'Profetas posteriores'],
      itemsEn: ['Former Prophets', 'Latter Prophets'],
      color: '#344E41',
    },
    {
      title: 'Ketuvim',
      itemsPt: ['Salmos', 'Provérbios', 'Jó', 'Megillot', 'Daniel', 'Esdras–Neemias', 'Crônicas'],
      itemsEn: ['Psalms', 'Proverbs', 'Job', 'Megillot', 'Daniel', 'Ezra–Nehemiah', 'Chronicles'],
      color: '#A98143',
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {blocks.map((b) => {
        const items = isPt ? b.itemsPt : b.itemsEn
        return (
          <div key={b.title} className="manuscript-card p-4 border-t-4" style={{ borderTopColor: b.color }}>
            <h3 className="font-display text-2xl mb-3" style={{ color: b.color }}>
              {b.title}
            </h3>
            <ul className="space-y-1 text-sm">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
