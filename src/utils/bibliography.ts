export interface BibEntry {
  id: string
  title: string
  author: string
  year?: number | string
  publisher?: string
  url?: string | null
}

export function toBibTeX(entry: BibEntry): string {
  const key = entry.id.replace(/[^a-zA-Z0-9]/g, '')
  const year = entry.year ?? 'n.d.'
  return `@book{${key},
  title = {${entry.title}},
  author = {${entry.author}},
  year = {${year}},
  publisher = {${entry.publisher ?? ''}},
  url = {${entry.url ?? ''}}
}`
}

export function toRIS(entry: BibEntry): string {
  return [
    'TY  - BOOK',
    `TI  - ${entry.title}`,
    `AU  - ${entry.author}`,
    entry.year ? `PY  - ${entry.year}` : '',
    entry.publisher ? `PB  - ${entry.publisher}` : '',
    entry.url ? `UR  - ${entry.url}` : '',
    'ER  - ',
  ]
    .filter(Boolean)
    .join('\n')
}

export function downloadText(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function scholarSearchUrl(query: string): string {
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`
}

export function worldcatSearchUrl(query: string): string {
  return `https://www.worldcat.org/search?q=${encodeURIComponent(query)}`
}

export function archiveSearchUrl(query: string): string {
  return `https://archive.org/search?query=${encodeURIComponent(query)}`
}
