'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SearchBar } from '@/components/ui/SearchBar';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const categories = [
  { value: 'all', label: 'Toutes' },
  { value: 'philosopher', label: 'Philosophes' },
  { value: 'scientist', label: 'Scientifiques' },
  { value: 'artist', label: 'Artistes' },
  { value: 'writer', label: 'Écrivains' },
  { value: 'musician', label: 'Musiciens' },
  { value: 'explorer', label: 'Explorateurs' },
];

const samplePersons = [
  { slug: 'marie-curie', name: 'Marie Curie', dates: '1867–1934', category: 'scientist', summary: 'Physicienne et chimiste, double lauréate du prix Nobel.' },
  { slug: 'platon', name: 'Platon', dates: '428–348 av. J.-C.', category: 'philosopher', summary: 'Philosophe grec, fondateur de l\'Académie d\'Athènes.' },
  { slug: 'leonard-de-vinci', name: 'Léonard de Vinci', dates: '1452–1519', category: 'artist', summary: 'Artiste et inventeur de la Renaissance italienne.' },
  { slug: 'victor-hugo', name: 'Victor Hugo', dates: '1802–1885', category: 'writer', summary: 'Écrivain français, auteur des Misérables et Notre-Dame de Paris.' },
  { slug: 'mozart', name: 'Wolfgang Amadeus Mozart', dates: '1756–1791', category: 'musician', summary: 'Compositeur autrichien, prodige musical dès l\'enfance.' },
  { slug: 'ibn-battuta', name: 'Ibn Battûta', dates: '1304–1368', category: 'explorer', summary: 'Explorateur marocain, l\'un des plus grands voyageurs de l\'histoire.' },
];

export default function PersonnalitesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? samplePersons
    : samplePersons.filter((p) => p.category === activeCategory);

  return (
    <div className="section">
      <h1 className="page-title">Personnalités historiques</h1>
      <p className="page-subtitle">
        Philosophes, scientifiques, artistes, écrivains et musiciens qui ont marqué l&apos;histoire.
      </p>

      <div className="mt-8">
        <SearchBar placeholder="Rechercher une personnalité..." />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === cat.value
                ? 'bg-purple-600 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid-cards mt-8">
        {filtered.map((person) => (
          <Link key={person.slug} href={`/personnalites/${person.slug}`}>
            <Card className="h-full transition-transform hover:scale-[1.02]">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-lg font-bold text-purple-700">
                  {person.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">{person.name}</h3>
                  <p className="text-xs text-neutral-400">{person.dates}</p>
                </div>
              </div>
              <Badge variant="secondary">{person.category}</Badge>
              <p className="mt-3 text-sm text-neutral-600">{person.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
