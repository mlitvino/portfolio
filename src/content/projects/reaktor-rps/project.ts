import type { ProjectData } from '@/features/projects'

import leaderboard_screenshot from './leaderboard.png'
import matches_screenshot from './matches.png'

export default {
  title: 'Reaktor RPS',
  summary:
    'A live Rock-Paper-Scissors match tracker: a Fastify backend syncs a slow legacy API into PostgreSQL and streams new matches to a React frontend in real time.',
  date: '2026-03-09',
  tech: ['TypeScript', 'React', 'Fastify', 'PostgreSQL', 'TypeORM', 'Docker', 'Nginx'],
  topics: ['Real-time', 'Caching', 'Integrations'],
  cover: matches_screenshot,
  links: {
    repo: 'https://github.com/mlitvino/reaktor-rps',
  },
  featured: false,

  team: 'Solo',
  duration: '7 days',
  context: 'Personal project',
  visuals: [
    {
      src: matches_screenshot,
      alt:
        'Matches page: Rock-Paper-Scissors results with dates, players and win, lose or tie, plus live, search and date filters',
      caption: 'The matches page',
    },
    {
      src: leaderboard_screenshot,
      alt: 'Leaderboard page: the top players by wins for a selected date range',
      caption: 'The leaderboard',
    },
  ],
  overview: [
    "Reaktor RPS tracks Rock-Paper-Scissors matches from a legacy API that was slow and unfamiliar: a single request for one day's matches took almost 6 seconds.",
    'The backend pulls match history on a schedule, receives new matches from a live stream and stores everything in PostgreSQL. Requests are answered from an in-memory cache or the database first, bringing response times down to about 20 ms, while new results reach every open browser instantly through Server-Sent Events.',
  ],
  features: [
    'Live match feed: new results appear instantly via Server-Sent Events',
    'Match history and leaderboard, stored in PostgreSQL',
    'Two-level caching, memory then database: ~6 s requests down to ~20 ms',
    'Scheduled sync that keeps the database up to date with the legacy API',
    'Starts serving right away while the database fills in the background',
    'One-command setup with Docker Compose and Nginx',
  ],
  learned: [
    'Working with an unfamiliar legacy API: exploring its data and stream before writing code',
    'Real-time updates with Server-Sent Events, from backend to browser',
    'Designing a cache and database layer to hide a slow upstream service',
    'Writing safe upserts, so repeated syncs never duplicate data',
    'Planning the work in stages to deliver on a tight deadline',
  ],
} satisfies ProjectData
