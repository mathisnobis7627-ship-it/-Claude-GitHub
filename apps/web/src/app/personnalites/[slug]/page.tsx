import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface PersonPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PersonDetailPage({ params }: PersonPageProps) {
  const { slug } = await params;

  return (
    <div className="section">
      <div className="mb-8">
        <Badge variant="secondary">Personnalité</Badge>
        <h1 className="page-title mt-2 capitalize">{slug.replace(/-/g, ' ')}</h1>
        <p className="page-subtitle">Biographie complète et contributions majeures.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Biographie */}
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <h2 className="mb-4 text-xl font-semibold">Biographie</h2>
            <p className="text-sm leading-relaxed text-neutral-600">
              Biographie détaillée de cette personnalité historique, couvrant sa vie,
              ses accomplissements et son impact sur le monde.
            </p>
          </Card>
          <Card>
            <h2 className="mb-4 text-xl font-semibold">Contributions majeures</h2>
            <ul className="space-y-3">
              <li className="rounded-lg border border-neutral-100 p-3">
                <span className="font-medium text-neutral-900">Contribution 1</span>
                <p className="mt-1 text-sm text-neutral-500">Description de la contribution.</p>
              </li>
            </ul>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <h2 className="mb-4 text-xl font-semibold">Informations</h2>
            <dl className="space-y-3">
              {[
                { label: 'Naissance', value: '—' },
                { label: 'Décès', value: '—' },
                { label: 'Nationalité', value: '—' },
                { label: 'Catégorie', value: '—' },
                { label: 'Époque', value: '—' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between border-b border-neutral-100 pb-2">
                  <dt className="text-sm text-neutral-500">{item.label}</dt>
                  <dd className="text-sm font-medium text-neutral-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Card>
          <Card>
            <h2 className="mb-4 text-xl font-semibold">Citations</h2>
            <blockquote className="border-l-4 border-purple-300 pl-4 italic text-neutral-600">
              &laquo; Citation célèbre de cette personnalité. &raquo;
            </blockquote>
          </Card>
        </div>
      </div>
    </div>
  );
}
