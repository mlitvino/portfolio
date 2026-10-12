import type { ReactNode } from 'react'

import styles from './PageHeader.module.css'

interface PageHeaderProps {
  title: string
  children?: ReactNode
}

export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <hr className={styles.separator} />

      {children}
    </header>
  )
}
