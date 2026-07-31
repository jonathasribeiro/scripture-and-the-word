export function filterByTags<T extends { tags?: string[] }>(
  items: T[],
  activeTags: string[],
): T[] {
  if (!activeTags.length) return items
  return items.filter((item) =>
    activeTags.every((tag) => item.tags?.includes(tag)),
  )
}

export function filterByCategory<T extends { category?: string }>(
  items: T[],
  category: string | 'all',
): T[] {
  if (!category || category === 'all') return items
  return items.filter((item) => item.category === category)
}
