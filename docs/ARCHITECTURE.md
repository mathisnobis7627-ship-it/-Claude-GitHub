# Atlas - Architecture Technique Complète

## 1. Vue d'ensemble

Atlas est une plateforme éducative interactive destinée aux jeunes (12 ans et plus) couvrant la géographie, l'histoire, la géologie, les personnalités historiques, les guerres, et le programme scolaire français (6ème à Terminale).

```
┌─────────────────────────────────────────────────────────────┐
│                        UTILISATEUR                          │
│                  (Navigateur / Mobile)                       │
└─────────────────────┬───────────────────────────────────────┘
                      │ HTTPS
┌─────────────────────▼───────────────────────────────────────┐
│                     FRONTEND                                 │
│              Next.js 14 + React 18                           │
│              TypeScript + TailwindCSS                        │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────────┐  │
│  │   SSR    │ │   SSG    │ │   CSR    │ │  API Routes   │  │
│  │  Pages   │ │  Pages   │ │  Comps   │ │  (BFF proxy)  │  │
│  └──────────┘ └──────────┘ └──────────┘ └───────────────┘  │
└─────────────────────┬───────────────────────────────────────┘
                      │ REST API (JSON)
┌─────────────────────▼───────────────────────────────────────┐
│                      BACKEND API                             │
│              Node.js + Express + TypeScript                   │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────────┐  │
│  │  Routes  │ │Controllers│ │ Services │ │  Middleware    │  │
│  │  /api/v1 │ │          │ │          │ │  (auth, rate)  │  │
│  └──────────┘ └──────────┘ └──────────┘ └───────────────┘  │
└─────────────────────┬───────────────────────────────────────┘
                      │ SQL (Knex.js)
┌─────────────────────▼───────────────────────────────────────┐
│                    BASE DE DONNÉES                            │
│                    PostgreSQL 16                              │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────────┐  │
│  │ Countries│ │ Persons  │ │ Articles │ │   Timeline    │  │
│  │ + Geo    │ │ + Works  │ │ +Sections│ │  + Events     │  │
│  └──────────┘ └──────────┘ └──────────┘ └───────────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────────┐  │
│  │Curriculum│ │ Quizzes  │ │  Videos  │ │ Search Index  │  │
│  │ +Lessons │ │+Questions│ │+Chapters │ │  (tsvector)   │  │
│  └──────────┘ └──────────┘ └──────────┘ └───────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## 2. Choix Technologiques Justifiés

### Frontend : Next.js 14 + React 18 + TypeScript

| Technologie | Justification |
|---|---|
| **Next.js 14** | SSR/SSG hybride pour le SEO (critique pour une encyclopédie), App Router pour le routing imbriqué, Image Optimization pour les cartes/drapeaux |
| **React 18** | Écosystème mature, Suspense pour le chargement progressif, Server Components pour réduire le JS client |
| **TypeScript** | Sécurité des types sur un schéma de données complexe (pays, dates historiques, curriculum), refactoring sûr |
| **TailwindCSS** | Prototypage rapide, design system cohérent, responsive mobile-first natif, faible bundle CSS |
| **TanStack Query** | Cache intelligent des requêtes API, invalidation automatique, pagination/infinite scroll |
| **Zustand** | State management léger (préférences utilisateur, thème, progression quiz), plus simple que Redux |
| **Framer Motion** | Animations fluides pour la timeline interactive et les transitions de pages |

### Backend : Node.js + Express + TypeScript

| Technologie | Justification |
|---|---|
| **Node.js 20** | Runtime JS unifié frontend/backend, performance I/O asynchrone pour les requêtes DB |
| **Express** | Framework HTTP mature, écosystème middleware riche, simplicité |
| **Knex.js** | Query builder SQL type-safe, migrations versionnées, support PostgreSQL natif |
| **Zod** | Validation des entrées API côté serveur, inférence TypeScript automatique |
| **Helmet + CORS** | Sécurité HTTP headers, protection XSS/CSRF |
| **express-rate-limit** | Protection contre les abus, important pour une app publique |

### Base de données : PostgreSQL 16

| Fonctionnalité | Justification |
|---|---|
| **PostgreSQL** | JSONB pour données semi-structurées (langues, ressources naturelles), Full-Text Search natif (tsvector), GIS possible pour les cartes |
| **Full-Text Search** | Recherche globale performante sans service externe (Elasticsearch), tsvector + GIN index |
| **JSONB** | Flexibilité pour les champs variables (langues d'un pays, œuvres d'un artiste) sans tables de jointure excessives |
| **Migrations Knex** | Versioning du schéma, rollback possible, reproductibilité |

### Monorepo : Turborepo

| Aspect | Justification |
|---|---|
| **Turborepo** | Build parallèle frontend/backend, cache intelligent, gestion des dépendances inter-packages |
| **Workspaces npm** | Partage de types TypeScript entre frontend et backend via `packages/shared` |

## 3. Arborescence du Projet

```
atlas-edtech/
├── apps/
│   ├── web/                          # Frontend Next.js
│   │   ├── src/
│   │   │   ├── app/                  # App Router (pages)
│   │   │   │   ├── layout.tsx        # Layout racine
│   │   │   │   ├── page.tsx          # Page d'accueil
│   │   │   │   ├── globals.css       # Styles globaux
│   │   │   │   ├── encyclopedie/     # Encyclopédie interactive
│   │   │   │   ├── pays/             # Fiches pays
│   │   │   │   │   ├── page.tsx      # Liste des pays
│   │   │   │   │   └── [code]/       # Détail pays (ISO)
│   │   │   │   ├── personnalites/    # Personnalités historiques
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [slug]/
│   │   │   │   ├── chronologie/      # Timeline interactive
│   │   │   │   ├── programme/        # Programme scolaire
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [niveau]/     # Par niveau (6ème-Term.)
│   │   │   │   ├── quiz/             # Quiz interactifs
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [id]/
│   │   │   │   ├── videos/           # Vidéos éducatives
│   │   │   │   └── recherche/        # Recherche globale
│   │   │   ├── components/
│   │   │   │   ├── layout/           # Header, Footer, Sidebar
│   │   │   │   ├── ui/               # Composants réutilisables
│   │   │   │   ├── encyclopedie/     # Composants encyclopédie
│   │   │   │   ├── pays/             # Composants pays
│   │   │   │   ├── chronologie/      # Composants timeline
│   │   │   │   ├── quiz/             # Composants quiz
│   │   │   │   ├── videos/           # Composants vidéos
│   │   │   │   └── providers/        # Context providers
│   │   │   ├── hooks/                # Custom hooks
│   │   │   ├── lib/                  # Utilitaires
│   │   │   ├── store/                # Zustand stores
│   │   │   └── types/                # Types TypeScript
│   │   ├── public/                   # Assets statiques
│   │   ├── package.json
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   │
│   └── api/                          # Backend Express
│       ├── src/
│       │   ├── index.ts              # Point d'entrée
│       │   ├── config/               # Configuration
│       │   │   ├── index.ts          # Env vars + validation
│       │   │   └── database.ts       # Connexion Knex
│       │   ├── routes/               # Définition des routes
│       │   │   ├── index.ts          # Router principal
│       │   │   ├── countries.ts
│       │   │   ├── persons.ts
│       │   │   ├── articles.ts
│       │   │   ├── timeline.ts
│       │   │   ├── curriculum.ts
│       │   │   ├── quizzes.ts
│       │   │   ├── search.ts
│       │   │   └── videos.ts
│       │   ├── controllers/          # Logique requête/réponse
│       │   ├── services/             # Logique métier + DB
│       │   ├── middleware/           # Middleware Express
│       │   │   ├── errorHandler.ts
│       │   │   ├── validate.ts
│       │   │   └── rateLimiter.ts
│       │   ├── validators/           # Schémas Zod
│       │   ├── types/                # Types API
│       │   └── db/
│       │       ├── migrations/       # Migrations Knex
│       │       └── seeds/            # Données initiales
│       ├── knexfile.ts
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   └── shared/                       # Types partagés
│       ├── src/
│       │   └── types.ts
│       ├── package.json
│       └── tsconfig.json
│
├── docs/
│   ├── ARCHITECTURE.md               # Ce document
│   └── API.md                        # Documentation API
│
├── package.json                      # Monorepo root
├── turbo.json                        # Config Turborepo
├── tsconfig.base.json                # Config TS partagée
├── .env.example
└── .gitignore
```

## 4. Modules Principaux

### 4.1 Module Encyclopédie
- Articles catégorisés (géographie, histoire, géologie, science, culture)
- Système de sections avec images
- Niveaux de difficulté (débutant, intermédiaire, avancé)
- Tags et catégories pour le filtrage
- Temps de lecture estimé

### 4.2 Module Pays
- Fiches complètes par pays (195 pays)
- Données géographiques (climat, terrain, ressources naturelles)
- Historique par périodes
- Drapeaux, armoiries, cartes
- Données démographiques et économiques

### 4.3 Module Personnalités
- Catégories : philosophes, scientifiques, artistes, écrivains, musiciens, politiques, explorateurs, inventeurs
- Biographies détaillées
- Œuvres notables et citations
- Contributions majeures par domaine
- Chronologie de vie

### 4.4 Module Chronologie
- Périodes historiques (Préhistoire → Contemporaine)
- Événements datés avec géolocalisation
- Guerres et conflits détaillés (belligérants, conséquences)
- Visualisation timeline interactive
- Filtrage par période, catégorie, importance

### 4.5 Module Programme Scolaire
- Conforme au programme de l'Éducation Nationale française
- Niveaux : 6ème, 5ème, 4ème, 3ème, Seconde, Première, Terminale
- Matières : Histoire, Géographie, SVT/Géologie
- Chapitres avec objectifs et concepts clés
- Leçons avec vocabulaire et dates clés

### 4.6 Module Quiz
- QCM, Vrai/Faux, Texte libre, Association
- Difficulté progressive
- Liés au programme scolaire (optionnel)
- Chronomètre et scoring
- Explications des réponses

### 4.7 Module Vidéos
- Intégration YouTube
- Chapitrage des vidéos
- Catégorisation par thème et niveau
- Transcriptions

### 4.8 Module Recherche
- Recherche full-text PostgreSQL (tsvector + GIN)
- Recherche multi-entités (pays, personnes, articles, événements, leçons, quiz, vidéos)
- Filtrage par type et catégorie
- Suggestions de résultats

## 5. Schéma de Base de Données

```
┌─────────────────┐     ┌─────────────────────┐
│    countries     │     │  country_geography   │
├─────────────────┤     ├─────────────────────┤
│ id (PK)         │◄───┤│ country_id (FK)      │
│ name            │     │ climate              │
│ code_iso2       │     │ terrain              │
│ code_iso3       │     │ natural_resources    │
│ capital         │     │ description_text     │
│ region          │     └─────────────────────┘
│ continent       │
│ population      │     ┌─────────────────────┐
│ area_km2        │     │   country_history    │
│ languages (JSON)│     ├─────────────────────┤
│ currencies(JSON)│     │ country_id (FK)      │◄──┐
│ latitude        │     │ period               │    │
│ longitude       │     │ title                │    │
│ borders (JSON)  │     │ content              │    │
└─────────────────┘     │ year_start/end       │    │
                        └─────────────────────┘    │
                                                    │
┌─────────────────┐     ┌─────────────────────┐    │
│     persons     │     │person_contributions  │    │
├─────────────────┤     ├─────────────────────┤    │
│ id (PK)         │◄───┤│ person_id (FK)       │    │
│ slug            │     │ title                │    │
│ full_name       │     │ description          │    │
│ birth/death_date│     │ year                 │    │
│ category (ENUM) │     │ domain               │    │
│ biography_text  │     └─────────────────────┘    │
│ notable_works   │                                 │
│ quotes (JSON)   │                                 │
└─────────────────┘                                 │
                                                    │
┌─────────────────┐     ┌─────────────────────┐    │
│    articles     │     │  article_sections    │    │
├─────────────────┤     ├─────────────────────┤    │
│ id (PK)         │◄───┤│ article_id (FK)      │    │
│ slug            │     │ title                │    │
│ title           │     │ content              │    │
│ content         │     │ sort_order           │    │
│ category (ENUM) │     └─────────────────────┘    │
│ difficulty_level│                                 │
│ tags (JSON)     │                                 │
└─────────────────┘                                 │
                                                    │
┌──────────────────┐    ┌─────────────────────┐    │
│historical_periods│    │  historical_events   │    │
├──────────────────┤    ├─────────────────────┤    │
│ id (PK)          │◄──┤│ period_id (FK)       │    │
│ name             │    │ title                │    │
│ year_start/end   │    │ year, month, day     │    │
│ era (ENUM)       │    │ location             │    │
│ color_hex        │    │ importance (1-5)     │    │
└──────────────────┘    └─────────────────────┘    │
                                                    │
┌─────────────────┐                                 │
│      wars       │                                 │
├─────────────────┤                                 │
│ id (PK)         │                                 │
│ name, slug      │                                 │
│ year_start/end  │                                 │
│ belligerents    │─────────────────────────────────┘
│ casualties      │
│ outcome         │
└─────────────────┘

┌─────────────────┐    ┌──────────────┐    ┌───────────────────┐
│  school_levels  │    │   subjects   │    │curriculum_chapters│
├─────────────────┤    ├──────────────┤    ├───────────────────┤
│ id (PK)         │    │ id (PK)      │    │ level_id (FK)     │
│ name (6ème...)  │◄──┤│ name         │◄──┤│ subject_id (FK)   │
│ cycle           │    │ slug         │    │ title             │
│ sort_order      │    │ icon         │    │ objectives (JSON) │
└─────────────────┘    └──────────────┘    │ key_concepts(JSON)│
                                           └────────┬──────────┘
                                                    │
                                           ┌────────▼──────────┐
                                           │curriculum_lessons  │
                                           ├───────────────────┤
                                           │ chapter_id (FK)   │
                                           │ title             │
                                           │ content           │
                                           │ vocabulary (JSON) │
                                           │ key_dates (JSON)  │
                                           └───────────────────┘

┌─────────────────┐    ┌──────────────────┐    ┌──────────────┐
│    quizzes      │    │  quiz_questions   │    │ quiz_options  │
├─────────────────┤    ├──────────────────┤    ├──────────────┤
│ id (PK)         │◄──┤│ quiz_id (FK)      │◄──┤│question_id(FK)│
│ title           │    │ question_text     │    │ option_text  │
│ category        │    │ question_type     │    │ is_correct   │
│ difficulty      │    │ explanation       │    │ sort_order   │
│ time_limit_sec  │    │ points           │    └──────────────┘
│ level_id (FK?)  │    └──────────────────┘
└─────────────────┘

┌─────────────────┐    ┌──────────────────┐
│     videos      │    │  video_chapters   │
├─────────────────┤    ├──────────────────┤
│ id (PK)         │◄──┤│ video_id (FK)     │
│ youtube_id      │    │ title             │
│ title           │    │ start_seconds     │
│ category        │    │ end_seconds       │
│ difficulty      │    └──────────────────┘
│ transcript      │
│ level_id (FK?)  │
└─────────────────┘

┌─────────────────────────┐
│      search_index       │
├─────────────────────────┤
│ id (PK)                 │
│ entity_type (ENUM)      │
│ entity_id               │
│ title                   │
│ content_preview         │
│ search_vector (TSVECTOR)│  ◄── GIN INDEX
│ category                │
│ tags (JSON)             │
└─────────────────────────┘
```

## 6. API REST - Endpoints

### Base URL : `/api/v1`

### Pays
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/countries` | Liste des pays (pagination, filtres région/continent) |
| GET | `/countries/:code` | Détail d'un pays par code ISO |
| GET | `/countries/:code/geography` | Données géographiques d'un pays |
| GET | `/countries/:code/history` | Histoire d'un pays par périodes |

### Personnalités
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/persons` | Liste des personnalités (pagination, filtres) |
| GET | `/persons/:slug` | Détail d'une personnalité |
| GET | `/persons/category/:category` | Personnalités par catégorie |

### Articles / Encyclopédie
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/articles` | Liste des articles (pagination, filtres) |
| GET | `/articles/:slug` | Détail d'un article avec sections |
| GET | `/articles/category/:category` | Articles par catégorie |

### Chronologie
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/timeline/periods` | Liste des périodes historiques |
| GET | `/timeline/events` | Événements (filtres période, année, catégorie) |
| GET | `/timeline/events/:id` | Détail d'un événement |

### Programme Scolaire
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/curriculum/levels` | Liste des niveaux scolaires |
| GET | `/curriculum/:level/subjects` | Matières par niveau |
| GET | `/curriculum/:level/:subject/chapters` | Chapitres d'une matière |

### Quiz
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/quizzes` | Liste des quiz disponibles |
| GET | `/quizzes/:id` | Détail d'un quiz avec questions |
| POST | `/quizzes/:id/submit` | Soumettre les réponses d'un quiz |

### Recherche
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/search?q=&type=&category=` | Recherche globale full-text |

### Vidéos
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/videos` | Liste des vidéos (pagination, filtres) |
| GET | `/videos/:id` | Détail d'une vidéo avec chapitres |
| GET | `/videos/topic/:topic` | Vidéos par sujet |

## 7. Stratégie de Scalabilité

### Phase 1 - MVP (actuel)
- Monorepo avec Turborepo
- PostgreSQL unique
- Déploiement : Vercel (frontend) + Railway/Render (API + DB)
- CDN pour les assets statiques

### Phase 2 - Croissance
- Cache Redis pour les requêtes fréquentes (fiches pays, articles populaires)
- CDN images/vidéos (Cloudflare)
- Connection pooling PostgreSQL (PgBouncer)
- Monitoring (Sentry + Prometheus)

### Phase 3 - Scale
- Read replicas PostgreSQL
- Elasticsearch pour recherche avancée
- Worker queue (Bull/BullMQ) pour imports de données
- Microservices si nécessaire (quiz engine séparé)
- Authentification (NextAuth.js) pour suivi de progression

## 8. Sécurité

- **Helmet.js** : Headers HTTP sécurisés
- **CORS** : Origins autorisées uniquement
- **Rate Limiting** : Protection contre les abus
- **Zod Validation** : Validation stricte de toutes les entrées
- **SQL Injection** : Protection native via Knex (parameterized queries)
- **XSS** : React échappe par défaut, CSP headers
- **HTTPS** : Obligatoire en production
