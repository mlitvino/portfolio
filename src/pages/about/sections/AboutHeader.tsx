import styles from '../AboutPage.module.css'
import type { CvFile } from '../types'

interface AboutHeaderProps {
  summary: readonly string[]
  cv?: CvFile | undefined
}

export function AboutHeader({ summary, cv }: AboutHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>About me</h1>
      <hr className={styles.separator} />

      {summary.map((paragraph) => (
        <p key={paragraph} className={styles.summary}>
          {paragraph}
        </p>
      ))}

      {cv && (
        <a
          href={`${import.meta.env.BASE_URL}${cv.file}`}
          download={cv.downloadName}
          className={styles.cvButton}
        >
          Download CV (PDF)
        </a>
      )}
    </header>
  )
}
