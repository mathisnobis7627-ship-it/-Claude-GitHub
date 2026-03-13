"use client";

import { useState } from "react";
import { Video, Filter, Clock, Play, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { VideoPlayer } from "@/components/videos/VideoPlayer";
import { categorieLabel, formatDuration } from "@/lib/utils";
import { getVideos } from "@/lib/api";

const categories = [
  { value: "all", label: "Toutes" },
  { value: "histoire", label: "Histoire" },
  { value: "geographie", label: "Géographie" },
  { value: "geologie", label: "Géologie" },
  { value: "sciences", label: "Sciences" },
];

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [page, setPage] = useState(1);

  const category = activeCategory === "all" ? undefined : activeCategory;
  const { data, isLoading } = useQuery({
    queryKey: ["videos", page, category],
    queryFn: () => getVideos(page, 20, category),
  });

  const videos = data?.data ?? [];
  const featured = videos[0];

  return (
    <div className="section">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-orange-50 p-2 dark:bg-orange-900/20">
          <Video className="h-6 w-6 text-orange-600" />
        </div>
        <div>
          <h1 className="page-title">Vidéos éducatives</h1>
          <p className="page-subtitle">
            Apprenez en vidéo avec nos contenus pédagogiques classés par
            thème et niveau.
          </p>
        </div>
      </div>

      {/* Featured video */}
      {featured && (
        <div className="mt-8">
          <VideoPlayer
            url={`https://www.youtube.com/embed/${featured.youtube_id}`}
            title={featured.title}
            thumbnail={featured.thumbnail_url ?? undefined}
            duration={featured.duration_seconds ?? undefined}
            className="max-h-[400px]"
          />
        </div>
      )}

      {/* Filters */}
      <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="h-4 w-4 shrink-0 text-neutral-400" />
        {categories.map((c) => (
          <button
            key={c.value}
            onClick={() => { setActiveCategory(c.value); setPage(1); }}
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

      {isLoading ? (
        <div className="mt-16 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
        </div>
      ) : (
        <>
          <div className="grid-cards mt-8">
            {videos.map((video) => (
              <Card key={video.id} hover>
                <CardContent>
                  <div className="relative mb-4 flex aspect-video items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-700 overflow-hidden">
                    {video.thumbnail_url ? (
                      <img src={video.thumbnail_url} alt={video.title} className="absolute inset-0 h-full w-full object-cover" />
                    ) : (
                      <Play className="h-10 w-10 text-neutral-400" />
                    )}
                    {video.duration_seconds && (
                      <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                        {formatDuration(video.duration_seconds)}
                      </span>
                    )}
                  </div>
                  <div className="mb-2 flex gap-2">
                    {video.category && (
                      <Badge variant={(video.category as "histoire" | "geographie") || "default"}>
                        {categorieLabel(video.category)}
                      </Badge>
                    )}
                    <Badge variant="default">{video.difficulty_level}</Badge>
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
                      {video.description}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="text-xs text-neutral-400">
                  {video.duration_seconds && (
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {formatDuration(video.duration_seconds)}
                    </span>
                  )}
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

          {data?.pagination && data.pagination.totalPages > 1 && (
            <div className="mt-10 flex justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
              >
                Précédent
              </Button>
              <span className="px-4 py-2 text-sm text-neutral-500">
                Page {page} / {data.pagination.totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setPage((p) => p + 1)}
                disabled={page >= data.pagination.totalPages}
              >
                Suivant
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
