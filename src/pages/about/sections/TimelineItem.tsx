import type { ReactNode } from 'react'

import { formatYearMonth } from '@/shared/utils/formatYearMonth'

import styles from '../AboutPage.module.css'
import type { YearMonth } from '../types'

interface TimelineItemProps {
  title: string
  subtitle: string
  start: YearMonth
  end?: YearMonth | undefined
  children?: ReactNode
}

export function TimelineItem({ title, subtitle, start, end, children }: TimelineItemProps) {
  return (
    <article className={styles.entry}>
      <div className={styles.entryHeader}>
        <h3 className={styles.entryTitle}>{title}</h3>
        <p className={styles.entryDates}>
          <time dateTime={start}>{formatYearMonth(start)}</time>
          {' – '}
          {end ? <time dateTime={end}>{formatYearMonth(end)}</time> : 'Present'}
        </p>
      </div>

      <p className={styles.entryMeta}>{subtitle}</p>

      {children}
    </article>
  )
}
