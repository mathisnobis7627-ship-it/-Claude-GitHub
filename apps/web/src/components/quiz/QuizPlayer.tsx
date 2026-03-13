"use client";

import { useState, useEffect } from "react";
import { useQuiz } from "@/hooks/useQuiz";
import { submitQuiz } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, Trophy, RotateCcw, Loader2 } from "lucide-react";
import type { Quiz, QuizResult } from "@/types";

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
    result: localResult,
    start,
    answer,
    next,
    previous,
    reset,
    isFirst,
    isLast,
    hasAnswered,
  } = useQuiz(quiz);

  const [serverResult, setServerResult] = useState<QuizResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Submit to server when quiz completes
  useEffect(() => {
    if (status === "termine" && localResult && !serverResult && !isSubmitting) {
      setIsSubmitting(true);
      const answersObj: Record<string, string> = {};
      localResult.answers.forEach((v, k) => {
        answersObj[k] = v;
      });
      submitQuiz(quiz.id, answersObj)
        .then((res) => setServerResult(res))
        .catch(() => {
          // Fallback: show local result without server scoring
        })
        .finally(() => setIsSubmitting(false));
    }
  }, [status, localResult, serverResult, isSubmitting, quiz.id]);

  const handleReset = () => {
    setServerResult(null);
    reset();
  };

  // ── Idle screen ───────────────────────────
  if (status === "idle") {
    return (
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          {quiz.title}
        </h2>
        {quiz.description && (
          <p className="mt-2 text-neutral-500 dark:text-neutral-400">
            {quiz.description}
          </p>
        )}
        <div className="mt-4 flex justify-center gap-4 text-sm text-neutral-400">
          <span>{totalQuestions} questions</span>
          {quiz.time_limit_seconds && (
            <>
              <span>&middot;</span>
              <span>{Math.round(quiz.time_limit_seconds / 60)} min</span>
            </>
          )}
        </div>
        <Button onClick={start} size="lg" className="mt-8">
          Commencer le quiz
        </Button>
      </div>
    );
  }

  // ── Results screen ────────────────────────
  if (status === "termine") {
    if (isSubmitting) {
      return (
        <div className="flex flex-col items-center justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
          <p className="mt-4 text-neutral-500">Calcul du score...</p>
        </div>
      );
    }

    const score = serverResult?.correct_answers ?? 0;
    const total = serverResult?.total_questions ?? totalQuestions;
    const pct = serverResult?.percentage ?? (total > 0 ? Math.round((score / total) * 100) : 0);

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
          Quiz terminé !
        </h2>
        <p className="mt-2 text-4xl font-extrabold text-primary-600">
          {score}/{total}
        </p>
        <p className="text-sm text-neutral-500">{pct}% de bonnes réponses</p>

        {/* Detailed results from server */}
        {serverResult?.details && (
          <div className="mt-6 space-y-3 text-left">
            {serverResult.details.map((detail, idx) => {
              const q = quiz.questions?.find((qq) => qq.id === detail.question_id);
              return (
                <div
                  key={detail.question_id}
                  className={cn(
                    "rounded-lg border p-3",
                    detail.correct
                      ? "border-secondary-200 bg-secondary-50 dark:border-secondary-800 dark:bg-secondary-900/20"
                      : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
                  )}
                >
                  <div className="flex items-start gap-2">
                    {detail.correct ? (
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary-600" />
                    ) : (
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                        {idx + 1}. {q?.question_text ?? `Question ${idx + 1}`}
                      </p>
                      {detail.explanation && (
                        <p className="mt-1 text-xs text-neutral-400">
                          {detail.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <Button onClick={handleReset} variant="outline" className="mt-6">
          <RotateCcw className="h-4 w-4" />
          Recommencer
        </Button>
      </div>
    );
  }

  // ── Question screen ───────────────────────
  if (!currentQuestion) return null;

  const selectedAnswer = answers.get(currentQuestion.id);
  const options = currentQuestion.options ?? [];

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
        {currentQuestion.question_text}
      </h3>

      {/* Options (QCM) */}
      {currentQuestion.question_type === "qcm" && options.length > 0 && (
        <div className="mt-4 space-y-2">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => answer(currentQuestion.id, opt.id)}
              className={cn(
                "w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors",
                selectedAnswer === opt.id
                  ? "border-primary-500 bg-primary-50 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                  : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-750",
              )}
            >
              {opt.option_text}
            </button>
          ))}
        </div>
      )}

      {/* True/False */}
      {currentQuestion.question_type === "vrai_faux" && (
        <div className="mt-4 flex gap-3">
          {options.length > 0 ? (
            options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => answer(currentQuestion.id, opt.id)}
                className={cn(
                  "flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors",
                  selectedAnswer === opt.id
                    ? "border-primary-500 bg-primary-50 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                    : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
                )}
              >
                {opt.option_text}
              </button>
            ))
          ) : (
            ["Vrai", "Faux"].map((label) => (
              <button
                key={label}
                onClick={() => answer(currentQuestion.id, label)}
                className={cn(
                  "flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors",
                  selectedAnswer === label
                    ? "border-primary-500 bg-primary-50 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                    : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
                )}
              >
                {label}
              </button>
            ))
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Button
          variant="outline"
          onClick={previous}
          disabled={isFirst}
        >
          Précédent
        </Button>
        <Button onClick={next} disabled={!hasAnswered}>
          {isLast ? "Terminer" : "Suivant"}
        </Button>
      </div>
    </div>
  );
}
