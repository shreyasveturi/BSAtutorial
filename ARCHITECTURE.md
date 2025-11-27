# Architecture & Design Documentation

## Overview

**Break Into Finance** is a gamified finance education platform built with Next.js, TypeScript, and Tailwind CSS. It provides an interactive learning experience for students preparing for finance internships.

## Design Language

### Color Palette
- **Primary**: Indigo 600 (#4F46E5) - Main actions, links, highlights
- **Secondary**: Purple 600 (#A855F7) - Accents, secondary actions
- **Success**: Green 600 (#16A34A) - Correct answers, completions
- **Warning**: Orange 600 (#EA580C) - Streaks, important info
- **Error**: Red 600 (#DC2626) - Incorrect answers, losses
- **Neutral**: Gray palette for text and backgrounds

### Typography
- **Headlines**: Bold, large (24-48px), high contrast
- **Body**: Regular weight, 16px, line-height 1.6
- **Labels**: Semibold, 12-14px, uppercase or capitalized
- **Monospace**: For formulas and code examples

### Spacing & Layout
- **Grid**: Tailwind's flex/grid with gap-4, gap-6, gap-8
- **Padding**: p-4, p-6, px-4, py-3 consistently
- **Rounded**: rounded-2xl for cards, rounded-lg for inputs
- **Shadows**: shadow-sm for cards, shadow-lg for modals

## Component Architecture

### Base Components (Fully Reusable)
```
Button
  - Variants: primary, secondary, ghost, danger
  - Sizes: sm, md, lg
  - States: default, hover, active, disabled

Card
  - Optional header/footer
  - Hover effects
  - Click handlers

Tag/Badge
  - Difficulty colors (Beginner/Intermediate/Advanced)
  - Category tags
  - Status badges
```

### Composite Components (Combination of Base Components)
```
LessonCard
  - Uses: Card, Button, Tag, Icon
  - Data: Lesson object

XPProgressBar
  - Gradient progress indicator
  - XP label display

TrackSelector
  - Chip buttons for track selection
  - Visual feedback
```

### Feature Components (Page-Specific Logic)
```
LessonModal
  - Multi-step lesson flow
  - Quiz handling
  - Feedback system
  - Progress tracking

ArticleStudyMode
  - Article content display
  - Tabbed interface
  - Key terms expandable
  - Question answering

DuelBattle
  - Score tracking
  - Question flow
  - Timer UI
  - Results screen
```

### Layout Components
```
Navigation
  - Logo and wordmark
  - Nav links
  - Active state
  - Streak display

Footer
  - Links
  - Copyright
  - Minimal design
```

## Data Flow Architecture

### State Management
```
User Progress (localStorage)
  ├── XP & Level
  ├── Streak count
  ├── Completed lessons
  ├── Completed articles
  ├── Duel stats
  └── Track progress

Component Local State (useState)
  ├── Current lesson step
  ├── Selected track
  ├── Modal/drawer state
  ├── Form inputs
  └── Question answers
```

### Data Structure Hierarchy
```
App
  ├── Navigation (global state from URL)
  ├── Pages
  │   ├── Home
  │   ├── Learn
  │   │   ├── TrackSelector
  │   │   └── LessonCard[] → LessonModal
  │   ├── Duels
  │   │   ├── DuelArena
  │   │   └── DuelBattle
  │   ├── Articles
  │   │   ├── ArticleCard[]
  │   │   └── ArticleStudyMode
  │   └── Profile
  │       ├── Stats
  │       ├── TrackProgress[]
  │       └── ActivityFeed[]
  └── Footer
```

## Page Architecture

### Home Page (/)
```
Hero Section
  ├── Headline + CTA buttons
  └── Preview card (XP bar, streak, sample lesson)

How It Works
  └── 3 feature cards (Learn, Duel, Articles)

Tracks Overview
  └── Track cards grid (5 tracks)

Beta Signup
  └── Email + year select + submit

Footer
```

### Learn Page (/learn)
```
Header + Track Selector

Lesson Grid
  └── LessonCard[]
      └── onClick → LessonModal

LessonModal
  ├── Progress bar
  ├── Step content (concept/example/quiz)
  ├── Navigation (Previous/Next/Finish)
  └── XP tracker
```

### Duels Page (/duels)
```
Arena Setup (if not started)
  ├── Player card
  ├── Bot card
  └── Start button

Battle Mode (if started)
  ├── Score displays
  ├── Progress bar
  ├── Question + options
  └── Real-time scoring

Results (if finished)
  ├── Win/loss indicator
  ├── Score comparison
  ├── XP earned
  └── Play again button
```

### Articles Page (/articles)
```
Header + Filter/Search

Featured Articles Grid
  └── ArticleCard[]

All Articles Grid
  └── ArticleCard[]

ArticleStudyMode (when selected)
  ├── Header (title, back button)
  ├── Left: Article reader
  │   └── Checkpoints content
  ├── Right: Learning panel
  │   ├── Checkpoints tab
  │   ├── Key terms tab
  │   └── Questions tab
  └── Progress tracker
```

### Profile Page (/profile)
```
Header Card
  ├── User greeting
  ├── Level display
  └── Streak display

XP Progress Card

Stats Grid
  ├── Duels played
  ├── Win rate
  └── Lessons completed

Track Progress
  └── Progress bar per track

Recent Activity Feed

Settings Section
  ├── Dark mode toggle
  └── Export data button
```

## Interaction Patterns

### Lesson Flow
```
User clicks lesson card
  ↓
LessonModal opens
  ↓
User reads concept/example
  ↓
User answers quiz question
  ↓
System shows feedback
  ↓
Auto-advance to next step (quiz) or manual (concept/example)
  ↓
Last step: show XP earned, close button
  ↓
Modal closes, lesson marked complete
```

### Duel Flow
```
User clicks "Start Duel"
  ↓
Arena transforms to battle mode
  ↓
Questions presented one by one
  ↓
User selects answer
  ↓
System scores both player and bot
  ↓
1.5s delay, then next question
  ↓
After 5 questions: results screen
  ↓
User can play again or go back
```

### Article Study Flow
```
User clicks "Study Article"
  ↓
Article detail view loads
  ↓
Checkpoints show as article sections
  ↓
User can:
  - Read checkpoints (left)
  - Expand key terms (right)
  - Answer questions (right)
  ↓
Questions can be marked as confident/review
  ↓
XP awarded on completion
```

## File Organization

```
my-app/
├── app/
│   ├── globals.css          # Global Tailwind styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── learn/page.tsx
│   ├── duels/page.tsx
│   ├── articles/page.tsx
│   └── profile/page.tsx
│
├── components/
│   ├── Navigation.tsx       # Top navbar
│   ├── Footer.tsx           # Bottom footer
│   ├── Button.tsx           # Base button component
│   ├── Card.tsx             # Base card component
│   ├── Tag.tsx              # Badge/tag component
│   ├── XPProgressBar.tsx    # Progress visualization
│   ├── LessonCard.tsx       # Lesson display card
│   ├── LessonModal.tsx      # Lesson interactive modal
│   ├── TrackSelector.tsx    # Track selection chips
│   └── ArticleStudyMode.tsx # Article study interface
│
├── data/
│   ├── lessons.ts           # Mock lesson data
│   ├── articles.ts          # Mock article data
│   ├── duels.ts             # Mock duel questions
│   ├── tracks.ts            # Track definitions
│   └── user.ts              # Default user progress
│
├── types/
│   └── index.ts             # All TypeScript interfaces
│
├── hooks/
│   └── useLocalStorage.ts   # localStorage hook
│
├── public/                  # Static assets (empty)
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── README.md
└── QUICKSTART.md
```

## Performance Optimizations

### Code Splitting
- Each page is its own bundle
- Modals are lazy-loaded on demand
- Dynamic imports for heavy components

### Rendering
- Static generation where possible (pages at build time)
- Client-side state for interactivity
- No unnecessary re-renders (proper dependency arrays)

### Assets
- Tailwind CSS (no runtime)
- Lucide React (SVG icons, tree-shakeable)
- Minimal JavaScript bundle

### Caching
- localStorage for user progress
- Browser caching headers
- Next.js automatic caching

## Scalability Considerations

### Adding New Features
1. Create new data in `data/` if needed
2. Create new types in `types/` 
3. Create new components in `components/`
4. Wire into pages

### Backend Integration
```typescript
// Replace mock data with API calls
const { data: lessons } = useQuery(['lessons', trackId], 
  () => api.getLessons(trackId)
)
```

### Database Schema (Future)
```
Users
  ├── id (PK)
  ├── email
  ├── level
  ├── xp
  ├── streak
  └── createdAt

Progress
  ├── userId (FK)
  ├── lessonId
  ├── status (completed)
  └── completedAt

Scores
  ├── userId (FK)
  ├── duelId
  ├── score
  └── timestamp
```

## Accessibility Features

- Semantic HTML (buttons, links, forms)
- Focus states on all interactive elements
- Color contrast meets WCAG AA standards
- Keyboard navigation support
- ARIA labels for icons

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest version
- Mobile: iOS Safari 12+, Chrome Android

## Testing Recommendations

```typescript
// Unit tests for components
describe('Button', () => {
  it('calls onClick when clicked', () => {})
  it('renders different variants', () => {})
})

// Integration tests for flows
describe('Lesson Flow', () => {
  it('completes a full lesson', () => {})
  it('tracks XP correctly', () => {})
})

// E2E tests for user journeys
describe('User Journey', () => {
  it('learns → duels → articles → profile', () => {})
})
```

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Environment Variables
```
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
JWT_SECRET=...
```

## Monitoring & Analytics

### Error Tracking
- Sentry for JavaScript errors
- Custom error boundaries

### Analytics
- Google Analytics for pageviews
- Custom events for learning actions
- Funnel tracking

### Performance
- Web Vitals monitoring
- Core Web Vitals badges
- Performance budget: < 100KB JS

## Future Roadmap

1. **Phase 1**: Backend API
2. **Phase 2**: User authentication
3. **Phase 3**: Real-time multiplayer duels
4. **Phase 4**: AI-powered content recommendations
5. **Phase 5**: Mobile app (React Native)
6. **Phase 6**: Social features (leaderboards, achievements)
