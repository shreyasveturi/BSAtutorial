import type { DuelQuestion } from '@/types';

export const DUEL_QUESTIONS: DuelQuestion[] = [
  {
    id: 'dq-1',
    question: 'What does EV stand for in finance?',
    options: ['Electric Vehicle', 'Enterprise Value', 'Expected Value', 'Equity Value'],
    correctAnswer: 'Enterprise Value',
    category: 'valuation',
  },
  {
    id: 'dq-2',
    question: 'Which financial statement shows profitability?',
    options: ['Balance Sheet', 'Cash Flow Statement', 'Income Statement', 'Statement of Changes in Equity'],
    correctAnswer: 'Income Statement',
    category: 'accounting',
  },
  {
    id: 'dq-3',
    question: 'What is a P/E ratio?',
    options: [
      'Price divided by Equity',
      'Profit divided by Earnings',
      'Price divided by Earnings',
      'Profit to Equity ratio',
    ],
    correctAnswer: 'Price divided by Earnings',
    category: 'markets',
  },
  {
    id: 'dq-4',
    question: 'Which of these increases a call option\'s value?',
    options: [
      'Decrease in stock price',
      'Increase in stock price',
      'Decrease in volatility',
      'Decrease in time to expiration',
    ],
    correctAnswer: 'Increase in stock price',
    category: 'options',
  },
  {
    id: 'dq-5',
    question: 'What does WACC stand for?',
    options: [
      'Weighted Average Cost of Capital',
      'Weighted Average Corporate Cash',
      'Working Analysis of Capital Costs',
      'Weighted Average Creditor Costs',
    ],
    correctAnswer: 'Weighted Average Cost of Capital',
    category: 'valuation',
  },
  {
    id: 'dq-6',
    question: 'A bull market is characterized by:',
    options: [
      'Declining stock prices',
      'Rising stock prices and optimism',
      'High volatility only',
      'Low trading volume',
    ],
    correctAnswer: 'Rising stock prices and optimism',
    category: 'markets',
  },
  {
    id: 'dq-7',
    question: 'What is the formula for Return on Equity (ROE)?',
    options: [
      'Net Income / Total Assets',
      'Net Income / Shareholders\' Equity',
      'Total Assets / Shareholders\' Equity',
      'Net Income / Total Revenue',
    ],
    correctAnswer: 'Net Income / Shareholders\' Equity',
    category: 'accounting',
  },
  {
    id: 'dq-8',
    question: 'In a DCF model, what do you discount?',
    options: ['Historical earnings', 'Future cash flows', 'Dividend history', 'Stock price'],
    correctAnswer: 'Future cash flows',
    category: 'valuation',
  },
  {
    id: 'dq-9',
    question: 'What is the "time value of money"?',
    options: [
      'Money earns interest',
      'Money today is worth more than money tomorrow',
      'Inflation reduces purchasing power',
      'Savings accounts provide returns',
    ],
    correctAnswer: 'Money today is worth more than money tomorrow',
    category: 'valuation',
  },
  {
    id: 'dq-10',
    question: 'A company with a high debt-to-equity ratio has:',
    options: [
      'Low financial leverage',
      'High financial leverage',
      'No risk',
      'Guaranteed profitability',
    ],
    correctAnswer: 'High financial leverage',
    category: 'accounting',
  },
];

// Brainteaser questions
export const BRAINTEASER_QUESTIONS: DuelQuestion[] = [
  {
    id: 'bt-1',
    question: 'What is 15% of $200?',
    options: ['$30', '$20', '$40', '$25'],
    correctAnswer: '$30',
    category: 'brainteasers',
  },
  {
    id: 'bt-2',
    question: 'If a stock rises 50%, then falls 50%, where does it end up?',
    options: [
      'Back to the start',
      'Lower than the start',
      'Higher than the start',
      'At the start + 25%',
    ],
    correctAnswer: 'Lower than the start',
    category: 'brainteasers',
  },
  {
    id: 'bt-3',
    question: 'You buy a stock at $100, sell at $110. What\'s your return?',
    options: ['10%', '11%', '20%', '5%'],
    correctAnswer: '10%',
    category: 'brainteasers',
  },
];
