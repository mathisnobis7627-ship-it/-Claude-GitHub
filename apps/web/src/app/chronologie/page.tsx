'use client';

import { useState } from 'react';
import { TimelineView } from '@/components/chronologie/TimelineView';
import { Badge } from '@/components/ui/Badge';

const periods = [
  { id: 'all', name: 'Toutes les périodes', color: '#6366f1' },
  { id: 'prehistoire', name: 'Préhistoire', color: '#78716c' },
  { id: 'antiquite', name: 'Antiquité', color: '#b45309' },
  { id: 'moyen_age', name: 'Moyen Âge', color: '#7c3aed' },
  { id: 'renaissance', name: 'Renaissance', color: '#059669' },
  { id: 'temps_modernes', name: 'Temps modernes', color: '#2563eb' },
  { id: 'contemporaine', name: 'Époque contemporaine', color: '#dc2626' },
];

export default function ChronologiePage() {
  const [activePeriod, setActivePeriod] = useState('all');

  return (
    <div className="section">
      <h1 className="page-title">Chronologie historique</h1>
      <p className="page-subtitle">
        Explorez l&apos;histoire de la préhistoire à nos jours sur une frise interactive.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {periods.map((period) => (
          <button
            key={period.id}
            onClick={() => setActivePeriod(period.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activePeriod === period.id
                ? 'text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
            style={activePeriod === period.id ? { backgroundColor: period.color } : {}}
          >
            {period.name}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <TimelineView />
      </div>

      {/* Guerres et conflits */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-neutral-900">Guerres et conflits majeurs</h2>
        <div className="space-y-4">
          {[
            { name: 'Guerres médiques', period: '499–449 av. J.-C.', era: 'antiquite' },
            { name: 'Guerre de Cent Ans', period: '1337–1453', era: 'moyen_age' },
            { name: 'Première Guerre mondiale', period: '1914–1918', era: 'contemporaine' },
            { name: 'Seconde Guerre mondiale', period: '1939–1945', era: 'contemporaine' },
          ].map((war) => (
            <div key={war.name} className="flex items-center gap-4 rounded-lg border border-neutral-200 p-4">
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900">{war.name}</h3>
                <p className="text-sm text-neutral-500">{war.period}</p>
              </div>
              <Badge variant="primary">{war.era}</Badge>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
