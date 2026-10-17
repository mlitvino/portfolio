import type { CvFile } from '@/content/resume.types'
import { siteConfig } from '@/shared/config/site'
import buttonStyles from '@/shared/ui/button.module.css'
import { PageHeader } from '@/shared/ui/PageHeader'

import styles from '../AboutPage.module.css'

interface AboutHeaderProps {
  intro: string
  photo?: string | undefined
  cv?: CvFile | undefined
}

export function AboutHeader({ intro, photo, cv }: AboutHeaderProps) {
  return (
    <PageHeader title="About">
      <div className={styles.intro}>
        {photo && <img src={photo} alt={siteConfig.name} className={styles.photo} />}

        <div>
          <p className={styles.introName}>{siteConfig.name}</p>
          <p className={styles.introText}>{intro}</p>

          {cv && (
            <a
              href={`${import.meta.env.BASE_URL}${cv.file}`}
              download={cv.downloadName}
              className={buttonStyles.button}
              data-variant="primary"
              data-umami-event="Download CV"
            >
              Download CV (PDF)
            </a>
          )}
        </div>
      </div>
    </PageHeader>
  )
}
