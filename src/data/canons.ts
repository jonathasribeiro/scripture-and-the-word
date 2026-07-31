import type { CanonBook, CanonTradition } from './types'

/** Tradition inclusion helpers — ids match CanonTradition.id */
const OT_HEBREW = [
  'tanakh',
  'protestant',
  'catholic',
  'greek-orthodox',
  'slavic-orthodox',
  'ethiopian',
  'peshitta',
  'armenian',
] as const

const NT_CORE = [
  'protestant',
  'catholic',
  'greek-orthodox',
  'slavic-orthodox',
  'ethiopian',
  'peshitta',
  'armenian',
  'nt-alone',
] as const

const DEUTERO_CATHOLIC = [
  'catholic',
  'greek-orthodox',
  'slavic-orthodox',
  'ethiopian',
  'armenian',
] as const

export const canonTraditions: CanonTradition[] = [
  {
    id: 'tanakh',
    namePt: 'Tanakh (cânon hebraico)',
    nameEn: 'Tanakh (Hebrew canon)',
    summaryPt:
      'Estrutura tripartite Torá–Nevi’im–Ketuvim. Contagem tradicional de 24 livros, correspondendo em conteúdo aos 39 do AT protestante, com agrupamentos diferentes.',
    summaryEn:
      'Tripartite Torah–Nevi’im–Ketuvim structure. Traditional count of 24 books, corresponding in content to the Protestant 39 OT books, with different groupings.',
    bookCount: 24,
    notesPt:
      'O reconhecimento comunitário judaico das fronteiras canônicas consolidou-se ao longo do tempo; debates antigos sobre certos Ketuvim são documentados na literatura rabínica.',
    notesEn:
      'Jewish communal recognition of canonical boundaries consolidated over time; ancient debates about certain Ketuvim are documented in rabbinic literature.',
  },
  {
    id: 'protestant',
    namePt: 'Bíblia protestante',
    nameEn: 'Protestant Bible',
    summaryPt:
      '39 livros do AT alinhados ao conteúdo do Tanakh + 27 do NT. Os deuterocanônicos/apócrifos foram frequentemente impressos em apêndice (Lutero, KJV antiga), mas não como cânon normativo nas confissões reformadas e evangélicas posteriores.',
    summaryEn:
      '39 OT books aligned with Tanakh content + 27 NT books. Deuterocanonical/Apocryphal books were often printed in an appendix (Luther, early KJV) but not as normative canon in later Reformed and evangelical confessions.',
    bookCount: 66,
  },
  {
    id: 'catholic',
    namePt: 'Bíblia católica',
    nameEn: 'Catholic Bible',
    summaryPt:
      'AT com deuterocanônicos (Tobias, Judite, Sabedoria, Eclesiástico, Baruque, 1–2 Macabeus, acréscimos a Ester e Daniel) + 27 NT. Definido dogmaticamente no Concílio de Trento (1546) em continuidade com usos latinos medievais.',
    summaryEn:
      'OT with deuterocanonicals (Tobit, Judith, Wisdom, Sirach, Baruch, 1–2 Maccabees, additions to Esther and Daniel) + 27 NT. Dogmatically defined at the Council of Trent (1546) in continuity with medieval Latin usage.',
    bookCount: 73,
  },
  {
    id: 'greek-orthodox',
    namePt: 'Bíblia ortodoxa grega',
    nameEn: 'Greek Orthodox Bible',
    summaryPt:
      'AT baseado na tradição da Septuaginta, incluindo anagignoskomena (“dignos de leitura”) além do núcleo hebraico: tipicamente 1 Esdras, 3 Macabeus, Salmo 151, Oração de Manassés, etc., com variações editoriais.',
    summaryEn:
      'OT based on the Septuagint tradition, including anagignoskomena (“readable” books) beyond the Hebrew core: typically 1 Esdras, 3 Maccabees, Psalm 151, Prayer of Manasseh, etc., with editorial variation.',
    bookCount: 76,
    notesPt:
      'A prática ortodoxa distingue níveis de uso litúrgico e autoridade; listas impressas podem variar ligeiramente entre edições.',
    notesEn:
      'Orthodox practice distinguishes levels of liturgical use and authority; printed lists may vary slightly among editions.',
  },
  {
    id: 'slavic-orthodox',
    namePt: 'Bíblia ortodoxa eslava',
    nameEn: 'Slavic Orthodox Bible',
    summaryPt:
      'Tradição eslava eclesiástica alinhada em grande parte ao cânon ortodoxo oriental, com influência da Septuaginta e da tradição bizantina; inclui livros lidos na Igreja além do cânon hebraico.',
    summaryEn:
      'Church Slavonic tradition largely aligned with the Eastern Orthodox canon, influenced by the Septuagint and Byzantine tradition; includes books read in the Church beyond the Hebrew core.',
    bookCount: 77,
  },
  {
    id: 'ethiopian',
    namePt: 'Bíblia etíope (Tewahedo)',
    nameEn: 'Ethiopian (Tewahedo) Bible',
    summaryPt:
      'O cânon mais amplo entre as igrejas antigas: inclui, além de livros compartilhados, obras como 1 Enoque, Jubileus e tradição ampliada de Esdras/Macabeus etíopes, com variação entre cânones “estreito” e “amplo”.',
    summaryEn:
      'The broadest canon among the ancient churches: besides shared books it includes works such as 1 Enoch, Jubilees, and an expanded Ethiopic Ezra/Maccabees tradition, with “narrow” and “broader” canon variations.',
    bookCount: 81,
    notesPt: 'Contagens variam conforme se inclui o cânon amplo. Nem todos os livros têm o mesmo uso litúrgico.',
    notesEn: 'Counts vary depending on whether the broader canon is included. Not all books have the same liturgical use.',
  },
  {
    id: 'peshitta',
    namePt: 'Peshitta (tradição siríaca)',
    nameEn: 'Peshitta (Syriac tradition)',
    summaryPt:
      'Bíblia padrão das igrejas siríacas. O AT da Peshitta está próximo do texto hebraico; o NT clássico da Peshitta omitia historicamente 2 Pedro, 2–3 João, Judas e Apocalipse em algumas tradições, depois suplementados.',
    summaryEn:
      'Standard Bible of the Syriac churches. The Peshitta OT is close to the Hebrew text; the classical Peshitta NT historically omitted 2 Peter, 2–3 John, Jude, and Revelation in some traditions, later supplemented.',
    bookCount: 66,
  },
  {
    id: 'armenian',
    namePt: 'Cânon armênio',
    nameEn: 'Armenian canon',
    summaryPt:
      'Tradição da Igreja Apostólica Armênia, com AT influenciado por tradições grega e siríaca e NT de 27 livros; listas históricas incluem ocasionalmente livros adicionais em apêndices.',
    summaryEn:
      'Armenian Apostolic Church tradition, with an OT influenced by Greek and Syriac traditions and a 27-book NT; historical lists occasionally include additional books in appendices.',
    bookCount: 72,
  },
  {
    id: 'nt-alone',
    namePt: 'Novo Testamento isolado',
    nameEn: 'New Testament alone',
    summaryPt:
      'Configuração editorial e missiológica comum: o NT publicado e distribuído sem o AT. Não constitui um cânon eclesial histórico separado, mas uma prática de circulação textual.',
    summaryEn:
      'A common editorial and missiological configuration: the NT published and distributed without the OT. It is not a separate historical church canon, but a practice of textual circulation.',
    bookCount: 27,
    notesPt:
      'Útil para comparar como a forma material (volume só do NT) molda a percepção pública do que “é a Bíblia”.',
    notesEn:
      'Useful for comparing how material form (NT-only volume) shapes public perception of what “the Bible” is.',
  },
]

function otBook(
  id: string,
  namePt: string,
  nameEn: string,
  categories: string[] = ['protocanonical', 'ot'],
): CanonBook {
  return {
    id,
    namePt,
    nameEn,
    testament: 'ot',
    categories,
    traditions: [...OT_HEBREW],
  }
}

function ntBook(
  id: string,
  namePt: string,
  nameEn: string,
  traditions: string[] = [...NT_CORE],
): CanonBook {
  return {
    id,
    namePt,
    nameEn,
    testament: 'nt',
    categories: ['nt'],
    traditions,
  }
}

export const canonBooks: CanonBook[] = [
  // Torah
  otBook('genesis', 'Gênesis', 'Genesis'),
  otBook('exodus', 'Êxodo', 'Exodus'),
  otBook('leviticus', 'Levítico', 'Leviticus'),
  otBook('numbers', 'Números', 'Numbers'),
  otBook('deuteronomy', 'Deuteronômio', 'Deuteronomy'),

  // Historical / Former Prophets
  otBook('joshua', 'Josué', 'Joshua'),
  otBook('judges', 'Juízes', 'Judges'),
  otBook('ruth', 'Rute', 'Ruth'),
  otBook('1-samuel', '1 Samuel', '1 Samuel'),
  otBook('2-samuel', '2 Samuel', '2 Samuel'),
  otBook('1-kings', '1 Reis', '1 Kings'),
  otBook('2-kings', '2 Reis', '2 Kings'),
  otBook('1-chronicles', '1 Crônicas', '1 Chronicles'),
  otBook('2-chronicles', '2 Crônicas', '2 Chronicles'),
  otBook('ezra', 'Esdras', 'Ezra'),
  otBook('nehemiah', 'Neemias', 'Nehemiah'),
  otBook('esther', 'Ester', 'Esther'),

  // Wisdom / Poetry
  otBook('job', 'Jó', 'Job'),
  otBook('psalms', 'Salmos', 'Psalms'),
  otBook('proverbs', 'Provérbios', 'Proverbs'),
  otBook('ecclesiastes', 'Eclesiastes', 'Ecclesiastes'),
  otBook('song-of-songs', 'Cântico dos Cânticos', 'Song of Songs'),

  // Prophets
  otBook('isaiah', 'Isaías', 'Isaiah'),
  otBook('jeremiah', 'Jeremias', 'Jeremiah'),
  otBook('lamentations', 'Lamentações', 'Lamentations'),
  otBook('ezekiel', 'Ezequiel', 'Ezekiel'),
  otBook('daniel', 'Daniel', 'Daniel'),
  otBook('hosea', 'Oseias', 'Hosea'),
  otBook('joel', 'Joel', 'Joel'),
  otBook('amos', 'Amós', 'Amos'),
  otBook('obadiah', 'Obadias', 'Obadiah'),
  otBook('jonah', 'Jonas', 'Jonah'),
  otBook('micah', 'Miqueias', 'Micah'),
  otBook('nahum', 'Naum', 'Nahum'),
  otBook('habakkuk', 'Habacuque', 'Habakkuk'),
  otBook('zephaniah', 'Sofonias', 'Zephaniah'),
  otBook('haggai', 'Ageu', 'Haggai'),
  otBook('zechariah', 'Zacarias', 'Zechariah'),
  otBook('malachi', 'Malaquias', 'Malachi'),

  // Deuterocanonicals / Anagignoskomena
  {
    id: 'tobit',
    namePt: 'Tobias',
    nameEn: 'Tobit',
    testament: 'ot',
    categories: ['deuterocanonical', 'ot', 'apocrypha'],
    traditions: [...DEUTERO_CATHOLIC, 'peshitta'],
  },
  {
    id: 'judith',
    namePt: 'Judite',
    nameEn: 'Judith',
    testament: 'ot',
    categories: ['deuterocanonical', 'ot', 'apocrypha'],
    traditions: [...DEUTERO_CATHOLIC],
  },
  {
    id: 'wisdom',
    namePt: 'Sabedoria',
    nameEn: 'Wisdom of Solomon',
    testament: 'ot',
    categories: ['deuterocanonical', 'ot', 'apocrypha'],
    traditions: [...DEUTERO_CATHOLIC],
  },
  {
    id: 'sirach',
    namePt: 'Eclesiástico (Sirácida)',
    nameEn: 'Sirach (Ecclesiasticus)',
    testament: 'ot',
    categories: ['deuterocanonical', 'ot', 'apocrypha'],
    traditions: [...DEUTERO_CATHOLIC, 'peshitta'],
  },
  {
    id: 'baruch',
    namePt: 'Baruque',
    nameEn: 'Baruch',
    testament: 'ot',
    categories: ['deuterocanonical', 'ot', 'apocrypha'],
    traditions: [...DEUTERO_CATHOLIC],
  },
  {
    id: 'letter-of-jeremiah',
    namePt: 'Carta de Jeremias',
    nameEn: 'Letter of Jeremiah',
    testament: 'ot',
    categories: ['deuterocanonical', 'ot', 'apocrypha'],
    traditions: [...DEUTERO_CATHOLIC],
  },
  {
    id: '1-maccabees',
    namePt: '1 Macabeus',
    nameEn: '1 Maccabees',
    testament: 'ot',
    categories: ['deuterocanonical', 'ot', 'apocrypha'],
    traditions: [...DEUTERO_CATHOLIC],
  },
  {
    id: '2-maccabees',
    namePt: '2 Macabeus',
    nameEn: '2 Maccabees',
    testament: 'ot',
    categories: ['deuterocanonical', 'ot', 'apocrypha'],
    traditions: [...DEUTERO_CATHOLIC],
  },
  {
    id: 'additions-esther',
    namePt: 'Acréscimos a Ester',
    nameEn: 'Additions to Esther',
    testament: 'ot',
    categories: ['deuterocanonical', 'ot', 'apocrypha'],
    traditions: [...DEUTERO_CATHOLIC],
  },
  {
    id: 'additions-daniel',
    namePt: 'Acréscimos a Daniel',
    nameEn: 'Additions to Daniel',
    testament: 'ot',
    categories: ['deuterocanonical', 'ot', 'apocrypha'],
    traditions: [...DEUTERO_CATHOLIC],
  },
  {
    id: '1-esdras',
    namePt: '1 Esdras (LXX)',
    nameEn: '1 Esdras (LXX)',
    testament: 'ot',
    categories: ['anagignoskomena', 'ot', 'apocrypha'],
    traditions: ['greek-orthodox', 'slavic-orthodox', 'ethiopian', 'armenian'],
  },
  {
    id: '3-maccabees',
    namePt: '3 Macabeus',
    nameEn: '3 Maccabees',
    testament: 'ot',
    categories: ['anagignoskomena', 'ot', 'apocrypha'],
    traditions: ['greek-orthodox', 'slavic-orthodox', 'ethiopian', 'armenian'],
  },
  {
    id: '4-maccabees',
    namePt: '4 Macabeus',
    nameEn: '4 Maccabees',
    testament: 'ot',
    categories: ['anagignoskomena', 'ot', 'apocrypha'],
    traditions: ['greek-orthodox', 'slavic-orthodox', 'armenian'],
  },
  {
    id: 'psalm-151',
    namePt: 'Salmo 151',
    nameEn: 'Psalm 151',
    testament: 'ot',
    categories: ['anagignoskomena', 'ot'],
    traditions: ['greek-orthodox', 'slavic-orthodox', 'ethiopian', 'armenian', 'peshitta'],
  },
  {
    id: 'prayer-of-manasseh',
    namePt: 'Oração de Manassés',
    nameEn: 'Prayer of Manasseh',
    testament: 'ot',
    categories: ['anagignoskomena', 'ot', 'apocrypha'],
    traditions: ['greek-orthodox', 'slavic-orthodox', 'ethiopian', 'armenian', 'peshitta'],
  },
  {
    id: '1-enoch',
    namePt: '1 Enoque',
    nameEn: '1 Enoch',
    testament: 'ot',
    categories: ['pseudepigrapha', 'ot'],
    traditions: ['ethiopian'],
  },
  {
    id: 'jubilees',
    namePt: 'Jubileus',
    nameEn: 'Jubilees',
    testament: 'ot',
    categories: ['pseudepigrapha', 'ot'],
    traditions: ['ethiopian'],
  },

  // New Testament
  ntBook('matthew', 'Mateus', 'Matthew'),
  ntBook('mark', 'Marcos', 'Mark'),
  ntBook('luke', 'Lucas', 'Luke'),
  ntBook('john', 'João', 'John'),
  ntBook('acts', 'Atos', 'Acts'),
  ntBook('romans', 'Romanos', 'Romans'),
  ntBook('1-corinthians', '1 Coríntios', '1 Corinthians'),
  ntBook('2-corinthians', '2 Coríntios', '2 Corinthians'),
  ntBook('galatians', 'Gálatas', 'Galatians'),
  ntBook('ephesians', 'Efésios', 'Ephesians'),
  ntBook('philippians', 'Filipenses', 'Philippians'),
  ntBook('colossians', 'Colossenses', 'Colossians'),
  ntBook('1-thessalonians', '1 Tessalonicenses', '1 Thessalonians'),
  ntBook('2-thessalonians', '2 Tessalonicenses', '2 Thessalonians'),
  ntBook('1-timothy', '1 Timóteo', '1 Timothy'),
  ntBook('2-timothy', '2 Timóteo', '2 Timothy'),
  ntBook('titus', 'Tito', 'Titus'),
  ntBook('philemon', 'Filemom', 'Philemon'),
  ntBook('hebrews', 'Hebreus', 'Hebrews'),
  ntBook('james', 'Tiago', 'James'),
  ntBook('1-peter', '1 Pedro', '1 Peter'),
  ntBook('2-peter', '2 Pedro', '2 Peter', [
    'protestant',
    'catholic',
    'greek-orthodox',
    'slavic-orthodox',
    'ethiopian',
    'armenian',
    'nt-alone',
  ]),
  ntBook('1-john', '1 João', '1 John'),
  ntBook('2-john', '2 João', '2 John', [
    'protestant',
    'catholic',
    'greek-orthodox',
    'slavic-orthodox',
    'ethiopian',
    'armenian',
    'nt-alone',
  ]),
  ntBook('3-john', '3 João', '3 John', [
    'protestant',
    'catholic',
    'greek-orthodox',
    'slavic-orthodox',
    'ethiopian',
    'armenian',
    'nt-alone',
  ]),
  ntBook('jude', 'Judas', 'Jude', [
    'protestant',
    'catholic',
    'greek-orthodox',
    'slavic-orthodox',
    'ethiopian',
    'armenian',
    'nt-alone',
  ]),
  ntBook('revelation', 'Apocalipse', 'Revelation', [
    'protestant',
    'catholic',
    'greek-orthodox',
    'slavic-orthodox',
    'ethiopian',
    'armenian',
    'nt-alone',
  ]),
]

export const canonsNotesPt =
  'Os termos “deuterocanônico”, “apócrifo” e “anagignoskomena” variam conforme a tradição. Não chamar automaticamente todos os deuterocanônicos de apócrifos.'
export const canonsNotesEn =
  'The terms “deuterocanonical,” “apocryphal,” and “anagignoskomena” vary by tradition. Do not automatically call all deuterocanonicals “Apocrypha.”'

export function getTraditionById(id: string): CanonTradition | undefined {
  return canonTraditions.find((tradition) => tradition.id === id)
}

export function getCanonBookById(id: string): CanonBook | undefined {
  return canonBooks.find((book) => book.id === id)
}
