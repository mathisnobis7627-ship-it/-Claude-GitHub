"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  search as searchApi,
  searchSuggest,
  getSearchFilters,
  type SearchParams,
} from "@/lib/api";
import { useAppStore } from "@/store/app";
import type { SearchResult, SearchSuggestion, SearchFilters } from "@/types";

interface UseSearchOptions {
  debounceMs?: number;
  minLength?: number;
}

export function useSearch(options: UseSearchOptions = {}) {
  const { debounceMs = 350, minLength = 2 } = options;
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [filters, setFilters] = useState<Omit<SearchParams, "q">>({});
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const addRecherche = useAppStore((s) => s.addRecherche);

  // Debounce the query
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (query.length < minLength) {
      setDebouncedQuery("");
      return;
    }

    timerRef.current = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceMs);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query, debounceMs, minLength]);

  // Full search results
  const {
    data: searchData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["search", debouncedQuery, filters],
    queryFn: () => searchApi({ q: debouncedQuery, ...filters }),
    enabled: debouncedQuery.length >= minLength,
    staleTime: 60_000,
  });

  const results: SearchResult[] = searchData?.data ?? [];

  // Track searches
  useEffect(() => {
    if (debouncedQuery.length >= minLength) {
      addRecherche(debouncedQuery);
    }
  }, [debouncedQuery, minLength, addRecherche]);

  const clear = useCallback(() => {
    setQuery("");
    setDebouncedQuery("");
  }, []);

  const updateFilter = useCallback(
    (key: keyof Omit<SearchParams, "q">, value: string | undefined) => {
      setFilters((prev) => {
        const next = { ...prev };
        if (value) {
          (next as Record<string, string>)[key] = value;
        } else {
          delete (next as Record<string, string | undefined>)[key];
        }
        return next;
      });
    },
    [],
  );

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  return {
    query,
    setQuery,
    results,
    pagination: searchData?.pagination,
    isLoading,
    error,
    clear,
    hasResults: results.length > 0,
    isActive: debouncedQuery.length >= minLength,
    filters,
    updateFilter,
    clearFilters,
  };
}

/** Lightweight hook for autocomplete suggestions only */
export function useSearchSuggest(options: UseSearchOptions = {}) {
  const { debounceMs = 200, minLength = 1 } = options;
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (query.length < minLength) {
      setDebouncedQuery("");
      return;
    }

    timerRef.current = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceMs);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query, debounceMs, minLength]);

  const {
    data: suggestions = [],
    isLoading,
  } = useQuery<SearchSuggestion[]>({
    queryKey: ["search-suggest", debouncedQuery],
    queryFn: () => searchSuggest(debouncedQuery),
    enabled: debouncedQuery.length >= minLength,
    staleTime: 30_000,
  });

  const clear = useCallback(() => {
    setQuery("");
    setDebouncedQuery("");
  }, []);

  return {
    query,
    setQuery,
    suggestions,
    isLoading,
    clear,
    hasSuggestions: suggestions.length > 0,
    isActive: debouncedQuery.length >= minLength,
  };
}

/** Hook to fetch available search filter values */
export function useSearchFilters() {
  return useQuery<SearchFilters>({
    queryKey: ["search-filters"],
    queryFn: getSearchFilters,
    staleTime: 5 * 60_000,
  });
}
