import type { UserProgress } from '@/types';

export const DEFAULT_USER_PROGRESS: UserProgress = {
  xp: 385,
  level: 3,
  streak: 12,
  lastActivityDate: new Date().toISOString().split('T')[0],
  completedLessons: ['lesson-1', 'lesson-2'],
  completedArticles: [],
  duelsPlayed: 5,
  duelsWon: 3,
  trackProgress: {
    markets: { completed: 2, total: 8 },
    accounting: { completed: 0, total: 6 },
    valuation: { completed: 0, total: 7 },
    options: { completed: 0, total: 5 },
    brainteasers: { completed: 0, total: 10 },
  },
};
