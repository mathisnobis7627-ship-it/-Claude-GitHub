/**
 * ATLAS — Encyclopédie : Les continents du monde
 * Niveau : à partir de 12 ans (6ème)
 */

export const continents = {
  slug: 'les-continents-du-monde',
  title: 'Les continents du monde',
  subtitle: 'Comprendre l\'organisation géographique de la Terre',
  category: 'geography',
  difficulty_level: 'debutant',
  reading_time_minutes: 12,
  tags: ['Continents', 'Géographie', 'Terre', 'Cartographie'],

  // ── Explication simple (niveau 12 ans) ──────────────────────────────────────
  explication_simple: `
    Imagine la Terre vue de l'espace : tu vois de grands morceaux de terre entourés
    par les océans. Ces grands morceaux, ce sont les **continents**. Il y en a 6
    (ou 7 selon les découpages) : l'Afrique, l'Amérique, l'Antarctique, l'Asie,
    l'Europe, et l'Océanie.

    Autrefois, tous les continents étaient réunis en un seul supercontinent appelé
    la **Pangée**. Il y a environ 200 millions d'années, ce supercontinent a commencé
    à se séparer, et les morceaux ont lentement dérivé jusqu'à leur position actuelle.
    C'est ce qu'on appelle la **dérive des continents**.
  `,

  // ── Définitions des termes complexes ────────────────────────────────────────
  definitions: [
    { terme: 'Continent', definition: 'Grande étendue de terre émergée, entourée par des océans. On en compte généralement 6 : Afrique, Amérique, Antarctique, Asie, Europe, Océanie.' },
    { terme: 'Pangée', definition: 'Supercontinent unique qui regroupait toutes les terres émergées il y a environ 300 millions d\'années, avant de se fragmenter.' },
    { terme: 'Dérive des continents', definition: 'Théorie selon laquelle les continents se déplacent lentement à la surface du globe, portés par les plaques tectoniques.' },
    { terme: 'Hémisphère', definition: 'Moitié du globe terrestre. L\'équateur sépare les hémisphères Nord et Sud ; le méridien de Greenwich sépare les hémisphères Est et Ouest.' },
    { terme: 'Méridien', definition: 'Ligne imaginaire allant du pôle Nord au pôle Sud, utilisée pour mesurer la longitude.' },
    { terme: 'Latitude / Longitude', definition: 'Coordonnées permettant de localiser un point sur Terre. La latitude mesure la distance par rapport à l\'équateur, la longitude par rapport au méridien de Greenwich.' },
  ],

  // ── Schéma pédagogique ──────────────────────────────────────────────────────
  schema_pedagogique: {
    titre: 'Les 6 continents en un coup d\'œil',
    type: 'tableau_comparatif',
    contenu: [
      { continent: 'Asie', superficie_km2: 44_579_000, population: '4,7 milliards', pays_nombre: 49, point_culminant: 'Everest (8 849 m)', particularite: 'Plus grand et plus peuplé des continents' },
      { continent: 'Afrique', superficie_km2: 30_370_000, population: '1,4 milliard', pays_nombre: 54, point_culminant: 'Kilimandjaro (5 895 m)', particularite: 'Berceau de l\'humanité' },
      { continent: 'Amérique', superficie_km2: 42_549_000, population: '1 milliard', pays_nombre: 35, point_culminant: 'Aconcagua (6 961 m)', particularite: 'S\'étend du cercle arctique à la Terre de Feu' },
      { continent: 'Antarctique', superficie_km2: 14_000_000, population: '~1 000 (scientifiques)', pays_nombre: 0, point_culminant: 'Mont Vinson (4 892 m)', particularite: 'Continent le plus froid, recouvert de glace' },
      { continent: 'Europe', superficie_km2: 10_180_000, population: '750 millions', pays_nombre: 50, point_culminant: 'Elbrouz (5 642 m)', particularite: 'Le plus petit continent habité, le plus développé' },
      { continent: 'Océanie', superficie_km2: 8_526_000, population: '45 millions', pays_nombre: 14, point_culminant: 'Puncak Jaya (4 884 m)', particularite: 'Composée principalement d\'îles' },
    ],
  },

  // ── Faits importants ────────────────────────────────────────────────────────
  faits_importants: [
    'L\'Asie représente à elle seule 30 % des terres émergées et abrite 60 % de la population mondiale.',
    'L\'Afrique possède 54 pays, ce qui en fait le continent avec le plus grand nombre d\'États.',
    'L\'Antarctique n\'appartient à aucun pays. Le traité sur l\'Antarctique (1959) le réserve à la recherche scientifique.',
    'L\'Europe et l\'Asie forment en réalité une seule masse terrestre appelée Eurasie — la limite entre les deux est conventionnelle (monts Oural).',
    'L\'Océanie comprend plus de 25 000 îles réparties dans l\'océan Pacifique.',
    'L\'Amérique est souvent divisée en trois sous-continents : Amérique du Nord, Amérique centrale et Amérique du Sud.',
  ],

  // ── Chronologie ─────────────────────────────────────────────────────────────
  chronologie: [
    { date: '~300 Ma', evenement: 'Formation de la Pangée, supercontinent unique' },
    { date: '~200 Ma', evenement: 'Début de la fragmentation de la Pangée en Laurasia (nord) et Gondwana (sud)' },
    { date: '~130 Ma', evenement: 'L\'Amérique du Sud se sépare de l\'Afrique, l\'océan Atlantique commence à se former' },
    { date: '~50 Ma', evenement: 'L\'Inde entre en collision avec l\'Asie, formant l\'Himalaya' },
    { date: '~3 Ma', evenement: 'L\'isthme de Panama relie l\'Amérique du Nord et du Sud' },
    { date: '1912', evenement: 'Alfred Wegener propose la théorie de la dérive des continents' },
    { date: '1960s', evenement: 'La tectonique des plaques confirme scientifiquement la dérive des continents' },
  ],

  // ── Anecdote intéressante ───────────────────────────────────────────────────
  anecdote: `
    🌍 **Le puzzle des continents** — En 1620, le philosophe anglais Francis Bacon
    remarque que les côtes de l'Afrique et de l'Amérique du Sud « s'emboîtent » comme
    les pièces d'un puzzle. Il faudra attendre presque 300 ans pour qu'Alfred Wegener
    prouve que les continents se sont bien détachés les uns des autres ! Aujourd'hui
    encore, l'Amérique s'éloigne de l'Europe de 2,5 cm par an — soit la vitesse à
    laquelle poussent tes ongles.
  `,

  // ── Lien vidéo éducative ────────────────────────────────────────────────────
  videos_educatives: [
    { titre: 'Les continents — Jamy vous explique', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=continents-cps' },
    { titre: 'La dérive des continents en animation', source: 'Lumni', url: 'https://www.lumni.fr/video/la-derive-des-continents' },
  ],
};
