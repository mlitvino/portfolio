import type { ProjectData } from '@/features/projects'

import screenshot from './helsing.png'

export default {
  title: 'cub3D',
  summary:
    'A first-person game in C inspired by Wolfenstein 3D: a raycasting engine, two levels, monsters, music and sound, also playable in the browser.',
  date: '2025-05-13',
  tech: ['C', 'MLX42', 'raudio', 'Make'],
  topics: ['Graphics', 'Raycasting', 'Game development'],
  links: {
    live: 'https://mlitvino.github.io/cub3D/',
    repo: 'https://github.com/mlitvino/cub3D',
  },
  featured: false,

  team: '2 people',
  role: 'Graphics and rendering',
  duration: '2 months',
  context: 'School project',
  visuals: [
    {
      src: screenshot,
      alt:
        'Collage: the Van Helsing main menu, a castle level with a minimap and health bar, and a forest level, both seen over a crossbow',
      caption: 'Main menu and two levels',
    },
  ],
  overview: [
    'cub3D is a 3D game built from scratch in C using raycasting, the technique behind Wolfenstein 3D: the 3D view is drawn from a 2D map by casting one ray per column of the screen.',
    "You play as Van Helsing, a monster hunter, fighting your way through a forest and a castle. Graphics use MLX42, a modern version of the school's minilibx library, and sound uses raudio, the audio module of raylib.",
  ],
  features: [
    'Raycasting engine with textured walls',
    'Two levels, a forest and a castle, loaded from map files',
    'Monsters to fight on the way',
    'Music and sound effects',
    'Map file parser with clear error messages',
    'Web version playable in the browser',
  ],
  learned: [
    'How 3D rendering works: raycasting, perspective and texture mapping',
    'The math behind games: vectors, angles and collisions',
    'Structuring a game loop: input, update and render every frame',
    'Integrating third-party C libraries for graphics and audio',
    'Working in a team of two and keeping our code in sync with Git',
  ],
} satisfies ProjectData
