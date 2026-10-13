import { Link } from 'react-router'

import { siteConfig } from '@/shared/config/site'
import buttonStyles from '@/shared/ui/button.module.css'

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

      <div className={styles.actions}>
        <Link to="/projects" className={buttonStyles.button} data-variant="primary">
          View projects
        </Link>
        <Link to="/contact" className={buttonStyles.button}>
          Contact me
        </Link>
      </div>
    </section>
  )
}
