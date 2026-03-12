"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Filter } from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const domaines = [
  { value: "all", label: "Tous" },
  { value: "sciences", label: "Sciences" },
  { value: "politique", label: "Politique" },
  { value: "arts", label: "Arts & Litt\u00e9rature" },
  { value: "philosophie", label: "Philosophie" },
  { value: "exploration", label: "Exploration" },
  { value: "militaire", label: "Militaire" },
];

const placeholderFigures = [
  {
    slug: "marie-curie",
    nom: "Curie",
    prenom: "Marie",
    dates: "1867 \u2013 1934",
    nationalite: "Polonaise / Fran\u00e7aise",
    domaine: "sciences",
    resume:
      "Physicienne et chimiste, premi\u00e8re femme \u00e0 recevoir un prix Nobel et seule personne \u00e0 en obtenir deux dans des disciplines diff\u00e9rentes.",
  },
  {
    slug: "napoleon-bonaparte",
    nom: "Bonaparte",
    prenom: "Napol\u00e9on",
    dates: "1769 \u2013 1821",
    nationalite: "Fran\u00e7aise",
    domaine: "politique",
    resume:
      "G\u00e9n\u00e9ral puis empereur, il a r\u00e9form\u00e9 la France et redessin\u00e9 la carte de l\u2019Europe.",
  },
  {
    slug: "leonard-de-vinci",
    nom: "de Vinci",
    prenom: "L\u00e9onard",
    dates: "1452 \u2013 1519",
    nationalite: "Italienne",
    domaine: "arts",
    resume:
      "Artiste, ing\u00e9nieur et scientifique de la Renaissance, auteur de La Joconde et d\u2019innombrables inventions.",
  },
  {
    slug: "cleopatre",
    nom: "Cl\u00e9op\u00e2tre VII",
    prenom: "",
    dates: "69 av. J.-C. \u2013 30 av. J.-C.",
    nationalite: "\u00c9gyptienne",
    domaine: "politique",
    resume:
      "Derni\u00e8re reine de la dynastie ptol\u00e9ma\u00efque d\u2019\u00c9gypte, figure embl\u00e9matique de l\u2019Antiquit\u00e9.",
  },
  {
    slug: "albert-einstein",
    nom: "Einstein",
    prenom: "Albert",
    dates: "1879 \u2013 1955",
    nationalite: "Allemande / Am\u00e9ricaine",
    domaine: "sciences",
    resume:
      "Physicien th\u00e9oricien, auteur de la th\u00e9orie de la relativit\u00e9 et prix Nobel de physique 1921.",
  },
  {
    slug: "jeanne-d-arc",
    nom: "d\u2019Arc",
    prenom: "Jeanne",
    dates: "1412 \u2013 1431",
    nationalite: "Fran\u00e7aise",
    domaine: "militaire",
    resume:
      "H\u00e9ro\u00efne de la guerre de Cent Ans, elle a men\u00e9 les arm\u00e9es fran\u00e7aises \u00e0 la victoire \u00e0 Orl\u00e9ans.",
  },
];

export default function PersonnalitesPage() {
  const [activeDomaine, setActiveDomaine] = useState("all");

  const filtered =
    activeDomaine === "all"
      ? placeholderFigures
      : placeholderFigures.filter((f) => f.domaine === activeDomaine);

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-accent-50 p-2 dark:bg-accent-900/20">
          <Users className="h-6 w-6 text-accent-600" />
        </div>
        <div>
          <h1 className="page-title">Personnalit\u00e9s historiques</h1>
          <p className="page-subtitle">
            D\u00e9couvrez les grandes figures qui ont fa\u00e7onn\u00e9 le monde.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <SearchBar placeholder="Rechercher une personnalit\u00e9\u2026" expanded />
      </div>

      <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="h-4 w-4 shrink-0 text-neutral-400" />
        {domaines.map((d) => (
          <button
            key={d.value}
            onClick={() => setActiveDomaine(d.value)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              activeDomaine === d.value
                ? "bg-accent-600 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="grid-cards mt-8">
        {filtered.map((person) => (
          <Link key={person.slug} href={`/personnalites/${person.slug}`}>
            <Card hover className="h-full">
              <CardContent>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-lg font-bold text-accent-700 dark:bg-accent-900/30 dark:text-accent-400">
                    {(person.prenom?.[0] ?? "") + person.nom[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {person.prenom} {person.nom}
                    </h3>
                    <p className="text-xs text-neutral-400">{person.dates}</p>
                  </div>
                </div>
                <div className="mb-2 flex gap-2">
                  <Badge variant="default">{person.nationalite}</Badge>
                  <Badge variant="sciences">{person.domaine}</Badge>
                </div>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {person.resume}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
