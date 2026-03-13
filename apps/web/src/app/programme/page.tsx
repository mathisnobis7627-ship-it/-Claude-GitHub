"use client";

import Link from "next/link";
import { GraduationCap, BookOpen, Globe, Scale, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { niveauLabel } from "@/lib/utils";
import { getCurriculumLevels } from "@/lib/api";

const cycleLabels: Record<string, string> = {
  cycle3: "Collège – Cycle 3",
  cycle4: "Collège – Cycle 4",
  lycee: "Lycée",
};

const matieres = [
  { icon: BookOpen, label: "Histoire", color: "text-accent-600", bg: "bg-accent-50 dark:bg-accent-900/20" },
  { icon: Globe, label: "Géographie", color: "text-primary-600", bg: "bg-primary-50 dark:bg-primary-900/20" },
  { icon: Scale, label: "EMC", color: "text-secondary-600", bg: "bg-secondary-50 dark:bg-secondary-900/20" },
];

export default function ProgrammePage() {
  const { data: levels = [], isLoading } = useQuery({
    queryKey: ["curriculum-levels"],
    queryFn: getCurriculumLevels,
  });

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-indigo-50 p-2 dark:bg-indigo-900/20">
          <GraduationCap className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="page-title">Programme scolaire</h1>
          <p className="page-subtitle">
            Contenus alignés sur le programme officiel de l&apos;Éducation
            nationale, de la 6ème à la Terminale.
          </p>
        </div>
      </div>

      {/* Matières */}
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

      {isLoading ? (
        <div className="mt-16 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {levels.map((level) => (
            <Link key={level.id} href={`/programme/${level.slug}`}>
              <Card hover className="h-full">
                <CardContent>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {niveauLabel(level.slug)}
                    </h3>
                    <Badge variant="default">{cycleLabels[level.cycle] ?? level.cycle}</Badge>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    Programme d&apos;histoire et géographie pour le niveau {niveauLabel(level.slug)}.
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
