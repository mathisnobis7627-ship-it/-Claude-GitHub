"use client";

import { useState, useCallback, useMemo } from "react";
import type { Quiz, QuizQuestion, QuizResult } from "@/types";

type QuizStatus = "idle" | "en-cours" | "termine";

interface QuizState {
  status: QuizStatus;
  currentIndex: number;
  answers: Map<string, string>;
  startedAt: number | null;
}

export function useQuiz(quiz: Quiz | null) {
  const [state, setState] = useState<QuizState>({
    status: "idle",
    currentIndex: 0,
    answers: new Map(),
    startedAt: null,
  });

  const currentQuestion: QuizQuestion | null = useMemo(() => {
    if (!quiz) return null;
    return quiz.questions[state.currentIndex] ?? null;
  }, [quiz, state.currentIndex]);

  const totalQuestions = quiz?.questions.length ?? 0;
  const progress = totalQuestions > 0 ? (state.currentIndex / totalQuestions) * 100 : 0;

  const start = useCallback(() => {
    setState({
      status: "en-cours",
      currentIndex: 0,
      answers: new Map(),
      startedAt: Date.now(),
    });
  }, []);

  const answer = useCallback(
    (questionId: string, response: string) => {
      setState((prev) => {
        const newAnswers = new Map(prev.answers);
        newAnswers.set(questionId, response);
        return { ...prev, answers: newAnswers };
      });
    },
    [],
  );

  const next = useCallback(() => {
    setState((prev) => {
      if (!quiz) return prev;
      const nextIndex = prev.currentIndex + 1;
      if (nextIndex >= quiz.questions.length) {
        return { ...prev, status: "termine" };
      }
      return { ...prev, currentIndex: nextIndex };
    });
  }, [quiz]);

  const previous = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIndex: Math.max(0, prev.currentIndex - 1),
    }));
  }, []);

  const reset = useCallback(() => {
    setState({
      status: "idle",
      currentIndex: 0,
      answers: new Map(),
      startedAt: null,
    });
  }, []);

  const result: QuizResult | null = useMemo(() => {
    if (!quiz || state.status !== "termine") return null;

    const reponses = quiz.questions.map((q) => {
      const userAnswer = state.answers.get(q.id) ?? "";
      return {
        questionId: q.id,
        reponse: userAnswer,
        correct: userAnswer === q.reponseCorrecte,
      };
    });

    const score = reponses.filter((r) => r.correct).length;
    const duree = state.startedAt
      ? Math.round((Date.now() - state.startedAt) / 1000)
      : 0;

    return {
      quizId: quiz.id,
      score,
      total: quiz.questions.length,
      reponses,
      duree,
      date: new Date().toISOString(),
    };
  }, [quiz, state]);

  return {
    status: state.status,
    currentQuestion,
    currentIndex: state.currentIndex,
    totalQuestions,
    progress,
    answers: state.answers,
    result,
    start,
    answer,
    next,
    previous,
    reset,
    isFirst: state.currentIndex === 0,
    isLast: state.currentIndex === totalQuestions - 1,
    hasAnswered: currentQuestion ? state.answers.has(currentQuestion.id) : false,
  };
}
