'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { VideoPlayer } from '@/components/videos/VideoPlayer';

const categories = ['Toutes', 'Histoire', 'Géographie', 'Géologie', 'Sciences', 'Culture'];

const sampleVideos = [
  { id: 1, title: 'Les grandes explorations', category: 'Histoire', duration: '12:34', difficulty: 'Intermédiaire' },
  { id: 2, title: 'Le cycle de l\'eau', category: 'Géographie', duration: '8:15', difficulty: 'Débutant' },
  { id: 3, title: 'La formation des montagnes', category: 'Géologie', duration: '15:42', difficulty: 'Avancé' },
  { id: 4, title: 'La Grèce antique', category: 'Histoire', duration: '20:00', difficulty: 'Intermédiaire' },
  { id: 5, title: 'Les biomes terrestres', category: 'Sciences', duration: '11:28', difficulty: 'Débutant' },
  { id: 6, title: 'La Renaissance en Europe', category: 'Culture', duration: '18:30', difficulty: 'Intermédiaire' },
];

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState('Toutes');

  const filtered = activeCategory === 'Toutes'
    ? sampleVideos
    : sampleVideos.filter((v) => v.category === activeCategory);

  return (
    <div className="section">
      <h1 className="page-title">Vidéos éducatives</h1>
      <p className="page-subtitle">
        Apprenez visuellement grâce à des vidéos pédagogiques par thème et niveau.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === cat
                ? 'bg-orange-600 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid-cards mt-8">
        {filtered.map((video) => (
          <Card key={video.id}>
            <div className="mb-3 aspect-video rounded-lg bg-neutral-200">
              <div className="flex h-full items-center justify-center text-neutral-400">
                Aperçu vidéo
              </div>
            </div>
            <div className="mb-2 flex gap-2">
              <Badge variant="primary">{video.category}</Badge>
              <Badge variant="secondary">{video.difficulty}</Badge>
            </div>
            <h3 className="font-semibold text-neutral-900">{video.title}</h3>
            <p className="mt-1 text-sm text-neutral-500">Durée : {video.duration}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
