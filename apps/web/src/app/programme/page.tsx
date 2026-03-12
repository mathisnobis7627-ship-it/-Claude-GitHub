import Link from "next/link";
import { GraduationCap, BookOpen, Globe, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { niveauLabel } from "@/lib/utils";
import type { NiveauScolaire } from "@/types";

const niveaux: {
  niveau: NiveauScolaire;
  cycle: string;
  description: string;
  chapitres: number;
}[] = [
  {
    niveau: "6eme",
    cycle: "Coll\u00e8ge \u2013 Cycle 3",
    description:
      "D\u00e9couverte du monde antique, initiation \u00e0 la g\u00e9ographie des continents et premiers rep\u00e8res historiques.",
    chapitres: 12,
  },
  {
    niveau: "5eme",
    cycle: "Coll\u00e8ge \u2013 Cycle 4",
    description:
      "Le Moyen \u00c2ge, les d\u00e9buts de l\u2019Islam, la d\u00e9mographie et le d\u00e9veloppement durable.",
    chapitres: 14,
  },
  {
    niveau: "4eme",
    cycle: "Coll\u00e8ge \u2013 Cycle 4",
    description:
      "Les Lumi\u00e8res, la R\u00e9volution fran\u00e7aise, l\u2019industrialisation et la mondialisation.",
    chapitres: 14,
  },
  {
    niveau: "3eme",
    cycle: "Coll\u00e8ge \u2013 Cycle 4",
    description:
      "Les deux guerres mondiales, la d\u00e9colonisation, la Ve R\u00e9publique et la g\u00e9opolitique actuelle.",
    chapitres: 16,
  },
  {
    niveau: "seconde",
    cycle: "Lyc\u00e9e",
    description:
      "Grandes \u00e9tapes de la formation du monde moderne, soci\u00e9t\u00e9s et environnement.",
    chapitres: 12,
  },
  {
    niveau: "premiere",
    cycle: "Lyc\u00e9e",
    description:
      "Les nations, l\u2019industrialisation, la R\u00e9publique fran\u00e7aise et la Premi\u00e8re Guerre mondiale.",
    chapitres: 14,
  },
  {
    niveau: "terminale",
    cycle: "Lyc\u00e9e",
    description:
      "Les m\u00e9moires de la Seconde Guerre mondiale, la guerre froide, la gouvernance mondiale.",
    chapitres: 12,
  },
];

const matieres = [
  { icon: BookOpen, label: "Histoire", color: "text-accent-600", bg: "bg-accent-50 dark:bg-accent-900/20" },
  { icon: Globe, label: "G\u00e9ographie", color: "text-primary-600", bg: "bg-primary-50 dark:bg-primary-900/20" },
  { icon: Scale, label: "EMC", color: "text-secondary-600", bg: "bg-secondary-50 dark:bg-secondary-900/20" },
];

export default function ProgrammePage() {
  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-indigo-50 p-2 dark:bg-indigo-900/20">
          <GraduationCap className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="page-title">Programme scolaire</h1>
          <p className="page-subtitle">
            Contenus align\u00e9s sur le programme officiel de l\u2019\u00c9ducation
            nationale, de la 6\u00e8me \u00e0 la Terminale.
          </p>
        </div>
      </div>

      {/* Mati\u00e8res */}
      <div className="mt-8 flex gap-4">
        {matieres.map((m) => (
          <div
            key={m.label}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 ${m.bg}`}
          >
            <m.icon className={`h-5 w-5 ${m.color}`} />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* Niveaux grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {niveaux.map((n) => (
          <Link key={n.niveau} href={`/programme/${n.niveau}`}>
            <Card hover className="h-full">
              <CardContent>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {niveauLabel(n.niveau)}
                  </h3>
                  <Badge variant="default">{n.cycle}</Badge>
                </div>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {n.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs text-neutral-400">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>{n.chapitres} chapitres</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
