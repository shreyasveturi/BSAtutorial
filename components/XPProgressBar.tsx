import React from 'react';

interface XPProgressBarProps {
  currentXP: number;
  targetXP: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function XPProgressBar({ currentXP, targetXP, showLabel = true, size = 'md' }: XPProgressBarProps) {
  const percentage = (currentXP / targetXP) * 100;

  const heightClass = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  }[size];

  return (
    <div className="w-full">
      <div className={`w-full ${heightClass} bg-gray-200 rounded-full overflow-hidden`}>
        <div
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      {showLabel && <p className="text-sm text-gray-600 mt-1">{currentXP.toLocaleString()} / {targetXP.toLocaleString()} XP</p>}
    </div>
  );
}
