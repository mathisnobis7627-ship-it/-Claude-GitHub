"use client";

import { useState } from "react";
import { Clock, Filter, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { TimelineView } from "@/components/chronologie/TimelineView";
import { getTimeline } from "@/lib/api";

export default function ChronologiePage() {
  const [activePeriod, setActivePeriod] = useState("all");

  const { data: periods = [], isLoading } = useQuery({
    queryKey: ["timeline"],
    queryFn: getTimeline,
  });

  const periodFilters = [
    { value: "all", label: "Toutes les périodes" },
    ...periods.map((p) => ({ value: p.id, label: p.name })),
  ];

  const filtered =
    activePeriod === "all"
      ? periods
      : periods.filter((p) => p.id === activePeriod);

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-purple-50 p-2 dark:bg-purple-900/20">
          <Clock className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h1 className="page-title">Chronologie</h1>
          <p className="page-subtitle">
            Parcourez l&apos;histoire à travers une frise chronologique
            interactive, de l&apos;Antiquité à nos jours.
          </p>
        </div>
      </div>

      {/* Period filters */}
      {periods.length > 0 && (
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
          <Filter className="h-4 w-4 shrink-0 text-neutral-400" />
          {periodFilters.map((p) => (
            <button
              key={p.value}
              onClick={() => setActivePeriod(p.value)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                activePeriod === p.value
                  ? "bg-purple-600 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      {/* Timeline */}
      <div className="mt-8">
        {isLoading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
          </div>
        ) : (
          <TimelineView periods={filtered} />
        )}
      </div>
    </div>
  );
}
