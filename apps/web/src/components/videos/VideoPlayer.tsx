"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn, formatDuration } from "@/lib/utils";

interface VideoPlayerProps {
  url: string;
  title: string;
  thumbnail?: string;
  duration?: number;
  className?: string;
}

/**
 * Responsive video embed player.
 * Supports YouTube and generic iframe embeds.
 * Shows a thumbnail with play button before loading the iframe.
 */
export function VideoPlayer({
  url,
  title,
  thumbnail,
  duration,
  className,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className={cn("relative aspect-video w-full overflow-hidden rounded-xl", className)}>
        <iframe
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className={cn(
        "group relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-900",
        className,
      )}
    >
      {/* Thumbnail */}
      {thumbnail && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-60"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
          <Play className="h-7 w-7 text-neutral-900 ml-1" />
        </div>
      </div>

      {/* Title + duration */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h4 className="text-left text-sm font-medium text-white">{title}</h4>
        {duration && (
          <span className="mt-1 inline-block rounded bg-black/50 px-2 py-0.5 text-xs text-white/80">
            {formatDuration(duration)}
          </span>
        )}
      </div>
    </button>
  );
}
