"use client";

import { useState } from "react";
import { Clock, Filter } from "lucide-react";
import { TimelineView } from "@/components/chronologie/TimelineView";
import type { TimelinePeriod } from "@/types";

const placeholderPeriods: TimelinePeriod[] = [
  {
    id: "antiquite",
    nom: "Antiquit\u00e9",
    debut: -3000,
    fin: 476,
    couleur: "#d97706",
    evenements: [
      {
        id: "a1",
        date: "vers -3000",
        titre: "Naissance de l\u2019\u00e9criture en M\u00e9sopotamie",
        description:
          "L\u2019invention de l\u2019\u00e9criture cun\u00e9iforme marque le d\u00e9but de l\u2019histoire.",
        categorie: "histoire",
      },
      {
        id: "a2",
        date: "vers -2560",
        titre: "Construction de la Grande Pyramide de Gizeh",
        description:
          "La plus grande des pyramides d\u2019\u00c9gypte est \u00e9rig\u00e9e pour le pharaon Kh\u00e9ops.",
        categorie: "culture",
      },
      {
        id: "a3",
        date: "-509",
        titre: "Fondation de la R\u00e9publique romaine",
        description:
          "Rome passe de la monarchie \u00e0 la r\u00e9publique apr\u00e8s l\u2019expulsion des rois \u00e9trusques.",
        categorie: "politique",
      },
      {
        id: "a4",
        date: "476",
        titre: "Chute de l\u2019Empire romain d\u2019Occident",
        description:
          "Romulus Augustule, dernier empereur, est d\u00e9pos\u00e9 par Odoacre.",
        categorie: "histoire",
      },
    ],
  },
  {
    id: "moyen-age",
    nom: "Moyen \u00c2ge",
    debut: 476,
    fin: 1492,
    couleur: "#7c3aed",
    evenements: [
      {
        id: "m1",
        date: "800",
        titre: "Couronnement de Charlemagne",
        description:
          "Charlemagne est couronn\u00e9 empereur d\u2019Occident par le pape L\u00e9on III.",
        categorie: "politique",
      },
      {
        id: "m2",
        date: "1096 \u2013 1099",
        titre: "Premi\u00e8re croisade",
        description:
          "Les crois\u00e9s prennent J\u00e9rusalem et fondent les \u00c9tats latins d\u2019Orient.",
        categorie: "guerre",
      },
      {
        id: "m3",
        date: "1347 \u2013 1353",
        titre: "La Peste noire",
        description:
          "L\u2019\u00e9pid\u00e9mie d\u00e9cime un tiers de la population europ\u00e9enne.",
        categorie: "histoire",
      },
    ],
  },
  {
    id: "temps-modernes",
    nom: "Temps modernes",
    debut: 1492,
    fin: 1789,
    couleur: "#2563eb",
    evenements: [
      {
        id: "t1",
        date: "1492",
        titre: "D\u00e9couverte de l\u2019Am\u00e9rique par Christophe Colomb",
        description:
          "Le navigateur g\u00e9nois atteint les Bahamas et ouvre la voie \u00e0 la colonisation du Nouveau Monde.",
        categorie: "histoire",
      },
      {
        id: "t2",
        date: "1789",
        titre: "Prise de la Bastille",
        description:
          "Le 14 juillet, les Parisiens prennent la Bastille, symbole du d\u00e9but de la R\u00e9volution fran\u00e7aise.",
        categorie: "politique",
      },
    ],
  },
  {
    id: "epoque-contemporaine",
    nom: "\u00c9poque contemporaine",
    debut: 1789,
    fin: 2025,
    couleur: "#059669",
    evenements: [
      {
        id: "c1",
        date: "1914 \u2013 1918",
        titre: "Premi\u00e8re Guerre mondiale",
        description:
          "Le conflit implique les grandes puissances mondiales et fait des millions de victimes.",
        categorie: "guerre",
      },
      {
        id: "c2",
        date: "1939 \u2013 1945",
        titre: "Seconde Guerre mondiale",
        description:
          "Le conflit le plus meurtrier de l\u2019histoire de l\u2019humanit\u00e9.",
        categorie: "guerre",
      },
      {
        id: "c3",
        date: "1969",
        titre: "Premier pas sur la Lune",
        description:
          "Neil Armstrong pose le pied sur la Lune lors de la mission Apollo 11.",
        categorie: "sciences",
      },
    ],
  },
];

const periodFilters = [
  { value: "all", label: "Toutes les p\u00e9riodes" },
  ...placeholderPeriods.map((p) => ({ value: p.id, label: p.nom })),
];

export default function ChronologiePage() {
  const [activePeriod, setActivePeriod] = useState("all");

  const filtered =
    activePeriod === "all"
      ? placeholderPeriods
      : placeholderPeriods.filter((p) => p.id === activePeriod);

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-purple-50 p-2 dark:bg-purple-900/20">
          <Clock className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h1 className="page-title">Chronologie</h1>
          <p className="page-subtitle">
            Parcourez l&apos;histoire \u00e0 travers une frise chronologique
            interactive, de l&apos;Antiquit\u00e9 \u00e0 nos jours.
          </p>
        </div>
      </div>

      {/* Period filters */}
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

      {/* Timeline */}
      <div className="mt-8">
        <TimelineView periods={filtered} />
      </div>
    </div>
  );
}
