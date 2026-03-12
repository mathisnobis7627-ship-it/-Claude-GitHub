'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const difficulties = ['Tous', 'Débutant', 'Intermédiaire', 'Avancé'];

const sampleQuizzes = [
  { id: 1, title: 'Capitales du monde', category: 'Géographie', difficulty: 'Débutant', questions: 10, time: '5 min' },
  { id: 2, title: 'La Révolution française', category: 'Histoire', difficulty: 'Intermédiaire', questions: 15, time: '10 min' },
  { id: 3, title: 'Les volcans et séismes', category: 'Géologie', difficulty: 'Débutant', questions: 10, time: '5 min' },
  { id: 4, title: 'Philosophes de l\'Antiquité', category: 'Personnalités', difficulty: 'Avancé', questions: 20, time: '15 min' },
  { id: 5, title: 'La Seconde Guerre mondiale', category: 'Histoire', difficulty: 'Intermédiaire', questions: 15, time: '10 min' },
  { id: 6, title: 'Drapeaux d\'Europe', category: 'Géographie', difficulty: 'Débutant', questions: 20, time: '8 min' },
];

export default function QuizPage() {
  const [activeDifficulty, setActiveDifficulty] = useState('Tous');

  const filtered = activeDifficulty === 'Tous'
    ? sampleQuizzes
    : sampleQuizzes.filter((q) => q.difficulty === activeDifficulty);

  return (
    <div className="section">
      <h1 className="page-title">Quiz interactifs</h1>
      <p className="page-subtitle">
        Testez vos connaissances avec des quiz adaptés à votre niveau.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {difficulties.map((diff) => (
          <button
            key={diff}
            onClick={() => setActiveDifficulty(diff)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeDifficulty === diff
                ? 'bg-rose-600 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            {diff}
          </button>
        ))}
      </div>

      <div className="grid-cards mt-8">
        {filtered.map((quiz) => (
          <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
            <Card className="h-full transition-transform hover:scale-[1.02]">
              <div className="mb-3 flex gap-2">
                <Badge variant="primary">{quiz.category}</Badge>
                <Badge variant="secondary">{quiz.difficulty}</Badge>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{quiz.title}</h3>
              <div className="mt-3 flex items-center gap-4 text-sm text-neutral-500">
                <span>{quiz.questions} questions</span>
                <span>{quiz.time}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
