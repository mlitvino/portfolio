import type { SkillGroup } from '@/content/resume.types'
import { InfoList } from '@/shared/ui/InfoList'
import { Section } from '@/shared/ui/Section'
import { TagList } from '@/shared/ui/TagList'

interface SkillsSectionProps {
  groups: readonly SkillGroup[]
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  if (groups.length === 0) return null

  return (
    <Section title="Skills">
      <InfoList
        items={groups.map((group) => ({
          label: group.label,
          value: <TagList items={group.items} />,
        }))}
      />
    </Section>
  )
}
