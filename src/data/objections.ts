import type { Objection } from './types'

export interface ObjectionEntry extends Objection {
  relatedTopics?: string[]
  keySources?: string[]
}

export const objections: ObjectionEntry[] = [
  {
    id: 'bible-claims-to-be-word',
    questionPt: 'A Bíblia afirma ser a Palavra de Deus.',
    questionEn: 'The Bible claims to be the Word of God.',
    answerPt:
      'Textos bíblicos afirmam falas divinas, inspiração e autoridade (p.ex. “assim diz o Senhor”, 2 Tm 3:16, 2 Pe 1:20–21). Isso não dissolve a distinção bíblica entre Cristo como Logos pessoal (Jo 1) e a graphē como Escritura inspirada. A tese não nega que a Escritura seja Palavra de Deus escrita; nega que “Palavra de Deus” se esgote no códice, sem Cristo, proclamação e Espírito. Afirmar inspiração é compatível com confessar Cristo como Palavra por excelência.',
    answerEn:
      'Biblical texts affirm divine speech, inspiration, and authority (e.g., “thus says the Lord,” 2 Tim 3:16, 2 Pet 1:20–21). That does not erase the biblical distinction between Christ as personal Logos (John 1) and graphē as inspired Scripture. The thesis does not deny that Scripture is God’s written Word; it denies that “Word of God” is exhausted by the codex apart from Christ, proclamation, and Spirit. Affirming inspiration is compatible with confessing Christ as Word par excellence.',
    relatedTopics: ['logos', 'graphe', 'inspiration'],
    keySources: [
      'B. B. Warfield, The Inspiration and Authority of the Bible',
      'J. I. Packer, Fundamentalism and the Word of God',
      'Karl Barth, Church Dogmatics I/1',
    ],
  },
  {
    id: 'jesus-is-word-so-bible-is-not',
    questionPt: 'Jesus é a Palavra, então a Bíblia não é.',
    questionEn: 'Jesus is the Word, so the Bible is not.',
    answerPt:
      'Falso dilema. João 1 identifica o Logos com a pessoa de Cristo; isso não cancela 2 Tm 3:16 nem o uso apostólico das Escrituras. A tradição cristã clássica (Irineu, Agostinho, Reformadores, Barth) articula níveis: Cristo (Palavra encarnada), Escritura (testemunho canônico), pregação (Palavra proclamada). Negar a Escritura porque Cristo é Logos invertiria o próprio testemunho escriturístico sobre Cristo.',
    answerEn:
      'False dilemma. John 1 identifies the Logos with Christ’s person; that does not cancel 2 Tim 3:16 or the apostolic use of the Scriptures. Classical Christian tradition (Irenaeus, Augustine, Reformers, Barth) articulates levels: Christ (incarnate Word), Scripture (canonical witness), preaching (proclaimed Word). Denying Scripture because Christ is Logos would invert Scripture’s own witness to Christ.',
    relatedTopics: ['logos', 'christology', 'neo-orthodoxy'],
    keySources: [
      'John 1; Hebrews 1:1–3',
      'Irenaeus, Against Heresies',
      'Barth, Church Dogmatics I/1–I/2',
    ],
  },
  {
    id: 'who-decides-which-parts',
    questionPt: 'Se a Bíblia apenas contém, quem decide quais partes são de Deus?',
    questionEn: 'If the Bible only contains the Word, who decides which parts are from God?',
    answerPt:
      'A formulação “apenas contém” pode ser liberal (demitologização seletiva) ou ortodoxa (Cristo/Escritura/pregação). A resposta acadêmica séria não entrega o texto a subjetivismo privado: a igreja reconhece o cânon; a regra de fé e a analogia da Escritura guiam a leitura; a inspiração abrange o cânon recebido, não um “canhão” interno arbitrário. Distinguir Logos pessoal e graphē não autoriza tesoura marcionita.',
    answerEn:
      'The wording “only contains” can be liberal (selective demythologizing) or orthodox (Christ/Scripture/preaching). A serious academic answer does not hand the text to private subjectivism: the church recognizes the canon; the rule of faith and the analogy of Scripture guide reading; inspiration covers the received canon, not an arbitrary internal “canon.” Distinguishing personal Logos and graphē does not authorize Marcionite scissors.',
    relatedTopics: ['canon', 'inspiration', 'rule-of-faith'],
    keySources: [
      'Metzger, The Canon of the New Testament',
      'Kruger, Canon Revisited',
      'Augustine, On Christian Doctrine',
    ],
  },
  {
    id: 'leads-to-liberalism',
    questionPt: 'Essa posição leva ao liberalismo.',
    questionEn: 'This position leads to liberalism.',
    answerPt:
      'Não necessariamente. Liberalismo clássico relativiza milagres, cristologia e autoridade canônica. Confessar Cristo como Logos e a Escritura como testemunho inspirado é a gramática de Atanásio, Calvino e Packer — não de Bultmann. O deslize liberal ocorre quando se separa o kerygma do testemunho canônico normativo. A tese acadêmica responsável mantém autoridade da Escritura sob o senhorio de Cristo, não sob a autonomia moderna.',
    answerEn:
      'Not necessarily. Classical liberalism relativizes miracles, Christology, and canonical authority. Confessing Christ as Logos and Scripture as inspired witness is the grammar of Athanasius, Calvin, and Packer — not of Bultmann. The liberal slide occurs when kerygma is severed from normative canonical witness. A responsible academic thesis keeps Scripture’s authority under Christ’s lordship, not under modern autonomy.',
    relatedTopics: ['liberalism', 'neo-orthodoxy', 'inerrancy'],
    keySources: [
      'Packer, Fundamentalism and the Word of God',
      'Vanhoozer, The Drama of Doctrine',
      'Bultmann, New Testament and Mythology (contrast)',
    ],
  },
  {
    id: 'tradition-above-scripture',
    questionPt: 'A tradição está acima das Escrituras.',
    questionEn: 'Tradition stands above Scripture.',
    answerPt:
      'Tradições divergem. No catolicismo pós-Trento/Vaticano II, Escritura e Tradição formam um depósito (Dei Verbum 9–10), com Magistério intérprete — não um simples “acima” vulgar. No Oriente, Escritura vive na tradição litúrgico-patrística. No protestantismo clássico, a tradição é ministerial, não magistral final. Historicamente, a tradição reconheceu o cânon; isso não prova superioridade ontológica da tradição sobre o texto apostólico.',
    answerEn:
      'Traditions differ. In post-Trent/Vatican II Catholicism, Scripture and Tradition form one deposit (Dei Verbum 9–10), with the Magisterium as interpreter — not a crude “above.” In the East, Scripture lives within liturgical-patristic tradition. In classical Protestantism, tradition is ministerial, not finally magisterial. Historically, tradition recognized the canon; that does not prove tradition’s ontological superiority over the apostolic text.',
    relatedTopics: ['tradition', 'magisterium', 'sola-scriptura'],
    keySources: [
      'Dei Verbum',
      'Calvin, Institutes I.6–9',
      'Basil, On the Holy Spirit',
    ],
  },
  {
    id: 'church-created-bible',
    questionPt: 'A Igreja criou a Bíblia.',
    questionEn: 'The Church created the Bible.',
    answerPt:
      'A igreja reconheceu, preservou, copiou e delimitou o cânon; não “inventou” o conteúdo apostólico ex nihilo. Modelos de Kruger (autoridade intrínseca reconhecida) e McDonald (processo histórico de recepção) devem ser lidos juntos. Listas (Muratori, Atanásio, concílios africanos) documentam reconhecimento, não fabricação literária dos Evangelhos e Paulo. Criar o códice canônico ≠ criar a revelação.',
    answerEn:
      'The church recognized, preserved, copied, and delimited the canon; it did not “invent” apostolic content ex nihilo. Kruger’s models (intrinsic authority recognized) and McDonald’s (historical reception process) should be read together. Lists (Muratorian, Athanasius, African councils) document recognition, not literary fabrication of the Gospels and Paul. Creating the canonical codex ≠ creating revelation.',
    relatedTopics: ['canon', 'church', 'authority'],
    keySources: [
      'McDonald, The Biblical Canon',
      'Kruger, Canon Revisited',
      'Eusebius, Ecclesiastical History 3.25',
    ],
  },
  {
    id: 'canon-fell-from-heaven',
    questionPt: 'O cânon caiu pronto do céu.',
    questionEn: 'The canon fell ready-made from heaven.',
    answerPt:
      'Também falso. Houve homologoumena e antilegomena (Eusébio); debates sobre Hebreus, Apocalipse, Pastor, etc.; estabilização gradual. Inspiração dos escritos e história da recepção canônica não são idênticas. Negar um “cânon meteórico” não implica relativismo: o consenso eclesial antigo em torno do núcleo apostólico é documentável.',
    answerEn:
      'Also false. There were homologoumena and antilegomena (Eusebius); debates over Hebrews, Revelation, Hermas, etc.; gradual stabilization. Inspiration of writings and the history of canonical reception are not identical. Denying a “meteoric canon” does not imply relativism: ancient ecclesial consensus around the apostolic core is documentable.',
    relatedTopics: ['canon', 'eusebius', 'reception'],
    keySources: [
      'Metzger, The Canon of the New Testament',
      'McDonald, The Formation of the Christian Biblical Canon',
      'Athanasius, Festal Letter 39',
    ],
  },
  {
    id: 'luther-removed-books',
    questionPt: 'Lutero retirou livros.',
    questionEn: 'Luther removed books.',
    answerPt:
      'Lutero reordenou e expressou juízos (Tiago como “epístola de palha” em prefácio precoce, depois matizado), e seguiu o AT hebraico para doutrina, colocando apócrifos à parte — prática alinhada a Jerônimo e a humanistas, não um furto singular. Ele não removeu os 27 do NT das Bíblias luteranas; o cânon luterano manteve o NT completo com discussões de valor.',
    answerEn:
      'Luther reordered and voiced judgments (James as a “right strawy epistle” in an early preface, later nuanced), and followed the Hebrew OT for doctrine, placing the Apocrypha apart — a practice aligned with Jerome and humanists, not a unique theft. He did not remove the 27 NT books from Lutheran Bibles; the Lutheran canon kept the full NT with value discussions.',
    relatedTopics: ['luther', 'canon', 'apocrypha'],
    keySources: [
      'Luther’s Prefaces to the New Testament',
      'Bruce, The Canon of Scripture',
      'Book of Concord / Lutheran Bible tradition',
    ],
  },
  {
    id: 'catholic-added-books',
    questionPt: 'A Igreja Católica adicionou livros.',
    questionEn: 'The Catholic Church added books.',
    answerPt:
      'Simplificação. Livros deuterocanônicos circularam na LXX e na igreja latina por séculos; Hipona/Cartago e depois Trento definiriam listas católicas com precisão dogmática. Protestantes, seguindo Hebraica veritas (Jerônimo) e o cânon judaico posterior, restringiram o AT dogmático. Não é “invenção quinhentista” simples nem “sempre óbvio” de um lado só — é divergência de critérios canônicos antigos.',
    answerEn:
      'Oversimplification. Deuterocanonical books circulated in the LXX and Latin church for centuries; Hippo/Carthage and later Trent would define Catholic lists with dogmatic precision. Protestants, following Hebraica veritas (Jerome) and the later Jewish canon, restricted the dogmatic OT. It is neither a simple “sixteenth-century invention” nor “always obvious” on one side alone — it is a divergence of ancient canonical criteria.',
    relatedTopics: ['deuterocanon', 'trent', 'jerome'],
    keySources: [
      'Council of Trent, Session IV',
      'Jerome, Prologus Galeatus',
      'Beckwith, The Old Testament Canon of the New Testament Church',
    ],
  },
  {
    id: 'lxx-proves-catholic-canon',
    questionPt: 'A Septuaginta prova o cânon católico.',
    questionEn: 'The Septuagint proves the Catholic canon.',
    answerPt:
      'A LXX é corpus textual e tradutório complexo, não uma “lista Trento” monolítica. Manuscritos gregos variam no conteúdo e ordem (Sinaiticus, Vaticanus, Alexandrinus). A igreja antiga usou a LXX amplamente, mas listas patrísticas divergem (Melito, Cirilo de Jerusalém, Atanásio, Agostinho). A LXX prova a importância do AT grego, não um cânon único automático.',
    answerEn:
      'The LXX is a complex textual and translational corpus, not a monolithic “Trent list.” Greek manuscripts vary in contents and order (Sinaiticus, Vaticanus, Alexandrinus). The early church used the LXX widely, but patristic lists diverge (Melito, Cyril of Jerusalem, Athanasius, Augustine). The LXX proves the importance of the Greek OT, not one automatic canon.',
    relatedTopics: ['septuagint', 'canon', 'manuscripts'],
    keySources: [
      'Law, When God Spoke Greek',
      'Jobes & Silva, Invitation to the Septuagint',
      'McDonald, The Biblical Canon',
    ],
  },
  {
    id: 'hebrew-canon-proves-protestant',
    questionPt: 'O cânon hebraico prova o cânon protestante.',
    questionEn: 'The Hebrew canon proves the Protestant canon.',
    answerPt:
      'O cânon judaico tripartite (Lei, Profetas, Escritos) é testemunhado de modos diversos (Josefo, 4 Esdras, tradições rabínicas) e estabiliza-se no judaísmo pós-70 de forma complexa. Protestantes têm forte argumento em Jerônimo e no uso dogmático restrito, mas o NT cita a LXX e a igreja antiga não foi unânime. O cânon hebraico é critério peso-pesado, não “prova geométrica” isolada.',
    answerEn:
      'The Jewish tripartite canon (Law, Prophets, Writings) is witnessed in diverse ways (Josephus, 4 Ezra, rabbinic traditions) and stabilizes in post-70 Judaism complexly. Protestants have a strong argument in Jerome and restricted dogmatic use, but the NT cites the LXX and the early church was not unanimous. The Hebrew canon is a heavyweight criterion, not an isolated “geometric proof.”',
    relatedTopics: ['hebrew-canon', 'josephus', 'jerome'],
    keySources: [
      'Josephus, Against Apion 1.38–42',
      'Beckwith, The Old Testament Canon of the New Testament Church',
      'Tov, Textual Criticism of the Hebrew Bible',
    ],
  },
  {
    id: 'nt-cites-deuterocanonicals',
    questionPt: 'O Novo Testamento cita os deuterocanônicos.',
    questionEn: 'The New Testament cites the deuterocanonicals.',
    answerPt:
      'Há alusões e paralelos (p.ex. Sabedoria, Sirácida) discutidos na erudição; citações formais com fórmula de Escritura são tipicamente do cânon hebraico/LXX protocanônico. Alusão ≠ canonicidade dogmática (Paulo cita poetas pagãos em At 17). O dado favorece familiaridade com literatura judaica ampla, não um silogismo automático para Trento ou Westminster.',
    answerEn:
      'There are allusions and parallels (e.g., Wisdom, Sirach) discussed in scholarship; formal citations with Scripture formulas are typically from the Hebrew/protocanonical LXX corpus. Allusion ≠ dogmatic canonicity (Paul cites pagan poets in Acts 17). The data favor familiarity with broad Jewish literature, not an automatic syllogism for Trent or Westminster.',
    relatedTopics: ['deuterocanon', 'intertextuality', 'canon'],
    keySources: [
      'Bruce, The Canon of Scripture',
      'McDonald, The Biblical Canon',
      'Jobes & Silva, Invitation to the Septuagint',
    ],
  },
  {
    id: 'jesus-used-lxx',
    questionPt: 'Jesus usava a Septuaginta.',
    questionEn: 'Jesus used the Septuagint.',
    answerPt:
      'Jesus ensinou em contexto judaico-palestinense (aramaico/hebraico). As citações nos Evangelhos gregos frequentemente seguem a LXX porque os evangelistas escreveram em grego. Isso prova o papel da LXX na transmissão cristã primitiva, não que Jesus carregasse um códice Rahlfs. Distinguir língua de Jesus, forma textual das citações e cânon dogmático é obrigatório.',
    answerEn:
      'Jesus taught in a Jewish-Palestinian context (Aramaic/Hebrew). Citations in the Greek Gospels often follow the LXX because the evangelists wrote in Greek. That proves the LXX’s role in earliest Christian transmission, not that Jesus carried a Rahlfs codex. Distinguishing Jesus’ language, the textual form of citations, and dogmatic canon is mandatory.',
    relatedTopics: ['septuagint', 'jesus', 'gospels'],
    keySources: [
      'Law, When God Spoke Greek',
      'Jobes & Silva, Invitation to the Septuagint',
      'Tov, Textual Criticism of the Hebrew Bible',
    ],
  },
  {
    id: 'fathers-agreed-on-canon',
    questionPt: 'Os Pais da Igreja concordavam sobre o cânon.',
    questionEn: 'The Church Fathers agreed on the canon.',
    answerPt:
      'Houve amplo consenso sobre o núcleo (quatro Evangelhos, Paulo), e divergência nas margens (Apocalipse, Hebreus, Pastor, deuterocanônicos). Eusébio documenta disputas; listas de Cirilo, Atanásio, Gregório Nazianzeno e Agostinho não são idênticas. Consenso progressivo ≠ unanimidade precoce total.',
    answerEn:
      'There was broad consensus on the core (four Gospels, Paul), and divergence at the margins (Revelation, Hebrews, Hermas, deuterocanonicals). Eusebius documents disputes; lists of Cyril, Athanasius, Gregory Nazianzen, and Augustine are not identical. Progressive consensus ≠ total early unanimity.',
    relatedTopics: ['church-fathers', 'canon', 'eusebius'],
    keySources: [
      'Eusebius, Ecclesiastical History 3.25',
      'Metzger, The Canon of the New Testament',
      'Athanasius, Festal Letter 39',
    ],
  },
  {
    id: 'blue-bible-incomplete',
    questionPt: 'A Bíblia azulzinha é uma Bíblia incompleta.',
    questionEn: 'The little blue Bible is an incomplete Bible.',
    answerPt:
      'Depende do critério canônico. Edições protestantes sem deuterocanônicos seguem o AT hebraico para doutrina; edições católicas/ortodoxas incluem livros adicionais segundo suas tradições. “Incompleta” pressupõe o cânon rival como norma. Academicamente: há Bíblias com cânones diferentes, cada qual coerente com uma história de recepção — o debate é de cânon, não de impressão deficitária infantil.',
    answerEn:
      'It depends on the canonical criterion. Protestant editions without deuterocanonicals follow the Hebrew OT for doctrine; Catholic/Orthodox editions include additional books according to their traditions. “Incomplete” presupposes the rival canon as norm. Academically: there are Bibles with different canons, each coherent with a reception history — the debate is about canon, not a childish printing deficit.',
    relatedTopics: ['canon', 'deuterocanon', 'translations'],
    keySources: [
      'Bruce, The Canon of Scripture',
      'Dei Verbum / Catechism of the Catholic Church',
      'Westminster Confession I',
    ],
  },
  {
    id: 'word-bible-in-bible',
    questionPt: 'A palavra Bíblia aparece na Bíblia?',
    questionEn: 'Does the word Bible appear in the Bible?',
    answerPt:
      'A palavra moderna “Bíblia” (do grego biblía, “livros”) não é um título interno do cânon como nome próprio. A Escritura usa termos como graphē, hiera grammata, “Lei e Profetas”, etc. A ausência do substantivo moderno não enfraquece a realidade de Escrituras sagradas reconhecidas; é objeção linguística superficial.',
    answerEn:
      'The modern word “Bible” (from Greek biblía, “books”) is not an internal proper title of the canon. Scripture uses terms such as graphē, hiera grammata, “Law and Prophets,” etc. The absence of the modern noun does not weaken the reality of recognized sacred Scriptures; it is a superficial linguistic objection.',
    relatedTopics: ['graphe', 'terminology'],
    keySources: [
      '2 Timothy 3:15–16',
      'BDAG / standard NT lexica on graphē',
      'Barton, A History of the Bible',
    ],
  },
  {
    id: 'logos-rhema-spiritual-categories',
    questionPt: 'Logos e rhema são categorias espirituais diferentes.',
    questionEn: 'Logos and rhema are different spiritual categories.',
    answerPt:
      'No grego bíblico, lógos e rhēma sobrepõem-se semanticamente (ambos podem significar “palavra/dito”); não sustentam, por si, a doutrina popular que opõe “Bíblia = logos” e “palavra falada atual = rhema”. Distinções teológicas úteis (Escritura, proclamação, Cristo) devem basear-se no uso contextual e na dogmática histórica, não em dicotomia lexical moderna. Consulte léxicos (BDAG) e usos em LXX/NT.',
    answerEn:
      'In biblical Greek, lógos and rhēma overlap semantically (both can mean “word/saying”); they do not by themselves support the popular doctrine opposing “Bible = logos” and “current spoken word = rhema.” Useful theological distinctions (Scripture, proclamation, Christ) should rest on contextual usage and historical dogmatics, not a modern lexical dichotomy. Consult lexica (BDAG) and LXX/NT usage.',
    relatedTopics: ['logos', 'rhema', 'linguistics'],
    keySources: [
      'BDAG entries on logos and rhēma',
      'Jobes & Silva, Invitation to the Septuagint',
      'Silva, Biblical Words and Their Meaning',
    ],
  },
]
