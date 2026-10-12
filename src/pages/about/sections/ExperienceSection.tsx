import { TagList } from '@/shared/ui/TagList'

import styles from '../AboutPage.module.css'
import type { Experience } from '../types'
import { TimelineItem } from './TimelineItem'

interface ExperienceSectionProps {
  items: readonly Experience[]
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  if (items.length === 0) return null

  return (
    <section className={styles.section} aria-labelledby="experience-heading">
      <h2 id="experience-heading" className={styles.sectionHeading}>
        Experience
      </h2>

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
    </section>
  )
}
