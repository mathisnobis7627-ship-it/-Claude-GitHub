import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface NiveauPageProps {
  params: Promise<{ niveau: string }>;
}

const subjects = [
  { name: 'Histoire', icon: '📜', chapters: ['Chapitre 1', 'Chapitre 2', 'Chapitre 3'] },
  { name: 'Géographie', icon: '🌍', chapters: ['Chapitre 1', 'Chapitre 2', 'Chapitre 3'] },
  { name: 'SVT / Géologie', icon: '🪨', chapters: ['Chapitre 1', 'Chapitre 2'] },
];

export default async function NiveauDetailPage({ params }: NiveauPageProps) {
  const { niveau } = await params;
  const niveauLabel = niveau.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="section">
      <Badge variant="primary">Programme scolaire</Badge>
      <h1 className="page-title mt-2 capitalize">{niveauLabel}</h1>
      <p className="page-subtitle">
        Matières et chapitres du programme officiel.
      </p>

      <div className="mt-8 space-y-8">
        {subjects.map((subject) => (
          <Card key={subject.name}>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl">{subject.icon}</span>
              <h2 className="text-xl font-semibold text-neutral-900">{subject.name}</h2>
            </div>
            <div className="space-y-3">
              {subject.chapters.map((chapter, i) => (
                <div
                  key={chapter}
                  className="flex items-center justify-between rounded-lg border border-neutral-100 p-4 transition hover:bg-neutral-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                      {i + 1}
                    </span>
                    <span className="font-medium text-neutral-800">{chapter}</span>
                  </div>
                  <Badge variant="secondary">À explorer</Badge>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
