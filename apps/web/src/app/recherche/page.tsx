'use client';

import { useState } from 'react';
import { SearchBar } from '@/components/ui/SearchBar';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const entityTypes = [
  { value: 'all', label: 'Tout' },
  { value: 'country', label: 'Pays' },
  { value: 'person', label: 'Personnalités' },
  { value: 'article', label: 'Articles' },
  { value: 'event', label: 'Événements' },
  { value: 'lesson', label: 'Leçons' },
  { value: 'quiz', label: 'Quiz' },
  { value: 'video', label: 'Vidéos' },
];

export default function RecherchePage() {
  const [activeType, setActiveType] = useState('all');

  return (
    <div className="section">
      <h1 className="page-title">Recherche</h1>
      <p className="page-subtitle">
        Recherchez parmi tous les contenus d&apos;Atlas : pays, personnalités, articles, événements et plus.
      </p>

      <div className="mt-8">
        <SearchBar placeholder="Que souhaitez-vous explorer ?" />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {entityTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => setActiveType(type.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeType === type.value
                ? 'bg-blue-600 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Résultats de recherche (placeholder) */}
      <div className="mt-8">
        <p className="text-center text-neutral-400">
          Saisissez un terme pour lancer la recherche.
        </p>
      </div>
    </div>
  );
}
