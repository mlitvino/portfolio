import buttonStyles from '@/shared/ui/button.module.css'
import { ExternalLink } from '@/shared/ui/ExternalLink'

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
  const openText = (
    <>
      Open
      <span className="sr-only">{` ${label}`}</span>
    </>
  )

  return (
    <div className={styles.card}>
      <h2 className={styles.cardLabel}>{label}</h2>
      <p className={styles.cardValue}>{text}</p>

      <div className={styles.cardActions}>
        <CopyButton value={copyValue} label={label} />

        {external
          ? (
            <ExternalLink href={href} className={buttonStyles.button} data-variant="primary">
              {openText}
            </ExternalLink>
          )
          : (
            <a href={href} className={buttonStyles.button} data-variant="primary">
              {openText}
            </a>
          )}
      </div>
    </div>
  )
}
