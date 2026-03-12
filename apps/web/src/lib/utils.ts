import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

/**
 * Merge Tailwind classes with clsx + tailwind-merge.
 * Install clsx and tailwind-merge as needed, or replace with a simple join.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Format an ISO date string to a French locale date */
export function formatDate(dateStr: string): string {
  try {
    return format(new Date(dateStr), "d MMMM yyyy", { locale: fr });
  } catch {
    return dateStr;
  }
}

/** Relative date, e.g. "il y a 3 jours" */
export function formatRelativeDate(dateStr: string): string {
  try {
    return formatDistanceToNow(new Date(dateStr), {
      addSuffix: true,
      locale: fr,
    });
  } catch {
    return dateStr;
  }
}

/** Format a population number in a readable way: 67 390 000 */
export function formatPopulation(n: number): string {
  return new Intl.NumberFormat("fr-FR").format(n);
}

/** Format area in km² */
export function formatArea(km2: number): string {
  return `${new Intl.NumberFormat("fr-FR").format(km2)} km²`;
}

/** Format duration (seconds) to mm:ss */
export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** Truncate text to a given length */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "\u2026";
}

/** Capitalize the first letter */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Map NiveauScolaire to a human-readable French label */
export function niveauLabel(niveau: string): string {
  const labels: Record<string, string> = {
    "6eme": "6\u00e8me",
    "5eme": "5\u00e8me",
    "4eme": "4\u00e8me",
    "3eme": "3\u00e8me",
    seconde: "Seconde",
    premiere: "Premi\u00e8re",
    terminale: "Terminale",
    "tout-niveau": "Tout niveau",
  };
  return labels[niveau] ?? niveau;
}

/** Map category slugs to French labels */
export function categorieLabel(categorie: string): string {
  const labels: Record<string, string> = {
    geographie: "G\u00e9ographie",
    histoire: "Histoire",
    geologie: "G\u00e9ologie",
    sciences: "Sciences",
    culture: "Culture",
    guerre: "Guerres & Conflits",
    politique: "Politique",
  };
  return labels[categorie] ?? capitalize(categorie);
}
