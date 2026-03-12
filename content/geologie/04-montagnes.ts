/**
 * ATLAS — Encyclopédie : Les montagnes
 * Niveau : à partir de 12 ans (5ème / 4ème)
 */

export const montagnes = {
  slug: 'les-montagnes',
  title: 'Les montagnes',
  subtitle: 'Comment naissent les montagnes et pourquoi sont-elles si différentes ?',
  category: 'geology',
  difficulty_level: 'intermediaire',
  reading_time_minutes: 14,
  tags: ['Montagnes', 'Relief', 'Alpes', 'Himalaya', 'Érosion', 'Orogenèse'],

  explication_simple: `
    Les **montagnes** sont de gigantesques reliefs qui se forment au fil de millions
    d'années. Mais comment une montagne peut-elle « pousser » ? Il y a trois façons
    principales :

    1. **La collision de plaques tectoniques** — C'est la plus courante. Quand deux
       plaques se rencontrent, les roches sont comprimées, plissées et soulevées, comme
       quand tu pousses les deux extrémités d'une nappe vers le centre : elle se plisse.
       C'est ainsi que se forment l'**Himalaya** (collision Inde-Asie) et les **Alpes**
       (collision Afrique-Europe).

    2. **Le volcanisme** — Les volcans accumulent lave et cendres éruption après éruption,
       formant des montagnes volcaniques comme le **mont Fuji** ou l'**Etna**.

    3. **Les failles** — Des blocs de roche sont soulevés le long de fractures dans la
       croûte terrestre, formant des montagnes à blocs comme les **Vosges**.

    Mais les montagnes ne font pas que grandir : elles sont aussi **érodées** (usées)
    par le vent, la pluie, le gel et les glaciers. C'est pourquoi les vieilles montagnes
    (comme les Vosges) sont **arrondies**, tandis que les jeunes (comme les Alpes) sont
    **pointues**.
  `,

  definitions: [
    { terme: 'Montagne', definition: 'Relief élevé au-dessus du terrain environnant. Par convention, un sommet est une montagne au-dessus de 600 m d\'altitude.' },
    { terme: 'Orogenèse', definition: 'Processus géologique de formation des montagnes, principalement par collision ou subduction de plaques tectoniques.' },
    { terme: 'Plissement', definition: 'Déformation des couches de roches sous l\'effet de forces de compression. Les roches se plient comme les ondulations d\'un tapis qu\'on pousse.' },
    { terme: 'Érosion', definition: 'Usure progressive des roches et du relief par le vent, l\'eau, le gel et les glaciers. L\'érosion « sculpte » les montagnes au fil du temps.' },
    { terme: 'Glacier', definition: 'Masse de glace formée par l\'accumulation de neige sur des milliers d\'années. Les glaciers creusent des vallées en forme de U.' },
    { terme: 'Étage de végétation', definition: 'Les plantes changent avec l\'altitude : forêt de feuillus → forêt de conifères → alpages → roches nues → neige. Chaque zone est un étage.' },
    { terme: 'Chaîne de montagnes', definition: 'Suite de montagnes alignées, formées par le même processus géologique (ex. : Alpes, Andes, Himalaya, Rocheuses).' },
    { terme: 'Col', definition: 'Point le plus bas entre deux sommets, servant de passage pour traverser une montagne.' },
  ],

  schema_pedagogique: {
    titre: 'Les grandes chaînes de montagnes du monde',
    type: 'tableau_comparatif',
    contenu: [
      {
        chaine: 'Himalaya',
        localisation: 'Asie (Népal, Chine, Inde, Pakistan)',
        longueur_km: 2400,
        point_culminant: 'Everest (8 849 m)',
        age: '~50 millions d\'années',
        formation: 'Collision Inde — Asie (la plaque indienne pousse toujours)',
        particularite: 'Contient les 14 sommets de plus de 8 000 m de la planète',
      },
      {
        chaine: 'Andes',
        localisation: 'Amérique du Sud (7 pays)',
        longueur_km: 7000,
        point_culminant: 'Aconcagua (6 961 m)',
        age: '~200 millions d\'années',
        formation: 'Subduction de la plaque de Nazca sous la plaque sud-américaine',
        particularite: 'Plus longue chaîne de montagnes du monde (7 000 km)',
      },
      {
        chaine: 'Alpes',
        localisation: 'Europe (8 pays)',
        longueur_km: 1200,
        point_culminant: 'Mont Blanc (4 808 m)',
        age: '~65 millions d\'années',
        formation: 'Collision de la plaque africaine et de la plaque eurasiatique',
        particularite: 'Montagnes les plus étudiées au monde, berceau de l\'alpinisme',
      },
      {
        chaine: 'Rocheuses',
        localisation: 'Amérique du Nord (Canada, USA)',
        longueur_km: 4800,
        point_culminant: 'Mont Elbert (4 401 m)',
        age: '~80 millions d\'années',
        formation: 'Subduction de la plaque Pacifique sous la plaque nord-américaine',
        particularite: 'Abritent le parc de Yellowstone et le Grand Canyon',
      },
      {
        chaine: 'Atlas',
        localisation: 'Afrique du Nord (Maroc, Algérie, Tunisie)',
        longueur_km: 2500,
        point_culminant: 'Toubkal (4 167 m)',
        age: '~65 millions d\'années',
        formation: 'Collision Afrique — Europe',
        particularite: 'Sépare le climat méditerranéen du Sahara, nom de notre plateforme !',
      },
    ],
  },

  faits_importants: [
    'L\'**Everest** (8 849 m) grandit encore de **4 mm par an** car l\'Inde continue de pousser contre l\'Asie.',
    'Les montagnes couvrent environ **25 % de la surface des continents** et abritent **12 % de la population mondiale**.',
    'Les **Alpes françaises** perdent leurs glaciers : le glacier de la Mer de Glace (Chamonix) a reculé de **2,5 km** depuis 1850.',
    'Le **Massif central** français est un ancien massif montagneux aussi haut que les Alpes actuelles, érodé par 300 millions d\'années d\'usure.',
    'En altitude, la température diminue en moyenne de **6,5 °C par 1 000 m**. Au sommet de l\'Everest, il fait environ **-36 °C** en moyenne.',
    'Les **Vosges** et la **Forêt-Noire** (Allemagne) étaient autrefois la **même montagne**, séparée par l\'effondrement du fossé rhénan.',
    'Le **Kilimandjaro** (5 895 m) est un volcan en Afrique. Bien qu\'il soit près de l\'équateur, son sommet est enneigé (mais la neige diminue chaque année).',
  ],

  chronologie: [
    { date: '~3 Ga', evenement: 'Premières montagnes de la Terre (boucliers continentaux)' },
    { date: '~300 Ma', evenement: 'Formation des Appalaches et du Massif central (orogenèse hercynienne)' },
    { date: '~200 Ma', evenement: 'Début de la formation des Andes (subduction)' },
    { date: '~65 Ma', evenement: 'Début de la formation des Alpes et de l\'Atlas (collision Afrique-Europe)' },
    { date: '~50 Ma', evenement: 'Collision Inde-Asie → début de la formation de l\'Himalaya' },
    { date: '1786', evenement: 'Première ascension du Mont Blanc par Jacques Balmat et Michel Paccard' },
    { date: '1953', evenement: 'Edmund Hillary et Tensing Norgay atteignent le sommet de l\'Everest' },
    { date: '1965', evenement: 'Création du Parc national de la Vanoise (1er parc national français, dans les Alpes)' },
  ],

  anecdote: `
    🏔️ **Des coquillages au sommet de l'Everest !** — En 1924, le géologue Noel Odell
    découvre des **fossiles de coquillages marins** à plus de 8 000 m d'altitude sur
    l'Everest. Comment des créatures de l'océan se retrouvent-elles au sommet du monde ?
    Parce que ces roches étaient autrefois au **fond de la mer** ! Il y a 50 millions
    d'années, quand l'Inde a percuté l'Asie, les sédiments marins déposés au fond de
    l'ancien océan Téthys ont été soulevés et comprimés pour former l'Himalaya.
    L'Everest est littéralement fait de **fond marin** !
  `,

  videos_educatives: [
    { titre: 'Comment se forment les montagnes ?', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-montagnes' },
    { titre: 'Les Alpes : naissance d\'une chaîne de montagnes', source: 'Lumni', url: 'https://www.lumni.fr/video/naissance-alpes' },
    { titre: 'L\'Everest : le toit du monde', source: 'National Geographic (FR)', url: 'https://www.youtube.com/watch?v=natgeo-everest' },
  ],
};
