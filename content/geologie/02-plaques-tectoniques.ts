/**
 * ATLAS — Encyclopédie : Les plaques tectoniques
 * Niveau : à partir de 12 ans (5ème / 4ème)
 */

export const plaquesTectoniques = {
  slug: 'les-plaques-tectoniques',
  title: 'Les plaques tectoniques',
  subtitle: 'La surface de la Terre est un gigantesque puzzle en mouvement',
  category: 'geology',
  difficulty_level: 'intermediaire',
  reading_time_minutes: 14,
  tags: ['Tectonique', 'Plaques', 'Séismes', 'Dorsales', 'Subduction', 'Pangée'],

  explication_simple: `
    Imagine que la surface de la Terre est comme la **coquille d'un œuf fêlé** :
    elle est cassée en grands morceaux appelés **plaques tectoniques**. Il y en a
    environ **15 principales**, et elles « flottent » sur une couche de roches très
    chaudes et molles appelée l'**asthénosphère** (un peu comme des glaçons sur de l'eau).

    Ces plaques bougent de **quelques centimètres par an** — à peu près la vitesse à
    laquelle poussent tes ongles. Ça semble très lent, mais sur des millions d'années,
    ça déplace des continents entiers !

    C'est aux **frontières** entre les plaques que se produisent les phénomènes les
    plus spectaculaires :
    - Quand deux plaques **s'écartent** → du magma remonte et crée de nouvelles roches
      (ex. : dorsale médio-atlantique).
    - Quand deux plaques **se rapprochent** → l'une plonge sous l'autre (subduction),
      provoquant des volcans et des séismes (ex. : Andes, Japon).
    - Quand deux plaques **glissent** l'une contre l'autre → des séismes violents
      (ex. : faille de San Andreas en Californie).
  `,

  definitions: [
    { terme: 'Plaque tectonique', definition: 'Morceau rigide de la lithosphère terrestre, d\'une épaisseur de 70 à 150 km, qui se déplace lentement sur l\'asthénosphère.' },
    { terme: 'Lithosphère', definition: 'Couche rigide de la Terre comprenant la croûte et la partie supérieure du manteau. Découpée en plaques tectoniques.' },
    { terme: 'Asthénosphère', definition: 'Couche du manteau supérieur, partiellement fondue et visqueuse, sur laquelle « glissent » les plaques tectoniques.' },
    { terme: 'Divergence', definition: 'Mouvement de deux plaques qui s\'éloignent l\'une de l\'autre. Du magma remonte entre elles, créant de la nouvelle croûte océanique (dorsale).' },
    { terme: 'Convergence', definition: 'Mouvement de deux plaques qui se rapprochent. Peut provoquer une subduction (plongeon d\'une plaque) ou une collision (formation de montagnes).' },
    { terme: 'Subduction', definition: 'Plongée d\'une plaque tectonique sous une autre. La plaque qui descend fond dans le manteau, créant du magma qui alimente les volcans.' },
    { terme: 'Dorsale océanique', definition: 'Chaîne de montagnes sous-marines au fond des océans, là où deux plaques s\'écartent. La dorsale médio-atlantique fait plus de 16 000 km.' },
    { terme: 'Faille', definition: 'Fracture dans la croûte terrestre le long de laquelle les roches se déplacent. Les mouvements le long des failles provoquent des séismes.' },
    { terme: 'Convection', definition: 'Mouvement circulaire dans le manteau : les roches chaudes montent, se refroidissent, puis redescendent. C\'est le moteur du déplacement des plaques.' },
  ],

  schema_pedagogique: {
    titre: 'Les 3 types de frontières entre plaques',
    type: 'schema_mouvements',
    contenu: [
      {
        type: 'Frontière divergente',
        mouvement: '← →  (les plaques s\'écartent)',
        ce_qui_se_passe: 'Du magma remonte entre les plaques et se solidifie, créant de la nouvelle croûte océanique.',
        phenomenes: ['Dorsales océaniques', 'Volcanisme sous-marin', 'Rift continental'],
        exemple: 'Dorsale médio-atlantique (séparant l\'Europe de l\'Amérique), Rift est-africain',
      },
      {
        type: 'Frontière convergente',
        mouvement: '→ ←  (les plaques se rapprochent)',
        ce_qui_se_passe: 'Subduction (une plaque plonge sous l\'autre) ou collision (deux continents se percutent et forment des montagnes).',
        phenomenes: ['Volcans explosifs', 'Séismes violents', 'Fosses océaniques', 'Chaînes de montagnes'],
        exemple: 'Ceinture de feu du Pacifique, Himalaya (collision Inde-Asie), Fosse des Mariannes',
      },
      {
        type: 'Frontière transformante',
        mouvement: '↑ ↓  (les plaques glissent latéralement)',
        ce_qui_se_passe: 'Les plaques frottent l\'une contre l\'autre, accumulant des tensions qui se libèrent brutalement.',
        phenomenes: ['Séismes puissants (pas de volcans)'],
        exemple: 'Faille de San Andreas (Californie), Faille nord-anatolienne (Turquie)',
      },
    ],
  },

  faits_importants: [
    'Les plaques tectoniques se déplacent de **1 à 10 cm par an**. La plaque Pacifique est la plus rapide (~10 cm/an).',
    'La **dorsale médio-atlantique** est la plus longue chaîne de montagnes du monde : **65 000 km**, mais elle est presque entièrement sous l\'eau.',
    'La **Ceinture de feu du Pacifique** concentre **90 % des séismes** et **75 % des volcans actifs** de la planète.',
    'La **fosse des Mariannes** (11 034 m) est le point le plus profond de l\'océan — si on y plaçait l\'Everest, il resterait encore 2 km d\'eau au-dessus.',
    'L\'Inde percute l\'Asie depuis **50 millions d\'années**, et l\'Himalaya continue de s\'élever de **5 mm par an**.',
    'Dans 250 millions d\'années, les continents se rassembleront à nouveau en un supercontinent surnommé la **Pangée Ultima**.',
    'L\'Islande est le seul endroit au monde où la **dorsale médio-atlantique** émerge à la surface.',
  ],

  chronologie: [
    { date: '1596', evenement: 'Abraham Ortelius remarque que les côtes américaines et africaines s\'emboîtent' },
    { date: '1912', evenement: 'Alfred Wegener propose la théorie de la dérive des continents' },
    { date: '1929', evenement: 'Arthur Holmes suggère que la convection du manteau déplace les continents' },
    { date: '1950s', evenement: 'Découverte des dorsales océaniques et du paléomagnétisme' },
    { date: '1960', evenement: 'Harry Hess propose l\'expansion des fonds océaniques' },
    { date: '1965', evenement: 'Tuzo Wilson définit les plaques tectoniques et les failles transformantes' },
    { date: '1968', evenement: 'La théorie de la tectonique des plaques est acceptée par la communauté scientifique' },
  ],

  anecdote: `
    🧲 **Le fond de l'océan est un enregistreur magnétique !** — La Terre change
    régulièrement de polarité magnétique : le pôle Nord magnétique devient le pôle Sud,
    et inversement. Quand du magma se solidifie au fond de l'océan, les minéraux
    s'alignent comme de minuscules boussoles dans le sens du champ magnétique du moment.
    En étudiant ces bandes magnétiques **alternées** de part et d'autre des dorsales,
    les scientifiques ont prouvé que le fond des océans **s'écarte** — et donc que les
    plaques bougent ! C'est la preuve définitive de la tectonique des plaques, trouvée
    en 1963 par Vine et Matthews.
  `,

  videos_educatives: [
    { titre: 'La tectonique des plaques — C\'est pas sorcier', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-tectonique' },
    { titre: 'Les plaques tectoniques en mouvement', source: 'Lumni', url: 'https://www.lumni.fr/video/les-plaques-tectoniques' },
  ],
};
