import { useMemo } from 'react'
import type { AuthorEntry, AuthorSource } from '@/data/types'

export function toAuthorSources(sources?: string[] | AuthorSource[]): AuthorSource[] | undefined {
  if (!sources?.length) return undefined
  if (typeof sources[0] === 'string') {
    return (sources as string[]).map((url) => ({
      label: labelFromUrl(url),
      url,
    }))
  }
  return sources as AuthorSource[]
}

function labelFromUrl(url: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '')
    if (host.includes('newadvent')) return 'New Advent'
    if (host.includes('ccel.org')) return 'CCEL'
    if (host.includes('earlychristianwritings')) return 'Early Christian Writings'
    if (host.includes('archive.org')) return 'Internet Archive'
    if (host.includes('scholar.google')) return 'Google Scholar'
    if (host.includes('vatican.va')) return 'Vatican'
    if (host.includes('wikisource')) return 'Wikisource'
    if (host.includes('wikipedia') || host.includes('wikimedia')) return 'Wikimedia'
    if (host.includes('britannica')) return 'Britannica'
    if (host.includes('christianitytoday')) return 'Christianity Today'
    if (host.includes('thegospelcoalition')) return 'TGC'
    if (host.includes('ligonier')) return 'Ligonier'
    if (host.includes('oca.org')) return 'OCA'
    return host.split('.')[0] ? host.split('.')[0].charAt(0).toUpperCase() + host.split('.')[0].slice(1) : 'Source'
  } catch {
    return 'Source'
  }
}

export function mapChurchFatherToAuthor(f: {
  id: string
  namePt: string
  nameEn: string
  period: string
  tradition: string
  works: string[]
  scripturePositionPt: string
  scripturePositionEn: string
  logosPositionPt: string
  logosPositionEn: string
  canonViewPt: string
  canonViewEn: string
  sources: string[]
}): AuthorEntry {
  return {
    id: f.id,
    namePt: f.namePt,
    nameEn: f.nameEn,
    period: f.period,
    tradition: f.tradition,
    summaryPt: f.works.join(' · '),
    summaryEn: f.works.join(' · '),
    scripturePositionPt: f.scripturePositionPt,
    scripturePositionEn: f.scripturePositionEn,
    logosPositionPt: f.logosPositionPt,
    logosPositionEn: f.logosPositionEn,
    canonViewPt: f.canonViewPt,
    canonViewEn: f.canonViewEn,
    works: f.works,
    sources: toAuthorSources(f.sources),
  }
}

export function mapReformerToAuthor(r: {
  id: string
  namePt: string
  nameEn: string
  dates: string
  tradition: string
  wordOfGodPt: string
  wordOfGodEn: string
  scripturePt: string
  scriptureEn: string
  sources: string[]
}): AuthorEntry {
  return {
    id: r.id,
    namePt: r.namePt,
    nameEn: r.nameEn,
    period: r.dates,
    tradition: r.tradition,
    summaryPt: r.wordOfGodPt,
    summaryEn: r.wordOfGodEn,
    scripturePositionPt: r.scripturePt,
    scripturePositionEn: r.scriptureEn,
    logosPositionPt: r.wordOfGodPt,
    logosPositionEn: r.wordOfGodEn,
    sources: toAuthorSources(r.sources),
  }
}

export function mapModernToAuthor(m: {
  id: string
  namePt: string
  nameEn: string
  dates: string
  tradition: string
  scriptureWordPositionPt: string
  scriptureWordPositionEn: string
  notesPt: string
  notesEn: string
  sources: string[]
}): AuthorEntry {
  return {
    id: m.id,
    namePt: m.namePt,
    nameEn: m.nameEn,
    period: m.dates,
    tradition: m.tradition,
    summaryPt: m.notesPt,
    summaryEn: m.notesEn,
    scripturePositionPt: m.scriptureWordPositionPt,
    scripturePositionEn: m.scriptureWordPositionEn,
    logosPositionPt: m.scriptureWordPositionPt,
    logosPositionEn: m.scriptureWordPositionEn,
    sources: toAuthorSources(m.sources),
  }
}

export function mapApostolicToAuthor(a: {
  id: string
  namePt: string
  nameEn: string
  dateApprox: string
  contextPt: string
  contextEn: string
  christAsWordPt: string
  christAsWordEn: string
  scriptureUsePt: string
  scriptureUseEn: string
  primarySources: AuthorSource[]
}): AuthorEntry {
  return {
    id: a.id,
    namePt: a.namePt,
    nameEn: a.nameEn,
    period: a.dateApprox,
    summaryPt: a.contextPt,
    summaryEn: a.contextEn,
    logosPositionPt: a.christAsWordPt,
    logosPositionEn: a.christAsWordEn,
    scripturePositionPt: a.scriptureUsePt,
    scripturePositionEn: a.scriptureUseEn,
    sources: a.primarySources,
  }
}

export function useMappedAuthors<T, R>(items: T[], mapFn: (item: T) => R): R[] {
  return useMemo(() => items.map(mapFn), [items, mapFn])
}
