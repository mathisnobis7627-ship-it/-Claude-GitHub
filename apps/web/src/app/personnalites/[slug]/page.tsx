"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Award, Quote, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getPersonBySlug } from "@/lib/api";

interface PersonPageProps {
  params: Promise<{ slug: string }>;
}

export default function PersonDetailPage({ params }: PersonPageProps) {
  const { slug } = use(params);

  const { data: person, isLoading, error } = useQuery({
    queryKey: ["person", slug],
    queryFn: () => getPersonBySlug(slug),
  });

  if (isLoading) {
    return (
      <div className="section flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
      </div>
    );
  }

  if (error || !person) {
    return (
      <div className="section text-center py-20">
        <p className="text-neutral-500">Personnalité introuvable.</p>
        <Link href="/personnalites" className="mt-4 inline-block text-primary-600 hover:underline">
          Retour aux personnalités
        </Link>
      </div>
    );
  }

  return (
    <div className="section">
      <Link
        href="/personnalites"
        className="mb-6 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour aux personnalités
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-accent-100 text-3xl font-bold text-accent-700 dark:bg-accent-900/30 dark:text-accent-400">
          {(person.first_name?.[0] ?? "") + (person.last_name?.[0] ?? "")}
        </div>
        <div>
          <h1 className="page-title">{person.full_name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {person.birth_date ?? "?"} {person.death_date ? `– ${person.death_date}` : ""}
            </span>
            {person.birth_place && (
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {person.birth_place}
              </span>
            )}
          </div>
          <div className="mt-3 flex gap-2">
            {person.nationality && <Badge variant="default">{person.nationality}</Badge>}
            <Badge variant="histoire">{person.category}</Badge>
            {person.era && <Badge variant="sciences">{person.era}</Badge>}
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <Card>
            <CardContent>
              <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
                Biographie
              </h2>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400 whitespace-pre-line">
                {person.biography_text ?? person.summary ?? "Biographie à venir…"}
              </p>
            </CardContent>
          </Card>

          {person.notable_works.length > 0 && (
            <Card>
              <CardContent>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
                  <Award className="h-5 w-5 text-accent-500" />
                  Réalisations majeures
                </h2>
                <ul className="space-y-3">
                  {person.notable_works.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {person.quotes.length > 0 && (
            <Card>
              <CardContent>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
                  <Quote className="h-5 w-5 text-primary-500" />
                  Citations célèbres
                </h2>
                <div className="space-y-4">
                  {person.quotes.map((quote, i) => (
                    <blockquote key={i} className="border-l-4 border-primary-300 pl-4 italic text-neutral-600 dark:border-primary-700 dark:text-neutral-400">
                      &laquo; {quote} &raquo;
                    </blockquote>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Fiche rapide
              </h3>
              <dl className="space-y-2 text-sm">
                {[
                  { label: "Naissance", value: person.birth_date ?? "—" },
                  { label: "Décès", value: person.death_date ?? "—" },
                  { label: "Nationalité", value: person.nationality ?? "—" },
                  { label: "Domaine", value: person.category },
                  { label: "Époque", value: person.era ?? "—" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-neutral-100 pb-2 dark:border-neutral-700">
                    <dt className="text-neutral-500">{item.label}</dt>
                    <dd className="font-medium text-neutral-900 dark:text-neutral-100">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/personnalites">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4" />
            Toutes les personnalités
          </Button>
        </Link>
      </div>
    </div>
  );
}
