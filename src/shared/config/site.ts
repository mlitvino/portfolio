export type Availability = 'open' | 'selective' | 'closed'

export const siteConfig = {
  availability: 'open' as Availability,
  name: 'Mykhailo Litvinov',
  title: 'Software Developer',
  tagline:
    'Full-stack developer with a low-level C background: I build web apps that are fast and reliable from the server to the browser.',
  email: { user: 'mi.litvino', domain: 'gmail.com' },
  socials: [
    { label: 'GitHub', url: 'https://github.com/mlitvino' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mlitvino/' },
  ],
} as const

export type SocialLabel = (typeof siteConfig.socials)[number]['label']
