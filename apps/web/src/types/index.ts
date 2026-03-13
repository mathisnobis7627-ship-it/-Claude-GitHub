// ──────────────────────────────────────────────
// Atlas EdTech – Shared TypeScript types
// ──────────────────────────────────────────────

/** Continent identifiers */
export type Continent =
  | "afrique"
  | "amerique-nord"
  | "amerique-sud"
  | "asie"
  | "europe"
  | "oceanie"
  | "antarctique";

/** Country summary (listing) */
export interface Country {
  code: string; // ISO 3166-1 alpha-3
  nom: string;
  nomOfficiel: string;
  continent: Continent;
  capitale: string;
  population: number;
  superficie: number; // km²
  langue: string[];
  monnaie: string;
  drapeau: string; // URL
  carte: string; // URL
}

/** Full country detail */
export interface CountryDetail extends Country {
  description: string;
  histoire: string;
  geographie: string;
  economie: string;
  culture: string;
  pointsCles: string[];
  images: string[];
}

/** Historical figure summary */
export interface Person {
  slug: string;
  nom: string;
  prenom: string;
  dateNaissance: string; // ISO date or "circa ..."
  dateDeces?: string;
  nationalite: string;
  domaine: string; // e.g. "Sciences", "Politique", "Arts"
  resume: string;
  portrait: string; // URL
}

/** Full historical figure detail */
export interface PersonDetail extends Person {
  biographie: string;
  realisations: string[];
  anecdotes: string[];
  oeuvres?: string[];
  citations?: string[];
  liensConnexes: { label: string; url: string }[];
}

/** Encyclopedia article */
export interface Article {
  id: string;
  titre: string;
  slug: string;
  categorie: ArticleCategorie;
  resume: string;
  contenu: string;
  image?: string;
  auteur: string;
  datePublication: string;
  dateMiseAJour: string;
  tags: string[];
}

export type ArticleCategorie =
  | "geographie"
  | "histoire"
  | "geologie"
  | "sciences"
  | "culture"
  | "guerre"
  | "politique";

/** Timeline event */
export interface TimelineEvent {
  id: string;
  date: string;
  titre: string;
  description: string;
  categorie: ArticleCategorie;
  image?: string;
  personnalites?: string[]; // slugs
  pays?: string[]; // codes
}

/** Timeline period */
export interface TimelinePeriod {
  id: string;
  nom: string;
  debut: number; // year
  fin: number;
  couleur: string; // hex
  evenements: TimelineEvent[];
}

/** French school grade level */
export type NiveauScolaire =
  | "6eme"
  | "5eme"
  | "4eme"
  | "3eme"
  | "seconde"
  | "premiere"
  | "terminale";

/** School curriculum chapter */
export interface CurriculumChapter {
  id: string;
  niveau: NiveauScolaire;
  matiere: "histoire" | "geographie" | "emc";
  titre: string;
  description: string;
  objectifs: string[];
  motsCles: string[];
  articlesLies: string[]; // article ids
}

/** Quiz */
export interface Quiz {
  id: string;
  titre: string;
  description: string;
  categorie: ArticleCategorie;
  niveau: NiveauScolaire | "tout-niveau";
  questions: QuizQuestion[];
  duree: number; // minutes
  image?: string;
}

export interface QuizQuestion {
  id: string;
  enonce: string;
  type: "qcm" | "vrai-faux" | "texte-libre";
  options?: string[];
  reponseCorrecte: string;
  explication: string;
  image?: string;
}

export interface QuizResult {
  quizId: string;
  score: number;
  total: number;
  reponses: {
    questionId: string;
    reponse: string;
    correct: boolean;
  }[];
  duree: number; // seconds
  date: string;
}

/** Educational video */
export interface Video {
  id: string;
  titre: string;
  description: string;
  url: string; // embed URL
  duree: number; // seconds
  categorie: ArticleCategorie;
  niveau: NiveauScolaire | "tout-niveau";
  vignette: string; // thumbnail URL
  tags: string[];
}

/** Search result */
export interface SearchResult {
  type: "pays" | "personnalite" | "article" | "quiz" | "video" | "evenement" | "lecon";
  id: string;
  titre: string;
  extrait: string;
  url: string;
  image?: string;
  meta?: Record<string, string | number | null>;
}

/** Autocomplete suggestion */
export interface SearchSuggestion {
  type: SearchResult["type"];
  id: string;
  titre: string;
  url: string;
  image?: string;
}

/** Search filters available from backend */
export interface SearchFilters {
  eras: { value: string; label: string }[];
  categories: string[];
  continents: string[];
}

/** Pagination wrapper */
export interface Paginated<T> {
  data: T[];
  total: number;
  page: number;
  parPage: number;
  totalPages: number;
}

/** API error shape */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, string[]>;
}
