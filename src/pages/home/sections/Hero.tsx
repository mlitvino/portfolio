import { siteConfig } from '@/shared/config/site'

import styles from '../HomePage.module.css'
import { AvailabilityBadge } from './AvailabilityBadge'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badgeRow}>
        <AvailabilityBadge status={siteConfig.availability} />
      </div>

      <h1 className={styles.name}>{siteConfig.name}</h1>
      <p className={styles.role}>{siteConfig.title}</p>
      <p className={styles.tagline}>{siteConfig.tagline}</p>
    </section>
  )
}
