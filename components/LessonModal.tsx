'use client';

import React, { useState } from 'react';
import { LESSONS } from '@/data/lessons';
import { Card } from './Card';
import { Button } from './Button';
import { Tag } from './Tag';
import { XPProgressBar } from './XPProgressBar';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import type { LessonStep } from '@/types';

interface LessonModalProps {
  lessonId: string;
  onClose: () => void;
}

export function LessonModal({ lessonId, onClose }: LessonModalProps) {
  const lesson = LESSONS.find((l) => l.id === lessonId);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect' | null>(null);

  if (!lesson) return null;

  const currentStep = lesson.steps[currentStepIndex];
  const isLastStep = currentStepIndex === lesson.steps.length - 1;
  const progress = ((currentStepIndex + 1) / lesson.steps.length) * 100;

  const handleAnswer = (isCorrect: boolean) => {
    setFeedbackType(isCorrect ? 'correct' : 'incorrect');
    setShowFeedback(true);

    if (isCorrect) {
      const stepXp = Math.floor(lesson.xpReward / lesson.steps.length);
      setXpEarned(xpEarned + stepXp);
    }

    setTimeout(() => {
      setShowFeedback(false);
      if (currentStepIndex < lesson.steps.length - 1) {
        setCurrentStepIndex(currentStepIndex + 1);
      }
    }, 2000);
  };

  const handleNext = () => {
    if (!currentStep.question) {
      if (currentStepIndex < lesson.steps.length - 1) {
        setCurrentStepIndex(currentStepIndex + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">{lesson.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{lesson.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Step {currentStepIndex + 1} of {lesson.steps.length}
            </span>
            <div className="flex items-center gap-2 text-indigo-600 font-bold">
              <span>+{xpEarned} XP</span>
            </div>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8 p-6 bg-indigo-50 rounded-xl border border-indigo-200 min-h-[300px]">
          {currentStep.type === 'concept' && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Concept</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{currentStep.content}</p>
              {currentStep.formula && (
                <div className="bg-white p-4 rounded-lg border border-indigo-300 font-mono text-sm text-gray-900">
                  {currentStep.formula}
                </div>
              )}
            </div>
          )}

          {currentStep.type === 'example' && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Example</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{currentStep.content}</p>
            </div>
          )}

          {currentStep.type === 'quiz' && currentStep.question && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Question</h3>
              <p className="text-gray-700 mb-6 text-base">{currentStep.question.text}</p>

              {currentStep.question.type === 'multiple-choice' && (
                <div className="space-y-3">
                  {currentStep.question.options?.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        handleAnswer(option === currentStep.question?.correctAnswer)
                      }
                      className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all"
                      disabled={showFeedback}
                    >
                      <span className="font-semibold text-gray-900">{option}</span>
                    </button>
                  ))}
                </div>
              )}

              {currentStep.question.type === 'numeric' && (
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Enter your answer"
                    id="numeric-input"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const answer = parseFloat((e.target as HTMLInputElement).value);
                        handleAnswer(answer === currentStep.question?.correctAnswer);
                      }
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <Button
                    onClick={() => {
                      const input = document.getElementById('numeric-input') as HTMLInputElement;
                      if (input) {
                        const answer = parseFloat(input.value);
                        handleAnswer(answer === currentStep.question?.correctAnswer);
                      }
                    }}
                    variant="primary"
                  >
                    Check
                  </Button>
                </div>
              )}

              {showFeedback && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    feedbackType === 'correct'
                      ? 'bg-green-100 border border-green-300'
                      : 'bg-red-100 border border-red-300'
                  }`}
                >
                  <p
                    className={`font-semibold ${
                      feedbackType === 'correct' ? 'text-green-800' : 'text-red-800'
                    }`}
                  >
                    {feedbackType === 'correct'
                      ? '✓ Correct! Great job!'
                      : '✗ Not quite right. Try the next one!'}
                  </p>
                  {currentStep.question.explanation && (
                    <p className="text-sm mt-2 text-gray-700">{currentStep.question.explanation}</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <Button
            onClick={handlePrevious}
            variant="ghost"
            disabled={currentStepIndex === 0}
          >
            <ChevronLeft size={20} />
            Previous
          </Button>

          {!currentStep.question && (
            <Button onClick={handleNext} variant="primary" disabled={isLastStep && currentStepIndex === lesson.steps.length - 1}>
              Next
              <ChevronRight size={20} />
            </Button>
          )}

          {isLastStep && (
            <Button onClick={onClose} variant="primary">
              Finish Lesson
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
