import { Link } from 'react-router'

import styles from '../HomePage.module.css'

export function ContactCta() {
  return (
    <section className={styles.cta} aria-labelledby="contact-heading">
      <h2 id="contact-heading" className={styles.sectionHeading}>
        Let's work together
      </h2>
      <p className={styles.ctaText}>
        Have a role or a project in mind? I'd be happy to talk.
      </p>
      <Link to="/contact" className={styles.primaryButton}>
        Get in touch
      </Link>
    </section>
  )
}
