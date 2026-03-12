/**
 * ATLAS — Encyclopédie : Les volcans
 * Niveau : à partir de 12 ans (6ème / 4ème)
 */

export const volcans = {
  slug: 'les-volcans',
  title: 'Les volcans',
  subtitle: 'Quand la Terre crache le feu : comprendre le volcanisme',
  category: 'geology',
  difficulty_level: 'intermediaire',
  reading_time_minutes: 16,
  tags: ['Volcans', 'Éruptions', 'Magma', 'Lave', 'Ceinture de feu', 'Pompéi'],

  explication_simple: `
    Un **volcan** est une ouverture dans la croûte terrestre par laquelle remontent
    du **magma** (roche fondue), des **gaz** et des **cendres** depuis les profondeurs
    de la Terre. C'est un peu comme une « soupape de sécurité » de notre planète.

    Voici comment ça fonctionne :
    1. Sous le volcan, il y a une **chambre magmatique** : un réservoir de roche fondue
       à plus de 1 000 °C.
    2. La pression des gaz pousse le magma vers le haut à travers la **cheminée**.
    3. Quand le magma sort du volcan, on l'appelle **lave**. Et BOUM : c'est l'**éruption** !

    Il existe deux grands types d'éruptions :
    - **Effusive** (lave fluide qui coule) — moins dangereux mais spectaculaire.
    - **Explosive** (explosions violentes, nuées ardentes, cendres) — très dangereux.

    Le type d'éruption dépend de la **viscosité du magma** : un magma fluide s'écoule
    calmement, un magma visqueux forme un bouchon et provoque une explosion.
  `,

  definitions: [
    { terme: 'Volcan', definition: 'Relief formé par l\'accumulation de lave et de débris autour d\'une ouverture de la croûte terrestre (cratère).' },
    { terme: 'Magma', definition: 'Roche en fusion (1 000 à 1 300 °C) contenant des gaz dissous, située sous la surface terrestre dans la chambre magmatique.' },
    { terme: 'Lave', definition: 'Nom du magma une fois qu\'il est sorti du volcan. En refroidissant, la lave se solidifie et forme de nouvelles roches.' },
    { terme: 'Chambre magmatique', definition: 'Réservoir souterrain de magma situé sous le volcan, généralement entre 1 et 10 km de profondeur.' },
    { terme: 'Éruption effusive', definition: 'Éruption calme où la lave fluide s\'écoule en coulées le long des pentes du volcan. Exemple : Piton de la Fournaise (La Réunion).' },
    { terme: 'Éruption explosive', definition: 'Éruption violente avec projections de cendres, bombes volcaniques et nuées ardentes. Exemple : Vésuve (Pompéi), Mont Saint Helens.' },
    { terme: 'Nuée ardente', definition: 'Nuage brûlant (200-700 °C) de gaz, cendres et fragments de roche qui dévale les pentes à plus de 100 km/h. Extrêmement mortel.' },
    { terme: 'Ceinture de feu', definition: 'Zone en forme d\'anneau autour de l\'océan Pacifique concentrant 75 % des volcans actifs du monde (Japon, Indonésie, Andes, Cascades).' },
    { terme: 'Volcan bouclier', definition: 'Volcan large et peu élevé, formé par l\'accumulation de coulées de lave fluide (ex. : Mauna Loa, Hawaï).' },
    { terme: 'Stratovolcan', definition: 'Volcan conique formé par l\'alternance de coulées de lave et de dépôts de cendres (ex. : Fuji, Vésuve, Etna). Les plus dangereux.' },
  ],

  schema_pedagogique: {
    titre: 'Éruption effusive vs éruption explosive',
    type: 'comparaison',
    contenu: {
      criteres: ['Type de magma', 'Comportement', 'Danger', 'Forme du volcan', 'Exemples célèbres'],
      effusive: [
        'Magma fluide (basaltique), pauvre en silice',
        'La lave s\'écoule en coulées le long des pentes',
        'Modéré — les coulées sont lentes, on peut évacuer',
        'Volcan bouclier (large et plat)',
        'Piton de la Fournaise (La Réunion), Kilauea (Hawaï), Etna (Sicile)',
      ],
      explosive: [
        'Magma visqueux (andésitique/rhyolitique), riche en silice',
        'Le bouchon de magma explose violemment, projetant cendres et bombes',
        'Très élevé — nuées ardentes, lahars, retombées de cendres',
        'Stratovolcan (conique et élevé)',
        'Vésuve (Italie), Mont Saint Helens (USA), Pinatubo (Philippines)',
      ],
    },
  },

  faits_importants: [
    'Il y a environ **1 500 volcans actifs** sur Terre, dont une cinquantaine en éruption chaque année.',
    'L\'éruption du **Vésuve** en 79 apr. J.-C. a enseveli **Pompéi** et **Herculanum** sous 6 mètres de cendres, tuant ~2 000 personnes.',
    'Le **Mauna Kea** (Hawaï) est le plus haut volcan si on mesure depuis le fond de l\'océan : **10 203 m** (plus que l\'Everest !).',
    'L\'éruption du **Tambora** (Indonésie, 1815) a projeté tant de cendres que 1816 a été l\'« **année sans été** » en Europe.',
    'En 1883, l\'explosion du **Krakatoa** (Indonésie) a été entendue à **5 000 km** — c\'est le son le plus fort jamais enregistré.',
    'Le **supervolcan de Yellowstone** (USA) possède une chambre magmatique de **56 000 km³**. Sa dernière éruption remonte à 640 000 ans.',
    'Les volcans sous-marins sont **3 fois plus nombreux** que les volcans terrestres : on en estime **1 million** au fond des océans.',
    'Le Piton de la Fournaise (La Réunion) est l\'un des **volcans les plus actifs** au monde : il entre en éruption environ tous les 8 mois.',
  ],

  chronologie: [
    { date: '~74 000 ans', evenement: 'Éruption du supervolcan Toba (Sumatra) — quasi-extinction de l\'humanité' },
    { date: '~1 600 av. J.-C.', evenement: 'Éruption de Santorin (Grèce) — possible origine du mythe de l\'Atlantide' },
    { date: '79 apr. J.-C.', evenement: 'Éruption du Vésuve — destruction de Pompéi et Herculanum' },
    { date: '1783', evenement: 'Éruption du Laki (Islande) — brouillard toxique sur l\'Europe, famines' },
    { date: '1815', evenement: 'Éruption du Tambora (Indonésie) — "année sans été" en 1816' },
    { date: '1883', evenement: 'Explosion du Krakatoa (Indonésie) — 36 000 morts, son entendu à 5 000 km' },
    { date: '1902', evenement: 'Éruption de la montagne Pelée (Martinique) — 29 000 morts à Saint-Pierre' },
    { date: '1980', evenement: 'Éruption du Mont Saint Helens (USA) — le flanc nord s\'effondre' },
    { date: '1991', evenement: 'Éruption du Pinatubo (Philippines) — refroidissement global de 0,5 °C' },
    { date: '2010', evenement: 'Éruption de l\'Eyjafjallajökull (Islande) — paralysie du trafic aérien européen' },
  ],

  anecdote: `
    🌋 **Le seul survivant de Saint-Pierre** — Le 8 mai 1902, la montagne Pelée
    (Martinique) explose. Une nuée ardente à 400 °C dévale la pente et détruit la
    ville de **Saint-Pierre** en 2 minutes, tuant 29 000 personnes. Un seul homme
    survit : **Louis-Auguste Cyparis**, un prisonnier enfermé dans un cachot aux murs
    épais et semi-enterré, qui l'a protégé de la chaleur. Gravement brûlé mais vivant,
    il sera gracié et deviendra une attraction du cirque Barnum, présenté comme
    « l'homme qui a survécu au Jugement dernier ».
  `,

  videos_educatives: [
    { titre: 'Les volcans — C\'est pas sorcier', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-volcans' },
    { titre: 'Volcans effusifs et explosifs', source: 'Lumni', url: 'https://www.lumni.fr/video/volcans-effusifs-explosifs' },
    { titre: 'La montagne Pelée et Saint-Pierre', source: 'Lumni', url: 'https://www.lumni.fr/video/montagne-pelee' },
  ],
};
