"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Globe, Scale, CheckCircle, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { niveauLabel } from "@/lib/utils";
import { getChaptersByLevel } from "@/lib/api";

interface NiveauPageProps {
  params: Promise<{ niveau: string }>;
}

const subjectIcons: Record<string, { icon: typeof BookOpen; color: string; bg: string }> = {
  histoire: { icon: BookOpen, color: "text-accent-600", bg: "bg-accent-50 dark:bg-accent-900/20" },
  geographie: { icon: Globe, color: "text-primary-600", bg: "bg-primary-50 dark:bg-primary-900/20" },
  emc: { icon: Scale, color: "text-secondary-600", bg: "bg-secondary-50 dark:bg-secondary-900/20" },
};

export default function NiveauPage({ params }: NiveauPageProps) {
  const { niveau } = use(params);
  const label = niveauLabel(niveau);

  const { data: chapters = [], isLoading } = useQuery({
    queryKey: ["curriculum-chapters", niveau],
    queryFn: () => getChaptersByLevel(niveau),
  });

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
        Chapitres d&apos;histoire, géographie et EMC pour le niveau {label}.
      </p>

      {isLoading ? (
        <div className="mt-16 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
        </div>
      ) : (
        <div className="mt-10 space-y-6">
          {chapters.map((chapter) => {
            const subjectSlug = chapter.subject_slug ?? "histoire";
            const sInfo = subjectIcons[subjectSlug] ?? subjectIcons.histoire;
            const Icon = sInfo.icon;
            return (
              <Card key={chapter.id}>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 rounded-lg p-2 ${sInfo.bg}`}>
                      <Icon className={`h-5 w-5 ${sInfo.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                          {chapter.title}
                        </h3>
                        <Badge
                          variant={
                            subjectSlug === "histoire"
                              ? "histoire"
                              : subjectSlug === "geographie"
                                ? "geographie"
                                : "sciences"
                          }
                        >
                          {chapter.subject_name ?? subjectSlug}
                        </Badge>
                      </div>

                      {chapter.description && (
                        <p className="mb-3 text-sm text-neutral-500 dark:text-neutral-400">
                          {chapter.description}
                        </p>
                      )}

                      {chapter.objectives.length > 0 && (
                        <div className="mb-3">
                          <h4 className="mb-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Objectifs :
                          </h4>
                          <ul className="space-y-1">
                            {chapter.objectives.map((obj) => (
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
                      )}

                      {chapter.key_concepts.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {chapter.key_concepts.map((concept) => (
                            <span
                              key={concept}
                              className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400"
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

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
