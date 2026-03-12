/**
 * ATLAS — Encyclopédie : L'Antiquité
 * Niveau : à partir de 12 ans (6ème)
 */

export const antiquite = {
  slug: 'l-antiquite',
  title: 'L\'Antiquité',
  subtitle: 'De l\'invention de l\'écriture à la chute de Rome (3 300 av. J.-C. — 476 apr. J.-C.)',
  category: 'history',
  difficulty_level: 'debutant',
  reading_time_minutes: 18,
  tags: ['Antiquité', 'Égypte', 'Grèce', 'Rome', 'Mésopotamie', 'Écriture'],

  explication_simple: `
    L'**Antiquité** commence avec l'invention de l'**écriture** en Mésopotamie, vers
    3 300 av. J.-C., et se termine avec la **chute de l'Empire romain d'Occident** en
    476 apr. J.-C. C'est une période extraordinaire pendant laquelle naissent les
    premières **grandes civilisations**.

    Les principales civilisations antiques sont :
    - La **Mésopotamie** (Irak actuel) : première écriture (cunéiforme), premières lois (code de Hammurabi).
    - L'**Égypte** des pharaons : pyramides, hiéroglyphes, momification.
    - La **Grèce** antique : démocratie, philosophie, théâtre, Jeux olympiques.
    - **Rome** : République, puis Empire ; droit romain, routes, aqueducs.

    Ces civilisations nous ont laissé un héritage immense : l'alphabet, la démocratie,
    les mathématiques, la philosophie, le droit… Presque tout ce qui fonde notre monde
    moderne a ses racines dans l'Antiquité.
  `,

  definitions: [
    { terme: 'Antiquité', definition: 'Période historique allant de l\'invention de l\'écriture (~3 300 av. J.-C.) à la chute de l\'Empire romain d\'Occident (476 apr. J.-C.).' },
    { terme: 'Civilisation', definition: 'Société organisée avec des villes, une écriture, des lois, un gouvernement et une culture (art, religion, science).' },
    { terme: 'Cité-État', definition: 'Ville indépendante qui se gouverne elle-même, avec son propre territoire, ses lois et son armée. Exemples : Athènes, Sparte, Rome.' },
    { terme: 'Démocratie', definition: 'Système politique où le pouvoir appartient aux citoyens. Inventée à Athènes au Ve siècle av. J.-C. Du grec « demos » (peuple) et « kratos » (pouvoir).' },
    { terme: 'République', definition: 'Système politique où le pouvoir n\'est pas héréditaire mais exercé par des représentants élus. Rome est une République de 509 à 27 av. J.-C.' },
    { terme: 'Polythéisme', definition: 'Croyance en plusieurs dieux (Zeus, Athéna, Jupiter, Isis…). Toutes les grandes civilisations antiques sont polythéistes.' },
    { terme: 'Pharaon', definition: 'Titre du souverain d\'Égypte ancienne, considéré comme un dieu vivant sur Terre.' },
    { terme: 'Hiéroglyphes', definition: 'Système d\'écriture égyptien utilisant des dessins et des symboles. Déchiffrés en 1822 par Champollion grâce à la pierre de Rosette.' },
  ],

  schema_pedagogique: {
    titre: 'Les 4 grandes civilisations antiques',
    type: 'fiches_comparatives',
    contenu: [
      {
        civilisation: 'Mésopotamie',
        localisation: 'Entre le Tigre et l\'Euphrate (Irak actuel)',
        periode: '3 300 — 539 av. J.-C.',
        apports: ['Écriture cunéiforme', 'Code de Hammurabi (premières lois)', 'Roue', 'Système de numération base 60 (heure = 60 min)'],
        personnage_cle: 'Hammurabi, roi de Babylone',
        monument: 'Ziggourat d\'Ur',
      },
      {
        civilisation: 'Égypte ancienne',
        localisation: 'Vallée du Nil (Égypte)',
        periode: '3 100 — 30 av. J.-C.',
        apports: ['Hiéroglyphes', 'Pyramides', 'Papyrus', 'Médecine', 'Calendrier solaire'],
        personnage_cle: 'Ramsès II, Cléopâtre VII',
        monument: 'Pyramides de Gizeh, Sphinx',
      },
      {
        civilisation: 'Grèce antique',
        localisation: 'Péninsule balkanique et îles de la mer Égée',
        periode: '800 — 146 av. J.-C.',
        apports: ['Démocratie', 'Philosophie (Socrate, Platon, Aristote)', 'Théâtre', 'Jeux olympiques', 'Alphabet'],
        personnage_cle: 'Périclès, Alexandre le Grand',
        monument: 'Parthénon d\'Athènes',
      },
      {
        civilisation: 'Rome antique',
        localisation: 'Italie, puis tout le bassin méditerranéen',
        periode: '753 av. J.-C. — 476 apr. J.-C.',
        apports: ['Droit romain', 'Routes et aqueducs', 'Latin (origine des langues romanes)', 'Architecture (arcs, voûtes, dômes)'],
        personnage_cle: 'Jules César, Auguste',
        monument: 'Colisée, Panthéon',
      },
    ],
  },

  faits_importants: [
    'L\'écriture **cunéiforme** (Mésopotamie) et les **hiéroglyphes** (Égypte) apparaissent presque en même temps, vers 3 300 av. J.-C.',
    'La **Grande Pyramide de Gizeh** (pharaon Khéops) mesure 146 m de haut — elle est restée le plus haut édifice du monde pendant **3 800 ans** !',
    'Les **Jeux olympiques** antiques ont lieu tous les 4 ans à Olympie (Grèce) de 776 av. J.-C. à 393 apr. J.-C.',
    'À son apogée, l\'**Empire romain** s\'étend de l\'Écosse à l\'Irak et compte **60 millions d\'habitants**.',
    'Le **Colisée de Rome** pouvait accueillir **50 000 spectateurs** — plus que bien des stades modernes.',
    'Athènes comptait environ 40 000 citoyens sur 300 000 habitants — seuls les hommes libres pouvaient voter.',
    'Les Romains ont construit plus de **80 000 km de routes** — un réseau qui a structuré l\'Europe pour des siècles.',
  ],

  chronologie: [
    { date: '~3 300 av. J.-C.', evenement: 'Invention de l\'écriture en Mésopotamie → début de l\'Antiquité' },
    { date: '~3 100 av. J.-C.', evenement: 'Unification de l\'Égypte par le pharaon Narmer' },
    { date: '~2 600 av. J.-C.', evenement: 'Construction de la pyramide de Khéops à Gizeh' },
    { date: '~1 750 av. J.-C.', evenement: 'Code de Hammurabi, premier code de lois écrit' },
    { date: '776 av. J.-C.', evenement: 'Premiers Jeux olympiques à Olympie' },
    { date: '753 av. J.-C.', evenement: 'Fondation légendaire de Rome par Romulus' },
    { date: '508 av. J.-C.', evenement: 'Clisthène instaure la démocratie à Athènes' },
    { date: '490 av. J.-C.', evenement: 'Bataille de Marathon — victoire des Grecs sur les Perses' },
    { date: '431-404 av. J.-C.', evenement: 'Guerre du Péloponnèse (Athènes vs Sparte)' },
    { date: '336-323 av. J.-C.', evenement: 'Conquêtes d\'Alexandre le Grand' },
    { date: '44 av. J.-C.', evenement: 'Assassinat de Jules César' },
    { date: '27 av. J.-C.', evenement: 'Auguste devient le premier empereur romain' },
    { date: '79 apr. J.-C.', evenement: 'Éruption du Vésuve, destruction de Pompéi' },
    { date: '476 apr. J.-C.', evenement: 'Chute de l\'Empire romain d\'Occident → fin de l\'Antiquité' },
  ],

  anecdote: `
    🏛️ **Le béton romain est plus solide que le nôtre !** — Les ingénieurs romains
    utilisaient un béton spécial à base de cendres volcaniques (pouzzolane) et d'eau de
    mer. Des études récentes ont montré que ce béton **se renforce avec le temps** :
    l'eau de mer provoque des réactions chimiques qui comblent les fissures. Le Panthéon
    de Rome, construit il y a 2 000 ans, possède le plus grand dôme en béton non armé
    du monde (43 m de diamètre) — et il tient toujours debout ! Notre béton moderne,
    lui, commence à se dégrader après 50 ans.
  `,

  videos_educatives: [
    { titre: 'L\'Égypte des pharaons — C\'est pas sorcier', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-egypte' },
    { titre: 'La démocratie athénienne', source: 'Lumni', url: 'https://www.lumni.fr/video/la-democratie-athenienne' },
    { titre: 'Rome : de la République à l\'Empire', source: 'Lumni', url: 'https://www.lumni.fr/video/rome-republique-empire' },
  ],
};
