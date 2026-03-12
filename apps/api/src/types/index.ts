import type { Request, Response } from 'express';

// ── Pagination ──────────────────────────────────────────────────────────────

export interface PaginationQuery {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// ── API Response ────────────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// ── Country ─────────────────────────────────────────────────────────────────

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
  created_at: Date;
  updated_at: Date;
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

export interface CountryEvent {
  id: string;
  country_id: string;
  event_id: string;
  relevance: string | null;
}

export interface CountryQuiz {
  id: string;
  country_id: string;
  quiz_id: string;
}

// ── Person ──────────────────────────────────────────────────────────────────

export type PersonCategory =
  | 'philosopher'
  | 'scientist'
  | 'artist'
  | 'writer'
  | 'musician'
  | 'politician'
  | 'explorer'
  | 'inventor';

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
  created_at: Date;
  updated_at: Date;
}

// ── Article ─────────────────────────────────────────────────────────────────

export type ArticleCategory =
  | 'geography'
  | 'history'
  | 'geology'
  | 'science'
  | 'culture'
  | 'war'
  | 'politics';

export type DifficultyLevel = 'debutant' | 'intermediaire' | 'avance';

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
  metadata: Record<string, unknown>;
  published: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ArticleSection {
  id: string;
  article_id: string;
  title: string;
  content: string | null;
  sort_order: number;
  image_url: string | null;
}

// ── Timeline ────────────────────────────────────────────────────────────────

export type HistoricalEra =
  | 'prehistoire'
  | 'antiquite'
  | 'moyen_age'
  | 'renaissance'
  | 'temps_modernes'
  | 'epoque_contemporaine';

export interface HistoricalPeriod {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  year_start: number | null;
  year_end: number | null;
  era: HistoricalEra;
  color_hex: string | null;
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
  latitude: number | null;
  longitude: number | null;
  importance: number;
  category: string | null;
  image_url: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface War {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  detailed_content: string | null;
  year_start: number | null;
  year_end: number | null;
  location: string | null;
  belligerents: Record<string, string[]>;
  casualties_estimate: string | null;
  outcome: string | null;
  consequences: string | null;
  related_event_ids: string[];
}

// ── Curriculum (French School) ──────────────────────────────────────────────

export type SchoolCycle = 'cycle3' | 'cycle4' | 'lycee';

export interface SchoolLevel {
  id: string;
  name: string;
  slug: string;
  cycle: SchoolCycle;
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
}

export interface CurriculumLesson {
  id: string;
  chapter_id: string;
  title: string;
  content: string | null;
  summary: string | null;
  key_dates: { date: string; event: string }[];
  key_figures: string[];
  vocabulary: { term: string; definition: string }[];
  sort_order: number;
}

// ── Quiz ────────────────────────────────────────────────────────────────────

export type QuestionType = 'qcm' | 'vrai_faux' | 'texte_libre' | 'association';

export interface Quiz {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  subcategory: string | null;
  difficulty_level: DifficultyLevel;
  level_id: string | null;
  time_limit_seconds: number | null;
  question_count: number;
  cover_image_url: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface QuizQuestion {
  id: string;
  quiz_id: string;
  question_text: string;
  question_type: QuestionType;
  image_url: string | null;
  explanation: string | null;
  sort_order: number;
  points: number;
}

export interface QuizOption {
  id: string;
  question_id: string;
  option_text: string;
  is_correct: boolean;
  sort_order: number;
}

export interface QuizSubmission {
  quiz_id: string;
  answers: { question_id: string; selected_option: number }[];
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

// ── Search ──────────────────────────────────────────────────────────────────

export type SearchEntityType = 'country' | 'person' | 'article' | 'event' | 'lesson' | 'quiz' | 'video';

export interface SearchQuery {
  q: string;
  type?: SearchEntityType | 'all';
  category?: string;
  page?: number;
  limit?: number;
}

export interface SearchResult {
  type: string;
  id: string;
  title: string;
  excerpt: string;
  slug?: string;
  url: string;
  relevance: number;
}

// ── Video ───────────────────────────────────────────────────────────────────

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
  created_at: Date;
  updated_at: Date;
}

export interface VideoChapter {
  id: string;
  video_id: string;
  title: string;
  start_seconds: number;
  end_seconds: number | null;
  sort_order: number;
}

// ── Error ───────────────────────────────────────────────────────────────────

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

// ── Typed Request ───────────────────────────────────────────────────────────

export interface TypedRequest<
  TBody = unknown,
  TQuery = unknown,
  TParams = unknown,
> extends Request {
  body: TBody;
  query: TQuery & Request['query'];
  params: TParams & Request['params'];
}
