"use client";

import { useState, useCallback, useMemo } from "react";
import type { Quiz, QuizQuestion } from "@/types";

type QuizStatus = "idle" | "en-cours" | "termine";

interface QuizState {
  status: QuizStatus;
  currentIndex: number;
  answers: Map<string, string>;
  startedAt: number | null;
}

export interface LocalQuizResult {
  quizId: string;
  score: number;
  total: number;
  answers: Map<string, string>;
  duree: number;
  date: string;
}

export function useQuiz(quiz: Quiz | null) {
  const questions = quiz?.questions ?? [];

  const [state, setState] = useState<QuizState>({
    status: "idle",
    currentIndex: 0,
    answers: new Map(),
    startedAt: null,
  });

  const currentQuestion: QuizQuestion | null = useMemo(() => {
    return questions[state.currentIndex] ?? null;
  }, [questions, state.currentIndex]);

  const totalQuestions = questions.length;
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
      const nextIndex = prev.currentIndex + 1;
      if (nextIndex >= questions.length) {
        return { ...prev, status: "termine" };
      }
      return { ...prev, currentIndex: nextIndex };
    });
  }, [questions.length]);

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

  const result: LocalQuizResult | null = useMemo(() => {
    if (!quiz || state.status !== "termine") return null;

    const duree = state.startedAt
      ? Math.round((Date.now() - state.startedAt) / 1000)
      : 0;

    return {
      quizId: quiz.id,
      score: 0, // Determined server-side via submitQuiz
      total: questions.length,
      answers: state.answers,
      duree,
      date: new Date().toISOString(),
    };
  }, [quiz, questions, state]);

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
