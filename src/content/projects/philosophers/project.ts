import type { ProjectData } from '@/features/projects'

import screenshot from './philo.png'

export default {
  title: 'Philosophers',
  summary:
    'The dining philosophers problem in C: threads and processes sharing resources without deadlocks or data races, synchronised with mutexes and semaphores.',
  date: '2025-03-05',
  tech: ['C', 'pthreads', 'Unix', 'Make'],
  topics: ['Threads', 'Processes', 'Concurrency'],
  links: {
    repo: 'https://github.com/mlitvino/philosophers',
  },
  featured: false,

  team: 'Solo',
  duration: '2 weeks',
  context: 'School project',
  overview: [
    'Philosophers is a classic concurrency problem. Philosophers sit around a table with one fork between each pair of neighbours. To eat, a philosopher needs both forks, and must eat again before starving.',
    'The mandatory part runs each philosopher as a thread and protects the forks with mutexes. The bonus part runs each philosopher as a separate process, synchronised with semaphores.',
  ],
  visuals: [
    {
      src: screenshot,
      alt: 'philosophers start eating',
      caption: 'philosophers start eating',
    },
  ],
  features: [
    'Each philosopher runs as its own thread, with forks protected by mutexes',
    'Bonus: each philosopher runs as a separate process, synchronised with semaphores',
    'Configurable from the command line: number of philosophers, time to die, eat and sleep, and meal count',
    'Detects a starving philosopher within 10 ms and stops the simulation',
    'Timestamped status messages that never mix between threads',
    'No deadlocks or data races',
  ],
  learned: [
    'How threads share memory, and why unprotected access causes data races',
    'Preventing deadlocks and starvation when threads compete for shared resources',
    'Mutexes for threads vs semaphores for processes, and when to use each',
    'Accurate timing in C with millisecond timestamps',
    'Debugging concurrency bugs that only appear some of the time',
  ],
} satisfies ProjectData
