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
  id: number;
  code: string; // ISO 3166-1 alpha-2
  name: string;
  official_name: string;
  continent: string;
  region: string;
  capital: string;
  population: number;
  area_km2: number;
  flag_url: string;
  created_at: Date;
  updated_at: Date;
}

export interface CountryGeography {
  id: number;
  country_id: number;
  climate: string;
  terrain: string;
  natural_resources: string[];
  major_rivers: string[];
  major_mountains: string[];
  borders: string[];
  coastline_km: number;
  highest_point: string;
  lowest_point: string;
}

export interface CountryHistory {
  id: number;
  country_id: number;
  period: string;
  title: string;
  description: string;
  start_year: number;
  end_year: number | null;
  key_events: string[];
}

// ── Person ──────────────────────────────────────────────────────────────────

export type PersonCategory =
  | 'philosophers'
  | 'scientists'
  | 'artists'
  | 'writers'
  | 'musicians'
  | 'leaders'
  | 'explorers';

export interface Person {
  id: number;
  slug: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  death_date: string | null;
  nationality: string;
  category: PersonCategory;
  biography: string;
  portrait_url: string;
  notable_works: string[];
  created_at: Date;
  updated_at: Date;
}

// ── Article ─────────────────────────────────────────────────────────────────

export type ArticleCategory =
  | 'geography'
  | 'history'
  | 'geology'
  | 'wars'
  | 'civilizations'
  | 'science'
  | 'culture';

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  tags: string[];
  author: string;
  cover_image_url: string;
  reading_time_minutes: number;
  published: boolean;
  published_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

// ── Timeline ────────────────────────────────────────────────────────────────

export interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  year: number;
  era: 'BCE' | 'CE';
  category: string;
  location: string;
  significance: string;
  related_persons: number[];
  related_countries: string[];
  image_url: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface TimelinePeriod {
  id: number;
  name: string;
  description: string;
  start_year: number;
  end_year: number;
  era: 'BCE' | 'CE';
  color: string;
  key_characteristics: string[];
}

// ── Curriculum (French School) ──────────────────────────────────────────────

export type CurriculumLevel =
  | 'cp'
  | 'ce1'
  | 'ce2'
  | 'cm1'
  | 'cm2'
  | '6eme'
  | '5eme'
  | '4eme'
  | '3eme'
  | '2nde'
  | '1ere'
  | 'terminale';

export type CurriculumSubject =
  | 'histoire'
  | 'geographie'
  | 'sciences'
  | 'emc';

export interface CurriculumChapter {
  id: number;
  level: CurriculumLevel;
  subject: CurriculumSubject;
  chapter_number: number;
  title: string;
  description: string;
  objectives: string[];
  key_concepts: string[];
  resources: string[];
  created_at: Date;
  updated_at: Date;
}

// ── Quiz ────────────────────────────────────────────────────────────────────

export interface Quiz {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  time_limit_seconds: number;
  questions: QuizQuestion[];
  created_at: Date;
  updated_at: Date;
}

export interface QuizQuestion {
  id: number;
  quiz_id: number;
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
  points: number;
}

export interface QuizSubmission {
  quiz_id: number;
  answers: { question_id: number; selected_option: number }[];
}

export interface QuizResult {
  quiz_id: number;
  total_questions: number;
  correct_answers: number;
  score: number;
  percentage: number;
  details: {
    question_id: number;
    correct: boolean;
    correct_answer: number;
    selected_option: number;
    explanation: string;
  }[];
}

// ── Search ──────────────────────────────────────────────────────────────────

export type SearchType = 'countries' | 'persons' | 'articles' | 'events' | 'all';

export interface SearchQuery {
  q: string;
  type?: SearchType;
  category?: string;
  page?: number;
  limit?: number;
}

export interface SearchResult {
  type: string;
  id: number;
  title: string;
  excerpt: string;
  slug?: string;
  url: string;
  relevance: number;
}

// ── Video ───────────────────────────────────────────────────────────────────

export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail_url: string;
  duration_seconds: number;
  topic: string;
  tags: string[];
  source: string;
  created_at: Date;
  updated_at: Date;
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
