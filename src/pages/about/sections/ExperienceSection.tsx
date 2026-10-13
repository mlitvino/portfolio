import type { Experience } from '@/content/resume.types'
import { Section } from '@/shared/ui/Section'
import { TagList } from '@/shared/ui/TagList'

import styles from '../AboutPage.module.css'
import { TimelineItem } from './TimelineItem'

interface ExperienceSectionProps {
  items: readonly Experience[]
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  if (items.length === 0) return null

  return (
    <Section title="Experience">
      <ol className={styles.timeline}>
        {items.map((item) => (
          <li key={`${item.company}-${item.start}`}>
            <TimelineItem
              title={item.role}
              subtitle={[item.company, item.location].filter(Boolean).join(' · ')}
              start={item.start}
              end={item.end}
            >
              <ul className={styles.highlights}>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>
                    {highlight}
                  </li>
                ))}
              </ul>

              {item.tech && <TagList items={item.tech} label="Technologies" />}
            </TimelineItem>
          </li>
        ))}
      </ol>
    </Section>
  )
}
