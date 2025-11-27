'use client';

import React, { useState } from 'react';
import { TrackSelector } from '@/components/TrackSelector';
import { LessonCard } from '@/components/LessonCard';
import { LessonModal } from '@/components/LessonModal';
import { LESSONS } from '@/data/lessons';
import type { TrackId } from '@/types';

export default function LearnPage() {
  const [selectedTrack, setSelectedTrack] = useState<TrackId>('markets');
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  const filteredLessons = LESSONS.filter((lesson) => lesson.trackId === selectedTrack);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Learn Finance</h1>
          <p className="text-lg text-gray-600">Master bite-sized lessons, step by step</p>
        </div>

        {/* Track Selector */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Select a Track</h2>
          <TrackSelector selectedTrack={selectedTrack} onSelectTrack={setSelectedTrack} />
        </div>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} onStart={setActiveLessonId} />
          ))}
        </div>

        {/* Empty State */}
        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No lessons available for this track yet.</p>
          </div>
        )}
      </div>

      {/* Lesson Modal */}
      {activeLessonId && (
        <LessonModal
          lessonId={activeLessonId}
          onClose={() => setActiveLessonId(null)}
        />
      )}
    </div>
  );
}
