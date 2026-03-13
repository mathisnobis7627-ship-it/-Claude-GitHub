"use client";

import { useRef, useState, useEffect } from "react";
import { Search, X, Loader2, Globe, BookOpen, Users, HelpCircle, Video, Clock, GraduationCap } from "lucide-react";
import { useSearchSuggest } from "@/hooks/useSearch";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

const typeIcons: Record<string, typeof Globe> = {
  pays: Globe,
  personnalite: Users,
  article: BookOpen,
  evenement: Clock,
  quiz: HelpCircle,
  video: Video,
  lecon: GraduationCap,
};

const typeLabels: Record<string, string> = {
  pays: "Pays",
  personnalite: "Personnalité",
  article: "Article",
  evenement: "Événement",
  quiz: "Quiz",
  video: "Vidéo",
  lecon: "Leçon",
};

/** Map backend entity type to frontend type label */
function mapType(backendType: string): string {
  const mapping: Record<string, string> = {
    country: "pays",
    person: "personnalite",
    article: "article",
    event: "evenement",
    lesson: "lecon",
    quiz: "quiz",
    video: "video",
  };
  return mapping[backendType] ?? backendType;
}

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  expanded?: boolean;
  /** If true, navigates to /recherche on Enter instead of inline results */
  navigateOnSubmit?: boolean;
  /** Initial query value */
  initialQuery?: string;
  /** Called when user submits search (presses Enter) */
  onSubmit?: (query: string) => void;
}

export function SearchBar({
  className,
  placeholder = "Rechercher un pays, une personnalité, un article\u2026",
  expanded = false,
  navigateOnSubmit = false,
  initialQuery = "",
  onSubmit,
}: SearchBarProps) {
  const { query, setQuery, suggestions, isLoading, clear, hasSuggestions, isActive } =
    useSearchSuggest({ debounceMs: 200, minLength: 1 });
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const showDropdown = isFocused && isActive;

  // Initialize query if provided
  useEffect(() => {
    if (initialQuery) setQuery(initialQuery);
  }, [initialQuery, setQuery]);

  // Reset selection when suggestions change
  useEffect(() => {
    setSelectedIndex(-1);
  }, [suggestions]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!showDropdown || !hasSuggestions) {
      if (e.key === "Enter" && query.trim()) {
        e.preventDefault();
        handleSubmit();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          router.push(suggestions[selectedIndex].url);
          setIsFocused(false);
        } else {
          handleSubmit();
        }
        break;
      case "Escape":
        setIsFocused(false);
        inputRef.current?.blur();
        break;
    }
  }

  function handleSubmit() {
    if (onSubmit) {
      onSubmit(query);
    } else if (navigateOnSubmit) {
      router.push(`/recherche?q=${encodeURIComponent(query)}`);
    }
  }

  return (
    <div className={cn("relative", expanded ? "w-full" : "w-full max-w-md", className)}>
      <div
        className={cn(
          "flex items-center gap-2 rounded-xl border bg-white px-4 py-3 transition-all dark:bg-neutral-800",
          isFocused
            ? "border-primary-500 ring-2 ring-primary-500/20 shadow-lg"
            : "border-neutral-300 shadow-sm dark:border-neutral-600",
        )}
      >
        <Search className="h-5 w-5 shrink-0 text-neutral-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-neutral-100"
          role="combobox"
          aria-expanded={showDropdown}
          aria-haspopup="listbox"
          aria-autocomplete="list"
        />
        {isLoading && isActive && (
          <Loader2 className="h-4 w-4 shrink-0 animate-spin text-neutral-400" />
        )}
        {query && !isLoading && (
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

      {/* Dropdown suggestions */}
      {showDropdown && (
        <div
          ref={dropdownRef}
          role="listbox"
          className="absolute top-full z-50 mt-2 w-full rounded-xl border border-neutral-200 bg-white py-1 shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
        >
          {isLoading && (
            <div className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              Recherche en cours\u2026
            </div>
          )}
          {!isLoading && !hasSuggestions && query.length >= 1 && (
            <p className="px-4 py-3 text-sm text-neutral-500">
              Aucun résultat pour « {query} »
            </p>
          )}
          {hasSuggestions &&
            suggestions.map((s, i) => {
              const frontType = mapType(s.type);
              const Icon = typeIcons[frontType] ?? BookOpen;
              return (
                <Link
                  key={`${s.type}-${s.id}`}
                  href={s.url}
                  role="option"
                  aria-selected={i === selectedIndex}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                    i === selectedIndex
                      ? "bg-primary-50 dark:bg-primary-900/30"
                      : "hover:bg-neutral-50 dark:hover:bg-neutral-700/50",
                  )}
                >
                  {s.image ? (
                    <img
                      src={s.image}
                      alt=""
                      className="h-8 w-8 shrink-0 rounded-md object-cover"
                    />
                  ) : (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-700">
                      <Icon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <span className="block truncate font-medium text-neutral-900 dark:text-neutral-100">
                      {s.title}
                    </span>
                  </div>
                  <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400">
                    {typeLabels[frontType] ?? frontType}
                  </span>
                </Link>
              );
            })}

          {/* "See all results" link */}
          {hasSuggestions && (
            <Link
              href={`/recherche?q=${encodeURIComponent(query)}`}
              className="mt-1 flex items-center gap-2 border-t border-neutral-100 px-4 py-2.5 text-sm font-medium text-primary-600 hover:bg-primary-50 dark:border-neutral-700 dark:text-primary-400 dark:hover:bg-primary-900/20"
            >
              <Search className="h-4 w-4" />
              Voir tous les résultats pour « {query} »
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
