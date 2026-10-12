import { isRouteErrorResponse, Link, useRouteError } from 'react-router'

import buttonStyles from '@/shared/ui/button.module.css'
import { PageHeader } from '@/shared/ui/PageHeader'
import { pageTitle } from '@/shared/utils/pageTitle'

import styles from './RootErrorBoundary.module.css'

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
      <title>{pageTitle('Something went wrong')}</title>

      <PageHeader title="Something went wrong">
        <p>
          Try reloading the page. If you opened an old tab, a new version may have been published.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={buttonStyles.button}
            data-variant="primary"
            onClick={() => {
              window.location.reload()
            }}
          >
            Reload
          </button>
          <Link to="/" className={buttonStyles.button}>
            Go home
          </Link>
        </div>

        {import.meta.env.DEV && details !== '' && <pre className={styles.details}>{details}</pre>}
      </PageHeader>
    </main>
  )
}
