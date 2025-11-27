import type { Track } from '@/types';

export const TRACKS: Record<string, Track> = {
  markets: {
    id: 'markets',
    name: 'Markets & Products',
    description: 'Learn equity, bond, and currency markets',
    color: 'bg-blue-50 border-blue-200',
    icon: '📈',
    lessonsCount: 8,
  },
  accounting: {
    id: 'accounting',
    name: 'Accounting Basics',
    description: 'Master financial statements and ratios',
    color: 'bg-green-50 border-green-200',
    icon: '📊',
    lessonsCount: 6,
  },
  valuation: {
    id: 'valuation',
    name: 'Valuation & DCF',
    description: 'Discount cash flow and company valuation',
    color: 'bg-purple-50 border-purple-200',
    icon: '💰',
    lessonsCount: 7,
  },
  options: {
    id: 'options',
    name: 'Options & Derivatives',
    description: 'Understand calls, puts, and hedging strategies',
    color: 'bg-orange-50 border-orange-200',
    icon: '📉',
    lessonsCount: 5,
  },
  brainteasers: {
    id: 'brainteasers',
    name: 'Brainteasers & Mental Math',
    description: 'Quick-fire mental calculations and logic puzzles',
    color: 'bg-pink-50 border-pink-200',
    icon: '🧠',
    lessonsCount: 10,
  },
};
