import { createBrowserRouter } from 'react-router'

import AboutPage from '@/pages/about/AboutPage'
import ContactPage from '@/pages/contact/ContactPage'
import ErrorPreviewPage from '@/pages/error-preview/ErrorPreviewPage'
import HomePage from '@/pages/home/HomePage'
import NotFoundPage from '@/pages/not-found/NotFoundPage'
import ProjectPage from '@/pages/project/ProjectPage'
import ProjectsPage from '@/pages/projects/ProjectsPage'

import { RootErrorBoundary } from './layout/RootErrorBoundary'
import { RootLayout } from './layout/RootLayout'

export const router = createBrowserRouter(
  [
    {
      Component: RootLayout,
      ErrorBoundary: RootErrorBoundary,
      children: [
        { index: true, Component: HomePage },
        { path: 'about', Component: AboutPage },
        { path: 'projects', Component: ProjectsPage },
        { path: 'projects/:slug', Component: ProjectPage },
        { path: 'contact', Component: ContactPage },
        { path: 'error', Component: ErrorPreviewPage },
        { path: '*', Component: NotFoundPage },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
