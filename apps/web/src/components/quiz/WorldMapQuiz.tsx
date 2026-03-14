"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface Region {
  id: string;
  name: string;
  path: string;
}

/**
 * Simplified SVG world map for quiz questions of type "carte_a_completer".
 * Each continent/region is a clickable SVG path.
 */

const REGIONS: Region[] = [
  {
    id: "europe",
    name: "Europe",
    path: "M480,95 L490,80 L510,75 L530,78 L550,72 L560,80 L555,95 L560,105 L550,115 L540,110 L530,115 L520,110 L510,105 L505,110 L495,108 L485,105 Z",
  },
  {
    id: "afrique",
    name: "Afrique",
    path: "M470,130 L480,120 L500,118 L520,125 L535,130 L540,145 L535,165 L530,185 L520,200 L510,210 L500,215 L490,210 L480,200 L470,190 L465,175 L460,160 L458,145 Z",
  },
  {
    id: "asie",
    name: "Asie",
    path: "M560,65 L580,60 L610,55 L640,58 L670,65 L690,70 L710,80 L720,90 L715,105 L700,115 L685,120 L670,125 L650,130 L630,125 L610,120 L590,118 L570,115 L560,105 L555,95 Z",
  },
  {
    id: "amerique-nord",
    name: "Amérique du Nord",
    path: "M120,60 L150,50 L180,48 L210,50 L240,55 L270,60 L290,70 L300,80 L310,95 L305,110 L290,120 L270,125 L250,128 L230,130 L210,128 L190,125 L170,120 L150,110 L135,100 L125,85 L120,70 Z",
  },
  {
    id: "amerique-sud",
    name: "Amérique du Sud",
    path: "M250,140 L270,135 L290,140 L305,150 L310,165 L305,185 L295,200 L280,215 L270,225 L260,230 L250,225 L240,215 L235,200 L230,185 L235,170 L240,155 Z",
  },
  {
    id: "oceanie",
    name: "Océanie",
    path: "M700,170 L720,165 L740,168 L755,175 L760,185 L755,195 L740,200 L725,200 L710,195 L700,188 L698,180 Z",
  },
  {
    id: "antarctique",
    name: "Antarctique",
    path: "M200,270 L300,268 L400,265 L500,265 L600,268 L650,272 L600,280 L500,282 L400,282 L300,280 L250,278 Z",
  },
  {
    id: "moyen-orient",
    name: "Moyen-Orient",
    path: "M540,110 L560,105 L570,115 L575,125 L570,135 L560,140 L545,138 L535,130 L530,120 Z",
  },
];

const REGION_COLORS: Record<string, { fill: string; hover: string; selected: string }> = {
  "europe": { fill: "#93c5fd", hover: "#60a5fa", selected: "#3b82f6" },
  "afrique": { fill: "#fbbf24", hover: "#f59e0b", selected: "#d97706" },
  "asie": { fill: "#86efac", hover: "#4ade80", selected: "#22c55e" },
  "amerique-nord": { fill: "#c4b5fd", hover: "#a78bfa", selected: "#8b5cf6" },
  "amerique-sud": { fill: "#fca5a5", hover: "#f87171", selected: "#ef4444" },
  "oceanie": { fill: "#fdba74", hover: "#fb923c", selected: "#f97316" },
  "antarctique": { fill: "#e2e8f0", hover: "#cbd5e1", selected: "#94a3b8" },
  "moyen-orient": { fill: "#a5f3fc", hover: "#67e8f9", selected: "#22d3ee" },
};

interface WorldMapQuizProps {
  questionText: string;
  onRegionSelect: (regionId: string) => void;
  selectedRegion?: string;
  className?: string;
}

export function WorldMapQuiz({
  questionText,
  onRegionSelect,
  selectedRegion,
  className,
}: WorldMapQuizProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const handleRegionClick = useCallback(
    (regionId: string) => {
      onRegionSelect(regionId);
    },
    [onRegionSelect],
  );

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Cliquez sur la région correspondante sur la carte
      </p>

      <div className="relative w-full overflow-hidden rounded-xl border border-neutral-200 bg-sky-50 dark:border-neutral-700 dark:bg-sky-950/30">
        <svg
          viewBox="80 30 720 270"
          className="h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`Carte du monde — ${questionText}`}
        >
          {/* Ocean background */}
          <rect x="80" y="30" width="720" height="270" fill="transparent" />

          {/* Equator line */}
          <line
            x1="80" y1="150" x2="800" y2="150"
            stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="4 4"
          />

          {/* Regions */}
          {REGIONS.map((region) => {
            const colors = REGION_COLORS[region.id] ?? {
              fill: "#d1d5db",
              hover: "#9ca3af",
              selected: "#6b7280",
            };
            const isSelected = selectedRegion === region.id;
            const isHovered = hoveredRegion === region.id;

            let fill = colors.fill;
            if (isSelected) fill = colors.selected;
            else if (isHovered) fill = colors.hover;

            return (
              <g key={region.id}>
                <path
                  d={region.path}
                  fill={fill}
                  stroke="#475569"
                  strokeWidth={isSelected ? 2 : 1}
                  className="cursor-pointer transition-colors duration-150"
                  onClick={() => handleRegionClick(region.id)}
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  role="button"
                  aria-label={region.name}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleRegionClick(region.id);
                    }
                  }}
                />
                {isSelected && (
                  <text
                    x={getRegionCenter(region.path).x}
                    y={getRegionCenter(region.path).y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="pointer-events-none fill-white text-[8px] font-bold"
                  >
                    {region.name}
                  </text>
                )}
              </g>
            );
          })}

          {/* Tooltip for hovered region */}
          {hoveredRegion && !selectedRegion && (
            (() => {
              const region = REGIONS.find((r) => r.id === hoveredRegion);
              if (!region) return null;
              const center = getRegionCenter(region.path);
              return (
                <g>
                  <rect
                    x={center.x - 30}
                    y={center.y - 14}
                    width={60}
                    height={16}
                    rx={4}
                    fill="rgba(15,23,42,0.85)"
                  />
                  <text
                    x={center.x}
                    y={center.y - 5}
                    textAnchor="middle"
                    className="fill-white text-[7px] font-medium"
                  >
                    {region.name}
                  </text>
                </g>
              );
            })()
          )}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-2">
        {REGIONS.filter((r) => r.id !== "antarctique").map((region) => {
          const colors = REGION_COLORS[region.id];
          const isSelected = selectedRegion === region.id;
          return (
            <button
              key={region.id}
              onClick={() => handleRegionClick(region.id)}
              className={cn(
                "flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs transition-colors",
                isSelected
                  ? "border-primary-500 bg-primary-50 font-semibold text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                  : "border-neutral-200 text-neutral-600 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800",
              )}
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: colors?.fill ?? "#d1d5db" }}
              />
              {region.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Compute the approximate center of an SVG path by averaging its coordinates. */
function getRegionCenter(path: string): { x: number; y: number } {
  const coords = path.match(/[\d.]+/g);
  if (!coords || coords.length < 2) return { x: 400, y: 150 };

  let sumX = 0;
  let sumY = 0;
  let count = 0;

  for (let i = 0; i < coords.length - 1; i += 2) {
    sumX += parseFloat(coords[i]);
    sumY += parseFloat(coords[i + 1]);
    count++;
  }

  return { x: sumX / count, y: sumY / count };
}
