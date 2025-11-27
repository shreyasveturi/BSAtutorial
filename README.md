# Break Into Finance - Gamified Finance Internship Prep

A modern, responsive web app that helps students prepare for finance internships through gamified learning. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

### 📚 Learn
- **Bite-sized Lessons**: Duolingo-style lessons covering finance fundamentals
- **Track Selection**: Choose from 5 different finance tracks
- **Step-by-Step Learning**: Progress through concept cards, examples, and micro-quizzes
- **Immediate Feedback**: Get corrections and explanations in real-time
- **XP Rewards**: Earn XP for completing lessons

### ⚔️ Duels
- **Competitive Battles**: Face off against a bot in timed quizzes
- **Score Tracking**: Real-time scoring during battles
- **XP Rewards**: Win XP based on performance
- **Battle Results**: Instant results with detailed scoring

### 📖 Articles
- **Curated Content**: Finance articles broken down into digestible sections
- **Interactive Checkpoints**: Track your progress through articles
- **Key Terms**: Explanations of important finance vocabulary
- **Comprehension Questions**: Test your understanding with multiple choice and short-answer questions
- **Progress Tracking**: See how much of each article you've completed

### 👤 Profile & Progress
- **User Stats**: Track XP, level, and streaks
- **Progress Overview**: Visual progress bars for each finance track
- **Activity Feed**: Recent activities and achievements
- **Settings**: Dark mode toggle and data export options

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks (Client-side)
- **Storage**: LocalStorage for persistence

## Project Structure

```
my-app/
├── app/
│   ├── layout.tsx           # Root layout with Navigation & Footer
│   ├── page.tsx             # Home page
│   ├── learn/               # Learn page & lessons
│   ├── duels/               # Duels page & battles
│   ├── articles/            # Articles page & study mode
│   ├── profile/             # Profile & dashboard page
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Top navigation bar
│   ├── Footer.tsx           # Footer
│   ├── Button.tsx           # Reusable button component
│   ├── Card.tsx             # Card component
│   ├── Tag.tsx              # Tag/badge component
│   ├── XPProgressBar.tsx    # XP progress visualization
│   ├── LessonCard.tsx       # Lesson card display
│   ├── LessonModal.tsx      # Lesson flow modal
│   ├── TrackSelector.tsx    # Track selection chips
│   ├── ArticleStudyMode.tsx # Article study interface
│   └── other components
├── data/
│   ├── lessons.ts           # Mock lesson data
│   ├── articles.ts          # Mock article data
│   ├── duels.ts             # Mock duel questions
│   ├── tracks.ts            # Finance tracks data
│   └── user.ts              # Default user progress
├── types/
│   └── index.ts             # TypeScript interfaces
└── package.json             # Dependencies
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
cd my-app
npm install --legacy-peer-deps
```

### Development

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser.

### Production Build

```bash
npm run build
npm start
```

## Features Overview

### 1. Home Page
- Hero section with value proposition
- Preview card showing your progress
- "How It Works" explanation
- Track overview grid
- Beta signup form
- Footer

### 2. Learn Page
- Track selector with all finance tracks
- Lesson cards with difficulty levels and XP rewards
- Interactive lesson modal with:
  - Progress indicators
  - Multiple step types (concept, example, quiz)
  - Immediate feedback on answers
  - XP tracking

### 3. Duels Page
- Opponent card showing bot stats
- Battle arena with questions
- Real-time score tracking
- Battle results with XP earned
- Play again functionality

### 4. Articles Page
- Featured and all articles grid
- Article cards with reading time and XP
- Study mode with:
  - Article reader with checkpoints
  - Key terms with explanations
  - Comprehension questions
  - Progress tracking
  - Tab navigation

### 5. Profile Page
- User header with level and streak
- XP progress to next level
- Statistics (duels played/won, lessons completed)
- Track progress visualization
- Recent activity feed
- Settings (dark mode, data export)

## Data Structure

The app uses mock data defined in the `data/` directory. Each data file exports TypeScript-typed objects that can be easily extended or replaced with API calls.

### Lesson Format
```typescript
{
  id: 'lesson-1',
  trackId: 'markets',
  title: 'What is Enterprise Value?',
  steps: [
    { type: 'concept', content: '...', formula: '...' },
    { type: 'example', content: '...' },
    { type: 'quiz', question: { ... } }
  ]
}
```

### Article Format
```typescript
{
  id: 'article-1',
  title: 'Is the AI Boom a Bubble?',
  checkpoints: [...],
  keyTerms: [...],
  questions: [...]
}
```

## Customization

### Adding New Lessons
1. Add lesson data to `data/lessons.ts`
2. Follow the `Lesson` interface from `types/index.ts`
3. Lessons automatically appear in Learn page

### Adding New Articles
1. Add article data to `data/articles.ts`
2. Follow the `Article` interface
3. Articles appear in Articles page

### Styling
- All components use Tailwind CSS utility classes
- Color scheme: Indigo primary, Purple secondary, Neutral grays
- Rounded corners (rounded-2xl), generous spacing (gap-4, p-6)
- Mobile-first responsive design

## Future Enhancements

- [ ] Real backend API integration
- [ ] User authentication
- [ ] Multiplayer duels
- [ ] Article recommendation engine
- [ ] Progress analytics
- [ ] Leaderboard
- [ ] Mobile app
- [ ] Dark mode implementation
- [ ] Notifications and reminders

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The app is optimized for performance:
- Static generation where possible
- Optimized images with Next.js Image component
- Code splitting with dynamic imports
- CSS-in-JS with Tailwind (no runtime overhead)

## License

This project is part of a portfolio demonstration.


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
