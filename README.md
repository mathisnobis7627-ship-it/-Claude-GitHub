# Atlas EdTech

Plateforme éducative interactive couvrant la géographie, l'histoire, la géologie et les personnalités historiques. Alignée sur le programme officiel de l'Éducation nationale française (6ème → Terminale).

## Architecture

```
atlas-edtech/
├── apps/
│   ├── api/          # Backend Express.js + TypeScript + Knex + PostgreSQL
│   └── web/          # Frontend Next.js 15 + React 19 + Tailwind CSS
├── packages/
│   └── shared/       # Types et utilitaires partagés
└── package.json      # Turborepo monorepo
```

## Stack technique

| Couche | Technologies |
|--------|-------------|
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS, Zustand, TanStack React Query |
| **Backend** | Express.js, TypeScript, Knex.js (query builder), Zod (validation) |
| **Base de données** | PostgreSQL 15+ avec UUID, full-text search |
| **Monorepo** | Turborepo avec npm workspaces |

## Prérequis

- **Node.js** >= 20.0.0
- **npm** >= 9
- **PostgreSQL** >= 15

## Installation

```bash
# 1. Cloner le dépôt
git clone <repo-url>
cd atlas-edtech

# 2. Installer les dépendances
npm install

# 3. Configurer l'environnement
cp apps/api/.env.example apps/api/.env
# Modifier les variables selon votre configuration PostgreSQL
```

## Configuration `.env`

Créer le fichier `apps/api/.env` :

```env
# Base de données
DB_HOST=localhost
DB_PORT=5432
DB_NAME=atlas_dev
DB_USER=postgres
DB_PASSWORD=postgres

# Serveur API
PORT=3001
NODE_ENV=development

# JWT (optionnel, pour l'authentification future)
JWT_SECRET=votre-secret-jwt-ici
JWT_EXPIRES_IN=7d

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

## Configuration PostgreSQL

```bash
# Créer la base de données
createdb atlas_dev

# OU via psql
psql -U postgres -c "CREATE DATABASE atlas_dev;"
```

## Migrations et Seeds

```bash
# Exécuter les migrations (créer les tables)
npm run db:migrate

# Peupler la base avec les données de démonstration
npm run db:seed
```

### Tables créées par les migrations

| Table | Description |
|-------|-------------|
| `countries` | Pays du monde (195 pays) |
| `country_geographies` | Données géographiques par pays |
| `country_histories` | Périodes historiques par pays |
| `persons` | Personnalités historiques |
| `articles` | Articles encyclopédiques |
| `article_sections` | Sections d'articles |
| `historical_periods` | Périodes de la frise chronologique |
| `historical_events` | Événements historiques |
| `school_levels` | Niveaux scolaires (6ème → Terminale) |
| `subjects` | Matières (Histoire, Géographie, EMC) |
| `curriculum_chapters` | Chapitres du programme |
| `curriculum_lessons` | Leçons détaillées |
| `quizzes` | Quiz interactifs |
| `quiz_questions` | Questions de quiz |
| `quiz_options` | Options de réponse |
| `videos` | Vidéos éducatives |
| `search_index` | Index de recherche full-text |

## Lancement

```bash
# Lancer les deux apps en développement (frontend + backend)
npm run dev

# OU séparément :
# Backend seul (port 3001)
npm run --workspace=apps/api dev

# Frontend seul (port 3000)
npm run --workspace=apps/web dev
```

## Endpoints API

Base URL : `http://localhost:3001/api/v1`

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/countries` | Liste des pays (paginée) |
| GET | `/countries/:code` | Détail d'un pays par code ISO |
| GET | `/countries/:id/geography` | Géographie d'un pays |
| GET | `/countries/:id/history` | Histoire d'un pays |
| GET | `/persons` | Liste des personnalités (paginée) |
| GET | `/persons/:slug` | Détail d'une personnalité |
| GET | `/articles` | Liste des articles (paginée) |
| GET | `/articles/:slug` | Détail d'un article |
| GET | `/timeline` | Périodes et événements historiques |
| GET | `/timeline/events/:id` | Détail d'un événement |
| GET | `/curriculum/levels` | Niveaux scolaires |
| GET | `/curriculum/:level/subjects` | Matières par niveau |
| GET | `/curriculum/:level/chapters` | Chapitres par niveau |
| GET | `/curriculum/:level/:subject/chapters` | Chapitres par niveau et matière |
| GET | `/quizzes` | Liste des quiz (paginée) |
| GET | `/quizzes/:id` | Détail d'un quiz avec questions |
| POST | `/quizzes/:id/submit` | Soumettre les réponses d'un quiz |
| GET | `/videos` | Liste des vidéos (paginée) |
| GET | `/videos/:id` | Détail d'une vidéo |
| GET | `/search?q=...` | Recherche full-text globale |
| GET | `/search/suggest?q=...` | Suggestions de recherche |
| GET | `/search/filters` | Filtres de recherche disponibles |

## Pages Frontend

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil |
| `/pays` | Liste des pays avec filtres par continent |
| `/pays/[code]` | Fiche détaillée d'un pays |
| `/personnalites` | Liste des personnalités historiques |
| `/personnalites/[slug]` | Biographie détaillée |
| `/chronologie` | Frise chronologique interactive |
| `/programme` | Programme scolaire par niveau |
| `/programme/[niveau]` | Chapitres d'un niveau |
| `/quiz` | Liste des quiz disponibles |
| `/quiz/[id]` | Jouer un quiz interactif |
| `/videos` | Vidéos éducatives |
| `/encyclopedie` | Articles encyclopédiques |
| `/recherche` | Recherche globale avec filtres |

## Build de production

```bash
# Build complet
npm run build

# Lancer en production
npm run --workspace=apps/api start
npm run --workspace=apps/web start
```

## Licence

Projet éducatif — usage scolaire.
