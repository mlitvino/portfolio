import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <>
      <title>Page not found — Misha</title>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go home</Link>
    </>
  )
}
