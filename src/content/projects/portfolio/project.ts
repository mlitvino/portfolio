import type { ProjectData } from '@/features/projects'

import mockCover from '../_mock/cover.svg'
import mockScreenshot from '../_mock/screenshot.svg'

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
  featured: true,
  cover: mockCover,

  role: 'Mock: Solo',
  duration: 'Mock: 3 weeks',
  context: 'Personal project',
  visuals: [
    {
      src: mockScreenshot,
      alt: 'Mock: describe what the screenshot shows',
      caption: 'Mock caption: the home page in dark mode',
    },
  ],
  overview: [
    'My personal portfolio, built from scratch as a single-page React app and hosted on GitHub Pages.',
  ],
  features: [
    'Light and dark themes that follow the system setting and remember your choice',
    'Projects filterable by technology and topic, with shareable links',
    'Project and resume content stored as typed files, so mistakes fail the build',
    'Lint, format and build checks before every automatic deploy',
    'Architecture rules between folders enforced by ESLint',
  ],
  learned: [
    'Mock: what you learned about structuring a React app',
    'Mock: what you learned about accessibility',
    'Mock: what you learned about automated deploys',
  ],
} satisfies ProjectData
