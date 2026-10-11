import { site } from '@/shared/config/site'

import { ContactCta } from './sections/ContactCta'
import { FeaturedProjects } from './sections/FeaturedProjects'
import { Hero } from './sections/Hero'

export default function HomePage() {
  return (
    <>
      <title>{`${site.name} — ${site.title}`}</title>

      <Hero />
      <FeaturedProjects />
      <ContactCta />
    </>
  )
}
