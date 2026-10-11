export function formatYearMonth(value: string): string {
  const [year, month] = value.split('-').map(Number)
  if (!year || !month) return value

  return new Date(year, month - 1).toLocaleDateString('en', {
    month: 'short',
    year: 'numeric',
  })
}
