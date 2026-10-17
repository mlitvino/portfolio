import { siteConfig } from '@/shared/config/site'
import { PageHeader } from '@/shared/ui/PageHeader'
import { pageTitle } from '@/shared/utils/pageTitle'

import { ContactCard } from './ContactCard'
import styles from './ContactPage.module.css'

function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}

const email = `${siteConfig.email.user}@${siteConfig.email.domain}`

const contacts = [
  {
    label: 'Email',
    text: email,
    copyValue: email,
    href: `mailto:${email}`,
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
      <title>{pageTitle('Contact')}</title>

      <PageHeader title="Contact">
        <p className={styles.claim}>Let's talk!</p>
        <p className={styles.text}>
          I'm open to new opportunities, ideas and conversations. Don't hesitate to reach out, even
          if it's just to say hello.
        </p>
      </PageHeader>

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
