// ============================================================
// Atlas EdTech Platform - Shared TypeScript Interfaces
// ============================================================

// --- Common ---

export interface Timestamps {
  created_at: string;
  updated_at: string;
}

// --- Countries (001) ---

export interface Country extends Timestamps {
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

// --- Persons (002) ---

export type PersonCategory =
  | 'philosopher'
  | 'scientist'
  | 'artist'
  | 'writer'
  | 'musician'
  | 'politician'
  | 'explorer'
  | 'inventor';

export interface Person extends Timestamps {
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
  notable_works: NotableWork[];
  quotes: Quote[];
  era: string | null;
}

export interface NotableWork {
  title: string;
  year?: number;
  description?: string;
}

export interface Quote {
  text: string;
  source?: string;
}

export interface PersonContribution {
  id: string;
  person_id: string;
  title: string;
  description: string | null;
  year: number | null;
  domain: string | null;
}

// --- Articles (003) ---

export type ArticleCategory =
  | 'geography'
  | 'history'
  | 'geology'
  | 'science'
  | 'culture'
  | 'war'
  | 'politics';

export type DifficultyLevel = 'debutant' | 'intermediaire' | 'avance';

export interface Article extends Timestamps {
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
}

export interface ArticleSection {
  id: string;
  article_id: string;
  title: string;
  content: string | null;
  sort_order: number;
  image_url: string | null;
}

// --- Timeline (004) ---

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

export interface HistoricalEvent extends Timestamps {
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
  importance: 1 | 2 | 3 | 4 | 5;
  category: string | null;
  image_url: string | null;
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
  belligerents: WarBelligerents;
  casualties_estimate: string | null;
  outcome: string | null;
  consequences: string | null;
  related_event_ids: string[];
}

export interface WarBelligerents {
  side1?: string[];
  side2?: string[];
}

// --- Curriculum (005) ---

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
  key_dates: KeyDate[];
  key_figures: KeyFigure[];
  vocabulary: VocabularyEntry[];
  sort_order: number;
}

export interface KeyDate {
  date: string;
  description: string;
}

export interface KeyFigure {
  name: string;
  role: string;
}

export interface VocabularyEntry {
  term: string;
  definition: string;
}

// --- Quizzes (006) ---

export type QuestionType = 'qcm' | 'vrai_faux' | 'texte_libre' | 'association';

export interface Quiz extends Timestamps {
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

// --- Videos (007) ---

export interface Video extends Timestamps {
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
}

export interface VideoChapter {
  id: string;
  video_id: string;
  title: string;
  start_seconds: number;
  end_seconds: number | null;
  sort_order: number;
}

// --- Search Index (008) ---

export type SearchEntityType =
  | 'country'
  | 'person'
  | 'article'
  | 'event'
  | 'lesson'
  | 'quiz'
  | 'video';

export interface SearchIndex {
  id: string;
  entity_type: SearchEntityType;
  entity_id: string;
  title: string;
  content_preview: string | null;
  search_vector: string;
  category: string | null;
  tags: string[];
  created_at: string;
}
