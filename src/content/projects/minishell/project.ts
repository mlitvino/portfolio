import type { ProjectData } from '@/features/projects'

export default {
  title: 'Minishell',
  summary:
    'A minimal Unix shell written in C: process creation and synchronisation, signal handling and built-in commands, with no memory leaks.',
  date: '2025-03-25',
  tech: ['C', 'Unix', 'Make'],
  links: {
    repo: 'https://github.com/mlitvino/minishell',
  },
} satisfies ProjectData
