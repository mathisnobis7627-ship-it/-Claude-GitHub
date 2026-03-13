import axios from "axios";
import type {
  Article,
  Country,
  CountryDetail,
  Paginated,
  Person,
  PersonDetail,
  Quiz,
  SearchResult,
  SearchSuggestion,
  SearchFilters,
  TimelinePeriod,
  Video,
  CurriculumChapter,
  NiveauScolaire,
} from "@/types";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api",
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ── Request interceptor ──────────────────────
api.interceptors.request.use((config) => {
  // Attach auth token if available (future use)
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("atlas_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// ── Response interceptor ─────────────────────
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized – redirect to login in the future
    }
    return Promise.reject(error);
  },
);

// ── Countries ────────────────────────────────
export async function getCountries(page = 1, continent?: string) {
  const { data } = await api.get<Paginated<Country>>("/pays", {
    params: { page, continent },
  });
  return data;
}

export async function getCountryByCode(code: string) {
  const { data } = await api.get<CountryDetail>(`/pays/${code}`);
  return data;
}

// ── Historical figures ───────────────────────
export async function getPersons(page = 1, domaine?: string) {
  const { data } = await api.get<Paginated<Person>>("/personnalites", {
    params: { page, domaine },
  });
  return data;
}

export async function getPersonBySlug(slug: string) {
  const { data } = await api.get<PersonDetail>(`/personnalites/${slug}`);
  return data;
}

// ── Encyclopedia ─────────────────────────────
export async function getArticles(page = 1, categorie?: string) {
  const { data } = await api.get<Paginated<Article>>("/articles", {
    params: { page, categorie },
  });
  return data;
}

export async function getArticleBySlug(slug: string) {
  const { data } = await api.get<Article>(`/articles/${slug}`);
  return data;
}

// ── Timeline ─────────────────────────────────
export async function getTimeline() {
  const { data } = await api.get<TimelinePeriod[]>("/chronologie");
  return data;
}

// ── Curriculum ───────────────────────────────
export async function getCurriculum(niveau?: NiveauScolaire) {
  const { data } = await api.get<CurriculumChapter[]>("/programme", {
    params: { niveau },
  });
  return data;
}

// ── Quizzes ──────────────────────────────────
export async function getQuizzes(page = 1) {
  const { data } = await api.get<Paginated<Quiz>>("/quiz", { params: { page } });
  return data;
}

export async function getQuizById(id: string) {
  const { data } = await api.get<Quiz>(`/quiz/${id}`);
  return data;
}

// ── Videos ───────────────────────────────────
export async function getVideos(page = 1, categorie?: string) {
  const { data } = await api.get<Paginated<Video>>("/videos", {
    params: { page, categorie },
  });
  return data;
}

// ── Search ───────────────────────────────────
export interface SearchParams {
  q: string;
  type?: string;
  category?: string;
  country?: string;
  period?: string;
  era?: string;
  personality?: string;
  page?: number;
  limit?: number;
}

export async function search(params: SearchParams | string) {
  const queryParams = typeof params === "string" ? { q: params } : params;
  const { data } = await api.get<{ data: SearchResult[]; pagination: Paginated<never> }>(
    "/recherche",
    { params: queryParams },
  );
  return data;
}

export async function searchSuggest(q: string, limit = 6) {
  const { data } = await api.get<{ data: SearchSuggestion[] }>(
    "/recherche/suggest",
    { params: { q, limit } },
  );
  return data.data;
}

export async function getSearchFilters() {
  const { data } = await api.get<{ data: SearchFilters }>("/recherche/filters");
  return data.data;
}

export default api;
