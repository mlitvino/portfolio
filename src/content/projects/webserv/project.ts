import type { ProjectData } from '@/features/projects'

export default {
  title: 'Webserv',
  summary:
    'An HTTP/1.1 web server in C++20, inspired by nginx: a single epoll event loop serves many clients at once, configured through nginx-style files.',
  date: '2025-09-01',
  tech: ['C++', 'Linux', 'Make'],
  topics: ['Networking', 'HTTP'],
  links: {
    repo: 'https://github.com/mlitvino/webserv',
  },
  featured: false,

  team: '2 people',
  role: 'Server core: sockets, epoll event loop and HTTP handling',
  duration: '8 weeks',
  context: 'School project',
  overview: [
    'Webserv is an HTTP server written from scratch in C++20 that works like a small nginx: it reads a configuration file, listens on one or more ports and answers requests from browsers and tools like curl.',
    'All connections are handled in one process by a single event loop built on epoll, so a slow client never blocks the others.',
  ],
  features: [
    'HTTP/1.1 requests and responses, tested with browsers and curl',
    'Multiple virtual servers on different ports from one configuration file',
    'nginx-style configuration file parser',
    'Non-blocking I/O with a single epoll event loop',
    'Detects port conflicts at startup, before binding',
    'Memory managed with smart pointers and RAII',
    'Clear error responses and diagnostics instead of crashes',
  ],
  learned: [
    'How HTTP works under the hood: parsing requests and building valid responses',
    'Network programming with sockets and non-blocking I/O',
    'Event-driven design: serving many clients with one epoll loop',
    'Modern C++: smart pointers, RAII and classes that clean up after themselves',
    'Tracking down connection bugs, such as resets on POST requests',
  ],
} satisfies ProjectData
