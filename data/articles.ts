import type { Article } from '@/types';

export const ARTICLES: Article[] = [
  {
    id: 'article-1',
    title: 'Is the AI Boom a Bubble? Breaking Down the Tech Rally',
    source: 'Financial Times',
    readingTime: 8,
    featured: true,
    xpReward: 30,
    completed: false,
    checkpoints: [
      {
        id: 'cp-1',
        title: 'Understanding Market Valuations',
        summary: 'Overview of how AI companies are valued compared to historical norms',
        status: 'locked',
        content: 'The AI sector has experienced unprecedented valuation multiples, with some companies trading at 50-100x forward earnings. This compares to historical tech boom averages of 30-40x. Market analysts are debating whether these valuations reflect genuine long-term value creation or speculative excess.',
      },
      {
        id: 'cp-2',
        title: 'Revenue Growth Expectations',
        summary: 'How realistic are projected growth rates for AI companies?',
        status: 'locked',
        content: 'Current projections assume 50-200% annual growth rates for AI leaders. Historical precedent suggests such growth rates rarely sustain beyond 5-10 years. The key question: can AI adoption justify these projections, or will growth decelerate faster than market expectations?',
      },
      {
        id: 'cp-3',
        title: 'Competitive Landscape',
        summary: 'Market concentration and emerging challengers',
        status: 'locked',
        content: 'A handful of players (OpenAI, Google, Microsoft) currently dominate AI. History shows tech markets consolidate around 2-3 leaders, but disruptors can emerge. Investors should monitor new entrants and whether today\'s leaders maintain moats.',
      },
    ],
    keyTerms: [
      {
        term: 'Valuation Multiple',
        explanation: 'The ratio of market cap to earnings (P/E ratio). High multiples suggest market expects strong growth.',
      },
      {
        term: 'Market Moat',
        explanation: 'Competitive advantage making it hard for rivals to catch up (e.g., brand, network effects).',
      },
      {
        term: 'Forward Earnings',
        explanation: 'Projected future earnings used to calculate forward P/E ratios.',
      },
      {
        term: 'Market Consolidation',
        explanation: 'When a market evolves to have fewer, larger players dominating.',
      },
    ],
    questions: [
      {
        id: 'q-1',
        type: 'multiple-choice',
        question: 'According to the article, what is a key concern with current AI valuations?',
        options: [
          'Companies are growing too slowly',
          'Valuations may not reflect sustainable long-term growth',
          'AI is not profitable',
          'The sector is too competitive',
        ],
        correctAnswer: 'Valuations may not reflect sustainable long-term growth',
        answered: false,
      },
      {
        id: 'q-2',
        type: 'short-answer',
        question: 'Name one potential risk to current AI market leaders based on historical tech trends.',
        answered: false,
      },
    ],
  },
  {
    id: 'article-2',
    title: 'Understanding Private Equity: How PE Firms Create Value',
    source: 'Harvard Business Review',
    readingTime: 12,
    featured: true,
    xpReward: 40,
    completed: false,
    checkpoints: [
      {
        id: 'cp-4',
        title: 'Leverage Strategy',
        summary: 'Using debt to amplify returns in PE acquisitions',
        status: 'locked',
        content: 'PE firms use leverage (borrowed money) to acquire companies. They\'ll put 30-40% equity and finance 60-70% with debt. If the company grows and debt is repaid, the equity portion grows faster, creating "financial engineering" returns.',
      },
      {
        id: 'cp-5',
        title: 'Operational Improvements',
        summary: 'Cutting costs and improving efficiency',
        status: 'locked',
        content: 'Beyond leverage, PE firms improve companies by cutting waste, streamlining operations, and focusing on core business. This operational value creation typically generates 5-10% IRR.',
      },
      {
        id: 'cp-6',
        title: 'Exit Strategy',
        summary: 'How PE firms exit their investments',
        status: 'locked',
        content: 'PE firms typically hold companies 5-7 years before exiting via IPO or strategic sale. Timing the exit is crucial: selling into strong markets maximizes returns.',
      },
    ],
    keyTerms: [
      {
        term: 'Leverage',
        explanation: 'Using borrowed money to increase potential returns (and risks).',
      },
      {
        term: 'IRR (Internal Rate of Return)',
        explanation: 'The annualized return on an investment, accounting for timing of cash flows.',
      },
      {
        term: 'EBITDA Multiple',
        explanation: 'Entry valuation based on EBITDA (earnings before interest, taxes, depreciation, amortization).',
      },
      {
        term: 'Strategic Exit',
        explanation: 'Selling to another company (buyer) rather than going public.',
      },
    ],
    questions: [
      {
        id: 'q-3',
        type: 'multiple-choice',
        question: 'What is the primary advantage of PE firms using leverage?',
        options: [
          'It reduces risk',
          'It amplifies equity returns',
          'It eliminates need for operational improvements',
          'It guarantees profits',
        ],
        correctAnswer: 'It amplifies equity returns',
        answered: false,
      },
    ],
  },
  {
    id: 'article-3',
    title: 'ESG Investing: Beyond Buzzwords to Real Impact',
    source: 'The Economist',
    readingTime: 10,
    featured: false,
    xpReward: 25,
    completed: false,
    checkpoints: [
      {
        id: 'cp-7',
        title: 'What is ESG?',
        summary: 'Environmental, Social, Governance factors in investing',
        status: 'locked',
        content: 'ESG investing considers non-financial factors: environmental impact (climate, pollution), social responsibility (labor, community), and governance (board diversity, executive pay). ESG scores influence institutional investment decisions.',
      },
      {
        id: 'cp-8',
        title: 'Performance & Skepticism',
        summary: 'Does ESG investing outperform or underperform?',
        status: 'locked',
        content: 'Research is mixed. Some studies show ESG portfolios outperform, others show underperformance. Critics argue ESG is a marketing tool; supporters say long-term risks (climate, regulatory) justify higher valuations for strong ESG companies.',
      },
    ],
    keyTerms: [
      {
        term: 'ESG Score',
        explanation: 'A rating quantifying a company\'s environmental, social, and governance practices.',
      },
      {
        term: 'Impact Investing',
        explanation: 'Investing with intent to generate social/environmental impact alongside financial returns.',
      },
    ],
    questions: [
      {
        id: 'q-4',
        type: 'multiple-choice',
        question: 'What does the "E" in ESG stand for?',
        options: ['Equity', 'Environmental', 'Economic', 'Earnings'],
        correctAnswer: 'Environmental',
        answered: false,
      },
    ],
  },
];
