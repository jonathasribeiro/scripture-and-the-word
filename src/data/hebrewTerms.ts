import type { HebrewTerm, LexiconLink } from "./types";

export interface HebrewTermsData {
  terms: HebrewTerm[];
  rtlNotePt: string;
  rtlNoteEn: string;
}

function hebrewLinks(strongs: string, lemmaPath?: string): LexiconLink[] {
  return [
    {
      id: `${strongs}-blb`,
      label: "Blue Letter Bible",
      url: `https://www.blueletterbible.org/lexicon/${strongs}/kjv/wlc/0-1/`,
      provider: "blueLetterBible",
    },
    {
      id: `${strongs}-biblehub`,
      label: "Bible Hub Hebrew",
      url: `https://biblehub.com/hebrew/${strongs.replace(/^h/i, "")}.htm`,
      provider: "bibleHub",
    },
    {
      id: `${strongs}-step`,
      label: "STEP Bible",
      url: "https://www.stepbible.org/",
      provider: "stepBible",
      notePt: "Pesquise o lema hebraico nas ferramentas de vocabulário do STEP Bible",
      noteEn: "Search the Hebrew lemma in STEP Bible’s vocabulary tools",
    },
    {
      id: `${strongs}-sefaria`,
      label: "Sefaria",
      url: lemmaPath
        ? `https://www.sefaria.org/${lemmaPath}`
        : "https://www.sefaria.org/",
      provider: "other",
      notePt: "Textos hebraicos e ferramentas de estudo",
      noteEn: "Hebrew texts and study tools",
    },
  ];
}

export const hebrewTerms: HebrewTerm[] = [
  {
    id: "davar",
    hebrew: "דָּבָר",
    transliteration: "davar",
    definitionPt:
      "Palavra, coisa, assunto, acontecimento. Abrange fala e realidade referida; frequentemente a “palavra do Senhor” (דְּבַר־יְהוָה).",
    definitionEn:
      "Word, thing, matter, event. Covers speech and the reality referred to; often the “word of the LORD” (דְּבַר־יְהוָה).",
    semanticFieldPt:
      "Fala; mandato divino; evento; assunto jurídico ou narrativo; comunicação profética.",
    semanticFieldEn:
      "Speech; divine command; event; legal or narrative matter; prophetic communication.",
    otExamples: ["Genesis 15:1", "Exodus 20:1", "Deuteronomy 18:18", "Isaiah 55:11", "Jeremiah 1:4", "Psalm 33:6"],
    commonMistakesPt:
      "Traduzir davar sempre como “palavra falada” sem notar o sentido de “coisa/acontecimento”; igualar mecanicamente a logos sem nuance.",
    commonMistakesEn:
      "Always rendering davar as “spoken word” without the sense of “thing/event”; mechanically equating it with logos without nuance.",
    rtl: true,
    dir: "rtl",
    lang: "he",
    lexiconLinks: hebrewLinks("h1697"),
  },
  {
    id: "torah",
    hebrew: "תּוֹרָה",
    transliteration: "torah",
    definitionPt:
      "Instrução, direção, lei. Pode designar um ensinamento particular, o código mosaico, ou os Cinco Livros de Moisés como corpus.",
    definitionEn:
      "Instruction, direction, law. It may designate a particular teaching, the Mosaic code, or the Five Books of Moses as a corpus.",
    semanticFieldPt:
      "Instrução divina; Torá mosaica; ensino sacerdotal/profético; leitura pública.",
    semanticFieldEn:
      "Divine instruction; Mosaic Torah; priestly/prophetic teaching; public reading.",
    otExamples: ["Exodus 24:12", "Deuteronomy 31:9–13", "Joshua 1:8", "Psalm 1:2", "Psalm 19:7", "Nehemiah 8:1–8"],
    commonMistakesPt:
      "Reduzir torah apenas a “lei legalista”; ignorar o sentido de instrução e o uso para o Pentateuco como um todo.",
    commonMistakesEn:
      "Reducing torah merely to “legalistic law”; ignoring the sense of instruction and its use for the Pentateuch as a whole.",
    rtl: true,
    dir: "rtl",
    lang: "he",
    lexiconLinks: hebrewLinks("h8451", "Texts/Tanakh"),
  },
  {
    id: "miqra",
    hebrew: "מִקְרָא",
    transliteration: "miqra",
    definitionPt:
      "Leitura, convocação, o que é lido. Em uso judaico posterior, designa as Escrituras hebraicas lidas publicamente.",
    definitionEn:
      "Reading, convocation, that which is read. In later Jewish usage it designates the Hebrew Scriptures read publicly.",
    semanticFieldPt:
      "Convocação sagrada; leitura pública; Escrituras (Miqra como corpus).",
    semanticFieldEn:
      "Sacred assembly; public reading; Scriptures (Miqra as a corpus).",
    otExamples: ["Exodus 12:16", "Leviticus 23:2", "Nehemiah 8:8", "Isaiah 1:13"],
    commonMistakesPt:
      "Assumir que miqra no hebraico bíblico já significa automaticamente “Bíblia” no sentido cristão moderno.",
    commonMistakesEn:
      "Assuming biblical Hebrew miqra already means “Bible” in the modern Christian sense.",
    rtl: true,
    dir: "rtl",
    lang: "he",
    lexiconLinks: hebrewLinks("h4744"),
  },
  {
    id: "katav",
    hebrew: "כָּתַב",
    transliteration: "katav",
    definitionPt:
      "Escrever; registrar. Verbo central para a inscrição da Torá, das tábuas, das crônicas e dos oráculos.",
    definitionEn:
      "To write; to record. Central verb for inscribing the Torah, tablets, chronicles, and oracles.",
    semanticFieldPt:
      "Escrita; documentação; cópia; publicação de decreto ou oráculo.",
    semanticFieldEn:
      "Writing; documentation; copying; issuing a decree or oracle.",
    otExamples: ["Exodus 24:4", "Exodus 31:18", "Deuteronomy 31:24", "Jeremiah 36:2", "Habakkuk 2:2"],
    commonMistakesPt:
      "Confundir o ato de escrever com o status canônico final sem história de transmissão e reconhecimento.",
    commonMistakesEn:
      "Confusing the act of writing with final canonical status apart from transmission and recognition history.",
    rtl: true,
    dir: "rtl",
    lang: "he",
    lexiconLinks: hebrewLinks("h3789"),
  },
  {
    id: "ketuvim",
    hebrew: "כְּתוּבִים",
    transliteration: "ketuvim",
    definitionPt:
      "Escritos. Terceira divisão do Tanakh (Salmos, Provérbios, Jó, Megillot, Daniel, Esdras–Neemias, Crônicas).",
    definitionEn:
      "Writings. Third division of the Tanakh (Psalms, Proverbs, Job, Megillot, Daniel, Ezra–Nehemiah, Chronicles).",
    semanticFieldPt:
      "Corpus literário; Escrituras; divisão canônica judaica.",
    semanticFieldEn:
      "Literary corpus; Scriptures; Jewish canonical division.",
    otExamples: ["Luke 24:44 (tripartite allusion)", "Psalm 1:1", "Proverbs 1:1", "Daniel 9:2"],
    commonMistakesPt:
      "Pensar que ketuvim significa “apócrifos”; ignorar que a ordem e a contagem judaicas diferem da ordem protestante sem alterar o conteúdo essencial.",
    commonMistakesEn:
      "Thinking ketuvim means “Apocrypha”; ignoring that Jewish order and counting differ from the Protestant order without changing the essential content.",
    rtl: true,
    dir: "rtl",
    lang: "he",
    lexiconLinks: hebrewLinks("h3789"),
  },
  {
    id: "neviim",
    hebrew: "נְבִיאִים",
    transliteration: "nevi’im",
    definitionPt:
      "Profetas. Segunda divisão do Tanakh: Profetas Anteriores (Josué–Reis) e Posteriores (Isaías, Jeremias, Ezequiel, Doze).",
    definitionEn:
      "Prophets. Second division of the Tanakh: Former Prophets (Joshua–Kings) and Latter Prophets (Isaiah, Jeremiah, Ezekiel, the Twelve).",
    semanticFieldPt:
      "Profecia; história teológica; oráculo; cânon profético.",
    semanticFieldEn:
      "Prophecy; theological history; oracle; prophetic canon.",
    otExamples: ["Joshua 1:1", "Isaiah 1:1", "Jeremiah 1:5", "Zechariah 1:1", "2 Kings 17:13"],
    commonMistakesPt:
      "Assumir que “profetas” no uso judaico coincide exatamente com os livros classificados como Profetas nas Bíblias cristãs.",
    commonMistakesEn:
      "Assuming “Prophets” in Jewish usage coincides exactly with books labeled Prophets in Christian Bibles.",
    rtl: true,
    dir: "rtl",
    lang: "he",
    lexiconLinks: hebrewLinks("h5030"),
  },
  {
    id: "tanakh",
    hebrew: "תַּנַ״ךְ",
    transliteration: "Tanakh",
    definitionPt:
      "Acrônimo de Torá, Nevi’im e Ketuvim: a Bíblia hebraica em sua estrutura tripartite clássica (24 livros na contagem judaica tradicional).",
    definitionEn:
      "Acronym of Torah, Nevi’im, and Ketuvim: the Hebrew Bible in its classic tripartite structure (24 books in traditional Jewish counting).",
    semanticFieldPt:
      "Cânon hebraico; Escrituras judaicas; estrutura tripartite.",
    semanticFieldEn:
      "Hebrew canon; Jewish Scriptures; tripartite structure.",
    otExamples: ["Luke 24:44", "Sirach prologue (Greek witness to tripartite language)", "Josephus, Against Apion 1.38–41"],
    commonMistakesPt:
      "Usar o Tanakh como “prova automática” do cânon protestante sem notar história, contagem e debates sobre fronteiras (ex.: Ester, Cântico, Eclesiastes).",
    commonMistakesEn:
      "Using the Tanakh as automatic “proof” of the Protestant canon without noting history, counting, and boundary debates (e.g., Esther, Song, Ecclesiastes).",
    rtl: true,
    dir: "rtl",
    lang: "he",
    lexiconLinks: [
      {
        id: "tanakh-sefaria",
        label: "Sefaria Tanakh",
        url: "https://www.sefaria.org/texts/Tanakh",
        provider: "other",
      },
      {
        id: "tanakh-mechon",
        label: "Mechon Mamre",
        url: "https://mechon-mamre.org/",
        provider: "other",
      },
      {
        id: "tanakh-step",
        label: "STEP Bible",
        url: "https://www.stepbible.org/",
        provider: "stepBible",
      },
    ],
  },
  {
    id: "sefer",
    hebrew: "סֵפֶר",
    transliteration: "sefer",
    definitionPt:
      "Livro, documento, rolo escrito. Unidade material e literária da transmissão textual (ex.: sefer torah).",
    definitionEn:
      "Book, document, written scroll. Material and literary unit of textual transmission (e.g., sefer torah).",
    semanticFieldPt:
      "Documento; rolo; registro; livro como objeto e como obra.",
    semanticFieldEn:
      "Document; scroll; record; book as object and as work.",
    otExamples: ["Exodus 17:14", "Deuteronomy 31:26", "Joshua 1:8", "Isaiah 34:16", "Jeremiah 36:2", "Nehemiah 8:1"],
    commonMistakesPt:
      "Igualar sefer automaticamente ao códice moderno; esquecer que a forma material (rolo/códice) muda a experiência de leitura sem mudar necessariamente o texto.",
    commonMistakesEn:
      "Equating sefer automatically with the modern codex; forgetting that material form (scroll/codex) changes reading experience without necessarily changing the text.",
    rtl: true,
    dir: "rtl",
    lang: "he",
    lexiconLinks: hebrewLinks("h5612"),
  },
  {
    id: "chokmah",
    hebrew: "חָכְמָה",
    transliteration: "chokmah",
    definitionPt:
      "Sabedoria. Habilidade prática, inteligência moral e, em textos sapienciais, atributo divino comunicado na criação e na instrução.",
    definitionEn:
      "Wisdom. Practical skill, moral insight, and, in wisdom literature, a divine attribute communicated in creation and instruction.",
    semanticFieldPt:
      "Perícia; discernimento; tradição sapiencial; personificação literária da Sabedoria.",
    semanticFieldEn:
      "Skill; discernment; wisdom tradition; literary personification of Wisdom.",
    otExamples: ["Proverbs 1:7", "Proverbs 8:1–36", "Job 28:12–28", "Ecclesiastes 1:13", "Exodus 31:3"],
    commonMistakesPt:
      "Ler toda personificação de chokmah em Provérbios 8 como definição ontológica idêntica ao Logos joanino sem mediação exegética.",
    commonMistakesEn:
      "Reading every personification of chokmah in Proverbs 8 as an ontological definition identical to the Johannine Logos without exegetical mediation.",
    rtl: true,
    dir: "rtl",
    lang: "he",
    lexiconLinks: hebrewLinks("h2451"),
  },
];

export const hebrewTermsData: HebrewTermsData = {
  terms: hebrewTerms,
  rtlNotePt:
    "Os lemas hebraicos devem ser renderizados com dir=\"rtl\" e lang=\"he\". A pontuação envolvente em textos mistos (PT/EN + hebraico) requer isolamento bidirecional (unicode-bidi) quando necessário.",
  rtlNoteEn:
    "Hebrew lemmas should be rendered with dir=\"rtl\" and lang=\"he\". Surrounding punctuation in mixed PT/EN + Hebrew text may require bidirectional isolation (unicode-bidi) when needed.",
};

export function getHebrewTermById(id: string): HebrewTerm | undefined {
  return hebrewTerms.find((term) => term.id === id);
}
