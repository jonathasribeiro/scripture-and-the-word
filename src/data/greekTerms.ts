import type { GreekTerm, LexiconLink } from "./types";

export interface GreekTermsData {
  terms: GreekTerm[];
}

function linksForLemma(lemma: string, strongs: string): LexiconLink[] {
  const encoded = encodeURIComponent(lemma);
  const strongsNum = strongs.replace(/^g/i, "");
  return [
    {
      id: `${strongs}-logeion`,
      label: "Logeion",
      url: `https://logeion.uchicago.edu/${encoded}`,
      provider: "logeion",
      noteEn: "Aggregates LSJ and related lexica",
      notePt: "Agrega LSJ e léxicos relacionados",
    },
    {
      id: `${strongs}-perseus`,
      label: "Perseus / LSJ",
      url: `https://www.perseus.tufts.edu/hopper/morph?l=${encoded}&la=greek`,
      provider: "perseus",
      noteEn: "Morphological analysis and LSJ entries",
      notePt: "Análise morfológica e entradas LSJ",
    },
    {
      id: `${strongs}-biblehub`,
      label: "Bible Hub Greek",
      url: `https://biblehub.com/greek/${strongsNum}.htm`,
      provider: "bibleHub",
    },
    {
      id: `${strongs}-step`,
      label: "STEP Bible",
      url: "https://www.stepbible.org/",
      provider: "stepBible",
      noteEn: "Search the Greek lemma in STEP Bible’s vocabulary tools",
      notePt: "Pesquise o lema grego nas ferramentas de vocabulário do STEP Bible",
    },
    {
      id: `${strongs}-blb`,
      label: "Blue Letter Bible",
      url: `https://www.blueletterbible.org/lexicon/${strongs}/kjv/tr/0-1/`,
      provider: "blueLetterBible",
    },
  ];
}

export const greekTerms: GreekTerm[] = [
  {
    id: "logos",
    greek: "λόγος",
    transliteration: "logos",
    definitionPt:
      "Palavra, discurso, razão, conta, mensagem. No prólogo joanino, designa o Filho eterno em relação a Deus e à criação, que se fez carne.",
    definitionEn:
      "Word, speech, reason, account, message. In the Johannine prologue it designates the eternal Son in relation to God and creation, who became flesh.",
    semanticFieldPt:
      "Discurso racional; mensagem proclamada; argumento; conta/razão; em João, título cristológico pessoal (não sinônimo automático de Escritura escrita).",
    semanticFieldEn:
      "Rational speech; proclaimed message; argument; account/reason; in John, a personal Christological title (not an automatic synonym of written Scripture).",
    ntExamples: ["John 1:1", "John 1:14", "1 John 1:1", "Revelation 19:13", "Hebrews 4:12", "Acts 6:7"],
    commonMistakesPt:
      "Tratar logos e rhema como categorias espirituais fixas e mutuamente exclusivas; reduzir logos apenas a “Bíblia escrita”; ignorar o uso cristológico em João 1.",
    commonMistakesEn:
      "Treating logos and rhema as fixed mutually exclusive spiritual categories; reducing logos only to “written Bible”; ignoring the Christological use in John 1.",
    lexiconLinks: [
      ...linksForLemma("λόγος", "g3056"),
      {
        id: "logos-sblgnt-john1",
        label: "SBLGNT John 1",
        url: "https://sblgnt.com/",
        provider: "sblgnt",
        noteEn: "Consult the SBL Greek New Testament text of John 1",
        notePt: "Consulte o texto do SBL Greek New Testament de João 1",
      },
    ],
  },
  {
    id: "rhema",
    greek: "ῥῆμα",
    transliteration: "rhema",
    definitionPt:
      "Dito, palavra pronunciada, assunto referido. Pode denotar uma declaração específica, sem impor automaticamente o sentido de “revelação subjetiva”.",
    definitionEn:
      "Saying, spoken word, matter referred to. It may denote a specific utterance without automatically meaning “subjective revelation.”",
    semanticFieldPt:
      "Palavra dita; declaração; coisa/assunto; às vezes sobreposição com logos no uso bíblico.",
    semanticFieldEn:
      "Spoken word; declaration; thing/matter; sometimes overlapping with logos in biblical usage.",
    ntExamples: ["Matthew 4:4", "Luke 1:37", "Luke 1:38", "John 6:63", "Romans 10:17", "Ephesians 6:17"],
    commonMistakesPt:
      "Afirmar que rhema sempre significa uma palavra “viva” privada, distinta da Escritura; usar Romanos 10:17 para criar uma dicotomia rígida logos/rhema.",
    commonMistakesEn:
      "Claiming rhema always means a private “living” word distinct from Scripture; using Romans 10:17 to create a rigid logos/rhema dichotomy.",
    lexiconLinks: linksForLemma("ῥῆμα", "g4487"),
  },
  {
    id: "graphe",
    greek: "γραφή",
    transliteration: "graphē",
    definitionPt:
      "Escritura; o que foi escrito. No NT frequentemente designa os textos sagrados reconhecidos como Escritura (especialmente o AT).",
    definitionEn:
      "Scripture; that which is written. In the NT it frequently designates sacred texts recognized as Scripture (especially the OT).",
    semanticFieldPt:
      "Texto escrito; Escritura canônica; citação autoritativa (“está escrito”).",
    semanticFieldEn:
      "Written text; canonical Scripture; authoritative citation (“it is written”).",
    ntExamples: ["2 Timothy 3:16", "John 10:35", "Romans 1:2", "Romans 15:4", "Matthew 21:42", "Galatians 3:8"],
    commonMistakesPt:
      "Igualar graphē à Pessoa de Cristo; afirmar que Jesus é chamado graphē; tratar cada ocorrência de “Escritura” sem contexto literário.",
    commonMistakesEn:
      "Equating graphē with the person of Christ; claiming Jesus is called graphē; treating every occurrence of “Scripture” without literary context.",
    lexiconLinks: linksForLemma("γραφή", "g1124"),
  },
  {
    id: "grapho",
    greek: "γράφω",
    transliteration: "graphō",
    definitionPt:
      "Escrever; registrar por escrito. Base verbal de graphē; enfatiza o ato e o resultado da inscrição textual.",
    definitionEn:
      "To write; to record in writing. Verbal base of graphē; emphasizes the act and result of textual inscription.",
    semanticFieldPt:
      "Composição escrita; citação (“como está escrito”); documentação da tradição.",
    semanticFieldEn:
      "Written composition; citation (“as it is written”); documentation of tradition.",
    ntExamples: ["Luke 1:3", "John 20:31", "Romans 15:4", "1 Corinthians 10:11", "Revelation 1:11"],
    commonMistakesPt:
      "Confundir o verbo graphō com inspiração em si; assumir que todo “escrever” no NT tem o mesmo status canônico.",
    commonMistakesEn:
      "Confusing the verb graphō with inspiration itself; assuming every “writing” in the NT has the same canonical status.",
    lexiconLinks: linksForLemma("γράφω", "g1125"),
  },
  {
    id: "biblos",
    greek: "βίβλος",
    transliteration: "biblos",
    definitionPt:
      "Livro, rolo, registro escrito. Pode designar um volume específico (ex.: genealogia) ou, em uso posterior, coleções escriturísticas.",
    definitionEn:
      "Book, scroll, written record. It may designate a specific volume (e.g., a genealogy) or, in later usage, scriptural collections.",
    semanticFieldPt:
      "Documento em forma de livro/rolo; registro oficial; título de obra.",
    semanticFieldEn:
      "Document in book/scroll form; official record; title of a work.",
    ntExamples: ["Matthew 1:1", "Mark 12:26", "Luke 3:4", "Acts 1:20", "Philippians 4:3", "Revelation 3:5"],
    commonMistakesPt:
      "Ler automaticamente “a Bíblia” completa em cada ocorrência de biblos no NT grego do século I.",
    commonMistakesEn:
      "Automatically reading the complete “Bible” into every first-century NT occurrence of biblos.",
    lexiconLinks: linksForLemma("βίβλος", "g976"),
  },
  {
    id: "biblion",
    greek: "βιβλίον",
    transliteration: "biblion",
    definitionPt:
      "Livrinho, rolo, documento. Forma diminutiva/relacionada a biblos; comum para rolos e escritos específicos.",
    definitionEn:
      "Little book, scroll, document. Diminutive/related form of biblos; common for scrolls and specific writings.",
    semanticFieldPt:
      "Rolo; certificado; escrito particular; em Apocalipse, o livro/selo escatológico.",
    semanticFieldEn:
      "Scroll; certificate; particular writing; in Revelation, the eschatological sealed book.",
    ntExamples: ["Luke 4:17", "John 20:30", "Galatians 3:10", "2 Timothy 4:13", "Revelation 5:1", "Revelation 22:18"],
    commonMistakesPt:
      "Tratar biblion como necessariamente “menor” em autoridade; confundir o livro do Apocalipse com o cânon inteiro em cada menção.",
    commonMistakesEn:
      "Treating biblion as necessarily “lesser” in authority; confusing Revelation’s book with the whole canon in every mention.",
    lexiconLinks: linksForLemma("βιβλίον", "g975"),
  },
  {
    id: "euangelion",
    greek: "εὐαγγέλιον",
    transliteration: "euangelion",
    definitionPt:
      "Boa notícia; evangelho. No NT, a mensagem da salvação em Cristo e, secundariamente, o gênero literário dos “Evangelhos”.",
    definitionEn:
      "Good news; gospel. In the NT, the message of salvation in Christ and, secondarily, the literary genre of the “Gospels.”",
    semanticFieldPt:
      "Proclamação; mensagem salvadora; conteúdo da pregação apostólica.",
    semanticFieldEn:
      "Proclamation; saving message; content of apostolic preaching.",
    ntExamples: ["Mark 1:1", "Romans 1:16", "1 Corinthians 15:1–4", "Galatians 1:6–9", "Ephesians 1:13"],
    commonMistakesPt:
      "Reduzir euangelion apenas a quatro livros; separar a mensagem do Cristo histórico e do testemunho apostólico escrito.",
    commonMistakesEn:
      "Reducing euangelion only to four books; separating the message from the historical Christ and written apostolic testimony.",
    lexiconLinks: linksForLemma("εὐαγγέλιον", "g2098"),
  },
  {
    id: "apokalypsis",
    greek: "ἀποκάλυψις",
    transliteration: "apokalypsis",
    definitionPt:
      "Revelação, desvelamento. Pode referir-se à revelação de Jesus Cristo, à comunicação divina, ou ao livro de Apocalipse.",
    definitionEn:
      "Revelation, unveiling. It may refer to the revelation of Jesus Christ, divine disclosure, or the book of Revelation.",
    semanticFieldPt:
      "Desvelamento divino; revelação escatológica; título do último livro do NT.",
    semanticFieldEn:
      "Divine unveiling; eschatological disclosure; title of the NT’s final book.",
    ntExamples: ["Revelation 1:1", "Romans 16:25", "Galatians 1:12", "1 Peter 1:7", "1 Corinthians 14:6"],
    commonMistakesPt:
      "Assumir que toda “revelação” é privada e não textual; igualar apokalypsis automaticamente a experiências místicas modernas.",
    commonMistakesEn:
      "Assuming every “revelation” is private and non-textual; equating apokalypsis automatically with modern mystical experiences.",
    lexiconLinks: linksForLemma("ἀποκάλυψις", "g602"),
  },
  {
    id: "paradosis",
    greek: "παράδοσις",
    transliteration: "paradosis",
    definitionPt:
      "Tradição; o que é entregue. Pode ser tradição humana criticada ou tradição apostólica recebida e transmitida.",
    definitionEn:
      "Tradition; that which is handed down. It may be human tradition under critique or apostolic tradition received and transmitted.",
    semanticFieldPt:
      "Transmissão; ensino entregue; costumes; em Paulo, conteúdo apostólico recebido.",
    semanticFieldEn:
      "Transmission; handed-on teaching; customs; in Paul, received apostolic content.",
    ntExamples: ["Matthew 15:2–6", "Mark 7:8–13", "1 Corinthians 11:2", "2 Thessalonians 2:15", "2 Thessalonians 3:6"],
    commonMistakesPt:
      "Tratar toda tradição como necessariamente anticanônica; ou, inversamente, igualar qualquer tradição eclesial posterior à paradosis apostólica.",
    commonMistakesEn:
      "Treating all tradition as necessarily anti-canonical; or, conversely, equating any later ecclesial tradition with apostolic paradosis.",
    lexiconLinks: linksForLemma("παράδοσις", "g3862"),
  },
  {
    id: "kerygma",
    greek: "κήρυγμα",
    transliteration: "kerygma",
    definitionPt:
      "Pregação, proclamação. O conteúdo anunciado publicamente; correlato do verbo κηρύσσω (proclamar como arauto).",
    definitionEn:
      "Preaching, proclamation. The publicly announced content; related to the verb κηρύσσω (to herald).",
    semanticFieldPt:
      "Anúncio público; mensagem proclamada; pregação apostólica.",
    semanticFieldEn:
      "Public announcement; proclaimed message; apostolic preaching.",
    ntExamples: ["Matthew 12:41", "Romans 16:25", "1 Corinthians 1:21", "1 Corinthians 2:4", "2 Timothy 4:17", "Titus 1:3"],
    commonMistakesPt:
      "Opor kerygma e Escritura como se a pregação substituísse o texto; usar o termo técnico moderno sem atenção ao uso neotestamentário.",
    commonMistakesEn:
      "Opposing kerygma and Scripture as if preaching replaced the text; using the modern technical term without attention to NT usage.",
    lexiconLinks: linksForLemma("κήρυγμα", "g2782"),
  },
  {
    id: "didache",
    greek: "διδαχή",
    transliteration: "didachē",
    definitionPt:
      "Ensino, doutrina. Instrução transmitida; também título da obra cristã antiga conhecida como Didaquê.",
    definitionEn:
      "Teaching, doctrine. Transmitted instruction; also the title of the early Christian work known as the Didache.",
    semanticFieldPt:
      "Instrução; corpo de ensino; catequese; autoridade do ensino apostólico.",
    semanticFieldEn:
      "Instruction; body of teaching; catechesis; authority of apostolic teaching.",
    ntExamples: ["Matthew 7:28", "Acts 2:42", "Romans 6:17", "1 Corinthians 14:6", "2 John 9", "Revelation 2:14"],
    commonMistakesPt:
      "Confundir automaticamente toda menção a didachē com o tratado da Didaquê; reduzir ensino a opinião privada sem norma textual.",
    commonMistakesEn:
      "Automatically equating every mention of didachē with the Didache treatise; reducing teaching to private opinion without textual norm.",
    lexiconLinks: linksForLemma("διδαχή", "g1322"),
  },
  {
    id: "theopneustos",
    greek: "θεόπνευστος",
    transliteration: "theopneustos",
    definitionPt:
      "Inspirado por Deus; “soprado por Deus”. Hapax legomenon em 2 Timóteo 3:16, aplicado às Escrituras (graphai).",
    definitionEn:
      "God-breathed; “breathed out by God.” Hapax legomenon in 2 Timothy 3:16, applied to the Scriptures (graphai).",
    semanticFieldPt:
      "Origem divina da Escritura; autoridade; utilidade para ensino e correção.",
    semanticFieldEn:
      "Divine origin of Scripture; authority; usefulness for teaching and correction.",
    ntExamples: ["2 Timothy 3:16"],
    commonMistakesPt:
      "Aplicar theopneustos a Cristo como se fosse título cristológico; ou negar que o termo atribui origem divina às Escrituras no contexto de 2 Timóteo 3.",
    commonMistakesEn:
      "Applying theopneustos to Christ as if it were a Christological title; or denying that the term ascribes divine origin to the Scriptures in 2 Timothy 3.",
    lexiconLinks: linksForLemma("θεόπνευστος", "g2315"),
  },
];

export const greekTermsData: GreekTermsData = { terms: greekTerms };

export function getGreekTermById(id: string): GreekTerm | undefined {
  return greekTerms.find((term) => term.id === id);
}
