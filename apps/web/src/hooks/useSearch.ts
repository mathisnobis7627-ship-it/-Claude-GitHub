"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { search as searchApi } from "@/lib/api";
import { useAppStore } from "@/store/app";
import type { SearchResult } from "@/types";

interface UseSearchOptions {
  debounceMs?: number;
  minLength?: number;
}

export function useSearch(options: UseSearchOptions = {}) {
  const { debounceMs = 350, minLength = 2 } = options;
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
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

  // Fetch results
  const {
    data: results = [],
    isLoading,
    error,
  } = useQuery<SearchResult[]>({
    queryKey: ["search", debouncedQuery],
    queryFn: () => searchApi(debouncedQuery),
    enabled: debouncedQuery.length >= minLength,
    staleTime: 60_000,
  });

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

  return {
    query,
    setQuery,
    results,
    isLoading,
    error,
    clear,
    hasResults: results.length > 0,
    isActive: debouncedQuery.length >= minLength,
  };
}
