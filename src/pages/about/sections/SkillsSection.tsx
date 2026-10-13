import type { SkillGroup } from '@/content/resume.types'
import { Section } from '@/shared/ui/Section'
import { TagList } from '@/shared/ui/TagList'

import styles from '../AboutPage.module.css'

interface SkillsSectionProps {
  groups: readonly SkillGroup[]
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  if (groups.length === 0) return null

  return (
    <Section title="Skills">
      <dl className={styles.skills}>
        {groups.map((group) => (
          <div key={group.label} className={styles.skillRow}>
            <dt className={styles.skillLabel}>{group.label}</dt>

            <dd className={styles.skillItems}>
              <TagList items={group.items} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
