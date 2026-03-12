"use client";

import { QuizPlayer } from "@/components/quiz/QuizPlayer";
import type { Quiz } from "@/types";

/**
 * In production this page would fetch the quiz by ID from the API.
 * For now we render a static placeholder quiz.
 */
const placeholderQuiz: Quiz = {
  id: "q1",
  titre: "Les capitales du monde",
  description:
    "Testez vos connaissances sur les capitales des pays du monde. 5 questions pour commencer !",
  categorie: "geographie",
  niveau: "6eme",
  duree: 5,
  questions: [
    {
      id: "q1-1",
      enonce: "Quelle est la capitale de la France ?",
      type: "qcm",
      options: ["Lyon", "Paris", "Marseille", "Toulouse"],
      reponseCorrecte: "Paris",
      explication:
        "Paris est la capitale de la France depuis le Xe si\u00e8cle.",
    },
    {
      id: "q1-2",
      enonce: "Quelle est la capitale du Japon ?",
      type: "qcm",
      options: ["Osaka", "Kyoto", "Tokyo", "Yokohama"],
      reponseCorrecte: "Tokyo",
      explication:
        "Tokyo est la capitale du Japon depuis 1868 (restauration Meiji).",
    },
    {
      id: "q1-3",
      enonce: "Le Caire est la capitale de l\u2019\u00c9gypte.",
      type: "vrai-faux",
      reponseCorrecte: "Vrai",
      explication:
        "Le Caire, avec plus de 20 millions d\u2019habitants, est bien la capitale de l\u2019\u00c9gypte.",
    },
    {
      id: "q1-4",
      enonce: "Quelle est la capitale de l\u2019Australie ?",
      type: "qcm",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      reponseCorrecte: "Canberra",
      explication:
        "Canberra a \u00e9t\u00e9 choisie comme capitale de compromis entre Sydney et Melbourne en 1913.",
    },
    {
      id: "q1-5",
      enonce: "Quelle est la capitale du Br\u00e9sil ?",
      type: "qcm",
      options: [
        "Rio de Janeiro",
        "S\u00e3o Paulo",
        "Bras\u00edlia",
        "Salvador",
      ],
      reponseCorrecte: "Bras\u00edlia",
      explication:
        "Bras\u00edlia est devenue la capitale du Br\u00e9sil en 1960, rempla\u00e7ant Rio de Janeiro.",
    },
  ],
};

export default function QuizPage() {
  return (
    <div className="section">
      <QuizPlayer quiz={placeholderQuiz} />
    </div>
  );
}
