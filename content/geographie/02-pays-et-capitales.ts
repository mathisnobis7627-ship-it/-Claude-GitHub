/**
 * ATLAS — Encyclopédie : Pays et capitales du monde
 * Niveau : à partir de 12 ans (6ème)
 */

export const paysEtCapitales = {
  slug: 'pays-et-capitales-du-monde',
  title: 'Les pays et capitales du monde',
  subtitle: 'Comment s\'organisent les États sur notre planète ?',
  category: 'geography',
  difficulty_level: 'debutant',
  reading_time_minutes: 15,
  tags: ['Pays', 'Capitales', 'États', 'Frontières', 'ONU'],

  explication_simple: `
    Le monde compte aujourd'hui **195 pays** reconnus par l'ONU (193 membres + 2
    États observateurs : le Vatican et la Palestine). Chaque pays possède un
    **territoire** délimité par des **frontières**, un **gouvernement** qui prend
    les décisions, et une **capitale** qui est la ville principale où siège le
    pouvoir politique.

    Mais attention : un pays et une capitale, ce n'est pas toujours simple !
    Par exemple, certains pays ont **deux capitales** (comme l'Afrique du Sud avec
    Pretoria, Le Cap et Bloemfontein) et la ville la plus grande d'un pays n'est
    pas toujours sa capitale (Washington D.C. est bien plus petite que New York).
  `,

  definitions: [
    { terme: 'État', definition: 'Organisation politique qui exerce son autorité sur un territoire délimité et une population. Un État possède un gouvernement, des lois, et est reconnu par les autres États.' },
    { terme: 'Capitale', definition: 'Ville où siègent les institutions politiques d\'un pays (gouvernement, parlement). C\'est le centre du pouvoir.' },
    { terme: 'Frontière', definition: 'Ligne qui sépare deux États. Elle peut être naturelle (fleuve, montagne) ou artificielle (tracée par les humains).' },
    { terme: 'Souveraineté', definition: 'Pouvoir suprême d\'un État de gouverner son territoire sans ingérence extérieure.' },
    { terme: 'ONU', definition: 'Organisation des Nations Unies, fondée en 1945, qui regroupe 193 États membres. Elle vise à maintenir la paix et la coopération internationale.' },
    { terme: 'Monarchie / République', definition: 'Deux formes de gouvernement. Dans une monarchie, le chef d\'État est un roi ou une reine (héréditaire). Dans une république, le chef d\'État est élu.' },
  ],

  schema_pedagogique: {
    titre: 'Les 10 plus grands pays du monde (par superficie)',
    type: 'classement',
    contenu: [
      { rang: 1, pays: 'Russie', capitale: 'Moscou', superficie_km2: 17_098_242, continent: 'Europe / Asie' },
      { rang: 2, pays: 'Canada', capitale: 'Ottawa', superficie_km2: 9_984_670, continent: 'Amérique du Nord' },
      { rang: 3, pays: 'États-Unis', capitale: 'Washington D.C.', superficie_km2: 9_833_520, continent: 'Amérique du Nord' },
      { rang: 4, pays: 'Chine', capitale: 'Pékin', superficie_km2: 9_596_961, continent: 'Asie' },
      { rang: 5, pays: 'Brésil', capitale: 'Brasília', superficie_km2: 8_515_767, continent: 'Amérique du Sud' },
      { rang: 6, pays: 'Australie', capitale: 'Canberra', superficie_km2: 7_692_024, continent: 'Océanie' },
      { rang: 7, pays: 'Inde', capitale: 'New Delhi', superficie_km2: 3_287_263, continent: 'Asie' },
      { rang: 8, pays: 'Argentine', capitale: 'Buenos Aires', superficie_km2: 2_780_400, continent: 'Amérique du Sud' },
      { rang: 9, pays: 'Kazakhstan', capitale: 'Astana', superficie_km2: 2_724_900, continent: 'Asie' },
      { rang: 10, pays: 'Algérie', capitale: 'Alger', superficie_km2: 2_381_741, continent: 'Afrique' },
    ],
  },

  faits_importants: [
    'Le plus petit pays du monde est le **Vatican** (0,44 km²), situé au cœur de Rome.',
    'Le pays le plus peuplé est l\'**Inde** (environ 1,44 milliard d\'habitants en 2024), qui a dépassé la Chine.',
    'La **Russie** s\'étend sur 11 fuseaux horaires, du Kaliningrad au Kamtchatka.',
    'Monaco est le pays le plus densément peuplé : 26 000 habitants/km².',
    '44 pays dans le monde sont des monarchies, dont 12 en Europe.',
    'Certains pays sont **enclavés** (sans accès à la mer), comme la Suisse, la Bolivie ou le Tchad.',
    'Le drapeau français (bleu-blanc-rouge) date de la Révolution française (1789).',
  ],

  chronologie: [
    { date: '1648', evenement: 'Traités de Westphalie : naissance du système moderne des États souverains' },
    { date: '1776', evenement: 'Déclaration d\'indépendance des États-Unis, premier grand État républicain moderne' },
    { date: '1945', evenement: 'Création de l\'ONU avec 51 États membres' },
    { date: '1960', evenement: '"Année de l\'Afrique" : 17 pays africains accèdent à l\'indépendance' },
    { date: '1991', evenement: 'Dissolution de l\'URSS : 15 nouveaux États apparaissent' },
    { date: '2011', evenement: 'Le Soudan du Sud devient le 193e membre de l\'ONU (plus récent État reconnu)' },
  ],

  anecdote: `
    🏰 **La capitale qui n'existait pas** — Quand le Brésil a voulu une nouvelle
    capitale dans les années 1950, il l'a tout simplement **construite de zéro** en
    plein milieu du pays ! Brasília a été dessinée par l'architecte Oscar Niemeyer
    et l'urbaniste Lucio Costa en forme d'avion vu du ciel. Inaugurée en 1960, elle
    a remplacé Rio de Janeiro comme capitale. C'est la seule ville du XXe siècle
    classée au patrimoine mondial de l'UNESCO.
  `,

  videos_educatives: [
    { titre: 'Combien de pays dans le monde ?', source: 'Lumni', url: 'https://www.lumni.fr/video/combien-de-pays-dans-le-monde' },
    { titre: 'Les capitales du monde — quiz géo', source: 'Jeux Géo', url: 'https://www.jeux-geographiques.com/capitales' },
  ],

  // ── Capitales par continent (sélection pédagogique) ─────────────────────────
  capitales_par_continent: {
    europe: [
      { pays: 'France', capitale: 'Paris', population_capitale: 2_161_000 },
      { pays: 'Allemagne', capitale: 'Berlin', population_capitale: 3_645_000 },
      { pays: 'Royaume-Uni', capitale: 'Londres', population_capitale: 8_982_000 },
      { pays: 'Espagne', capitale: 'Madrid', population_capitale: 3_223_000 },
      { pays: 'Italie', capitale: 'Rome', population_capitale: 2_873_000 },
      { pays: 'Grèce', capitale: 'Athènes', population_capitale: 664_000 },
    ],
    afrique: [
      { pays: 'Égypte', capitale: 'Le Caire', population_capitale: 9_540_000 },
      { pays: 'Afrique du Sud', capitale: 'Pretoria (administrative)', population_capitale: 741_000 },
      { pays: 'Nigeria', capitale: 'Abuja', population_capitale: 1_235_000 },
      { pays: 'Maroc', capitale: 'Rabat', population_capitale: 577_000 },
      { pays: 'Sénégal', capitale: 'Dakar', population_capitale: 1_146_000 },
    ],
    asie: [
      { pays: 'Chine', capitale: 'Pékin', population_capitale: 21_540_000 },
      { pays: 'Japon', capitale: 'Tokyo', population_capitale: 13_960_000 },
      { pays: 'Inde', capitale: 'New Delhi', population_capitale: 16_787_000 },
      { pays: 'Corée du Sud', capitale: 'Séoul', population_capitale: 9_776_000 },
    ],
    amerique: [
      { pays: 'États-Unis', capitale: 'Washington D.C.', population_capitale: 689_000 },
      { pays: 'Brésil', capitale: 'Brasília', population_capitale: 3_039_000 },
      { pays: 'Canada', capitale: 'Ottawa', population_capitale: 1_017_000 },
      { pays: 'Argentine', capitale: 'Buenos Aires', population_capitale: 3_075_000 },
      { pays: 'Mexique', capitale: 'Mexico', population_capitale: 9_209_000 },
    ],
  },
};
