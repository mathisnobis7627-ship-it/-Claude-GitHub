"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Users, Ruler, Languages, Coins, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CountryMap } from "@/components/pays/CountryMap";
import { Button } from "@/components/ui/Button";
import { getCountryByCode } from "@/lib/api";
import { formatPopulation, formatArea } from "@/lib/utils";

interface CountryPageProps {
  params: Promise<{ code: string }>;
}

export default function CountryDetailPage({ params }: CountryPageProps) {
  const { code } = use(params);

  const { data: country, isLoading, error } = useQuery({
    queryKey: ["country", code],
    queryFn: () => getCountryByCode(code),
  });

  if (isLoading) {
    return (
      <div className="section flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
      </div>
    );
  }

  if (error || !country) {
    return (
      <div className="section text-center py-20">
        <p className="text-neutral-500">Pays introuvable.</p>
        <Link href="/pays" className="mt-4 inline-block text-primary-600 hover:underline">
          Retour aux pays
        </Link>
      </div>
    );
  }

  const languageList = country.languages ? Object.values(country.languages).join(", ") : "—";
  const currencyList = country.currencies
    ? Object.values(country.currencies).map((c) => `${c.name} (${c.symbol})`).join(", ")
    : "—";

  const infoItems = [
    { icon: MapPin, label: "Capitale", value: country.capital ?? "—" },
    { icon: Users, label: "Population", value: formatPopulation(country.population) },
    { icon: Ruler, label: "Superficie", value: country.area_km2 ? formatArea(country.area_km2) : "—" },
    { icon: Languages, label: "Langues", value: languageList },
    { icon: Coins, label: "Monnaie", value: currencyList },
  ];

  return (
    <div className="section">
      <Link
        href="/pays"
        className="mb-6 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour aux pays
      </Link>

      <div className="mb-8 flex items-center gap-3">
        <Badge variant="geographie">{country.code_iso3}</Badge>
        <h1 className="page-title">{country.name}</h1>
      </div>
      {country.official_name && (
        <p className="page-subtitle">{country.official_name}</p>
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CountryMap countryName={country.name} className="h-80" />
        </div>

        <Card>
          <h2 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
            Informations générales
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
                <dd className="text-sm font-medium text-neutral-900 dark:text-neutral-100 text-right max-w-[60%]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>

      {/* Detail sections */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {country.political_summary && (
          <Card>
            <CardContent>
              <h2 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
                Politique
              </h2>
              {country.government_type && (
                <p className="mb-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                  {country.government_type}
                </p>
              )}
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {country.political_summary}
              </p>
            </CardContent>
          </Card>
        )}

        {(country.gdp_usd || country.hdi) && (
          <Card>
            <CardContent>
              <h2 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
                Économie
              </h2>
              <dl className="space-y-2 text-sm">
                {country.gdp_usd && (
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">PIB</dt>
                    <dd className="font-medium">
                      {new Intl.NumberFormat("fr-FR", { style: "currency", currency: "USD", notation: "compact" }).format(country.gdp_usd)}
                    </dd>
                  </div>
                )}
                {country.hdi && (
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">IDH</dt>
                    <dd className="font-medium">{country.hdi}</dd>
                  </div>
                )}
              </dl>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Borders */}
      {country.borders.length > 0 && (
        <Card className="mt-8">
          <CardContent>
            <h2 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
              Pays frontaliers
            </h2>
            <div className="flex flex-wrap gap-2">
              {country.borders.map((border) => (
                <Link
                  key={border}
                  href={`/pays/${border.toLowerCase()}`}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-600 hover:bg-primary-100 hover:text-primary-700 dark:bg-neutral-700 dark:text-neutral-300"
                >
                  {border}
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

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
