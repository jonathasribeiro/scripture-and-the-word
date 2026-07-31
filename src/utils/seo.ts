export interface SeoMeta {
  title: string
  description: string
  lang: 'pt-BR' | 'en-US'
  path?: string
}

const SITE = 'https://scripture-and-the-word.netlify.app'

export function applySeo(meta: SeoMeta) {
  document.title = meta.title
  document.documentElement.lang = meta.lang === 'pt-BR' ? 'pt-BR' : 'en'

  const setMeta = (selector: string, attr: string, value: string) => {
    let el = document.querySelector(selector)
    if (!el) {
      el = document.createElement('meta')
      const nameOrProp = selector.includes('property=') ? 'property' : 'name'
      const key = selector.match(/['"]([^'"]+)['"]/)?.[1]
      if (key) el.setAttribute(nameOrProp, key)
      document.head.appendChild(el)
    }
    el.setAttribute(attr, value)
  }

  setMeta('meta[name="description"]', 'content', meta.description)
  setMeta('meta[property="og:title"]', 'content', meta.title)
  setMeta('meta[property="og:description"]', 'content', meta.description)
  setMeta('meta[name="twitter:title"]', 'content', meta.title)
  setMeta('meta[name="twitter:description"]', 'content', meta.description)

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = `${SITE}${meta.path ?? '/'}`
}
