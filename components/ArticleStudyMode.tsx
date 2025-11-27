'use client';

import React, { useState } from 'react';
import { ARTICLES } from '@/data/articles';
import { Card } from './Card';
import { Button } from './Button';
import { Tag } from './Tag';
import { ChevronLeft, Check, RotateCcw, BookOpen } from 'lucide-react';

interface ArticleStudyModeProps {
  articleId: string;
  onBack: () => void;
}

type TabType = 'checkpoints' | 'keyterms' | 'questions';

export function ArticleStudyMode({ articleId, onBack }: ArticleStudyModeProps) {
  const article = ARTICLES.find((a) => a.id === articleId);
  const [activeTab, setActiveTab] = useState<TabType>('checkpoints');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<string, boolean>>({});
  const [questionResponses, setQuestionResponses] = useState<Record<string, string>>({});

  if (!article) return null;

  const totalXP = article.xpReward;
  const completedCheckpoints = article.checkpoints.filter((c) => c.status === 'completed').length;

  const handleMarkCheckpoint = (checkpointId: string) => {
    // In a real app, this would update state
    console.log('Mark checkpoint:', checkpointId);
  };

  const handleAnswerQuestion = (questionId: string, response: string) => {
    setQuestionResponses({
      ...questionResponses,
      [questionId]: response,
    });
    setAnsweredQuestions({
      ...answeredQuestions,
      [questionId]: true,
    });
  };

  const handleMarkConfident = (questionId: string) => {
    console.log('Marked as confident:', questionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button onClick={onBack} variant="ghost">
            <ChevronLeft size={20} />
            Back
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">{article.title}</h1>
            <p className="text-gray-600">{article.source}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Progress</p>
            <p className="text-2xl font-bold text-indigo-600">{totalXP} XP</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Content */}
            <Card className="mb-8">
              <div className="prose max-w-none">
                {article.checkpoints.map((checkpoint) => (
                  <div key={checkpoint.id} className="mb-6 pb-6 border-b last:border-b-0 last:mb-0 last:pb-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{checkpoint.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">{checkpoint.content}</p>
                    <div className="flex gap-2">
                      <Tag variant="category" label={checkpoint.status} />
                      {checkpoint.status !== 'completed' && (
                        <Button size="sm" variant="secondary" onClick={() => handleMarkCheckpoint(checkpoint.id)}>
                          <Check size={14} />
                          Mark Done
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            {/* Tabs */}
            <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
              {(['checkpoints', 'keyterms', 'questions'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-3 py-2 rounded text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'checkpoints' ? '📋' : tab === 'keyterms' ? '📚' : '❓'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'checkpoints' && (
              <div className="space-y-3">
                {article.checkpoints.map((checkpoint) => (
                  <Card key={checkpoint.id} className="p-4">
                    <div className="flex gap-2">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                          checkpoint.status === 'completed'
                            ? 'bg-green-500'
                            : checkpoint.status === 'in-progress'
                              ? 'bg-indigo-500'
                              : 'bg-gray-300'
                        }`}
                      >
                        {checkpoint.status === 'completed' ? '✓' : ''}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">{checkpoint.title}</p>
                        <p className="text-xs text-gray-600 mt-1">{checkpoint.status}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'keyterms' && (
              <div className="space-y-2">
                {article.keyTerms.map((term) => (
                  <Card
                    key={term.term}
                    onClick={() => setExpandedTerm(expandedTerm === term.term ? null : term.term)}
                    className="p-4 cursor-pointer hover:shadow-md transition-all"
                  >
                    <p className="font-semibold text-gray-900 text-sm">{term.term}</p>
                    {expandedTerm === term.term && (
                      <p className="text-sm text-gray-600 mt-2">{term.explanation}</p>
                    )}
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'questions' && (
              <div className="space-y-4">
                {article.questions.map((question) => (
                  <Card key={question.id} className="p-4">
                    <p className="font-semibold text-gray-900 text-sm mb-3">{question.question}</p>

                    {question.type === 'multiple-choice' ? (
                      <div className="space-y-2">
                        {question.options?.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleAnswerQuestion(question.id, option)}
                            className={`w-full p-2 text-left text-xs rounded border-2 transition-all ${
                              questionResponses[question.id] === option
                                ? 'border-indigo-500 bg-indigo-50'
                                : 'border-gray-200 hover:border-indigo-300'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <textarea
                        value={questionResponses[question.id] || ''}
                        onChange={(e) => handleAnswerQuestion(question.id, e.target.value)}
                        placeholder="Your answer..."
                        className="w-full p-2 border border-gray-300 rounded text-xs resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows={3}
                      />
                    )}

                    {answeredQuestions[question.id] && (
                      <div className="flex gap-2 mt-3">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => handleMarkConfident(question.id)}
                          className="text-xs"
                        >
                          <Check size={12} />
                          Confident
                        </Button>
                        <Button size="sm" variant="ghost" className="text-xs">
                          <RotateCcw size={12} />
                          Review
                        </Button>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
