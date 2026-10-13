import { Section } from '@/shared/ui/Section'
import { TagList } from '@/shared/ui/TagList'

interface HobbiesSectionProps {
  hobbies: readonly string[]
}

export function HobbiesSection({ hobbies }: HobbiesSectionProps) {
  if (hobbies.length === 0) return null

  return (
    <Section title="Hobbies">
      <TagList items={hobbies} />
    </Section>
  )
}
