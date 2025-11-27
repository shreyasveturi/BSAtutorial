# Quick Start Guide

## Installation

```bash
cd my-app
npm install --legacy-peer-deps
```

## Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Layout

- **Home (`/`)** - Landing page with value proposition and track overview
- **Learn (`/learn`)** - Browse and start lessons by track
- **Duels (`/duels`)** - Battle against bot in timed quizzes
- **Articles (`/articles`)** - Study curated finance articles
- **Profile (`/profile`)** - View progress, stats, and settings

## Key Features

### 1. Lessons
- 6+ lessons across 5 finance tracks
- Multi-step learning with concepts, examples, and quizzes
- Real-time feedback and XP rewards
- Progress tracking

### 2. Duels
- 5-question battles against AI bot
- Real-time score tracking
- Win/loss results with XP rewards
- Play again functionality

### 3. Articles
- 3 curated finance articles
- Interactive checkpoints for progress tracking
- Key terms with explanations
- Comprehension questions
- Tab-based navigation

### 4. Gamification
- XP system with levels
- Daily streak tracking
- Progress bars and visual feedback
- Achievement tracking

## Component Structure

All components are in `/components`:
- **Layout**: Navigation, Footer
- **Forms**: Input fields, selectors
- **Cards**: Card, LessonCard, ArticleCard
- **Progress**: XPProgressBar
- **Modals**: LessonModal, ArticleStudyMode
- **UI**: Button, Tag, TrackSelector

## Data Structure

All mock data is in `/data`:
- `lessons.ts` - Lesson content and steps
- `articles.ts` - Article content with checkpoints
- `duels.ts` - Duel questions
- `tracks.ts` - Finance track definitions
- `user.ts` - Default user progress

## TypeScript Types

All types are in `/types/index.ts` including:
- Lesson, LessonStep
- Article, Checkpoint, KeyTerm
- DuelQuestion, DuelOpponent
- UserProgress, ActivityItem
- Track, Difficulty

## Customization Tips

### Add a New Lesson
```typescript
// data/lessons.ts
{
  id: 'lesson-7',
  trackId: 'markets',
  title: 'Your Lesson Title',
  subtitle: 'Brief description',
  difficulty: 'Beginner',
  xpReward: 20,
  estimatedTime: 5,
  completed: false,
  steps: [
    { type: 'concept', content: '...' },
    { type: 'quiz', question: { ... } }
  ]
}
```

### Add a New Article
```typescript
// data/articles.ts
{
  id: 'article-4',
  title: 'Article Title',
  source: 'Source Name',
  readingTime: 10,
  featured: false,
  xpReward: 30,
  completed: false,
  checkpoints: [...],
  keyTerms: [...],
  questions: [...]
}
```

### Styling
- Primary: Indigo (#4F46E5)
- Secondary: Purple (#A855F7)
- Neutral: Grays
- Use Tailwind utilities (flex, gap, px, py, rounded, etc.)

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Performance

- Static generation for main pages
- Optimized component rendering
- Tailwind CSS (no runtime)
- ~50KB initial JS bundle

## Next Steps

1. Test all pages and interactions
2. Customize colors/branding in tailwind.config.ts
3. Add more lessons and articles
4. Connect to a real backend
5. Add user authentication
6. Deploy to Vercel

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Peer dependency errors?**
```bash
npm install --legacy-peer-deps
```

**Need to rebuild?**
```bash
rm -rf .next
npm run dev
```

## API Integration

To connect a real backend:

1. Create an API client in `lib/api.ts`
2. Replace mock data calls in pages with API calls
3. Add loading/error states
4. Use React Query or SWR for data fetching

Example:
```typescript
// Replace LESSONS.filter(...) with:
const { data: lessons } = useQuery('lessons', () => api.getLessons(trackId))
```
