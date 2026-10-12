import { Link } from 'react-router'

import { PageHeader } from '@/shared/ui/PageHeader'
import { pageTitle } from '@/shared/utils/pageTitle'

export default function NotFoundPage() {
  return (
    <>
      <title>{pageTitle('Page not found')}</title>

      <PageHeader title="Page not found">
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/">Go home</Link>
      </PageHeader>
    </>
  )
}
