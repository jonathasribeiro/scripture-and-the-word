export interface ChurchFatherEntry {
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
  traditionRelationPt: string
  traditionRelationEn: string
  sources: string[]
}

export const churchFathers: ChurchFatherEntry[] = [
  {
    id: 'justin-martyr',
    namePt: 'Justino Mártir',
    nameEn: 'Justin Martyr',
    period: 'c. 100–165 CE',
    tradition: 'Greek Apologists / early catholic',
    works: ['First Apology', 'Second Apology', 'Dialogue with Trypho'],
    scripturePositionPt:
      'Trata as Escrituras de Israel e as “memórias dos apóstolos” (Evangelhos) como autoridade normativa na apologética e na liturgia (cf. 1 Apol. 66–67).',
    scripturePositionEn:
      'Treats the Scriptures of Israel and the “memoirs of the apostles” (Gospels) as normative authority in apologetics and liturgy (cf. 1 Apol. 66–67).',
    logosPositionPt:
      'Cristologia do Logos seminal: o Logos divino, plenamente revelado em Cristo, já iluminava parcialmente a razão humana e os filósofos.',
    logosPositionEn:
      'Seminal Logos Christology: the divine Logos, fully revealed in Christ, already partially illumined human reason and the philosophers.',
    canonViewPt:
      'Testemunha uso litúrgico dos Evangelhos junto aos Profetas; ainda não há lista canônica fechada do NT.',
    canonViewEn:
      'Witnesses liturgical use of the Gospels alongside the Prophets; there is not yet a closed NT canon list.',
    traditionRelationPt:
      'Tradição apostólica e Escritura cooperam contra mitologia pagã e interpretações judaicas rivais; a regra de fé é cristológica.',
    traditionRelationEn:
      'Apostolic tradition and Scripture cooperate against pagan myth and rival Jewish readings; the rule of faith is christological.',
    sources: [
      'https://www.newadvent.org/fathers/0126.htm',
      'http://www.earlychristianwritings.com/justin.html',
      'https://www.ccel.org/ccel/schaff/anf01.viii.ii.html',
    ],
  },
  {
    id: 'irenaeus',
    namePt: 'Irineu de Lião',
    nameEn: 'Irenaeus of Lyons',
    period: 'c. 130–202 CE',
    tradition: 'Early catholic / anti-Gnostic',
    works: ['Against Heresies', 'Demonstration of the Apostolic Preaching'],
    scripturePositionPt:
      'Escritura é norma pública contra o gnosticismo; os quatro Evangelhos e o testemunho apostólico expõem a economia da salvação.',
    scripturePositionEn:
      'Scripture is the public norm against Gnosticism; the four Gospels and apostolic witness unfold the economy of salvation.',
    logosPositionPt:
      'O Verbo/Filho revela o Pai na encarnação e recapitula a humanidade em Cristo; Escritura e Verbo se articulam na economia divina.',
    logosPositionEn:
      'The Word/Son reveals the Father in the incarnation and recapitulates humanity in Christ; Scripture and Word are joined in the divine economy.',
    canonViewPt:
      'Defende quatro Evangelhos; usa amplo corpus apostólico. O cânon emerge como reconhecimento eclesial da tradição apostólica, não como invenção arbitrária.',
    canonViewEn:
      'Defends four Gospels; uses a broad apostolic corpus. The canon emerges as ecclesial recognition of apostolic tradition, not arbitrary invention.',
    traditionRelationPt:
      'Regra de fé, sucessão e Escritura formam um conjunto anti-herético; a tradição interpreta a Escritura no sentido apostólico.',
    traditionRelationEn:
      'Rule of faith, succession, and Scripture form an anti-heretical ensemble; tradition interprets Scripture in the apostolic sense.',
    sources: [
      'https://www.newadvent.org/fathers/0103.htm',
      'http://www.earlychristianwritings.com/irenaeus.html',
      'https://www.ccel.org/ccel/schaff/anf01.ix.i.html',
    ],
  },
  {
    id: 'tertullian',
    namePt: 'Tertuliano',
    nameEn: 'Tertullian',
    period: 'c. 155–220 CE',
    tradition: 'Latin North Africa (later Montanist leanings)',
    works: ['Apology', 'Prescription against Heretics', 'Against Marcion', 'On the Flesh of Christ'],
    scripturePositionPt:
      'Escritura é arma jurídica contra heresias; insiste que as Escrituras pertencem à igreja que conserva a regra de fé.',
    scripturePositionEn:
      'Scripture is a juridical weapon against heresies; he insists the Scriptures belong to the church that keeps the rule of faith.',
    logosPositionPt:
      'Desenvolve linguagem trinitária latina (substantia, persona); o Verbo procede do Pai e se encarna. Combate docetismo e marcionismo.',
    logosPositionEn:
      'Develops Latin Trinitarian language (substantia, persona); the Word proceeds from the Father and becomes incarnate. Opposes docetism and Marcionism.',
    canonViewPt:
      'Combate o cânon mutilado de Marcião; afirma o AT e um NT mais amplo alinhado à tradição católica.',
    canonViewEn:
      'Opposes Marcion’s mutilated canon; affirms the OT and a broader NT aligned with catholic tradition.',
    traditionRelationPt:
      'Regra de fé e prescrição apostólica precedem a disputa hermenêutica; Escritura não é campo neutro para qualquer intérprete.',
    traditionRelationEn:
      'Rule of faith and apostolic prescription precede hermeneutical dispute; Scripture is not a neutral field for any interpreter.',
    sources: [
      'https://www.newadvent.org/fathers/0311.htm',
      'https://www.ccel.org/ccel/schaff/anf03.iv.v.i.html',
      'http://www.earlychristianwritings.com/tertullian.html',
    ],
  },
  {
    id: 'clement-alexandria',
    namePt: 'Clemente de Alexandria',
    nameEn: 'Clement of Alexandria',
    period: 'c. 150–215 CE',
    tradition: 'Alexandrian Christian philosophy',
    works: ['Protrepticus', 'Paedagogus', 'Stromata'],
    scripturePositionPt:
      'Escritura é fonte de verdadeiro conhecimento (gnosis cristã); lê o texto com alegoria e filosofia a serviço da fé.',
    scripturePositionEn:
      'Scripture is the source of true knowledge (Christian gnosis); he reads the text with allegory and philosophy in service of faith.',
    logosPositionPt:
      'O Logos é pedagogo e princípio de toda verdade; Cristo ilumina a filosofia e a Escritura numa hierarquia revelacional.',
    logosPositionEn:
      'The Logos is pedagogue and principle of all truth; Christ illumines philosophy and Scripture in a revelational hierarchy.',
    canonViewPt:
      'Usa amplo espectro de escritos cristãos e judaicos; fronteiras canônicas ainda fluidas em Alexandria.',
    canonViewEn:
      'Uses a wide spectrum of Christian and Jewish writings; canonical boundaries still fluid in Alexandria.',
    traditionRelationPt:
      'Tradição apostólica secreta/pública e Escritura alimentam a formação do “verdadeiro gnóstico” cristão.',
    traditionRelationEn:
      'Secret/public apostolic tradition and Scripture nourish the formation of the true Christian “gnostic.”',
    sources: [
      'https://www.newadvent.org/fathers/0211.htm',
      'https://www.ccel.org/ccel/schaff/anf02.vi.iii.html',
      'http://www.earlychristianwritings.com/clement.html',
    ],
  },
  {
    id: 'origen',
    namePt: 'Orígenes',
    nameEn: 'Origen',
    period: 'c. 185–254 CE',
    tradition: 'Alexandrian exegesis / Hexapla scholarship',
    works: ['On First Principles', 'Against Celsus', 'Commentaries', 'Hexapla'],
    scripturePositionPt:
      'Escritura é divinamente inspirada em múltiplos sentidos (literal, moral, espiritual); filologia e alegoria servem à teologia.',
    scripturePositionEn:
      'Scripture is divinely inspired in multiple senses (literal, moral, spiritual); philology and allegory serve theology.',
    logosPositionPt:
      'Cristologia do Logos subordinacionista em moldes pré-nicenos; o Logos media a revelação e a criação.',
    logosPositionEn:
      'Pre-Nicene subordinating Logos Christology; the Logos mediates revelation and creation.',
    canonViewPt:
      'Discute livros controvertidos; distingue graus de autoridade. Trabalho textual (Hexapla) marca a consciência crítica do texto.',
    canonViewEn:
      'Discusses disputed books; distinguishes degrees of authority. Textual work (Hexapla) marks critical awareness of the text.',
    traditionRelationPt:
      'Regra de fé eclesial delimita especulação; Escritura é campo infinito de sentido sob disciplina da igreja.',
    traditionRelationEn:
      'Ecclesial rule of faith bounds speculation; Scripture is an infinite field of meaning under church discipline.',
    sources: [
      'https://www.newadvent.org/fathers/0412.htm',
      'https://www.ccel.org/ccel/schaff/anf04.vi.v.i.html',
      'https://www.newadvent.org/fathers/0416.htm',
    ],
  },
  {
    id: 'cyprian',
    namePt: 'Cipriano de Cartago',
    nameEn: 'Cyprian of Carthage',
    period: 'c. 200–258 CE',
    tradition: 'Latin North African episcopal theology',
    works: ['On the Unity of the Catholic Church', 'Letters', 'On the Lapsed'],
    scripturePositionPt:
      'Escritura fundamenta unidade eclesial, batismo e disciplina; leitura pastoral e jurídica das passagens.',
    scripturePositionEn:
      'Scripture grounds ecclesial unity, baptism, and discipline; pastoral and juridical reading of passages.',
    logosPositionPt:
      'Cristo é cabeça da igreja una; ênfase eclesiológica supera especulação filosófica do Logos.',
    logosPositionEn:
      'Christ is head of the one church; ecclesiological emphasis outweighs philosophical Logos speculation.',
    canonViewPt:
      'Opera com o AT e escritos apostólicos recebidos na igreja africana; o cânon serve à unidade católica.',
    canonViewEn:
      'Operates with the OT and apostolic writings received in the African church; the canon serves catholic unity.',
    traditionRelationPt:
      'Tradição episcopal e conciliar interpreta a Escritura na crise do batismo e dos lapsos.',
    traditionRelationEn:
      'Episcopal and conciliar tradition interprets Scripture in the baptism and lapsed crises.',
    sources: [
      'https://www.newadvent.org/fathers/0507.htm',
      'https://www.ccel.org/ccel/schaff/anf05.iv.iv.html',
      'https://www.newadvent.org/fathers/050701.htm',
    ],
  },
  {
    id: 'eusebius',
    namePt: 'Eusébio de Cesareia',
    nameEn: 'Eusebius of Caesarea',
    period: 'c. 260–339 CE',
    tradition: 'Greek historiography / Origenist heritage',
    works: ['Ecclesiastical History', 'Preparation for the Gospel', 'Life of Constantine'],
    scripturePositionPt:
      'Documenta o uso e a disputa sobre livros sagrados; Escritura é centro da narrativa da igreja.',
    scripturePositionEn:
      'Documents the use and dispute over sacred books; Scripture is central to the church’s narrative.',
    logosPositionPt:
      'Cristologia do Logos com matizes subordinacionistas pré-nicenos/eusébianos; Cristo como mediador revelacional.',
    logosPositionEn:
      'Logos Christology with pre-Nicene/Eusebian subordinating hues; Christ as revelatory mediator.',
    canonViewPt:
      'Classifica homologoumena, antilegomena e espúrios (Hist. Eccl. 3.25); fonte clássica para a história do cânon.',
    canonViewEn:
      'Classifies homologoumena, antilegomena, and spurious works (Hist. Eccl. 3.25); classic source for canon history.',
    traditionRelationPt:
      'Tradição histórica e sucessão episcopal validam a recepção dos livros; crítica eclesial dos títulos.',
    traditionRelationEn:
      'Historical tradition and episcopal succession validate reception of books; ecclesial criticism of titles.',
    sources: [
      'https://www.newadvent.org/fathers/2501.htm',
      'https://www.ccel.org/ccel/schaff/npnf201.iii.i.html',
      'https://www.newadvent.org/fathers/250103.htm',
    ],
  },
  {
    id: 'athanasius',
    namePt: 'Atanásio de Alexandria',
    nameEn: 'Athanasius of Alexandria',
    period: 'c. 296–373 CE',
    tradition: 'Nicene Alexandrian',
    works: ['On the Incarnation', 'Orations against the Arians', 'Festal Letter 39'],
    scripturePositionPt:
      'Escritura prova a divindade do Filho contra o arianismo; a economia da encarnação interpreta o cânon.',
    scripturePositionEn:
      'Scripture proves the Son’s deity against Arianism; the economy of the incarnation interprets the canon.',
    logosPositionPt:
      'O Logos é homoousios com o Pai; encarnação salva. Palavra divina pessoal, não criatura.',
    logosPositionEn:
      'The Logos is homoousios with the Father; incarnation saves. Personal divine Word, not a creature.',
    canonViewPt:
      'Carta Festal 39 (367) lista 27 livros do NT e delimita o AT; marco na história do cânon alexandrino.',
    canonViewEn:
      'Festal Letter 39 (367) lists 27 NT books and delimits the OT; a landmark in Alexandrian canon history.',
    traditionRelationPt:
      'Tradição nicena e Escritura se reforçam; livros “lidos” para edificação diferem dos canônicos.',
    traditionRelationEn:
      'Nicene tradition and Scripture reinforce each other; books “read” for edification differ from the canonical.',
    sources: [
      'https://www.newadvent.org/fathers/2806.htm',
      'https://www.newadvent.org/fathers/2815.htm',
      'https://www.ccel.org/ccel/schaff/npnf204.toc.html',
    ],
  },
  {
    id: 'basil',
    namePt: 'Basílio de Cesareia',
    nameEn: 'Basil of Caesarea',
    period: 'c. 330–379 CE',
    tradition: 'Cappadocian / Nicene',
    works: ['On the Holy Spirit', 'Hexaemeron', 'Against Eunomius', 'Asceticon'],
    scripturePositionPt:
      'Escritura e doutrina do Espírito Santo se articulam; interpretação eclesial e litúrgica da Bíblia.',
    scripturePositionEn:
      'Scripture and the doctrine of the Holy Spirit are articulated together; ecclesial-liturgical Bible interpretation.',
    logosPositionPt:
      'Teologia trinitária capadócia: Filho e Espírito consubstanciais; o Verbo na criação e na economia.',
    logosPositionEn:
      'Cappadocian Trinitarian theology: Son and Spirit consubstantial; the Word in creation and economy.',
    canonViewPt:
      'Opera com o cânon eclesial grego; valoriza leitura litúrgica e tradição não escrita (cf. De Spiritu Sancto).',
    canonViewEn:
      'Operates with the Greek ecclesial canon; values liturgical reading and unwritten tradition (cf. On the Holy Spirit).',
    traditionRelationPt:
      'Tradição litúrgica e dogmática interpreta e completa o sentido prático da Escritura na igreja.',
    traditionRelationEn:
      'Liturgical and dogmatic tradition interprets and completes Scripture’s practical sense in the church.',
    sources: [
      'https://www.newadvent.org/fathers/3203.htm',
      'https://www.ccel.org/ccel/schaff/npnf208.vii.i.html',
      'https://www.newadvent.org/fathers/3201.htm',
    ],
  },
  {
    id: 'gregory-nazianzen',
    namePt: 'Gregório de Nazianzo',
    nameEn: 'Gregory of Nazianzus',
    period: 'c. 329–390 CE',
    tradition: 'Cappadocian / Nicene',
    works: ['Theological Orations', 'Orations', 'Poems'],
    scripturePositionPt:
      'Escritura é fundação da teologia trinitária pregada; exigência de interpretação piedosa e filosófica.',
    scripturePositionEn:
      'Scripture founds preached Trinitarian theology; demands pious and philosophically careful interpretation.',
    logosPositionPt:
      'Orationes theologicae: o Filho é Deus verdadeiro; linguagem do Logos depurada contra arianos e eunomianos.',
    logosPositionEn:
      'Theological Orations: the Son is true God; Logos language refined against Arians and Eunomians.',
    canonViewPt:
      'Poema sobre o cânon lista livros; testemunho oriental importante para o AT/NT recebidos.',
    canonViewEn:
      'Poem on the canon lists books; an important Eastern witness to the received OT/NT.',
    traditionRelationPt:
      'Tradição conciliar niceno-constantinopolitana e Escritura na pregação dogmática.',
    traditionRelationEn:
      'Nicene-Constantinopolitan conciliar tradition and Scripture in dogmatic preaching.',
    sources: [
      'https://www.newadvent.org/fathers/3102.htm',
      'https://www.ccel.org/ccel/schaff/npnf207.toc.html',
      'https://www.newadvent.org/fathers/310203.htm',
    ],
  },
  {
    id: 'gregory-nyssa',
    namePt: 'Gregório de Nissa',
    nameEn: 'Gregory of Nyssa',
    period: 'c. 335–395 CE',
    tradition: 'Cappadocian / Nicene mystical theology',
    works: ['Life of Moses', 'Against Eunomius', 'Catechetical Oration', 'Homilies on the Song of Songs'],
    scripturePositionPt:
      'Escritura como itinerário místico e filosófico; alegoria e anagogia sob ortodoxia trinitária.',
    scripturePositionEn:
      'Scripture as mystical and philosophical itinerary; allegory and anagogy under Trinitarian orthodoxy.',
    logosPositionPt:
      'O Verbo ilumina a alma na epectase; cristologia e teologia negativa se articulam.',
    logosPositionEn:
      'The Word illumines the soul in epectasis; Christology and negative theology are joined.',
    canonViewPt:
      'Usa o cânon eclesial grego; ênfase hermenêutica mais que listas canônicas.',
    canonViewEn:
      'Uses the Greek ecclesial canon; more hermeneutical emphasis than canon lists.',
    traditionRelationPt:
      'Tradição dogmática capadócia guia a leitura espiritual da Escritura.',
    traditionRelationEn:
      'Cappadocian dogmatic tradition guides spiritual reading of Scripture.',
    sources: [
      'https://www.newadvent.org/fathers/2901.htm',
      'https://www.ccel.org/ccel/schaff/npnf205.toc.html',
      'https://www.newadvent.org/fathers/2914.htm',
    ],
  },
  {
    id: 'chrysostom',
    namePt: 'João Crisóstomo',
    nameEn: 'John Chrysostom',
    period: 'c. 349–407 CE',
    tradition: 'Antiochene / Nicene preaching',
    works: ['Homilies on Matthew', 'Homilies on Romans', 'Homilies on John', 'On the Priesthood'],
    scripturePositionPt:
      'Pregação expositiva massiva; Escritura é palavra viva para a reforma moral e a fé da igreja.',
    scripturePositionEn:
      'Massive expository preaching; Scripture is living word for moral reform and the church’s faith.',
    logosPositionPt:
      'Cristo-Logos na linha joanina e nicena, aplicado pastoralmente; menos especulação, mais homilia.',
    logosPositionEn:
      'Christ-Logos in Johannine and Nicene line, applied pastorally; less speculation, more homily.',
    canonViewPt:
      'Prega o cânon eclesial recebido em Antioquia/Constantinopla; autoridade prática dos livros lidos na igreja.',
    canonViewEn:
      'Preaches the ecclesial canon received in Antioch/Constantinople; practical authority of books read in church.',
    traditionRelationPt:
      'Tradição litúrgica e pastoral molda a aplicação da Escritura ao povo.',
    traditionRelationEn:
      'Liturgical and pastoral tradition shapes Scripture’s application to the people.',
    sources: [
      'https://www.newadvent.org/fathers/2001.htm',
      'https://www.ccel.org/ccel/schaff/npnf111.toc.html',
      'https://www.newadvent.org/fathers/2008.htm',
    ],
  },
  {
    id: 'jerome',
    namePt: 'Jerônimo',
    nameEn: 'Jerome',
    period: 'c. 347–420 CE',
    tradition: 'Latin biblical scholarship / Hebraica veritas',
    works: ['Vulgate', 'Prologus Galeatus', 'Commentary on Isaiah', 'Letters'],
    scripturePositionPt:
      'Tradutor e exegeta; distingue livros canônicos hebraicos e livros eclesiásticos (Prefácios; disputa com Agostinho).',
    scripturePositionEn:
      'Translator and exegete; distinguishes Hebrew canonical books and ecclesiastical books (Prefaces; dispute with Augustine).',
    logosPositionPt:
      'Cristologia nicena ortodoxa; a Palavra na Escritura e no Verbo encarnado, com forte ênfase filológica.',
    logosPositionEn:
      'Orthodox Nicene Christology; the Word in Scripture and the incarnate Word, with strong philological emphasis.',
    canonViewPt:
      'Prefere o cânon hebraico para o AT (Hebraica veritas); livros deuterocanônicos para edificação, com nuances ao longo da vida.',
    canonViewEn:
      'Prefers the Hebrew canon for the OT (Hebraica veritas); deuterocanonical books for edification, with nuances across his career.',
    traditionRelationPt:
      'Autoridade da igreja e erudição hebraica em tensão produtiva; a Vulgata torna-se padrão latino.',
    traditionRelationEn:
      'Church authority and Hebrew learning in productive tension; the Vulgate becomes the Latin standard.',
    sources: [
      'https://www.newadvent.org/fathers/3001.htm',
      'https://www.ccel.org/ccel/schaff/npnf203.toc.html',
      'https://www.newadvent.org/fathers/2710.htm',
    ],
  },
  {
    id: 'augustine',
    namePt: 'Agostinho de Hipona',
    nameEn: 'Augustine of Hippo',
    period: '354–430 CE',
    tradition: 'Latin Western / Nicene',
    works: ['Confessions', 'City of God', 'On Christian Doctrine', 'On the Spirit and the Letter'],
    scripturePositionPt:
      'Escritura é autoridade normativa; regra de caridade e analogia da fé guiam a interpretação (De doctrina christiana).',
    scripturePositionEn:
      'Scripture is normative authority; the rule of charity and analogy of faith guide interpretation (On Christian Doctrine).',
    logosPositionPt:
      'Cristo-Verbo interior e exterior; iluminação divina e encarnação. A Palavra divina se comunica na Escritura e na pessoa de Cristo.',
    logosPositionEn:
      'Christ the inner and outer Word; divine illumination and incarnation. The divine Word communicates in Scripture and in Christ’s person.',
    canonViewPt:
      'Listas em De doctrina christiana e concílios norte-africanos incluem deuterocanônicos; influência latina duradoura.',
    canonViewEn:
      'Lists in On Christian Doctrine and North African councils include deuterocanonicals; lasting Latin influence.',
    traditionRelationPt:
      '“Eu não creria no evangelho se a autoridade da Igreja católica não me movesse” (c. Faust. 5.6) — tradição eclesial media o reconhecimento da Escritura.',
    traditionRelationEn:
      '“I would not believe the gospel unless the authority of the Catholic Church moved me” (c. Faust. 5.6) — ecclesial tradition mediates recognition of Scripture.',
    sources: [
      'https://www.newadvent.org/fathers/1202.htm',
      'https://www.newadvent.org/fathers/1401.htm',
      'https://www.ccel.org/ccel/schaff/npnf102.toc.html',
    ],
  },
  {
    id: 'cyril-jerusalem',
    namePt: 'Cirilo de Jerusalém',
    nameEn: 'Cyril of Jerusalem',
    period: 'c. 313–386 CE',
    tradition: 'Jerusalem catechesis / Nicene',
    works: ['Catechetical Lectures', 'Mystagogical Catecheses'],
    scripturePositionPt:
      'Catequese baseada em Escritura; lista canônica nas Catequeses (4.33–36) distingue canônicos e controversos.',
    scripturePositionEn:
      'Catechesis based on Scripture; canon list in the Catecheses (4.33–36) distinguishes canonical and disputed books.',
    logosPositionPt:
      'Cristo confessado na regra batismal; Palavra e sacramento na iniciação cristã.',
    logosPositionEn:
      'Christ confessed in the baptismal rule; Word and sacrament in Christian initiation.',
    canonViewPt:
      'Importante testemunho oriental do cânon; adverte contra livros apócrifos na catequese pública.',
    canonViewEn:
      'Important Eastern witness to the canon; warns against apocryphal books in public catechesis.',
    traditionRelationPt:
      'Tradição litúrgica de Jerusalém e Escritura formam o currículo dos catecúmenos.',
    traditionRelationEn:
      'Jerusalem liturgical tradition and Scripture form the catechumens’ curriculum.',
    sources: [
      'https://www.newadvent.org/fathers/3101.htm',
      'https://www.ccel.org/ccel/schaff/npnf207.ii.i.html',
      'https://www.newadvent.org/fathers/310104.htm',
    ],
  },
  {
    id: 'cyril-alexandria',
    namePt: 'Cirilo de Alexandria',
    nameEn: 'Cyril of Alexandria',
    period: 'c. 376–444 CE',
    tradition: 'Alexandrian Christology / Ephesus 431',
    works: ['Against Nestorius', 'Commentaries on John and Luke', 'Letters (incl. Formula of Reunion)'],
    scripturePositionPt:
      'Exegese cristológica intensa; Escritura prova a unidade do Verbo encarnado contra o nestorianismo.',
    scripturePositionEn:
      'Intense christological exegesis; Scripture proves the unity of the incarnate Word against Nestorianism.',
    logosPositionPt:
      'Mia physis tou Theou Logou sesarkomene: o único Verbo de Deus encarnado; comunicação de idiomas.',
    logosPositionEn:
      'Mia physis tou Theou Logou sesarkomene: the one Word of God incarnate; communication of idioms.',
    canonViewPt:
      'Opera no cânon alexandrino/eclesial; a disputa é hermenêutico-cristológica mais que canônica.',
    canonViewEn:
      'Operates within the Alexandrian/ecclesial canon; the dispute is hermeneutical-christological more than canonical.',
    traditionRelationPt:
      'Tradição alexandrina e conciliar (Éfeso) interpreta João e os Evangelhos.',
    traditionRelationEn:
      'Alexandrian and conciliar tradition (Ephesus) interprets John and the Gospels.',
    sources: [
      'https://www.newadvent.org/fathers/2531.htm',
      'https://www.ccel.org/ccel/schaff/npnf214.toc.html',
      'https://www.newadvent.org/fathers/2537.htm',
    ],
  },
  {
    id: 'john-damascus',
    namePt: 'João Damasceno',
    nameEn: 'John of Damascus',
    period: 'c. 675–749 CE',
    tradition: 'Eastern Orthodox synthesis',
    works: ['Exact Exposition of the Orthodox Faith', 'Three Treatises on the Divine Images', 'Sacred Parallels'],
    scripturePositionPt:
      'Escritura e tradição dos Padres como fontes da ortodoxia; síntese sistemática da fé oriental.',
    scripturePositionEn:
      'Scripture and the Fathers’ tradition as sources of Orthodoxy; systematic synthesis of Eastern faith.',
    logosPositionPt:
      'Cristologia calcedoniana consolidada: o Verbo hipostático em duas naturezas; Palavra divina na economia e nas imagens.',
    logosPositionEn:
      'Consolidated Chalcedonian Christology: the hypostatic Word in two natures; divine Word in the economy and in images.',
    canonViewPt:
      'Recebe o cânon e as Escrituras da igreja oriental; autoridade eclesial na delimitação e interpretação.',
    canonViewEn:
      'Receives the Eastern church’s canon and Scriptures; ecclesial authority in delimitation and interpretation.',
    traditionRelationPt:
      'Tradição ortodoxa (incluindo culto e ícones) e Escritura mutuamente interpretativas.',
    traditionRelationEn:
      'Orthodox tradition (including worship and icons) and Scripture are mutually interpretive.',
    sources: [
      'https://www.newadvent.org/fathers/3304.htm',
      'https://www.ccel.org/ccel/schaff/npnf209.iii.i.html',
      'https://www.newadvent.org/fathers/33041.htm',
    ],
  },
]
