'use client';

import { QuizPlayer } from '@/components/quiz/QuizPlayer';

interface QuizDetailProps {
  params: Promise<{ id: string }>;
}

export default function QuizDetailPage({ params }: QuizDetailProps) {
  return (
    <div className="section">
      <QuizPlayer />
    </div>
  );
}
