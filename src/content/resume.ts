import type { Resume } from './resume.types'

export const resume: Resume = {
  cv: {
    file: 'Mykhailo_Litvinov_CV.pdf',
    downloadName: 'Mykhailo_Litvinov_CV.pdf',
  },
  summary: [
    'Mock summary: who you are and what you do, in one or two sentences.',
    'Mock background: how you got into programming and what you focus on now.',
  ],

  experience: [
    {
      role: 'Mock Junior Developer',
      company: 'Example Company',
      location: 'Remote',
      start: '2025-06',
      highlights: [
        'Mock achievement: built a feature that did X for Y users.',
        'Mock achievement: improved Z, reducing load time by N%.',
      ],
      tech: ['TypeScript', 'React'],
    },
    {
      role: 'Mock Intern',
      company: 'Another Example Ltd',
      location: 'City, Country',
      start: '2024-09',
      end: '2025-02',
      highlights: [
        'Mock achievement: what you worked on and the result.',
      ],
    },
  ],

  education: [
    {
      institution: 'Example School of Programming',
      degree: 'Mock: Software Engineering program',
      location: 'City, Country',
      start: '2023-10',
      details: 'Mock details: project-based curriculum in C, Unix and algorithms.',
    },
  ],

  skills: [
    { label: 'Languages', items: ['C', 'TypeScript', 'JavaScript'] },
    { label: 'Frontend', items: ['React', 'React Router', 'CSS Modules'] },
    { label: 'Tools', items: ['Git', 'Vite', 'GitHub Actions', 'Make'] },
  ],

  languages: [
    { name: 'Mock language 1', level: 'native' },
    { name: 'English', level: 'professional' },
  ],

  hobbies: ['Mock hobby 1', 'Mock hobby 2'],
}
