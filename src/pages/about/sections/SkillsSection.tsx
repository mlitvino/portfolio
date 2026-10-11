import styles from '../AboutPage.module.css'
import type { SkillGroup } from '../types'

interface SkillsSectionProps {
  groups: readonly SkillGroup[]
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  if (groups.length === 0) return null

  return (
    <section className={styles.section} aria-labelledby="skills-heading">
      <h2 id="skills-heading" className={styles.sectionHeading}>
        Skills
      </h2>

      <dl className={styles.skills}>
        {groups.map((group) => (
          <div key={group.label} className={styles.skillRow}>
            <dt className={styles.skillLabel}>{group.label}</dt>

            <dd className={styles.skillItems}>
              <ul className={styles.tags}>
                {group.items.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
