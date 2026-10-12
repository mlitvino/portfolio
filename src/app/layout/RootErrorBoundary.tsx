import { isRouteErrorResponse, useRouteError } from 'react-router'

import { siteConfig } from '@/shared/config/site'

export function RootErrorBoundary() {
  const error = useRouteError()

  let details = ''
  if (isRouteErrorResponse(error)) {
    details = `${String(error.status)} ${error.statusText}`
  } else if (error instanceof Error) {
    details = error.message
  }

  return (
    <main id="content">
      <title>{`Something went wrong — ${siteConfig.name}`}</title>
      <h1>Something went wrong</h1>
      <p>
        Try reloading the page. If you opened an old tab, a new version may have been published.
      </p>
      <button
        type="button"
        onClick={() => {
          window.location.reload()
        }}
      >
        Reload
      </button>
      {import.meta.env.DEV && details !== '' && <pre>{details}</pre>}
    </main>
  )
}
