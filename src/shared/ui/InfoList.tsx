import type { ReactNode } from 'react'

import styles from './InfoList.module.css'

export interface InfoItem {
  label: string
  value: ReactNode
}

interface InfoListProps {
  items: readonly InfoItem[]
}

export function InfoList({ items }: InfoListProps) {
  return (
    <dl className={styles.list}>
      {items.map((item) => (
        <div key={item.label} className={styles.row}>
          <dt className={styles.label}>{item.label}</dt>
          <dd className={styles.value}>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
