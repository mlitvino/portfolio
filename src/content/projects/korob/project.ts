import type { ProjectData } from '@/features/projects'

import homeScreenshot from './korob.png'
import transactionsScreenshot from './korob2.png'

export default {
  title: 'Korob',
  summary:
    'A minimalist expense tracker for Android, built with React Native and Expo: quick to add an expense, fully offline, and used every day by two people.',
  date: '2026-02-18',
  tech: ['TypeScript', 'React Native', 'Expo', 'SQLite', 'Drizzle', 'i18next', 'Jest'],
  topics: ['Mobile', 'Offline-first', 'Localization', 'Theming'],
  cover: homeScreenshot,
  links: {
    repo: 'https://github.com/mlitvino/korob',
  },
  featured: true,

  team: 'Solo',
  duration: 'Ongoing',
  context: 'Personal project, in daily use',
  visuals: [
    {
      src: homeScreenshot,
      alt:
        'Korob home screen: all-time income and expense totals, the balance, and buttons to add income or an expense',
      caption: 'The home screen',
    },
    {
      src: transactionsScreenshot,
      alt:
        'Transactions screen: expenses and income grouped by date, with All, Income and Expense filters',
      caption: 'Transaction history',
    },
  ],
  overview: [
    'Korob is a personal expense tracker built with React Native and Expo. I started it because I wanted features that existing apps were missing, with a focus on adding an income or expense in a few taps and seeing the balance at a glance.',
    'All data stays on the phone in a local SQLite database, so the app works offline and nothing is sent to a server. It is used every day by two people in Finland on Android, and new versions arrive over the air without reinstalling.',
  ],
  features: [
    'Balance, income and expense totals at a glance, always calculated from transactions',
    'Add a transaction in a few taps: amount, category, date and time',
    'Transaction history grouped by date, filterable by income or expense',
    'Four themes, including black and yellow, and three languages: English, Finnish and Russian',
    'Works fully offline, with data stored locally in SQLite',
    'Over-the-air updates: new versions reach phones without reinstalling',
  ],
  learned: [
    'Building a mobile app with React Native and Expo, from first screen to daily use',
    'Storing data locally with SQLite and Drizzle, including migrations',
    'Translating an app into three languages with typed translation keys',
    'Shipping updates over the air, and knowing when a full rebuild is needed',
    'Running tests, linting and type checks in CI on every push',
  ],
} satisfies ProjectData
