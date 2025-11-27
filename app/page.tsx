'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Tag } from '@/components/Tag';
import { XPProgressBar } from '@/components/XPProgressBar';
import { TRACKS } from '@/data/tracks';
import { ArrowRight, Zap, Swords, BookOpen } from 'lucide-react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleBetaSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && year) {
      console.log('Beta signup:', { email, year });
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setYear('');
        setSubmitted(false);
      }, 2000);
    }
  };

  const trackIds: Array<'markets' | 'accounting' | 'valuation' | 'options' | 'brainteasers'> = [
    'markets',
    'accounting',
    'valuation',
    'options',
    'brainteasers',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Turn finance internship prep into a{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                daily game
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Master technical finance skills—valuation, markets, accounting, options—through bite-sized gamified lessons, competitive duels, and real article breakdowns.
            </p>
            <div className="flex gap-4">
              <Link href="/learn">
                <Button variant="primary" size="lg">
                  Start Learning <ArrowRight size={20} />
                </Button>
              </Link>
              <Button variant="secondary" size="lg">
                Join Beta
              </Button>
            </div>
          </div>

          {/* Preview Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Your Progress</span>
                <span className="text-indigo-600 font-bold">385 XP</span>
              </div>
              <XPProgressBar currentXP={385} targetXP={500} size="md" />
            </div>

            <div className="flex items-center gap-2 mb-6 bg-orange-50 rounded-lg px-4 py-3">
              <span className="text-2xl">🔥</span>
              <div>
                <p className="text-sm text-orange-700">
                  <span className="font-bold">12-day streak</span>
                </p>
                <p className="text-xs text-orange-600">Keep it up!</p>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <p className="text-xs font-semibold text-indigo-600 mb-2">LESSON</p>
              <h3 className="font-bold text-gray-900 mb-2">What is Enterprise Value?</h3>
              <p className="text-sm text-gray-600 mb-3">Understanding a company's total market value</p>
              <div className="flex gap-2 items-center">
                <Tag variant="difficulty" difficulty="Beginner" label="Beginner" />
                <div className="flex items-center gap-1 text-indigo-600 text-sm font-semibold">
                  <Zap size={14} />
                  +20 XP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three ways to master finance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Learn in Small Chunks',
                description: 'Duolingo-style bite-sized lessons covering finance fundamentals, with step-by-step explanations and micro-quizzes.',
              },
              {
                icon: <Swords className="w-12 h-12" />,
                title: 'Battle in Duels',
                description: 'Face off against a bot or other users in timed quizzes. See who answers faster and more accurately.',
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: 'Read Real Articles',
                description: 'Study curated finance articles with checkpoints, key terms, and comprehension questions.',
              },
            ].map((item, idx) => (
              <Card key={idx}>
                <div className="text-indigo-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Tracks</h2>
          <p className="text-lg text-gray-600">Choose a track and start your journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {trackIds.map((trackId) => {
            const track = TRACKS[trackId];
            return (
              <Card key={trackId} hover>
                <div className="text-4xl mb-3">{track.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{track.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{track.description}</p>
                <div className="space-y-2">
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">{track.lessonsCount}</span> lessons
                  </div>
                  <Tag variant="category" label="Beginner" />
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Beta Signup */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 my-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Join the Beta</h2>
            <p className="text-indigo-100">Get early access and help shape the future of finance education</p>
          </div>

          <form onSubmit={handleBetaSignup} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            >
              <option value="">Year</option>
              <option value="freshman">Freshman</option>
              <option value="sophomore">Sophomore</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
              <option value="grad">Grad</option>
            </select>
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className={submitted ? 'bg-green-100 text-green-800' : ''}
            >
              {submitted ? '✓ Submitted' : 'Join Beta'}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
