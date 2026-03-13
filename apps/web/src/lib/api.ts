import axios from "axios";
import type {
  ApiResponse,
  PaginatedResponse,
  Country,
  CountryGeography,
  CountryHistory,
  Person,
  Article,
  HistoricalPeriod,
  SchoolLevel,
  CurriculumChapter,
  Quiz,
  QuizResult,
  Video,
  SearchResult,
  SearchSuggestion,
  SearchFilters,
} from "@/types";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api/v1",
  timeout: 15_000,
  headers: { "Content-Type": "application/json" },
});

// ── Request interceptor ──────────────────────
api.interceptors.request.use((config) => {
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
      // Handle unauthorized – future use
    }
    return Promise.reject(error);
  },
);

// ── Helpers ──────────────────────────────────
function unwrapData<T>(res: { data: ApiResponse<T> }): T {
  if (!res.data.success) throw new Error(res.data.error ?? "API error");
  return res.data.data as T;
}

function unwrapPaginated<T>(res: { data: PaginatedResponse<T> }): PaginatedResponse<T> {
  return res.data;
}

// ── Countries ────────────────────────────────
export async function getCountries(page = 1, limit = 20, continent?: string) {
  const res = await api.get<PaginatedResponse<Country>>("/countries", {
    params: { page, limit, continent },
  });
  return unwrapPaginated(res);
}

export async function getCountryByCode(code: string) {
  const res = await api.get<ApiResponse<Country>>(`/countries/${code}`);
  return unwrapData(res);
}

export async function getCountryGeography(countryId: string) {
  const res = await api.get<ApiResponse<CountryGeography>>(`/countries/${countryId}/geography`);
  return unwrapData(res);
}

export async function getCountryHistory(countryId: string) {
  const res = await api.get<ApiResponse<CountryHistory[]>>(`/countries/${countryId}/history`);
  return unwrapData(res);
}

// ── Persons ──────────────────────────────────
export async function getPersons(page = 1, limit = 20, category?: string) {
  const res = await api.get<PaginatedResponse<Person>>("/persons", {
    params: { page, limit, category },
  });
  return unwrapPaginated(res);
}

export async function getPersonBySlug(slug: string) {
  const res = await api.get<ApiResponse<Person>>(`/persons/${slug}`);
  return unwrapData(res);
}

// ── Articles ─────────────────────────────────
export async function getArticles(page = 1, limit = 20, category?: string) {
  const res = await api.get<PaginatedResponse<Article>>("/articles", {
    params: { page, limit, category },
  });
  return unwrapPaginated(res);
}

export async function getArticleBySlug(slug: string) {
  const res = await api.get<ApiResponse<Article>>(`/articles/${slug}`);
  return unwrapData(res);
}

// ── Timeline ─────────────────────────────────
export async function getTimeline() {
  const res = await api.get<ApiResponse<HistoricalPeriod[]>>("/timeline");
  return unwrapData(res);
}

export async function getTimelineEvent(id: string) {
  const res = await api.get<ApiResponse<HistoricalPeriod>>(`/timeline/events/${id}`);
  return unwrapData(res);
}

// ── Curriculum ───────────────────────────────
export async function getCurriculumLevels() {
  const res = await api.get<ApiResponse<SchoolLevel[]>>("/curriculum/levels");
  return unwrapData(res);
}

export async function getCurriculumSubjects(level: string) {
  const res = await api.get<ApiResponse<{ id: string; name: string; slug: string; icon: string | null }[]>>(
    `/curriculum/${level}/subjects`,
  );
  return unwrapData(res);
}

export async function getChaptersByLevel(level: string) {
  const res = await api.get<ApiResponse<CurriculumChapter[]>>(`/curriculum/${level}/chapters`);
  return unwrapData(res);
}

export async function getChapters(level: string, subject: string) {
  const res = await api.get<ApiResponse<CurriculumChapter[]>>(`/curriculum/${level}/${subject}/chapters`);
  return unwrapData(res);
}

// ── Quizzes ──────────────────────────────────
export async function getQuizzes(page = 1, limit = 20) {
  const res = await api.get<PaginatedResponse<Quiz>>("/quizzes", { params: { page, limit } });
  return unwrapPaginated(res);
}

export async function getQuizById(id: string) {
  const res = await api.get<ApiResponse<Quiz>>(`/quizzes/${id}`);
  return unwrapData(res);
}

export async function submitQuiz(id: string, answers: Record<string, string>) {
  const res = await api.post<ApiResponse<QuizResult>>(`/quizzes/${id}/submit`, { answers });
  return unwrapData(res);
}

// ── Videos ───────────────────────────────────
export async function getVideos(page = 1, limit = 20, category?: string) {
  const res = await api.get<PaginatedResponse<Video>>("/videos", {
    params: { page, limit, category },
  });
  return unwrapPaginated(res);
}

export async function getVideoById(id: string) {
  const res = await api.get<ApiResponse<Video>>(`/videos/${id}`);
  return unwrapData(res);
}

// ── Search ───────────────────────────────────
export interface SearchParams {
  q: string;
  type?: string;
  category?: string;
  era?: string;
  page?: number;
  limit?: number;
}

export async function search(params: SearchParams | string) {
  const queryParams = typeof params === "string" ? { q: params } : params;
  const res = await api.get<PaginatedResponse<SearchResult>>("/search", { params: queryParams });
  return unwrapPaginated(res);
}

export async function searchSuggest(q: string, limit = 6) {
  const res = await api.get<ApiResponse<SearchSuggestion[]>>("/search/suggest", {
    params: { q, limit },
  });
  return unwrapData(res);
}

export async function getSearchFilters() {
  const res = await api.get<ApiResponse<SearchFilters>>("/search/filters");
  return unwrapData(res);
}

export default api;
