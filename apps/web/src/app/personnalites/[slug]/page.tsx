import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Award, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PersonPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PersonDetailPage({ params }: PersonPageProps) {
  const { slug } = await params;

  return (
    <div className="section">
      <Link
        href="/personnalites"
        className="mb-6 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour aux personnalit\u00e9s
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-accent-100 text-3xl font-bold text-accent-700 dark:bg-accent-900/30 dark:text-accent-400">
          {slug.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1 className="page-title capitalize">{slug.replace(/-/g, " ")}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Dates \u00e0 venir
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Nationalit\u00e9 \u00e0 venir
            </span>
          </div>
          <div className="mt-3 flex gap-2">
            <Badge variant="histoire">Histoire</Badge>
            <Badge variant="default">Domaine \u00e0 d\u00e9finir</Badge>
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="space-y-8 lg:col-span-2">
          <Card>
            <CardContent>
              <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
                Biographie
              </h2>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                La biographie d\u00e9taill\u00e9e de cette personnalit\u00e9 sera
                disponible prochainement. Elle couvrira les \u00e9v\u00e9nements
                cl\u00e9s de sa vie, son parcours, ses influences et son impact
                sur le monde.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
                <Award className="h-5 w-5 text-accent-500" />
                R\u00e9alisations majeures
              </h2>
              <ul className="space-y-3">
                {[
                  "R\u00e9alisation remarquable dans son domaine",
                  "Contribution majeure \u00e0 la soci\u00e9t\u00e9",
                  "Innovation ou d\u00e9couverte significative",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
                <Quote className="h-5 w-5 text-primary-500" />
                Citations c\u00e9l\u00e8bres
              </h2>
              <blockquote className="border-l-4 border-primary-300 pl-4 italic text-neutral-600 dark:border-primary-700 dark:text-neutral-400">
                &laquo; Citation c\u00e9l\u00e8bre \u00e0 venir\u2026 &raquo;
              </blockquote>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Fiche rapide
              </h3>
              <dl className="space-y-2 text-sm">
                {[
                  { label: "Naissance", value: "\u2014" },
                  { label: "D\u00e9c\u00e8s", value: "\u2014" },
                  { label: "Nationalit\u00e9", value: "\u2014" },
                  { label: "Domaine", value: "\u2014" },
                  { label: "\u00c9poque", value: "\u2014" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between border-b border-neutral-100 pb-2 dark:border-neutral-700"
                  >
                    <dt className="text-neutral-500">{item.label}</dt>
                    <dd className="font-medium text-neutral-900 dark:text-neutral-100">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Liens connexes
              </h3>
              <ul className="space-y-2">
                {["Articles li\u00e9s", "Quiz associ\u00e9s", "Vid\u00e9os"].map(
                  (link) => (
                    <li key={link}>
                      <span className="text-sm text-primary-600 hover:underline dark:text-primary-400">
                        {link}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/personnalites">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4" />
            Toutes les personnalit\u00e9s
          </Button>
        </Link>
      </div>
    </div>
  );
}
