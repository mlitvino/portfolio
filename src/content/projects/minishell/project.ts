import type { ProjectData } from '@/features/projects'

import mockCover from '../_mock/cover.svg'
import mockScreenshot from '../_mock/screenshot.svg'

export default {
  title: 'Minishell',
  summary:
    'A minimal Unix shell written in C: process creation and synchronisation, signal handling and built-in commands, with no memory leaks.',
  date: '2025-03-25',
  tech: ['C', 'Unix', 'Make'],
  topics: ['Processes', 'Signals'],
  links: {
    repo: 'https://github.com/mlitvino/minishell',
  },
  featured: true,
  cover: mockCover,

  role: 'Mock: Solo or team (what you did)',
  duration: 'Mock: 6 weeks',
  context: 'School project',
  visuals: [
    {
      src: mockScreenshot,
      alt: 'Mock: describe what the screenshot shows',
      caption: 'Mock caption: running built-in commands',
    },
    {
      src: mockScreenshot,
      alt: 'Mock: a second screenshot',
      caption: 'Mock caption: a pipeline of commands',
    },
  ],
  overview: [
    'Minishell is a minimal version of a real Unix shell. The goal was to understand how processes are created and synchronised, using only C.',
    "It had to follow the school's coding style, use only a short list of allowed system functions and finish without memory leaks.",
  ],
  features: [
    'Built-in commands: echo, cd, setenv, unsetenv, env and exit',
    'Runs other programs as child processes with fork and execve',
    'Clear error messages, without relying on errno',
    'Exits cleanly on Ctrl+D',
    'Builds with a Makefile',
  ],
  learned: [
    'Mock: what you learned about creating processes with fork and execve',
    'Mock: what you learned about handling signals',
    'Mock: what you learned about finding and fixing memory leaks',
  ],
} satisfies ProjectData
