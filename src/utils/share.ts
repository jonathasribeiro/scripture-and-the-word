export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

export async function shareSection(opts: {
  title: string
  text: string
  url?: string
}): Promise<'shared' | 'copied' | 'failed'> {
  const url = opts.url ?? window.location.href
  if (navigator.share) {
    try {
      await navigator.share({ title: opts.title, text: opts.text, url })
      return 'shared'
    } catch {
      /* fall through */
    }
  }
  const ok = await copyText(url)
  return ok ? 'copied' : 'failed'
}

export function sectionUrl(hash: string): string {
  const base = `${window.location.origin}${window.location.pathname}`
  return `${base}#${hash.replace(/^#/, '')}`
}
