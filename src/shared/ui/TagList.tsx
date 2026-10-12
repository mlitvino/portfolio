import styles from './TagList.module.css'

interface TagListProps {
  items: readonly string[]
  label?: string | undefined
}

export function TagList({ items, label }: TagListProps) {
  if (items.length === 0) return null

  return (
    <ul className={styles.list} aria-label={label}>
      {items.map((item) => (
        <li key={item} className={styles.tag}>
          {item}
        </li>
      ))}
    </ul>
  )
}
