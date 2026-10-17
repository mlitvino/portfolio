import { Section } from '@/shared/ui/Section'

import styles from '../AboutPage.module.css'

interface StorySectionProps {
  paragraphs: readonly string[]
}

export function StorySection({ paragraphs }: StorySectionProps) {
  if (paragraphs.length === 0) return null

  return (
    <Section title="My story">
      <div className={styles.story}>
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </Section>
  )
}
