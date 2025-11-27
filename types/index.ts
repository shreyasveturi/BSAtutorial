// Track types
export type TrackId = 'markets' | 'accounting' | 'valuation' | 'options' | 'brainteasers';
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type DifficultyColor = 'bg-green-100 text-green-800' | 'bg-blue-100 text-blue-800' | 'bg-red-100 text-red-800';

export interface Track {
  id: TrackId;
  name: string;
  description: string;
  color: string;
  icon: string;
  lessonsCount: number;
}

// Lesson types
export interface LessonStep {
  type: 'concept' | 'example' | 'quiz';
  content?: string;
  formula?: string;
  image?: string;
  question?: {
    text: string;
    type: 'multiple-choice' | 'fill-in' | 'numeric';
    options?: string[];
    correctAnswer?: string | number;
    explanation?: string;
  };
}

export interface Lesson {
  id: string;
  trackId: TrackId;
  title: string;
  subtitle: string;
  difficulty: Difficulty;
  xpReward: number;
  estimatedTime: number; // minutes
  completed: boolean;
  steps: LessonStep[];
}

// Article types
export interface Checkpoint {
  id: string;
  title: string;
  summary: string;
  status: 'locked' | 'in-progress' | 'completed';
  content: string;
}

export interface KeyTerm {
  term: string;
  explanation: string;
}

export interface ArticleQuestion {
  id: string;
  type: 'multiple-choice' | 'short-answer';
  question: string;
  options?: string[];
  correctAnswer?: string;
  answered: boolean;
  answerConfidence?: 'confident' | 'review';
}

export interface Article {
  id: string;
  title: string;
  source: string;
  readingTime: number; // minutes
  imageUrl?: string;
  featured: boolean;
  checkpoints: Checkpoint[];
  keyTerms: KeyTerm[];
  questions: ArticleQuestion[];
  xpReward: number;
  completed: boolean;
}

// Duel types
export interface DuelQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
}

export interface DuelOpponent {
  name: string;
  avatar: string;
  level: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xp: number;
  winRate: number;
}

export interface DuelResult {
  won: boolean;
  playerScore: number;
  botScore: number;
  xpEarned: number;
  timeSpent: number;
}

// User Progress types
export interface UserProgress {
  xp: number;
  level: number;
  streak: number;
  lastActivityDate: string;
  completedLessons: string[]; // lesson IDs
  completedArticles: string[]; // article IDs
  duelsPlayed: number;
  duelsWon: number;
  trackProgress: Record<TrackId, { completed: number; total: number }>;
}

export interface ActivityItem {
  id: string;
  type: 'lesson' | 'duel' | 'article';
  title: string;
  xpEarned: number;
  timestamp: string;
}
