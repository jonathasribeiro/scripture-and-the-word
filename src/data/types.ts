/** Shared bilingual and editorial types for scripture-and-the-word */

export interface LexiconLink {
  id?: string
  label: string
  url: string
  provider?: string
  notePt?: string
  noteEn?: string
}

export interface HistoricalImage {
  id: string
  titlePt: string
  titleEn: string
  descriptionPt: string
  descriptionEn: string
  period?: string
  institution?: string
  sourceUrl: string
  imageUrl: string
  license?: string
  credit: string
  altPt: string
  altEn: string
  tags: string[]
}

export interface GreekTerm {
  id: string
  greek: string
  transliteration: string
  definitionPt: string
  definitionEn: string
  semanticFieldPt: string
  semanticFieldEn: string
  ntExamples: string[]
  commonMistakesPt: string
  commonMistakesEn: string
  lexiconLinks: LexiconLink[]
}

export interface HebrewTerm {
  id: string
  hebrew: string
  transliteration: string
  definitionPt: string
  definitionEn: string
  semanticFieldPt: string
  semanticFieldEn: string
  notesPt?: string
  notesEn?: string
  otExamples?: string[]
  commonMistakesPt?: string
  commonMistakesEn?: string
  rtl?: boolean
  dir?: 'rtl'
  lang?: 'he'
  lexiconLinks?: LexiconLink[]
}

export interface ScripturePassage {
  id: string
  reference: string
  section?: 'logos' | 'rhema' | 'graphe' | 'johnExegesis'
  summaryPt: string
  summaryEn: string
  contextPt: string
  contextEn: string
  greekTerms?: string[]
  thesisRelationPt: string
  thesisRelationEn: string
  snippetPt?: string
  snippetEn?: string
}

export interface CanonTradition {
  id: string
  namePt: string
  nameEn: string
  summaryPt: string
  summaryEn: string
  bookCount?: number
  notesPt?: string
  notesEn?: string
}

export interface CanonBook {
  id: string
  namePt: string
  nameEn: string
  testament: 'ot' | 'nt'
  categories?: string[]
  traditions: string[]
}

export interface DeuterocanonBook {
  id: string
  namePt: string
  nameEn: string
  greekName?: string
  period: string
  language: string
  contentPt: string
  contentEn: string
  traditionsAccept: string[]
  traditionsReject: string[]
  lxxStatusPt?: string
  lxxStatusEn?: string
  sources?: string[]
  textUrl?: string
}

export interface Manuscript {
  id: string
  namePt: string
  nameEn: string
  siglum?: string
  dateApprox: string
  sortYear?: number
  language: string
  contentPt: string
  contentEn: string
  locationPt: string
  locationEn: string
  importancePt: string
  importanceEn: string
  imageId?: string
  institutionalUrl?: string
  notesPt?: string
  notesEn?: string
  tags?: string[]
}

export interface AuthorSource {
  label: string
  url: string
}

export interface AuthorEntry {
  id: string
  namePt: string
  nameEn: string
  period?: string
  tradition?: string
  summaryPt: string
  summaryEn: string
  logosPositionPt?: string
  logosPositionEn?: string
  scripturePositionPt?: string
  scripturePositionEn?: string
  canonViewPt?: string
  canonViewEn?: string
  works?: string[]
  sources?: AuthorSource[]
}

export interface Objection {
  id: string
  questionPt?: string
  questionEn?: string
  objectionPt?: string
  objectionEn?: string
  answerPt: string
  answerEn: string
}

export interface Resource {
  id: string
  title: string
  author: string
  year?: number | string
  publisher?: string
  language: string
  category: string
  level: 'intro' | 'intermediate' | 'advanced'
  summaryPt: string
  summaryEn: string
  theologicalPosition?: string
  primaryOrSecondary: 'primary' | 'secondary'
  freeOrPaid: 'free' | 'paid' | 'mixed'
  isbn?: string
  doi?: string
  url?: string | null
  altUrl?: string
  searchQuery?: string
  tags?: string[]
}

export interface OnlineSource {
  id: string
  name?: string
  namePt?: string
  nameEn?: string
  url: string
  descriptionPt: string
  descriptionEn: string
  category?: string
}

export interface TraditionPosition {
  id: string
  namePt: string
  nameEn: string
  definitionPt: string
  definitionEn: string
  representatives?: string[]
  virtuesPt: string
  virtuesEn: string
  critiquesPt: string
  critiquesEn: string
  thesisRelationPt: string
  thesisRelationEn: string
}

export interface ApostolicWork {
  id: string
  namePt: string
  nameEn: string
  dateApprox: string
  contextPt: string
  contextEn: string
  scriptureUsePt: string
  scriptureUseEn: string
  christAsWordPt?: string
  christAsWordEn?: string
  authorityPt?: string
  authorityEn?: string
  sources?: AuthorSource[]
}

export interface ReformerEntry extends AuthorEntry {
  wordOfGodPt?: string
  wordOfGodEn?: string
  apocryphaPt?: string
  apocryphaEn?: string
}
