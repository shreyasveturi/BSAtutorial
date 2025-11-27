'use client';

import React, { useState } from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Tag } from '@/components/Tag';
import { XPProgressBar } from '@/components/XPProgressBar';
import { ARTICLES } from '@/data/articles';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';
import { ArticleStudyMode } from '@/components/ArticleStudyMode';

export default function ArticlesPage() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  if (selectedArticleId) {
    return (
      <ArticleStudyMode
        articleId={selectedArticleId}
        onBack={() => setSelectedArticleId(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Study Articles</h1>
          <p className="text-lg text-gray-600">Learn from real finance articles with interactive checkpoints and key terms</p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ARTICLES.filter((a) => a.featured).map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onStudy={() => setSelectedArticleId(article.id)}
              />
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onStudy={() => setSelectedArticleId(article.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article, onStudy }: any) {
  return (
    <Card hover>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900 flex-1">{article.title}</h3>
            {article.completed && (
              <span className="text-green-600 text-sm font-semibold ml-2">✓</span>
            )}
          </div>
          <p className="text-sm text-gray-600">{article.source}</p>
        </div>

        <div className="flex gap-2 mb-4 flex-wrap">
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Clock size={14} />
            {article.readingTime} min read
          </div>
          <Tag variant="category" label={`+${article.xpReward} XP`} />
        </div>

        <p className="text-gray-700 text-sm mb-6 flex-grow">
          {article.checkpoints[0]?.summary || 'Learn from this article'}
        </p>

        <Button onClick={onStudy} variant="primary" fullWidth>
          Study Article
          <ChevronRight size={16} />
        </Button>
      </div>
    </Card>
  );
}
