import React from 'react'

type Props = { value: number; max?: number }

export default function ProgressBar({ value, max = 100 }: Props) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div className="bg-blue-500 h-3 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
      <p className="text-sm text-gray-600 mt-2">{value} / {max} XP</p>
    </div>
  )
}
