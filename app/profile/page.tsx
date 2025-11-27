'use client';

import React, { useState } from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { XPProgressBar } from '@/components/XPProgressBar';
import { TRACKS } from '@/data/tracks';
import { DEFAULT_USER_PROGRESS } from '@/data/user';
import { Flame, Zap, Swords, BookOpen, Settings } from 'lucide-react';

const LEVEL_NAMES = ['Analyst', 'Senior Analyst', 'VP', 'Managing Director', 'C-Suite'];

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);
  const user = DEFAULT_USER_PROGRESS;

  const levelName = LEVEL_NAMES[Math.min(user.level - 1, LEVEL_NAMES.length - 1)];
  const xpForNextLevel = user.level * 500;
  const currentLevelXp = (user.level - 1) * 500;
  const xpToNextLevel = user.xp - currentLevelXp;

  const recentActivity = [
    { id: '1', type: 'lesson', title: 'Completed lesson: What is Enterprise Value?', xp: 20 },
    { id: '2', type: 'duel', title: 'Won a duel vs Wall Street Bot', xp: 30 },
    { id: '3', type: 'lesson', title: 'Completed lesson: Bull vs Bear Markets', xp: 15 },
    { id: '4', type: 'article', title: 'Finished studying: AI Boom article', xp: 25 },
    { id: '5', type: 'duel', title: 'Played duel vs Wall Street Bot', xp: 0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Card */}
        <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200 mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Hey, {levelName}-in-Training</h1>
              <p className="text-gray-600">Keep crushing your finance goals! 🚀</p>
            </div>

            <Card className="bg-white">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Level</p>
                <p className="text-4xl font-bold text-indigo-600">{user.level}</p>
                <p className="text-xs text-gray-600 mt-2">{levelName}</p>
              </div>
            </Card>

            <Card className="bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Streak</p>
                  <p className="text-2xl font-bold text-orange-600">{user.streak}</p>
                </div>
                <div className="text-4xl">🔥</div>
              </div>
            </Card>
          </div>
        </Card>

        {/* XP Progress */}
        <Card className="mb-12">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900">XP Progress</h3>
              <span className="text-2xl font-bold text-indigo-600">{user.xp} XP</span>
            </div>
            <XPProgressBar currentXP={xpToNextLevel} targetXP={xpForNextLevel - currentLevelXp} size="lg" showLabel={true} />
          </div>
          <p className="text-sm text-gray-600">
            {xpForNextLevel - currentLevelXp - xpToNextLevel} XP to reach Level {user.level + 1}
          </p>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Duels Played</p>
                <p className="text-3xl font-bold text-purple-600">{user.duelsPlayed}</p>
              </div>
              <Swords size={32} className="text-purple-200" />
            </div>
          </Card>

          <Card>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Duels Won</p>
                <p className="text-3xl font-bold text-green-600">{user.duelsWon}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {Math.round((user.duelsWon / user.duelsPlayed) * 100)}% win rate
                </p>
              </div>
              <div className="text-4xl">🏆</div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Lessons Completed</p>
                <p className="text-3xl font-bold text-indigo-600">{user.completedLessons.length}</p>
              </div>
              <BookOpen size={32} className="text-indigo-200" />
            </div>
          </Card>
        </div>

        {/* Track Progress */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Track Progress</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(user.trackProgress).map(([trackId, progress]) => {
              const track = TRACKS[trackId as keyof typeof TRACKS];
              const percentage = (progress.completed / progress.total) * 100;

              return (
                <Card key={trackId}>
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{track.icon}</span>
                      <h3 className="font-bold text-gray-900">{track.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {progress.completed} of {progress.total} lessons
                    </p>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity) => {
              const icons: Record<string, string> = {
                lesson: '📚',
                duel: '⚔️',
                article: '📰',
              };

              return (
                <Card key={activity.id} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{icons[activity.type]}</span>
                    <p className="text-gray-900">{activity.title}</p>
                  </div>
                  {activity.xp > 0 && (
                    <div className="flex items-center gap-1 text-indigo-600 font-bold">
                      <Zap size={16} />
                      +{activity.xp}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Settings */}
        <Card className="bg-gray-50 border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Settings size={20} />
              Settings
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
              <div>
                <p className="font-semibold text-gray-900">Dark Mode</p>
                <p className="text-sm text-gray-600">Enable dark mode for the app</p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-7 w-12 rounded-full transition-colors ${
                  darkMode ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-3">Export Data</p>
              <Button variant="secondary" size="sm">
                Download Progress
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
