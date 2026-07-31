export interface PrimarySourceLink {
  label: string
  url: string
}

export interface ApostolicFatherEntry {
  id: string
  namePt: string
  nameEn: string
  dateApprox: string
  contextPt: string
  contextEn: string
  scriptureUsePt: string
  scriptureUseEn: string
  christAsWordPt: string
  christAsWordEn: string
  authorityViewPt: string
  authorityViewEn: string
  primarySources: PrimarySourceLink[]
  bibliography: string[]
}

export const apostolicFathers: ApostolicFatherEntry[] = [
  {
    id: 'didache',
    namePt: 'Didaquê (Doutrina dos Doze Apóstolos)',
    nameEn: 'Didache (Teaching of the Twelve Apostles)',
    dateApprox: 'c. 50–120 CE (often late 1st / early 2nd century)',
    contextPt:
      'Manual de instrução comunitária sobre os “dois caminhos”, batismo, jejum, Eucaristia, ministério itinerante e vigilância escatológica. Reflete prática cristã precoce sem um cânon neotestamentário fechado.',
    contextEn:
      'A community instruction manual on the “two ways,” baptism, fasting, Eucharist, itinerant ministry, and eschatological vigilance. It reflects early Christian practice before a closed New Testament canon.',
    scriptureUsePt:
      'Cita e alude fortemente a tradições sinóticas (especialmente material próximo a Mateus) e a mandamentos éticos; trata a “palavra do Senhor” e a tradição apostólica como normativas para a vida da igreja, sem equacionar ainda um volume bíblico fechado.',
    scriptureUseEn:
      'Quotes and alludes heavily to Synoptic traditions (especially Matthean-like material) and ethical commandments; treats the “word of the Lord” and apostolic tradition as normative for church life, without yet equating a closed biblical volume.',
    christAsWordPt:
      'Cristo aparece sobretudo como Senhor e legislador escatológico; a ênfase está no ensino e nos mandamentos do Senhor, não numa cristologia do Logos joanina elaborada.',
    christAsWordEn:
      'Christ appears chiefly as Lord and eschatological lawgiver; the emphasis falls on the Lord’s teaching and commandments, not on a developed Johannine Logos Christology.',
    authorityViewPt:
      'Autoridade residia no Senhor, nos apóstolos e na disciplina comunitária; as Escrituras do Israel e as palavras de Jesus funcionam como norma viva na prática eclesial.',
    authorityViewEn:
      'Authority resided in the Lord, the apostles, and communal discipline; Israel’s Scriptures and the words of Jesus function as a living norm in ecclesial practice.',
    primarySources: [
      { label: 'Early Christian Writings — Didache', url: 'http://www.earlychristianwritings.com/didache.html' },
      { label: 'New Advent — Didache', url: 'https://www.newadvent.org/fathers/0714.htm' },
      { label: 'CCEL — Ante-Nicene Fathers, vol. 7 (Didache)', url: 'https://www.ccel.org/ccel/schaff/anf07.ix.i.html' },
    ],
    bibliography: [
      'Michael W. Holmes, The Apostolic Fathers: Greek Texts and English Translations (Baker Academic)',
      'Bart D. Ehrman, The Apostolic Fathers, 2 vols., Loeb Classical Library (Harvard University Press)',
      'Kurt Niederwimmer, The Didache: A Commentary (Hermeneia, Fortress Press)',
    ],
  },
  {
    id: '1-clement',
    namePt: '1 Clemente',
    nameEn: '1 Clement',
    dateApprox: 'c. 96 CE (late 1st century)',
    contextPt:
      'Carta da igreja de Roma à de Corinto sobre ordem, humildade e sucessão ministerial após conflito interno. Um dos testemunhos mais antigos da literatura cristã pós-apostólica.',
    contextEn:
      'A letter from the church of Rome to Corinth on order, humility, and ministerial succession after internal conflict. One of the earliest post-apostolic Christian literary witnesses.',
    scriptureUsePt:
      'Usa extensivamente as Escrituras de Israel (LXX) e alude a tradições paulinas e sinóticas; a Escritura funciona como prova e paradigma moral para corrigir a igreja.',
    scriptureUseEn:
      'Extensively uses the Scriptures of Israel (LXX) and alludes to Pauline and Synoptic traditions; Scripture functions as proof and moral paradigm for correcting the church.',
    christAsWordPt:
      'Cristo é o mediador e o modelo de humildade; a autoridade da “Palavra” aparece sobretudo como Escritura e como mensagem apostólica sobre Cristo, não como especulação filosófica do Logos.',
    christAsWordEn:
      'Christ is mediator and model of humility; the authority of the “Word” appears chiefly as Scripture and as the apostolic message about Christ, not as philosophical Logos speculation.',
    authorityViewPt:
      'Combina Escritura, exemplo dos apóstolos e ordem eclesial; a carta reivindica correção fraterna com peso apostólico-romano, mas ainda sem um cânon NT fechado.',
    authorityViewEn:
      'Combines Scripture, the apostles’ example, and ecclesial order; the letter claims fraternal correction with Roman-apostolic weight, still without a closed NT canon.',
    primarySources: [
      { label: 'Early Christian Writings — 1 Clement', url: 'http://www.earlychristianwritings.com/1clement.html' },
      { label: 'New Advent — First Clement', url: 'https://www.newadvent.org/fathers/1010.htm' },
      { label: 'CCEL — Ante-Nicene Fathers, vol. 1 (1 Clement)', url: 'https://www.ccel.org/ccel/schaff/anf01.ii.ii.html' },
    ],
    bibliography: [
      'Michael W. Holmes, The Apostolic Fathers (Baker Academic)',
      'Bart D. Ehrman, The Apostolic Fathers, Loeb Classical Library',
      'Andrew F. Gregory and Christopher M. Tuckett (eds.), The Reception of the New Testament in the Apostolic Fathers (Oxford University Press)',
    ],
  },
  {
    id: '2-clement',
    namePt: '2 Clemente',
    nameEn: '2 Clement',
    dateApprox: 'c. 100–140 CE (early–mid 2nd century)',
    contextPt:
      'Homilia cristã antiga, tradicionalmente associada ao corpus clementino, sobre arrependimento, pureza e perseverança. Não é necessariamente do mesmo autor de 1 Clemente.',
    contextEn:
      'An early Christian homily, traditionally associated with the Clementine corpus, on repentance, purity, and perseverance. Not necessarily by the same author as 1 Clement.',
    scriptureUsePt:
      'Cita “as Escrituras” e ditos do Senhor; mostra a Escritura e a tradição oral de Jesus como autoridade para a pregação homilética.',
    scriptureUseEn:
      'Cites “the Scriptures” and sayings of the Lord; shows Scripture and oral Jesus tradition as authority for homiletic preaching.',
    christAsWordPt:
      'Enfatiza Cristo como Salvador e Juiz; a “palavra” aparece na pregação e nos mandamentos, com menor desenvolvimento do Logos metafísico.',
    christAsWordEn:
      'Emphasizes Christ as Savior and Judge; the “word” appears in preaching and commandments, with less development of a metaphysical Logos.',
    authorityViewPt:
      'A autoridade homilética baseia-se em Escritura e ditos do Senhor recebidos pela igreja; o texto testemunha uso litúrgico-catequético precoce.',
    authorityViewEn:
      'Homiletic authority rests on Scripture and the Lord’s sayings received by the church; the text witnesses early liturgical-catechetical use.',
    primarySources: [
      { label: 'Early Christian Writings — 2 Clement', url: 'http://www.earlychristianwritings.com/2clement.html' },
      { label: 'New Advent — Second Clement', url: 'https://www.newadvent.org/fathers/1011.htm' },
      { label: 'CCEL — Ante-Nicene Fathers, vol. 9 (2 Clement)', url: 'https://www.ccel.org/ccel/schaff/anf09.ii.ii.html' },
    ],
    bibliography: [
      'Michael W. Holmes, The Apostolic Fathers (Baker Academic)',
      'Bart D. Ehrman, The Apostolic Fathers, Loeb Classical Library',
      'Christopher M. Tuckett, 2 Clement: Introduction, Text, and Commentary (Oxford University Press)',
    ],
  },
  {
    id: 'ignatius',
    namePt: 'Inácio de Antioquia (cartas)',
    nameEn: 'Ignatius of Antioch (letters)',
    dateApprox: 'c. 110 CE (early 2nd century)',
    contextPt:
      'Cartas escritas a caminho do martírio em Roma, dirigidas a igrejas da Ásia Menor e a Policarpo. Defendem unidade eclesial sob o bispo e combatem docetismo.',
    contextEn:
      'Letters written en route to martyrdom in Rome, addressed to Asian churches and to Polycarp. They defend ecclesial unity under the bishop and oppose docetism.',
    scriptureUsePt:
      'Alude a tradições paulinas e evangélicas; a autoridade de Cristo e dos apóstolos é central, e a Escritura do AT é pressuposta, embora as cartas sejam mais cristológicas e eclesiológicas que exegéticas.',
    scriptureUseEn:
      'Alludes to Pauline and Gospel traditions; the authority of Christ and the apostles is central, and OT Scripture is presupposed, though the letters are more christological and ecclesiological than exegetical.',
    christAsWordPt:
      'Cristo é a verdade encarnada; Inácio usa linguagem forte da encarnação e da Eucaristia. Em Efésios 15 e contextos afins, a “palavra” está ligada à revelação em Cristo, não a um livro isolado.',
    christAsWordEn:
      'Christ is incarnate truth; Ignatius uses strong incarnation and Eucharist language. In Ephesians 15 and related contexts, the “word” is tied to revelation in Christ, not to a book in isolation.',
    authorityViewPt:
      'Autoridade: Cristo → apóstolos → bispo/presbíteros/diáconos em unidade; a Escritura e a tradição apostólica sustentam a ortodoxia anti-docética.',
    authorityViewEn:
      'Authority: Christ → apostles → bishop/presbyters/deacons in unity; Scripture and apostolic tradition underwrite anti-docetic orthodoxy.',
    primarySources: [
      { label: 'Early Christian Writings — Ignatius', url: 'http://www.earlychristianwritings.com/ignatius.html' },
      { label: 'New Advent — Epistle of Ignatius to the Ephesians', url: 'https://www.newadvent.org/fathers/0104.htm' },
      { label: 'CCEL — Ante-Nicene Fathers, vol. 1 (Ignatius)', url: 'https://www.ccel.org/ccel/schaff/anf01.v.i.html' },
    ],
    bibliography: [
      'Michael W. Holmes, The Apostolic Fathers (Baker Academic)',
      'William R. Schoedel, Ignatius of Antioch: A Commentary (Hermeneia, Fortress Press)',
      'Allen Brent, Ignatius of Antioch: A Martyr Bishop and the Origin of Episcopacy (Continuum/T&T Clark)',
    ],
  },
  {
    id: 'polycarp',
    namePt: 'Policarpo de Esmirna — Carta aos Filipenses',
    nameEn: 'Polycarp of Smyrna — Letter to the Philippians',
    dateApprox: 'c. 110–140 CE',
    contextPt:
      'Carta pastoral a Filipos sobre justiça, paciência, heresia e o legado de Inácio. Policarpo é figura-ponte entre a era apostólica e a patrística.',
    contextEn:
      'A pastoral letter to Philippi on righteousness, patience, heresy, and Ignatius’s legacy. Polycarp is a bridge figure between the apostolic and patristic eras.',
    scriptureUsePt:
      'Cita e ecoa amplamente Paulo, 1 Pedro e tradições evangélicas; trata escritos apostólicos com autoridade normativa semelhante à das Escrituras.',
    scriptureUseEn:
      'Quotes and echoes Paul, 1 Peter, and Gospel traditions extensively; treats apostolic writings with normative authority akin to Scripture.',
    christAsWordPt:
      'Cristo é o juiz e o modelo da fé; a ênfase recai na fidelidade ao evangelho recebido, não numa teologia especulativa do Logos.',
    christAsWordEn:
      'Christ is judge and model of faith; the emphasis falls on fidelity to the received gospel, not on speculative Logos theology.',
    authorityViewPt:
      'Autoridade da Escritura (AT) e dos escritos/ensinamentos apostólicos contra o erro; a tradição viva da igreja confirma o evangelho.',
    authorityViewEn:
      'Authority of Scripture (OT) and apostolic writings/teachings against error; the church’s living tradition confirms the gospel.',
    primarySources: [
      { label: 'Early Christian Writings — Polycarp to the Philippians', url: 'http://www.earlychristianwritings.com/polycarp.html' },
      { label: 'New Advent — Polycarp to the Philippians', url: 'https://www.newadvent.org/fathers/0136.htm' },
      { label: 'CCEL — Ante-Nicene Fathers, vol. 1 (Polycarp)', url: 'https://www.ccel.org/ccel/schaff/anf01.iv.ii.html' },
    ],
    bibliography: [
      'Michael W. Holmes, The Apostolic Fathers (Baker Academic)',
      'Paul Hartog, Polycarp and the New Testament (Mohr Siebeck)',
      'Bart D. Ehrman, The Apostolic Fathers, Loeb Classical Library',
    ],
  },
  {
    id: 'martyrdom-polycarp',
    namePt: 'Martírio de Policarpo',
    nameEn: 'Martyrdom of Polycarp',
    dateApprox: 'c. mid–late 2nd century (events often dated c. 155–167 CE)',
    contextPt:
      'Narrativa do martírio de Policarpo em Esmirna, moldada em linguagem bíblica e hagiográfica. Um dos primeiros atos de mártires cristãos.',
    contextEn:
      'Narrative of Polycarp’s martyrdom in Smyrna, shaped in biblical and hagiographic language. One of the earliest Christian martyr acts.',
    scriptureUsePt:
      'Imita padrões de narrativa bíblica (especialmente paixão) e cita Escrituras; a Escritura fornece o mapa interpretativo do martírio.',
    scriptureUseEn:
      'Imitates biblical narrative patterns (especially passion) and cites Scriptures; Scripture supplies the interpretive map of martyrdom.',
    christAsWordPt:
      'Policarpo confessa Cristo como Rei e Salvador; a “palavra” aparece na confissão e no testemunho, alinhada ao Senhor sofredor.',
    christAsWordEn:
      'Polycarp confesses Christ as King and Savior; the “word” appears in confession and witness, aligned with the suffering Lord.',
    authorityViewPt:
      'A autoridade do mártir deriva da fidelidade a Cristo e às Escrituras; o texto reforça memória apostólica e culto cristológico.',
    authorityViewEn:
      'The martyr’s authority derives from fidelity to Christ and the Scriptures; the text reinforces apostolic memory and christological worship.',
    primarySources: [
      { label: 'Early Christian Writings — Martyrdom of Polycarp', url: 'http://www.earlychristianwritings.com/martyrdompolycarp.html' },
      { label: 'New Advent — Martyrdom of Polycarp', url: 'https://www.newadvent.org/fathers/0102.htm' },
      { label: 'CCEL — Ante-Nicene Fathers, vol. 1 (Martyrdom of Polycarp)', url: 'https://www.ccel.org/ccel/schaff/anf01.iv.iv.html' },
    ],
    bibliography: [
      'Michael W. Holmes, The Apostolic Fathers (Baker Academic)',
      'Candida R. Moss, The Other Christs: Imitating Jesus in Ancient Christian Ideologies of Martyrdom (Oxford University Press)',
      'Bart D. Ehrman, The Apostolic Fathers, Loeb Classical Library',
    ],
  },
  {
    id: 'barnabas',
    namePt: 'Epístola de Barnabé',
    nameEn: 'Epistle of Barnabas',
    dateApprox: 'c. 70–135 CE (often early 2nd century)',
    contextPt:
      'Tratado alegórico-cristão sobre a Lei, o templo e a identidade do povo de Deus. Interpretação tipológica intensa das Escrituras de Israel.',
    contextEn:
      'An allegorical-Christian treatise on the Law, the temple, and the identity of God’s people. Intense typological interpretation of Israel’s Scriptures.',
    scriptureUsePt:
      'Cita massivamente a LXX com leitura cristológica e alegórica; a Escritura é autoridade máxima, reinterpretada como apontando para Cristo e a nova aliança.',
    scriptureUseEn:
      'Massively cites the LXX with christological and allegorical reading; Scripture is supreme authority, reinterpreted as pointing to Christ and the new covenant.',
    christAsWordPt:
      'Cristo é a chave hermenêutica das Escrituras; a “palavra” do Senhor revela o sentido verdadeiro da Lei e dos profetas.',
    christAsWordEn:
      'Christ is the hermeneutical key to the Scriptures; the Lord’s “word” discloses the true sense of the Law and the Prophets.',
    authorityViewPt:
      'Escritura (lida cristologicamente) governa a doutrina; a tradição interpretativa cristã reivindica o verdadeiro Israel.',
    authorityViewEn:
      'Scripture (read christologically) governs doctrine; Christian interpretive tradition claims the true Israel.',
    primarySources: [
      { label: 'Early Christian Writings — Barnabas', url: 'http://www.earlychristianwritings.com/barnabas.html' },
      { label: 'New Advent — Epistle of Barnabas', url: 'https://www.newadvent.org/fathers/0124.htm' },
      { label: 'CCEL — Ante-Nicene Fathers, vol. 1 (Barnabas)', url: 'https://www.ccel.org/ccel/schaff/anf01.vi.ii.html' },
    ],
    bibliography: [
      'Michael W. Holmes, The Apostolic Fathers (Baker Academic)',
      'James Carleton Paget, The Epistle of Barnabas: Outlook and Background (Mohr Siebeck)',
      'Reidar Hvalvik, The Struggle for Scripture and Covenant: The Epistle of Barnabas (Mohr Siebeck)',
    ],
  },
  {
    id: 'hermas',
    namePt: 'Pastor de Hermas',
    nameEn: 'Shepherd of Hermas',
    dateApprox: 'c. mid–late 2nd century (often c. 100–150 CE)',
    contextPt:
      'Apocalipse cristão romano com visões, mandamentos e parábolas sobre arrependimento e pureza da igreja. Amplamente lido na antiguidade; em alguns círculos quase canônico.',
    contextEn:
      'A Roman Christian apocalypse with visions, mandates, and parables on repentance and church purity. Widely read in antiquity; in some circles nearly canonical.',
    scriptureUsePt:
      'Menos citação formal do AT/NT do que Barnabé ou 1 Clemente; autoridade vem de revelação visionária e exigência ética, em tensão com o cânon emergente (cf. Muratoriano).',
    scriptureUseEn:
      'Less formal OT/NT quotation than Barnabas or 1 Clement; authority comes from visionary revelation and ethical demand, in tension with the emerging canon (cf. Muratorian Fragment).',
    christAsWordPt:
      'Cristologia mediada por figuras simbólicas (Filho, Espírito, Rocha); a “palavra” aparece como mandamento e mensagem revelada ao penitente.',
    christAsWordEn:
      'Christology mediated through symbolic figures (Son, Spirit, Rock); the “word” appears as commandment and revealed message to the penitent.',
    authorityViewPt:
      'Autoridade revelatória carismática sob disciplina da igreja; o status canônico foi discutido (Eusébio o coloca entre antilegomena/úteis).',
    authorityViewEn:
      'Charismatic revelatory authority under church discipline; canonical status was debated (Eusebius places it among antilegomena/useful books).',
    primarySources: [
      { label: 'Early Christian Writings — Shepherd of Hermas', url: 'http://www.earlychristianwritings.com/shepherd.html' },
      { label: 'New Advent — Shepherd of Hermas', url: 'https://www.newadvent.org/fathers/0201.htm' },
      { label: 'CCEL — Ante-Nicene Fathers, vol. 2 (Hermas)', url: 'https://www.ccel.org/ccel/schaff/anf02.ii.ii.html' },
    ],
    bibliography: [
      'Michael W. Holmes, The Apostolic Fathers (Baker Academic)',
      'Carolyn Osiek, Shepherd of Hermas: A Commentary (Hermeneia, Fortress Press)',
      'Norbert Brox, Der Hirt des Hermas (Vandenhoeck & Ruprecht)',
    ],
  },
  {
    id: 'papias',
    namePt: 'Pápias de Hierápolis (fragmentos)',
    nameEn: 'Papias of Hierapolis (fragments)',
    dateApprox: 'c. early–mid 2nd century (often c. 110–130 CE)',
    contextPt:
      'Bispo de Hierápolis; Exposição dos Oráculos do Senhor sobrevive em fragmentos (principalmente via Eusébio e Irineu). Interesse pela tradição oral e pela origem dos Evangelhos.',
    contextEn:
      'Bishop of Hierapolis; Exposition of the Oracles of the Lord survives in fragments (chiefly via Eusebius and Irenaeus). Interest in oral tradition and Gospel origins.',
    scriptureUsePt:
      'Valoriza a “voz viva e permanente” da tradição testemunhal ao lado de escritos; menciona Marcos como intérprete de Pedro e Mateus em hebraico/aramaico (segundo Eusébio, Hist. Eccl. 3.39).',
    scriptureUseEn:
      'Values the “living and abiding voice” of eyewitness tradition alongside writings; mentions Mark as Peter’s interpreter and Matthew in Hebrew/Aramaic (per Eusebius, Hist. Eccl. 3.39).',
    christAsWordPt:
      'Os “oráculos do Senhor” são ditos e atos de Jesus transmitidos; a Palavra é Cristo falando na tradição apostólica viva.',
    christAsWordEn:
      'The “oracles of the Lord” are Jesus’ sayings and deeds transmitted; the Word is Christ speaking in living apostolic tradition.',
    authorityViewPt:
      'Autoridade combinada de tradição oral confiável e escritos evangélicos emergentes; Pápias ilustra o estágio pré-canônico da transmissão.',
    authorityViewEn:
      'Combined authority of reliable oral tradition and emerging Gospel writings; Papias illustrates the pre-canonical stage of transmission.',
    primarySources: [
      { label: 'Early Christian Writings — Papias', url: 'http://www.earlychristianwritings.com/papias.html' },
      { label: 'New Advent — Fragments of Papias', url: 'https://www.newadvent.org/fathers/0125.htm' },
      { label: 'CCEL — Eusebius, Church History 3.39 (Papias)', url: 'https://www.ccel.org/ccel/schaff/npnf201.iii.viii.xxxix.html' },
    ],
    bibliography: [
      'Michael W. Holmes, The Apostolic Fathers (Baker Academic)',
      'Richard Bauckham, Jesus and the Eyewitnesses (Eerdmans)',
      'Eusebius of Caesarea, Ecclesiastical History 3.39',
    ],
  },
  {
    id: 'diognetus',
    namePt: 'Epístola a Diogneto',
    nameEn: 'Epistle to Diognetus',
    dateApprox: 'c. mid–late 2nd century (date debated)',
    contextPt:
      'Apologia cristã anônima explicando identidade cristã, rejeição de ídolos e a economia da revelação. Estilo literário elevado; às vezes incluída entre os Apostólicos por convenção editorial.',
    contextEn:
      'Anonymous Christian apology explaining Christian identity, rejection of idols, and the economy of revelation. Elevated literary style; sometimes included among the Apostolic Fathers by editorial convention.',
    scriptureUsePt:
      'Pouco citacional; argumenta teologicamente a partir da revelação em Cristo e da distinção entre criação, Lei e evangelho.',
    scriptureUseEn:
      'Little formal quotation; argues theologically from revelation in Christ and the distinction among creation, Law, and gospel.',
    christAsWordPt:
      'Passagens célebres apresentam o Filho/Logos enviado pelo Pai como revelador (caps. 7–11 em muitas edições); Cristo é a Palavra reveladora por excelência.',
    christAsWordEn:
      'Famous passages present the Son/Logos sent by the Father as revealer (chs. 7–11 in many editions); Christ is the revelatory Word par excellence.',
    authorityViewPt:
      'Autoridade da revelação divina em Cristo diante da filosofia e do paganismo; Escritura implícita, Cristo explícito como conteúdo da fé.',
    authorityViewEn:
      'Authority of divine revelation in Christ over against philosophy and paganism; Scripture implicit, Christ explicit as the content of faith.',
    primarySources: [
      { label: 'Early Christian Writings — Diognetus', url: 'http://www.earlychristianwritings.com/diognetus.html' },
      { label: 'New Advent — Epistle to Diognetus', url: 'https://www.newadvent.org/fathers/0101.htm' },
      { label: 'CCEL — Ante-Nicene Fathers, vol. 1 (Diognetus)', url: 'https://www.ccel.org/ccel/schaff/anf01.iii.ii.html' },
    ],
    bibliography: [
      'Michael W. Holmes, The Apostolic Fathers (Baker Academic)',
      'Clayton N. Jefford, The Epistle to Diognetus (Introduction, Text, and Commentary) (Oxford / Cascade discussions)',
      'Henri Irénée Marrou, A Diognète (Sources Chrétiennes)',
    ],
  },
]
