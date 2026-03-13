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

// ── Constants ──────────────────────────────────────────────────────────────

const typeIcons: Record<string, typeof Globe> = {
  pays: Globe,
  personnalite: Users,
  article: BookOpen,
  evenement: Clock,
  quiz: HelpCircle,
  video: Video,
  lecon: GraduationCap,
};

const typeLabels: Record<string, string> = {
  pays: "Pays",
  personnalite: "Personnalité",
  article: "Article",
  evenement: "Événement",
  quiz: "Quiz",
  video: "Vidéo",
  lecon: "Leçon",
};

const typeFilters = [
  { value: "all", label: "Tout", icon: Search },
  { value: "countries", label: "Pays", icon: Globe },
  { value: "articles", label: "Articles", icon: BookOpen },
  { value: "persons", label: "Personnalités", icon: Users },
  { value: "events", label: "Événements", icon: Clock },
  { value: "quizzes", label: "Quiz", icon: HelpCircle },
  { value: "videos", label: "Vidéos", icon: Video },
  { value: "lessons", label: "Leçons", icon: GraduationCap },
];

/** Map backend entity type to frontend display key */
function mapType(backendType: string): string {
  const mapping: Record<string, string> = {
    country: "pays",
    person: "personnalite",
    article: "article",
    event: "evenement",
    lesson: "lecon",
    quiz: "quiz",
    video: "video",
  };
  return mapping[backendType] ?? backendType;
}

// ── Page ───────────────────────────────────────────────────────────────────

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

  // Sync URL query param
  useEffect(() => {
    if (initialQuery && !query) {
      setQuery(initialQuery);
    }
    // Only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeType = (filters.type as string) ?? "all";
  const hasActiveFilters =
    filters.era || filters.country || filters.period || filters.personality || filters.category;

  return (
    <div className="section">
      {/* Header */}
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

      {/* Search bar */}
      <div className="mt-8">
        <SearchBar
          expanded
          placeholder="Rechercher par mot-clé, pays, période, personnalité\u2026"
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

            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {/* Era filter */}
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

              {/* Continent filter */}
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Continent
                </label>
                <select
                  value={filters.country ?? ""}
                  onChange={(e) => updateFilter("country", e.target.value || undefined)}
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
                >
                  <option value="">Tous les continents</option>
                  {availableFilters.continents.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category filter */}
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

              {/* Personality search */}
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Personnalité
                </label>
                <input
                  type="text"
                  value={filters.personality ?? ""}
                  onChange={(e) => updateFilter("personality", e.target.value || undefined)}
                  placeholder="Nom d'une personnalité\u2026"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
                />
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

      {/* Loading state */}
      {isLoading && isActive && (
        <div className="mt-10 flex items-center justify-center gap-3 py-12">
          <Loader2 className="h-5 w-5 animate-spin text-primary-500" />
          <span className="text-sm text-neutral-500">Recherche en cours\u2026</span>
        </div>
      )}

      {/* Results */}
      {!isLoading && isActive && (
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              {hasResults
                ? `${pagination?.total ?? results.length} résultat${(pagination?.total ?? results.length) > 1 ? "s" : ""}`
                : "Aucun résultat"}
            </h2>
          </div>

          {hasResults ? (
            <div className="space-y-3">
              {results.map((r) => {
                const frontType = mapType(r.type);
                const Icon = typeIcons[frontType] ?? BookOpen;
                return (
                  <Link key={`${r.type}-${r.id}`} href={r.url}>
                    <Card hover className="group transition-all">
                      <CardContent>
                        <div className="flex items-start gap-4">
                          {r.image ? (
                            <img
                              src={r.image}
                              alt=""
                              className="h-14 w-14 shrink-0 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-700">
                              <Icon className="h-6 w-6 text-neutral-400 dark:text-neutral-500" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="mb-1 flex items-center gap-2">
                              <Badge variant="default">
                                {typeLabels[frontType] ?? frontType}
                              </Badge>
                              {r.meta?.era && (
                                <Badge variant="histoire">
                                  {String(r.meta.era)}
                                </Badge>
                              )}
                              {r.meta?.category && (
                                <Badge variant={(r.meta.category as string) in typeLabels ? "default" : ((r.meta.category as string) as never)}>
                                  {String(r.meta.category)}
                                </Badge>
                              )}
                            </div>
                            <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                              {r.titre ?? r.title}
                            </h3>
                            {r.extrait && (
                              <p className="mt-1 line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">
                                {r.extrait ?? r.excerpt}
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
                Essayez avec d'autres mots-clés ou ajustez vos filtres.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Recent searches (shown when no active search) */}
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
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-600 transition hover:border-primary-300 hover:text-primary-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-primary-700 dark:hover:text-primary-400"
              >
                <Clock className="h-3 w-3" />
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Suggestions (shown when no active search) */}
      {!isActive && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Suggestions
          </h2>
          <div className="grid-cards mt-4">
            {[
              {
                type: "pays",
                titre: "France",
                extrait: "République française, pays d'Europe occidentale.",
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
                titre: "La Révolution française",
                extrait: "Les événements de 1789 à 1799.",
                url: "/encyclopedie/revolution-francaise",
              },
              {
                type: "evenement",
                titre: "Prise de la Bastille",
                extrait: "14 juillet 1789 — événement fondateur.",
                url: "/chronologie#event-bastille",
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
      )}
    </div>
  );
}
