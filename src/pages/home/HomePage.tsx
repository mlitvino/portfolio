import { pageTitle } from '@/shared/utils/pageTitle'

import { ContactCta } from './sections/ContactCta'
import { FeaturedProjects } from './sections/FeaturedProjects'
import { Hero } from './sections/Hero'

export default function HomePage() {
  return (
    <>
      <title>{pageTitle()}</title>

      <Hero />
      <FeaturedProjects />
      <ContactCta />
    </>
  )
}
