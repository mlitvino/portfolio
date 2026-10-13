import type { ProjectData } from '@/features/projects'

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
} satisfies ProjectData
