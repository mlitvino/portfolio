import buttonStyles from '@/shared/ui/button.module.css'

import styles from './ContactPage.module.css'
import { CopyButton } from './CopyButton'

interface ContactCardProps {
  label: string
  text: string
  copyValue: string
  href: string
  external: boolean
}

export function ContactCard({
  label,
  text,
  copyValue,
  href,
  external,
}: ContactCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardLabel}>{label}</h2>
      <p className={styles.cardValue}>{text}</p>

      <div className={styles.cardActions}>
        <CopyButton value={copyValue} label={label} />

        <a
          href={href}
          className={buttonStyles.button}
          data-variant="primary"
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer noopener' : undefined}
        >
          Open
          <span className={styles.srOnly}>{` ${label}`}</span>
        </a>
      </div>
    </div>
  )
}
