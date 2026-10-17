import { Section } from '@/shared/ui/Section'

import styles from '../AboutPage.module.css'

interface BackgroundSectionProps {
  paragraphs: readonly string[]
}

export function BackgroundSection({ paragraphs }: BackgroundSectionProps) {
  if (paragraphs.length === 0) return null

  return (
    <Section title="Background">
      <div className={styles.background}>
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </Section>
  )
}
