import { Link } from 'react-router'

import { siteConfig } from '@/shared/config/site'
import { PageHeader } from '@/shared/ui/PageHeader'

export default function NotFoundPage() {
  return (
    <>
      <title>{`Page not found — ${siteConfig.name}`}</title>

      <PageHeader title="Page not found">
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/">Go home</Link>
      </PageHeader>
    </>
  )
}
