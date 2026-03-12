"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { TimelinePeriod, TimelineEvent, ArticleCategorie } from "@/types";

interface TimelineViewProps {
  periods: TimelinePeriod[];
}

export function TimelineView({ periods }: TimelineViewProps) {
  const [expandedPeriods, setExpandedPeriods] = useState<Set<string>>(
    new Set(periods.slice(0, 2).map((p) => p.id)),
  );

  const togglePeriod = (id: string) => {
    setExpandedPeriods((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-4">
      {periods.map((period) => {
        const isExpanded = expandedPeriods.has(period.id);
        return (
          <div
            key={period.id}
            className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700"
          >
            {/* Period header */}
            <button
              onClick={() => togglePeriod(period.id)}
              className="flex w-full items-center gap-3 bg-white px-5 py-4 text-left transition-colors hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-750"
            >
              <div
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: period.couleur }}
              />
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 text-neutral-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-neutral-400" />
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {period.nom}
                </h3>
                <p className="text-sm text-neutral-500">
                  {period.debut} &ndash; {period.fin}
                </p>
              </div>
              <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
                {period.evenements.length} \u00e9v\u00e9nement
                {period.evenements.length > 1 ? "s" : ""}
              </span>
            </button>

            {/* Events list */}
            {isExpanded && (
              <div className="border-t border-neutral-100 bg-neutral-50/50 dark:border-neutral-700 dark:bg-neutral-900/50">
                {period.evenements.map((event, idx) => (
                  <TimelineEventRow
                    key={event.id}
                    event={event}
                    color={period.couleur}
                    isLast={idx === period.evenements.length - 1}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function TimelineEventRow({
  event,
  color,
  isLast,
}: {
  event: TimelineEvent;
  color: string;
  isLast: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex gap-4 px-5 py-4",
        !isLast && "border-b border-neutral-100 dark:border-neutral-800",
      )}
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className="mt-1.5 h-3 w-3 rounded-full border-2 border-white shadow-sm"
          style={{ backgroundColor: color }}
        />
        {!isLast && (
          <div className="w-0.5 flex-1 bg-neutral-200 dark:bg-neutral-700" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-medium text-neutral-400">{event.date}</p>
            <h4 className="mt-0.5 font-medium text-neutral-900 dark:text-neutral-100">
              {event.titre}
            </h4>
          </div>
          <Badge variant={event.categorie as ArticleCategorie}>
            {event.categorie}
          </Badge>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {event.description}
        </p>
      </div>
    </div>
  );
}
