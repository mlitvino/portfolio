import type { ProjectData } from '@/features/projects'

import docsScreenshot from './transcendence_docs.png'
import gameScreenshot from './transcendence_game.png'
import cover from './transcendence1.png'

export default {
  title: 'Transcendence: Maze is Lava',
  summary:
    'A real-time multiplayer browser game built by a team of five: NestJS microservices, OAuth and two-factor sign-in, a public API and a global leaderboard.',
  date: '2025-12-15',
  tech: [
    'TypeScript',
    'NestJS',
    'Fastify',
    'React',
    'PostgreSQL',
    'Socket.IO',
    'Docker',
    'Nginx',
    'Vault',
  ],
  topics: ['Real-time', 'Game development', 'Security', 'DevOps', 'Microservices'],
  cover,
  links: {
    live: 'https://valinor.ink/',
    repo: 'https://github.com/Transcendence-surprise/transcendence',
  },
  featured: true,

  team: '5 people',
  role: 'Technical lead: architecture, authentication, public API and secrets management',
  duration: '5 months',
  context: 'School project',
  visuals: [
    {
      src: cover,
      alt: 'Maze is Lava home page with links to profile, game, friends and chat',
      caption: 'The home page',
    },
    {
      src: gameScreenshot,
      alt: 'A solo run: a tile board with gems to collect, a level timer and a mission panel',
      caption: 'A solo puzzle run',
    },
    {
      src: docsScreenshot,
      alt: 'Swagger page of the Transcendence API, listing users, auth, API keys, game and more',
      caption: 'Swagger documentation of the public API',
    },
  ],
  overview: [
    'Maze is Lava is a browser game where players move across tile-based boards, collect items and compete on a global leaderboard, alone or in real-time multiplayer matches. It was built by a team of five as the final project of the Hive Helsinki core curriculum.',
    'The backend is split into microservices for authentication, users and the game, behind a single gateway, built with NestJS and Fastify on a shared PostgreSQL database. As technical lead, I owned the architecture and the security-critical parts: authentication, the public API and secrets management.',
  ],
  features: [
    'Real-time multiplayer over WebSockets, plus single-player puzzle levels',
    'Sign-in with email and password, Google or 42 Intra, with two-factor authentication',
    'Role-based access for guests, users and admins',
    'Public REST API with API keys and full Swagger documentation',
    'Profiles, friends, achievements and a global leaderboard',
    'Secrets in HashiCorp Vault and a web application firewall in front of Nginx',
  ],
  learned: [
    'Leading technical decisions in a team of five and keeping everyone aligned on shared API contracts',
    'Implementing secure authentication: OAuth 2.0, JWT, two-factor and role-based access',
    'Designing a microservice backend with a single gateway as the entry point',
    'Documenting a distributed API with Swagger/OpenAPI',
    'Keeping secrets out of the code with HashiCorp Vault',
  ],
} satisfies ProjectData
