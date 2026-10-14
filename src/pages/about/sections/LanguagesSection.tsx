import type { LanguageLevel, SpokenLanguage } from '@/content/resume.types'
import { InfoList } from '@/shared/ui/InfoList'
import { Section } from '@/shared/ui/Section'

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
      <InfoList
        items={languages.map((language) => ({
          label: language.name,
          value: levelLabels[language.level],
        }))}
      />
    </Section>
  )
}
