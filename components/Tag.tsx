import React from 'react';
import type { Difficulty } from '@/types';

interface TagProps {
  label: string;
  variant?: 'difficulty' | 'category' | 'default';
  difficulty?: Difficulty;
  className?: string;
}

export function Tag({ label, variant = 'default', difficulty, className = '' }: TagProps) {
  let bgColor = 'bg-gray-100 text-gray-800';

  if (variant === 'difficulty' && difficulty) {
    if (difficulty === 'Beginner') {
      bgColor = 'bg-green-100 text-green-800';
    } else if (difficulty === 'Intermediate') {
      bgColor = 'bg-blue-100 text-blue-800';
    } else if (difficulty === 'Advanced') {
      bgColor = 'bg-red-100 text-red-800';
    }
  } else if (variant === 'category') {
    bgColor = 'bg-purple-100 text-purple-800';
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${bgColor} ${className}`}>
      {label}
    </span>
  );
}
