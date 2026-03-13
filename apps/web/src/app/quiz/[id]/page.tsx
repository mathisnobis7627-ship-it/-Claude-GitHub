"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { QuizPlayer } from "@/components/quiz/QuizPlayer";
import { Button } from "@/components/ui/Button";
import { getQuizById } from "@/lib/api";

interface QuizPageProps {
  params: Promise<{ id: string }>;
}

export default function QuizPage({ params }: QuizPageProps) {
  const { id } = use(params);

  const { data: quiz, isLoading, error } = useQuery({
    queryKey: ["quiz", id],
    queryFn: () => getQuizById(id),
  });

  if (isLoading) {
    return (
      <div className="section flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
      </div>
    );
  }

  if (error || !quiz) {
    return (
      <div className="section text-center py-20">
        <p className="text-neutral-500">Quiz introuvable.</p>
        <Link href="/quiz" className="mt-4 inline-block text-primary-600 hover:underline">
          Retour aux quiz
        </Link>
      </div>
    );
  }

  return (
    <div className="section">
      <Link
        href="/quiz"
        className="mb-6 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour aux quiz
      </Link>
      <QuizPlayer quiz={quiz} />
    </div>
  );
}
