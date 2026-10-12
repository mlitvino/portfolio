import { siteConfig } from '@/shared/config/site'

import { ContactCard } from './ContactCard'
import styles from './ContactPage.module.css'

function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}

const contacts = [
  {
    label: 'Email',
    text: siteConfig.email,
    copyValue: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  ...siteConfig.socials.map(({ label, url }) => ({
    label,
    text: displayUrl(url),
    copyValue: url,
    href: url,
    external: true,
  })),
]

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <title>{`Contact — ${siteConfig.name}`}</title>

      <h1 className={styles.heading}>Contact</h1>
      <hr className={styles.separator} />

      <p className={styles.claim}>Let's build something together.</p>
      <p className={styles.text}>
        Have a role, a project or a question in mind? Reach out through any of the links below.
      </p>

      <ul className={styles.cards}>
        {contacts.map((contact) => (
          <li key={contact.label}>
            <ContactCard {...contact} />
          </li>
        ))}
      </ul>
    </div>
  )
}
