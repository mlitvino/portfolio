import { Link } from 'react-router'

import buttonStyles from '@/shared/ui/button.module.css'
import { Section } from '@/shared/ui/Section'

import styles from '../HomePage.module.css'

export function ContactCta() {
  return (
    <Section title="Let's work together" align="center" className={styles.cta}>
      <p className={styles.ctaText}>
        Have a role or a project in mind? I'd be happy to talk.
      </p>
      <Link
        to="/contact"
        className={buttonStyles.button}
        data-variant="primary"
        viewTransition
      >
        Get in touch
      </Link>
    </Section>
  )
}
