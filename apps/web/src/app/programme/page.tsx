import Link from 'next/link';
import { Card } from '@/components/ui/Card';

const levels = [
  { slug: '6eme', name: '6ème', cycle: 'Cycle 3', description: 'Entrée au collège, découverte des grandes civilisations et de la géographie mondiale.' },
  { slug: '5eme', name: '5ème', cycle: 'Cycle 4', description: 'L\'Islam médiéval, les grandes découvertes, développement durable.' },
  { slug: '4eme', name: '4ème', cycle: 'Cycle 4', description: 'L\'Europe et le monde du XVIIe au XIXe siècle, mondialisation.' },
  { slug: '3eme', name: '3ème', cycle: 'Cycle 4', description: 'Le monde depuis 1914, la France et l\'Union européenne.' },
  { slug: 'seconde', name: 'Seconde', cycle: 'Lycée', description: 'Grandes étapes de la formation du monde moderne.' },
  { slug: 'premiere', name: 'Première', cycle: 'Lycée', description: 'Nations, empires, nationalités, la France dans l\'Europe des nationalités.' },
  { slug: 'terminale', name: 'Terminale', cycle: 'Lycée', description: 'Les relations entre les puissances et les modèles politiques du monde.' },
];

export default function ProgrammePage() {
  return (
    <div className="section">
      <h1 className="page-title">Programme scolaire</h1>
      <p className="page-subtitle">
        Contenus pédagogiques alignés sur le programme officiel de l&apos;Éducation Nationale française,
        de la 6ème à la Terminale.
      </p>

      <div className="mt-10 space-y-6">
        {['Cycle 3', 'Cycle 4', 'Lycée'].map((cycle) => (
          <section key={cycle}>
            <h2 className="mb-4 text-xl font-bold text-neutral-900">{cycle}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {levels
                .filter((l) => l.cycle === cycle)
                .map((level) => (
                  <Link key={level.slug} href={`/programme/${level.slug}`}>
                    <Card className="h-full transition-transform hover:scale-[1.02]">
                      <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-700">
                        {level.name.replace('ème', 'e').replace('nde', '').replace('ère', '').replace('ale', '')}
                      </div>
                      <h3 className="mt-2 font-semibold text-neutral-900">{level.name}</h3>
                      <p className="mt-1 text-sm text-neutral-500">{level.description}</p>
                    </Card>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
