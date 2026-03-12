"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Filter } from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { categorieLabel } from "@/lib/utils";
import type { ArticleCategorie } from "@/types";

const categories: { value: ArticleCategorie | "all"; label: string }[] = [
  { value: "all", label: "Tout" },
  { value: "geographie", label: "G\u00e9ographie" },
  { value: "histoire", label: "Histoire" },
  { value: "geologie", label: "G\u00e9ologie" },
  { value: "sciences", label: "Sciences" },
  { value: "culture", label: "Culture" },
  { value: "guerre", label: "Guerres & Conflits" },
  { value: "politique", label: "Politique" },
];

const placeholderArticles = [
  {
    slug: "tectonique-des-plaques",
    titre: "La tectonique des plaques",
    categorie: "geologie" as ArticleCategorie,
    resume:
      "D\u00e9couvrez comment les plaques tectoniques fa\u00e7onnent la surface de la Terre, cr\u00e9ant montagnes, oc\u00e9ans et volcans.",
    tags: ["g\u00e9ologie", "terre", "plaques"],
  },
  {
    slug: "revolution-francaise",
    titre: "La R\u00e9volution fran\u00e7aise",
    categorie: "histoire" as ArticleCategorie,
    resume:
      "De la prise de la Bastille \u00e0 la chute de Robespierre : les \u00e9v\u00e9nements qui ont transform\u00e9 la France et le monde.",
    tags: ["r\u00e9volution", "France", "1789"],
  },
  {
    slug: "climats-du-monde",
    titre: "Les climats du monde",
    categorie: "geographie" as ArticleCategorie,
    resume:
      "Tropicaux, temp\u00e9r\u00e9s, polaires : comprendre les diff\u00e9rents types de climats et leur r\u00e9partition sur le globe.",
    tags: ["climat", "m\u00e9t\u00e9o", "zones"],
  },
  {
    slug: "empire-romain",
    titre: "L\u2019Empire romain",
    categorie: "histoire" as ArticleCategorie,
    resume:
      "L\u2019un des plus grands empires de l\u2019histoire : son expansion, sa civilisation, et les raisons de sa chute.",
    tags: ["Rome", "antiquit\u00e9", "empire"],
  },
  {
    slug: "volcans",
    titre: "Les volcans",
    categorie: "geologie" as ArticleCategorie,
    resume:
      "Comment naissent les volcans ? Quels sont les diff\u00e9rents types d\u2019\u00e9ruptions ? Plongez au c\u0153ur de la Terre.",
    tags: ["volcan", "\u00e9ruption", "magma"],
  },
  {
    slug: "guerre-froide",
    titre: "La guerre froide",
    categorie: "guerre" as ArticleCategorie,
    resume:
      "Le conflit id\u00e9ologique entre les \u00c9tats-Unis et l\u2019URSS qui a d\u00e9fini le XXe si\u00e8cle.",
    tags: ["USA", "URSS", "g\u00e9opolitique"],
  },
];

export default function EncyclopediePage() {
  const [activeCategory, setActiveCategory] = useState<ArticleCategorie | "all">("all");

  const filtered =
    activeCategory === "all"
      ? placeholderArticles
      : placeholderArticles.filter((a) => a.categorie === activeCategory);

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary-50 p-2 dark:bg-primary-900/20">
          <BookOpen className="h-6 w-6 text-primary-600" />
        </div>
        <div>
          <h1 className="page-title">Encyclop\u00e9die</h1>
          <p className="page-subtitle">
            Explorez des articles d\u00e9taill\u00e9s sur la g\u00e9ographie, l&apos;histoire, la g\u00e9ologie et bien plus.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <SearchBar placeholder="Rechercher un article\u2026" expanded />
      </div>

      {/* Category filters */}
      <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="h-4 w-4 shrink-0 text-neutral-400" />
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === cat.value
                ? "bg-primary-600 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Articles grid */}
      <div className="grid-cards mt-8">
        {filtered.map((article) => (
          <Link key={article.slug} href={`/encyclopedie/${article.slug}`}>
            <Card hover className="h-full">
              <CardContent>
                <div className="mb-3 flex gap-2">
                  <Badge variant={article.categorie}>
                    {categorieLabel(article.categorie)}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {article.titre}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {article.resume}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Load more */}
      <div className="mt-10 text-center">
        <Button variant="outline">Charger plus d&apos;articles</Button>
      </div>
    </div>
  );
}
