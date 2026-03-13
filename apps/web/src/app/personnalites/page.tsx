"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Filter, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/ui/SearchBar";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getPersons } from "@/lib/api";

const categories = [
  { value: "all", label: "Tous" },
  { value: "scientist", label: "Sciences" },
  { value: "politician", label: "Politique" },
  { value: "artist", label: "Arts" },
  { value: "writer", label: "Littérature" },
  { value: "philosopher", label: "Philosophie" },
  { value: "explorer", label: "Exploration" },
  { value: "musician", label: "Musique" },
  { value: "inventor", label: "Inventeurs" },
];

export default function PersonnalitesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [page, setPage] = useState(1);

  const category = activeCategory === "all" ? undefined : activeCategory;
  const { data, isLoading } = useQuery({
    queryKey: ["persons", page, category],
    queryFn: () => getPersons(page, 20, category),
  });

  const persons = data?.data ?? [];

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-accent-50 p-2 dark:bg-accent-900/20">
          <Users className="h-6 w-6 text-accent-600" />
        </div>
        <div>
          <h1 className="page-title">Personnalités historiques</h1>
          <p className="page-subtitle">
            Découvrez les grandes figures qui ont façonné le monde.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <SearchBar placeholder="Rechercher une personnalité…" expanded navigateOnSubmit />
      </div>

      <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="h-4 w-4 shrink-0 text-neutral-400" />
        {categories.map((c) => (
          <button
            key={c.value}
            onClick={() => { setActiveCategory(c.value); setPage(1); }}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === c.value
                ? "bg-accent-600 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            {c.label}
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
            {persons.map((person) => (
              <Link key={person.id} href={`/personnalites/${person.slug}`}>
                <Card hover className="h-full">
                  <CardContent>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-lg font-bold text-accent-700 dark:bg-accent-900/30 dark:text-accent-400">
                        {(person.first_name?.[0] ?? "") + (person.last_name?.[0] ?? "")}
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white">
                          {person.full_name}
                        </h3>
                        <p className="text-xs text-neutral-400">
                          {person.birth_date ?? ""}{person.death_date ? ` – ${person.death_date}` : ""}
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 flex gap-2">
                      {person.nationality && (
                        <Badge variant="default">{person.nationality}</Badge>
                      )}
                      <Badge variant="sciences">{person.category}</Badge>
                    </div>
                    {person.summary && (
                      <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-3">
                        {person.summary}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {data?.pagination && data.pagination.totalPages > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="rounded-lg border px-4 py-2 text-sm disabled:opacity-50"
              >
                Précédent
              </button>
              <span className="px-4 py-2 text-sm text-neutral-500">
                Page {page} / {data.pagination.totalPages}
              </span>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={page >= data.pagination.totalPages}
                className="rounded-lg border px-4 py-2 text-sm disabled:opacity-50"
              >
                Suivant
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
