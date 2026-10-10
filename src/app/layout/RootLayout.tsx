import { Outlet, ScrollRestoration } from 'react-router'

import { Footer } from './Footer'
import { Header } from './Header'

export function RootLayout() {
  return (
    <>
      <a
        href="#content"
        className="skip-link"
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
