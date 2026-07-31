import type { TraditionPosition } from './types'

export type { TraditionPosition }

export const traditionPositions: TraditionPosition[] = [
  {
    id: 'inerrancy',
    namePt: 'Inerrância',
    nameEn: 'Inerrancy',
    definitionPt:
      'Doutrina de que a Escritura, nos autógrafos e devidamente interpretada, não afirma erro no que pretende ensinar (Chicago Statement, 1978, como formulação evangélica moderna).',
    definitionEn:
      'Doctrine that Scripture, in the autographs and properly interpreted, affirms no error in what it intends to teach (Chicago Statement, 1978, as a modern evangelical formulation).',
    representatives: ['B. B. Warfield', 'J. I. Packer', 'Chicago Statement signatories'],
    virtuesPt:
      'Protege a confiabilidade da revelação escrita e a autoridade normativa do cânon.',
    virtuesEn:
      'Protects the reliability of written revelation and the normative authority of the canon.',
    critiquesPt:
      'Pode ser aplicada de modo anacrônico a gêneros literários; debates sobre escopo (história, ciência, detalhes).',
    critiquesEn:
      'Can be applied anachronistically to literary genres; debates over scope (history, science, details).',
    thesisRelationPt:
      'Compatível com confessar Cristo como Logos, desde que inerrância não substitua Cristo pelo códice.',
    thesisRelationEn:
      'Compatible with confessing Christ as Logos, provided inerrancy does not replace Christ with the codex.',
  },
  {
    id: 'infallibility',
    namePt: 'Infalibilidade',
    nameEn: 'Infallibility',
    definitionPt:
      'Afirma que a Escritura não falha em seu propósito salvífico e doutrinal; às vezes usada como alternativa mais ampla ou mais branda que “inerrância”.',
    definitionEn:
      'Affirms that Scripture does not fail in its saving and doctrinal purpose; sometimes used as a broader or softer alternative to “inerrancy.”',
    representatives: ['Some mid-20th-century evangelicals', 'Various Anglican formulations'],
    virtuesPt:
      'Enfatiza o fim salvífico da Escritura sem exigir disputas sobre cada detalhe fenomênico.',
    virtuesEn:
      'Emphasizes Scripture’s saving end without requiring disputes over every phenomenal detail.',
    critiquesPt:
      'Pode tornar-se vaga se não definir o que a Escritura garante.',
    critiquesEn:
      'Can become vague if it does not define what Scripture guarantees.',
    thesisRelationPt:
      'Útil para articular autoridade sem reduzir a Palavra a um manual sem Cristo.',
    thesisRelationEn:
      'Useful for articulating authority without reducing the Word to a manual without Christ.',
  },
  {
    id: 'verbal-plenary',
    namePt: 'Inspiração verbal plenária',
    nameEn: 'Verbal plenary inspiration',
    definitionPt:
      'Toda a Escritura (plenária) e suas palavras (verbal) são inspiradas por Deus, sem ditado mecânico necessariamente.',
    definitionEn:
      'All of Scripture (plenary) and its words (verbal) are inspired by God, not necessarily by mechanical dictation.',
    representatives: ['Warfield', 'Old Princeton', 'Many confessional evangelicals'],
    virtuesPt:
      'Leva a sério a forma textual da revelação e a autoridade de todo o cânon.',
    virtuesEn:
      'Takes seriously the textual form of revelation and the authority of the whole canon.',
    critiquesPt:
      'Mal compreendida como ditado; precisa de hermenêutica de gênero e contexto.',
    critiquesEn:
      'Misunderstood as dictation; needs genre and context hermeneutics.',
    thesisRelationPt:
      'Sustenta que a graphē é Palavra escrita, sob o Logos pessoal.',
    thesisRelationEn:
      'Supports that graphē is written Word under the personal Logos.',
  },
  {
    id: 'dynamic-inspiration',
    namePt: 'Inspiração dinâmica',
    nameEn: 'Dynamic inspiration',
    definitionPt:
      'Modelos que enfatizam a ação do Espírito no autor/comunidade mais que a garantia de cada palavra; espectro amplo (de ortodoxo a liberal).',
    definitionEn:
      'Models emphasizing the Spirit’s action in the author/community more than word-level guarantee; wide spectrum (from orthodox to liberal).',
    representatives: ['Schleiermacher (influential background)', 'Various mediating theologians', 'Some modern evangelicals'],
    virtuesPt:
      'Destaca historicidade humana e papel do Espírito.',
    virtuesEn:
      'Highlights human historicity and the Spirit’s role.',
    critiquesPt:
      'Pode diluir a autoridade normativa do texto canônico.',
    critiquesEn:
      'Can dilute the normative authority of the canonical text.',
    thesisRelationPt:
      'Ajuda a lembrar o elemento humano, mas não deve esvaziar a graphē.',
    thesisRelationEn:
      'Helps recall the human element but must not empty graphē.',
  },
  {
    id: 'neo-orthodoxy',
    namePt: 'Neo-ortodoxia',
    nameEn: 'Neo-orthodoxy',
    definitionPt:
      'Corrente do século XX (Barth, Brunner et al.) que recentra a revelação em Cristo como evento, com a Escritura como testemunho canônico.',
    definitionEn:
      'Twentieth-century current (Barth, Brunner et al.) recentering revelation in Christ as event, with Scripture as canonical witness.',
    representatives: ['Karl Barth', 'Emil Brunner'],
    virtuesPt:
      'Recupera Cristo como Palavra contra liberalismo cultural e biblicismo objetivista.',
    virtuesEn:
      'Recovers Christ as Word against cultural liberalism and objectivist biblicism.',
    critiquesPt:
      'Críticos temem enfraquecer a identidade Escritura = Palavra de Deus.',
    critiquesEn:
      'Critics fear weakening the identity Scripture = Word of God.',
    thesisRelationPt:
      'Fornece gramática clássica moderna para “Cristo é a Palavra; a Bíblia testemunha”.',
    thesisRelationEn:
      'Supplies classical modern grammar for “Christ is the Word; the Bible witnesses.”',
  },
  {
    id: 'propositional-revelation',
    namePt: 'Revelação proposicional',
    nameEn: 'Propositional revelation',
    definitionPt:
      'Deus revela verdades comunicáveis em proposições; a Escritura transmite conteúdo cognitivo normativo.',
    definitionEn:
      'God reveals communicable truths in propositions; Scripture transmits normative cognitive content.',
    representatives: ['Carl F. H. Henry', 'Many evangelical systematicians'],
    virtuesPt:
      'Preserva verdade doutrinal e possibilidade de confissão.',
    virtuesEn:
      'Preserves doctrinal truth and the possibility of confession.',
    critiquesPt:
      'Pode reduzir revelação a informação, negligenciando ato, presença e narrativa.',
    critiquesEn:
      'Can reduce revelation to information, neglecting act, presence, and narrative.',
    thesisRelationPt:
      'Necessária mas insuficiente se omitir o Logos pessoal e o drama canônico.',
    thesisRelationEn:
      'Necessary but insufficient if it omits the personal Logos and canonical drama.',
  },
  {
    id: 'personal-revelation',
    namePt: 'Revelação pessoal',
    nameEn: 'Personal revelation',
    definitionPt:
      'Revelação como auto-doação de Deus em encontro (Brunner, personalismo); Cristo como revelador pessoal.',
    definitionEn:
      'Revelation as God’s self-giving in encounter (Brunner, personalism); Christ as personal revealer.',
    representatives: ['Emil Brunner', 'Personalist theologians'],
    virtuesPt:
      'Evita reduzir Deus a um livro de teses.',
    virtuesEn:
      'Avoids reducing God to a book of theses.',
    critiquesPt:
      'Risco de subjetivismo se desligar do cânon público.',
    critiquesEn:
      'Risk of subjectivism if detached from the public canon.',
    thesisRelationPt:
      'Alinha-se à primazia do Logos pessoal com necessidade de norma escriturística.',
    thesisRelationEn:
      'Aligns with the primacy of the personal Logos with need for a scriptural norm.',
  },
  {
    id: 'sola-scriptura',
    namePt: 'Sola Scriptura',
    nameEn: 'Sola Scriptura',
    definitionPt:
      'A Escritura é a norma final (norma normans) da fé e prática; tradição e magistério são subordinados.',
    definitionEn:
      'Scripture is the final norm (norma normans) of faith and practice; tradition and magisterium are subordinate.',
    representatives: ['Luther', 'Calvin', 'Westminster Confession'],
    virtuesPt:
      'Protege a igreja de tradições que contradizem o evangelho apostólico.',
    virtuesEn:
      'Protects the church from traditions that contradict the apostolic gospel.',
    critiquesPt:
      'Malformada vira solo Scriptura sem igreja, credo ou hermenêutica.',
    critiquesEn:
      'Malformed it becomes solo Scriptura without church, creed, or hermeneutics.',
    thesisRelationPt:
      'Afirma a autoridade da graphē sob Cristo, sem negar o papel da igreja no reconhecimento do cânon.',
    thesisRelationEn:
      'Affirms graphē’s authority under Christ without denying the church’s role in recognizing the canon.',
  },
  {
    id: 'prima-scriptura',
    namePt: 'Prima Scriptura',
    nameEn: 'Prima Scriptura',
    definitionPt:
      'A Escritura é a fonte primeira e principal, mas tradição, razão e experiência têm papéis subordinados (linguagem wesleyana/anglicana comum).',
    definitionEn:
      'Scripture is the first and principal source, but tradition, reason, and experience have subordinate roles (common Wesleyan/Anglican language).',
    representatives: ['Wesleyan quadrilateral interpreters', 'Many Anglicans'],
    virtuesPt:
      'Articula polaridade Escritura-tradição sem igualar autoridades.',
    virtuesEn:
      'Articulates Scripture–tradition polarity without equalizing authorities.',
    critiquesPt:
      'Pode tornar-se ambígua na prática decisória.',
    critiquesEn:
      'Can become ambiguous in decision-making practice.',
    thesisRelationPt:
      'Útil para dialogar com tradições que valorizam Padres e liturgia.',
    thesisRelationEn:
      'Useful for dialogue with traditions that value Fathers and liturgy.',
  },
  {
    id: 'scripture-and-tradition',
    namePt: 'Escritura e Tradição',
    nameEn: 'Scripture and Tradition',
    definitionPt:
      'Modelo católico (Dei Verbum): um único depósito da revelação transmitido em Escritura e Tradição.',
    definitionEn:
      'Catholic model (Dei Verbum): one deposit of revelation transmitted in Scripture and Tradition.',
    representatives: ['Council of Trent', 'Dei Verbum', 'Catholic magisterial theology'],
    virtuesPt:
      'Explica a mediação eclesial do cânon e a continuidade litúrgica.',
    virtuesEn:
      'Explains ecclesial mediation of the canon and liturgical continuity.',
    critiquesPt:
      'Protestantes temem tradição materialmente igualada à Escritura.',
    critiquesEn:
      'Protestants fear tradition materially equalized with Scripture.',
    thesisRelationPt:
      'Obriga a tese a distinguir reconhecimento canônico e norma final sem caricatura.',
    thesisRelationEn:
      'Requires the thesis to distinguish canonical recognition and final norm without caricature.',
  },
  {
    id: 'magisterium',
    namePt: 'Magistério',
    nameEn: 'Magisterium',
    definitionPt:
      'Autoridade docente oficial da Igreja (católica) para interpretar autenticamente o depósito da fé.',
    definitionEn:
      'Official teaching authority of the (Catholic) Church to interpret authentically the deposit of faith.',
    representatives: ['Vatican I / Vatican II documents', 'Catholic dogmatic manuals'],
    virtuesPt:
      'Oferece unidade interpretativa pública.',
    virtuesEn:
      'Offers public interpretive unity.',
    critiquesPt:
      'Pode eclipsar o julgamento escriturístico das igrejas e consciências.',
    critiquesEn:
      'Can eclipse the scriptural judgment of churches and consciences.',
    thesisRelationPt:
      'A tese protestante/ortodoxa alternativa insiste que o Magistério serve, não constitui, a Palavra.',
    thesisRelationEn:
      'The alternative Protestant/Orthodox thesis insists the Magisterium serves, does not constitute, the Word.',
  },
  {
    id: 'orthodox-tradition',
    namePt: 'Tradição ortodoxa',
    nameEn: 'Orthodox tradition',
    definitionPt:
      'Na Ortodoxia oriental, Escritura vive na Tradição (liturgia, Padres, concílios); a Bíblia é da igreja, lida eucaristicamente.',
    definitionEn:
      'In Eastern Orthodoxy, Scripture lives within Tradition (liturgy, Fathers, councils); the Bible belongs to the church, read eucharistically.',
    representatives: ['John of Damascus', 'Georges Florovsky', 'Orthodox Study Bible tradition'],
    virtuesPt:
      'Preserva unidade de culto, dogma e Escritura.',
    virtuesEn:
      'Preserves unity of worship, dogma, and Scripture.',
    critiquesPt:
      'Observadores externos veem dificuldade em criticar a tradição a partir do texto.',
    critiquesEn:
      'Outside observers see difficulty criticizing tradition from the text.',
    thesisRelationPt:
      'Reforça que Cristo-Logos e Escritura são inseparáveis da vida da igreja — sem anular a norma apostólica.',
    thesisRelationEn:
      'Reinforces that Christ-Logos and Scripture are inseparable from the church’s life — without nullifying the apostolic norm.',
  },
  {
    id: 'historical-criticism',
    namePt: 'Crítica histórica',
    nameEn: 'Historical criticism',
    definitionPt:
      'Métodos que situam textos em contextos históricos, fontes, formas e redações; espectro de usos confessional a céticos.',
    definitionEn:
      'Methods situating texts in historical contexts, sources, forms, and redactions; spectrum from confessional to skeptical uses.',
    representatives: ['Wellhausen (OT background)', 'Bultmann (NT forms)', 'Many contemporary critical scholars'],
    virtuesPt:
      'Ilumina contextos, gêneros e transmissão.',
    virtuesEn:
      'Illuminates contexts, genres, and transmission.',
    critiquesPt:
      'Pode tornar-se ideologia anti-teológica se negar a priori a revelação.',
    critiquesEn:
      'Can become anti-theological ideology if it denies revelation a priori.',
    thesisRelationPt:
      'Ferramenta legítima sob a confessão de Cristo e do cânon; não soberana sobre eles.',
    thesisRelationEn:
      'Legitimate tool under the confession of Christ and the canon; not sovereign over them.',
  },
  {
    id: 'canonical-reading',
    namePt: 'Leitura canônica',
    nameEn: 'Canonical reading',
    definitionPt:
      'Interpretação que toma a forma final do cânon como contexto teológico decisivo (Childs et al.).',
    definitionEn:
      'Interpretation taking the final form of the canon as decisive theological context (Childs et al.).',
    representatives: ['Brevard Childs', 'Christopher Seitz', 'Canonical approach scholars'],
    virtuesPt:
      'Recupera a Escritura como livro da igreja, não só como fragmentos de fontes.',
    virtuesEn:
      'Recovers Scripture as the church’s book, not only as source fragments.',
    critiquesPt:
      'Críticos pedem mais atenção à história pré-canônica e diversidade.',
    critiquesEn:
      'Critics ask for more attention to pre-canonical history and diversity.',
    thesisRelationPt:
      'Fortalece a graphē como testemunho unificado a Cristo sem negar filologia.',
    thesisRelationEn:
      'Strengthens graphē as unified witness to Christ without denying philology.',
  },
  {
    id: 'narrative-theology',
    namePt: 'Teologia narrativa',
    nameEn: 'Narrative theology',
    definitionPt:
      'Abordagens que enfatizam a Bíblia como narrativa formadora da identidade da igreja (Frei, Wright, etc., em chaves diversas).',
    definitionEn:
      'Approaches emphasizing the Bible as identity-forming narrative for the church (Frei, Wright, etc., in diverse keys).',
    representatives: ['Hans Frei', 'N. T. Wright', 'Narrative theology movements'],
    virtuesPt:
      'Reconecta autoridade e história redentora/missão.',
    virtuesEn:
      'Reconnects authority and redemptive history/mission.',
    critiquesPt:
      'Pode subestimar proposições dogmáticas e reivindicações de verdade.',
    critiquesEn:
      'Can underplay dogmatic propositions and truth claims.',
    thesisRelationPt:
      'Ajuda a ver a Escritura como testemunho narrativo do Logos, não como mera antologia de versículos.',
    thesisRelationEn:
      'Helps see Scripture as narrative witness to the Logos, not a mere anthology of verses.',
  },
]

/** Alias for consumers expecting `traditions` */
export const traditions = traditionPositions
