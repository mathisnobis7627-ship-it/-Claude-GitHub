"use client";

import { useState } from "react";
import Link from "next/link";
import { HelpCircle, Clock, Filter, BarChart3, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { categorieLabel } from "@/lib/utils";
import { getQuizzes } from "@/lib/api";

const categories = [
  { value: "all", label: "Toutes" },
  { value: "histoire", label: "Histoire" },
  { value: "geographie", label: "Géographie" },
  { value: "geologie", label: "Géologie" },
  { value: "sciences", label: "Sciences" },
  { value: "culture", label: "Culture" },
];

export default function QuizListPage() {
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");

  const { data, isLoading } = useQuery({
    queryKey: ["quizzes", page],
    queryFn: () => getQuizzes(page, 20),
  });

  const allQuizzes = data?.data ?? [];
  const filtered =
    activeCategory === "all"
      ? allQuizzes
      : allQuizzes.filter((q) => q.category === activeCategory);

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-rose-50 p-2 dark:bg-rose-900/20">
          <HelpCircle className="h-6 w-6 text-rose-600" />
        </div>
        <div>
          <h1 className="page-title">Quiz</h1>
          <p className="page-subtitle">
            Testez vos connaissances avec des quiz interactifs classés par
            thème et niveau scolaire.
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

      {isLoading ? (
        <div className="mt-16 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
        </div>
      ) : (
        <>
          <div className="grid-cards mt-8">
            {filtered.map((quiz) => (
              <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
                <Card hover className="flex h-full flex-col">
                  <CardContent className="flex-1">
                    <div className="mb-3 flex gap-2">
                      {quiz.category && (
                        <Badge variant={(quiz.category as "histoire" | "geographie") || "default"}>
                          {categorieLabel(quiz.category)}
                        </Badge>
                      )}
                      <Badge variant="default">{quiz.difficulty_level}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {quiz.title}
                    </h3>
                    {quiz.description && (
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {quiz.description}
                      </p>
                    )}
                  </CardContent>
                  <CardFooter className="text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <BarChart3 className="h-3.5 w-3.5" />
                      {quiz.question_count} questions
                    </span>
                    {quiz.time_limit_seconds && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {Math.round(quiz.time_limit_seconds / 60)} min
                      </span>
                    )}
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          {data?.pagination && data.pagination.totalPages > 1 && (
            <div className="mt-10 flex justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
              >
                Précédent
              </Button>
              <span className="px-4 py-2 text-sm text-neutral-500">
                Page {page} / {data.pagination.totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setPage((p) => p + 1)}
                disabled={page >= data.pagination.totalPages}
              >
                Suivant
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
