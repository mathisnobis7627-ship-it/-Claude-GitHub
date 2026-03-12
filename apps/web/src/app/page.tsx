import Link from "next/link";
import {
  Globe,
  BookOpen,
  Users,
  Clock,
  GraduationCap,
  HelpCircle,
  Video,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const features = [
  {
    icon: BookOpen,
    title: "Encyclop\u00e9die",
    description:
      "Des milliers d\u2019articles sur la g\u00e9ographie, l\u2019histoire, la g\u00e9ologie et les sciences.",
    href: "/encyclopedie",
    color: "text-primary-600",
    bg: "bg-primary-50 dark:bg-primary-900/20",
  },
  {
    icon: Globe,
    title: "Pays du monde",
    description:
      "Explorez chaque pays : donn\u00e9es, cartes, histoire et culture.",
    href: "/pays",
    color: "text-secondary-600",
    bg: "bg-secondary-50 dark:bg-secondary-900/20",
  },
  {
    icon: Users,
    title: "Personnalit\u00e9s",
    description:
      "D\u00e9couvrez les grandes figures qui ont fa\u00e7onn\u00e9 le monde.",
    href: "/personnalites",
    color: "text-accent-600",
    bg: "bg-accent-50 dark:bg-accent-900/20",
  },
  {
    icon: Clock,
    title: "Chronologie",
    description:
      "Parcourez l\u2019histoire \u00e0 travers une frise chronologique interactive.",
    href: "/chronologie",
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: GraduationCap,
    title: "Programme scolaire",
    description:
      "Contenus align\u00e9s sur le programme fran\u00e7ais de la 6\u00e8me \u00e0 la Terminale.",
    href: "/programme",
    color: "text-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    icon: HelpCircle,
    title: "Quiz",
    description:
      "Testez vos connaissances avec des quiz interactifs et progressifs.",
    href: "/quiz",
    color: "text-rose-600",
    bg: "bg-rose-50 dark:bg-rose-900/20",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hero-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              D\u00e9couvrez le monde avec{" "}
              <span className="text-accent-300">Atlas</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-100 sm:text-xl">
              La plateforme \u00e9ducative qui rend la g\u00e9ographie,
              l&apos;histoire et les sciences accessibles et passionnantes.
              Con\u00e7ue pour les \u00e9l\u00e8ves de la 6\u00e8me \u00e0 la
              Terminale.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/encyclopedie">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                  Commencer l&apos;exploration
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/programme">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Voir le programme scolaire
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="section">
        <div className="mb-10 text-center">
          <h2 className="page-title">
            Tout pour apprendre, tout en un seul endroit
          </h2>
          <p className="page-subtitle">
            Atlas rassemble des ressources p\u00e9dagogiques riches et vari\u00e9es pour accompagner votre apprentissage.
          </p>
        </div>

        <div className="grid-cards">
          {features.map((f) => (
            <Link key={f.href} href={f.href}>
              <Card hover className="h-full">
                <CardContent>
                  <div
                    className={`mb-4 inline-flex rounded-lg p-3 ${f.bg}`}
                  >
                    <f.icon className={`h-6 w-6 ${f.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {f.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:grid-cols-4">
          {[
            { value: "195", label: "Pays document\u00e9s" },
            { value: "2 000+", label: "Articles" },
            { value: "500+", label: "Quiz disponibles" },
            { value: "7", label: "Niveaux scolaires" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-primary-600">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Videos */}
      <section className="section">
        <div className="rounded-2xl bg-gradient-to-r from-secondary-600 to-secondary-800 px-8 py-12 text-center sm:px-16">
          <Video className="mx-auto h-10 w-10 text-white/80" />
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Apprenez en vid\u00e9o
          </h2>
          <p className="mt-2 text-secondary-100">
            Des centaines de vid\u00e9os \u00e9ducatives pour compl\u00e9ter vos cours.
          </p>
          <Link href="/videos" className="mt-6 inline-block">
            <Button
              size="lg"
              className="bg-white text-secondary-700 hover:bg-secondary-50"
            >
              D\u00e9couvrir les vid\u00e9os
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
