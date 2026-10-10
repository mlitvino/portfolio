import { createBrowserRouter } from 'react-router'

import HomePage from '@/pages/home/HomePage'
import NotFoundPage from '@/pages/not-found/NotFoundPage'

import { RootErrorBoundary } from './layout/RootErrorBoundary'
import { RootLayout } from './layout/RootLayout'

export const router = createBrowserRouter(
  [
    {
      Component: RootLayout,
      ErrorBoundary: RootErrorBoundary,
      children: [
        { index: true, Component: HomePage },
        { path: '*', Component: NotFoundPage },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
