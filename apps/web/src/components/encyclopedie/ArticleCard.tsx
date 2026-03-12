import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { categorieLabel, formatRelativeDate, truncate } from "@/lib/utils";
import type { Article, ArticleCategorie } from "@/types";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/encyclopedie/${article.slug}`}>
      <Card hover className="flex h-full flex-col overflow-hidden p-0">
        {article.image && (
          <div className="relative h-40 w-full overflow-hidden">
            <Image
              src={article.image}
              alt={article.titre}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant={article.categorie as ArticleCategorie}>
              {categorieLabel(article.categorie)}
            </Badge>
            <span className="text-xs text-neutral-400">
              {formatRelativeDate(article.datePublication)}
            </span>
          </div>
          <h3 className="mb-2 text-base font-semibold text-neutral-900 dark:text-neutral-100">
            {article.titre}
          </h3>
          <p className="flex-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            {truncate(article.resume, 150)}
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
