export interface ReformerEntry {
  id: string
  namePt: string
  nameEn: string
  dates: string
  tradition: string
  wordOfGodPt: string
  wordOfGodEn: string
  scripturePt: string
  scriptureEn: string
  preachingPt: string
  preachingEn: string
  sacramentsPt: string
  sacramentsEn: string
  traditionPt: string
  traditionEn: string
  canonPt: string
  canonEn: string
  apocryphaPt: string
  apocryphaEn: string
  keyWorks: string[]
  sources: string[]
}

export const reformers: ReformerEntry[] = [
  {
    id: 'luther',
    namePt: 'Martinho Lutero',
    nameEn: 'Martin Luther',
    dates: '1483–1546',
    tradition: 'Lutheran Reformation',
    wordOfGodPt:
      'A Palavra de Deus é primariamente o evangelho de Cristo proclamado; Cristo é o centro. A Escritura é Palavra porque testemunha Cristo (was Christum treibet).',
    wordOfGodEn:
      'The Word of God is primarily the gospel of Christ proclaimed; Christ is the center. Scripture is Word because it drives Christ (was Christum treibet).',
    scripturePt:
      'Sola Scriptura: a Escritura é norma final sobre concílios e papado. Distingue clareza externa/interna e prioriza o cânon que promove Cristo.',
    scriptureEn:
      'Sola Scriptura: Scripture is the final norm over councils and papacy. Distinguishes external/internal clarity and prioritizes the canon that promotes Christ.',
    preachingPt:
      'A pregação do evangelho é meio da graça; a Palavra viva atua na proclamação fiel.',
    preachingEn:
      'Gospel preaching is a means of grace; the living Word acts in faithful proclamation.',
    sacramentsPt:
      'Batismo e Ceia como meios da graça ligados à Palavra; presença real na Ceia (contra memorialismo zwingliano).',
    sacramentsEn:
      'Baptism and the Supper as means of grace tied to the Word; real presence in the Supper (against Zwinglian memorialism).',
    traditionPt:
      'Tradição e Padres úteis quando servem ao evangelho; rejeita tradição que contradiz a Escritura.',
    traditionEn:
      'Tradition and the Fathers are useful when they serve the gospel; rejects tradition that contradicts Scripture.',
    canonPt:
      'Recebe o NT com juízos de valor (Tiago, Judas, Hebreus, Apocalipse em tensão); AT alinhado ao hebraico para doutrina.',
    canonEn:
      'Receives the NT with value judgments (James, Jude, Hebrews, Revelation in tension); OT aligned with Hebrew for doctrine.',
    apocryphaPt:
      'Livros apócrifos/deuterocanônicos úteis para leitura, não para estabelecer doutrina (cf. prefácios bíblicos).',
    apocryphaEn:
      'Apocryphal/deuterocanonical books useful for reading, not for establishing doctrine (cf. biblical prefaces).',
    keyWorks: ['To the Christian Nobility', 'Babylonian Captivity', 'Freedom of a Christian', 'Prefaces to the Bible'],
    sources: [
      'https://bookofconcord.org/',
      'https://www.ccel.org/ccel/luther',
      'https://archive.org/search?query=Luther%27s%20Works',
    ],
  },
  {
    id: 'melanchthon',
    namePt: 'Filipe Melanchthon',
    nameEn: 'Philip Melanchthon',
    dates: '1497–1560',
    tradition: 'Lutheran Reformation / humanist',
    wordOfGodPt:
      'Palavra de Deus como evangelho e doutrina bíblica articulada; ênfase na clareza pedagógica da Escritura.',
    wordOfGodEn:
      'Word of God as gospel and articulated biblical doctrine; emphasis on Scripture’s pedagogical clarity.',
    scripturePt:
      'Escritura como norma da fé na Confissão de Augsburgo e Loci Communes; método humanista a serviço da Reforma.',
    scriptureEn:
      'Scripture as the norm of faith in the Augsburg Confession and Loci Communes; humanist method serving the Reformation.',
    preachingPt:
      'Pregação doutrinária e catequética; Palavra forma a igreja confessante.',
    preachingEn:
      'Doctrinal and catechetical preaching; the Word forms the confessing church.',
    sacramentsPt:
      'Alinha-se à teologia luterana dos meios da graça, com formulações que buscaram consenso eclesial.',
    sacramentsEn:
      'Aligns with Lutheran means-of-grace theology, with formulations seeking ecclesial consensus.',
    traditionPt:
      'Usa Padres e filosofia como auxiliares subordinados à Escritura.',
    traditionEn:
      'Uses the Fathers and philosophy as auxiliaries subordinate to Scripture.',
    canonPt:
      'Cânon protestante padrão na prática confessional luterana.',
    canonEn:
      'Standard Protestant canon in Lutheran confessional practice.',
    apocryphaPt:
      'Apócrifos como leitura edificantemente subordinada, não norma dogmática.',
    apocryphaEn:
      'Apocrypha as edifying subordinate reading, not dogmatic norm.',
    keyWorks: ['Loci Communes', 'Augsburg Confession (drafter)', 'Apology of the Augsburg Confession'],
    sources: [
      'https://bookofconcord.org/augsburg-confession/',
      'https://www.ccel.org/ccel/schaff/creeds1.x.i.html',
      'https://archive.org/search?query=Melanchthon%20Loci',
    ],
  },
  {
    id: 'calvin',
    namePt: 'João Calvino',
    nameEn: 'John Calvin',
    dates: '1509–1564',
    tradition: 'Reformed',
    wordOfGodPt:
      'Escritura é Palavra de Deus objetiva; o Espírito dá testemunho interno (autopistia). Cristo é o fim da Lei e o conteúdo do evangelho.',
    wordOfGodEn:
      'Scripture is the objective Word of God; the Spirit gives internal testimony (autopistia). Christ is the end of the Law and the content of the gospel.',
    scripturePt:
      'Sola Scriptura com clareza suficiente para salvação; Escritura norma da doutrina, culto e disciplina (Institutes).',
    scriptureEn:
      'Sola Scriptura with clarity sufficient for salvation; Scripture norms doctrine, worship, and discipline (Institutes).',
    preachingPt:
      'Pregação expositiva contínua; a Palavra pregada é instrumento ordinário da graça.',
    preachingEn:
      'Continuous expository preaching; the preached Word is the ordinary instrument of grace.',
    sacramentsPt:
      'Sinais e selos da promessa; presença espiritual de Cristo na Ceia (contra memorialismo puro e contra transubstanciação).',
    sacramentsEn:
      'Signs and seals of the promise; spiritual presence of Christ in the Supper (against bare memorialism and against transubstantiation).',
    traditionPt:
      'Tradição e concílios subordinados; Padres citados quando confirmam a Escritura.',
    traditionEn:
      'Tradition and councils subordinated; Fathers cited when they confirm Scripture.',
    canonPt:
      'Cânon hebraico para o AT; 27 livros do NT; rejeição dogmática dos deuterocanônicos.',
    canonEn:
      'Hebrew canon for the OT; 27 NT books; dogmatic rejection of the deuterocanonicals.',
    apocryphaPt:
      'Lidos para história/edificação, sem autoridade para doutrina (cf. Institutes e práticas genebrinas).',
    apocryphaEn:
      'Read for history/edification, without authority for doctrine (cf. Institutes and Genevan practice).',
    keyWorks: ['Institutes of the Christian Religion', 'Commentaries', 'Geneva Catechism'],
    sources: [
      'https://www.ccel.org/ccel/calvin/institutes',
      'https://archive.org/details/institutesofchr01calv',
      'https://www.ccel.org/ccel/calvin/calcom',
    ],
  },
  {
    id: 'zwingli',
    namePt: 'Ulrico Zuínglio',
    nameEn: 'Ulrich Zwingli',
    dates: '1484–1531',
    tradition: 'Swiss Reformed',
    wordOfGodPt:
      'Palavra de Deus soberana sobre a igreja; Cristo e a Escritura contra tradição papal e imagens abusivas.',
    wordOfGodEn:
      'Word of God sovereign over the church; Christ and Scripture against papal tradition and abusive images.',
    scripturePt:
      'Escritura como única norma final; reforma litúrgica radical a partir do texto bíblico.',
    scriptureEn:
      'Scripture as sole final norm; radical liturgical reform from the biblical text.',
    preachingPt:
      'Pregação lectio continua em Zurique; a Palavra reformata a cidade-igreja.',
    preachingEn:
      'Lectio continua preaching in Zurich; the Word reforms the city-church.',
    sacramentsPt:
      'Ceia como memorial e proclamação; rejeita presença corporal local na Eucaristia (Marburgo, 1529).',
    sacramentsEn:
      'Supper as memorial and proclamation; rejects local bodily presence in the Eucharist (Marburg, 1529).',
    traditionPt:
      'Tradição humana cede quando não tem mandato bíblico explícito (princípio regulador embrionário).',
    traditionEn:
      'Human tradition yields when it lacks explicit biblical mandate (embryonic regulative principle).',
    canonPt:
      'Cânon protestante; ênfase no texto bíblico em língua vernácula.',
    canonEn:
      'Protestant canon; emphasis on the biblical text in the vernacular.',
    apocryphaPt:
      'Sem autoridade dogmática equiparada ao cânon hebraico/NT.',
    apocryphaEn:
      'No dogmatic authority equal to the Hebrew canon/NT.',
    keyWorks: ['On True and False Religion', 'Commentary on True and False Religion', 'Sixty-Seven Articles'],
    sources: [
      'https://www.ccel.org/ccel/zwingli',
      'https://archive.org/search?query=Zwingli%20True%20and%20False%20Religion',
      'https://bookofconcord.org/',
    ],
  },
  {
    id: 'bullinger',
    namePt: 'Heinrich Bullinger',
    nameEn: 'Heinrich Bullinger',
    dates: '1504–1575',
    tradition: 'Swiss Reformed',
    wordOfGodPt:
      'Palavra de Deus na Escritura como pacto e promessa; Continuação da reforma zuriquense pós-Zuínglio.',
    wordOfGodEn:
      'Word of God in Scripture as covenant and promise; continuation of Zurich reform after Zwingli.',
    scripturePt:
      'Escritura suficiente e clara; Segunda Confissão Helvética articula autoridade bíblica reformada.',
    scriptureEn:
      'Scripture sufficient and clear; the Second Helvetic Confession articulates Reformed biblical authority.',
    preachingPt:
      'Pregação covenantal e pastoral; Palavra nutre a igreja confessional.',
    preachingEn:
      'Covenantal and pastoral preaching; the Word nourishes the confessional church.',
    sacramentsPt:
      'Sinais do pacto; Ceia como comunhão espiritual com Cristo (linha reformada suíça).',
    sacramentsEn:
      'Covenant signs; Supper as spiritual communion with Christ (Swiss Reformed line).',
    traditionPt:
      'Tradição reformada confessional subordinada à Escritura; diálogo com Padres seletivo.',
    traditionEn:
      'Confessional Reformed tradition subordinate to Scripture; selective dialogue with the Fathers.',
    canonPt:
      'Cânon protestante padrão nas confissões helvéticas.',
    canonEn:
      'Standard Protestant canon in the Helvetic confessions.',
    apocryphaPt:
      'Distinguidos do cânon; uso edificantemente limitado.',
    apocryphaEn:
      'Distinguished from the canon; limited edifying use.',
    keyWorks: ['Second Helvetic Confession', 'Decades', 'The Old Faith'],
    sources: [
      'https://www.ccel.org/ccel/schaff/creeds3.iv.iv.html',
      'https://archive.org/search?query=Second%20Helvetic%20Confession',
      'https://www.ccel.org/ccel/bullinger',
    ],
  },
  {
    id: 'cranmer',
    namePt: 'Thomas Cranmer',
    nameEn: 'Thomas Cranmer',
    dates: '1489–1556',
    tradition: 'English Reformation / Anglican',
    wordOfGodPt:
      'Palavra de Deus na Escritura pública e liturgia vernácula; Cristo proclamado no culto comum.',
    wordOfGodEn:
      'Word of God in public Scripture and vernacular liturgy; Christ proclaimed in common worship.',
    scripturePt:
      'Escritura como autoridade suprema nos Artigos e no Book of Common Prayer; leitura pública massiva.',
    scriptureEn:
      'Scripture as supreme authority in the Articles and Book of Common Prayer; massive public reading.',
    preachingPt:
      'Homilias e liturgia formam o povo; Palavra e oração comum estruturam a igreja nacional.',
    preachingEn:
      'Homilies and liturgy form the people; Word and common prayer structure the national church.',
    sacramentsPt:
      'Batismo e Ceia como sacramentos do evangelho; teologia eucarística inglesa em desenvolvimento (além da missa medieval).',
    sacramentsEn:
      'Baptism and Supper as gospel sacraments; English eucharistic theology in development (beyond the medieval mass).',
    traditionPt:
      'Tradição católica antiga valorizada quando conforme à Escritura; rejeição de abusos papais.',
    traditionEn:
      'Ancient catholic tradition valued when consonant with Scripture; rejection of papal abuses.',
    canonPt:
      'Cânon do Artigo VI: Escritura suficiente; deuterocanônicos lidos mas não para doutrina.',
    canonEn:
      'Article VI canon: Scripture sufficient; deuterocanonicals read but not for doctrine.',
    apocryphaPt:
      'Artigo VI: a igreja os lê para exemplo de vida, não para estabelecer doutrina.',
    apocryphaEn:
      'Article VI: the church reads them for examples of life, not to establish doctrine.',
    keyWorks: ['Book of Common Prayer', 'Forty-Two / Thirty-Nine Articles', 'Homilies'],
    sources: [
      'https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/book-common-prayer',
      'https://www.eskimo.com/~lhowell/bcp1662/',
      'https://www.ccel.org/ccel/schaff/creeds3.iv.xi.html',
    ],
  },
  {
    id: 'tyndale',
    namePt: 'William Tyndale',
    nameEn: 'William Tyndale',
    dates: 'c. 1494–1536',
    tradition: 'English Reformation / Bible translation',
    wordOfGodPt:
      'A Palavra deve estar na língua do povo; tradução como ato teológico de libertação evangélica.',
    wordOfGodEn:
      'The Word must be in the people’s language; translation as a theological act of evangelical liberation.',
    scripturePt:
      'Escritura clara o bastante para o leigo fiel; autoridade sobre a hierarquia que oculta o texto.',
    scriptureEn:
      'Scripture clear enough for the faithful layperson; authority over a hierarchy that hides the text.',
    preachingPt:
      'Tradução alimenta pregação e leitura doméstica; Palavra vernácula precede reforma institucional plena.',
    preachingEn:
      'Translation feeds preaching and household reading; vernacular Word precedes full institutional reform.',
    sacramentsPt:
      'Subordinados à fé e à Palavra; crítica a sacramentalismo que obscurece o evangelho.',
    sacramentsEn:
      'Subordinated to faith and the Word; critique of sacramentalism that obscures the gospel.',
    traditionPt:
      'Tradição romana criticada quando impede o acesso bíblico; Padres usados seletivamente.',
    traditionEn:
      'Roman tradition criticized when it blocks biblical access; Fathers used selectively.',
    canonPt:
      'Trabalho de tradução do NT e do Pentateuco a partir de textos hebraico/grego.',
    canonEn:
      'Translation work on the NT and Pentateuch from Hebrew/Greek texts.',
    apocryphaPt:
      'Foco no cânon hebraico/NT na obra tradutória principal.',
    apocryphaEn:
      'Focus on the Hebrew canon/NT in his principal translation work.',
    keyWorks: ['English New Testament (1526)', 'Pentateuch translation', 'The Obedience of a Christian Man'],
    sources: [
      'https://www.ccel.org/ccel/tyndale',
      'https://archive.org/search?query=Tyndale%20New%20Testament',
      'https://www.biblegateway.com/versions/Tyndale-Bible/',
    ],
  },
  {
    id: 'menno-simons',
    namePt: 'Menno Simons',
    nameEn: 'Menno Simons',
    dates: '1496–1561',
    tradition: 'Anabaptist / Mennonite',
    wordOfGodPt:
      'Palavra de Deus na Escritura como norma da discipulado radical e da igreja dos regenerados.',
    wordOfGodEn:
      'Word of God in Scripture as the norm of radical discipleship and the church of the regenerate.',
    scripturePt:
      'Escritura acima de tradição estatal-eclesial; obediência prática a Jesus no Sermão do Monte.',
    scriptureEn:
      'Scripture above state-church tradition; practical obedience to Jesus in the Sermon on the Mount.',
    preachingPt:
      'Pregação itinerante e comunitária; Palavra chama ao arrependimento e à separação do mundo.',
    preachingEn:
      'Itinerant and communal preaching; the Word calls to repentance and separation from the world.',
    sacramentsPt:
      'Batismo de crentes e Ceia como sinais da igreja fiel; rejeição do batismo infantil.',
    sacramentsEn:
      'Believers’ baptism and Supper as signs of the faithful church; rejection of infant baptism.',
    traditionPt:
      'Tradição magistérica rejeitada quando contradiz o NT; sucessão da obediência, não do ofício.',
    traditionEn:
      'Magisterial tradition rejected when it contradicts the NT; succession of obedience, not office.',
    canonPt:
      'NT como norma decisiva da vida cristã; AT lido através de Cristo.',
    canonEn:
      'NT as decisive norm of Christian life; OT read through Christ.',
    apocryphaPt:
      'Sem papel dogmático central na teologia menonita clássica.',
    apocryphaEn:
      'No central dogmatic role in classical Mennonite theology.',
    keyWorks: ['Foundation of Christian Doctrine', 'The Complete Writings of Menno Simons'],
    sources: [
      'https://archive.org/search?query=Menno%20Simons',
      'https://www.ccel.org/ccel/menno',
      'https://gameo.org/index.php?title=Menno_Simons_(1496-1561)',
    ],
  },
  {
    id: 'bucer',
    namePt: 'Martinho Bucer',
    nameEn: 'Martin Bucer',
    dates: '1491–1551',
    tradition: 'Strasbourg Reformed / ecumenical reform',
    wordOfGodPt:
      'Palavra de Deus reforma a igreja e a cidade; Cristo e a Escritura como centro de unidade evangélica.',
    wordOfGodEn:
      'Word of God reforms church and city; Christ and Scripture as the center of evangelical unity.',
    scripturePt:
      'Escritura norma da doutrina e da disciplina; busca consenso entre luteranos e reformados.',
    scriptureEn:
      'Scripture norms doctrine and discipline; seeks consensus between Lutherans and Reformed.',
    preachingPt:
      'Pregação e catequese cívico-eclesial; Palavra estrutura a disciplina pastoral.',
    preachingEn:
      'Civic-ecclesial preaching and catechesis; the Word structures pastoral discipline.',
    sacramentsPt:
      'Tentativas de mediação eucarística (presença verdadeira sem especificação lutero-zwingliana rígida).',
    sacramentsEn:
      'Attempts at eucharistic mediation (true presence without rigid Luther–Zwingli specification).',
    traditionPt:
      'Tradição antiga e reforma contemporânea em diálogo sob a Escritura.',
    traditionEn:
      'Ancient tradition and contemporary reform in dialogue under Scripture.',
    canonPt:
      'Cânon protestante; ênfase prática na Escritura da igreja reformada.',
    canonEn:
      'Protestant canon; practical emphasis on the Reformed church’s Scripture.',
    apocryphaPt:
      'Subordinados ao cânon hebraico/NT para doutrina.',
    apocryphaEn:
      'Subordinated to the Hebrew canon/NT for doctrine.',
    keyWorks: ['De Regno Christi', 'Strasbourg liturgical reforms', 'Correspondence with Calvin and Cranmer'],
    sources: [
      'https://archive.org/search?query=Martin%20Bucer',
      'https://www.ccel.org/ccel/schaff/hcc8.iv.iii.html',
      'https://bookofconcord.org/',
    ],
  },
  {
    id: 'knox',
    namePt: 'John Knox',
    nameEn: 'John Knox',
    dates: 'c. 1514–1572',
    tradition: 'Scottish Reformed',
    wordOfGodPt:
      'Palavra de Deus julga príncipes e papado; Cristo rei da igreja segundo a Escritura.',
    wordOfGodEn:
      'Word of God judges princes and papacy; Christ king of the church according to Scripture.',
    scripturePt:
      'Escritura como lei da reforma escocesa; Confissão Escocesa (1560) articula autoridade bíblica.',
    scriptureEn:
      'Scripture as the law of the Scottish Reformation; Scots Confession (1560) articulates biblical authority.',
    preachingPt:
      'Pregação profética e pública; Palavra confronta idolatria e tiranias.',
    preachingEn:
      'Prophetic public preaching; the Word confronts idolatry and tyrannies.',
    sacramentsPt:
      'Dois sacramentos evangélicos; Ceia reformada e disciplina associada à mesa.',
    sacramentsEn:
      'Two evangelical sacraments; Reformed Supper and discipline tied to the table.',
    traditionPt:
      'Tradição romana rejeitada; Padres e concílios só se conformes à Escritura.',
    traditionEn:
      'Roman tradition rejected; Fathers and councils only if consonant with Scripture.',
    canonPt:
      'Cânon protestante na Confissão Escocesa e prática kirk.',
    canonEn:
      'Protestant canon in the Scots Confession and kirk practice.',
    apocryphaPt:
      'Sem autoridade igual à Escritura canônica para fé e vida.',
    apocryphaEn:
      'No authority equal to canonical Scripture for faith and life.',
    keyWorks: ['Scots Confession', 'History of the Reformation in Scotland', 'First Blast of the Trumpet'],
    sources: [
      'https://www.ccel.org/ccel/knox',
      'https://www.creeds.net/reformed/Scots/',
      'https://archive.org/search?query=John%20Knox%20Reformation',
    ],
  },
]
