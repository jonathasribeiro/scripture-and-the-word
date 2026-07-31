export interface ModernTheologianEntry {
  id: string
  namePt: string
  nameEn: string
  dates: string
  tradition: string
  scriptureWordPositionPt: string
  scriptureWordPositionEn: string
  keyWorks: string[]
  notesPt: string
  notesEn: string
  sources: string[]
}

export const modernTheologians: ModernTheologianEntry[] = [
  {
    id: 'barth',
    namePt: 'Karl Barth',
    nameEn: 'Karl Barth',
    dates: '1886–1968',
    tradition: 'Neo-orthodox / dialectical theology',
    scriptureWordPositionPt:
      'A Palavra de Deus é primariamente Jesus Cristo; Escritura é testemunho canônico que se torna Palavra no evento da revelação pelo Espírito. Distingue Palavra revelada, escrita e pregada (CD I/1–I/2).',
    scriptureWordPositionEn:
      'The Word of God is primarily Jesus Christ; Scripture is the canonical witness that becomes Word in the event of revelation by the Spirit. Distinguishes revealed, written, and preached Word (CD I/1–I/2).',
    keyWorks: ['Church Dogmatics I/1–I/2', 'The Word of God and the Word of Man', 'Evangelical Theology'],
    notesPt:
      'Não equaciona inspiração com inerrância verbal clássica; rejeita tanto liberalismo quanto biblicismo objetivista.',
    notesEn:
      'Does not equate inspiration with classical verbal inerrancy; rejects both liberalism and objectivist biblicism.',
    sources: [
      'https://archive.org/search?query=Church%20Dogmatics%20Barth',
      'https://scholar.google.com/scholar?q=Karl+Barth+Church+Dogmatics+Word+of+God',
    ],
  },
  {
    id: 'brunner',
    namePt: 'Emil Brunner',
    nameEn: 'Emil Brunner',
    dates: '1889–1966',
    tradition: 'Neo-orthodox / personalist',
    scriptureWordPositionPt:
      'Revelação como encontro pessoal (Ich-Du); Escritura testemunha a Palavra viva, sem ser idêntica à revelação em si.',
    scriptureWordPositionEn:
      'Revelation as personal encounter (I–Thou); Scripture witnesses to the living Word without being identical to revelation itself.',
    keyWorks: ['The Mediator', 'Revelation and Reason', 'Dogmatics'],
    notesPt:
      'Debate famoso com Barth sobre “ponto de contato”; Escritura sob Cristo como Palavra pessoal.',
    notesEn:
      'Famous debate with Barth on the “point of contact”; Scripture under Christ as personal Word.',
    sources: [
      'https://scholar.google.com/scholar?q=Emil+Brunner+Revelation+and+Reason',
      'https://archive.org/search?query=Emil%20Brunner%20Dogmatics',
    ],
  },
  {
    id: 'bultmann',
    namePt: 'Rudolf Bultmann',
    nameEn: 'Rudolf Bultmann',
    dates: '1884–1976',
    tradition: 'Existentialist NT theology / demythologizing',
    scriptureWordPositionPt:
      'O kerygma proclama a Palavra que chama à decisão existencial; a Escritura contém mitologia cosmologia antiga a ser interpretada, não reproduzida.',
    scriptureWordPositionEn:
      'The kerygma proclaims the Word that calls to existential decision; Scripture contains ancient cosmological mythology to be interpreted, not reproduced.',
    keyWorks: ['New Testament and Mythology', 'Theology of the New Testament', 'Jesus Christ and Mythology'],
    notesPt:
      'Influente e controverso; separa fortemente historicidade mítica e verdade existencial do evangelho.',
    notesEn:
      'Influential and controversial; sharply separates mythical historicity and the gospel’s existential truth.',
    sources: [
      'https://scholar.google.com/scholar?q=Bultmann+New+Testament+and+Mythology',
      'https://archive.org/search?query=Bultmann%20Theology%20of%20the%20New%20Testament',
    ],
  },
  {
    id: 'cullmann',
    namePt: 'Oscar Cullmann',
    nameEn: 'Oscar Cullmann',
    dates: '1902–1999',
    tradition: 'Salvation-history (Heilsgeschichte)',
    scriptureWordPositionPt:
      'Escritura narra a história da salvação centrada em Cristo; Palavra e evento histórico se articulam sem reduzir o evangelho a mito existencial.',
    scriptureWordPositionEn:
      'Scripture narrates salvation history centered on Christ; Word and historical event are joined without reducing the gospel to existential myth.',
    keyWorks: ['Christ and Time', 'The Christology of the New Testament', 'Salvation in History'],
    notesPt:
      'Alternativa a Bultmann: história redentora objetiva na Escritura.',
    notesEn:
      'Alternative to Bultmann: objective redemptive history in Scripture.',
    sources: [
      'https://scholar.google.com/scholar?q=Oscar+Cullmann+Christ+and+Time',
      'https://archive.org/search?query=Cullmann%20Christ%20and%20Time',
    ],
  },
  {
    id: 'ff-bruce',
    namePt: 'F. F. Bruce',
    nameEn: 'F. F. Bruce',
    dates: '1910–1990',
    tradition: 'Evangelical biblical scholarship',
    scriptureWordPositionPt:
      'Defende a confiabilidade histórica e a autoridade das Escrituras; cânon como reconhecimento eclesial de livros autoritativos, não criação arbitrária.',
    scriptureWordPositionEn:
      'Defends the historical reliability and authority of the Scriptures; canon as ecclesial recognition of authoritative books, not arbitrary creation.',
    keyWorks: ['The Canon of Scripture', 'The New Testament Documents', 'Paul: Apostle of the Heart Set Free'],
    notesPt:
      'Referência evangélica clássica sobre cânon e historicidade.',
    notesEn:
      'Classic evangelical reference on canon and historicity.',
    sources: [
      'https://scholar.google.com/scholar?q=F.F.+Bruce+The+Canon+of+Scripture',
      'https://archive.org/search?query=F.%20F.%20Bruce%20Canon%20of%20Scripture',
    ],
  },
  {
    id: 'packer',
    namePt: 'J. I. Packer',
    nameEn: 'J. I. Packer',
    dates: '1926–2020',
    tradition: 'Evangelical Anglican / Reformed',
    scriptureWordPositionPt:
      'Escritura é Palavra de Deus escrita, autoritativa e suficiente; critica o liberalismo e defende inspiração contra reducionismos (Fundamentalism and the Word of God).',
    scriptureWordPositionEn:
      'Scripture is the written Word of God, authoritative and sufficient; critiques liberalism and defends inspiration against reductionisms (Fundamentalism and the Word of God).',
    keyWorks: ['Fundamentalism and the Word of God', 'Knowing God', 'Concise Theology'],
    notesPt:
      'Articulação evangélica clássica de autoridade bíblica no século XX.',
    notesEn:
      'Classic twentieth-century evangelical articulation of biblical authority.',
    sources: [
      'https://scholar.google.com/scholar?q=J.I.+Packer+Fundamentalism+and+the+Word+of+God',
      'https://archive.org/search?query=Packer%20Fundamentalism%20and%20the%20Word%20of%20God',
    ],
  },
  {
    id: 'nt-wright',
    namePt: 'N. T. Wright',
    nameEn: 'N. T. Wright',
    dates: '1948–',
    tradition: 'Anglican / New Perspective dialogue partner',
    scriptureWordPositionPt:
      'Autoridade da Escritura como autoridade de Deus exercida através da narrativa bíblica e da missão da igreja; critica tanto biblicismo a-histórico quanto liberalismo.',
    scriptureWordPositionEn:
      'Scripture’s authority as God’s authority exercised through the biblical narrative and the church’s mission; critiques both a-historical biblicism and liberalism.',
    keyWorks: ['Scripture and the Authority of God', 'The New Testament and the People of God', 'Jesus and the Victory of God'],
    notesPt:
      'Palavra e autoridade em chave narrativo-histórico-missionária.',
    notesEn:
      'Word and authority in a narrative-historical-missional key.',
    sources: [
      'https://scholar.google.com/scholar?q=N.T.+Wright+Scripture+and+the+Authority+of+God',
      'https://ntwrightpage.com/',
    ],
  },
  {
    id: 'vanhoozer',
    namePt: 'Kevin J. Vanhoozer',
    nameEn: 'Kevin J. Vanhoozer',
    dates: '1957–',
    tradition: 'Evangelical / theological hermeneutics',
    scriptureWordPositionPt:
      'Escritura como ato de discurso divino-canônico (drama da doutrina); autoridade comunicativa de Deus no cânon, além de proposições isoladas.',
    scriptureWordPositionEn:
      'Scripture as divine-canonical speech act (drama of doctrine); God’s communicative authority in the canon, beyond isolated propositions.',
    keyWorks: ['The Drama of Doctrine', 'Is There a Meaning in This Text?', 'Biblical Authority after Babel', 'Mere Christian Hermeneutics'],
    notesPt:
      'Integra teoria do ato de fala, cânon e teologia evangélica.',
    notesEn:
      'Integrates speech-act theory, canon, and evangelical theology.',
    sources: [
      'https://scholar.google.com/scholar?q=Kevin+Vanhoozer+Drama+of+Doctrine',
      'https://scholar.google.com/scholar?q=Vanhoozer+Biblical+Authority+after+Babel',
    ],
  },
  {
    id: 'enns',
    namePt: 'Peter Enns',
    nameEn: 'Peter Enns',
    dates: '1961–',
    tradition: 'Evangelical / progressive evangelical biblical studies',
    scriptureWordPositionPt:
      'Inspiração “encarnacional”: Escritura é palavra divina em formas humanas históricas; tensiona inerrância clássica com dados ANE e crítica bíblica.',
    scriptureWordPositionEn:
      '“Incarnational” inspiration: Scripture is divine word in historical human forms; tensions classical inerrancy with ANE data and biblical criticism.',
    keyWorks: ['Inspiration and Incarnation', 'The Evolution of Adam', 'The Bible Tells Me So'],
    notesPt:
      'Influente e disputado no evangelicalismo contemporâneo.',
    notesEn:
      'Influential and contested in contemporary evangelicalism.',
    sources: [
      'https://scholar.google.com/scholar?q=Peter+Enns+Inspiration+and+Incarnation',
      'https://peteenns.com/',
    ],
  },
  {
    id: 'heiser',
    namePt: 'Michael S. Heiser',
    nameEn: 'Michael S. Heiser',
    dates: '1963–2023',
    tradition: 'Evangelical ANE / biblical theology',
    scriptureWordPositionPt:
      'Escritura lida no horizonte do mundo espiritual do ANE; autoridade bíblica com hermenêutica de contexto divino-conselho, sem negar inspiração.',
    scriptureWordPositionEn:
      'Scripture read against the ANE spiritual world horizon; biblical authority with divine-council contextual hermeneutics, without denying inspiration.',
    keyWorks: ['The Unseen Realm', 'Supernatural', 'The Bible Unfiltered'],
    notesPt:
      'Popularizou leituras do “conselho divino”; posição evangélica não liberal.',
    notesEn:
      'Popularized “divine council” readings; evangelical, not liberal, stance.',
    sources: [
      'https://scholar.google.com/scholar?q=Michael+Heiser+Unseen+Realm',
      'https://drmsh.com/',
    ],
  },
  {
    id: 'keener',
    namePt: 'Craig S. Keener',
    nameEn: 'Craig S. Keener',
    dates: '1960–',
    tradition: 'Evangelical NT / socio-historical',
    scriptureWordPositionPt:
      'Defende confiabilidade dos Evangelhos e Atos com documentação histórico-cultural massiva; Escritura como testemunho histórico-teológico confiável.',
    scriptureWordPositionEn:
      'Defends the reliability of the Gospels and Acts with massive historical-cultural documentation; Scripture as reliable historical-theological witness.',
    keyWorks: ['Miracles', 'Acts: An Exegetical Commentary', 'The Historical Jesus of the Gospels', 'Spirit Hermeneutics'],
    notesPt:
      'Erudição evangélica de alto volume documental.',
    notesEn:
      'High-documentation evangelical scholarship.',
    sources: [
      'https://scholar.google.com/scholar?q=Craig+Keener+Miracles',
      'https://craigkeener.com/',
    ],
  },
  {
    id: 'bauckham',
    namePt: 'Richard Bauckham',
    nameEn: 'Richard Bauckham',
    dates: '1946–',
    tradition: 'British NT / historical Jesus & Gospels',
    scriptureWordPositionPt:
      'Evangelhos como testemunho de eyewitnesses; autoridade cristológica alta (Jesus e a identidade de Deus) sem reducionismo liberal clássico.',
    scriptureWordPositionEn:
      'Gospels as eyewitness testimony; high christological authority (Jesus and the identity of God) without classical liberal reductionism.',
    keyWorks: ['Jesus and the Eyewitnesses', 'Jesus and the God of Israel', 'The Theology of the Book of Revelation'],
    notesPt:
      'Impacto forte no debate sobre tradição oral e testemunhas oculares.',
    notesEn:
      'Strong impact on debates about oral tradition and eyewitnesses.',
    sources: [
      'https://scholar.google.com/scholar?q=Richard+Bauckham+Jesus+and+the+Eyewitnesses',
      'https://archive.org/search?query=Bauckham%20Jesus%20and%20the%20Eyewitnesses',
    ],
  },
  {
    id: 'metzger',
    namePt: 'Bruce M. Metzger',
    nameEn: 'Bruce M. Metzger',
    dates: '1914–2007',
    tradition: 'NT textual criticism / canon history',
    scriptureWordPositionPt:
      'Erudição textual e canônica: o texto do NT é transmissível com alto grau de recuperação; o cânon se formou por recepção eclesial histórica.',
    scriptureWordPositionEn:
      'Textual and canonical scholarship: the NT text is recoverable to a high degree; the canon formed through historical ecclesial reception.',
    keyWorks: ['The Text of the New Testament', 'The Canon of the New Testament', 'A Textual Commentary on the Greek New Testament'],
    notesPt:
      'Padrão acadêmico para crítica textual e história do cânon do NT.',
    notesEn:
      'Academic standard for NT textual criticism and canon history.',
    sources: [
      'https://scholar.google.com/scholar?q=Bruce+Metzger+Canon+of+the+New+Testament',
      'https://archive.org/search?query=Metzger%20Text%20of%20the%20New%20Testament',
    ],
  },
  {
    id: 'mcdonald',
    namePt: 'Lee Martin McDonald',
    nameEn: 'Lee Martin McDonald',
    dates: '1942–',
    tradition: 'Canon studies / biblical scholarship',
    scriptureWordPositionPt:
      'História do cânon como processo longo e complexo; autoridade dos livros e listas canônicas devem ser estudadas com nuance histórica.',
    scriptureWordPositionEn:
      'Canon history as a long, complex process; authority of books and canon lists must be studied with historical nuance.',
    keyWorks: ['The Biblical Canon', 'The Formation of the Christian Biblical Canon', 'The Canon Debate (ed. with Sanders)'],
    notesPt:
      'Referência moderna indispensável sobre formação canônica.',
    notesEn:
      'Indispensable modern reference on canonical formation.',
    sources: [
      'https://scholar.google.com/scholar?q=Lee+Martin+McDonald+Biblical+Canon',
      'https://scholar.google.com/scholar?q=McDonald+Formation+of+the+Christian+Biblical+Canon',
    ],
  },
  {
    id: 'barton',
    namePt: 'John Barton',
    nameEn: 'John Barton',
    dates: '1948–',
    tradition: 'British biblical studies / Anglican',
    scriptureWordPositionPt:
      'Abordagem histórico-crítica e teológica equilibrada; Escritura como coleção complexa com autoridade eclesial e literária diferenciada.',
    scriptureWordPositionEn:
      'Balanced historical-critical and theological approach; Scripture as a complex collection with differentiated ecclesial and literary authority.',
    keyWorks: ['Holy Writings, Sacred Text', 'A History of the Bible', 'The Nature of Biblical Criticism'],
    notesPt:
      'Síntese acessível e acadêmica da história da Bíblia.',
    notesEn:
      'Accessible academic synthesis of the Bible’s history.',
    sources: [
      'https://scholar.google.com/scholar?q=John+Barton+History+of+the+Bible',
      'https://scholar.google.com/scholar?q=John+Barton+Holy+Writings+Sacred+Text',
    ],
  },
  {
    id: 'tov',
    namePt: 'Emanuel Tov',
    nameEn: 'Emanuel Tov',
    dates: '1941–',
    tradition: 'Hebrew Bible textual criticism',
    scriptureWordPositionPt:
      'Crítica textual do AT: pluralidade de formas textuais (MT, LXX, Qumran); a “Palavra” escrita chega via transmissão histórica complexa.',
    scriptureWordPositionEn:
      'OT textual criticism: plurality of textual forms (MT, LXX, Qumran); the written “Word” arrives via complex historical transmission.',
    keyWorks: ['Textual Criticism of the Hebrew Bible', 'The Text-Critical Use of the Septuagint in Biblical Research'],
    notesPt:
      'Autoridade técnica global na crítica textual hebraica.',
    notesEn:
      'Global technical authority in Hebrew textual criticism.',
    sources: [
      'https://scholar.google.com/scholar?q=Emanuel+Tov+Textual+Criticism+of+the+Hebrew+Bible',
      'https://www.emanueltov.info/',
    ],
  },
  {
    id: 'law',
    namePt: 'Timothy Michael Law',
    nameEn: 'Timothy Michael Law',
    dates: '1979–',
    tradition: 'Septuagint studies',
    scriptureWordPositionPt:
      'A LXX como Bíblia grega do judaísmo helenístico e da igreja antiga; desafia narrativas simplistas do cânon protestante/católico.',
    scriptureWordPositionEn:
      'The LXX as the Greek Bible of Hellenistic Judaism and the early church; challenges simplistic Protestant/Catholic canon narratives.',
    keyWorks: ['When God Spoke Greek'],
    notesPt:
      'Introdução moderna influente à importância da Septuaginta.',
    notesEn:
      'Influential modern introduction to the Septuagint’s importance.',
    sources: [
      'https://scholar.google.com/scholar?q=Timothy+Michael+Law+When+God+Spoke+Greek',
      'https://global.oup.com/academic/product/when-god-spoke-greek-9780199781720',
    ],
  },
  {
    id: 'jobes',
    namePt: 'Karen H. Jobes',
    nameEn: 'Karen H. Jobes',
    dates: 'contemporary',
    tradition: 'Evangelical Septuagint / NT',
    scriptureWordPositionPt:
      'Com Silva, introduz a LXX como Escritura da igreja antiga e ferramenta exegética; autoridade bíblica com consciência textual grega.',
    scriptureWordPositionEn:
      'With Silva, introduces the LXX as Scripture of the early church and an exegetical tool; biblical authority with Greek textual awareness.',
    keyWorks: ['Invitation to the Septuagint (with Moisés Silva)', '1 Peter (BECNT)', 'Esther (NAC)'],
    notesPt:
      'Ponte evangélica entre estudos da LXX e uso pastoral-exegético.',
    notesEn:
      'Evangelical bridge between LXX studies and pastoral-exegetical use.',
    sources: [
      'https://scholar.google.com/scholar?q=Jobes+Silva+Invitation+to+the+Septuagint',
      'https://scholar.google.com/scholar?q=Karen+Jobes+Septuagint',
    ],
  },
  {
    id: 'silva',
    namePt: 'Moisés Silva',
    nameEn: 'Moisés Silva',
    dates: '1945–',
    tradition: 'Evangelical biblical linguistics',
    scriptureWordPositionPt:
      'Filologia e hermenêutica a serviço da Escritura; LXX e NT em continuidade linguística; autoridade bíblica com rigor lexical.',
    scriptureWordPositionEn:
      'Philology and hermeneutics in service of Scripture; LXX and NT in linguistic continuity; biblical authority with lexical rigor.',
    keyWorks: ['Invitation to the Septuagint (with Jobes)', 'Biblical Words and Their Meaning', 'Has the Church Misread the Bible?'],
    notesPt:
      'Referência evangélica em linguística bíblica e Septuaginta.',
    notesEn:
      'Evangelical reference in biblical linguistics and Septuagint.',
    sources: [
      'https://scholar.google.com/scholar?q=Moises+Silva+Biblical+Words+and+Their+Meaning',
      'https://scholar.google.com/scholar?q=Jobes+Silva+Invitation+to+the+Septuagint',
    ],
  },
  {
    id: 'kruger',
    namePt: 'Michael J. Kruger',
    nameEn: 'Michael J. Kruger',
    dates: 'contemporary',
    tradition: 'Reformed evangelical canon studies',
    scriptureWordPositionPt:
      'Cânon como propriedade da Escritura autoritativa (self-authentication) reconhecida pela igreja; critica modelos puramente sociológicos do cânon.',
    scriptureWordPositionEn:
      'Canon as a property of authoritative Scripture (self-authentication) recognized by the church; critiques purely sociological canon models.',
    keyWorks: ['Canon Revisited', 'The Question of Canon', 'Christianity at the Crossroads'],
    notesPt:
      'Defesa evangélico-reformada da origem e autoridade do cânon do NT.',
    notesEn:
      'Reformed-evangelical defense of the NT canon’s origin and authority.',
    sources: [
      'https://scholar.google.com/scholar?q=Michael+Kruger+Canon+Revisited',
      'https://www.michaeljkruger.com/',
    ],
  },
  {
    id: 'hart',
    namePt: 'David Bentley Hart',
    nameEn: 'David Bentley Hart',
    dates: '1965–',
    tradition: 'Eastern Christian / philosophical theology',
    scriptureWordPositionPt:
      'Tradução e ensaio teológico com ênfase na beleza e estranheza do NT grego; Escritura em horizonte metafísico-cristão oriental, crítico a certas formas de biblicismo moderno.',
    scriptureWordPositionEn:
      'Translation and theological essay emphasizing the beauty and strangeness of Greek NT; Scripture in an Eastern Christian metaphysical horizon, critical of certain modern biblicisms.',
    keyWorks: ['The New Testament: A Translation', 'The Beauty of the Infinite', 'That All Shall Be Saved'],
    notesPt:
      'Leitura literário-filosófica; posições soteriológicas controversas aparte da questão da Palavra.',
    notesEn:
      'Literary-philosophical reading; controversial soteriological views aside from the Word question.',
    sources: [
      'https://scholar.google.com/scholar?q=David+Bentley+Hart+New+Testament+Translation',
      'https://scholar.google.com/scholar?q=David+Bentley+Hart+Beauty+of+the+Infinite',
    ],
  },
]
