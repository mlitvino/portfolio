import { Link } from 'react-router'

import { site } from '@/shared/config/site'

import styles from '../HomePage.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>{site.name}</h1>
      <p className={styles.role}>{site.title}</p>
      <p className={styles.tagline}>{site.tagline}</p>

      <div className={styles.actions}>
        <Link to="/projects" className={styles.primaryButton}>
          View projects
        </Link>
        <Link to="/contact" className={styles.secondaryButton}>
          Contact me
        </Link>
      </div>
    </section>
  )
}
