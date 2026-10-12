import { siteConfig } from '@/shared/config/site'

import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} {siteConfig.name} <br />
        the cake is a lie
      </p>
    </footer>
  )
}
