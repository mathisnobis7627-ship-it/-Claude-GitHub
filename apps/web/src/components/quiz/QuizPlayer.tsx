"use client";

import { useQuiz } from "@/hooks/useQuiz";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, Trophy, RotateCcw } from "lucide-react";
import type { Quiz } from "@/types";

interface QuizPlayerProps {
  quiz: Quiz;
}

export function QuizPlayer({ quiz }: QuizPlayerProps) {
  const {
    status,
    currentQuestion,
    currentIndex,
    totalQuestions,
    progress,
    answers,
    result,
    start,
    answer,
    next,
    previous,
    reset,
    isFirst,
    isLast,
    hasAnswered,
  } = useQuiz(quiz);

  // ── Idle screen ───────────────────────────
  if (status === "idle") {
    return (
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          {quiz.titre}
        </h2>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          {quiz.description}
        </p>
        <div className="mt-4 flex justify-center gap-4 text-sm text-neutral-400">
          <span>{totalQuestions} questions</span>
          <span>&middot;</span>
          <span>{quiz.duree} min</span>
        </div>
        <Button onClick={start} size="lg" className="mt-8">
          Commencer le quiz
        </Button>
      </div>
    );
  }

  // ── Results screen ────────────────────────
  if (status === "termine" && result) {
    const pct = Math.round((result.score / result.total) * 100);
    return (
      <div className="mx-auto max-w-lg text-center">
        <Trophy
          className={cn(
            "mx-auto h-16 w-16",
            pct >= 80
              ? "text-accent-500"
              : pct >= 50
                ? "text-secondary-500"
                : "text-neutral-400",
          )}
        />
        <h2 className="mt-4 text-2xl font-bold text-neutral-900 dark:text-white">
          Quiz termin\u00e9 !
        </h2>
        <p className="mt-2 text-4xl font-extrabold text-primary-600">
          {result.score}/{result.total}
        </p>
        <p className="text-sm text-neutral-500">{pct}% de bonnes r\u00e9ponses</p>

        {/* Answers recap */}
        <div className="mt-6 space-y-3 text-left">
          {quiz.questions.map((q, idx) => {
            const r = result.reponses.find((x) => x.questionId === q.id);
            return (
              <div
                key={q.id}
                className={cn(
                  "rounded-lg border p-3",
                  r?.correct
                    ? "border-secondary-200 bg-secondary-50 dark:border-secondary-800 dark:bg-secondary-900/20"
                    : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
                )}
              >
                <div className="flex items-start gap-2">
                  {r?.correct ? (
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary-600" />
                  ) : (
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                      {idx + 1}. {q.enonce}
                    </p>
                    {!r?.correct && (
                      <p className="mt-1 text-xs text-neutral-500">
                        R\u00e9ponse correcte : {q.reponseCorrecte}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-neutral-400">
                      {q.explication}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Button onClick={reset} variant="outline" className="mt-6">
          <RotateCcw className="h-4 w-4" />
          Recommencer
        </Button>
      </div>
    );
  }

  // ── Question screen ───────────────────────
  if (!currentQuestion) return null;

  const selectedAnswer = answers.get(currentQuestion.id);

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="mb-1 flex justify-between text-xs text-neutral-400">
          <span>
            Question {currentIndex + 1} sur {totalQuestions}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-700">
          <div
            className="h-2 rounded-full bg-primary-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
        {currentQuestion.enonce}
      </h3>

      {/* Options */}
      {currentQuestion.type === "qcm" && currentQuestion.options && (
        <div className="mt-4 space-y-2">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => answer(currentQuestion.id, option)}
              className={cn(
                "w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors",
                selectedAnswer === option
                  ? "border-primary-500 bg-primary-50 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                  : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-750",
              )}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* True/False */}
      {currentQuestion.type === "vrai-faux" && (
        <div className="mt-4 flex gap-3">
          {["Vrai", "Faux"].map((opt) => (
            <button
              key={opt}
              onClick={() => answer(currentQuestion.id, opt)}
              className={cn(
                "flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors",
                selectedAnswer === opt
                  ? "border-primary-500 bg-primary-50 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                  : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Button
          variant="outline"
          onClick={previous}
          disabled={isFirst}
        >
          Pr\u00e9c\u00e9dent
        </Button>
        <Button onClick={next} disabled={!hasAnswered}>
          {isLast ? "Terminer" : "Suivant"}
        </Button>
      </div>
    </div>
  );
}
