import type { HistoricalImage } from "./types";

export interface ImagesData {
  editorialNotePt: string;
  editorialNoteEn: string;
  images: HistoricalImage[];
}

export const imagesData: ImagesData = {
  editorialNotePt:
    "A presença de uma imagem nesta página não implica apoio a todas as posições da instituição que a preserva.",
  editorialNoteEn:
    "The presence of an image on this page does not imply endorsement of every position held by the preserving institution.",
  images: [
    {
      id: "codex-sinaiticus",
      titlePt: "Códex Sinaítico",
      titleEn: "Codex Sinaiticus",
      descriptionPt:
        "Um dos mais antigos manuscritos gregos quase completos da Bíblia cristã (séc. IV), descoberto no Mosteiro de Santa Catarina no Sinai. Contém grande parte do Antigo Testamento grego e o Novo Testamento completo.",
      descriptionEn:
        "One of the oldest nearly complete Greek manuscripts of the Christian Bible (4th century), discovered at Saint Catherine’s Monastery on Sinai. It preserves large portions of the Greek Old Testament and the complete New Testament.",
      period: "c. 330–360 CE",
      institution: "British Library; Leipzig University Library; Saint Catherine’s Monastery; National Library of Russia",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Codex_Sinaiticus,_GA_01.jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/Codex_Sinaiticus%2C_GA_01.jpg",
      license: "Public domain / institutional digitization",
      credit: "British Library via Wikimedia Commons (CSNTM / GA 01)",
      altPt: "Página do Códex Sinaítico em uncial grego",
      altEn: "Page of Codex Sinaiticus in Greek uncial script",
      tags: ["manuscript", "greek", "uncial", "new-testament", "septuagint", "4th-century"],
    },
    {
      id: "codex-vaticanus",
      titlePt: "Códex Vaticano",
      titleEn: "Codex Vaticanus",
      descriptionPt:
        "Manuscrito uncial grego do séc. IV (Vat. gr. 1209), um dos principais testemunhos do texto alexandrino. Fundamental para a crítica textual do Antigo e do Novo Testamento.",
      descriptionEn:
        "Fourth-century Greek uncial manuscript (Vat. gr. 1209), one of the chief witnesses to the Alexandrian text. Foundational for Old and New Testament textual criticism.",
      period: "c. 300–350 CE",
      institution: "Vatican Apostolic Library",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Codex_Vaticanus_B,_2Thess._3,11-18,_Hebr._1,1-2,2.jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e9/Codex_Vaticanus_B%2C_2Thess._3%2C11-18%2C_Hebr._1%2C1-2%2C2.jpg",
      license: "Public domain",
      credit: "Vatican Library DigiVatLib / Wikimedia Commons",
      altPt: "Fólio do Códex Vaticano com texto de 2 Tessalonicenses e Hebreus",
      altEn: "Folio of Codex Vaticanus with 2 Thessalonians and Hebrews",
      tags: ["manuscript", "greek", "uncial", "vatican", "alexandrian", "4th-century"],
    },
    {
      id: "codex-alexandrinus",
      titlePt: "Códex Alexandrino",
      titleEn: "Codex Alexandrinus",
      descriptionPt:
        "Códice uncial grego do séc. V, outrora em Alexandria e hoje na British Library. Contém quase toda a Bíblia grega e é um dos quatro grandes unciais.",
      descriptionEn:
        "Fifth-century Greek uncial once associated with Alexandria and now held by the British Library. It contains nearly the entire Greek Bible and ranks among the four Great Uncials.",
      period: "5th century CE",
      institution: "British Library",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Codex_Alexandrinus,_opened_to_the_end_of_the_gospel_of_Luke_and_start_of_John,_Constantinople_or_Asia_Minor,_5th_century_AD_-_British_Library,_London_-_DSC00557.jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/Codex_Alexandrinus%2C_opened_to_the_end_of_the_gospel_of_Luke_and_start_of_John%2C_Constantinople_or_Asia_Minor%2C_5th_century_AD_-_British_Library%2C_London_-_DSC00557.jpg",
      license: "CC0 / public domain photograph",
      credit: "Photograph of British Library display via Wikimedia Commons",
      altPt: "Códex Alexandrino aberto no fim de Lucas e início de João",
      altEn: "Codex Alexandrinus open at the end of Luke and start of John",
      tags: ["manuscript", "greek", "uncial", "british-library", "5th-century"],
    },
    {
      id: "p52",
      titlePt: "Papiro P52 (Rylands)",
      titleEn: "Papyrus P52 (Rylands)",
      descriptionPt:
        "Fragmento do Evangelho de João (18:31–33, 37–38), frequentemente citado como um dos mais antigos testemunhos do Novo Testamento. Conservado na John Rylands Library, Manchester.",
      descriptionEn:
        "Fragment of the Gospel of John (18:31–33, 37–38), often cited among the earliest New Testament witnesses. Held at the John Rylands Library, Manchester.",
      period: "c. 125–175 CE (debated)",
      institution: "John Rylands Library, University of Manchester",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Papyrus_52.jpg",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/Papyrus_52.jpg",
      license: "CC BY-SA (see Commons file page)",
      credit: "KetefHinnomFan / Wikimedia Commons",
      altPt: "Fragmento do Papiro Rylands P52 do Evangelho de João",
      altEn: "Rylands Papyrus P52 fragment of the Gospel of John",
      tags: ["papyrus", "p52", "john", "early-nt", "rylands"],
    },
    {
      id: "p46",
      titlePt: "Papiro P46 (Chester Beatty)",
      titleEn: "Papyrus P46 (Chester Beatty)",
      descriptionPt:
        "Um dos mais antigos códices paulinos (c. 200 CE). Folhas divididas entre a Chester Beatty Library (Dublin) e a University of Michigan.",
      descriptionEn:
        "One of the earliest Pauline codices (c. 200 CE). Leaves are divided between the Chester Beatty Library (Dublin) and the University of Michigan.",
      period: "c. 175–225 CE",
      institution: "Chester Beatty Library; University of Michigan Library",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:P46.jpg",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/P46.jpg",
      license: "Public domain",
      credit: "University of Michigan / Wikimedia Commons",
      altPt: "Fólio do Papiro P46 com texto das epístolas paulinas",
      altEn: "Leaf of Papyrus P46 with Pauline epistle text",
      tags: ["papyrus", "p46", "paul", "chester-beatty", "early-nt"],
    },
    {
      id: "p66",
      titlePt: "Papiro P66 (Bodmer II)",
      titleEn: "Papyrus P66 (Bodmer II)",
      descriptionPt:
        "Manuscrito antigo do Evangelho de João (Bodmer II), datado por volta de 200 CE. Importante testemunho alexandrino com correções evidentes do escriba.",
      descriptionEn:
        "Early manuscript of the Gospel of John (Bodmer II), dated around 200 CE. An important Alexandrian witness showing clear scribal corrections.",
      period: "c. 200 CE",
      institution: "Bodmer Foundation / Fondation Martin Bodmer",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Papyrus_66_(GA).jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Papyrus_66_%28GA%29.jpg",
      license: "Public domain",
      credit: "Leszek Jańczuk / Wikimedia Commons",
      altPt: "Página do Papiro P66 com o início do Evangelho de João",
      altEn: "Page of Papyrus P66 with the opening of John’s Gospel",
      tags: ["papyrus", "p66", "john", "bodmer", "early-nt"],
    },
    {
      id: "p75",
      titlePt: "Papiro P75 (Bodmer XIV–XV)",
      titleEn: "Papyrus P75 (Bodmer XIV–XV)",
      descriptionPt:
        "Manuscrito precoce de Lucas e João, hoje na Biblioteca Vaticana (Hanna Papyrus 1). Notável pela proximidade textual com o Códex Vaticano.",
      descriptionEn:
        "Early manuscript of Luke and John, now in the Vatican Library (Hanna Papyrus 1). Noted for its close textual affinity with Codex Vaticanus.",
      period: "c. 175–250 CE (debated)",
      institution: "Vatican Apostolic Library",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:P75_lords_prayer.jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/P75_lords_prayer.jpg",
      license: "Public domain",
      credit: "Wikimedia Commons (P75 Lord’s Prayer detail)",
      altPt: "Detalhe do Papiro P75 com a Oração do Senhor em Lucas",
      altEn: "Detail of Papyrus P75 with the Lord’s Prayer in Luke",
      tags: ["papyrus", "p75", "luke", "john", "bodmer", "vatican"],
    },
    {
      id: "great-isaiah-scroll",
      titlePt: "Grande Rolo de Isaías (1QIsaᵃ)",
      titleEn: "Great Isaiah Scroll (1QIsaᵃ)",
      descriptionPt:
        "O mais completo rolo bíblico de Qumran, contendo quase todo o livro de Isaías em hebraico. Mais de mil anos mais antigo que os principais códices massoréticos medievais.",
      descriptionEn:
        "The most complete biblical scroll from Qumran, containing nearly the entire book of Isaiah in Hebrew. Over a thousand years older than the major medieval Masoretic codices.",
      period: "c. 125–100 BCE",
      institution: "Israel Museum, Shrine of the Book, Jerusalem",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Great_Isaiah_Scroll.jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Great_Isaiah_Scroll.jpg",
      license: "Public domain / museum photography (see Commons)",
      credit: "Israel Museum / Ardon Bar-Hama via Wikimedia Commons",
      altPt: "Reprodução fotográfica do Grande Rolo de Isaías de Qumran",
      altEn: "Photographic reproduction of the Great Isaiah Scroll from Qumran",
      tags: ["dead-sea-scrolls", "isaiah", "hebrew", "qumran", "1QIsaa"],
    },
    {
      id: "dead-sea-scrolls-fragments",
      titlePt: "Fragmentos dos Manuscritos do Mar Morto",
      titleEn: "Dead Sea Scrolls fragments",
      descriptionPt:
        "Conjunto de fragmentos e rolos descobertos nas cavernas de Qumran (1947 em diante), incluindo textos bíblicos, comentários (pesharim) e literatura sectária.",
      descriptionEn:
        "Collection of fragments and scrolls discovered in the Qumran caves (from 1947 onward), including biblical texts, pesharim commentaries, and sectarian literature.",
      period: "c. 250 BCE – 70 CE",
      institution: "Israel Antiquities Authority; Israel Museum; various collections",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Dead_Sea_scrolls.jpg",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Dead_Sea_scrolls.jpg",
      license: "See Wikimedia Commons file page",
      credit: "Wikimedia Commons",
      altPt: "Fragmentos dos Manuscritos do Mar Morto",
      altEn: "Fragments of the Dead Sea Scrolls",
      tags: ["dead-sea-scrolls", "qumran", "hebrew", "aramaic", "fragments"],
    },
    {
      id: "aleppo-codex",
      titlePt: "Códex de Alepo",
      titleEn: "Aleppo Codex",
      descriptionPt:
        "Códice massorético do séc. X associado a Aharon ben Asher. Considerado o mais autoritativo testemunho da tradição tiberiense; partes foram perdidas no século XX.",
      descriptionEn:
        "Tenth-century Masoretic Codex associated with Aharon ben Asher. Regarded as the most authoritative Tiberian witness; portions were lost in the twentieth century.",
      period: "c. 920 CE",
      institution: "Israel Museum / Ben-Zvi Institute, Jerusalem",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Aleppo_Codex_Joshua_1_1.jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Aleppo_Codex_Joshua_1_1.jpg",
      license: "Public domain",
      credit: "Wikimedia Commons (Aleppo Codex digitization)",
      altPt: "Página do Códex de Alepo com o início de Josué",
      altEn: "Page of the Aleppo Codex at the beginning of Joshua",
      tags: ["masoretic", "hebrew", "aleppo", "ben-asher", "10th-century"],
    },
    {
      id: "leningrad-codex",
      titlePt: "Códex de Leningrado",
      titleEn: "Leningrad Codex",
      descriptionPt:
        "O mais antigo manuscrito completo datado da Bíblia hebraica (1008/1009 CE). Base tipográfica da Biblia Hebraica Stuttgartensia e da Biblia Hebraica Quinta.",
      descriptionEn:
        "The oldest complete dated manuscript of the Hebrew Bible (1008/1009 CE). Typographic base for the Biblia Hebraica Stuttgartensia and Biblia Hebraica Quinta.",
      period: "1008/1009 CE",
      institution: "National Library of Russia, St. Petersburg",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Leningrad_Codex_Carpet_page_B284a.jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/72/Leningrad_Codex_Carpet_page_B284a.jpg",
      license: "Public domain",
      credit: "Wikimedia Commons (Codex Leningradensis)",
      altPt: "Página ornamental (carpet page) do Códex de Leningrado",
      altEn: "Carpet page from the Leningrad Codex",
      tags: ["masoretic", "hebrew", "leningrad", "bhs", "bhq"],
    },
    {
      id: "gutenberg-bible",
      titlePt: "Bíblia de Gutenberg",
      titleEn: "Gutenberg Bible",
      descriptionPt:
        "Primeira grande obra impressa na Europa com tipos móveis metálicos (c. 1454–1455): a Vulgata latina. Marca a transição da transmissão manuscrita para a impressa.",
      descriptionEn:
        "The first major European book printed with movable metal type (c. 1454–1455): the Latin Vulgate. It marks the shift from manuscript to print transmission.",
      period: "c. 1454–1455",
      institution: "Multiple copies (e.g., Harry Ransom Center, Library of Congress, British Library)",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gutenberg_bible_Old_Testament_Epistle_of_St_Jerome.jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/27/Gutenberg_bible_Old_Testament_Epistle_of_St_Jerome.jpg",
      license: "Public domain",
      credit: "Harry Ransom Center, University of Texas / Wikimedia Commons",
      altPt: "Primeira página da Bíblia de Gutenberg com a epístola de Jerônimo",
      altEn: "Opening page of the Gutenberg Bible with Jerome’s epistle",
      tags: ["print", "vulgate", "gutenberg", "incunabula", "latin"],
    },
    {
      id: "luther-bible",
      titlePt: "Bíblia de Lutero",
      titleEn: "Luther Bible",
      descriptionPt:
        "Tradução alemã de Martinho Lutero. O Novo Testamento saiu em 1522; a Bíblia completa em 1534. Influenciou profundamente a língua alemã e a Reforma.",
      descriptionEn:
        "Martin Luther’s German translation. The New Testament appeared in 1522; the complete Bible in 1534. It deeply shaped the German language and the Reformation.",
      period: "1534 (complete Bible)",
      institution: "Multiple library holdings of 1534 and later editions",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lutherbibel_1534.jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/37/Lutherbibel_1534.jpg",
      license: "Public domain",
      credit: "Wikimedia Commons",
      altPt: "Página de rosto da Bíblia de Lutero de 1534",
      altEn: "Title page of the 1534 Luther Bible",
      tags: ["print", "luther", "reformation", "german", "1534"],
    },
    {
      id: "kjv-1611",
      titlePt: "King James Bible (1611)",
      titleEn: "King James Version (1611)",
      descriptionPt:
        "Primeira edição da Authorized Version inglesa (1611), traduzida por comissões sob o patrocínio de Jaime I. Tornou-se a Bíblia padrão do mundo anglófono protestante por séculos.",
      descriptionEn:
        "First edition of the English Authorized Version (1611), translated by committees under James I. It became the standard Protestant English Bible for centuries.",
      period: "1611",
      institution: "Multiple rare-book libraries",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:King_James_Bible_(1611)_title_page.jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1c/King_James_Bible_%281611%29_title_page.jpg",
      license: "Public domain",
      credit: "Wikimedia Commons",
      altPt: "Página de rosto da King James Bible de 1611",
      altEn: "Title page of the 1611 King James Bible",
      tags: ["print", "kjv", "english", "1611", "authorized-version"],
    },
    {
      id: "torah-scroll",
      titlePt: "Rolo da Torá",
      titleEn: "Torah Scroll",
      descriptionPt:
        "Sefer Torá: cópia manuscrita ritual dos Cinco Livros de Moisés, usada na leitura pública da sinagoga. Exemplo da transmissão contínua do texto hebraico em forma de rolo.",
      descriptionEn:
        "Sefer Torah: a ritual handwritten copy of the Five Books of Moses used for public synagogue reading. An example of continuous Hebrew textual transmission in scroll form.",
      period: "Living tradition (example photograph of a modern/historic scroll)",
      institution: "Synagogue and museum collections worldwide",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Sefer_Torah_at_old_Glockengasse_Synagogue,_Cologne.jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Sefer_Torah_at_old_Glockengasse_Synagogue%2C_Cologne.jpg",
      license: "See Wikimedia Commons file page",
      credit: "Wikimedia Commons (Glockengasse Synagogue, Cologne)",
      altPt: "Sefer Torá aberto para leitura pública",
      altEn: "Open Sefer Torah prepared for public reading",
      tags: ["torah", "hebrew", "scroll", "synagogue", "ritual"],
    },
    {
      id: "p66-john-opening",
      titlePt: "P66 — início do Evangelho de João",
      titleEn: "P66 — opening of John’s Gospel",
      descriptionPt:
        "Detalhe adicional do Papiro Bodmer II mostrando o início do Evangelho de João (Ἐν ἀρχῇ ἦν ὁ λόγος).",
      descriptionEn:
        "Additional detail from Bodmer Papyrus II showing the opening of John’s Gospel (Ἐν ἀρχῇ ἦν ὁ λόγος).",
      period: "c. 200 CE",
      institution: "Bodmer Foundation",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Johannesevangelium_(Papyrus_66).jpg",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/92/Johannesevangelium_%28Papyrus_66%29.jpg",
      license: "GFDL / see Commons",
      credit: "F. Wessel / Wikimedia Commons",
      altPt: "Início do Evangelho de João no Papiro P66",
      altEn: "Opening of John’s Gospel in Papyrus P66",
      tags: ["papyrus", "p66", "john", "logos", "bodmer"],
    },
    {
      id: "sinaiticus-matthew",
      titlePt: "Sinaítico — Mateus 6–7",
      titleEn: "Sinaiticus — Matthew 6–7",
      descriptionPt:
        "Página adicional do Códex Sinaítico com Mateus 6:32–7:27, ilustrando o formato de quatro colunas típico deste códice.",
      descriptionEn:
        "Additional page of Codex Sinaiticus with Matthew 6:32–7:27, illustrating the four-column format typical of this codex.",
      period: "4th century CE",
      institution: "British Library",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Codex_Sinaiticus_Matthew_6,32-7,27.JPG",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Codex_Sinaiticus_Matthew_6%2C32-7%2C27.JPG",
      license: "Public domain",
      credit: "Leszek Jańczuk / Wikimedia Commons",
      altPt: "Página do Códex Sinaítico com texto de Mateus",
      altEn: "Page of Codex Sinaiticus with Matthew text",
      tags: ["manuscript", "sinaiticus", "matthew", "uncial"],
    },
  ],
};

export const historicalImages = imagesData.images

export const imageEditorialNote = {
  pt: imagesData.editorialNotePt,
  en: imagesData.editorialNoteEn,
}

export function getImageById(id: string): HistoricalImage | undefined {
  return historicalImages.find((image) => image.id === id)
}
