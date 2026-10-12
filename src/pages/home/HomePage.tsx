import { siteConfig } from '@/shared/config/site'

import { ContactCta } from './sections/ContactCta'
import { FeaturedProjects } from './sections/FeaturedProjects'
import { Hero } from './sections/Hero'

export default function HomePage() {
  return (
    <>
      <title>{`${siteConfig.name} — ${siteConfig.title}`}</title>

      <Hero />
      <FeaturedProjects />
      <ContactCta />
    </>
  )
}
