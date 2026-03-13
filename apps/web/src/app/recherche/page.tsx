"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search,
  Globe,
  BookOpen,
  Users,
  HelpCircle,
  Video,
  Clock,
  GraduationCap,
  Filter,
  X,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useSearch, useSearchFilters } from "@/hooks/useSearch";
import { useAppStore } from "@/store/app";

const typeIcons: Record<string, typeof Globe> = {
  country: Globe,
  person: Users,
  article: BookOpen,
  event: Clock,
  quiz: HelpCircle,
  video: Video,
  lesson: GraduationCap,
};

const typeLabels: Record<string, string> = {
  country: "Pays",
  person: "Personnalité",
  article: "Article",
  event: "Événement",
  quiz: "Quiz",
  video: "Vidéo",
  lesson: "Leçon",
};

const typeFilters = [
  { value: "all", label: "Tout", icon: Search },
  { value: "country", label: "Pays", icon: Globe },
  { value: "article", label: "Articles", icon: BookOpen },
  { value: "person", label: "Personnalités", icon: Users },
  { value: "event", label: "Événements", icon: Clock },
  { value: "quiz", label: "Quiz", icon: HelpCircle },
  { value: "video", label: "Vidéos", icon: Video },
  { value: "lesson", label: "Leçons", icon: GraduationCap },
];

export default function RecherchePage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const {
    query,
    setQuery,
    results,
    pagination,
    isLoading,
    hasResults,
    isActive,
    filters,
    updateFilter,
    clearFilters,
  } = useSearch();

  const { data: availableFilters } = useSearchFilters();
  const recherchesRecentes = useAppStore((s) => s.recherchesRecentes);
  const clearRecherches = useAppStore((s) => s.clearRecherches);

  useEffect(() => {
    if (initialQuery && !query) {
      setQuery(initialQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeType = (filters.type as string) ?? "all";
  const hasActiveFilters = filters.era || filters.category;

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-primary-100 p-2.5 dark:bg-primary-900/30">
          <Search className="h-6 w-6 text-primary-600 dark:text-primary-400" />
        </div>
        <div>
          <h1 className="page-title">Recherche globale</h1>
          <p className="page-subtitle">
            Trouvez un pays, un article, une personnalité, un événement ou un quiz.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <SearchBar
          expanded
          placeholder="Rechercher par mot-clé, pays, période, personnalité…"
          initialQuery={initialQuery}
          onSubmit={(q) => setQuery(q)}
        />
      </div>

      {/* Type filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        {typeFilters.map((f) => {
          const Icon = f.icon;
          return (
            <button
              key={f.value}
              onClick={() => updateFilter("type", f.value === "all" ? undefined : f.value)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                activeType === f.value
                  ? "bg-primary-600 text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Advanced filters */}
      {availableFilters && (
        <div className="mt-4">
          <details className="group">
            <summary className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
              <Filter className="h-4 w-4" />
              Filtres avancés
              {hasActiveFilters && (
                <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs text-white">
                  !
                </span>
              )}
            </summary>

            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Période historique
                </label>
                <select
                  value={filters.era ?? ""}
                  onChange={(e) => updateFilter("era", e.target.value || undefined)}
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
                >
                  <option value="">Toutes les périodes</option>
                  {availableFilters.eras.map((era) => (
                    <option key={era.value} value={era.value}>
                      {era.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Catégorie
                </label>
                <select
                  value={filters.category ?? ""}
                  onChange={(e) => updateFilter("category", e.target.value || undefined)}
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
                >
                  <option value="">Toutes les catégories</option>
                  {availableFilters.categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-3 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400"
              >
                <X className="h-3.5 w-3.5" />
                Réinitialiser les filtres
              </button>
            )}
          </details>
        </div>
      )}

      {/* Loading */}
      {isLoading && isActive && (
        <div className="mt-10 flex items-center justify-center gap-3 py-12">
          <Loader2 className="h-5 w-5 animate-spin text-primary-500" />
          <span className="text-sm text-neutral-500">Recherche en cours…</span>
        </div>
      )}

      {/* Results */}
      {!isLoading && isActive && (
        <div className="mt-8">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              {hasResults
                ? `${pagination?.total ?? results.length} résultat${(pagination?.total ?? results.length) > 1 ? "s" : ""}`
                : "Aucun résultat"}
            </h2>
          </div>

          {hasResults ? (
            <div className="space-y-3">
              {results.map((r) => {
                const Icon = typeIcons[r.type] ?? BookOpen;
                return (
                  <Link key={`${r.type}-${r.id}`} href={r.url}>
                    <Card hover className="group transition-all">
                      <CardContent>
                        <div className="flex items-start gap-4">
                          {r.image ? (
                            <img src={r.image} alt="" className="h-14 w-14 shrink-0 rounded-lg object-cover" />
                          ) : (
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-700">
                              <Icon className="h-6 w-6 text-neutral-400 dark:text-neutral-500" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="mb-1 flex items-center gap-2">
                              <Badge variant="default">
                                {typeLabels[r.type] ?? r.type}
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                              {r.title}
                            </h3>
                            {r.excerpt && (
                              <p className="mt-1 line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">
                                {r.excerpt}
                              </p>
                            )}
                          </div>
                          <ChevronRight className="h-5 w-5 shrink-0 text-neutral-300 transition-transform group-hover:translate-x-1 dark:text-neutral-600" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-12 text-center dark:border-neutral-700 dark:bg-neutral-800/50">
              <Search className="mx-auto mb-3 h-10 w-10 text-neutral-300 dark:text-neutral-600" />
              <p className="text-neutral-500 dark:text-neutral-400">
                Aucun résultat pour « {query} »
              </p>
              <p className="mt-1 text-sm text-neutral-400 dark:text-neutral-500">
                Essayez avec d&apos;autres mots-clés ou ajustez vos filtres.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Recent searches */}
      {!isActive && recherchesRecentes.length > 0 && (
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Recherches récentes
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
              <button
                key={q}
                onClick={() => setQuery(q)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-600 transition hover:border-primary-300 hover:text-primary-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                <Clock className="h-3 w-3" />
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Suggestions */}
      {!isActive && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Suggestions
          </h2>
          <div className="grid-cards mt-4">
            {[
              { type: "country", title: "France", excerpt: "République française, pays d'Europe occidentale.", url: "/pays/fra" },
              { type: "person", title: "Marie Curie", excerpt: "Physicienne et chimiste, double prix Nobel.", url: "/personnalites/marie-curie" },
              { type: "article", title: "La Révolution française", excerpt: "Les événements de 1789 à 1799.", url: "/encyclopedie/revolution-francaise" },
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
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                        {item.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
