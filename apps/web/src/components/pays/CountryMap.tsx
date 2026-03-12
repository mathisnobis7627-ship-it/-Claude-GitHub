"use client";

import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface CountryMapProps {
  countryName: string;
  mapUrl?: string;
  className?: string;
}

/**
 * Country map placeholder component.
 * In production, this would integrate with a mapping library such as
 * react-simple-maps, Leaflet, or Mapbox GL JS.
 */
export function CountryMap({ countryName, mapUrl, className }: CountryMapProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-primary-50 to-secondary-50 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900",
        className,
      )}
      style={{ minHeight: 300 }}
    >
      {mapUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={mapUrl}
          alt={`Carte de ${countryName}`}
          className="h-full w-full object-contain p-4"
        />
      ) : (
        <div className="flex flex-col items-center gap-3 text-neutral-400 dark:text-neutral-500">
          <MapPin className="h-12 w-12" />
          <p className="text-sm font-medium">Carte de {countryName}</p>
          <p className="max-w-xs text-center text-xs text-neutral-400">
            La carte interactive sera disponible prochainement. Elle permettra
            d&apos;explorer la g\u00e9ographie, les villes et les r\u00e9gions
            du pays.
          </p>
        </div>
      )}

      {/* Decorative grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}
