/**
 * ATLAS — Encyclopédie : L'Époque contemporaine
 * Niveau : à partir de 12 ans (3ème / Lycée)
 */

export const epoqueContemporaine = {
  slug: 'l-epoque-contemporaine',
  title: 'L\'Époque contemporaine',
  subtitle: 'De la Révolution française à nos jours (1789 — aujourd\'hui)',
  category: 'history',
  difficulty_level: 'intermediaire',
  reading_time_minutes: 20,
  tags: ['Révolution', 'Industrialisation', 'Guerres mondiales', 'Décolonisation', 'Mondialisation'],

  explication_simple: `
    L'**Époque contemporaine** commence avec la **Révolution française** (1789) et
    continue jusqu'à aujourd'hui. En à peine 250 ans, le monde a connu plus de
    changements que durant les millénaires précédents :

    - La **Révolution française** et **Napoléon** bouleversent l'Europe et répandent
      les idées de liberté et d'égalité.
    - La **révolution industrielle** (XIXe siècle) transforme les sociétés : machines
      à vapeur, usines, chemins de fer, exode rural vers les villes.
    - Les deux **guerres mondiales** (1914-1918 et 1939-1945) sont les conflits les
      plus meurtriers de l'histoire. La Shoah et les bombes atomiques marquent l'humanité.
    - La **décolonisation** (après 1945) voit des dizaines de pays d'Afrique et d'Asie
      accéder à l'indépendance.
    - La **Guerre froide** oppose les États-Unis et l'URSS de 1947 à 1991.
    - La **mondialisation** et la **révolution numérique** connectent le monde entier.
  `,

  definitions: [
    { terme: 'Révolution industrielle', definition: 'Transformation profonde de l\'économie et de la société par la mécanisation (machine à vapeur, usines) à partir de la fin du XVIIIe siècle.' },
    { terme: 'Colonisation / Décolonisation', definition: 'La colonisation est la conquête de territoires par les puissances européennes (XIXe-XXe s.). La décolonisation est le processus d\'indépendance de ces territoires (après 1945).' },
    { terme: 'Guerre totale', definition: 'Conflit qui mobilise toutes les ressources d\'un pays : armée, civils, industrie, économie, propagande. Les deux guerres mondiales sont des guerres totales.' },
    { terme: 'Shoah', definition: 'Génocide de 6 millions de Juifs perpétré par l\'Allemagne nazie pendant la Seconde Guerre mondiale (1941-1945).' },
    { terme: 'Guerre froide', definition: 'Période de tensions (1947-1991) entre les deux superpuissances (États-Unis et URSS) sans affrontement militaire direct, mais avec des conflits indirects.' },
    { terme: 'Mondialisation', definition: 'Processus d\'intensification des échanges économiques, culturels et humains à l\'échelle planétaire, accéléré par les transports et les technologies numériques.' },
    { terme: 'Droits de l\'homme', definition: 'Droits fondamentaux reconnus à tout être humain : liberté, égalité, dignité. La Déclaration universelle est adoptée en 1948.' },
    { terme: 'Démocratie', definition: 'Régime politique où le peuple exerce le pouvoir, directement ou par ses représentants élus. Le suffrage universel s\'étend progressivement (hommes, puis femmes).' },
  ],

  schema_pedagogique: {
    titre: 'Les grandes phases de l\'Époque contemporaine',
    type: 'frise_chronologique',
    contenu: [
      {
        phase: 'Révolutions et Empire (1789-1815)',
        description: 'Révolution française, Déclaration des droits de l\'homme, Empire napoléonien, Code civil',
        mots_cles: ['Bastille', 'Napoléon', 'Code civil', 'Waterloo'],
      },
      {
        phase: 'Industrialisation et nationalisme (1815-1914)',
        description: 'Révolution industrielle, urbanisation, mouvement ouvrier, colonisation, unification de l\'Allemagne et de l\'Italie',
        mots_cles: ['Machine à vapeur', 'Charbon', 'Colonies', 'Suffragettes'],
      },
      {
        phase: 'Les guerres mondiales (1914-1945)',
        description: 'Première et Seconde Guerres mondiales, totalitarismes (fascisme, nazisme, stalinisme), Shoah',
        mots_cles: ['Tranchées', 'Verdun', 'Hitler', 'Résistance', 'Hiroshima'],
      },
      {
        phase: 'Guerre froide et décolonisation (1945-1991)',
        description: 'Bipolarisation du monde (USA vs URSS), course à l\'espace, décolonisation de l\'Afrique et de l\'Asie, construction européenne',
        mots_cles: ['Mur de Berlin', 'NASA', 'ONU', 'Indépendances africaines'],
      },
      {
        phase: 'Mondialisation (1991-aujourd\'hui)',
        description: 'Fin de la Guerre froide, Internet et révolution numérique, terrorisme, défis climatiques',
        mots_cles: ['Internet', 'Union européenne', 'Changement climatique', 'Réseaux sociaux'],
      },
    ],
  },

  faits_importants: [
    'La **Révolution française** a aboli les privilèges de la noblesse et du clergé en une seule nuit : la **nuit du 4 août 1789**.',
    'La **révolution industrielle** fait passer la population mondiale de **1 milliard** (1800) à **7 milliards** (2011).',
    'La **Première Guerre mondiale** mobilise **70 millions de soldats** et fait **18 millions de morts**.',
    'La **Seconde Guerre mondiale** est le conflit le plus meurtrier : **70 à 85 millions de morts** (civils et militaires).',
    'Le **droit de vote des femmes** : Nouvelle-Zélande (1893), France (1944), Suisse (1971).',
    'L\'Homme marche sur la **Lune** le **20 juillet 1969** (Neil Armstrong, mission Apollo 11).',
    'En 1989, la **chute du mur de Berlin** symbolise la fin de la Guerre froide et la réunification de l\'Europe.',
    'Aujourd\'hui, plus de **5 milliards** de personnes sont connectées à Internet.',
  ],

  chronologie: [
    { date: '1789', evenement: 'Révolution française : prise de la Bastille (14 juillet)' },
    { date: '1804', evenement: 'Napoléon est sacré empereur — Code civil des Français' },
    { date: '1815', evenement: 'Défaite de Waterloo — Congrès de Vienne' },
    { date: '1848', evenement: 'Abolition de l\'esclavage en France (Schœlcher) — Printemps des peuples en Europe' },
    { date: '1870', evenement: 'Proclamation de la IIIe République en France' },
    { date: '1914-1918', evenement: 'Première Guerre mondiale' },
    { date: '1917', evenement: 'Révolution russe — naissance de l\'URSS' },
    { date: '1929', evenement: 'Krach de Wall Street — Grande Dépression' },
    { date: '1939-1945', evenement: 'Seconde Guerre mondiale — Shoah — bombes atomiques' },
    { date: '1945', evenement: 'Création de l\'ONU — début de la Guerre froide' },
    { date: '1948', evenement: 'Déclaration universelle des droits de l\'homme' },
    { date: '1957', evenement: 'Traité de Rome : début de la construction européenne (CEE)' },
    { date: '1960', evenement: '"Année de l\'Afrique" : 17 pays accèdent à l\'indépendance' },
    { date: '1969', evenement: 'Premier pas sur la Lune (Apollo 11)' },
    { date: '1989', evenement: 'Chute du mur de Berlin' },
    { date: '1991', evenement: 'Dissolution de l\'URSS — fin de la Guerre froide' },
    { date: '2001', evenement: 'Attentats du 11 septembre à New York' },
    { date: '2015', evenement: 'Accords de Paris sur le climat (COP21)' },
  ],

  anecdote: `
    🚂 **Le premier chemin de fer allait à 30 km/h… et on avait peur !** — Quand la
    première ligne de chemin de fer pour passagers est inaugurée en 1830 (Liverpool-
    Manchester), beaucoup de gens pensent que le corps humain ne peut pas supporter une
    vitesse supérieure à **30 km/h**. Des médecins prédisent que les passagers vont
    s'évanouir ou devenir fous ! Certains pensent même que les vaches dans les champs
    vont cesser de donner du lait à cause du bruit. Moins de 100 ans plus tard, les
    trains atteignent 200 km/h, et personne ne devient fou (du moins, pas à cause du train).
  `,

  videos_educatives: [
    { titre: 'La Révolution française — résumé', source: 'Nota Bene', url: 'https://www.youtube.com/watch?v=nota-bene-revolution' },
    { titre: 'La Première Guerre mondiale', source: 'Lumni', url: 'https://www.lumni.fr/video/la-premiere-guerre-mondiale' },
    { titre: 'La Seconde Guerre mondiale', source: 'Lumni', url: 'https://www.lumni.fr/video/la-seconde-guerre-mondiale' },
    { titre: 'La Guerre froide expliquée', source: 'Lumni', url: 'https://www.lumni.fr/video/la-guerre-froide' },
  ],
};
