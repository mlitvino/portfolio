import type { ProjectData } from '@/features/projects'

import screenshot from './minishell.png'

export default {
  title: 'Minishell',
  summary:
    'A minimal Unix shell written in C: process creation and synchronisation, signal handling and built-in commands, with no memory leaks.',
  date: '2025-03-25',
  tech: ['C', 'Unix', 'Make'],
  topics: ['Processes', 'Signals', 'Concurrency'],
  links: {
    repo: 'https://github.com/mlitvino/minishell',
  },
  featured: false,

  team: '2 people',
  role: 'Command execution: processes, built-ins and signals',
  duration: '6 weeks',
  context: 'School project',
  visuals: [
    {
      src: screenshot,
      alt:
        'Minishell in a terminal: ls, echo with output redirection to a file, cat, and checking exit statuses with echo $? and exit',
      caption: 'Running built-in commands',
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
    'How programs run: creating, replacing and waiting for processes with fork, execve and wait',
    'How processes communicate through file descriptors, exit statuses and signals',
    'Managing memory by hand in C, with zero leaks',
    'Teamwork: splitting the shell into parser and executor and syncing through Git',
    'Planning six weeks of work into milestones and delivering on time',
  ],
} satisfies ProjectData
