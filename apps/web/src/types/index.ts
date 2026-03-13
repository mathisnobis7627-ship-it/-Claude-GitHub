// ──────────────────────────────────────────────
// Atlas EdTech – Frontend TypeScript types
// Aligned with backend API response format
// ──────────────────────────────────────────────

// ── API response wrapper ────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: Pagination;
}

// ── Countries ────────────────────────────────
export interface Country {
  id: string;
  name: string;
  official_name: string | null;
  code_iso2: string;
  code_iso3: string;
  capital: string | null;
  region: string | null;
  subregion: string | null;
  continent: string | null;
  population: number;
  area_km2: number | null;
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  flag_url: string | null;
  coat_of_arms_url: string | null;
  map_url: string | null;
  latitude: number | null;
  longitude: number | null;
  borders: string[];
  timezones: string[];
  government_type: string | null;
  political_summary: string | null;
  gdp_usd: number | null;
  hdi: number | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface CountryGeography {
  id: string;
  country_id: string;
  climate: string | null;
  terrain: string | null;
  natural_resources: string[];
  land_use: Record<string, number>;
  elevation_highest: string | null;
  elevation_lowest: string | null;
  coastline_km: number | null;
  description_text: string | null;
}

export interface CountryHistory {
  id: string;
  country_id: string;
  period: string;
  title: string;
  content: string | null;
  year_start: number | null;
  year_end: number | null;
  sort_order: number;
}

// ── Persons ──────────────────────────────────
export type PersonCategory =
  | "philosopher"
  | "scientist"
  | "artist"
  | "writer"
  | "musician"
  | "politician"
  | "explorer"
  | "inventor";

export interface Person {
  id: string;
  slug: string;
  first_name: string;
  last_name: string;
  full_name: string;
  birth_date: string | null;
  death_date: string | null;
  birth_place: string | null;
  death_place: string | null;
  nationality: string | null;
  category: PersonCategory;
  subcategory: string | null;
  portrait_url: string | null;
  summary: string | null;
  biography_text: string | null;
  notable_works: string[];
  quotes: string[];
  era: string | null;
  historical_importance: string | null;
  anecdote: string | null;
  created_at: string;
  updated_at: string;
}

// ── Articles ─────────────────────────────────
export type ArticleCategory =
  | "geography"
  | "history"
  | "geology"
  | "science"
  | "culture"
  | "war"
  | "politics";

export type DifficultyLevel = "debutant" | "intermediaire" | "avance";

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  content: string | null;
  summary: string | null;
  category: ArticleCategory;
  subcategory: string | null;
  cover_image_url: string | null;
  author: string | null;
  reading_time_minutes: number | null;
  difficulty_level: DifficultyLevel;
  tags: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
  sections?: ArticleSection[];
}

export interface ArticleSection {
  id: string;
  article_id: string;
  title: string;
  content: string | null;
  sort_order: number;
  image_url: string | null;
}

// ── Timeline ─────────────────────────────────
export type HistoricalEra =
  | "prehistoire"
  | "antiquite"
  | "moyen_age"
  | "renaissance"
  | "temps_modernes"
  | "epoque_contemporaine";

export interface HistoricalPeriod {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  year_start: number | null;
  year_end: number | null;
  era: HistoricalEra;
  color_hex: string | null;
  events?: HistoricalEvent[];
}

export interface HistoricalEvent {
  id: string;
  period_id: string;
  title: string;
  slug: string;
  description: string | null;
  detailed_content: string | null;
  date_display: string | null;
  year: number | null;
  month: number | null;
  day: number | null;
  location: string | null;
  importance: number;
  category: string | null;
  image_url: string | null;
}

// ── Curriculum ───────────────────────────────
export type NiveauScolaire = string;

export interface SchoolLevel {
  id: string;
  name: string;
  slug: string;
  cycle: "cycle3" | "cycle4" | "lycee";
  sort_order: number;
}

export interface Subject {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
}

export interface CurriculumChapter {
  id: string;
  level_id: string;
  subject_id: string;
  title: string;
  slug: string;
  description: string | null;
  objectives: string[];
  key_concepts: string[];
  sort_order: number;
  subject_name?: string;
  subject_slug?: string;
}

// ── Quiz ─────────────────────────────────────
export interface Quiz {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  difficulty_level: DifficultyLevel;
  level_id: string | null;
  chapter_id: string | null;
  time_limit_seconds: number | null;
  question_count: number;
  cover_image_url: string | null;
  created_at: string;
  updated_at: string;
  questions?: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  quiz_id: string;
  question_text: string;
  question_type: "qcm" | "vrai_faux" | "texte_libre" | "association" | "carte_a_completer" | "chronologie";
  difficulty_level: DifficultyLevel;
  image_url: string | null;
  explanation: string | null;
  sort_order: number;
  points: number;
  options?: QuizOption[];
}

export interface QuizOption {
  id: string;
  question_id: string;
  option_text: string;
  sort_order: number;
}

export interface QuizResult {
  quiz_id: string;
  total_questions: number;
  correct_answers: number;
  score: number;
  percentage: number;
  details: {
    question_id: string;
    correct: boolean;
    correct_answer: number;
    selected_option: number;
    explanation: string;
  }[];
}

// ── Videos ───────────────────────────────────
export interface Video {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  youtube_id: string;
  duration_seconds: number | null;
  thumbnail_url: string | null;
  category: string | null;
  subcategory: string | null;
  difficulty_level: DifficultyLevel;
  level_id: string | null;
  tags: string[];
  transcript: string | null;
  created_at: string;
  updated_at: string;
}

// ── Search ───────────────────────────────────
export interface SearchResult {
  type: "country" | "person" | "article" | "event" | "lesson" | "quiz" | "video";
  id: string;
  title: string;
  excerpt: string;
  slug?: string;
  url: string;
  image?: string;
  relevance: number;
  meta?: Record<string, string | number | null>;
}

export interface SearchSuggestion {
  type: SearchResult["type"];
  id: string;
  title: string;
  slug?: string;
  url: string;
  image?: string;
}

export interface SearchFilters {
  eras: { value: string; label: string }[];
  categories: string[];
  continents: string[];
}
