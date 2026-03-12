import Link from "next/link";
import { ArrowLeft, MapPin, Users, Ruler, Languages, Coins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CountryMap } from "@/components/pays/CountryMap";
import { Button } from "@/components/ui/Button";

interface CountryPageProps {
  params: Promise<{ code: string }>;
}

export default async function CountryDetailPage({ params }: CountryPageProps) {
  const { code } = await params;
  const upperCode = code.toUpperCase();

  const infoItems = [
    { icon: MapPin, label: "Capitale", value: "\u2014" },
    { icon: Users, label: "Population", value: "\u2014" },
    { icon: Ruler, label: "Superficie", value: "\u2014" },
    { icon: Languages, label: "Langues", value: "\u2014" },
    { icon: Coins, label: "Monnaie", value: "\u2014" },
  ];

  return (
    <div className="section">
      {/* Back link */}
      <Link
        href="/pays"
        className="mb-6 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour aux pays
      </Link>

      <div className="mb-8 flex items-center gap-3">
        <Badge variant="geographie">{upperCode}</Badge>
        <h1 className="page-title">Fiche pays &mdash; {upperCode}</h1>
      </div>
      <p className="page-subtitle">
        Informations compl\u00e8tes sur la g\u00e9ographie, l&apos;histoire et la culture.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Map */}
        <div className="lg:col-span-2">
          <CountryMap countryName={upperCode} className="h-80" />
        </div>

        {/* Quick info */}
        <Card>
          <h2 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Informations g\u00e9n\u00e9rales
          </h2>
          <dl className="space-y-3">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between border-b border-neutral-100 pb-2 dark:border-neutral-700"
              >
                <dt className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </dt>
                <dd className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>

      {/* Detail sections */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {[
          {
            title: "G\u00e9ographie",
            desc: "Climat, relief, ressources naturelles et caract\u00e9ristiques g\u00e9ographiques du pays.",
          },
          {
            title: "Histoire",
            desc: "Les grandes p\u00e9riodes historiques et \u00e9v\u00e9nements marquants du pays.",
          },
          {
            title: "\u00c9conomie",
            desc: "Les secteurs \u00e9conomiques cl\u00e9s, le PIB et les principaux partenaires commerciaux.",
          },
          {
            title: "Culture",
            desc: "Traditions, gastronomie, arts et patrimoine culturel du pays.",
          },
        ].map((section) => (
          <Card key={section.title}>
            <CardContent>
              <h2 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
                {section.title}
              </h2>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {section.desc}
              </p>
              <p className="mt-4 text-sm italic text-neutral-400 dark:text-neutral-500">
                Contenu d\u00e9taill\u00e9 \u00e0 venir\u2026
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Points cl\u00e9s */}
      <Card className="mt-8">
        <CardContent>
          <h2 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Points cl\u00e9s
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              "Position g\u00e9ographique strat\u00e9gique",
              "Patrimoine historique riche",
              "Diversit\u00e9 culturelle remarquable",
              "Ressources naturelles vari\u00e9es",
            ].map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                {point}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Link href="/pays">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4" />
            Tous les pays
          </Button>
        </Link>
      </div>
    </div>
  );
}
