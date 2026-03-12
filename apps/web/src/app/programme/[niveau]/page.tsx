import Link from "next/link";
import { ArrowLeft, BookOpen, Globe, Scale, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { niveauLabel } from "@/lib/utils";

interface NiveauPageProps {
  params: Promise<{ niveau: string }>;
}

const placeholderChapters = [
  {
    id: "h1",
    matiere: "histoire" as const,
    titre: "Les d\u00e9buts de l\u2019humanit\u00e9",
    objectifs: [
      "Conna\u00eetre les grandes p\u00e9riodes de la Pr\u00e9histoire",
      "Comprendre le processus de s\u00e9dentarisation",
    ],
    motsCles: ["Pr\u00e9histoire", "N\u00e9olithique", "s\u00e9dentarisation"],
  },
  {
    id: "h2",
    matiere: "histoire" as const,
    titre: "R\u00e9cits fondateurs et citoyennet\u00e9 dans l\u2019Antiquit\u00e9",
    objectifs: [
      "Conna\u00eetre les mythes fondateurs des civilisations antiques",
      "Comprendre la naissance de la d\u00e9mocratie ath\u00e9nienne",
    ],
    motsCles: ["Ath\u00e8nes", "Rome", "d\u00e9mocratie", "mythologie"],
  },
  {
    id: "g1",
    matiere: "geographie" as const,
    titre: "Habiter une m\u00e9tropole",
    objectifs: [
      "Identifier les caract\u00e9ristiques d\u2019une m\u00e9tropole",
      "Comparer des m\u00e9tropoles \u00e0 travers le monde",
    ],
    motsCles: ["m\u00e9tropole", "urbanisation", "mobilit\u00e9"],
  },
  {
    id: "g2",
    matiere: "geographie" as const,
    titre: "Habiter un espace de faible densit\u00e9",
    objectifs: [
      "Comprendre les contraintes des espaces peu peupl\u00e9s",
      "Analyser les activit\u00e9s humaines dans ces espaces",
    ],
    motsCles: ["rural", "densit\u00e9", "agriculture"],
  },
  {
    id: "e1",
    matiere: "emc" as const,
    titre: "Le coll\u00e9gien et la citoyennet\u00e9",
    objectifs: [
      "Comprendre les droits et devoirs du citoyen",
      "Conna\u00eetre les valeurs de la R\u00e9publique",
    ],
    motsCles: ["citoyennet\u00e9", "R\u00e9publique", "la\u00efcit\u00e9"],
  },
];

const matiereIcons = {
  histoire: { icon: BookOpen, color: "text-accent-600", bg: "bg-accent-50 dark:bg-accent-900/20" },
  geographie: { icon: Globe, color: "text-primary-600", bg: "bg-primary-50 dark:bg-primary-900/20" },
  emc: { icon: Scale, color: "text-secondary-600", bg: "bg-secondary-50 dark:bg-secondary-900/20" },
};

export default async function NiveauPage({ params }: NiveauPageProps) {
  const { niveau } = await params;
  const label = niveauLabel(niveau);

  return (
    <div className="section">
      <Link
        href="/programme"
        className="mb-6 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au programme
      </Link>

      <h1 className="page-title">Programme de {label}</h1>
      <p className="page-subtitle">
        Chapitres d&apos;histoire, g\u00e9ographie et EMC pour le niveau {label}.
      </p>

      {/* Chapters */}
      <div className="mt-10 space-y-6">
        {placeholderChapters.map((chapter) => {
          const mInfo = matiereIcons[chapter.matiere];
          const Icon = mInfo.icon;
          return (
            <Card key={chapter.id}>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 rounded-lg p-2 ${mInfo.bg}`}>
                    <Icon className={`h-5 w-5 ${mInfo.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {chapter.titre}
                      </h3>
                      <Badge
                        variant={
                          chapter.matiere === "histoire"
                            ? "histoire"
                            : chapter.matiere === "geographie"
                              ? "geographie"
                              : "sciences"
                        }
                      >
                        {chapter.matiere === "emc"
                          ? "EMC"
                          : chapter.matiere.charAt(0).toUpperCase() +
                            chapter.matiere.slice(1)}
                      </Badge>
                    </div>

                    <div className="mb-3">
                      <h4 className="mb-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Objectifs :
                      </h4>
                      <ul className="space-y-1">
                        {chapter.objectifs.map((obj) => (
                          <li
                            key={obj}
                            className="flex items-start gap-2 text-sm text-neutral-500 dark:text-neutral-400"
                          >
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary-500" />
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {chapter.motsCles.map((mot) => (
                        <span
                          key={mot}
                          className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400"
                        >
                          {mot}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link href="/programme">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4" />
            Tous les niveaux
          </Button>
        </Link>
      </div>
    </div>
  );
}
