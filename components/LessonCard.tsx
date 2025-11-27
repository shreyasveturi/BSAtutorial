import React from 'react';
import { Card } from './Card';
import { Tag } from './Tag';
import { Button } from './Button';
import type { Lesson } from '@/types';
import { Zap } from 'lucide-react';

interface LessonCardProps {
  lesson: Lesson;
  onStart: (lessonId: string) => void;
}

export function LessonCard({ lesson, onStart }: LessonCardProps) {
  return (
    <Card hover onClick={() => onStart(lesson.id)} className="flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{lesson.title}</h3>
        <p className="text-sm text-gray-600">{lesson.subtitle}</p>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        <Tag variant="difficulty" difficulty={lesson.difficulty} label={lesson.difficulty} />
        <Tag variant="category" label={`${lesson.estimatedTime}m`} />
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-indigo-600 font-semibold">
            <Zap size={16} />
            +{lesson.xpReward} XP
          </div>
          {lesson.completed && <span className="text-green-600 text-sm font-semibold">✓ Completed</span>}
        </div>
        <Button onClick={() => onStart(lesson.id)} variant="primary" size="sm" fullWidth>
          {lesson.completed ? 'Review' : 'Start Lesson'}
        </Button>
      </div>
    </Card>
  );
}
