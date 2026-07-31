export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export function matchesQuery(haystack: string, query: string): boolean {
  const q = normalize(query.trim())
  if (!q) return true
  return normalize(haystack).includes(q)
}

export function searchItems<T>(
  items: T[],
  query: string,
  getText: (item: T) => string,
): T[] {
  if (!query.trim()) return items
  return items.filter((item) => matchesQuery(getText(item), query))
}
