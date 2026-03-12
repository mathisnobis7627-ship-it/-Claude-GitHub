"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Globe, BookOpen, Users, HelpCircle, Video } from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useAppStore } from "@/store/app";

const typeIcons: Record<string, typeof Globe> = {
  pays: Globe,
  article: BookOpen,
  personnalite: Users,
  quiz: HelpCircle,
  video: Video,
};

const typeLabels: Record<string, string> = {
  pays: "Pays",
  article: "Article",
  personnalite: "Personnalit\u00e9",
  quiz: "Quiz",
  video: "Vid\u00e9o",
};

export default function RecherchePage() {
  const [filter, setFilter] = useState<string>("all");
  const recherchesRecentes = useAppStore((s) => s.recherchesRecentes);
  const clearRecherches = useAppStore((s) => s.clearRecherches);

  const filters = [
    { value: "all", label: "Tout" },
    { value: "pays", label: "Pays" },
    { value: "article", label: "Articles" },
    { value: "personnalite", label: "Personnalit\u00e9s" },
    { value: "quiz", label: "Quiz" },
    { value: "video", label: "Vid\u00e9os" },
  ];

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-neutral-100 p-2 dark:bg-neutral-800">
          <Search className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
        </div>
        <div>
          <h1 className="page-title">Recherche</h1>
          <p className="page-subtitle">
            Trouvez rapidement un pays, un article, une personnalit\u00e9 ou un quiz.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <SearchBar expanded placeholder="Entrez votre recherche\u2026" />
      </div>

      {/* Type filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === f.value
                ? "bg-primary-600 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Recent searches */}
      {recherchesRecentes.length > 0 && (
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Recherches r\u00e9centes
            </h2>
            <button
              onClick={clearRecherches}
              className="text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              Effacer tout
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {recherchesRecentes.map((q) => (
              <span
                key={q}
                className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Suggestions */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
          Suggestions
        </h2>
        <div className="grid-cards mt-4">
          {[
            {
              type: "pays",
              titre: "France",
              extrait: "R\u00e9publique fran\u00e7aise, pays d\u2019Europe occidentale.",
              url: "/pays/fra",
            },
            {
              type: "personnalite",
              titre: "Marie Curie",
              extrait: "Physicienne et chimiste, double prix Nobel.",
              url: "/personnalites/marie-curie",
            },
            {
              type: "article",
              titre: "La R\u00e9volution fran\u00e7aise",
              extrait: "Les \u00e9v\u00e9nements de 1789 \u00e0 1799.",
              url: "/encyclopedie/revolution-francaise",
            },
            {
              type: "quiz",
              titre: "Les capitales du monde",
              extrait: "Testez vos connaissances g\u00e9ographiques.",
              url: "/quiz/q1",
            },
          ].map((item) => {
            const Icon = typeIcons[item.type] ?? BookOpen;
            return (
              <Link key={item.url} href={item.url}>
                <Card hover className="h-full">
                  <CardContent>
                    <div className="mb-2 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-neutral-400" />
                      <Badge variant="default">
                        {typeLabels[item.type] ?? item.type}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {item.titre}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {item.extrait}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
