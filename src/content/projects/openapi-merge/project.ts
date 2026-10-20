import type { ProjectData } from '@/features/projects'

export default {
  title: 'openapi-merge',
  summary:
    'An npm library that merges multiple OpenAPI 3.0 specifications into one, with clear rules for resolving conflicting paths, components and operation IDs.',
  date: '2026-05-17',
  tech: ['TypeScript', 'Node.js', 'OpenAPI', 'pnpm'],
  topics: ['Developer tools', 'APIs', 'Open source'],
  links: {
    repo: 'https://github.com/mlitvino/openapi-merge',
    npm: 'https://www.npmjs.com/package/@mlitvino/openapi-merge',
  },
  featured: true,

  team: 'Solo',
  duration: '7 weeks',
  context: 'Open-source personal project',
  overview: [
    'When a system is split into several services, each one often has its own OpenAPI specification. openapi-merge combines them into a single, deterministic document: the same inputs always give the same output.',
    'Conflicts are never silently overwritten. Each kind, whether duplicate paths, component names or operation IDs, follows a policy you choose: fail with a clear error, keep the first, or rename the incoming one and update every reference to it. It is open source on GitHub and published on npm as @mlitvino/openapi-merge.',
  ],
  features: [
    'Merges OpenAPI 3.0 documents from JSON or YAML files, URLs or in-memory objects',
    'Configurable conflict policies for paths, components and operation IDs',
    'Renames conflicting components and rewrites every $ref to them',
    'Filters operations by tag or path, and renames paths with rules or regex',
    'Never throws: returns a typed result with a clear error type',
    'Deterministic output: the same inputs always give the same result',
  ],
  learned: [
    'Designing a library for other developers: clear options, safe defaults and typed results',
    'Working with the OpenAPI specification and $ref references in depth',
    'Handling errors as values instead of exceptions',
    'Publishing and versioning a package on npm',
    'Organising a pnpm monorepo',
  ],
} satisfies ProjectData
