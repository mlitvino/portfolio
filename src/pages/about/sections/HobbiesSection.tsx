import { TagList } from '@/shared/ui/TagList'

import styles from '../AboutPage.module.css'

interface HobbiesSectionProps {
  hobbies: readonly string[]
}

export function HobbiesSection({ hobbies }: HobbiesSectionProps) {
  if (hobbies.length === 0) return null

  return (
    <section className={styles.section} aria-labelledby="hobbies-heading">
      <h2 id="hobbies-heading" className={styles.sectionHeading}>
        Hobbies
      </h2>

      <TagList items={hobbies} />
    </section>
  )
}
