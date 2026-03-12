"use client";

import { useState } from "react";
import Link from "next/link";
import { HelpCircle, Clock, Filter, BarChart3 } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { categorieLabel, niveauLabel } from "@/lib/utils";
import type { ArticleCategorie } from "@/types";

const categories = [
  { value: "all", label: "Toutes" },
  { value: "histoire", label: "Histoire" },
  { value: "geographie", label: "G\u00e9ographie" },
  { value: "geologie", label: "G\u00e9ologie" },
  { value: "sciences", label: "Sciences" },
  { value: "culture", label: "Culture" },
];

const placeholderQuizzes = [
  {
    id: "q1",
    titre: "Les capitales du monde",
    categorie: "geographie" as ArticleCategorie,
    niveau: "6eme",
    questions: 15,
    duree: 10,
    description: "Saurez-vous retrouver les capitales des pays du monde ?",
  },
  {
    id: "q2",
    titre: "La R\u00e9volution fran\u00e7aise",
    categorie: "histoire" as ArticleCategorie,
    niveau: "4eme",
    questions: 12,
    duree: 8,
    description:
      "Testez vos connaissances sur les \u00e9v\u00e9nements de 1789 \u00e0 1799.",
  },
  {
    id: "q3",
    titre: "Les volcans et s\u00e9ismes",
    categorie: "geologie" as ArticleCategorie,
    niveau: "5eme",
    questions: 10,
    duree: 7,
    description:
      "Magma, \u00e9ruptions, plaques tectoniques : \u00eates-vous au point ?",
  },
  {
    id: "q4",
    titre: "La Seconde Guerre mondiale",
    categorie: "histoire" as ArticleCategorie,
    niveau: "3eme",
    questions: 20,
    duree: 15,
    description:
      "De 1939 \u00e0 1945 : les grandes batailles, les acteurs cl\u00e9s et les cons\u00e9quences.",
  },
  {
    id: "q5",
    titre: "G\u00e9ographie de la France",
    categorie: "geographie" as ArticleCategorie,
    niveau: "tout-niveau",
    questions: 15,
    duree: 10,
    description:
      "R\u00e9gions, fleuves, montagnes : connaissez-vous bien la France ?",
  },
  {
    id: "q6",
    titre: "Grandes d\u00e9couvertes scientifiques",
    categorie: "sciences" as ArticleCategorie,
    niveau: "seconde",
    questions: 12,
    duree: 8,
    description:
      "De Galil\u00e9e \u00e0 Einstein, retracez les grandes avanc\u00e9es de la science.",
  },
];

export default function QuizListPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? placeholderQuizzes
      : placeholderQuizzes.filter((q) => q.categorie === activeCategory);

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-rose-50 p-2 dark:bg-rose-900/20">
          <HelpCircle className="h-6 w-6 text-rose-600" />
        </div>
        <div>
          <h1 className="page-title">Quiz</h1>
          <p className="page-subtitle">
            Testez vos connaissances avec des quiz interactifs class\u00e9s par
            th\u00e8me et niveau scolaire.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="h-4 w-4 shrink-0 text-neutral-400" />
        {categories.map((c) => (
          <button
            key={c.value}
            onClick={() => setActiveCategory(c.value)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === c.value
                ? "bg-rose-600 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Quiz grid */}
      <div className="grid-cards mt-8">
        {filtered.map((quiz) => (
          <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
            <Card hover className="flex h-full flex-col">
              <CardContent className="flex-1">
                <div className="mb-3 flex gap-2">
                  <Badge variant={quiz.categorie}>
                    {categorieLabel(quiz.categorie)}
                  </Badge>
                  <Badge variant="default">{niveauLabel(quiz.niveau)}</Badge>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {quiz.titre}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {quiz.description}
                </p>
              </CardContent>
              <CardFooter className="text-xs text-neutral-400">
                <span className="flex items-center gap-1">
                  <BarChart3 className="h-3.5 w-3.5" />
                  {quiz.questions} questions
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {quiz.duree} min
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline">Charger plus de quiz</Button>
      </div>
    </div>
  );
}
