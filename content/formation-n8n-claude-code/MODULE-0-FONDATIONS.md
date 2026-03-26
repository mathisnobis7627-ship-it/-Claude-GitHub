# FORMATION COMPLÈTE : Automatisation n8n assistée par Claude Code

## De débutant à consultant professionnel en automatisation

---

> **Public cible** : Débutant complet sur n8n, à l'aise avec Claude Code.
> **Objectif** : Être capable de vendre et livrer des prestations d'automatisation n8n aux entreprises.
> **Durée estimée** : 6 à 8 semaines à raison de 2h/jour.

---

# MODULE 0 — "La Base de Lancement"
## Installation, configuration et premiers pas avec n8n + Claude Code

### Résumé du module

Ce module pose les fondations de tout ce qui suit. Tu vas installer n8n, comprendre son fonctionnement interne, et apprendre à utiliser Claude Code comme accélérateur pour générer des workflows. Sans ces bases, tout le reste sera bancal.

**Pourquoi c'est important pour le métier** : Un consultant qui ne maîtrise pas l'infrastructure de son outil perd toute crédibilité au premier problème technique. Tes clients vont te poser des questions sur l'hébergement, la sécurité, la scalabilité. Ce module te prépare à répondre avec assurance.

---

## 0.1 — Installation et configuration de n8n 🟢 Débutant

### Concepts clés

**n8n** (prononcé "n-eight-n" ou "nodemation") est une plateforme d'automatisation open-source. Elle permet de connecter des applications entre elles via des "workflows" — des enchaînements d'actions automatiques.

Il existe deux façons d'utiliser n8n :

| | n8n Cloud | n8n Self-hosted (Docker) |
|---|---|---|
| **Prix** | À partir de 24€/mois (Starter) | Gratuit (Community Edition) |
| **Installation** | Aucune, tout est en ligne | Nécessite un serveur + Docker |
| **Maintenance** | Gérée par n8n | À ta charge |
| **Mises à jour** | Automatiques | Manuelles |
| **Idéal pour** | Démarrer vite, clients pressés | Clients soucieux de la souveraineté des données |
| **Limites** | Dépend du plan choisi | Dépend de ton serveur |

### Installation n8n Cloud (recommandé pour commencer)

1. Va sur [n8n.io](https://n8n.io)
2. Clique sur "Get started free" — tu obtiens un essai de 14 jours
3. Crée ton compte avec email professionnel
4. Tu arrives directement sur l'éditeur de workflows

> **Conseil pro** : Pour tes clients, recommande n8n Cloud pour les petites structures (moins de 50 employés) et le self-hosted pour les entreprises avec des exigences de conformité (RGPD, données sensibles).

### Installation n8n Self-hosted avec Docker

**Prérequis** :
- Un ordinateur ou serveur avec Docker installé
- Au minimum 2 Go de RAM, 20 Go de disque

**Étape 1 : Installer Docker**

Si Docker n'est pas installé sur ta machine :

```bash
# Sur Ubuntu/Debian
sudo apt update && sudo apt install docker.io docker-compose -y

# Sur Mac avec Homebrew
brew install --cask docker

# Sur Windows : télécharger Docker Desktop depuis docker.com
```

**Étape 2 : Créer le fichier docker-compose**

Crée un dossier pour ton projet n8n, puis un fichier `docker-compose.yml` :

```yaml
version: '3.8'

services:
  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=ton_mot_de_passe_securise
      - N8N_HOST=localhost
      - N8N_PORT=5678
      - N8N_PROTOCOL=http
      - GENERIC_TIMEZONE=Europe/Paris
    volumes:
      - n8n_data:/home/node/.n8n

volumes:
  n8n_data:
```

**Étape 3 : Lancer n8n**

```bash
docker-compose up -d
```

**Étape 4 : Accéder à l'interface**

Ouvre ton navigateur et va sur `http://localhost:5678`. Connecte-toi avec les identifiants définis dans le docker-compose.

**Résultat attendu** : Tu vois l'écran d'accueil de n8n avec un bouton "New Workflow" au centre.

> **Vérification** : Si tu vois une page blanche ou une erreur, tape `docker logs n8n` dans le terminal pour voir les logs et identifier le problème.

### Script Claude Code pour générer le docker-compose

```
Prompt Claude Code :
"Génère un fichier docker-compose.yml pour n8n self-hosted avec :
- PostgreSQL comme base de données (pas SQLite)
- Un volume persistant pour les données
- L'authentification basique activée
- Le timezone Europe/Paris
- Un réseau Docker dédié
- Les variables d'environnement pour la production (EXECUTIONS_DATA_PRUNE=true, etc.)
Ajoute des commentaires expliquant chaque section."
```

Ce prompt va générer une configuration de production plus robuste que l'exemple basique ci-dessus. La version avec PostgreSQL est celle que tu utiliseras pour tes clients.

---

## 0.2 — Anatomie d'un workflow n8n 🟢 Débutant

### Les 5 composants fondamentaux

#### 1. Les Nodes (Nœuds)

Un **node** est une brique élémentaire dans un workflow. Chaque node fait UNE action : lire un email, envoyer un message Slack, transformer des données, etc.

Il existe 4 types de nodes :

| Type | Rôle | Exemples |
|------|------|----------|
| **Trigger** | Déclenche le workflow | Webhook, Schedule, Email reçu |
| **Action** | Effectue une opération | Envoyer un email, créer un contact CRM |
| **Transformation** | Modifie les données | IF, Switch, Set, Function, Merge |
| **Flux** | Contrôle le parcours | IF, Switch, Loop, Wait |

**Description visuelle de l'interface** :
- L'éditeur n8n ressemble à un tableau blanc (canvas)
- Les nodes sont des rectangles colorés avec une icône
- En haut à gauche : le nom du workflow
- En haut à droite : les boutons Save, Execute, Share
- À gauche : un panneau qui s'ouvre pour chercher des nodes
- Quand tu cliques sur un node, un panneau s'ouvre à droite avec ses paramètres

#### 2. Les Connections (Liens)

Les **connections** sont les flèches qui relient les nodes entre eux. Elles définissent l'ordre d'exécution ET transportent les données.

**Règle fondamentale** : Les données sortent d'un node et entrent dans le suivant. Chaque node reçoit les données du node précédent et peut les modifier avant de les passer au suivant.

#### 3. Les Triggers (Déclencheurs)

Un **trigger** est toujours le PREMIER node d'un workflow. C'est lui qui "lance" l'automatisation.

Types de triggers courants :
- **Schedule Trigger** : se déclenche à heure fixe (ex : tous les lundis à 9h)
- **Webhook** : se déclenche quand une URL reçoit une requête HTTP
- **Email Trigger (IMAP)** : se déclenche quand un email arrive
- **App Trigger** : se déclenche sur un événement dans une app (nouveau deal Pipedrive, message Slack, etc.)

#### 4. Les Expressions

Les **expressions** permettent d'insérer des données dynamiques dans les paramètres d'un node. Syntaxe : `{{ }}`.

Exemple : Si tu veux envoyer un email personnalisé, tu écris dans le champ "Destinataire" :
```
{{ $json.email }}
```
Cela prend la valeur du champ "email" dans les données qui arrivent au node.

**Expressions courantes** :
```
{{ $json.fieldName }}              → Accéder à un champ des données entrantes
{{ $json.contact.firstName }}      → Accéder à un champ imbriqué
{{ $('Node Name').item.json.field }} → Accéder aux données d'un node spécifique
{{ $now.toISO() }}                 → Date/heure actuelle
{{ $json.amount > 1000 }}          → Condition (renvoie true/false)
```

#### 5. Les Credentials (Identifiants)

Les **credentials** sont les clés qui permettent à n8n de se connecter aux services externes (Gmail, Slack, HubSpot, etc.).

**Comment les configurer** :
1. Dans n8n, va dans Settings → Credentials
2. Clique sur "Add Credential"
3. Choisis le service (ex: Gmail)
4. Suis les instructions (souvent : autoriser via OAuth ou coller une clé API)

> **Sécurité** : Les credentials sont chiffrées dans la base de données de n8n. Ne les mets JAMAIS dans les paramètres d'un node en texte brut. Utilise TOUJOURS le système de credentials.

### Exercice pratique : Ton premier workflow

**Objectif** : Créer un workflow qui se déclenche toutes les minutes et affiche "Hello World" dans les logs.

**Étapes** :

1. Ouvre n8n et clique sur "New Workflow"
2. Clique sur le "+" au centre du canvas
3. Cherche "Schedule Trigger" et ajoute-le
4. Configure-le : Rule → Every Minute
5. Clique à nouveau sur "+" à droite du Schedule Trigger
6. Cherche "Set" et ajoute-le
7. Dans le node Set, clique sur "Add Value" → String
   - Name : `message`
   - Value : `Hello World - {{ $now.toFormat('HH:mm:ss') }}`
8. Clique sur "Execute Workflow" (bouton en haut à droite)

**Résultat attendu** : Le node Set affiche en sortie un objet JSON avec `{ "message": "Hello World - 14:32:07" }` (avec l'heure actuelle).

**Description visuelle du résultat** :
```
[Schedule Trigger] ──→ [Set]
     ⏰                  📝
  "Every minute"     message: "Hello World - 14:32:07"
```

---

## 0.3 — Le système de credentials et la sécurité 🟢 Débutant

### Comment obtenir des clés API pour les services courants

#### Gmail / Google Services
1. Va sur [console.cloud.google.com](https://console.cloud.google.com)
2. Crée un nouveau projet
3. Active les APIs nécessaires (Gmail API, Google Sheets API, etc.)
4. Va dans "Identifiants" → "Créer des identifiants" → "ID client OAuth 2.0"
5. Type d'application : "Application Web"
6. URI de redirection autorisée : `https://ton-domaine-n8n/rest/oauth2-credential/callback`
7. Copie le Client ID et le Client Secret dans n8n

#### Slack
1. Va sur [api.slack.com/apps](https://api.slack.com/apps)
2. Clique sur "Create New App" → "From scratch"
3. Nomme l'app et sélectionne ton workspace
4. Dans "OAuth & Permissions", ajoute les scopes nécessaires (chat:write, channels:read, etc.)
5. Installe l'app dans ton workspace
6. Copie le "Bot User OAuth Token" dans n8n

#### HubSpot
1. Va sur [developers.hubspot.com](https://developers.hubspot.com)
2. Crée une app (ou utilise un token d'accès privé)
3. Pour un token privé : Settings → Integrations → Private Apps → Create
4. Sélectionne les scopes (contacts, deals, etc.)
5. Copie le token dans n8n

> **Vocabulaire client** : Quand tu parles à un client, utilise "connexion sécurisée" ou "autorisation OAuth" plutôt que "clé API". Ça rassure les DSI.

### Bonnes pratiques de sécurité

1. **Un credential par client** : Ne réutilise jamais les mêmes identifiants entre deux clients
2. **Principe du moindre privilège** : Ne demande que les permissions nécessaires
3. **Documentation** : Note quels credentials sont utilisés dans quels workflows
4. **Rotation** : Planifie le renouvellement des tokens (certains expirent)
5. **Environnements séparés** : Un n8n de dev/test et un n8n de production

---

## 0.4 — Debug et error handling 🟡 Intermédiaire

### Les erreurs courantes et comment les résoudre

| Erreur | Cause probable | Solution |
|--------|---------------|----------|
| "NodeApiError" | Clé API invalide ou expirée | Recréer le credential |
| "ECONNREFUSED" | Le service distant est down | Ajouter un retry |
| "TypeError: Cannot read property" | Le champ n'existe pas dans les données | Vérifier le nom exact du champ |
| "429 Too Many Requests" | Trop de requêtes API | Ajouter un node Wait ou réduire la fréquence |
| "ETIMEDOUT" | Timeout réseau | Augmenter le timeout dans les settings du node |

### Le node Error Trigger

Le **Error Trigger** est un node spécial qui se déclenche quand un workflow échoue. C'est essentiel en production.

**Workflow de gestion d'erreurs** :
```
[Error Trigger] ──→ [Slack] ──→ [Google Sheets]
     ⚠️               💬            📊
  "On error"     "Envoyer alerte"  "Logger l'erreur"
```

**Configuration** :
1. Crée un nouveau workflow nommé "Error Handler Global"
2. Ajoute un node "Error Trigger"
3. Connecte-le à un node Slack (pour recevoir l'alerte)
4. Dans le node Slack, configure le message :
```
🚨 Erreur dans le workflow : {{ $json.workflow.name }}
Node en erreur : {{ $json.execution.error.node }}
Message : {{ $json.execution.error.message }}
Heure : {{ $now.toFormat('dd/MM/yyyy HH:mm') }}
```
5. Dans chaque workflow de production, va dans Settings → Error Workflow → sélectionne "Error Handler Global"

### Les retries (tentatives automatiques)

Dans les paramètres de chaque node (onglet "Settings") :
- **Retry On Fail** : Active les tentatives automatiques
- **Max Tries** : Nombre de tentatives (recommandé : 3)
- **Wait Between Tries** : Délai entre chaque tentative (recommandé : 1000ms minimum)

> **Piège courant** : Ne mets JAMAIS de retry sur un node qui crée des données (ex : créer un contact CRM). Tu risques de créer des doublons. Les retries sont pour les lectures et les envois de notifications.

---

## 0.5 — Utiliser Claude Code pour générer des workflows n8n 🟢 Débutant

### Le format JSON des workflows n8n

Chaque workflow n8n peut être exporté en JSON. Ce JSON contient :
- La liste des nodes avec leurs paramètres
- Les connections entre nodes
- Les paramètres globaux du workflow

**Comment exporter** : Dans n8n, ouvre un workflow → Menu (⋮) → Download

**Comment importer** : Dans n8n, page d'accueil → Import from file (ou coller du JSON)

### Structure d'un workflow JSON n8n

```json
{
  "name": "Mon Workflow",
  "nodes": [
    {
      "parameters": {},
      "id": "uuid-unique",
      "name": "Schedule Trigger",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.2,
      "position": [250, 300]
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "uuid",
              "name": "message",
              "value": "Hello World",
              "type": "string"
            }
          ]
        }
      },
      "id": "uuid-unique-2",
      "name": "Set",
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [470, 300]
    }
  ],
  "connections": {
    "Schedule Trigger": {
      "main": [
        [
          {
            "node": "Set",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "settings": {
    "executionOrder": "v1"
  }
}
```

### Le prompt parfait pour Claude Code

Pour obtenir un workflow n8n fonctionnel de Claude Code, ton prompt doit contenir :

1. **L'objectif** : Que doit faire le workflow ?
2. **Le trigger** : Qu'est-ce qui déclenche l'automatisation ?
3. **Les étapes** : Quelles actions dans quel ordre ?
4. **Les services** : Quelles applications sont impliquées ?
5. **La gestion d'erreurs** : Que faire si quelque chose échoue ?
6. **Le format de sortie** : Préciser "en JSON n8n importable"

**Template de prompt** :

```
Génère un workflow n8n en JSON importable qui fait ceci :

OBJECTIF : [description claire]
DÉCLENCHEUR : [quand le workflow se lance]
ÉTAPES :
1. [première action]
2. [deuxième action]
3. [etc.]

SERVICES UTILISÉS : [liste des apps]
GESTION D'ERREURS : [comportement souhaité en cas d'erreur]

Contraintes :
- Utilise les types de nodes n8n officiels (n8n-nodes-base.*)
- Inclus des positions cohérentes pour chaque node
- Ajoute des notes/descriptions sur les nodes complexes
- Le JSON doit être directement importable dans n8n v1.x
```

### Comment importer un workflow généré par Claude Code

1. Copie le JSON généré par Claude Code
2. Ouvre n8n
3. Sur la page d'accueil, clique sur les trois points (⋮) → "Import from URL" ou colle directement
4. Ou : ouvre un nouveau workflow → Menu (⋮) → "Import from JSON" → Colle le JSON
5. **Important** : Après l'import, tu dois configurer les credentials manuellement (Claude Code ne peut pas les générer pour des raisons de sécurité)
6. Teste le workflow en cliquant sur "Execute Workflow"

### Comment adapter un workflow pour un client

Après avoir généré un workflow avec Claude Code :

1. **Remplace les valeurs d'exemple** par les vraies données du client
2. **Configure les credentials** avec les accès du client
3. **Teste chaque node** individuellement (clic droit → Execute Node)
4. **Ajuste les filtres** selon les besoins spécifiques
5. **Active les retries** sur les nodes critiques
6. **Connecte le Error Handler** pour le monitoring

```
Prompt Claude Code pour adapter :
"Prends ce workflow n8n [colle le JSON] et adapte-le pour :
- Remplacer Slack par Microsoft Teams
- Ajouter un filtre pour ne traiter que les contacts avec un email professionnel
- Ajouter un node de logging dans Google Sheets
- Ajouter la gestion d'erreurs avec notification par email
Fournis le JSON modifié."
```

---

## 0.6 — Vocabulaire professionnel essentiel 🟢 Débutant

| Terme technique | Ce que tu dis au client | Explication |
|----------------|------------------------|-------------|
| Workflow | "Processus automatisé" ou "flux de travail" | Un enchaînement d'actions automatiques |
| Node | "Étape" ou "brique" | Une action unitaire dans le processus |
| Trigger | "Déclencheur" | Ce qui lance l'automatisation |
| Webhook | "Point d'entrée" ou "URL de réception" | Une URL qui reçoit des données et lance le workflow |
| Credential | "Connexion sécurisée" | Les identifiants pour se connecter à un service |
| API | "Interface de connexion" | Le moyen technique de faire communiquer deux logiciels |
| JSON | "Format de données" | Le format dans lequel les données circulent |
| Execution | "Exécution" ou "lancement" | Une fois que le workflow s'est lancé et a fait son travail |
| Error handling | "Gestion des erreurs" | Ce qui se passe quand quelque chose ne marche pas |
| Retry | "Tentative automatique" | Réessayer automatiquement en cas d'échec |
| Self-hosted | "Hébergé en interne" | Installé sur les serveurs du client |
| SaaS / Cloud | "En ligne" ou "hébergé" | Accessible via internet, géré par un prestataire |

---

## Checklist Module 0 — "Je suis prêt quand je sais faire..."

- [ ] Installer n8n en local avec Docker ET créer un compte n8n Cloud
- [ ] Créer un workflow simple avec un trigger et un node d'action
- [ ] Comprendre la différence entre les 4 types de nodes
- [ ] Utiliser les expressions `{{ }}` pour insérer des données dynamiques
- [ ] Configurer un credential OAuth (ex : Gmail)
- [ ] Exporter un workflow en JSON et le réimporter
- [ ] Utiliser Claude Code pour générer un workflow n8n en JSON
- [ ] Importer un workflow généré par Claude Code et le faire fonctionner
- [ ] Mettre en place un Error Handler global
- [ ] Expliquer n8n à un non-technique en 3 phrases sans jargon

---
