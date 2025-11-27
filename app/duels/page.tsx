'use client';

import React, { useState } from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Tag } from '@/components/Tag';
import { DUEL_QUESTIONS } from '@/data/duels';
import { Flame, Zap, Trophy, Repeat2, Swords } from 'lucide-react';

interface DuelState {
  started: boolean;
  currentQuestionIndex: number;
  playerScore: number;
  botScore: number;
  finished: boolean;
}

export default function DuelsPage() {
  const [duelState, setDuelState] = useState<DuelState>({
    started: false,
    currentQuestionIndex: 0,
    playerScore: 0,
    botScore: 0,
    finished: false,
  });

  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleStartDuel = () => {
    setDuelState({
      started: true,
      currentQuestionIndex: 0,
      playerScore: 0,
      botScore: 0,
      finished: false,
    });
    setAnswered(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = (answer: string) => {
    if (answered) return;

    const currentQuestion = DUEL_QUESTIONS[duelState.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    const botCorrect = Math.random() > 0.4; // Bot has 60% accuracy

    setSelectedAnswer(answer);
    setAnswered(true);

    setTimeout(() => {
      const newPlayerScore = isCorrect ? duelState.playerScore + 1 : duelState.playerScore;
      const newBotScore = botCorrect ? duelState.botScore + 1 : duelState.botScore;

      if (duelState.currentQuestionIndex < 4) {
        setDuelState({
          ...duelState,
          currentQuestionIndex: duelState.currentQuestionIndex + 1,
          playerScore: newPlayerScore,
          botScore: newBotScore,
        });
        setAnswered(false);
        setSelectedAnswer(null);
      } else {
        setDuelState({
          ...duelState,
          playerScore: newPlayerScore,
          botScore: newBotScore,
          finished: true,
        });
      }
    }, 1500);
  };

  const handlePlayAgain = () => {
    handleStartDuel();
  };

  if (!duelState.started) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Finance Duels</h1>
            <p className="text-lg text-gray-600">Face off against the Wall Street Bot</p>
          </div>

          {/* Arena Setup */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Player Card */}
              <Card className="text-center">
                <div className="text-6xl mb-4">👤</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">You</h3>
                <div className="space-y-2 my-6 text-gray-600">
                  <div>
                    <p className="text-sm text-gray-500">Streak</p>
                    <p className="text-2xl font-bold text-orange-600">12 🔥</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total XP</p>
                    <p className="text-2xl font-bold text-indigo-600">385</p>
                  </div>
                </div>
                <Tag variant="difficulty" difficulty="Intermediate" label="Intermediate" />
              </Card>

              {/* Bot Card */}
              <Card className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Wall Street Bot</h3>
                <div className="space-y-2 my-6 text-gray-600">
                  <div>
                    <p className="text-sm text-gray-500">Win Rate</p>
                    <p className="text-2xl font-bold text-purple-600">68%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Difficulty</p>
                    <p className="text-2xl font-bold">Aggressive</p>
                  </div>
                </div>
                <Tag variant="difficulty" difficulty="Advanced" label="Advanced" />
              </Card>
            </div>

            {/* Info Card */}
            <Card className="bg-blue-50 border-blue-200 mb-8">
              <div className="flex gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">How It Works</h4>
                  <p className="text-gray-700 mb-3">5 quick-fire questions. Answer correctly and faster than the bot to win points.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Correct answer = +1 point</li>
                    <li>✓ Race against time (UI only, no real timer)</li>
                    <li>✓ Winner takes XP</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Start Button */}
            <div className="text-center">
              <Button onClick={handleStartDuel} size="lg" variant="primary">
                <Swords size={20} />
                Start Duel
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (duelState.finished) {
    const playerWon = duelState.playerScore > duelState.botScore;
    const xpEarned = playerWon ? 50 : 25;

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <Card className="max-w-md w-full text-center">
          <div className={`text-6xl mb-6 ${playerWon ? '🎉' : '💪'}`} />
          <h2 className={`text-3xl font-bold mb-4 ${playerWon ? 'text-green-600' : 'text-gray-900'}`}>
            {playerWon ? 'You Won!' : 'Close One!'}
          </h2>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Your Score</p>
              <p className="text-3xl font-bold text-indigo-600">{duelState.playerScore}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Bot Score</p>
              <p className="text-3xl font-bold text-purple-600">{duelState.botScore}</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
            <div className="flex items-center justify-center gap-2">
              <Zap className="text-green-600" size={20} />
              <span className="text-lg font-bold text-green-700">+{xpEarned} XP</span>
            </div>
          </div>

          <Button onClick={handlePlayAgain} variant="primary" size="lg" fullWidth>
            <Repeat2 size={20} />
            Play Again
          </Button>
        </Card>
      </div>
    );
  }

  // Battle Mode
  const currentQuestion = DUEL_QUESTIONS[duelState.currentQuestionIndex];
  const progressPercent = ((duelState.currentQuestionIndex + 1) / 5) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Battle Header */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="text-center">
            <div className="text-3xl font-bold text-indigo-600">{duelState.playerScore}</div>
            <p className="text-sm text-gray-600">Your Score</p>
          </Card>
          <Card className="text-center">
            <div className="text-3xl font-bold text-purple-600">{duelState.botScore}</div>
            <p className="text-sm text-gray-600">Bot Score</p>
          </Card>
        </div>

        {/* Progress */}
        <Card className="mb-8">
          <div className="mb-2 flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">Question {duelState.currentQuestionIndex + 1} / 5</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </Card>

        {/* Question */}
        <Card className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.question}</h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              let buttonClass = 'border-gray-200 hover:border-indigo-500 hover:bg-indigo-50';

              if (answered) {
                if (isCorrect) {
                  buttonClass = 'border-green-500 bg-green-50';
                } else if (isSelected && !isCorrect) {
                  buttonClass = 'border-red-500 bg-red-50';
                } else {
                  buttonClass = 'border-gray-200 opacity-50';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  disabled={answered}
                  className={`w-full p-4 text-left border-2 rounded-lg transition-all font-semibold text-gray-900 ${buttonClass}`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
