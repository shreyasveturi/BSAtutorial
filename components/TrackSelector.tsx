import React from 'react';
import type { TrackId } from '@/types';
import { TRACKS } from '@/data/tracks';

interface TrackSelectorProps {
  selectedTrack: TrackId;
  onSelectTrack: (trackId: TrackId) => void;
}

export function TrackSelector({ selectedTrack, onSelectTrack }: TrackSelectorProps) {
  const trackIds: TrackId[] = ['markets', 'accounting', 'valuation', 'options', 'brainteasers'];

  return (
    <div className="flex gap-2 flex-wrap">
      {trackIds.map((trackId) => {
        const track = TRACKS[trackId];
        const isSelected = selectedTrack === trackId;
        return (
          <button
            key={trackId}
            onClick={() => onSelectTrack(trackId)}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
              isSelected
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{track.icon}</span>
            {track.name}
          </button>
        );
      })}
    </div>
  );
}
