import type { Manuscript } from "./types";

export interface ManuscriptsData {
  manuscripts: Manuscript[];
}

export const manuscripts: Manuscript[] = [
  {
    id: "codex-sinaiticus",
    namePt: "Códex Sinaítico",
    nameEn: "Codex Sinaiticus",
    siglum: "א (01)",
    dateApprox: "c. 330–360 CE",
    sortYear: 345,
    language: "Greek",
    contentPt:
      "Grande parte da Septuaginta e o Novo Testamento completo, além de textos como a Epístola de Barnabé e parte do Pastor de Hermas.",
    contentEn:
      "Large portions of the Septuagint and the complete New Testament, plus texts such as the Epistle of Barnabas and part of the Shepherd of Hermas.",
    locationPt: "Londres, Leipzig, Monte Sinai e São Petersburgo (folhas divididas)",
    locationEn: "London, Leipzig, Mount Sinai, and St. Petersburg (leaves divided)",
    importancePt:
      "Um dos quatro grandes unciais; testemunho primário do texto alexandrino e da forma antiga da Bíblia cristã grega.",
    importanceEn:
      "One of the four Great Uncials; a primary witness to the Alexandrian text and an early form of the Greek Christian Bible.",
    imageId: "codex-sinaiticus",
    institutionalUrl: "https://www.codexsinaiticus.org/",
    tags: ["uncial", "greek", "nt", "lxx", "4th-century"],
  },
  {
    id: "codex-vaticanus",
    namePt: "Códex Vaticano",
    nameEn: "Codex Vaticanus",
    siglum: "B (03)",
    dateApprox: "c. 300–350 CE",
    sortYear: 325,
    language: "Greek",
    contentPt:
      "Quase toda a Bíblia grega; faltam partes finais do NT (Hebreus incompleto; Pastorais, Filemom e Apocalipse ausentes no estado atual).",
    contentEn:
      "Almost the entire Greek Bible; the end of the NT is incomplete as now preserved (Hebrews incomplete; Pastorals, Philemon, and Revelation absent).",
    locationPt: "Biblioteca Apostólica Vaticana, Cidade do Vaticano",
    locationEn: "Vatican Apostolic Library, Vatican City",
    importancePt:
      "Pilar da crítica textual moderna; frequentemente alinhado com P75 no texto dos Evangelhos.",
    importanceEn:
      "A pillar of modern textual criticism; frequently aligned with P75 in the Gospels.",
    imageId: "codex-vaticanus",
    institutionalUrl: "https://digi.vatlib.it/mss/detail/Vat.gr.1209",
    tags: ["uncial", "greek", "vatican", "alexandrian"],
  },
  {
    id: "codex-alexandrinus",
    namePt: "Códex Alexandrino",
    nameEn: "Codex Alexandrinus",
    siglum: "A (02)",
    dateApprox: "5th century CE",
    sortYear: 450,
    language: "Greek",
    contentPt:
      "Quase toda a Bíblia grega, com lacunas; inclui 1–2 Clemente após o Apocalipse em sua forma preservada.",
    contentEn:
      "Almost the entire Greek Bible, with lacunae; includes 1–2 Clement after Revelation in its preserved form.",
    locationPt: "British Library, Londres",
    locationEn: "British Library, London",
    importancePt:
      "Grande uncial do séc. V; testemunho misto (alexandrino nos Paulinos; mais bizantino nos Evangelhos).",
    importanceEn:
      "Fifth-century Great Uncial; mixed witness (Alexandrian in Paulines; more Byzantine in the Gospels).",
    imageId: "codex-alexandrinus",
    institutionalUrl: "https://www.bl.uk/collection-items/codex-alexandrinus",
    tags: ["uncial", "greek", "british-library", "5th-century"],
  },
  {
    id: "p52",
    namePt: "Papiro Rylands P52",
    nameEn: "Rylands Papyrus P52",
    siglum: "𝔓52",
    dateApprox: "c. 125–175 CE (paleography debated)",
    sortYear: 150,
    language: "Greek",
    contentPt: "João 18:31–33 (verso) e 18:37–38 (reto), em fragmento.",
    contentEn: "John 18:31–33 (verso) and 18:37–38 (recto), as a fragment.",
    locationPt: "John Rylands Library, Manchester",
    locationEn: "John Rylands Library, Manchester",
    importancePt:
      "Entre os mais antigos testemunhos materiais do Evangelho de João; demonstra circulação precoce do texto.",
    importanceEn:
      "Among the earliest material witnesses to John’s Gospel; demonstrates early circulation of the text.",
    imageId: "p52",
    institutionalUrl: "https://www.digitalcollections.manchester.ac.uk/",
    tags: ["papyrus", "john", "early-nt"],
  },
  {
    id: "p46",
    namePt: "Papiro Chester Beatty P46",
    nameEn: "Chester Beatty Papyrus P46",
    siglum: "𝔓46",
    dateApprox: "c. 175–225 CE",
    sortYear: 200,
    language: "Greek",
    contentPt:
      "Códice antigo das epístolas paulinas (Romanos, Hebreus, 1–2 Coríntios, Efésios, Gálatas, Filipenses, Colossenses, 1 Tessalonicenses; com lacunas).",
    contentEn:
      "Early Pauline codex (Romans, Hebrews, 1–2 Corinthians, Ephesians, Galatians, Philippians, Colossians, 1 Thessalonians; with lacunae).",
    locationPt: "Dublin (Chester Beatty) e Ann Arbor (University of Michigan)",
    locationEn: "Dublin (Chester Beatty) and Ann Arbor (University of Michigan)",
    importancePt:
      "Testemunho precoce da coleção paulina e da inclusão de Hebreus entre escritos paulinos em alguns círculos.",
    importanceEn:
      "Early witness to the Pauline collection and to Hebrews’ inclusion among Pauline writings in some circles.",
    imageId: "p46",
    institutionalUrl: "https://chesterbeatty.ie/",
    tags: ["papyrus", "paul", "chester-beatty"],
  },
  {
    id: "p66",
    namePt: "Papiro Bodmer P66",
    nameEn: "Bodmer Papyrus P66",
    siglum: "𝔓66",
    dateApprox: "c. 200 CE",
    sortYear: 200,
    language: "Greek",
    contentPt: "Evangelho de João quase completo, com lacunas e numerosas correções.",
    contentEn: "Nearly complete Gospel of John, with lacunae and numerous corrections.",
    locationPt: "Fondation Martin Bodmer, Cologny (Genebra)",
    locationEn: "Fondation Martin Bodmer, Cologny (Geneva)",
    importancePt:
      "Um dos mais antigos códices extensos de João; rico em evidência de prática escribal.",
    importanceEn:
      "One of the earliest extensive Johannine codices; rich evidence of scribal practice.",
    imageId: "p66",
    institutionalUrl: "https://fondationbodmer.ch/",
    tags: ["papyrus", "john", "bodmer"],
  },
  {
    id: "p75",
    namePt: "Papiro Bodmer P75 (Hanna)",
    nameEn: "Bodmer Papyrus P75 (Hanna)",
    siglum: "𝔓75",
    dateApprox: "c. 175–250 CE (debated; some argue later)",
    sortYear: 200,
    language: "Greek",
    contentPt: "Lucas (a partir de 3:18) e João (até cerca de 15), com lacunas.",
    contentEn: "Luke (from 3:18) and John (to about ch. 15), with lacunae.",
    locationPt: "Biblioteca Apostólica Vaticana",
    locationEn: "Vatican Apostolic Library",
    importancePt:
      "Altamente próximo do Códex Vaticano nos Evangelhos; crucial para a história do texto alexandrino.",
    importanceEn:
      "Highly close to Codex Vaticanus in the Gospels; crucial for the history of the Alexandrian text.",
    imageId: "p75",
    institutionalUrl: "https://digi.vatlib.it/view/MSS_Pap.Hanna.1(Mater.Verbi)",
    tags: ["papyrus", "luke", "john", "vatican"],
  },
  {
    id: "great-isaiah-scroll",
    namePt: "Grande Rolo de Isaías (1QIsaᵃ)",
    nameEn: "Great Isaiah Scroll (1QIsaᵃ)",
    siglum: "1QIsaᵃ",
    dateApprox: "c. 125–100 BCE",
    sortYear: -110,
    language: "Hebrew",
    contentPt: "Quase todo o livro de Isaías em hebraico, em um único rolo.",
    contentEn: "Nearly the entire book of Isaiah in Hebrew, in a single scroll.",
    locationPt: "Museu de Israel, Santuário do Livro, Jerusalém",
    locationEn: "Israel Museum, Shrine of the Book, Jerusalem",
    importancePt:
      "Demonstra a estabilidade e a variação textual de Isaías mais de um milênio antes dos códices massoréticos medievais.",
    importanceEn:
      "Demonstrates stability and variation in Isaiah more than a millennium before medieval Masoretic codices.",
    imageId: "great-isaiah-scroll",
    institutionalUrl: "https://www.imj.org.il/en/wings/shrine-book",
    tags: ["dead-sea-scrolls", "isaiah", "hebrew"],
  },
  {
    id: "dead-sea-scrolls",
    namePt: "Manuscritos do Mar Morto (conjunto)",
    nameEn: "Dead Sea Scrolls (corpus)",
    dateApprox: "c. 250 BCE – 70 CE",
    sortYear: -100,
    language: "Hebrew, Aramaic, Greek (minor)",
    contentPt:
      "Textos bíblicos, paráfrases, pesharim, regras comunitárias e literatura relacionada, vindos sobretudo de Qumran.",
    contentEn:
      "Biblical texts, paraphrases, pesharim, community rules, and related literature, chiefly from Qumran.",
    locationPt: "Autoridade de Antiguidades de Israel; Museu de Israel; outras coleções",
    locationEn: "Israel Antiquities Authority; Israel Museum; other collections",
    importancePt:
      "Revolucionou o estudo do texto hebraico, do judaísmo do Segundo Templo e das tradições paralelas à formação cristã.",
    importanceEn:
      "Revolutionized study of the Hebrew text, Second Temple Judaism, and traditions parallel to Christian origins.",
    imageId: "dead-sea-scrolls-fragments",
    institutionalUrl: "https://www.deadseascrolls.org.il/",
    tags: ["dead-sea-scrolls", "qumran", "hebrew"],
  },
  {
    id: "aleppo-codex",
    namePt: "Códex de Alepo",
    nameEn: "Aleppo Codex",
    siglum: "A (Aleppo)",
    dateApprox: "c. 920 CE",
    sortYear: 920,
    language: "Hebrew",
    contentPt:
      "Tanakh massorético tiberiense; porções da Torá e outros livros foram perdidas após 1947.",
    contentEn:
      "Tiberian Masoretic Tanakh; portions of the Torah and other books were lost after 1947.",
    locationPt: "Jerusalém (Museu de Israel / Instituto Ben-Zvi)",
    locationEn: "Jerusalem (Israel Museum / Ben-Zvi Institute)",
    importancePt:
      "Modelo massorético de máxima autoridade na tradição judaica medieval; referência para edições críticas.",
    importanceEn:
      "Masoretic model of highest authority in medieval Jewish tradition; reference for critical editions.",
    imageId: "aleppo-codex",
    institutionalUrl: "https://www.aleppocodex.org/",
    tags: ["masoretic", "hebrew", "aleppo"],
  },
  {
    id: "leningrad-codex",
    namePt: "Códex de Leningrado",
    nameEn: "Leningrad Codex",
    siglum: "L (B19a)",
    dateApprox: "1008/1009 CE",
    sortYear: 1008,
    language: "Hebrew",
    contentPt: "Tanakh completo com vocalização e acentos massoréticos tiberienses.",
    contentEn: "Complete Tanakh with Tiberian Masoretic vocalization and accents.",
    locationPt: "Biblioteca Nacional da Rússia, São Petersburgo",
    locationEn: "National Library of Russia, St. Petersburg",
    importancePt:
      "Base tipográfica da BHS e da BHQ; o manuscrito hebraico completo datado mais antigo.",
    importanceEn:
      "Typographic base of BHS and BHQ; the oldest complete dated Hebrew Bible manuscript.",
    imageId: "leningrad-codex",
    institutionalUrl: "https://archive.org/details/Leningrad_Codex",
    tags: ["masoretic", "hebrew", "bhs"],
  },
  {
    id: "gutenberg-bible",
    namePt: "Bíblia de Gutenberg",
    nameEn: "Gutenberg Bible",
    dateApprox: "c. 1454–1455",
    sortYear: 1455,
    language: "Latin (Vulgate)",
    contentPt: "Vulgata latina impressa em dois volumes (exemplares variam em iluminação).",
    contentEn: "Printed Latin Vulgate in two volumes (copies vary in illumination).",
    locationPt: "Vários exemplares (Library of Congress, British Library, Ransom Center, etc.)",
    locationEn: "Multiple copies (Library of Congress, British Library, Ransom Center, etc.)",
    importancePt:
      "Marca a era da Bíblia impressa e a estabilização relativa da circulação textual na Europa ocidental.",
    importanceEn:
      "Marks the era of the printed Bible and a relative stabilization of textual circulation in Western Europe.",
    imageId: "gutenberg-bible",
    institutionalUrl: "https://www.loc.gov/item/48031351/",
    tags: ["print", "vulgate", "latin", "incunabula"],
  },
  {
    id: "luther-bible",
    namePt: "Bíblia de Lutero (1534)",
    nameEn: "Luther Bible (1534)",
    dateApprox: "1534 (complete); NT 1522",
    sortYear: 1534,
    language: "German",
    contentPt:
      "Tradução alemã completa; inclui os livros deuterocanônicos/apócrifos em seção própria, conforme prática luterana.",
    contentEn:
      "Complete German translation; includes deuterocanonical/apocryphal books in a separate section, according to Lutheran practice.",
    locationPt: "Múltiplas bibliotecas com exemplares de 1534 e edições posteriores",
    locationEn: "Multiple libraries holding 1534 copies and later editions",
    importancePt:
      "Documento central da Reforma e da história da língua alemã; modela a distinção entre cânon e apócrifos na tradição protestante.",
    importanceEn:
      "Central Reformation and German-language document; shapes the Protestant distinction between canon and Apocrypha.",
    imageId: "luther-bible",
    institutionalUrl: "https://www.deutsche-digitale-bibliothek.de/",
    tags: ["print", "luther", "german", "reformation"],
  },
  {
    id: "kjv-1611",
    namePt: "King James Bible (1611)",
    nameEn: "King James Bible (1611)",
    dateApprox: "1611",
    sortYear: 1611,
    language: "English",
    contentPt:
      "Bíblia inglesa Authorized Version; edições iniciais incluíam os Apócrifos entre AT e NT.",
    contentEn:
      "English Authorized Version Bible; early editions included the Apocrypha between OT and NT.",
    locationPt: "Coleções de livros raros em várias bibliotecas",
    locationEn: "Rare-book collections in multiple libraries",
    importancePt:
      "Texto formativo do protestantismo anglófono e referência duradoura de tradução.",
    importanceEn:
      "Formative text of Anglophone Protestantism and a lasting translation reference.",
    imageId: "kjv-1611",
    institutionalUrl: "https://www.bl.uk/",
    tags: ["print", "english", "kjv", "1611"],
  },
  {
    id: "torah-scroll",
    namePt: "Sefer Torá (rolo ritual)",
    nameEn: "Sefer Torah (ritual scroll)",
    dateApprox: "Living manuscript tradition",
    sortYear: 0,
    language: "Hebrew (consonantal, ritual)",
    contentPt: "Pentateuco em rolo de pergaminho para leitura litúrgica na sinagoga.",
    contentEn: "Pentateuch on a parchment scroll for liturgical synagogue reading.",
    locationPt: "Sinagogas e museus em todo o mundo",
    locationEn: "Synagogues and museums worldwide",
    importancePt:
      "Testemunha a transmissão contínua do texto consonantal da Torá em contexto comunitário e litúrgico.",
    importanceEn:
      "Witnesses the continuous transmission of the Torah’s consonantal text in communal and liturgical context.",
    imageId: "torah-scroll",
    institutionalUrl: "https://www.jewishvirtuallibrary.org/the-torah-scroll",
    tags: ["torah", "scroll", "hebrew", "liturgy"],
  },
  {
    id: "codex-bezae",
    namePt: "Códex Bezae",
    nameEn: "Codex Bezae",
    siglum: "D (05)",
    dateApprox: "c. 400 CE",
    sortYear: 400,
    language: "Greek–Latin diglot",
    contentPt: "Evangelhos e Atos (com lacunas), em grego e latim em páginas opostas.",
    contentEn: "Gospels and Acts (with lacunae), Greek and Latin on facing pages.",
    locationPt: "Cambridge University Library",
    locationEn: "Cambridge University Library",
    importancePt:
      "Principal testemunho do chamado texto ocidental, com variantes extensas especialmente em Atos.",
    importanceEn:
      "Chief witness to the so-called Western text, with extensive variants especially in Acts.",
    institutionalUrl: "https://cudl.lib.cam.ac.uk/view/MS-NN-00002-00041/1",
    tags: ["uncial", "western-text", "diglot"],
  },
  {
    id: "codex-ephraemi",
    namePt: "Códex Efraim Rescriptus",
    nameEn: "Codex Ephraemi Rescriptus",
    siglum: "C (04)",
    dateApprox: "5th century CE",
    sortYear: 450,
    language: "Greek",
    contentPt:
      "Palimpsesto com restos de quase toda a Bíblia grega; texto bíblico sob escritos de Efrém.",
    contentEn:
      "Palimpsest with remains of nearly the entire Greek Bible; biblical text under Ephrem’s writings.",
    locationPt: "Bibliothèque nationale de France, Paris",
    locationEn: "Bibliothèque nationale de France, Paris",
    importancePt: "Um dos quatro grandes unciais; recuperado por leitura palimpsesto no século XIX.",
    importanceEn: "One of the four Great Uncials; recovered by palimpsest reading in the nineteenth century.",
    institutionalUrl: "https://gallica.bnf.fr/",
    tags: ["uncial", "palimpsest", "greek"],
  },
];

export const manuscriptsData: ManuscriptsData = { manuscripts };

export function getManuscriptById(id: string): Manuscript | undefined {
  return manuscripts.find((m) => m.id === id);
}
