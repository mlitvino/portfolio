import { Link } from 'react-router'

import { PageHeader } from './PageHeader'

export function NotFound() {
  return (
    <PageHeader title="Page not found">
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" viewTransition>
        Go home
      </Link>
    </PageHeader>
  )
}
