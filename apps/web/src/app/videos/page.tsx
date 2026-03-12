"use client";

import { useState } from "react";
import { Video, Filter, Clock, Play } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { VideoPlayer } from "@/components/videos/VideoPlayer";
import { categorieLabel, niveauLabel, formatDuration } from "@/lib/utils";
import type { ArticleCategorie } from "@/types";

const categories = [
  { value: "all", label: "Toutes" },
  { value: "histoire", label: "Histoire" },
  { value: "geographie", label: "G\u00e9ographie" },
  { value: "geologie", label: "G\u00e9ologie" },
  { value: "sciences", label: "Sciences" },
];

const placeholderVideos = [
  {
    id: "v1",
    titre: "La formation des volcans",
    description:
      "Comprendre comment naissent les volcans et les diff\u00e9rents types d\u2019\u00e9ruptions volcaniques.",
    categorie: "geologie" as ArticleCategorie,
    niveau: "5eme",
    duree: 480,
    tags: ["volcan", "g\u00e9ologie", "magma"],
  },
  {
    id: "v2",
    titre: "La R\u00e9volution fran\u00e7aise en 10 minutes",
    description:
      "Un r\u00e9sum\u00e9 clair et concis des \u00e9v\u00e9nements majeurs de la R\u00e9volution fran\u00e7aise.",
    categorie: "histoire" as ArticleCategorie,
    niveau: "4eme",
    duree: 600,
    tags: ["r\u00e9volution", "1789", "France"],
  },
  {
    id: "v3",
    titre: "Les zones climatiques de la Terre",
    description:
      "D\u00e9couvrez les diff\u00e9rentes zones climatiques et leurs caract\u00e9ristiques.",
    categorie: "geographie" as ArticleCategorie,
    niveau: "6eme",
    duree: 420,
    tags: ["climat", "m\u00e9t\u00e9o", "g\u00e9ographie"],
  },
  {
    id: "v4",
    titre: "L\u2019Empire romain : grandeur et d\u00e9cadence",
    description:
      "L\u2019histoire compl\u00e8te de l\u2019Empire romain, de sa fondation \u00e0 sa chute.",
    categorie: "histoire" as ArticleCategorie,
    niveau: "6eme",
    duree: 900,
    tags: ["Rome", "empire", "antiquit\u00e9"],
  },
  {
    id: "v5",
    titre: "Le syst\u00e8me solaire",
    description:
      "Visite guid\u00e9e de notre syst\u00e8me solaire : plan\u00e8tes, satellites et curiosit\u00e9s.",
    categorie: "sciences" as ArticleCategorie,
    niveau: "tout-niveau",
    duree: 720,
    tags: ["plan\u00e8tes", "espace", "astronomie"],
  },
  {
    id: "v6",
    titre: "La tectonique des plaques",
    description:
      "Comment les plaques tectoniques se d\u00e9placent et fa\u00e7onnent la surface de la Terre.",
    categorie: "geologie" as ArticleCategorie,
    niveau: "5eme",
    duree: 540,
    tags: ["plaques", "continents", "g\u00e9ologie"],
  },
];

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? placeholderVideos
      : placeholderVideos.filter((v) => v.categorie === activeCategory);

  const featured = placeholderVideos[0];

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-orange-50 p-2 dark:bg-orange-900/20">
          <Video className="h-6 w-6 text-orange-600" />
        </div>
        <div>
          <h1 className="page-title">Vid\u00e9os \u00e9ducatives</h1>
          <p className="page-subtitle">
            Apprenez en vid\u00e9o avec nos contenus p\u00e9dagogiques class\u00e9s par
            th\u00e8me et niveau.
          </p>
        </div>
      </div>

      {/* Featured video */}
      <div className="mt-8">
        <VideoPlayer
          url=""
          title={featured.titre}
          duration={featured.duree}
          className="max-h-[400px]"
        />
      </div>

      {/* Filters */}
      <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="h-4 w-4 shrink-0 text-neutral-400" />
        {categories.map((c) => (
          <button
            key={c.value}
            onClick={() => setActiveCategory(c.value)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === c.value
                ? "bg-orange-600 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Videos grid */}
      <div className="grid-cards mt-8">
        {filtered.map((video) => (
          <Card
            key={video.id}
            hover
            onClick={() => setSelectedVideo(video.id)}
          >
            <CardContent>
              {/* Thumbnail placeholder */}
              <div className="relative mb-4 flex aspect-video items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-700">
                <Play className="h-10 w-10 text-neutral-400" />
                <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                  {formatDuration(video.duree)}
                </span>
              </div>
              <div className="mb-2 flex gap-2">
                <Badge variant={video.categorie}>
                  {categorieLabel(video.categorie)}
                </Badge>
                <Badge variant="default">{niveauLabel(video.niveau)}</Badge>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">
                {video.titre}
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {video.description}
              </p>
            </CardContent>
            <CardFooter className="text-xs text-neutral-400">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {formatDuration(video.duree)}
              </span>
              <div className="flex gap-1">
                {video.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-neutral-100 px-1.5 py-0.5 dark:bg-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline">Charger plus de vid\u00e9os</Button>
      </div>
    </div>
  );
}
