"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Filter } from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { Card } from "@/components/ui/Card";

const continents = [
  { value: "all", label: "Tous" },
  { value: "afrique", label: "Afrique" },
  { value: "amerique-nord", label: "Am\u00e9rique du Nord" },
  { value: "amerique-sud", label: "Am\u00e9rique du Sud" },
  { value: "asie", label: "Asie" },
  { value: "europe", label: "Europe" },
  { value: "oceanie", label: "Oc\u00e9anie" },
];

const placeholderCountries = [
  { name: "France", code: "FRA", capital: "Paris", population: "67 390 000", continent: "europe", flag: "FR" },
  { name: "Japon", code: "JPN", capital: "Tokyo", population: "125 700 000", continent: "asie", flag: "JP" },
  { name: "Br\u00e9sil", code: "BRA", capital: "Bras\u00edlia", population: "214 300 000", continent: "amerique-sud", flag: "BR" },
  { name: "\u00c9gypte", code: "EGY", capital: "Le Caire", population: "104 300 000", continent: "afrique", flag: "EG" },
  { name: "Australie", code: "AUS", capital: "Canberra", population: "26 000 000", continent: "oceanie", flag: "AU" },
  { name: "Allemagne", code: "DEU", capital: "Berlin", population: "83 200 000", continent: "europe", flag: "DE" },
  { name: "Inde", code: "IND", capital: "New Delhi", population: "1 420 000 000", continent: "asie", flag: "IN" },
  { name: "Canada", code: "CAN", capital: "Ottawa", population: "38 900 000", continent: "amerique-nord", flag: "CA" },
  { name: "Maroc", code: "MAR", capital: "Rabat", population: "37 500 000", continent: "afrique", flag: "MA" },
  { name: "Argentine", code: "ARG", capital: "Buenos Aires", population: "46 000 000", continent: "amerique-sud", flag: "AR" },
  { name: "Italie", code: "ITA", capital: "Rome", population: "59 000 000", continent: "europe", flag: "IT" },
  { name: "Chine", code: "CHN", capital: "P\u00e9kin", population: "1 410 000 000", continent: "asie", flag: "CN" },
];

function flagEmoji(code: string): string {
  return String.fromCodePoint(
    ...code.split("").map((c) => 0x1f1e6 + c.charCodeAt(0) - 65),
  );
}

export default function PaysPage() {
  const [activeContinent, setActiveContinent] = useState("all");

  const filtered =
    activeContinent === "all"
      ? placeholderCountries
      : placeholderCountries.filter((c) => c.continent === activeContinent);

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-secondary-50 p-2 dark:bg-secondary-900/20">
          <Globe className="h-6 w-6 text-secondary-600" />
        </div>
        <div>
          <h1 className="page-title">Pays du monde</h1>
          <p className="page-subtitle">
            D\u00e9couvrez les 195 pays du monde : g\u00e9ographie, histoire, culture et donn\u00e9es cl\u00e9s.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <SearchBar placeholder="Rechercher un pays\u2026" expanded />
      </div>

      <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="h-4 w-4 shrink-0 text-neutral-400" />
        {continents.map((c) => (
          <button
            key={c.value}
            onClick={() => setActiveContinent(c.value)}
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

      <div className="grid-cards-4 mt-8">
        {filtered.map((country) => (
          <Link key={country.code} href={`/pays/${country.code.toLowerCase()}`}>
            <Card hover className="text-center">
              <div className="mb-3 text-4xl">{flagEmoji(country.flag)}</div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">
                {country.name}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {country.capital}
              </p>
              <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
                {country.population} habitants
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
