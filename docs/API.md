# Atlas API - Documentation

## Base URL

```
Development : http://localhost:4000/api/v1
Production  : https://api.atlas-edu.com/api/v1
```

## Format des réponses

Toutes les réponses suivent ce format :

```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "per_page": 20,
    "total": 195,
    "total_pages": 10
  }
}
```

En cas d'erreur :

```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Pays non trouvé"
  }
}
```

## Pagination

Tous les endpoints de liste supportent :
- `page` (défaut: 1)
- `per_page` (défaut: 20, max: 100)
- `sort` (champ de tri)
- `order` (asc | desc)

## Endpoints

---

### Pays

#### `GET /countries`

Liste paginée des pays.

**Query params :**
| Param | Type | Description |
|-------|------|-------------|
| `region` | string | Filtrer par région (Europe, Asia, Africa...) |
| `continent` | string | Filtrer par continent |
| `search` | string | Recherche par nom |
| `page` | number | Page (défaut: 1) |
| `per_page` | number | Résultats par page (défaut: 20) |

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "France",
      "official_name": "République française",
      "code_iso2": "FR",
      "code_iso3": "FRA",
      "capital": "Paris",
      "region": "Europe",
      "continent": "Europe",
      "population": 67390000,
      "area_km2": 551695,
      "flag_url": "/flags/fr.svg"
    }
  ]
}
```

#### `GET /countries/:code`

Détail complet d'un pays (code ISO2 ou ISO3).

#### `GET /countries/:code/geography`

Données géographiques détaillées (climat, terrain, ressources).

#### `GET /countries/:code/history`

Historique du pays, trié par périodes chronologiques.

---

### Personnalités

#### `GET /persons`

**Query params :**
| Param | Type | Description |
|-------|------|-------------|
| `category` | string | philosopher, scientist, artist, writer, musician, politician, explorer, inventor |
| `era` | string | Filtrer par époque |
| `nationality` | string | Filtrer par nationalité |
| `search` | string | Recherche par nom |

#### `GET /persons/:slug`

Détail complet avec biographie, œuvres, citations, contributions.

#### `GET /persons/category/:category`

Liste filtrée par catégorie.

---

### Articles

#### `GET /articles`

**Query params :**
| Param | Type | Description |
|-------|------|-------------|
| `category` | string | geography, history, geology, science, culture, war, politics |
| `difficulty` | string | debutant, intermediaire, avance |
| `tag` | string | Filtrer par tag |

#### `GET /articles/:slug`

Article complet avec toutes les sections.

---

### Chronologie

#### `GET /timeline/periods`

Toutes les périodes historiques avec intervalles.

#### `GET /timeline/events`

**Query params :**
| Param | Type | Description |
|-------|------|-------------|
| `period_id` | number | Filtrer par période |
| `year_start` | number | Année de début |
| `year_end` | number | Année de fin |
| `category` | string | Catégorie d'événement |
| `importance` | number | Importance minimum (1-5) |

#### `GET /timeline/events/:id`

Détail d'un événement historique.

---

### Programme Scolaire

#### `GET /curriculum/levels`

```json
{
  "data": [
    { "id": 1, "name": "6ème", "cycle": "cycle3", "sort_order": 1 },
    { "id": 2, "name": "5ème", "cycle": "cycle4", "sort_order": 2 },
    { "id": 7, "name": "Terminale", "cycle": "lycee", "sort_order": 7 }
  ]
}
```

#### `GET /curriculum/:level/subjects`

Matières disponibles pour un niveau donné.

#### `GET /curriculum/:level/:subject/chapters`

Chapitres avec objectifs pédagogiques et concepts clés.

---

### Quiz

#### `GET /quizzes`

**Query params :**
| Param | Type | Description |
|-------|------|-------------|
| `category` | string | Catégorie du quiz |
| `difficulty` | string | Niveau de difficulté |
| `level_id` | number | Niveau scolaire associé |

#### `GET /quizzes/:id`

Quiz complet avec questions et options (sans indication des bonnes réponses).

#### `POST /quizzes/:id/submit`

**Body :**
```json
{
  "answers": [
    { "question_id": 1, "selected_option_ids": [3] },
    { "question_id": 2, "selected_option_ids": [5] },
    { "question_id": 3, "answer_text": "1789" }
  ]
}
```

**Réponse :**
```json
{
  "data": {
    "score": 8,
    "total": 10,
    "percentage": 80,
    "results": [
      {
        "question_id": 1,
        "correct": true,
        "correct_option_ids": [3],
        "explanation": "Paris est la capitale de la France depuis..."
      }
    ]
  }
}
```

---

### Recherche

#### `GET /search`

**Query params :**
| Param | Type | Description |
|-------|------|-------------|
| `q` | string | **Requis.** Terme de recherche |
| `type` | string | Filtrer par type (country, person, article, event, lesson, quiz, video) |
| `category` | string | Filtrer par catégorie |
| `limit` | number | Nombre de résultats (défaut: 20) |

**Réponse :**
```json
{
  "data": [
    {
      "entity_type": "person",
      "entity_id": 42,
      "title": "Marie Curie",
      "content_preview": "Physicienne et chimiste, double prix Nobel...",
      "category": "scientist",
      "relevance": 0.95
    }
  ]
}
```

---

### Vidéos

#### `GET /videos`

**Query params :**
| Param | Type | Description |
|-------|------|-------------|
| `category` | string | Catégorie |
| `difficulty` | string | Niveau de difficulté |
| `level_id` | number | Niveau scolaire |

#### `GET /videos/:id`

Vidéo avec chapitres et métadonnées.

#### `GET /videos/topic/:topic`

Vidéos liées à un sujet spécifique.

---

## Codes d'erreur

| Code HTTP | Code erreur | Description |
|-----------|-------------|-------------|
| 400 | `VALIDATION_ERROR` | Paramètres invalides |
| 404 | `NOT_FOUND` | Ressource non trouvée |
| 429 | `RATE_LIMITED` | Trop de requêtes |
| 500 | `INTERNAL_ERROR` | Erreur serveur |
