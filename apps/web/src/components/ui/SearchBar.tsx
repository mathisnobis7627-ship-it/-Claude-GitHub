"use client";

import { useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  expanded?: boolean;
}

export function SearchBar({
  className,
  placeholder = "Rechercher un pays, une personnalité, un article\u2026",
  expanded = false,
}: SearchBarProps) {
  const { query, setQuery, results, isLoading, clear, hasResults, isActive } =
    useSearch();
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const showDropdown = isFocused && isActive;

  return (
    <div className={cn("relative", expanded ? "w-full" : "w-full max-w-md", className)}>
      <div
        className={cn(
          "flex items-center gap-2 rounded-lg border bg-white px-3 py-2 transition-colors dark:bg-neutral-800",
          isFocused
            ? "border-primary-500 ring-2 ring-primary-500/20"
            : "border-neutral-300 dark:border-neutral-600",
        )}
      >
        <Search className="h-4 w-4 shrink-0 text-neutral-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-neutral-100"
        />
        {query && (
          <button
            onClick={() => {
              clear();
              inputRef.current?.focus();
            }}
            className="rounded p-0.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Dropdown results */}
      {showDropdown && (
        <div className="absolute top-full z-50 mt-1 w-full rounded-lg border border-neutral-200 bg-white py-2 shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
          {isLoading && (
            <p className="px-4 py-3 text-sm text-neutral-500">
              Recherche en cours\u2026
            </p>
          )}
          {!isLoading && !hasResults && (
            <p className="px-4 py-3 text-sm text-neutral-500">
              Aucun r\u00e9sultat pour &laquo;&nbsp;{query}&nbsp;&raquo;
            </p>
          )}
          {hasResults &&
            results.map((r) => (
              <Link
                key={`${r.type}-${r.id}`}
                href={r.url}
                className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-700"
              >
                <span className="shrink-0 rounded bg-primary-100 px-1.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                  {r.type}
                </span>
                <span className="truncate text-neutral-900 dark:text-neutral-100">
                  {r.titre}
                </span>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
