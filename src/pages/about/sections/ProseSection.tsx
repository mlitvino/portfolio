import { Section } from '@/shared/ui/Section'

import styles from '../AboutPage.module.css'

interface ProseSectionProps {
  title: string
  paragraphs: readonly string[]
}

export function ProseSection({ title, paragraphs }: ProseSectionProps) {
  if (paragraphs.length === 0) return null

  return (
    <Section title={title}>
      <div className={styles.prose}>
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </Section>
  )
}
