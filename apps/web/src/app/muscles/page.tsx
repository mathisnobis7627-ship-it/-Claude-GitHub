"use client";

import { useMemo, useState } from "react";
import {
  Search,
  RotateCw,
  X,
  Dumbbell,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { HumanBodyDiagram } from "@/components/muscles/HumanBodyDiagram";
import {
  MUSCLES,
  MUSCLES_BY_ID,
  MUSCLES_BY_VIEW,
  MUSCLE_GROUPS,
  MUSCLE_GROUPS_BY_ID,
  searchMuscles,
  type Muscle,
  type MuscleGroupId,
  type MuscleView,
} from "@/lib/muscles-data";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function MusclesPage() {
  const [view, setView] = useState<MuscleView>("front");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<MuscleGroupId | null>(null);
  const [query, setQuery] = useState("");

  const matched = useMemo(() => {
    if (!query.trim()) return null;
    return new Set(searchMuscles(query).map((m) => m.id));
  }, [query]);

  const selectedMuscle = selectedId ? MUSCLES_BY_ID[selectedId] : null;

  const visibleMuscles = useMemo(() => {
    let list = MUSCLES_BY_VIEW[view];
    if (activeGroup) list = list.filter((m) => m.group === activeGroup);
    if (matched) list = list.filter((m) => matched.has(m.id));
    return list;
  }, [view, activeGroup, matched]);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    // Si le muscle sélectionné se trouve sur l'autre vue, basculer
    const m = MUSCLES_BY_ID[id];
    if (m && m.view !== view) setView(m.view);
  };

  const totalByGroup = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const m of MUSCLES) counts[m.group] = (counts[m.group] ?? 0) + 1;
    return counts;
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-rose-700 to-rose-900">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="muscle-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#muscle-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              <Dumbbell className="h-3.5 w-3.5" />
              Anatomie interactive
            </div>
            <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Les muscles du corps humain
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-rose-100">
              Explorez en profondeur les principaux muscles squelettiques :
              cliquez sur le schéma pour découvrir leur nom latin, leur origine,
              leur insertion et leur fonction. Idéal pour les SVT, l&apos;EPS
              et les sciences médicales.
            </p>
          </div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-16 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Recherche */}
          <div className="relative flex-1 lg:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un muscle (ex. biceps, fessier…)"
              className="h-10 w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-9 text-sm text-neutral-700 placeholder:text-neutral-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            />
            {query ? (
              <button
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-700"
                aria-label="Effacer la recherche"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          {/* Toggle vue */}
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-lg border border-neutral-200 p-1 dark:border-neutral-700">
              {(["front", "back"] as MuscleView[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                    view === v
                      ? "bg-rose-600 text-white shadow-sm"
                      : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
                  )}
                >
                  {v === "front" ? "Vue de face" : "Vue de dos"}
                </button>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setView(view === "front" ? "back" : "front")}
              aria-label="Pivoter le corps"
              title="Pivoter le corps"
            >
              <RotateCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Filtres groupes */}
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <GroupChip
            label={`Tous (${MUSCLES.length})`}
            active={activeGroup === null}
            onClick={() => setActiveGroup(null)}
          />
          {MUSCLE_GROUPS.map((g) => (
            <GroupChip
              key={g.id}
              label={`${g.label} (${totalByGroup[g.id] ?? 0})`}
              color={g.fill}
              activeColor={g.active}
              active={activeGroup === g.id}
              onClick={() =>
                setActiveGroup(activeGroup === g.id ? null : g.id)
              }
            />
          ))}
        </div>
      </section>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(320px,420px)]">
          {/* Diagramme */}
          <div>
            <Card className="bg-gradient-to-b from-rose-50/60 to-white dark:from-rose-950/30 dark:to-neutral-900">
              <CardContent className="p-2 sm:p-4">
                <HumanBodyDiagram
                  view={view}
                  selectedId={selectedId}
                  onSelect={handleSelect}
                  highlightGroup={activeGroup}
                  matchedIds={matched ?? undefined}
                />
              </CardContent>
            </Card>

            {/* Indicateurs résultats recherche */}
            {query && matched ? (
              <p className="mt-3 text-center text-sm text-neutral-500 dark:text-neutral-400">
                {matched.size} muscle{matched.size > 1 ? "s" : ""} trouvé
                {matched.size > 1 ? "s" : ""} pour «&nbsp;
                <span className="font-medium text-neutral-700 dark:text-neutral-200">
                  {query}
                </span>
                &nbsp;»
              </p>
            ) : null}
          </div>

          {/* Panneau de droite */}
          <div className="space-y-4">
            {selectedMuscle ? (
              <MuscleDetailsPanel
                muscle={selectedMuscle}
                onClose={() => setSelectedId(null)}
              />
            ) : (
              <EmptyDetailsPanel />
            )}

            {/* Liste */}
            <Card>
              <CardContent>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                    {activeGroup
                      ? MUSCLE_GROUPS_BY_ID[activeGroup].label
                      : view === "front"
                        ? "Muscles visibles de face"
                        : "Muscles visibles de dos"}
                  </h3>
                  <span className="text-xs text-neutral-400">
                    {visibleMuscles.length} muscle
                    {visibleMuscles.length > 1 ? "s" : ""}
                  </span>
                </div>
                <ul className="space-y-1 max-h-[420px] overflow-y-auto pr-1">
                  {visibleMuscles.length === 0 ? (
                    <li className="rounded-lg bg-neutral-50 p-3 text-center text-sm text-neutral-500 dark:bg-neutral-800/50">
                      Aucun muscle ne correspond à votre filtre.
                    </li>
                  ) : (
                    visibleMuscles.map((m) => {
                      const g = MUSCLE_GROUPS_BY_ID[m.group];
                      const active = selectedId === m.id;
                      return (
                        <li key={m.id}>
                          <button
                            onClick={() => handleSelect(m.id)}
                            className={cn(
                              "group flex w-full items-center gap-3 rounded-lg border p-2 text-left text-sm transition-colors",
                              active
                                ? "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/30"
                                : "border-transparent hover:border-neutral-200 hover:bg-neutral-50 dark:hover:border-neutral-700 dark:hover:bg-neutral-800",
                            )}
                          >
                            <span
                              className="h-2.5 w-2.5 shrink-0 rounded-full"
                              style={{ backgroundColor: g.fill }}
                            />
                            <span className="flex-1">
                              <span
                                className={cn(
                                  "block font-medium",
                                  active
                                    ? "text-rose-700 dark:text-rose-300"
                                    : "text-neutral-700 dark:text-neutral-200",
                                )}
                              >
                                {m.name}
                              </span>
                              <span className="block text-xs italic text-neutral-400">
                                {m.latinName}
                              </span>
                            </span>
                            <ChevronRight
                              className={cn(
                                "h-4 w-4 shrink-0 transition-transform",
                                active
                                  ? "translate-x-0 text-rose-500"
                                  : "-translate-x-1 text-neutral-300 group-hover:translate-x-0 group-hover:text-neutral-500",
                              )}
                            />
                          </button>
                        </li>
                      );
                    })
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Légende des groupes musculaires */}
      <section className="mx-auto max-w-7xl px-4 pb-12">
        <Card>
          <CardContent>
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-rose-500" />
              <h2 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
                Les grands groupes musculaires
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {MUSCLE_GROUPS.map((g) => (
                <button
                  key={g.id}
                  onClick={() =>
                    setActiveGroup(activeGroup === g.id ? null : g.id)
                  }
                  className={cn(
                    "flex flex-col items-start gap-1 rounded-lg border p-3 text-left transition-colors",
                    activeGroup === g.id
                      ? "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20"
                      : "border-neutral-200 hover:border-neutral-300 dark:border-neutral-700 dark:hover:border-neutral-600",
                  )}
                >
                  <span
                    className="h-3 w-8 rounded-full"
                    style={{ backgroundColor: g.fill }}
                  />
                  <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
                    {g.label}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {totalByGroup[g.id] ?? 0} muscle
                    {(totalByGroup[g.id] ?? 0) > 1 ? "s" : ""}
                  </span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Sous-composants                                                     */
/* ------------------------------------------------------------------ */

function GroupChip({
  label,
  active,
  onClick,
  color,
  activeColor,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  color?: string;
  activeColor?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-transparent text-white shadow-sm"
          : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700",
      )}
      style={
        active
          ? {
              backgroundColor: activeColor ?? "#e11d48",
            }
          : undefined
      }
    >
      {color ? (
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: active ? "white" : color }}
        />
      ) : null}
      {label}
    </button>
  );
}

function EmptyDetailsPanel() {
  return (
    <Card className="border-dashed bg-neutral-50/50 dark:bg-neutral-800/30">
      <CardContent>
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="rounded-full bg-rose-100 p-3 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300">
            <Dumbbell className="h-6 w-6" />
          </div>
          <h3 className="mt-3 text-base font-semibold text-neutral-800 dark:text-neutral-100">
            Sélectionnez un muscle
          </h3>
          <p className="mt-1 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
            Cliquez sur le schéma ou choisissez un muscle dans la liste pour
            afficher sa fiche détaillée.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function MuscleDetailsPanel({
  muscle,
  onClose,
}: {
  muscle: Muscle;
  onClose: () => void;
}) {
  const group = MUSCLE_GROUPS_BY_ID[muscle.group];
  return (
    <Card className="overflow-hidden">
      <div
        className="h-2 w-full"
        style={{ backgroundColor: group.active }}
      />
      <CardContent>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <span
              className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold"
              style={{
                backgroundColor: group.fill,
                color: group.textColor,
              }}
            >
              {group.label}
            </span>
            <h2 className="mt-2 text-xl font-bold text-neutral-900 dark:text-white">
              {muscle.name}
            </h2>
            <p className="text-sm italic text-neutral-500 dark:text-neutral-400">
              {muscle.latinName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-700"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {muscle.description}
        </p>

        <dl className="mt-4 space-y-3 border-t border-neutral-100 pt-4 dark:border-neutral-700">
          <DetailRow label="Origine" value={muscle.origin} />
          <DetailRow label="Insertion" value={muscle.insertion} />
          <DetailRow label="Fonction" value={muscle.function} />
          <DetailRow
            label="Vue"
            value={muscle.view === "front" ? "De face" : "De dos"}
          />
        </dl>
      </CardContent>
    </Card>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
        {label}
      </dt>
      <dd className="mt-0.5 text-sm text-neutral-700 dark:text-neutral-200">
        {value}
      </dd>
    </div>
  );
}
