import type { ProjectData } from '@/features/projects'

import screenshot from './portfolio.png'

export default {
  title: 'Portfolio',
  summary:
    'This site: a React single-page app with routing, light and dark themes, and automatic deploys to GitHub Pages.',
  date: '2026-10-10',
  tech: ['React', 'TypeScript', 'Vite', 'React Router', 'GitHub Actions'],
  topics: ['Accessibility', 'CI/CD', 'Theming'],
  links: {
    live: 'https://mlitvino.github.io/portfolio/',
    repo: 'https://github.com/mlitvino/portfolio',
  },
  featured: false,

  team: 'Solo',
  duration: '1 week',
  context: 'Personal project',
  visuals: [
    {
      src: screenshot,
      alt: 'the home page in dark mode',
      caption: 'the home page in dark mode',
    },
  ],
  overview: [
    'My personal portfolio, built from scratch as a single-page React app and hosted on GitHub Pages.',
  ],
  features: [
    'Light and dark themes with a circle animation from the toggle, following the system setting',
    'Smooth page transitions: project titles morph into the project page',
    'Projects filterable by technology and topic, with shareable links',
    'Keyboard and screen reader friendly: skip link, visible focus, reduced motion support',
    'Content stored as typed files, so mistakes fail the build',
    'Automatic deploys after lint, format and build checks',
    'Only three runtime dependencies: no UI or animation libraries',
  ],
  learned: [
    'Structuring a React app in layers, with import rules enforced by ESLint',
    'Using browser APIs instead of libraries: View Transitions, clip-path, media queries',
    'Accessibility in practice: focus, heading order, reduced motion',
    'Routing a single-page app on static hosting',
    'Setting up CI/CD with GitHub Actions, so broken code never reaches production',
  ],
} satisfies ProjectData
