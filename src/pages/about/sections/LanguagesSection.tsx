import type { LanguageLevel, SpokenLanguage } from '@/content/resume.types'
import { Section } from '@/shared/ui/Section'

import styles from '../AboutPage.module.css'

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
    <Section title="Languages">
      <dl className={styles.languages}>
        {languages.map((language) => (
          <div key={language.name}>
            <dt className={styles.languageName}>{language.name}</dt>
            <dd className={styles.languageLevel}>{levelLabels[language.level]}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
