"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Filter, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/ui/SearchBar";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { categorieLabel } from "@/lib/utils";
import { getArticles } from "@/lib/api";
import type { ArticleCategory } from "@/types";

const categories: { value: ArticleCategory | "all"; label: string }[] = [
  { value: "all", label: "Tout" },
  { value: "geography", label: "Géographie" },
  { value: "history", label: "Histoire" },
  { value: "geology", label: "Géologie" },
  { value: "science", label: "Sciences" },
  { value: "culture", label: "Culture" },
  { value: "war", label: "Guerres & Conflits" },
  { value: "politics", label: "Politique" },
];

export default function EncyclopediePage() {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | "all">("all");
  const [page, setPage] = useState(1);

  const category = activeCategory === "all" ? undefined : activeCategory;
  const { data, isLoading } = useQuery({
    queryKey: ["articles", page, category],
    queryFn: () => getArticles(page, 20, category),
  });

  const articles = data?.data ?? [];

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary-50 p-2 dark:bg-primary-900/20">
          <BookOpen className="h-6 w-6 text-primary-600" />
        </div>
        <div>
          <h1 className="page-title">Encyclopédie</h1>
          <p className="page-subtitle">
            Explorez des articles détaillés sur la géographie, l&apos;histoire, la géologie et bien plus.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <SearchBar placeholder="Rechercher un article…" expanded navigateOnSubmit />
      </div>

      {/* Category filters */}
      <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="h-4 w-4 shrink-0 text-neutral-400" />
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => { setActiveCategory(cat.value); setPage(1); }}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === cat.value
                ? "bg-primary-600 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="mt-16 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
        </div>
      ) : (
        <>
          <div className="grid-cards mt-8">
            {articles.map((article) => (
              <Link key={article.id} href={`/encyclopedie/${article.slug}`}>
                <Card hover className="h-full">
                  <CardContent>
                    <div className="mb-3 flex gap-2">
                      <Badge variant={(article.category as "histoire" | "geographie") || "default"}>
                        {categorieLabel(article.category)}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {article.title}
                    </h3>
                    {article.summary && (
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-3">
                        {article.summary}
                      </p>
                    )}
                    {article.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {data?.pagination && data.pagination.totalPages > 1 && (
            <div className="mt-10 flex justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
              >
                Précédent
              </Button>
              <span className="px-4 py-2 text-sm text-neutral-500">
                Page {page} / {data.pagination.totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setPage((p) => p + 1)}
                disabled={page >= data.pagination.totalPages}
              >
                Suivant
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
