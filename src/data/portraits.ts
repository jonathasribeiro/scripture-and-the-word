export interface AuthorPortrait {
  commonsFile: string
  credit: string
  license?: string
  altPt: string
  altEn: string
}

function commonsUrl(file: string, width = 480): string {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`
}

function commonsPage(file: string): string {
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}`
}

export interface ResolvedPortrait {
  imageUrl: string
  sourceUrl: string
  credit: string
  license?: string
  altPt: string
  altEn: string
}

const RAW: Record<string, AuthorPortrait> = {
  // Church Fathers
  'justin-martyr': {
    commonsFile: 'Justin_Martyr.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato tradicional de Justino Mártir',
    altEn: 'Traditional portrait of Justin Martyr',
  },
  irenaeus: {
    commonsFile: 'Saint_Irenaeus.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de Irineu de Lyon',
    altEn: 'Portrait of Irenaeus of Lyons',
  },
  tertullian: {
    commonsFile: 'Tertullian.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Gravura de Tertuliano',
    altEn: 'Engraving of Tertullian',
  },
  'clement-alexandria': {
    commonsFile: 'Clement alexandrin.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de Clemente de Alexandria',
    altEn: 'Portrait of Clement of Alexandria',
  },
  origen: {
    commonsFile: 'Origen.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de Orígenes',
    altEn: 'Portrait of Origen',
  },
  cyprian: {
    commonsFile: 'Cyprian von Karthago2.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de Cipriano de Cartago',
    altEn: 'Icon of Cyprian of Carthage',
  },
  eusebius: {
    commonsFile: 'Eusebius of Caesarea.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de Eusébio de Cesareia',
    altEn: 'Portrait of Eusebius of Caesarea',
  },
  athanasius: {
    commonsFile: 'St_Athanasius.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de Atanásio de Alexandria',
    altEn: 'Icon of Athanasius of Alexandria',
  },
  basil: {
    commonsFile: 'Basil of Caesarea.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de Basílio de Cesareia',
    altEn: 'Icon of Basil of Caesarea',
  },
  'gregory-nazianzen': {
    commonsFile: 'Gregory of Nazianzus.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de Gregório de Nazianzo',
    altEn: 'Icon of Gregory of Nazianzus',
  },
  'gregory-nyssa': {
    commonsFile: 'Gregory of Nyssa.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de Gregório de Nissa',
    altEn: 'Icon of Gregory of Nyssa',
  },
  chrysostom: {
    commonsFile: 'Johnchrysostom.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de João Crisóstomo',
    altEn: 'Icon of John Chrysostom',
  },
  jerome: {
    commonsFile: 'Saint Jerome in His Study (Dürer).jpg',
    credit: 'Albrecht Dürer via Wikimedia Commons',
    license: 'Public domain',
    altPt: 'São Jerônimo em seu estúdio (Dürer)',
    altEn: 'Saint Jerome in His Study (Dürer)',
  },
  augustine: {
    commonsFile: 'Saint Augustine by Philippe de Champaigne.jpg',
    credit: 'Philippe de Champaigne via Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Santo Agostinho por Philippe de Champaigne',
    altEn: 'Saint Augustine by Philippe de Champaigne',
  },
  'cyril-jerusalem': {
    commonsFile: 'Saint Cyril of Jerusalem.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de Cirilo de Jerusalém',
    altEn: 'Icon of Cyril of Jerusalem',
  },
  'cyril-alexandria': {
    commonsFile: 'Icon St. Cyril of Alexandria.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de Cirilo de Alexandria',
    altEn: 'Icon of Cyril of Alexandria',
  },
  'john-damascus': {
    commonsFile: 'Ioann Damaskin ikona.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de João Damasceno',
    altEn: 'Icon of John of Damascus',
  },

  // Apostolic
  ignatius: {
    commonsFile: 'Ignatius of Antioch.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de Inácio de Antioquia',
    altEn: 'Icon of Ignatius of Antioch',
  },
  polycarp: {
    commonsFile: 'Polycarp.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de Policarpo',
    altEn: 'Icon of Polycarp',
  },
  'martyrdom-polycarp': {
    commonsFile: 'Polycarp.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de Policarpo (martírio)',
    altEn: 'Icon of Polycarp (martyrdom)',
  },
  '1-clement': {
    commonsFile: 'Clemens_I.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de Clemente de Roma',
    altEn: 'Icon of Clement of Rome',
  },
  '2-clement': {
    commonsFile: 'Clemens_I.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone associado a 2 Clemente',
    altEn: 'Icon associated with 2 Clement',
  },
  barnabas: {
    commonsFile: 'Apostle Barnabas.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Ícone de Barnabé',
    altEn: 'Icon of Barnabas',
  },
  hermas: {
    commonsFile: 'The Shepherd of Hermas.png',
    credit: 'Wikimedia Commons',
    license: 'See Commons',
    altPt: 'Ilustração do Pastor de Hermas',
    altEn: 'Illustration of the Shepherd of Hermas',
  },
  didache: {
    commonsFile: 'Didache manuscript.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Manuscrito associado à Didaquê',
    altEn: 'Manuscript associated with the Didache',
  },
  papias: {
    commonsFile: 'Papias of Hierapolis.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Representação de Papias',
    altEn: 'Representation of Papias',
  },
  diognetus: {
    commonsFile: 'Justin_Martyr.jpg',
    credit: 'Wikimedia Commons (contexto apologético)',
    license: 'Public domain',
    altPt: 'Imagem do meio apologético antigo',
    altEn: 'Image from the ancient apologetic milieu',
  },

  // Reformers
  luther: {
    commonsFile: 'Lucas Cranach d.Ä. - Martin Luther, 1528 (Veste Coburg).jpg',
    credit: 'Lucas Cranach the Elder via Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de Martinho Lutero',
    altEn: 'Portrait of Martin Luther',
  },
  melanchthon: {
    commonsFile: 'Cranach, Portraits of Martin Luther and Philipp Melanchthon (cropped2).jpg',
    credit: 'Lucas Cranach the Elder via Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de Filipe Melanchthon',
    altEn: 'Portrait of Philip Melanchthon',
  },
  calvin: {
    commonsFile: 'John Calvin.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de João Calvino',
    altEn: 'Portrait of John Calvin',
  },
  zwingli: {
    commonsFile: 'Zwingli Hans Asper.jpeg',
    credit: 'Hans Asper via Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de Ulrico Zuínglio',
    altEn: 'Portrait of Huldrych Zwingli',
  },
  bullinger: {
    commonsFile: 'Heinrich Bullinger.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de Heinrich Bullinger',
    altEn: 'Portrait of Heinrich Bullinger',
  },
  cranmer: {
    commonsFile: 'Thomas Cranmer by Gerlach Flicke.jpg',
    credit: 'Gerlach Flicke via Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de Thomas Cranmer',
    altEn: 'Portrait of Thomas Cranmer',
  },
  tyndale: {
    commonsFile: 'William Tyndale.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de William Tyndale',
    altEn: 'Portrait of William Tyndale',
  },
  'menno-simons': {
    commonsFile: 'Menno Simons.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de Menno Simons',
    altEn: 'Portrait of Menno Simons',
  },
  bucer: {
    commonsFile: 'Martin Bucer.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de Martin Bucer',
    altEn: 'Portrait of Martin Bucer',
  },
  knox: {
    commonsFile: 'John Knox.jpg',
    credit: 'Wikimedia Commons',
    license: 'Public domain',
    altPt: 'Retrato de John Knox',
    altEn: 'Portrait of John Knox',
  },

  // Modern (Commons-available)
  barth: {
    commonsFile: 'Karl Barth Bundesarchiv Bild.png',
    credit: 'Bundesarchiv via Wikimedia Commons',
    license: 'See file page (CC / Bundesarchiv)',
    altPt: 'Fotografia de Karl Barth',
    altEn: 'Photograph of Karl Barth',
  },
  brunner: {
    commonsFile: 'Wfk-emil brunner-20170209.png',
    credit: 'Wikimedia Commons',
    license: 'See file page',
    altPt: 'Imagem associada a Emil Brunner',
    altEn: 'Image associated with Emil Brunner',
  },
  bultmann: {
    commonsFile: 'Rudolf Bultmann als Porträtbüste von Michael Mohns.JPG',
    credit: 'Wikimedia Commons',
    license: 'See file page',
    altPt: 'Busto de Rudolf Bultmann',
    altEn: 'Bust of Rudolf Bultmann',
  },
  metzger: {
    commonsFile: 'Bruce Metzger.JPG',
    credit: 'Wikimedia Commons',
    license: 'See file page',
    altPt: 'Fotografia de Bruce Metzger',
    altEn: 'Photograph of Bruce Metzger',
  },
  'nt-wright': {
    commonsFile: 'NTWright071220.jpg',
    credit: 'Wikimedia Commons',
    license: 'See file page',
    altPt: 'Fotografia de N. T. Wright',
    altEn: 'Photograph of N. T. Wright',
  },
}

export function getAuthorPortrait(id: string): ResolvedPortrait | undefined {
  const raw = RAW[id]
  if (!raw) return undefined
  return {
    imageUrl: commonsUrl(raw.commonsFile),
    sourceUrl: commonsPage(raw.commonsFile),
    credit: raw.credit,
    license: raw.license,
    altPt: raw.altPt,
    altEn: raw.altEn,
  }
}
