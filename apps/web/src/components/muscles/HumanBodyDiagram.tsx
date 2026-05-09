"use client";

import { useState, useMemo } from "react";
import {
  BODY_SILHOUETTE_PATH,
  MUSCLES_BY_VIEW,
  MUSCLE_GROUPS_BY_ID,
  type Muscle,
  type MuscleView,
} from "@/lib/muscles-data";
import { cn } from "@/lib/utils";

interface HumanBodyDiagramProps {
  view: MuscleView;
  selectedId: string | null;
  onSelect: (muscleId: string) => void;
  highlightGroup?: string | null;
  /** Set d'IDs de muscles à mettre en avant (recherche). */
  matchedIds?: Set<string>;
}

/**
 * Diagramme SVG interactif du corps humain. Chaque muscle est un ou plusieurs
 * `path` cliquable. La silhouette est dessinée en arrière-plan en couleur peau
 * pour suggérer la forme du corps.
 */
export function HumanBodyDiagram({
  view,
  selectedId,
  onSelect,
  highlightGroup,
  matchedIds,
}: HumanBodyDiagramProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const muscles = useMemo(() => MUSCLES_BY_VIEW[view], [view]);
  const hovered = useMemo<Muscle | null>(
    () => muscles.find((m) => m.id === hoveredId) ?? null,
    [muscles, hoveredId],
  );

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 400 800"
        className="mx-auto block h-auto w-full max-w-[420px] select-none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={
          view === "front"
            ? "Schéma anatomique du corps humain — vue de face"
            : "Schéma anatomique du corps humain — vue de dos"
        }
      >
        <defs>
          <radialGradient id="skin-gradient" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fde2cf" />
            <stop offset="100%" stopColor="#f4c4a1" />
          </radialGradient>
          <linearGradient id="ground-shadow" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ombre au sol pour donner du relief */}
        <ellipse
          cx="200"
          cy="788"
          rx="100"
          ry="6"
          fill="url(#ground-shadow)"
        />

        {/* Silhouette du corps : couleur peau */}
        <path
          d={BODY_SILHOUETTE_PATH}
          fill="url(#skin-gradient)"
          stroke="#b08368"
          strokeWidth={1.2}
          strokeLinejoin="round"
        />

        {/* Détails décoratifs : yeux, bouche (vue de face uniquement) */}
        {view === "front" ? (
          <g className="pointer-events-none" stroke="#5b3a25" strokeWidth={1.2} strokeLinecap="round">
            <line x1="183" y1="73" x2="190" y2="73" />
            <line x1="210" y1="73" x2="217" y2="73" />
            <path d="M 192 92 Q 200 96 208 92" fill="none" />
          </g>
        ) : (
          <g className="pointer-events-none">
            <ellipse cx="200" cy="65" rx="32" ry="20" fill="#5b3a25" opacity="0.45" />
          </g>
        )}

        {/* Mains et pieds (esquisse) */}
        <g className="pointer-events-none" fill="#f4c4a1" stroke="#b08368" strokeWidth={1}>
          <ellipse cx="93" cy="448" rx="13" ry="18" />
          <ellipse cx="307" cy="448" rx="13" ry="18" />
          <ellipse cx="180" cy="775" rx="14" ry="9" />
          <ellipse cx="220" cy="775" rx="14" ry="9" />
        </g>

        {/* Muscles : un ou plusieurs paths par muscle */}
        {muscles.map((muscle) => {
          const group = MUSCLE_GROUPS_BY_ID[muscle.group];
          const isSelected = selectedId === muscle.id;
          const isHovered = hoveredId === muscle.id;
          const inGroup = highlightGroup === muscle.group;
          const isMatched = matchedIds ? matchedIds.has(muscle.id) : true;
          const dimmed =
            (highlightGroup && !inGroup) || (matchedIds && !isMatched);

          let fill = group.fill;
          if (isSelected) fill = group.active;
          else if (isHovered) fill = group.hover;
          else if (inGroup) fill = group.hover;

          const opacity = dimmed ? 0.22 : isSelected ? 1 : 0.92;
          const stroke = isSelected ? group.active : "#0f172a";
          const strokeWidth = isSelected ? 2 : isHovered ? 1.6 : 0.8;

          return (
            <g key={muscle.id}>
              {muscle.paths.map((d, idx) => (
                <path
                  key={idx}
                  d={d}
                  fill={fill}
                  fillOpacity={opacity}
                  stroke={stroke}
                  strokeOpacity={dimmed ? 0.3 : 0.7}
                  strokeWidth={strokeWidth}
                  strokeLinejoin="round"
                  className="cursor-pointer transition-all duration-150"
                  onClick={() => onSelect(muscle.id)}
                  onMouseEnter={() => setHoveredId(muscle.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(muscle.id)}
                  onBlur={() => setHoveredId(null)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${muscle.name} (${MUSCLE_GROUPS_BY_ID[muscle.group].label})`}
                  aria-pressed={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSelect(muscle.id);
                    }
                  }}
                />
              ))}

              {/* Repère pour le muscle sélectionné */}
              {isSelected ? (
                <g className="pointer-events-none">
                  <circle
                    cx={muscle.label.x}
                    cy={muscle.label.y}
                    r={4}
                    fill="white"
                    stroke={group.active}
                    strokeWidth={2}
                  />
                </g>
              ) : null}
            </g>
          );
        })}

        {/* Tooltip survol */}
        {hovered ? (
          <g className="pointer-events-none">
            <rect
              x={Math.max(4, Math.min(hovered.label.x - 60, 280))}
              y={Math.max(4, hovered.label.y - 28)}
              width={120}
              height={20}
              rx={4}
              fill="rgba(15,23,42,0.92)"
            />
            <text
              x={Math.max(64, Math.min(hovered.label.x, 340))}
              y={Math.max(18, hovered.label.y - 14)}
              textAnchor="middle"
              className="fill-white"
              style={{ fontSize: 10, fontWeight: 600 }}
            >
              {hovered.name}
            </text>
          </g>
        ) : null}

        {/* Légende vue */}
        <g className="pointer-events-none">
          <rect
            x={10}
            y={10}
            width={100}
            height={22}
            rx={11}
            fill="rgba(255,255,255,0.85)"
            stroke="#cbd5e1"
            strokeWidth={1}
          />
          <text
            x={60}
            y={25}
            textAnchor="middle"
            className="fill-neutral-700"
            style={{ fontSize: 11, fontWeight: 700 }}
          >
            {view === "front" ? "Vue de face" : "Vue de dos"}
          </text>
        </g>
      </svg>

      {/* Hint en pied */}
      <p
        className={cn(
          "mt-2 text-center text-xs italic",
          "text-neutral-500 dark:text-neutral-400",
        )}
      >
        Cliquez sur un muscle pour découvrir son rôle, son origine et son insertion.
      </p>
    </div>
  );
}
