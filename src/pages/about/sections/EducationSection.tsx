import type { Education } from '@/content/resume.types'
import { Section } from '@/shared/ui/Section'

import styles from '../AboutPage.module.css'
import { TimelineItem } from './TimelineItem'

interface EducationSectionProps {
  items: readonly Education[]
}

export function EducationSection({ items }: EducationSectionProps) {
  if (items.length === 0) return null

  return (
    <Section title="Education">
      <ol className={styles.timeline}>
        {items.map((item) => (
          <li key={`${item.institution}-${item.start}`}>
            <TimelineItem
              title={item.degree}
              subtitle={[item.institution, item.location].filter(Boolean).join(' · ')}
              start={item.start}
              end={item.end}
            >
              {item.details && <p className={styles.details}>{item.details}</p>}
            </TimelineItem>
          </li>
        ))}
      </ol>
    </Section>
  )
}
