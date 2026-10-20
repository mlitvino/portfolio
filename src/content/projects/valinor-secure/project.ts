import type { ProjectData } from '@/features/projects'

export default {
  title: 'Valinor-Secure',
  summary:
    "An AI-powered security assessment tool built at Junction 2025: give it a software product, and it rates the vendor's trustworthiness from vulnerabilities, incidents and compliance data.",
  date: '2025-11-14',
  tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Docker', 'Nginx'],
  topics: ['AI', 'Security', 'DevOps'],
  links: {
    repo: 'https://github.com/iliamunaev/Valinor-Secure',
  },
  featured: false,

  team: '5 people',
  role: 'DevOps and backend: Docker, Nginx with SSL and production deployment',
  duration: '2 days',
  context: 'Junction 2025 hackathon, Helsinki',
  overview: [
    'Valinor-Secure was built in two days at the Junction 2025 hackathon in Helsinki. It helps teams decide whether a piece of software is safe to use: give it a product name, and it returns a trust score from 0 to 100 with the reasons behind it.',
    'AI models combine vendor history, known vulnerabilities (CVEs), past security incidents and compliance status (SOC 2, ISO, GDPR) into one risk assessment, with sources for every claim. The command-line tool is fully working; the web interface was set up during the hackathon but not finished.',
  ],
  features: [
    'Trust score from 0 to 100 for any software product, with a confidence level',
    'Analysis of vendor history, CVE trends, security incidents and compliance',
    'Safer alternatives suggested, with reasoning',
    'Every assessment backed by cited sources',
    'Command-line tool with text or JSON output for scripting',
    'Containerised with Docker Compose and served through Nginx with SSL',
  ],
  learned: [
    'Setting up a full stack from scratch in hours: FastAPI, React and Docker Compose',
    'Configuring Nginx as a reverse proxy with SSL for a real domain',
    'Deploying to production under hackathon time pressure',
    'Working in a team of five on a tight deadline, keeping everyone unblocked',
    'How vendors are assessed for security: CVEs, incidents and compliance standards',
  ],
} satisfies ProjectData
