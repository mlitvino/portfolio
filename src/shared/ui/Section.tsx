import { type ReactNode, useId } from 'react'

import styles from './Section.module.css'

interface SectionProps {
  title: string
  align?: 'start' | 'center'
  className?: string | undefined
  children: ReactNode
}

export function Section({ title, align = 'start', className, children }: SectionProps) {
  const headingId = useId()

  return (
    <section
      className={[styles.section, className].filter(Boolean).join(' ')}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className={styles.heading} data-align={align}>
        {title}
      </h2>
      {children}
    </section>
  )
}
