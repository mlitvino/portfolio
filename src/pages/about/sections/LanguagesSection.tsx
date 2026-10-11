import styles from '../AboutPage.module.css'
import type { LanguageLevel, SpokenLanguage } from '../types'

const levelLabels: Record<LanguageLevel, string> = {
  elementary: 'Elementary',
  intermediate: 'Intermediate',
  professional: 'Professional working proficiency',
  fluent: 'Fluent',
  native: 'Native',
}

interface LanguagesSectionProps {
  languages: readonly SpokenLanguage[]
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  if (languages.length === 0) return null

  return (
    <section className={styles.section} aria-labelledby="languages-heading">
      <h2 id="languages-heading" className={styles.sectionHeading}>
        Languages
      </h2>

      <dl className={styles.languages}>
        {languages.map((language) => (
          <div key={language.name}>
            <dt className={styles.languageName}>{language.name}</dt>
            <dd className={styles.languageLevel}>{levelLabels[language.level]}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
