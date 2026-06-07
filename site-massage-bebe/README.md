# 🌸 Petits Pétales — Site de massage bébé

Site vitrine élégant et apaisant pour une activité de **massage pour bébé**.
Conçu en HTML / CSS / JavaScript pur — aucun build, aucune dépendance.

## Aperçu

Une page unique au design doux (palette pêche, sauge et crème) avec :

- **Hero** accueillant avec illustration animée et statistiques
- **À propos** de la praticienne
- **Bienfaits** du massage bébé (sommeil, coliques, lien parent-enfant…)
- **Séances** proposées (découverte, cycle, ateliers groupe)
- **Tarifs** en 3 formules claires
- **Témoignages** de familles
- **Formulaire de contact** avec validation
- Design **100 % responsive** + animations au défilement
- Respect de `prefers-reduced-motion` (accessibilité)

## Utilisation

Ouvrez simplement `index.html` dans un navigateur :

```bash
# ou via un petit serveur local
cd site-massage-bebe
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Personnalisation

| Élément | Où le modifier |
|---|---|
| Nom, textes, tarifs | `index.html` |
| Couleurs, polices | variables CSS en haut de `styles.css` (`:root`) |
| Coordonnées (tél, email) | section `#contact` dans `index.html` |
| Comportement du formulaire | `script.js` (actuellement démo front, à brancher sur un service d'envoi) |

> Le formulaire est une démo côté client. Pour recevoir réellement les messages,
> connectez-le à un service comme Formspree, Netlify Forms ou votre propre API.

## Structure

```
site-massage-bebe/
├── index.html   # contenu & structure
├── styles.css   # design & responsive
├── script.js    # menu mobile, animations, formulaire
└── README.md
```

Fait avec 💛 pour accompagner les tout-petits.
