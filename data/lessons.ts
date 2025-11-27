import type { Lesson } from '@/types';

export const LESSONS: Lesson[] = [
  // Markets
  {
    id: 'lesson-1',
    trackId: 'markets',
    title: 'What is Enterprise Value?',
    subtitle: 'Understanding a company\'s total market value',
    difficulty: 'Beginner',
    xpReward: 20,
    estimatedTime: 5,
    completed: false,
    steps: [
      {
        type: 'concept',
        content: 'Enterprise Value (EV) is the total market value of a company, including equity and debt, minus cash. It represents what a buyer would theoretically pay to acquire the entire business.',
        formula: 'EV = Market Cap + Total Debt - Cash & Cash Equivalents',
      },
      {
        type: 'example',
        content: 'Example: Company XYZ has a market cap of $100M, $50M in debt, and $10M in cash.\nEV = $100M + $50M - $10M = $140M',
      },
      {
        type: 'quiz',
        question: {
          type: 'multiple-choice',
          text: 'If a company has a market cap of $50M, $20M debt, and $5M cash, what is the EV?',
          options: ['$65M', '$75M', '$55M', '$45M'],
          correctAnswer: '$65M',
          explanation: 'EV = $50M + $20M - $5M = $65M. Enterprise value includes debt but excludes cash.',
        },
      },
    ],
  },
  {
    id: 'lesson-2',
    trackId: 'markets',
    title: 'Bull vs Bear Markets',
    subtitle: 'Market sentiment and trend directions',
    difficulty: 'Beginner',
    xpReward: 15,
    estimatedTime: 4,
    completed: false,
    steps: [
      {
        type: 'concept',
        content: 'A Bull Market occurs when prices are rising and investor confidence is high. A Bear Market is when prices are falling and sentiment is negative, typically defined as a 20%+ decline from recent highs.',
      },
      {
        type: 'example',
        content: 'Bull Market: 2010-2020 saw a 400%+ S&P 500 rally. Bear Market: 2022 saw major indices drop 15-25%.',
      },
      {
        type: 'quiz',
        question: {
          type: 'multiple-choice',
          text: 'What defines a bear market?',
          options: ['Any decline in stock prices', 'A 20%+ decline from recent highs', 'A single bad trading day', 'Lower than yesterday'],
          correctAnswer: 'A 20%+ decline from recent highs',
          explanation: 'A bear market is officially defined as a 20% or greater decline from recent peak levels.',
        },
      },
    ],
  },
  // Accounting
  {
    id: 'lesson-3',
    trackId: 'accounting',
    title: 'The Income Statement Explained',
    subtitle: 'Revenue, expenses, and net income',
    difficulty: 'Beginner',
    xpReward: 20,
    estimatedTime: 6,
    completed: false,
    steps: [
      {
        type: 'concept',
        content: 'The Income Statement shows a company\'s profitability over a period. It starts with revenue, subtracts costs, and ends with net income (profit or loss).',
        formula: 'Net Income = Revenue - COGS - Operating Expenses - Taxes',
      },
      {
        type: 'example',
        content: 'Example: A SaaS company has $10M revenue, $3M COGS, $4M operating expenses, and $1M taxes.\nNet Income = $10M - $3M - $4M - $1M = $2M profit',
      },
      {
        type: 'quiz',
        question: {
          type: 'multiple-choice',
          text: 'What does the Income Statement measure?',
          options: ['Cash flow', 'Profitability over time', 'Assets and liabilities', 'Stock price'],
          correctAnswer: 'Profitability over time',
          explanation: 'The income statement measures a company\'s profitability by showing revenue and expenses over a specific period.',
        },
      },
    ],
  },
  // Valuation
  {
    id: 'lesson-4',
    trackId: 'valuation',
    title: 'Introduction to DCF Analysis',
    subtitle: 'Valuing companies using future cash flows',
    difficulty: 'Intermediate',
    xpReward: 30,
    estimatedTime: 8,
    completed: false,
    steps: [
      {
        type: 'concept',
        content: 'Discounted Cash Flow (DCF) analysis values a company based on its expected future cash flows. The idea: money today is worth more than money tomorrow.',
      },
      {
        type: 'example',
        content: 'If you expect a company to generate $100M in cash flow next year, and your discount rate is 10%, that future cash is worth $90.9M today (adjusted for the time value of money).',
      },
      {
        type: 'quiz',
        question: {
          type: 'multiple-choice',
          text: 'What is the primary principle behind DCF valuation?',
          options: ['All companies have the same value', 'Money today is worth more than money tomorrow', 'Stock price equals book value', 'DCF is always more accurate than comparables'],
          correctAnswer: 'Money today is worth more than money tomorrow',
          explanation: 'DCF is based on the time value of money principle: present cash is more valuable than future cash.',
        },
      },
    ],
  },
  // Options
  {
    id: 'lesson-5',
    trackId: 'options',
    title: 'Calls and Puts 101',
    subtitle: 'Basic options strategies explained',
    difficulty: 'Intermediate',
    xpReward: 25,
    estimatedTime: 7,
    completed: false,
    steps: [
      {
        type: 'concept',
        content: 'A Call Option gives the buyer the right (not obligation) to buy a stock at a set price by a future date. A Put Option gives the right to sell at a set price.',
      },
      {
        type: 'example',
        content: 'You buy a call on ACME stock at a $50 strike price. If ACME rises to $60, you profit $10 per share. If it falls, you only lose your premium paid.',
      },
      {
        type: 'quiz',
        question: {
          type: 'multiple-choice',
          text: 'What does owning a call option give you the right to do?',
          options: ['Buy stock at a strike price', 'Sell stock at a strike price', 'Borrow money', 'Nothing, it\'s just a bet'],
          correctAnswer: 'Buy stock at a strike price',
          explanation: 'A call gives the buyer the right to purchase stock at a predetermined price (strike price).',
        },
      },
    ],
  },
  // Brainteasers
  {
    id: 'lesson-6',
    trackId: 'brainteasers',
    title: 'Quick Mental Math: Percentages',
    subtitle: 'Master fast percentage calculations',
    difficulty: 'Beginner',
    xpReward: 10,
    estimatedTime: 3,
    completed: false,
    steps: [
      {
        type: 'concept',
        content: 'To quickly find X% of Y, multiply Y by X/100. Trick: 10% is just moving the decimal left once. 20% = 10% × 2, etc.',
      },
      {
        type: 'example',
        content: 'What\'s 15% of $200? Break it: 10% = $20, 5% = $10, Total = $30.',
      },
      {
        type: 'quiz',
        question: {
          type: 'numeric',
          text: 'What is 25% of $80?',
          correctAnswer: 20,
          explanation: '$80 × 0.25 = $20. Quick trick: 25% = 1/4, so $80/4 = $20.',
        },
      },
    ],
  },
];
