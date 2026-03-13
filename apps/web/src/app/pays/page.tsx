"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Filter, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/ui/SearchBar";
import { Card } from "@/components/ui/Card";
import { getCountries } from "@/lib/api";

const continents = [
  { value: "all", label: "Tous" },
  { value: "Africa", label: "Afrique" },
  { value: "North America", label: "Amérique du Nord" },
  { value: "South America", label: "Amérique du Sud" },
  { value: "Asia", label: "Asie" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Océanie" },
];

function flagEmoji(iso2: string): string {
  if (!iso2 || iso2.length !== 2) return "";
  return String.fromCodePoint(
    ...iso2.toUpperCase().split("").map((c) => 0x1f1e6 + c.charCodeAt(0) - 65),
  );
}

export default function PaysPage() {
  const [activeContinent, setActiveContinent] = useState("all");
  const [page, setPage] = useState(1);

  const continent = activeContinent === "all" ? undefined : activeContinent;
  const { data, isLoading } = useQuery({
    queryKey: ["countries", page, continent],
    queryFn: () => getCountries(page, 24, continent),
  });

  const countries = data?.data ?? [];

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-secondary-50 p-2 dark:bg-secondary-900/20">
          <Globe className="h-6 w-6 text-secondary-600" />
        </div>
        <div>
          <h1 className="page-title">Pays du monde</h1>
          <p className="page-subtitle">
            Découvrez les 195 pays du monde : géographie, histoire, culture et données clés.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <SearchBar placeholder="Rechercher un pays…" expanded navigateOnSubmit />
      </div>

      <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="h-4 w-4 shrink-0 text-neutral-400" />
        {continents.map((c) => (
          <button
            key={c.value}
            onClick={() => { setActiveContinent(c.value); setPage(1); }}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              activeContinent === c.value
                ? "bg-secondary-600 text-white"
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
          <div className="grid-cards-4 mt-8">
            {countries.map((country) => (
              <Link key={country.id} href={`/pays/${country.code_iso3.toLowerCase()}`}>
                <Card hover className="text-center">
                  <div className="mb-3 text-4xl">{flagEmoji(country.code_iso2)}</div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">
                    {country.name}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {country.capital}
                  </p>
                  <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
                    {new Intl.NumberFormat("fr-FR").format(country.population)} habitants
                  </p>
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
