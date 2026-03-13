import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('quiz_options').del();
  await knex('quiz_questions').del();
  await knex('quizzes').del();

  const levels = await knex('school_levels').select('id', 'slug');
  const getLevelId = (slug: string) => levels.find((l: any) => l.slug === slug)?.id;

  const quizzes = await knex('quizzes')
    .insert([
      {
        title: 'Histoire 6e : L\'Antiquite',
        slug: 'histoire-6e-antiquite',
        description: 'Testez vos connaissances sur la Grece antique, Rome et les premieres civilisations.',
        category: 'histoire',
        subcategory: 'Antiquite',
        difficulty_level: 'debutant',
        level_id: getLevelId('6eme'),
        time_limit_seconds: 480,
        question_count: 8,
      },
      {
        title: 'Geographie 6e : Habiter le monde',
        slug: 'geographie-6e-habiter-monde',
        description: 'Questions sur les metropoles, littoraux, deserts et la repartition de la population.',
        category: 'geographie',
        subcategory: 'Habiter le monde',
        difficulty_level: 'debutant',
        level_id: getLevelId('6eme'),
        time_limit_seconds: 480,
        question_count: 8,
      },
      {
        title: 'Histoire 5e : Le Moyen Age',
        slug: 'histoire-5e-moyen-age',
        description: 'Testez vos connaissances sur Byzance, l\'Islam medieval, la feodalite et les villes.',
        category: 'histoire',
        subcategory: 'Moyen Age',
        difficulty_level: 'debutant',
        level_id: getLevelId('5eme'),
        time_limit_seconds: 480,
        question_count: 8,
      },
      {
        title: 'Geographie 5e : Developpement durable',
        slug: 'geographie-5e-developpement-durable',
        description: 'Questions sur la demographie, les ressources et les risques.',
        category: 'geographie',
        subcategory: 'Developpement durable',
        difficulty_level: 'debutant',
        level_id: getLevelId('5eme'),
        time_limit_seconds: 480,
        question_count: 8,
      },
      {
        title: 'Histoire 4e : XVIIIe-XIXe siecles',
        slug: 'histoire-4e-xviiie-xixe',
        description: 'Les Lumieres, la Revolution francaise, l\'industrialisation et la colonisation.',
        category: 'histoire',
        subcategory: 'Lumieres et Revolution',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('4eme'),
        time_limit_seconds: 480,
        question_count: 8,
      },
      {
        title: 'Geographie 4e : La mondialisation',
        slug: 'geographie-4e-mondialisation',
        description: 'Urbanisation, migrations internationales et espaces mondialises.',
        category: 'geographie',
        subcategory: 'Mondialisation',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('4eme'),
        time_limit_seconds: 480,
        question_count: 8,
      },
      {
        title: 'Histoire 3e : Le XXe siecle',
        slug: 'histoire-3e-xxe-siecle',
        description: 'Les deux guerres mondiales, les totalitarismes, la guerre froide et la Ve Republique.',
        category: 'histoire',
        subcategory: 'XXe siecle',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('3eme'),
        time_limit_seconds: 600,
        question_count: 10,
      },
      {
        title: 'Geographie 3e : La France et l\'Europe',
        slug: 'geographie-3e-france-europe',
        description: 'Aires urbaines, amenagement du territoire et Union europeenne.',
        category: 'geographie',
        subcategory: 'France et Europe',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('3eme'),
        time_limit_seconds: 480,
        question_count: 8,
      },
      {
        title: 'Histoire 2nde : Antiquite a l\'epoque moderne',
        slug: 'histoire-2nde-antiquite-moderne',
        description: 'La Mediterranee antique et medievale, les Grandes Decouvertes et l\'Etat moderne.',
        category: 'histoire',
        subcategory: 'Antiquite et Modernite',
        difficulty_level: 'avance',
        level_id: getLevelId('seconde'),
        time_limit_seconds: 600,
        question_count: 10,
      },
      {
        title: 'Geographie 2nde : Populations et mobilites',
        slug: 'geographie-2nde-populations-mobilites',
        description: 'Environnement, populations, developpement et mobilites dans le monde.',
        category: 'geographie',
        subcategory: 'Populations et mobilites',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('seconde'),
        time_limit_seconds: 480,
        question_count: 8,
      },
      {
        title: 'Histoire 1ere : Revolutions et Republique',
        slug: 'histoire-1ere-revolutions-republique',
        description: 'De la Revolution francaise a la Premiere Guerre mondiale.',
        category: 'histoire',
        subcategory: 'Revolutions et Republique',
        difficulty_level: 'avance',
        level_id: getLevelId('premiere'),
        time_limit_seconds: 600,
        question_count: 10,
      },
      {
        title: 'Geographie 1ere : Metropolisation et espaces',
        slug: 'geographie-1ere-metropolisation',
        description: 'Metropolisation, espaces productifs et espaces ruraux.',
        category: 'geographie',
        subcategory: 'Metropolisation',
        difficulty_level: 'avance',
        level_id: getLevelId('premiere'),
        time_limit_seconds: 480,
        question_count: 8,
      },
      {
        title: 'Histoire Tle : Le monde au XXe siecle',
        slug: 'histoire-tle-monde-xxe',
        description: 'Totalitarismes, Seconde Guerre mondiale, guerre froide et monde contemporain.',
        category: 'histoire',
        subcategory: 'XXe siecle',
        difficulty_level: 'avance',
        level_id: getLevelId('terminale'),
        time_limit_seconds: 600,
        question_count: 10,
      },
      {
        title: 'Geographie Tle : Mondialisation et geopolitique',
        slug: 'geographie-tle-mondialisation-geopolitique',
        description: 'Mers et oceans, dynamiques territoriales, UE et France.',
        category: 'geographie',
        subcategory: 'Mondialisation',
        difficulty_level: 'avance',
        level_id: getLevelId('terminale'),
        time_limit_seconds: 600,
        question_count: 10,
      },
    ])
    .returning('*');

  const getQuizId = (slug: string) => quizzes.find((q: any) => q.slug === slug)?.id;

  // ================================================================
  // QUESTIONS ET OPTIONS
  // ================================================================

  const questionsData = [
    // ── 6EME HISTOIRE ──
    { quiz: 'histoire-6e-antiquite', q: 'Quel peuple a invente l\'ecriture cuneiforme ?', type: 'qcm', options: ['Les Egyptiens', 'Les Sumeriens', 'Les Grecs', 'Les Romains'], correct: 1, explanation: 'Les Sumeriens de Mesopotamie ont invente l\'ecriture cuneiforme vers -3300 av. J.-C.', points: 1 },
    { quiz: 'histoire-6e-antiquite', q: 'En quelle annee situe-t-on la fondation legendaire de Rome ?', type: 'qcm', options: ['-753 av. J.-C.', '-509 av. J.-C.', '-476 av. J.-C.', '-27 av. J.-C.'], correct: 0, explanation: 'Selon la legende, Romulus fonde Rome en -753 av. J.-C.', points: 1 },
    { quiz: 'histoire-6e-antiquite', q: 'Comment s\'appelle l\'assemblee des citoyens a Athenes ?', type: 'qcm', options: ['Le Senat', 'L\'Ecclesia', 'Le Forum', 'L\'Agora'], correct: 1, explanation: 'L\'Ecclesia est l\'assemblee ou les citoyens atheniens votent les lois.', points: 1 },
    { quiz: 'histoire-6e-antiquite', q: 'Qui est le premier empereur romain ?', type: 'qcm', options: ['Jules Cesar', 'Auguste', 'Neron', 'Constantin'], correct: 1, explanation: 'Auguste (Octave) devient le premier empereur romain en -27 av. J.-C.', points: 1 },
    { quiz: 'histoire-6e-antiquite', q: 'Quel monument egyptien a ete construit pour le pharaon Kheops ?', type: 'qcm', options: ['Le Sphinx', 'La pyramide de Gizeh', 'Le temple de Karnak', 'L\'obelisque de Louxor'], correct: 1, explanation: 'La Grande Pyramide de Gizeh a ete construite vers -2500 pour le pharaon Kheops.', points: 1 },
    { quiz: 'histoire-6e-antiquite', q: 'La democratie athenienne excluait les femmes du vote.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : seuls les hommes nes de pere et mere atheniens pouvaient voter. Les femmes, esclaves et meteques etaient exclus.', points: 1 },
    { quiz: 'histoire-6e-antiquite', q: 'Quel est le nom du general carthaginois qui a traverse les Alpes avec des elephants ?', type: 'qcm', options: ['Scipion', 'Hannibal', 'Vercingetorix', 'Alexandre'], correct: 1, explanation: 'Hannibal Barca a traverse les Alpes avec ses elephants pour attaquer Rome par surprise.', points: 1 },
    { quiz: 'histoire-6e-antiquite', q: 'L\'edit de Caracalla (212) a accorde la citoyennete romaine a tous les hommes libres de l\'Empire.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : l\'edit de Caracalla (212 ap. J.-C.) a etendu la citoyennete romaine a tous les hommes libres de l\'Empire.', points: 1 },

    // ── 6EME GEOGRAPHIE ──
    { quiz: 'geographie-6e-habiter-monde', q: 'Qu\'est-ce qu\'une metropole ?', type: 'qcm', options: ['Une ville de campagne', 'Une grande ville qui exerce une influence sur un vaste territoire', 'Un village de montagne', 'Une ile'], correct: 1, explanation: 'Une metropole est une grande ville concentrant populations, activites et pouvoirs.', points: 1 },
    { quiz: 'geographie-6e-habiter-monde', q: 'Comment appelle-t-on une ville de plus de 10 millions d\'habitants ?', type: 'qcm', options: ['Une metropole', 'Une megapole', 'Une capitale', 'Une agglomeration'], correct: 1, explanation: 'Une megapole est une ville de plus de 10 millions d\'habitants (Tokyo, Delhi, Shanghai...).', points: 1 },
    { quiz: 'geographie-6e-habiter-monde', q: 'Quel est le foyer de peuplement le plus peuple du monde ?', type: 'qcm', options: ['L\'Europe', 'L\'Asie du Sud', 'L\'Asie de l\'Est', 'L\'Amerique du Nord'], correct: 2, explanation: 'L\'Asie de l\'Est (Chine, Japon, Coree) est le foyer de peuplement le plus peuple du monde.', points: 1 },
    { quiz: 'geographie-6e-habiter-monde', q: 'L\'etalement urbain designe l\'extension des villes vers les campagnes.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : l\'etalement urbain (ou periurbanisation) est l\'extension des villes vers les espaces ruraux.', points: 1 },
    { quiz: 'geographie-6e-habiter-monde', q: 'Quel type d\'espace a la plus faible densite de population ?', type: 'qcm', options: ['Les littoraux', 'Les metropoles', 'Les deserts', 'Les plaines'], correct: 2, explanation: 'Les deserts (chauds et froids) ont la plus faible densite de population.', points: 1 },
    { quiz: 'geographie-6e-habiter-monde', q: 'Que signifie "ecoumene" ?', type: 'qcm', options: ['L\'ensemble des terres inhabitees', 'L\'ensemble des terres habitees par l\'homme', 'Les zones polaires', 'Les oceans'], correct: 1, explanation: 'L\'ecoumene designe l\'ensemble des terres habitees en permanence par les etres humains.', points: 1 },
    { quiz: 'geographie-6e-habiter-monde', q: 'Les littoraux attirent les populations grace au tourisme et aux ports.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : les littoraux concentrent tourisme balneaire, activites portuaires et industrielles.', points: 1 },
    { quiz: 'geographie-6e-habiter-monde', q: 'Quel pourcentage de la population mondiale vit en ville aujourd\'hui ?', type: 'qcm', options: ['30%', '45%', '55%', '75%'], correct: 2, explanation: 'Environ 55% de la population mondiale vit en ville (chiffre en augmentation).', points: 1 },

    // ── 5EME HISTOIRE ──
    { quiz: 'histoire-5e-moyen-age', q: 'Quel empereur a fonde l\'Empire carolingien ?', type: 'qcm', options: ['Clovis', 'Charlemagne', 'Hugues Capet', 'Louis IX'], correct: 1, explanation: 'Charlemagne (Charles le Grand) est couronne empereur en 800 ap. J.-C.', points: 1 },
    { quiz: 'histoire-5e-moyen-age', q: 'Quelle ville etait la capitale de l\'Empire byzantin ?', type: 'qcm', options: ['Rome', 'Bagdad', 'Constantinople', 'Alexandrie'], correct: 2, explanation: 'Constantinople (actuelle Istanbul) etait la capitale de l\'Empire byzantin.', points: 1 },
    { quiz: 'histoire-5e-moyen-age', q: 'L\'Hegire (622) marque le debut du calendrier musulman.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : l\'Hegire est l\'emigration de Mahomet de La Mecque a Medine en 622.', points: 1 },
    { quiz: 'histoire-5e-moyen-age', q: 'Comment appelle-t-on le lien entre un seigneur et son vassal ?', type: 'qcm', options: ['Le servage', 'La feodalite', 'La corvee', 'Le ban'], correct: 1, explanation: 'La feodalite est le systeme de liens entre suzerain et vassal (hommage, fief).', points: 1 },
    { quiz: 'histoire-5e-moyen-age', q: 'Quel evenement met fin aux guerres de religion en France ?', type: 'qcm', options: ['La Saint-Barthelemy', 'Le traite de Westphalie', 'L\'edit de Nantes (1598)', 'La revolution'], correct: 2, explanation: 'L\'edit de Nantes (1598) accorde la liberte de culte aux protestants et met fin aux guerres de religion.', points: 1 },
    { quiz: 'histoire-5e-moyen-age', q: 'Qui a invente l\'imprimerie en Europe vers 1450 ?', type: 'qcm', options: ['Leonard de Vinci', 'Gutenberg', 'Galilee', 'Luther'], correct: 1, explanation: 'Johannes Gutenberg invente l\'imprimerie a caracteres mobiles vers 1450.', points: 1 },
    { quiz: 'histoire-5e-moyen-age', q: 'Louis XIV a fait construire le chateau de Versailles.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : Louis XIV a transforme Versailles en palais somptueux et y a installe la cour en 1682.', points: 1 },
    { quiz: 'histoire-5e-moyen-age', q: 'Qu\'est-ce qu\'une commune au Moyen Age ?', type: 'qcm', options: ['Un village agricole', 'Une ville ayant obtenu une charte de libertes', 'Un monastere', 'Une seigneurie'], correct: 1, explanation: 'Une commune est une ville ayant obtenu une charte de son seigneur, lui accordant des libertes.', points: 1 },

    // ── 5EME GEOGRAPHIE ──
    { quiz: 'geographie-5e-developpement-durable', q: 'Que mesure l\'IDH (Indice de Developpement Humain) ?', type: 'qcm', options: ['La richesse d\'un pays', 'Le niveau de developpement (sante, education, revenus)', 'La population', 'La pollution'], correct: 1, explanation: 'L\'IDH combine l\'esperance de vie, le niveau d\'education et le revenu par habitant.', points: 1 },
    { quiz: 'geographie-5e-developpement-durable', q: 'Le stress hydrique signifie qu\'un territoire manque d\'eau.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : le stress hydrique designe une situation ou la demande en eau depasse les ressources disponibles.', points: 1 },
    { quiz: 'geographie-5e-developpement-durable', q: 'Que signifie PMA ?', type: 'qcm', options: ['Pays Moyennement Avance', 'Pays les Moins Avances', 'Population Mondiale Active', 'Plan de Modernisation Agricole'], correct: 1, explanation: 'PMA = Pays les Moins Avances, les pays les plus pauvres selon l\'ONU.', points: 1 },
    { quiz: 'geographie-5e-developpement-durable', q: 'Qu\'est-ce que la transition demographique ?', type: 'qcm', options: ['Le passage d\'une forte a une faible natalite et mortalite', 'L\'augmentation de la population', 'Le vieillissement de la population', 'L\'immigration'], correct: 0, explanation: 'La transition demographique est le passage d\'un regime avec forte natalite/mortalite a un regime avec faible natalite/mortalite.', points: 1 },
    { quiz: 'geographie-5e-developpement-durable', q: 'Quelle est la difference entre un alea et un risque ?', type: 'qcm', options: ['Aucune', 'L\'alea est naturel, le risque implique des populations vulnerables', 'Le risque est plus grave', 'L\'alea est humain'], correct: 1, explanation: 'Un alea est un phenomene naturel dangereux. Le risque = alea + vulnerabilite des populations.', points: 1 },
    { quiz: 'geographie-5e-developpement-durable', q: 'Les ressources renouvelables sont inepuisables.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 1, explanation: 'Faux : les ressources renouvelables (eau, forets) peuvent s\'epuiser si elles sont surexploitees.', points: 1 },
    { quiz: 'geographie-5e-developpement-durable', q: 'Quel gaz est le principal responsable du rechauffement climatique ?', type: 'qcm', options: ['L\'oxygene', 'Le dioxyde de carbone (CO2)', 'L\'azote', 'L\'hydrogene'], correct: 1, explanation: 'Le CO2 est le principal gaz a effet de serre responsable du rechauffement climatique.', points: 1 },
    { quiz: 'geographie-5e-developpement-durable', q: 'Le developpement durable vise a repondre aux besoins du present sans compromettre ceux des generations futures.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : c\'est la definition du rapport Brundtland (1987).', points: 1 },

    // ── 4EME HISTOIRE ──
    { quiz: 'histoire-4e-xviiie-xixe', q: 'Quel philosophe defend la separation des pouvoirs ?', type: 'qcm', options: ['Voltaire', 'Rousseau', 'Montesquieu', 'Diderot'], correct: 2, explanation: 'Montesquieu theorise la separation des pouvoirs (legislatif, executif, judiciaire) dans L\'Esprit des lois.', points: 1 },
    { quiz: 'histoire-4e-xviiie-xixe', q: 'Quand a eu lieu la prise de la Bastille ?', type: 'qcm', options: ['5 mai 1789', '14 juillet 1789', '26 aout 1789', '4 aout 1789'], correct: 1, explanation: 'La prise de la Bastille a eu lieu le 14 juillet 1789, devenue fete nationale francaise.', points: 1 },
    { quiz: 'histoire-4e-xviiie-xixe', q: 'Qui a aboli definitivement l\'esclavage en France en 1848 ?', type: 'qcm', options: ['Napoleon', 'Louis XVI', 'Victor Schoelcher', 'Voltaire'], correct: 2, explanation: 'Victor Schoelcher est l\'artisan du decret d\'abolition definitive de l\'esclavage du 27 avril 1848.', points: 1 },
    { quiz: 'histoire-4e-xviiie-xixe', q: 'La DDHC (1789) proclame que "les hommes naissent libres et egaux en droits".', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : c\'est l\'article premier de la Declaration des Droits de l\'Homme et du Citoyen (26 aout 1789).', points: 1 },
    { quiz: 'histoire-4e-xviiie-xixe', q: 'Quel est le moteur de la revolution industrielle ?', type: 'qcm', options: ['L\'electricite', 'La machine a vapeur', 'Le petrole', 'L\'energie nucleaire'], correct: 1, explanation: 'La machine a vapeur (James Watt, 1769) est le moteur de la premiere revolution industrielle.', points: 1 },
    { quiz: 'histoire-4e-xviiie-xixe', q: 'Qu\'est-ce que le commerce triangulaire ?', type: 'qcm', options: ['Un echange entre 3 pays europeens', 'Le commerce entre Europe, Afrique et Ameriques impliquant la traite des esclaves', 'Le commerce entre Asie, Europe et Afrique', 'Le commerce des epices'], correct: 1, explanation: 'Le commerce triangulaire reliait l\'Europe (marchandises), l\'Afrique (esclaves) et les Ameriques (produits coloniaux).', points: 1 },
    { quiz: 'histoire-4e-xviiie-xixe', q: 'Les lois Jules Ferry (1881-1882) rendent l\'ecole primaire obligatoire, gratuite et laique.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : Jules Ferry fait voter les lois sur l\'instruction publique obligatoire, gratuite et laique.', points: 1 },
    { quiz: 'histoire-4e-xviiie-xixe', q: 'Napoleon se sacre empereur en quelle annee ?', type: 'qcm', options: ['1799', '1802', '1804', '1815'], correct: 2, explanation: 'Napoleon se sacre empereur le 2 decembre 1804 a Notre-Dame de Paris.', points: 1 },

    // ── 4EME GEOGRAPHIE ──
    { quiz: 'geographie-4e-mondialisation', q: 'Quel pourcentage du commerce mondial transite par la mer ?', type: 'qcm', options: ['50%', '70%', '80%', '90%'], correct: 3, explanation: 'Environ 90% du commerce international transite par voie maritime.', points: 1 },
    { quiz: 'geographie-4e-mondialisation', q: 'Qu\'est-ce qu\'une FTN ?', type: 'qcm', options: ['Une organisation humanitaire', 'Une firme transnationale (entreprise mondiale)', 'Un fonds d\'investissement', 'Un traite commercial'], correct: 1, explanation: 'FTN = Firme Transnationale, une entreprise qui opere dans plusieurs pays (ex: Apple, Total).', points: 1 },
    { quiz: 'geographie-4e-mondialisation', q: 'Un bidonville est un quartier d\'habitat precaire dans une grande ville.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : les bidonvilles sont des quartiers d\'habitat informel, sans acces aux services de base.', points: 1 },
    { quiz: 'geographie-4e-mondialisation', q: 'Comment appelle-t-on le deplacement force d\'une personne fuyant un conflit ?', type: 'qcm', options: ['L\'immigration economique', 'L\'exil fiscal', 'Le statut de refugie', 'Le tourisme'], correct: 2, explanation: 'Un refugie est une personne forcee de quitter son pays pour echapper a un conflit ou des persecutions.', points: 1 },
    { quiz: 'geographie-4e-mondialisation', q: 'Qu\'est-ce qu\'une ZIP (Zone Industrialo-Portuaire) ?', type: 'qcm', options: ['Un code postal', 'Un espace combinant port et industries pour l\'export', 'Une zone touristique', 'Un quartier residentiel'], correct: 1, explanation: 'Une ZIP combine activites portuaires et industrielles, interface entre mer et arriere-pays.', points: 1 },
    { quiz: 'geographie-4e-mondialisation', q: 'La delocalisation consiste a deplacer la production vers des pays a main-d\'oeuvre moins chere.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : les entreprises delocalisent pour reduire les couts de production.', points: 1 },
    { quiz: 'geographie-4e-mondialisation', q: 'Quelle ville est la plus peuplee du monde ?', type: 'qcm', options: ['New York', 'Paris', 'Tokyo', 'Londres'], correct: 2, explanation: 'L\'agglomeration de Tokyo est la plus peuplee du monde avec environ 37 millions d\'habitants.', points: 1 },
    { quiz: 'geographie-4e-mondialisation', q: 'La gentrification designe l\'arrivee de populations aisees dans des quartiers populaires.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la gentrification transforme des quartiers populaires par l\'arrivee de classes plus aisees.', points: 1 },
    // ── 3EME HISTOIRE ──
    { quiz: 'histoire-3e-xxe-siecle', q: 'Quand a eu lieu l\'armistice de la Premiere Guerre mondiale ?', type: 'qcm', options: ['11 novembre 1918', '8 mai 1945', '14 juillet 1919', '28 juin 1919'], correct: 0, explanation: 'L\'armistice a ete signe le 11 novembre 1918, mettant fin aux combats de la Grande Guerre.', points: 1 },
    { quiz: 'histoire-3e-xxe-siecle', q: 'Quel regime n\'est PAS un totalitarisme ?', type: 'qcm', options: ['L\'URSS de Staline', 'L\'Allemagne nazie', 'La France de la IIIe Republique', 'L\'Italie fasciste'], correct: 2, explanation: 'La IIIe Republique francaise est une democratie parlementaire, pas un regime totalitaire.', points: 1 },
    { quiz: 'histoire-3e-xxe-siecle', q: 'La Shoah a fait 6 millions de victimes juives.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : environ 6 millions de Juifs ont ete extermines par le regime nazi.', points: 1 },
    { quiz: 'histoire-3e-xxe-siecle', q: 'Quand le mur de Berlin est-il tombe ?', type: 'qcm', options: ['1985', '1989', '1991', '1993'], correct: 1, explanation: 'Le mur de Berlin est tombe le 9 novembre 1989, symbolisant la fin de la guerre froide.', points: 1 },
    { quiz: 'histoire-3e-xxe-siecle', q: 'Qui a lance l\'appel du 18 Juin 1940 ?', type: 'qcm', options: ['Petain', 'De Gaulle', 'Jean Moulin', 'Clemenceau'], correct: 1, explanation: 'Le general de Gaulle a lance l\'appel du 18 Juin depuis Londres, appelant a la Resistance.', points: 1 },
    { quiz: 'histoire-3e-xxe-siecle', q: 'La Ve Republique a ete fondee en quelle annee ?', type: 'qcm', options: ['1945', '1946', '1958', '1962'], correct: 2, explanation: 'La Constitution de la Ve Republique est adoptee le 4 octobre 1958.', points: 1 },
    { quiz: 'histoire-3e-xxe-siecle', q: 'Qu\'est-ce que la crise de Cuba (1962) ?', type: 'qcm', options: ['Une revolution a Cuba', 'Une crise nucleaire entre USA et URSS', 'Une famine', 'Un tremblement de terre'], correct: 1, explanation: 'L\'URSS installe des missiles nucleaires a Cuba, menacant les USA. Le monde est au bord de la guerre nucleaire.', points: 2 },
    { quiz: 'histoire-3e-xxe-siecle', q: 'La bataille de Verdun a eu lieu en 1916.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la bataille de Verdun (fevrier-decembre 1916) est l\'une des plus meurtrieres de la Grande Guerre.', points: 1 },
    { quiz: 'histoire-3e-xxe-siecle', q: 'Qu\'est-ce que la cohabitation sous la Ve Republique ?', type: 'qcm', options: ['Deux partis au pouvoir ensemble', 'Un president et un Premier ministre de partis opposes', 'Un gouvernement sans Premier ministre', 'Un referendum'], correct: 1, explanation: 'La cohabitation se produit quand le president et le Premier ministre sont de bords politiques differents.', points: 1 },
    { quiz: 'histoire-3e-xxe-siecle', q: 'Le genocide des Armeniens a eu lieu pendant la Premiere Guerre mondiale.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : le genocide des Armeniens par l\'Empire ottoman a eu lieu en 1915, pendant la Premiere Guerre mondiale.', points: 1 },

    // ── 3EME GEOGRAPHIE ──
    { quiz: 'geographie-3e-france-europe', q: 'Quel pourcentage des Francais vit dans une aire urbaine ?', type: 'qcm', options: ['50%', '65%', '75%', '85%'], correct: 3, explanation: 'Environ 85% de la population francaise vit dans une aire urbaine.', points: 1 },
    { quiz: 'geographie-3e-france-europe', q: 'Qu\'est-ce que la periurbanisation ?', type: 'qcm', options: ['La croissance du centre-ville', 'L\'extension des villes vers les campagnes', 'Le declin urbain', 'L\'immigration'], correct: 1, explanation: 'La periurbanisation est l\'installation de populations en couronne periurbaine, a la peripherie des villes.', points: 1 },
    { quiz: 'geographie-3e-france-europe', q: 'La France est le 1er producteur agricole de l\'Union europeenne.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la France est le premier producteur agricole de l\'UE.', points: 1 },
    { quiz: 'geographie-3e-france-europe', q: 'Qu\'est-ce que l\'espace Schengen ?', type: 'qcm', options: ['La zone euro', 'Un espace de libre circulation des personnes', 'Le Parlement europeen', 'Un programme spatial'], correct: 1, explanation: 'L\'espace Schengen permet la libre circulation des personnes entre les pays signataires sans controle aux frontieres.', points: 1 },
    { quiz: 'geographie-3e-france-europe', q: 'Qu\'est-ce qu\'une LGV ?', type: 'qcm', options: ['Une Loi sur la Gestion des Villes', 'Une Ligne a Grande Vitesse', 'Un Label de Gestion Vertueuse', 'Un Lieu de Grand Volume'], correct: 1, explanation: 'LGV = Ligne a Grande Vitesse, infrastructure ferroviaire desenclavant les territoires.', points: 1 },
    { quiz: 'geographie-3e-france-europe', q: 'Qu\'est-ce que la PAC ?', type: 'qcm', options: ['La Politique Agricole Commune', 'Le Pacte Atlantique Central', 'La Protection des Aires Continentales', 'Le Programme d\'Aide aux Communes'], correct: 0, explanation: 'La PAC est la Politique Agricole Commune de l\'UE, qui soutient les agriculteurs europeens.', points: 1 },
    { quiz: 'geographie-3e-france-europe', q: 'La "diagonale du vide" designe une zone de faible densite en France.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la diagonale du vide va des Ardennes aux Pyrenees, zone de faible densite et d\'exode rural.', points: 1 },
    { quiz: 'geographie-3e-france-europe', q: 'Combien d\'Etats membres compte l\'Union europeenne (apres le Brexit) ?', type: 'qcm', options: ['25', '27', '28', '30'], correct: 1, explanation: 'L\'UE compte 27 Etats membres depuis le Brexit (depart du Royaume-Uni en 2020).', points: 1 },

    // ── 2NDE HISTOIRE ──
    { quiz: 'histoire-2nde-antiquite-moderne', q: 'Quel homme politique athenien a renforce la democratie au Ve siecle ?', type: 'qcm', options: ['Solon', 'Pericles', 'Alexandre', 'Platon'], correct: 1, explanation: 'Pericles a renforce la democratie athenienne au Ve siecle av. J.-C. (le "siecle de Pericles").', points: 1 },
    { quiz: 'histoire-2nde-antiquite-moderne', q: 'Qu\'est-ce que la Reconquista ?', type: 'qcm', options: ['La conquete de l\'Amerique', 'La reconquete de l\'Espagne par les chretiens sur les musulmans', 'La reconquete de Constantinople', 'La reconquete de Rome par les barbares'], correct: 1, explanation: 'La Reconquista est la reconquete progressive de la peninsule iberique par les royaumes chretiens (VIIIe-XVe siecle).', points: 1 },
    { quiz: 'histoire-2nde-antiquite-moderne', q: 'Christophe Colomb a decouvert l\'Amerique en 1492.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : Colomb atteint les Bahamas le 12 octobre 1492, pensant etre arrive en Asie.', points: 1 },
    { quiz: 'histoire-2nde-antiquite-moderne', q: 'Qu\'est-ce que l\'absolutisme ?', type: 'qcm', options: ['Un regime parlementaire', 'Un regime ou le roi detient tous les pouvoirs', 'Une republique', 'Une democratie directe'], correct: 1, explanation: 'L\'absolutisme est un regime ou le roi concentre tous les pouvoirs en sa personne (ex: Louis XIV).', points: 1 },
    { quiz: 'histoire-2nde-antiquite-moderne', q: 'Le Bill of Rights anglais (1689) limite le pouvoir du roi.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : le Bill of Rights instaure une monarchie parlementaire en Angleterre.', points: 1 },
    { quiz: 'histoire-2nde-antiquite-moderne', q: 'Qui a dirige l\'Encyclopedie ?', type: 'qcm', options: ['Voltaire', 'Montesquieu', 'Diderot et d\'Alembert', 'Rousseau'], correct: 2, explanation: 'Denis Diderot et Jean d\'Alembert ont dirige l\'Encyclopedie (1751-1772), 28 volumes de savoir.', points: 1 },
    { quiz: 'histoire-2nde-antiquite-moderne', q: 'L\'echange colombien designe le transfert de plantes, animaux et maladies entre Ancien et Nouveau Monde.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : tomates, pommes de terre, mais viennent d\'Amerique ; chevaux, ble, maladies vont en Amerique.', points: 1 },
    { quiz: 'histoire-2nde-antiquite-moderne', q: 'Quelle institution romaine conseille les consuls ?', type: 'qcm', options: ['L\'Ecclesia', 'Le Senat', 'Les Comices', 'Le Forum'], correct: 1, explanation: 'Le Senat romain, compose de 300 anciens magistrats, conseille et oriente la politique.', points: 2 },
    { quiz: 'histoire-2nde-antiquite-moderne', q: 'Magellan a realise le premier tour du monde.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 1, explanation: 'Faux : Magellan est mort aux Philippines. C\'est son lieutenant Elcano qui a termine le premier tour du monde en 1522.', points: 2 },
    { quiz: 'histoire-2nde-antiquite-moderne', q: 'Quel philosophe a ecrit "Du contrat social" ?', type: 'qcm', options: ['Voltaire', 'Montesquieu', 'Diderot', 'Rousseau'], correct: 3, explanation: 'Jean-Jacques Rousseau a ecrit Du contrat social (1762), defendant la souverainete du peuple.', points: 1 },

    // ── 2NDE GEOGRAPHIE ──
    { quiz: 'geographie-2nde-populations-mobilites', q: 'Qu\'est-ce que la transition demographique ?', type: 'qcm', options: ['L\'augmentation de la population', 'Le passage de forte a faible natalite et mortalite', 'Le vieillissement', 'L\'immigration'], correct: 1, explanation: 'La transition demographique est le passage d\'un regime demographique ancien (forte natalite/mortalite) a un regime moderne (faible natalite/mortalite).', points: 1 },
    { quiz: 'geographie-2nde-populations-mobilites', q: 'Le changement climatique est du principalement aux activites humaines.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : selon le GIEC, les activites humaines (combustion d\'energies fossiles, deforestation) sont la cause principale du rechauffement.', points: 1 },
    { quiz: 'geographie-2nde-populations-mobilites', q: 'Qu\'est-ce qu\'un hub ?', type: 'qcm', options: ['Un port de peche', 'Un noeud de correspondance dans un reseau de transport', 'Un marche local', 'Un quartier residentiel'], correct: 1, explanation: 'Un hub est une plate-forme de correspondance dans un reseau de transport (aeroport, port, gare).', points: 1 },
    { quiz: 'geographie-2nde-populations-mobilites', q: 'Le tourisme international concerne environ 1,5 milliard de voyageurs par an.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : le tourisme international a depasse 1,4 milliard d\'arrivees avant la pandemie.', points: 1 },
    { quiz: 'geographie-2nde-populations-mobilites', q: 'Quel continent connait la plus forte croissance demographique ?', type: 'qcm', options: ['L\'Asie', 'L\'Europe', 'L\'Afrique', 'L\'Amerique'], correct: 2, explanation: 'L\'Afrique connait la plus forte croissance demographique, avec une population qui devrait doubler d\'ici 2050.', points: 1 },
    { quiz: 'geographie-2nde-populations-mobilites', q: 'La biodiversite est menacee par les activites humaines.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : deforestation, pollution, surexploitation et changement climatique menacent la biodiversite.', points: 1 },
    { quiz: 'geographie-2nde-populations-mobilites', q: 'Quel pays est la premiere destination touristique mondiale ?', type: 'qcm', options: ['Les Etats-Unis', 'L\'Espagne', 'La France', 'L\'Italie'], correct: 2, explanation: 'La France est la premiere destination touristique mondiale avec environ 90 millions de visiteurs par an.', points: 1 },
    { quiz: 'geographie-2nde-populations-mobilites', q: 'La transition ecologique vise a passer des energies fossiles aux energies renouvelables.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la transition ecologique implique le passage aux energies renouvelables et la reduction des emissions de CO2.', points: 1 },

    // ── 1ERE HISTOIRE ──
    { quiz: 'histoire-1ere-revolutions-republique', q: 'Qu\'est-ce que le Congres de Vienne (1815) ?', type: 'qcm', options: ['Un congres scientifique', 'La reorganisation de l\'Europe apres la chute de Napoleon', 'La creation de l\'UE', 'Un traite de paix apres la WWI'], correct: 1, explanation: 'Le Congres de Vienne (1814-1815) reorganise l\'Europe apres la defaite de Napoleon et restaure les monarchies.', points: 1 },
    { quiz: 'histoire-1ere-revolutions-republique', q: 'En quelle annee Napoleon III est-il renverse ?', type: 'qcm', options: ['1848', '1852', '1870', '1871'], correct: 2, explanation: 'Napoleon III est renverse apres la defaite de Sedan face a la Prusse en 1870.', points: 1 },
    { quiz: 'histoire-1ere-revolutions-republique', q: 'La loi de separation des Eglises et de l\'Etat date de 1905.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la loi du 9 decembre 1905 separe les Eglises et l\'Etat, fondement de la laicite en France.', points: 1 },
    { quiz: 'histoire-1ere-revolutions-republique', q: 'Qu\'est-ce que l\'affaire Dreyfus ?', type: 'qcm', options: ['Un scandale financier', 'L\'accusation injuste d\'un officier juif pour espionnage', 'Un attentat', 'Une greve ouvriere'], correct: 1, explanation: 'Le capitaine Dreyfus, juif, est accuse a tort d\'espionnage (1894). L\'affaire divise la France et revele l\'antisemitisme.', points: 2 },
    { quiz: 'histoire-1ere-revolutions-republique', q: 'Qui a realise l\'unite italienne ?', type: 'qcm', options: ['Bismarck', 'Cavour et Garibaldi', 'Napoleon III', 'Victor Hugo'], correct: 1, explanation: 'Cavour (diplomate) et Garibaldi (militaire) realisent l\'unite italienne entre 1859 et 1870.', points: 1 },
    { quiz: 'histoire-1ere-revolutions-republique', q: 'Le traite de Versailles (1919) impose de lourdes reparations a l\'Allemagne.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : l\'Allemagne est declaree responsable de la guerre et doit payer de lourdes reparations.', points: 1 },
    { quiz: 'histoire-1ere-revolutions-republique', q: 'Qu\'appelle-t-on le "Printemps des peuples" ?', type: 'qcm', options: ['Les revolutions de 1848 en Europe', 'Le printemps arabe', 'Mai 68', 'La Revolution de 1789'], correct: 0, explanation: 'Le Printemps des peuples (1848) est une vague de revolutions liberales et nationales en Europe.', points: 1 },
    { quiz: 'histoire-1ere-revolutions-republique', q: 'Bismarck a unifie l\'Allemagne par une politique de "fer et de sang".', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : Otto von Bismarck a unifie l\'Allemagne par la guerre (1864, 1866, 1870) et la diplomatie.', points: 1 },
    { quiz: 'histoire-1ere-revolutions-republique', q: 'La Commune de Paris a eu lieu en quelle annee ?', type: 'qcm', options: ['1789', '1848', '1871', '1905'], correct: 2, explanation: 'La Commune de Paris (mars-mai 1871) est une insurrection populaire ecrasee par le gouvernement de Versailles.', points: 1 },
    { quiz: 'histoire-1ere-revolutions-republique', q: 'La Triple Entente regroupe la France, le Royaume-Uni et la Russie.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la Triple Entente (1907) allie France, Royaume-Uni et Russie face a la Triple Alliance.', points: 1 },

    // ── 1ERE GEOGRAPHIE ──
    { quiz: 'geographie-1ere-metropolisation', q: 'Qu\'est-ce que la macrocephalie urbaine ?', type: 'qcm', options: ['La croissance de toutes les villes', 'La domination ecrasante d\'une seule ville sur un pays', 'La disparition des villes', 'La fusion de deux villes'], correct: 1, explanation: 'La macrocephalie est la domination d\'une seule metropole (ex: Paris en France, Londres au Royaume-Uni).', points: 1 },
    { quiz: 'geographie-1ere-metropolisation', q: 'Qu\'est-ce qu\'une technopole ?', type: 'qcm', options: ['Une grande ville', 'Un parc d\'activites high-tech et de recherche', 'Un aeroport', 'Un centre commercial'], correct: 1, explanation: 'Une technopole regroupe industries de haute technologie, universites et centres de recherche (ex: Sophia Antipolis).', points: 1 },
    { quiz: 'geographie-1ere-metropolisation', q: 'La tertiarisation designe le developpement des services dans l\'economie.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la tertiarisation est la montee en puissance du secteur tertiaire (services) dans l\'economie.', points: 1 },
    { quiz: 'geographie-1ere-metropolisation', q: 'Qu\'est-ce que la deprise rurale ?', type: 'qcm', options: ['L\'industrialisation des campagnes', 'L\'abandon progressif des campagnes par la population et les activites', 'Le tourisme rural', 'L\'agriculture biologique'], correct: 1, explanation: 'La deprise rurale est le declin demographique et economique des espaces ruraux.', points: 1 },
    { quiz: 'geographie-1ere-metropolisation', q: 'Paris est une ville mondiale de premier rang.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : Paris fait partie des villes mondiales de premier rang avec New York, Londres et Tokyo.', points: 1 },
    { quiz: 'geographie-1ere-metropolisation', q: 'Qu\'est-ce qu\'un neorural ?', type: 'qcm', options: ['Un agriculteur moderne', 'Un citadin qui s\'installe a la campagne', 'Un enfant ne a la campagne', 'Un touriste'], correct: 1, explanation: 'Un neorural est une personne quittant la ville pour s\'installer a la campagne.', points: 1 },
    { quiz: 'geographie-1ere-metropolisation', q: 'La fragmentation urbaine designe les inegalites socio-spatiales au sein d\'une ville.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la fragmentation urbaine se manifeste par la coexistence de quartiers riches et de quartiers defavorises.', points: 1 },
    { quiz: 'geographie-1ere-metropolisation', q: 'Le Grand Paris est un projet visant a renforcer l\'attractivite de la region parisienne.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : le Grand Paris (Grand Paris Express, nouvelles lignes de metro) vise a mieux relier les banlieues et renforcer Paris.', points: 1 },

    // ── TERMINALE HISTOIRE ──
    { quiz: 'histoire-tle-monde-xxe', q: 'Quand Hitler arrive-t-il au pouvoir ?', type: 'qcm', options: ['1929', '1933', '1935', '1939'], correct: 1, explanation: 'Adolf Hitler est nomme chancelier le 30 janvier 1933.', points: 1 },
    { quiz: 'histoire-tle-monde-xxe', q: 'Qu\'est-ce que le Goulag ?', type: 'qcm', options: ['La police secrete nazie', 'Le systeme de camps de travail force en URSS', 'L\'armee rouge', 'Le parlement sovietique'], correct: 1, explanation: 'Le Goulag est le systeme de camps de travail force ou etaient deportes les opposants en URSS.', points: 1 },
    { quiz: 'histoire-tle-monde-xxe', q: 'La conference de Wannsee (1942) planifie la Solution finale.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la conference de Wannsee (20 janvier 1942) planifie l\'extermination systematique des Juifs d\'Europe.', points: 1 },
    { quiz: 'histoire-tle-monde-xxe', q: 'Qu\'est-ce que la doctrine Truman (1947) ?', type: 'qcm', options: ['La politique de desarmement', 'La politique d\'endiguement du communisme', 'Un plan economique', 'Un traite de paix'], correct: 1, explanation: 'La doctrine Truman vise a empecher l\'expansion du communisme (containment/endiguement).', points: 1 },
    { quiz: 'histoire-tle-monde-xxe', q: 'La decolonisation designe l\'independance des anciennes colonies.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la decolonisation est le processus par lequel les colonies obtiennent leur independance (1945-1970 principalement).', points: 1 },
    { quiz: 'histoire-tle-monde-xxe', q: 'Que signifie la "coexistence pacifique" ?', type: 'qcm', options: ['La fin de la guerre froide', 'La volonte de coexister sans guerre nucleaire entre blocs', 'Un traite de paix', 'L\'alliance USA-URSS'], correct: 1, explanation: 'La coexistence pacifique (annees 1960) est une detente relative entre USA et URSS pour eviter la guerre nucleaire.', points: 1 },
    { quiz: 'histoire-tle-monde-xxe', q: 'Les attentats du 11 septembre 2001 ont frappe les Etats-Unis.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : les attentats du 11 septembre 2001 contre le World Trade Center et le Pentagone ont marque le debut d\'une nouvelle ere geopolitique.', points: 1 },
    { quiz: 'histoire-tle-monde-xxe', q: 'Qu\'est-ce que le Tiers-monde ?', type: 'qcm', options: ['Les pays pauvres uniquement', 'Les pays ne s\'alignant ni sur les USA ni sur l\'URSS', 'Les pays europeens', 'L\'Amerique du Sud'], correct: 1, explanation: 'Le Tiers-monde designe les pays qui, pendant la guerre froide, ne s\'alignent ni sur le bloc Ouest ni sur le bloc Est.', points: 1 },
    { quiz: 'histoire-tle-monde-xxe', q: 'La chute du mur de Berlin symbolise la fin de la guerre froide.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la chute du mur de Berlin (9 novembre 1989) symbolise la fin de la bipolarisation du monde.', points: 1 },
    { quiz: 'histoire-tle-monde-xxe', q: 'Qu\'est-ce que les BRICS ?', type: 'qcm', options: ['Une organisation militaire', 'Un groupe de puissances emergentes (Bresil, Russie, Inde, Chine, Afrique du Sud)', 'Un accord commercial', 'Un programme spatial'], correct: 1, explanation: 'Les BRICS regroupent des puissances emergentes qui pesent de plus en plus dans l\'economie et la geopolitique mondiales.', points: 1 },

    // ── TERMINALE GEOGRAPHIE ──
    { quiz: 'geographie-tle-mondialisation-geopolitique', q: 'Qu\'est-ce qu\'une ZEE ?', type: 'qcm', options: ['Une Zone d\'Education Europeenne', 'Une Zone Economique Exclusive (200 milles marins)', 'Un Zone d\'Echanges Equitables', 'Une Zone d\'Energie Eolienne'], correct: 1, explanation: 'La ZEE est un espace maritime de 200 milles nautiques ou un Etat exerce des droits souverains sur les ressources.', points: 1 },
    { quiz: 'geographie-tle-mondialisation-geopolitique', q: 'Quel detroit est le plus strategique pour le commerce du petrole ?', type: 'qcm', options: ['Gibraltar', 'Malacca', 'Ormuz', 'Bosphore'], correct: 2, explanation: 'Le detroit d\'Ormuz, a la sortie du golfe Persique, voit transiter environ 20% du petrole mondial.', points: 1 },
    { quiz: 'geographie-tle-mondialisation-geopolitique', q: 'Les Etats-Unis exercent un "soft power" a travers leur culture.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : le soft power americain repose sur la diffusion de sa culture (cinema, musique, universites, mode de vie).', points: 1 },
    { quiz: 'geographie-tle-mondialisation-geopolitique', q: 'Qu\'est-ce que le marche unique europeen ?', type: 'qcm', options: ['Un supermarche europeen', 'La libre circulation des biens, services, capitaux et personnes dans l\'UE', 'Un marche boursier', 'Un accord commercial avec la Chine'], correct: 1, explanation: 'Le marche unique (1993) permet la libre circulation des biens, services, capitaux et personnes entre les pays de l\'UE.', points: 1 },
    { quiz: 'geographie-tle-mondialisation-geopolitique', q: 'La mer de Chine meridionale est un espace de tensions geopolitiques.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la Chine revendique la quasi-totalite de la mer de Chine meridionale, contestee par les pays riverains.', points: 1 },
    { quiz: 'geographie-tle-mondialisation-geopolitique', q: 'Qu\'est-ce que l\'euroscepticisme ?', type: 'qcm', options: ['Le soutien a l\'euro', 'La critique ou le rejet du projet europeen', 'L\'elargissement de l\'UE', 'La politique monetaire'], correct: 1, explanation: 'L\'euroscepticisme est une attitude critique envers l\'integration europeenne (ex: Brexit).', points: 1 },
    { quiz: 'geographie-tle-mondialisation-geopolitique', q: 'L\'Arctique est un enjeu geopolitique croissant en raison du rechauffement climatique.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la fonte des glaces ouvre de nouvelles routes maritimes et l\'acces a des ressources (petrole, gaz).', points: 1 },
    { quiz: 'geographie-tle-mondialisation-geopolitique', q: 'Que sont les DROM-COM ?', type: 'qcm', options: ['Des regions metropolitaines', 'Les territoires francais d\'outre-mer', 'Des pays de l\'UE', 'Des organisations internationales'], correct: 1, explanation: 'DROM-COM = Departements et Regions d\'Outre-Mer - Collectivites d\'Outre-Mer (Guadeloupe, Reunion, Polynesie...).', points: 1 },
    { quiz: 'geographie-tle-mondialisation-geopolitique', q: 'Shanghai est le premier port mondial en volume de conteneurs.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : Shanghai est le premier port mondial en trafic de conteneurs.', points: 1 },
    { quiz: 'geographie-tle-mondialisation-geopolitique', q: 'La Northern Range est la plus grande facade maritime d\'Europe.', type: 'vrai_faux', options: ['Vrai', 'Faux'], correct: 0, explanation: 'Vrai : la Northern Range (du Havre a Hambourg) est la plus grande facade maritime d\'Europe, interface de la mondialisation.', points: 1 },
  ];

  // Insert questions and options
  for (let i = 0; i < questionsData.length; i++) {
    const qd = questionsData[i];
    const [question] = await knex('quiz_questions')
      .insert({
        quiz_id: getQuizId(qd.quiz),
        question_text: qd.q,
        question_type: qd.type,
        image_url: null,
        explanation: qd.explanation,
        sort_order: i + 1,
        points: qd.points,
      })
      .returning('*');

    await knex('quiz_options').insert(
      qd.options.map((opt: string, idx: number) => ({
        question_id: question.id,
        option_text: opt,
        is_correct: idx === qd.correct,
        sort_order: idx + 1,
      }))
    );
  }
}
