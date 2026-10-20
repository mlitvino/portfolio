import myPhoto from './Misha_sakura.jpg'
import type { Resume } from './resume.types'

export const resume: Resume = {
  cv: {
    file: 'Mykhailo_Litvinov_CV.pdf',
    downloadName: 'Mykhailo_Litvinov_CV.pdf',
  },
  photo: myPhoto,
  intro: [
    "Hey there, I'm Mykhailo: a full-stack developer based in Helsinki, a chess player, a history and economics reader, a regular at the gym, and a Finnish learner, one word at a time.",
    'Thanks for stopping by!',
  ],
  whatIDo: [
    'I build web and mobile apps end to end, from the database and API to the interface people actually use. My everyday stack is TypeScript, React, React Native, Node.js (NestJS, Fastify) and PostgreSQL.',
    'My foundation comes from Hive Helsinki, where I learned to program from the ground up in C and C++. Because of that, I like to understand how things work under the hood, not just that they work.',
  ],
  background: [
    'I started out in customer support, working every day in a CRM that was harder to use than it needed to be and had its share of bugs. I kept thinking about how I would build it better.',
    "Near the end of my degree in logistics management, I realized I didn't just want to use systems like that: I wanted to build them. What draws me to development is its breadth and depth, and that there is always more than one way to solve a problem.",
    'Working with customers taught me to understand what people actually need. I bring that to every project: I build solutions around the people who use them.',
  ],

  experience: [
    {
      role: 'Software Developer Student',
      company: 'General Software Development Experience',
      location: 'Helsinki, Finland',
      start: '2024-10',
      highlights: [
        'Built personal projects, including a mobile expense tracker and an npm library for merging OpenAPI specifications',
        'Contributed to an open-source movie tracker',
        'Took part in the Junction 2025 hackathon, building an AI-powered security assessment tool in a team of five',
        'Completed 12+ software engineering projects at Hive Helsinki, from low-level C/C++ to full-stack web apps',
      ],
    },
    {
      role: 'Customer Support & Sales Specialist',
      company: 'Amulex',
      location: 'Donetsk, Ukraine',
      start: '2020-08',
      end: '2022-09',
      highlights: [
        'Managed client requests and appointments in a CRM system',
        'Provided technical support to clients',
        'Supported sales by identifying client needs',
      ],
    },
  ],

  education: [
    {
      institution: 'Hive',
      degree: 'Software Development Program',
      location: 'Helsinki, Finland',
      start: '2024-10',
      end: '2026-05',
      details: [
        'Project-based peer-to-peer coding school',
        '18-month, full-time, on-site program',
        'Focused on low-level programming, algorithms and team collaboration',
        'Completed 12+ intensive programming projects',
      ],
    },
    {
      institution: 'DONNUET',
      degree: "Bachelor's Degree in Logistics Management",
      location: 'Donetsk, Ukraine',
      start: '2020-09',
      end: '2024-06',
      details: [
        'Operations management',
        'Supply chain processes',
        'Business administration',
      ],
    },
  ],

  skills: [
    { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Go', 'C++', 'C', 'Python'] },
    { label: 'Frontend', items: ['React', 'React Native', 'Expo', 'HTML/CSS'] },
    { label: 'Backend', items: ['Node.js', 'NestJS', 'Fastify', 'Express'] },
    { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'TypeORM'] },
    { label: 'Tools', items: ['Docker', 'Git', 'Nginx', 'Vite', 'GitHub Actions', 'Make'] },
    { label: 'Cloud', items: ['Hetzner', 'Google Cloud Platform (GCP)'] },
    { label: 'AI tools', items: ['GitHub Copilot', 'Codex', 'Claude Code'] },
  ],

  languages: [
    { name: 'English', level: 'professional' },
    { name: 'Ukrainian', level: 'native' },
    { name: 'Russian', level: 'native' },
    { name: 'Finnish', level: 'elementary' },
  ],

  hobbies: ['Chess', 'Economics', 'History', 'Strength training', 'Board games', 'Video games'],
}
