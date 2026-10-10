import { Link } from 'react-router'

import { site } from '@/shared/config/site'

export default function NotFoundPage() {
  return (
    <>
      <title>{`Page not found — ${site.name}`}</title>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go home</Link>
    </>
  )
}
