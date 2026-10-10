import { Outlet, ScrollRestoration } from 'react-router'

import { Footer } from './Footer'
import { Header } from './Header'
import styles from './RootLayout.module.css'

export function RootLayout() {
  return (
    <>
      <a
        href="#content"
        className={styles.skipLink}
        onClick={(event) => {
          event.preventDefault()
          document.getElementById('content')?.focus()
        }}
      >
        Skip to content
      </a>
      <Header />
      <main id="content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
