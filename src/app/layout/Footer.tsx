import { siteConfig } from '@/shared/config/site'
import { ExternalLink } from '@/shared/ui/ExternalLink'
import { SocialIcon } from '@/shared/ui/SocialIcon'

import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} {siteConfig.name} <br />
        the cake is a lie
      </p>
      <ul className={styles.socials}>
        {siteConfig.socials.map(({ label, url }) => (
          <li key={label}>
            <ExternalLink href={url} className={styles.social} title={label}>
              <SocialIcon label={label} />
              <span className="sr-only">{label}</span>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </footer>
  )
}
