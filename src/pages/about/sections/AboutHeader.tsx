import type { CvFile } from '@/content/resume.types'
import buttonStyles from '@/shared/ui/button.module.css'
import { PageHeader } from '@/shared/ui/PageHeader'

import styles from '../AboutPage.module.css'

interface AboutHeaderProps {
  summary: readonly string[]
  cv?: CvFile | undefined
}

export function AboutHeader({ summary, cv }: AboutHeaderProps) {
  return (
    <PageHeader title="About">
      {summary.map((paragraph) => (
        <p key={paragraph} className={styles.summary}>
          {paragraph}
        </p>
      ))}

      {cv && (
        <div className={styles.cvAction}>
          <a
            href={`${import.meta.env.BASE_URL}${cv.file}`}
            download={cv.downloadName}
            className={buttonStyles.button}
            data-variant="primary"
            data-umami-event="Download CV"
          >
            Download CV (PDF)
          </a>
        </div>
      )}
    </PageHeader>
  )
}
