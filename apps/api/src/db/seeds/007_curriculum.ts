import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('curriculum_lessons').del();
  await knex('curriculum_chapters').del();
  await knex('subjects').del();

  const subjects = await knex('subjects')
    .insert([
      { name: 'Histoire', slug: 'histoire', icon: 'book' },
      { name: 'Geographie', slug: 'geographie', icon: 'globe' },
    ])
    .returning('*');

  const levels = await knex('school_levels').select('id', 'slug');
  const getLevelId = (slug: string) => levels.find((l: any) => l.slug === slug)?.id;
  const getSubjectId = (slug: string) => subjects.find((s: any) => s.slug === slug)?.id;

  const histoireId = getSubjectId('histoire');
  const geoId = getSubjectId('geographie');

  const chapters = await knex('curriculum_chapters')
    .insert([
      // ============================================================
      // 6EME - HISTOIRE
      // ============================================================
      {
        level_id: getLevelId('6eme'), subject_id: histoireId,
        title: 'Les debuts de l\'humanite',
        slug: '6e-hist-debuts-humanite',
        description: 'La Prehistoire : des premiers hominides a Homo sapiens.',
        objectives: JSON.stringify(['Situer les grandes etapes de l\'evolution humaine', 'Comprendre le mode de vie des premiers hommes', 'Connaitre les outils et l\'art prehistorique']),
        key_concepts: JSON.stringify(['Paleolithique', 'Homo sapiens', 'Nomadisme', 'Art parietal', 'Outils en pierre taillee']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('6eme'), subject_id: histoireId,
        title: 'La revolution neolithique',
        slug: '6e-hist-revolution-neolithique',
        description: 'Le passage de la chasse-cueillette a l\'agriculture et a la sedentarisation.',
        objectives: JSON.stringify(['Comprendre la sedentarisation', 'Connaitre les debuts de l\'agriculture et de l\'elevage', 'Expliquer les transformations sociales du Neolithique']),
        key_concepts: JSON.stringify(['Neolithique', 'Sedentarisation', 'Agriculture', 'Elevage', 'Villages', 'Megalithes']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('6eme'), subject_id: histoireId,
        title: 'Premiers Etats, premieres ecritures',
        slug: '6e-hist-premiers-etats',
        description: 'Naissance des premieres civilisations en Mesopotamie et en Egypte.',
        objectives: JSON.stringify(['Localiser les premiers Etats', 'Comprendre la naissance de l\'ecriture', 'Decrire l\'organisation des premieres civilisations']),
        key_concepts: JSON.stringify(['Mesopotamie', 'Egypte', 'Cuneiforme', 'Hieroglyphes', 'Pharaon', 'Cite-Etat']),
        sort_order: 3,
      },
      {
        level_id: getLevelId('6eme'), subject_id: histoireId,
        title: 'Le monde des cites grecques',
        slug: '6e-hist-cites-grecques',
        description: 'La civilisation grecque : democratie athenienne, mythologie et culture.',
        objectives: JSON.stringify(['Comprendre la democratie athenienne', 'Connaitre la mythologie grecque', 'Expliquer le fonctionnement d\'une cite grecque']),
        key_concepts: JSON.stringify(['Cite-Etat', 'Democratie', 'Agora', 'Pericles', 'Mythologie', 'Jeux olympiques']),
        sort_order: 4,
      },
      {
        level_id: getLevelId('6eme'), subject_id: histoireId,
        title: 'Rome, du mythe a l\'histoire',
        slug: '6e-hist-rome-mythe',
        description: 'La fondation de Rome et la Republique romaine.',
        objectives: JSON.stringify(['Distinguer mythe et histoire dans la fondation de Rome', 'Comprendre la Republique romaine', 'Connaitre l\'expansion romaine']),
        key_concepts: JSON.stringify(['Romulus et Remus', 'Republique', 'Senat', 'Patriciens', 'Plebeiens', 'Legions']),
        sort_order: 5,
      },
      {
        level_id: getLevelId('6eme'), subject_id: histoireId,
        title: 'L\'Empire romain : conquetes et romanisation',
        slug: '6e-hist-empire-romain',
        description: 'L\'Empire romain, la paix romaine et la diffusion de la culture romaine.',
        objectives: JSON.stringify(['Situer l\'Empire romain dans l\'espace et le temps', 'Comprendre la romanisation', 'Decrire la vie quotidienne dans l\'Empire']),
        key_concepts: JSON.stringify(['Empire', 'Auguste', 'Pax Romana', 'Romanisation', 'Thermes', 'Aqueducs', 'Voies romaines']),
        sort_order: 6,
      },
      // ============================================================
      // 6EME - GEOGRAPHIE
      // ============================================================
      {
        level_id: getLevelId('6eme'), subject_id: geoId,
        title: 'Habiter une metropole',
        slug: '6e-geo-habiter-metropole',
        description: 'Les grandes villes du monde : organisation, fonctions et defis.',
        objectives: JSON.stringify(['Decrire les caracteristiques d\'une metropole', 'Comparer des metropoles de pays developpes et en developpement', 'Comprendre les defis urbains']),
        key_concepts: JSON.stringify(['Metropole', 'Urbanisation', 'CBD', 'Banlieue', 'Etalement urbain', 'Mobilite']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('6eme'), subject_id: geoId,
        title: 'Habiter un espace de faible densite',
        slug: '6e-geo-faible-densite',
        description: 'Les espaces ruraux, les deserts et les espaces de montagne.',
        objectives: JSON.stringify(['Identifier les espaces de faible densite', 'Comprendre les modes de vie', 'Expliquer les contraintes et les atouts']),
        key_concepts: JSON.stringify(['Densite', 'Espace rural', 'Desert', 'Montagne', 'Contraintes naturelles', 'Isolement']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('6eme'), subject_id: geoId,
        title: 'Habiter les littoraux',
        slug: '6e-geo-habiter-littoraux',
        description: 'Les espaces littoraux : tourisme, industrie et enjeux environnementaux.',
        objectives: JSON.stringify(['Decrire les activites des littoraux', 'Comprendre l\'attractivite des cotes', 'Expliquer les risques littoraux']),
        key_concepts: JSON.stringify(['Littoral', 'Tourisme balneaire', 'Port', 'Erosion', 'Station balneaire']),
        sort_order: 3,
      },
      {
        level_id: getLevelId('6eme'), subject_id: geoId,
        title: 'Le monde habite',
        slug: '6e-geo-monde-habite',
        description: 'La repartition de la population mondiale et les grands foyers de peuplement.',
        objectives: JSON.stringify(['Localiser les grands foyers de peuplement', 'Expliquer les facteurs de repartition', 'Utiliser des cartes de densite']),
        key_concepts: JSON.stringify(['Foyer de peuplement', 'Densite', 'Ecoumene', 'Migration', 'Croissance demographique']),
        sort_order: 4,
      },
      // ============================================================
      // 5EME - HISTOIRE
      // ============================================================
      {
        level_id: getLevelId('5eme'), subject_id: histoireId,
        title: 'Byzance et l\'Europe carolingienne',
        slug: '5e-hist-byzance-carolingiens',
        description: 'Deux empires chretiens au Moyen Age.',
        objectives: JSON.stringify(['Situer Byzance et l\'Empire carolingien', 'Comparer les deux empires', 'Comprendre le role de l\'Eglise']),
        key_concepts: JSON.stringify(['Empire byzantin', 'Constantinople', 'Charlemagne', 'Schisme', 'Orthodoxie', 'Catholicisme']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('5eme'), subject_id: histoireId,
        title: 'De la naissance de l\'Islam a la prise de Bagdad',
        slug: '5e-hist-naissance-islam',
        description: 'La civilisation islamique du VIIe au XIIIe siecle.',
        objectives: JSON.stringify(['Connaitre les fondements de l\'Islam', 'Decrire l\'expansion musulmane', 'Comprendre la civilisation arabo-musulmane']),
        key_concepts: JSON.stringify(['Mahomet', 'Coran', 'Hegire', 'Califat', 'Bagdad', 'Al-Andalus']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('5eme'), subject_id: histoireId,
        title: 'L\'ordre seigneurial',
        slug: '5e-hist-ordre-seigneurial',
        description: 'La feodalite, les seigneurs et les paysans au Moyen Age.',
        objectives: JSON.stringify(['Decrire la seigneurie', 'Comprendre les liens feodaux', 'Expliquer la vie des paysans']),
        key_concepts: JSON.stringify(['Seigneurie', 'Fief', 'Vassal', 'Suzerain', 'Serf', 'Corvee', 'Ban']),
        sort_order: 3,
      },
      {
        level_id: getLevelId('5eme'), subject_id: histoireId,
        title: 'L\'emergence d\'une nouvelle societe urbaine',
        slug: '5e-hist-societe-urbaine',
        description: 'L\'essor des villes, le commerce et la bourgeoisie au Moyen Age.',
        objectives: JSON.stringify(['Decrire l\'essor des villes medievales', 'Comprendre le role des marchands', 'Connaitre les grandes foires']),
        key_concepts: JSON.stringify(['Commune', 'Charte', 'Bourgeoisie', 'Corporation', 'Foire', 'Cathedrale']),
        sort_order: 4,
      },
      {
        level_id: getLevelId('5eme'), subject_id: histoireId,
        title: 'Humanisme, reformes et conflits religieux',
        slug: '5e-hist-humanisme-reformes',
        description: 'La Renaissance, l\'Humanisme et les guerres de religion.',
        objectives: JSON.stringify(['Definir l\'Humanisme et la Renaissance', 'Comprendre la Reforme protestante', 'Expliquer les guerres de religion']),
        key_concepts: JSON.stringify(['Humanisme', 'Renaissance', 'Imprimerie', 'Luther', 'Calvin', 'Edit de Nantes']),
        sort_order: 5,
      },
      {
        level_id: getLevelId('5eme'), subject_id: histoireId,
        title: 'Du prince de la Renaissance au roi absolu',
        slug: '5e-hist-roi-absolu',
        description: 'La monarchie absolue de Francois Ier a Louis XIV.',
        objectives: JSON.stringify(['Comprendre la construction de l\'Etat monarchique', 'Decrire le regne de Louis XIV', 'Expliquer la monarchie absolue']),
        key_concepts: JSON.stringify(['Monarchie absolue', 'Droit divin', 'Versailles', 'Louis XIV', 'Centralisation']),
        sort_order: 6,
      },
      // ============================================================
      // 5EME - GEOGRAPHIE
      // ============================================================
      {
        level_id: getLevelId('5eme'), subject_id: geoId,
        title: 'La question demographique et l\'inegal developpement',
        slug: '5e-geo-question-demographique',
        description: 'Croissance demographique, developpement et inegalites mondiales.',
        objectives: JSON.stringify(['Analyser la croissance demographique', 'Comprendre les inegalites de developpement', 'Utiliser les indicateurs (IDH, PIB)']),
        key_concepts: JSON.stringify(['Transition demographique', 'IDH', 'PMA', 'Croissance demographique', 'Fecondite']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('5eme'), subject_id: geoId,
        title: 'Des ressources limitees, a gerer et a renouveler',
        slug: '5e-geo-ressources-limitees',
        description: 'L\'eau, l\'energie et l\'alimentation : des ressources sous pression.',
        objectives: JSON.stringify(['Identifier les ressources menacees', 'Comprendre les enjeux de l\'eau et de l\'energie', 'Connaitre les solutions durables']),
        key_concepts: JSON.stringify(['Ressources renouvelables', 'Stress hydrique', 'Securite alimentaire', 'Developpement durable']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('5eme'), subject_id: geoId,
        title: 'Prevenir les risques, s\'adapter au changement global',
        slug: '5e-geo-prevenir-risques',
        description: 'Les risques naturels et technologiques, le rechauffement climatique.',
        objectives: JSON.stringify(['Distinguer alea, risque et catastrophe', 'Comprendre le changement climatique', 'Connaitre les mesures de prevention']),
        key_concepts: JSON.stringify(['Alea', 'Risque', 'Vulnerabilite', 'Prevention', 'Rechauffement climatique']),
        sort_order: 3,
      },
      // ============================================================
      // 4EME - HISTOIRE
      // ============================================================
      {
        level_id: getLevelId('4eme'), subject_id: histoireId,
        title: 'Bourgeoisies marchandes, negoces et traites negrieres',
        slug: '4e-hist-negoces-traites',
        description: 'Le commerce triangulaire et l\'esclavage au XVIIIe siecle.',
        objectives: JSON.stringify(['Decrire le commerce triangulaire', 'Comprendre le systeme esclavagiste', 'Connaitre le role des bourgeoisies marchandes']),
        key_concepts: JSON.stringify(['Commerce triangulaire', 'Traite negriere', 'Esclavage', 'Plantation', 'Code noir']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('4eme'), subject_id: histoireId,
        title: 'L\'Europe des Lumieres',
        slug: '4e-hist-europe-lumieres',
        description: 'Les philosophes des Lumieres et la critique de l\'Ancien Regime.',
        objectives: JSON.stringify(['Connaitre les grands philosophes des Lumieres', 'Comprendre leurs idees principales', 'Expliquer leur influence sur la Revolution']),
        key_concepts: JSON.stringify(['Lumieres', 'Voltaire', 'Montesquieu', 'Rousseau', 'Encyclopedie', 'Raison']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('4eme'), subject_id: histoireId,
        title: 'La Revolution francaise et l\'Empire',
        slug: '4e-hist-revolution-empire',
        description: 'De la prise de la Bastille a la chute de Napoleon.',
        objectives: JSON.stringify(['Connaitre les etapes de la Revolution', 'Comprendre la DDHC', 'Situer le role de Napoleon']),
        key_concepts: JSON.stringify(['Bastille', 'DDHC', 'Terreur', 'Republique', 'Consulat', 'Empire', 'Code civil']),
        sort_order: 3,
      },
      {
        level_id: getLevelId('4eme'), subject_id: histoireId,
        title: 'L\'Europe de la revolution industrielle',
        slug: '4e-hist-revolution-industrielle',
        description: 'Les transformations economiques et sociales du XIXe siecle.',
        objectives: JSON.stringify(['Decrire l\'industrialisation', 'Comprendre les nouvelles classes sociales', 'Connaitre les conditions ouvrieres']),
        key_concepts: JSON.stringify(['Revolution industrielle', 'Usine', 'Proletariat', 'Bourgeoisie', 'Exode rural', 'Charbon']),
        sort_order: 4,
      },
      {
        level_id: getLevelId('4eme'), subject_id: histoireId,
        title: 'Conquetes et societes coloniales',
        slug: '4e-hist-conquetes-coloniales',
        description: 'L\'expansion coloniale europeenne au XIXe siecle.',
        objectives: JSON.stringify(['Situer les empires coloniaux', 'Comprendre les motivations de la colonisation', 'Decrire la societe coloniale']),
        key_concepts: JSON.stringify(['Colonisation', 'Empire colonial', 'Mission civilisatrice', 'Conference de Berlin']),
        sort_order: 5,
      },
      {
        level_id: getLevelId('4eme'), subject_id: histoireId,
        title: 'La Troisieme Republique',
        slug: '4e-hist-troisieme-republique',
        description: 'L\'installation de la Republique et les lois republicaines.',
        objectives: JSON.stringify(['Comprendre l\'installation de la IIIe Republique', 'Connaitre les grandes lois republicaines', 'Expliquer l\'affaire Dreyfus']),
        key_concepts: JSON.stringify(['IIIe Republique', 'Lois Jules Ferry', 'Laicite', 'Dreyfus', 'Separation Eglise-Etat']),
        sort_order: 6,
      },
      // ============================================================
      // 4EME - GEOGRAPHIE
      // ============================================================
      {
        level_id: getLevelId('4eme'), subject_id: geoId,
        title: 'L\'urbanisation du monde',
        slug: '4e-geo-urbanisation-monde',
        description: 'Espaces urbains dans la mondialisation.',
        objectives: JSON.stringify(['Decrire l\'urbanisation mondiale', 'Comparer les villes', 'Comprendre les marges urbaines']),
        key_concepts: JSON.stringify(['Urbanisation', 'Metropole', 'Megapole', 'Bidonville', 'Gentrification']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('4eme'), subject_id: geoId,
        title: 'Les mobilites humaines transnationales',
        slug: '4e-geo-mobilites-humaines',
        description: 'Les migrations internationales et le tourisme mondial.',
        objectives: JSON.stringify(['Decrire les flux migratoires', 'Comprendre les causes des migrations', 'Analyser le tourisme mondial']),
        key_concepts: JSON.stringify(['Migration', 'Refugie', 'Diaspora', 'Tourisme de masse', 'Flux migratoire']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('4eme'), subject_id: geoId,
        title: 'Des espaces transformes par la mondialisation',
        slug: '4e-geo-mondialisation',
        description: 'Mers, oceans et espaces majeurs de la mondialisation.',
        objectives: JSON.stringify(['Comprendre le role des mers', 'Decrire les espaces productifs mondialises', 'Analyser les inegalites']),
        key_concepts: JSON.stringify(['Mondialisation', 'Facade maritime', 'ZIP', 'Conteneur', 'FTN', 'Delocalisation']),
        sort_order: 3,
      },
      // ============================================================
      // 3EME - HISTOIRE
      // ============================================================
      {
        level_id: getLevelId('3eme'), subject_id: histoireId,
        title: 'Civils et militaires dans la Premiere Guerre mondiale',
        slug: '3e-hist-premiere-guerre',
        description: 'La Grande Guerre : une guerre totale (1914-1918).',
        objectives: JSON.stringify(['Decrire la guerre des tranchees', 'Comprendre la guerre totale', 'Connaitre les consequences']),
        key_concepts: JSON.stringify(['Guerre totale', 'Tranchees', 'Verdun', 'Poilus', 'Genocide armenien', 'Armistice']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('3eme'), subject_id: histoireId,
        title: 'Democraties fragilisees et experiences totalitaires',
        slug: '3e-hist-totalitarismes',
        description: 'Les regimes totalitaires de l\'entre-deux-guerres.',
        objectives: JSON.stringify(['Definir le totalitarisme', 'Comparer les regimes totalitaires', 'Comprendre la montee des extremes']),
        key_concepts: JSON.stringify(['Totalitarisme', 'Stalinisme', 'Nazisme', 'Fascisme', 'Propagande', 'Parti unique']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('3eme'), subject_id: histoireId,
        title: 'La Seconde Guerre mondiale, une guerre d\'aneantissement',
        slug: '3e-hist-seconde-guerre',
        description: 'La guerre et le genocide des Juifs et des Tziganes.',
        objectives: JSON.stringify(['Decrire les phases de la guerre', 'Comprendre la Shoah', 'Connaitre la Resistance et la Liberation']),
        key_concepts: JSON.stringify(['Blitzkrieg', 'Shoah', 'Auschwitz', 'Resistance', 'De Gaulle', 'Collaboration', 'Debarquement']),
        sort_order: 3,
      },
      {
        level_id: getLevelId('3eme'), subject_id: histoireId,
        title: 'Un monde bipolaire au temps de la guerre froide',
        slug: '3e-hist-guerre-froide',
        description: 'L\'affrontement Est-Ouest de 1947 a 1991.',
        objectives: JSON.stringify(['Comprendre la bipolarisation', 'Connaitre les crises majeures', 'Expliquer la chute du mur de Berlin']),
        key_concepts: JSON.stringify(['Guerre froide', 'Bloc Ouest', 'Bloc Est', 'Mur de Berlin', 'Crise de Cuba', 'OTAN']),
        sort_order: 4,
      },
      {
        level_id: getLevelId('3eme'), subject_id: histoireId,
        title: 'La Ve Republique : de de Gaulle a nos jours',
        slug: '3e-hist-ve-republique',
        description: 'La construction de la Ve Republique et ses evolutions.',
        objectives: JSON.stringify(['Comprendre les institutions de la Ve Republique', 'Connaitre les grands presidents', 'Expliquer l\'alternance et la cohabitation']),
        key_concepts: JSON.stringify(['Ve Republique', 'Constitution 1958', 'De Gaulle', 'Mai 68', 'Alternance', 'Cohabitation']),
        sort_order: 5,
      },
      // ============================================================
      // 3EME - GEOGRAPHIE
      // ============================================================
      {
        level_id: getLevelId('3eme'), subject_id: geoId,
        title: 'Dynamiques territoriales de la France contemporaine',
        slug: '3e-geo-dynamiques-france',
        description: 'Aires urbaines, espaces productifs et faible densite en France.',
        objectives: JSON.stringify(['Decrire les aires urbaines francaises', 'Comprendre la periurbanisation', 'Analyser les dynamiques des espaces productifs']),
        key_concepts: JSON.stringify(['Aire urbaine', 'Periurbanisation', 'Metropolisation', 'Technopole', 'Littoralisation']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('3eme'), subject_id: geoId,
        title: 'Pourquoi et comment amenager le territoire',
        slug: '3e-geo-amenagement-territoire',
        description: 'L\'amenagement du territoire et les inegalites territoriales.',
        objectives: JSON.stringify(['Comprendre les objectifs de l\'amenagement', 'Connaitre les acteurs', 'Analyser un projet d\'amenagement']),
        key_concepts: JSON.stringify(['Amenagement', 'LGV', 'Collectivites territoriales', 'Region', 'Desenclavement']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('3eme'), subject_id: geoId,
        title: 'La France et l\'Union europeenne',
        slug: '3e-geo-france-ue',
        description: 'La place de la France dans l\'UE et les enjeux europeens.',
        objectives: JSON.stringify(['Situer la France dans l\'UE', 'Connaitre les institutions europeennes', 'Comprendre les politiques europeennes']),
        key_concepts: JSON.stringify(['Union europeenne', 'Euro', 'Schengen', 'PAC', 'FEDER', 'Elargissement']),
        sort_order: 3,
      },
      // ============================================================
      // SECONDE - HISTOIRE
      // ============================================================
      {
        level_id: getLevelId('seconde'), subject_id: histoireId,
        title: 'La Mediterranee antique : empreintes grecques et romaines',
        slug: '2nde-hist-mediterranee-antique',
        description: 'Democratie athenienne et Empire romain : deux modeles politiques.',
        objectives: JSON.stringify(['Comparer democratie athenienne et Republique romaine', 'Comprendre la citoyennete antique', 'Analyser l\'heritage politique']),
        key_concepts: JSON.stringify(['Citoyennete', 'Ecclesia', 'Senat romain', 'Principat', 'Romanisation']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('seconde'), subject_id: histoireId,
        title: 'La Mediterranee medievale : echanges et conflits',
        slug: '2nde-hist-mediterranee-medievale',
        description: 'Trois civilisations mediterraneennes et les Croisades.',
        objectives: JSON.stringify(['Decrire les trois civilisations', 'Comprendre les echanges commerciaux et culturels', 'Analyser les Croisades']),
        key_concepts: JSON.stringify(['Chretiente', 'Monde musulman', 'Empire byzantin', 'Croisades', 'Reconquista']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('seconde'), subject_id: histoireId,
        title: 'XVe-XVIe siecles : un nouveau rapport au monde',
        slug: '2nde-hist-nouveau-rapport-monde',
        description: 'Les Grandes Decouvertes et l\'ouverture atlantique.',
        objectives: JSON.stringify(['Connaitre les grandes explorations', 'Comprendre l\'ouverture atlantique', 'Analyser les consequences']),
        key_concepts: JSON.stringify(['Grandes Decouvertes', 'Colomb', 'Magellan', 'Echange colombien', 'Traite atlantique']),
        sort_order: 3,
      },
      {
        level_id: getLevelId('seconde'), subject_id: histoireId,
        title: 'L\'Etat a l\'epoque moderne : France et Angleterre',
        slug: '2nde-hist-etat-moderne',
        description: 'Absolutisme en France, parlementarisme en Angleterre.',
        objectives: JSON.stringify(['Comparer absolutisme et parlementarisme', 'Comprendre la construction de l\'Etat moderne', 'Analyser Versailles comme instrument politique']),
        key_concepts: JSON.stringify(['Absolutisme', 'Parlementarisme', 'Bill of Rights', 'Versailles', 'Habeas Corpus']),
        sort_order: 4,
      },
      {
        level_id: getLevelId('seconde'), subject_id: histoireId,
        title: 'Les Lumieres et le developpement des sciences',
        slug: '2nde-hist-lumieres-sciences',
        description: 'Le mouvement des Lumieres et la revolution scientifique.',
        objectives: JSON.stringify(['Connaitre les philosophes des Lumieres', 'Comprendre la revolution scientifique', 'Analyser l\'Encyclopedie']),
        key_concepts: JSON.stringify(['Lumieres', 'Encyclopedie', 'Diderot', 'Newton', 'Salons', 'Opinion publique']),
        sort_order: 5,
      },
      // ============================================================
      // SECONDE - GEOGRAPHIE
      // ============================================================
      {
        level_id: getLevelId('seconde'), subject_id: geoId,
        title: 'Societes et environnements : des equilibres fragiles',
        slug: '2nde-geo-societes-environnements',
        description: 'Les societes face aux risques et au changement climatique.',
        objectives: JSON.stringify(['Comprendre les interactions societes-environnements', 'Analyser la gestion des ressources', 'Etudier les risques environnementaux']),
        key_concepts: JSON.stringify(['Milieu', 'Risque', 'Changement climatique', 'Biodiversite', 'Transition ecologique']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('seconde'), subject_id: geoId,
        title: 'Territoires, populations et developpement',
        slug: '2nde-geo-territoires-populations',
        description: 'Dynamiques demographiques et inegalites de developpement.',
        objectives: JSON.stringify(['Analyser les dynamiques demographiques', 'Comprendre les inegalites', 'Etudier la transition demographique']),
        key_concepts: JSON.stringify(['Transition demographique', 'Vieillissement', 'Emergence', 'Inegalites', 'Developpement humain']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('seconde'), subject_id: geoId,
        title: 'Des mobilites generalisees',
        slug: '2nde-geo-mobilites-generalisees',
        description: 'Transports, tourisme et migrations : un monde en mouvement.',
        objectives: JSON.stringify(['Decrire les formes de mobilite', 'Comprendre les flux migratoires et touristiques', 'Analyser le role des transports']),
        key_concepts: JSON.stringify(['Mobilite', 'Hub', 'Flux', 'Tourisme international', 'Migration de travail']),
        sort_order: 3,
      },
      // ============================================================
      // PREMIERE - HISTOIRE
      // ============================================================
      {
        level_id: getLevelId('premiere'), subject_id: histoireId,
        title: 'L\'Europe face aux revolutions (1789-1848)',
        slug: '1ere-hist-europe-revolutions',
        description: 'De la Revolution francaise au Printemps des peuples.',
        objectives: JSON.stringify(['Comprendre l\'heritage de la Revolution', 'Analyser la diffusion des idees revolutionnaires', 'Connaitre les revolutions de 1830 et 1848']),
        key_concepts: JSON.stringify(['Revolution', 'Liberalisme', 'Nationalisme', 'Restauration', 'Congres de Vienne']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('premiere'), subject_id: histoireId,
        title: 'La France dans l\'Europe des nationalites (1848-1871)',
        slug: '1ere-hist-france-nationalites',
        description: 'Le Second Empire et les unites italienne et allemande.',
        objectives: JSON.stringify(['Comprendre le Second Empire', 'Analyser les unifications italienne et allemande', 'Connaitre la guerre de 1870']),
        key_concepts: JSON.stringify(['Second Empire', 'Napoleon III', 'Cavour', 'Bismarck', 'Sedan', 'Commune de Paris']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('premiere'), subject_id: histoireId,
        title: 'La Troisieme Republique : un regime, un empire colonial',
        slug: '1ere-hist-iiie-republique-colonial',
        description: 'Consolidation de la Republique et expansion coloniale.',
        objectives: JSON.stringify(['Comprendre l\'enracinement de la Republique', 'Analyser les lois fondatrices', 'Decrire l\'empire colonial']),
        key_concepts: JSON.stringify(['Lois Ferry', 'Separation 1905', 'Dreyfus', 'Empire colonial', 'Exposition coloniale']),
        sort_order: 3,
      },
      {
        level_id: getLevelId('premiere'), subject_id: histoireId,
        title: 'La Premiere Guerre mondiale',
        slug: '1ere-hist-premiere-guerre-mondiale',
        description: 'Le suicide de l\'Europe et la fin des empires.',
        objectives: JSON.stringify(['Analyser les causes profondes', 'Decrire l\'experience combattante', 'Comprendre les consequences geopolitiques']),
        key_concepts: JSON.stringify(['Triple Alliance', 'Triple Entente', 'Guerre totale', 'Mutineries', 'Traite de Versailles']),
        sort_order: 4,
      },
      // ============================================================
      // PREMIERE - GEOGRAPHIE
      // ============================================================
      {
        level_id: getLevelId('premiere'), subject_id: geoId,
        title: 'La metropolisation : un processus mondial differencie',
        slug: '1ere-geo-metropolisation',
        description: 'Concentration des populations et des activites dans les metropoles.',
        objectives: JSON.stringify(['Definir la metropolisation', 'Comparer pays developpes et en developpement', 'Analyser Paris et les metropoles regionales']),
        key_concepts: JSON.stringify(['Metropolisation', 'Ville mondiale', 'Macrocephalie', 'Gentrification', 'Grand Paris']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('premiere'), subject_id: geoId,
        title: 'Les espaces productifs et leurs evolutions',
        slug: '1ere-geo-espaces-productifs',
        description: 'Espaces agricoles, industriels et touristiques.',
        objectives: JSON.stringify(['Analyser les mutations des espaces productifs', 'Comprendre la mondialisation des chaines de production', 'Etudier les espaces productifs francais']),
        key_concepts: JSON.stringify(['Espace productif', 'Technopole', 'Delocalisation', 'Agriculture intensive', 'Tertiarisation']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('premiere'), subject_id: geoId,
        title: 'Les espaces ruraux : multifonctionnalite ou fragmentation',
        slug: '1ere-geo-espaces-ruraux',
        description: 'Les transformations des campagnes en France et dans le monde.',
        objectives: JSON.stringify(['Definir la multifonctionnalite', 'Comprendre les conflits d\'usage', 'Analyser les campagnes francaises']),
        key_concepts: JSON.stringify(['Multifonctionnalite', 'Deprise rurale', 'Periurbanisation', 'Neoruraux', 'Agriculture durable']),
        sort_order: 3,
      },
      // ============================================================
      // TERMINALE - HISTOIRE
      // ============================================================
      {
        level_id: getLevelId('terminale'), subject_id: histoireId,
        title: 'Les regimes totalitaires (1917-1939)',
        slug: 'tle-hist-regimes-totalitaires',
        description: 'Genese et affirmation des regimes totalitaires.',
        objectives: JSON.stringify(['Definir les caracteristiques du totalitarisme', 'Comparer les trois regimes', 'Analyser les mecanismes de controle']),
        key_concepts: JSON.stringify(['Totalitarisme', 'Parti unique', 'Culte de la personnalite', 'Terreur de masse', 'Propagande']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('terminale'), subject_id: histoireId,
        title: 'La Seconde Guerre mondiale (1939-1945)',
        slug: 'tle-hist-seconde-guerre-mondiale',
        description: 'Guerre d\'aneantissement et genocide.',
        objectives: JSON.stringify(['Decrire les phases de la guerre', 'Analyser la Shoah', 'Comprendre Vichy et la Resistance']),
        key_concepts: JSON.stringify(['Guerre d\'aneantissement', 'Shoah', 'Solution finale', 'Vichy', 'Resistance', 'Nuremberg']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('terminale'), subject_id: histoireId,
        title: 'Le monde bipolaire (1945-1991)',
        slug: 'tle-hist-monde-bipolaire',
        description: 'Guerre froide, decolonisation et construction europeenne.',
        objectives: JSON.stringify(['Comprendre l\'affrontement Est-Ouest', 'Analyser la decolonisation', 'Connaitre les etapes de la construction europeenne']),
        key_concepts: JSON.stringify(['Guerre froide', 'Endiguement', 'Decolonisation', 'Tiers-monde', 'Non-alignes', 'CEE']),
        sort_order: 3,
      },
      {
        level_id: getLevelId('terminale'), subject_id: histoireId,
        title: 'Le monde depuis 1991',
        slug: 'tle-hist-monde-depuis-1991',
        description: 'De l\'hyperpuissance americaine au monde multipolaire.',
        objectives: JSON.stringify(['Comprendre l\'unipolarite americaine', 'Analyser les nouvelles conflictualites', 'Decrire l\'emergence de nouvelles puissances']),
        key_concepts: JSON.stringify(['Hyperpuissance', 'Mondialisation', 'Terrorisme', '11 septembre', 'Multipolarite', 'BRICS']),
        sort_order: 4,
      },
      // ============================================================
      // TERMINALE - GEOGRAPHIE
      // ============================================================
      {
        level_id: getLevelId('terminale'), subject_id: geoId,
        title: 'Mers et oceans : au coeur de la mondialisation',
        slug: 'tle-geo-mers-oceans',
        description: 'Routes, ressources et enjeux geopolitiques des espaces maritimes.',
        objectives: JSON.stringify(['Comprendre le role des mers dans la mondialisation', 'Analyser les routes maritimes', 'Etudier les enjeux geopolitiques']),
        key_concepts: JSON.stringify(['ZEE', 'Facade maritime', 'Detroit strategique', 'Route maritime', 'Droit de la mer']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('terminale'), subject_id: geoId,
        title: 'Dynamiques territoriales, cooperations et tensions',
        slug: 'tle-geo-dynamiques-cooperations',
        description: 'Puissance des Etats-Unis et tensions territoriales mondiales.',
        objectives: JSON.stringify(['Analyser la puissance des Etats-Unis', 'Comprendre les cooperations regionales', 'Etudier les tensions territoriales']),
        key_concepts: JSON.stringify(['Puissance', 'Hard power', 'Soft power', 'Integration regionale', 'Frontiere']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('terminale'), subject_id: geoId,
        title: 'L\'Union europeenne dans la mondialisation',
        slug: 'tle-geo-ue-mondialisation',
        description: 'L\'UE : puissance economique et projet politique.',
        objectives: JSON.stringify(['Decrire l\'UE comme pole de la mondialisation', 'Analyser les politiques europeennes', 'Comprendre les defis de l\'UE']),
        key_concepts: JSON.stringify(['UE', 'Marche unique', 'Eurozone', 'Elargissement', 'Euroscepticisme']),
        sort_order: 3,
      },
      {
        level_id: getLevelId('terminale'), subject_id: geoId,
        title: 'La France et ses regions dans l\'UE et la mondialisation',
        slug: 'tle-geo-france-regions',
        description: 'Dynamiques territoriales de la France : metropoles, outre-mer, inegalites.',
        objectives: JSON.stringify(['Analyser les disparites regionales', 'Comprendre le role de Paris et des metropoles', 'Etudier les territoires ultramarins']),
        key_concepts: JSON.stringify(['Region', 'Metropole', 'Diagonale du vide', 'DROM-COM', 'Decentralisation']),
        sort_order: 4,
      },
    ])
    .returning('*');

  const getChapterId = (slug: string) => chapters.find((c: any) => c.slug === slug)?.id;

  // ================================================================
  // LESSONS - Detailed revision content for each chapter
  // ================================================================
  await knex('curriculum_lessons').insert([
    // ── 6EME HISTOIRE ──
    {
      chapter_id: getChapterId('6e-hist-debuts-humanite'),
      title: 'Les premiers hommes et la maitrise du feu',
      content: `## Fiche de revision : Les debuts de l'humanite

### Schema pedagogique
AUSTRALOPITHEQUE (-7M) → HOMO HABILIS (-2,5M) → HOMO ERECTUS (-1,8M) → HOMO SAPIENS (-300 000)

### Points cles
- Les premiers hominides apparaissent en **Afrique** il y a environ 7 millions d'annees (Toumai).
- **Homo habilis** (homme habile) est le premier a fabriquer des outils en pierre taillee (choppers).
- **Homo erectus** maitrise le **feu** vers -400 000 ans, ce qui change tout : cuisson des aliments, protection, vie sociale.
- **Homo sapiens** apparait en Afrique vers -300 000 ans et colonise tous les continents.

### Mode de vie au Paleolithique
- **Nomades** : ils se deplacent pour suivre le gibier et cueillir des plantes.
- Vivent en petits groupes de chasseurs-cueilleurs.
- Fabriquent des outils de plus en plus perfectionnes : bifaces, grattoirs, propulseurs.

### L'art prehistorique
- Les peintures rupestres de la grotte de **Lascaux** (-18 000 ans) et de **Chauvet** (-36 000 ans) representent des animaux.
- Sculptures : la **Venus de Willendorf**.
- Cet art temoigne d'une pensee symbolique et de croyances.`,
      summary: 'Les premiers hominides apparaissent en Afrique il y a 7 millions d\'annees. L\'Homo sapiens apparait vers -300 000 ans. Au Paleolithique, les hommes sont nomades, chasseurs-cueilleurs, maitrisent le feu et creent les premiers arts (Lascaux).',
      key_dates: JSON.stringify([
        { date: '-7 000 000', event: 'Premiers hominides (Toumai)' },
        { date: '-2 500 000', event: 'Premiers outils (Homo habilis)' },
        { date: '-400 000', event: 'Maitrise du feu' },
        { date: '-300 000', event: 'Apparition d\'Homo sapiens' },
        { date: '-36 000', event: 'Grotte Chauvet' },
        { date: '-18 000', event: 'Grotte de Lascaux' },
      ]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'Paleolithique', definition: 'Age de la pierre taillee, premiere et plus longue periode de la Prehistoire.' },
        { term: 'Nomade', definition: 'Personne qui se deplace regulierement, sans habitation fixe.' },
        { term: 'Art parietal', definition: 'Art realise sur les parois des grottes (peintures, gravures).' },
        { term: 'Biface', definition: 'Outil en pierre taillee sur les deux faces.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('6e-hist-revolution-neolithique'),
      title: 'La sedentarisation et les debuts de l\'agriculture',
      content: `## Fiche de revision : La revolution neolithique

### Schema pedagogique
NOMADISME (Paleolithique) → SEDENTARISATION (vers -10 000) → PREMIERS VILLAGES → PREMIERES VILLES

### La revolution neolithique : un tournant majeur
- Vers **-10 000 ans**, dans le **Croissant fertile** (Mesopotamie), les hommes commencent a **domestiquer les plantes** (ble, orge) et les **animaux** (moutons, chevres, boeufs).
- Ils deviennent **sedentaires** : ils s'installent dans des **villages permanents**.
- C'est la plus grande revolution de l'histoire humaine.

### Les consequences
1. **Demographiques** : la population augmente grace a une alimentation plus reguliere.
2. **Sociales** : apparition de la **hierarchie sociale** (chefs, artisans, agriculteurs).
3. **Techniques** : invention de la **ceramique**, du **tissage**, de la **pierre polie**.
4. **Religieuses** : premiers temples, culte des morts elabore.
5. **Environnementales** : defrichement, irrigation, transformation des paysages.

### Les megalithes
- **Menhirs** (pierres dressees) et **dolmens** (tables de pierre) comme a **Carnac** en Bretagne.
- Temoignent d'une organisation sociale complexe.`,
      summary: 'Vers -10 000 ans, les hommes du Croissant fertile inventent l\'agriculture et l\'elevage. Ils deviennent sedentaires et fondent des villages. Cette revolution entraine une croissance demographique, une hierarchie sociale, et de nouvelles techniques (ceramique, pierre polie).',
      key_dates: JSON.stringify([
        { date: '-10 000', event: 'Debuts de l\'agriculture dans le Croissant fertile' },
        { date: '-8 000', event: 'Premiers villages (Jericho, Catal Hoyuk)' },
        { date: '-5 000', event: 'Neolithique en Europe occidentale' },
      ]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'Neolithique', definition: 'Age de la pierre polie, periode de sedentarisation et d\'agriculture.' },
        { term: 'Sedentaire', definition: 'Personne qui vit en un lieu fixe de facon permanente.' },
        { term: 'Croissant fertile', definition: 'Region du Moyen-Orient (Irak, Syrie, Liban) ou naissent l\'agriculture et les premieres civilisations.' },
        { term: 'Megalithes', definition: 'Grands monuments de pierre (menhirs, dolmens) du Neolithique.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('6e-hist-premiers-etats'),
      title: 'Mesopotamie et Egypte : les premieres civilisations',
      content: `## Fiche de revision : Premiers Etats, premieres ecritures

### Schema pedagogique
VILLAGES → CITES-ETATS (Mesopotamie, -3500) → ROYAUMES (Egypte, -3100) → EMPIRES

### La Mesopotamie (entre le Tigre et l'Euphrate)
- Premieres **cites-Etats** : Ur, Uruk, Babylone.
- Invention de l'**ecriture cuneiforme** vers **-3300** sur des tablettes d'argile.
- **Code de Hammurabi** (vers -1750) : premier recueil de lois ecrites.
- Les Sumeriens inventent la roue, le calcul sexagesimal (base 60).

### L'Egypte ancienne
- Le **pharaon** est roi, chef religieux et militaire. Il est considere comme un dieu vivant.
- L'**ecriture hieroglyphique** apparait vers **-3200**.
- Construction des **pyramides de Gizeh** (vers -2500) pour les pharaons Kheops, Khephren, Mykerinos.
- Le **Nil** et ses crues annuelles permettent l'agriculture.

### Pourquoi l'ecriture est une revolution
- Elle permet de **conserver la memoire**, fixer les lois, compter les recoltes.
- C'est la **fin de la Prehistoire** et le debut de l'**Histoire**.`,
      summary: 'Les premieres civilisations naissent en Mesopotamie (Sumer, Babylone) et en Egypte vers -3500/-3100. L\'ecriture cuneiforme et les hieroglyphes apparaissent vers -3300/-3200, marquant le debut de l\'Histoire. Le pharaon est un roi-dieu, les pyramides symbolisent sa puissance.',
      key_dates: JSON.stringify([
        { date: '-3500', event: 'Premieres cites-Etats en Mesopotamie (Uruk)' },
        { date: '-3300', event: 'Invention de l\'ecriture cuneiforme' },
        { date: '-3200', event: 'Hieroglyphes en Egypte' },
        { date: '-3100', event: 'Unification de l\'Egypte sous le premier pharaon' },
        { date: '-2500', event: 'Construction des pyramides de Gizeh' },
        { date: '-1750', event: 'Code de Hammurabi a Babylone' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Hammurabi', role: 'Roi de Babylone, auteur du premier code de lois' },
        { name: 'Kheops', role: 'Pharaon batisseur de la grande pyramide de Gizeh' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Cuneiforme', definition: 'Ecriture en forme de coins, gravee sur des tablettes d\'argile.' },
        { term: 'Hieroglyphes', definition: 'Ecriture sacree egyptienne utilisant des dessins symboliques.' },
        { term: 'Pharaon', definition: 'Titre du roi d\'Egypte, considere comme un dieu vivant.' },
        { term: 'Cite-Etat', definition: 'Ville independante qui se gouverne elle-meme avec son territoire.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('6e-hist-cites-grecques'),
      title: 'Athenes et la naissance de la democratie',
      content: `## Fiche de revision : Le monde des cites grecques

### Schema pedagogique
CITE GRECQUE = ville + campagne + port → ATHENES invente la DEMOCRATIE (Ve siecle av. J.-C.)

### Les cites grecques
- La Grece n'est pas un pays unifie mais un ensemble de **cites-Etats** independantes : Athenes, Sparte, Corinthe.
- Chaque cite a ses lois, son armee, sa monnaie, ses dieux protecteurs.
- Les Grecs partagent une culture commune : langue, mythologie, Jeux olympiques.

### La democratie athenienne (Ve siecle av. J.-C.)
- **Pericles** renforce la democratie au Ve siecle.
- Les **citoyens** (hommes nes de pere et mere atheniens, ages de + de 18 ans) votent les lois a l'**Ecclesia** (assemblee).
- La **Boulé** (conseil de 500) prepare les lois.
- Les magistrats (strateges, archontes) executent les decisions.
- **Exclus** : femmes, esclaves, meteques (etrangers).

### La mythologie
- Les dieux vivent sur le mont **Olympe** : Zeus, Athena, Poseidon, Apollon...
- Recits d'Homere : l'**Iliade** (guerre de Troie) et l'**Odyssee** (voyages d'Ulysse).`,
      summary: 'La Grece antique est composee de cites-Etats independantes. Athenes invente la democratie au Ve siecle av. J.-C. sous Pericles : les citoyens votent les lois a l\'Ecclesia. Mais femmes, esclaves et meteques sont exclus. Les Grecs partagent mythologie, langue et Jeux olympiques.',
      key_dates: JSON.stringify([
        { date: '-776', event: 'Premiers Jeux olympiques' },
        { date: '-508', event: 'Reformes de Clisthene : naissance de la democratie' },
        { date: '-490', event: 'Bataille de Marathon (victoire contre les Perses)' },
        { date: '-480', event: 'Bataille de Salamine' },
        { date: '-443 a -429', event: 'Siecle de Pericles' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Pericles', role: 'Stratege athenien, renforce la democratie' },
        { name: 'Homere', role: 'Poete, auteur de l\'Iliade et l\'Odyssee' },
        { name: 'Clisthene', role: 'Reformateur, fondateur de la democratie athenienne' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Democratie', definition: 'Gouvernement par le peuple (demos = peuple, kratos = pouvoir).' },
        { term: 'Ecclesia', definition: 'Assemblee des citoyens atheniens qui vote les lois.' },
        { term: 'Citoyen', definition: 'Homme ne de pere et mere atheniens, qui participe a la vie politique.' },
        { term: 'Meteque', definition: 'Etranger residant a Athenes, sans droits politiques.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('6e-hist-rome-mythe'),
      title: 'La fondation de Rome et la Republique',
      content: `## Fiche de revision : Rome, du mythe a l'histoire

### Schema pedagogique
MYTHE (Romulus, -753) → ROYAUTE → REPUBLIQUE (-509) → CONQUETES

### Le mythe de la fondation
- Selon la legende, **Romulus et Remus**, jumeaux abandonnes et eleves par une louve, fondent Rome en **-753 av. J.-C.**
- Romulus tue Remus et devient le premier roi de Rome.
- L'archeologie confirme l'existence de villages sur les collines de Rome des le VIIIe siecle av. J.-C.

### La Republique romaine (-509 a -27)
- En -509, les Romains chassent le dernier roi etrusque et fondent la **Republique**.
- Le pouvoir est partage entre :
  - Le **Senat** (300 anciens magistrats patriciens) : conseille et oriente la politique.
  - Les **Consuls** (2, elus pour 1 an) : dirigent l'armee et le gouvernement.
  - Les **Comices** (assemblees du peuple) : votent les lois.
- Conflit **patriciens** (nobles) vs **plebeiens** (peuple) : les plebeiens obtiennent progressivement des droits.

### L'expansion romaine
- Rome conquiert l'Italie, puis la Mediterranee (guerres puniques contre Carthage).
- **Hannibal** traverse les Alpes avec ses elephants mais est finalement vaincu.`,
      summary: 'Selon le mythe, Rome est fondee par Romulus en -753. En -509, la Republique remplace la royaute : le Senat, les Consuls et les Comices se partagent le pouvoir. Rome conquiert toute la Mediterranee apres les guerres puniques contre Carthage.',
      key_dates: JSON.stringify([
        { date: '-753', event: 'Fondation legendaire de Rome par Romulus' },
        { date: '-509', event: 'Debut de la Republique romaine' },
        { date: '-264 a -146', event: 'Guerres puniques contre Carthage' },
        { date: '-44', event: 'Assassinat de Jules Cesar' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Romulus', role: 'Fondateur legendaire de Rome' },
        { name: 'Hannibal', role: 'General carthaginois, ennemi de Rome' },
        { name: 'Jules Cesar', role: 'General et dictateur romain' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Republique', definition: 'Regime politique ou le pouvoir n\'appartient pas a un seul homme.' },
        { term: 'Senat', definition: 'Assemblee de 300 anciens magistrats qui conseille les consuls.' },
        { term: 'Consul', definition: 'Magistrat supreme de Rome, elu pour un an (il y en a 2).' },
        { term: 'Patricien', definition: 'Membre de l\'aristocratie romaine.' },
        { term: 'Plebeien', definition: 'Citoyen romain du peuple, non noble.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('6e-hist-empire-romain'),
      title: 'La paix romaine et la romanisation',
      content: `## Fiche de revision : L'Empire romain

### Schema pedagogique
REPUBLIQUE → EMPIRE (Auguste, -27) → PAX ROMANA (Ier-IIe siecle) → DECLIN (Ve siecle)

### L'Empire romain
- En **-27**, **Auguste** (Octave) devient le premier empereur. Il conserve les institutions republicaines en apparence.
- L'Empire s'etend de la Bretagne (Grande-Bretagne) a la Mesopotamie, de la Germanie a l'Afrique du Nord.
- La **Pax Romana** (paix romaine) dure environ 200 ans (Ier-IIe siecle) : stabilite, prosperite, echanges commerciaux.

### La romanisation
- Les peuples conquis adoptent la culture romaine : **langue latine**, droit romain, religion, architecture.
- Construction de **villes** sur le modele romain : forum, thermes, amphitheatres, aqueducs, voies romaines.
- Le **droit de cite** (citoyennete romaine) est progressivement etendu. En **212**, l'**edit de Caracalla** l'accorde a tous les hommes libres de l'Empire.

### Le christianisme dans l'Empire
- Jesus de Nazareth preche en Palestine au Ier siecle. Ses disciples diffusent le christianisme.
- D'abord persecutes, les chretiens sont toleres en **313** (edit de Milan) puis le christianisme devient religion officielle en **380** (edit de Thessalonique).`,
      summary: 'Auguste fonde l\'Empire romain en -27. La Pax Romana (200 ans de paix) permet la romanisation des peuples conquis : langue latine, villes, droit romain. L\'edit de Caracalla (212) accorde la citoyennete a tous. Le christianisme devient religion officielle en 380.',
      key_dates: JSON.stringify([
        { date: '-27', event: 'Auguste premier empereur romain' },
        { date: '79', event: 'Eruption du Vesuve, destruction de Pompei' },
        { date: '212', event: 'Edit de Caracalla : citoyennete pour tous' },
        { date: '313', event: 'Edit de Milan : tolerance du christianisme' },
        { date: '380', event: 'Christianisme religion officielle (Theodose)' },
        { date: '476', event: 'Chute de l\'Empire romain d\'Occident' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Auguste', role: 'Premier empereur romain (-27 a 14)' },
        { name: 'Jesus de Nazareth', role: 'Fondateur du christianisme' },
        { name: 'Constantin', role: 'Empereur, premier a tolerer le christianisme' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Empire', definition: 'Regime politique dirige par un empereur.' },
        { term: 'Pax Romana', definition: 'Periode de paix et de prosperite dans l\'Empire romain (Ier-IIe siecle).' },
        { term: 'Romanisation', definition: 'Adoption de la culture romaine par les peuples conquis.' },
        { term: 'Edit', definition: 'Loi ou decision officielle proclamee par l\'empereur.' },
      ]),
      sort_order: 1,
    },
    // ── 6EME GEOGRAPHIE ──
    {
      chapter_id: getChapterId('6e-geo-habiter-metropole'),
      title: 'Habiter une metropole : les grandes villes du monde',
      content: `## Fiche de revision : Habiter une metropole

### Schema pedagogique
METROPOLE = grande ville + banlieues + aire urbaine → FONCTIONS multiples (economique, politique, culturelle) → DEFIS (transports, logement, pollution)

### Points cles
- Une **metropole** est une grande ville qui concentre population, activites economiques et fonctions de commandement.
- On distingue les **metropoles des pays developpes** (New York, Paris, Tokyo) et celles des **pays en developpement** (Lagos, Mumbai, Mexico).
- L\'**urbanisation** est un phenomene mondial : plus de 55 % de la population mondiale vit en ville.

### Les metropoles des pays developpes
- Bien equipees en **transports en commun** (metro, tramway, bus).
- Des quartiers d\'affaires (CBD) concentrent les sièges sociaux et la finance.
- Problemes : **gentrification**, cout du logement, etalement urbain, pollution.
- Politiques d\'amenagement pour limiter l\'etalement : ecoquartiers, transports doux.

### Les metropoles des pays en developpement
- Croissance urbaine tres rapide liee a l\'**exode rural**.
- Presence de **bidonvilles** (favelas, slums) ou les habitants vivent sans acces a l\'eau potable ni aux services de base.
- Inegalites socio-spatiales fortes entre quartiers riches et quartiers pauvres.
- Les villes cherchent a ameliorer les infrastructures mais la croissance est plus rapide que les amenagements.

### Habiter une metropole au quotidien
- Se deplacer : embouteillages dans les pays en developpement, transports en commun dans les pays developpes.
- Se loger : crise du logement dans les grandes villes, habitat informel dans les pays du Sud.
- Travailler : les metropoles concentrent les emplois qualifies et les services.`,
      summary: 'Une metropole est une grande ville concentrant population et activites. Dans les pays developpes, elles sont bien equipees mais connaissent gentrification et etalement urbain. Dans les pays en developpement, la croissance rapide cree des bidonvilles et des inegalites fortes.',
      key_dates: JSON.stringify([]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'Metropole', definition: 'Grande ville qui concentre population, activites et fonctions de commandement.' },
        { term: 'Urbanisation', definition: 'Augmentation de la population vivant en ville.' },
        { term: 'Bidonville', definition: 'Quartier d\'habitat precaire construit avec des materiaux de recuperation.' },
        { term: 'Etalement urbain', definition: 'Extension de la ville vers les peripheries, au detriment des espaces ruraux.' },
        { term: 'Gentrification', definition: 'Transformation d\'un quartier populaire par l\'arrivee de populations plus aisees.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('6e-geo-faible-densite'),
      title: 'Habiter un espace de faible densite a vocation agricole ou naturelle',
      content: `## Fiche de revision : Habiter un espace de faible densite

### Schema pedagogique
FAIBLE DENSITE = peu d\'habitants/km² → ESPACES AGRICOLES (campagnes) + ESPACES NATURELS (forets, deserts, montagnes) → CONTRAINTES et ATOUTS

### Points cles
- Un espace de **faible densite** compte moins de 30 habitants au km².
- Ces espaces representent la majorite de la surface terrestre mais une minorite de la population.
- On y trouve des activites **agricoles**, **pastorales**, **forestieres** et **touristiques**.

### Les espaces agricoles
- Dans les pays developpes : **agriculture mecanisee**, grandes exploitations (Beauce en France, Grandes Plaines aux Etats-Unis).
- Dans les pays en developpement : **agriculture vivriere** (pour nourrir la famille) avec peu de mecanisation.
- **Exode rural** : depart des jeunes vers les villes, vieillissement de la population rurale.
- Nouvelles dynamiques : **neoruraux** (citadins qui s\'installent a la campagne), agritourisme.

### Les espaces naturels
- **Deserts** (Sahara), **forets denses** (Amazonie), **montagnes**, **regions polaires**.
- Contraintes : climat extreme, isolement, difficulte d\'acces.
- Ces espaces sont des **reserves de biodiversite** qu\'il faut proteger.
- Menaces : deforestation, rechauffement climatique, exploitation miniere.

### Habiter ces espaces au quotidien
- Isolement compense par le numerique et les routes.
- Services publics eloignes (hopitaux, ecoles) : notion de **desert medical**.
- Importance des **mobilites** pour acceder aux services et aux emplois.`,
      summary: 'Les espaces de faible densite (moins de 30 hab/km²) comprennent campagnes agricoles et espaces naturels. Ils connaissent l\'exode rural mais aussi l\'arrivee de neoruraux. Les espaces naturels (deserts, forets) sont des reserves de biodiversite menacees. L\'isolement est un defi majeur.',
      key_dates: JSON.stringify([]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'Densite de population', definition: 'Nombre d\'habitants par km².' },
        { term: 'Exode rural', definition: 'Depart massif des habitants des campagnes vers les villes.' },
        { term: 'Agriculture vivriere', definition: 'Agriculture destinee a nourrir la famille du paysan, pas a la vente.' },
        { term: 'Neoruraux', definition: 'Citadins qui quittent la ville pour s\'installer a la campagne.' },
        { term: 'Desert medical', definition: 'Zone ou l\'acces aux soins est tres difficile par manque de medecins.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('6e-geo-habiter-littoraux'),
      title: 'Habiter les littoraux : entre tourisme et industrie',
      content: `## Fiche de revision : Habiter les littoraux

### Schema pedagogique
LITTORAL = zone de contact terre/mer → LITTORAL TOURISTIQUE (plages, stations) + LITTORAL INDUSTRIALO-PORTUAIRE (ports, ZIP) → AMENAGEMENTS et RISQUES

### Points cles
- Le **littoral** est la zone de contact entre la terre et la mer.
- Plus de 60 % de la population mondiale vit a moins de 100 km des cotes.
- On parle de **littoralisation** : concentration croissante des hommes et des activites sur les cotes.

### Les littoraux touristiques
- **Stations balneaires** : tourisme de plage et de loisirs (Cote d\'Azur, Cancun, Bali).
- **Amenagements** : hotels, marinas, promenades, ports de plaisance.
- Le tourisme cree des emplois mais aussi des problemes : **betonnisation** du littoral, pollution, destruction des ecosystemes.
- **Tourisme durable** : limiter les impacts environnementaux.

### Les littoraux industrialo-portuaires
- Les grands ports mondiaux (Shanghai, Rotterdam, Singapour) sont des plaques tournantes du commerce mondial.
- **ZIP** (Zones Industrialo-Portuaires) : zones ou se concentrent usines, raffineries et entrepots pres du port.
- Le commerce maritime transporte **90 % des marchandises mondiales**.

### Les risques sur les littoraux
- **Risques naturels** : tempetes, tsunamis, erosion cotiere, montee des eaux liee au rechauffement climatique.
- **Risques anthropiques** : pollution, marees noires, urbanisation excessive.
- Necessite de **proteger** les littoraux : loi Littoral en France, espaces naturels proteges.`,
      summary: 'Les littoraux concentrent plus de 60 % de la population mondiale (littoralisation). Ils sont soit touristiques (stations balneaires) soit industrialo-portuaires (ZIP, grands ports). Ils sont menaces par l\'erosion, la montee des eaux et la pollution. La protection des littoraux est un enjeu majeur.',
      key_dates: JSON.stringify([]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'Littoral', definition: 'Zone de contact entre la terre et la mer.' },
        { term: 'Littoralisation', definition: 'Concentration croissante des populations et activites sur les cotes.' },
        { term: 'ZIP', definition: 'Zone Industrialo-Portuaire : espace amenage associant un port et des industries.' },
        { term: 'Station balneaire', definition: 'Ville cotiere amenagee pour le tourisme de plage.' },
        { term: 'Erosion cotiere', definition: 'Usure progressive du trait de cote par la mer et le vent.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('6e-geo-monde-habite'),
      title: 'Le monde habite : repartition de la population mondiale',
      content: `## Fiche de revision : Le monde habite

### Schema pedagogique
7,8 MILLIARDS D\'HUMAINS → FOYERS DE PEUPLEMENT (Asie, Europe) + DESERTS HUMAINS → FACTEURS explicatifs (climat, histoire, economie)

### Points cles
- La Terre compte environ **7,8 milliards** d\'habitants (2023).
- La population est **tres inegalement repartie** : certaines zones sont tres peuplees (foyers de peuplement), d\'autres quasi vides (deserts humains).
- La **densite de population** permet de mesurer cette repartition : nombre d\'habitants par km².

### Les grands foyers de peuplement
- **Asie de l\'Est** : Chine, Japon, Coree (environ 1,5 milliard d\'habitants).
- **Asie du Sud** : Inde, Bangladesh, Pakistan (environ 2 milliards d\'habitants).
- **Europe** : 750 millions d\'habitants, densites fortes surtout en Europe occidentale.
- **Foyers secondaires** : Asie du Sud-Est, Golfe de Guinee, Nord-Est des Etats-Unis.

### Les deserts humains
- **Deserts chauds** : Sahara, Arabie → chaleur extreme, manque d\'eau.
- **Deserts froids** : Siberie, Groenland, Antarctique → froid extreme.
- **Forets denses** : Amazonie, bassin du Congo → vegetation impenetrable, climat equatorial.
- **Hautes montagnes** : Himalaya, Andes → altitude, pentes, froid.

### Les facteurs de repartition
1. **Facteurs naturels** : climat tempere favorable, acces a l\'eau, plaines fertiles.
2. **Facteurs historiques** : anciennete du peuplement (foyers de civilisation en Asie).
3. **Facteurs economiques** : les villes et les littoraux attirent par les emplois et les services.`,
      summary: 'La population mondiale (7,8 milliards) est tres inegalement repartie. Les grands foyers de peuplement sont l\'Asie de l\'Est, l\'Asie du Sud et l\'Europe. Les deserts humains (Sahara, Siberie, Amazonie) s\'expliquent par des contraintes naturelles. Climat, histoire et economie determinent la repartition.',
      key_dates: JSON.stringify([]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'Foyer de peuplement', definition: 'Region du monde ou la densite de population est tres elevee.' },
        { term: 'Desert humain', definition: 'Region tres faiblement peuplee (moins de 5 hab/km²).' },
        { term: 'Densite de population', definition: 'Nombre moyen d\'habitants par km² dans un espace donne.' },
        { term: 'Croissance demographique', definition: 'Augmentation de la population sur une periode donnee.' },
      ]),
      sort_order: 1,
    },
    // ── 5EME HISTOIRE ──
    {
      chapter_id: getChapterId('5e-hist-byzance-carolingiens'),
      title: 'Byzance et l\'Europe carolingienne : deux heritiers de Rome',
      content: `## Fiche de revision : Byzance et l\'Europe carolingienne

### Schema pedagogique
EMPIRE ROMAIN (476, chute) → EMPIRE BYZANTIN (Orient, Constantinople) + EMPIRE CAROLINGIEN (Occident, Charlemagne) → DEUX CHRETIENTES (orthodoxe / catholique)

### Points cles
- Apres la chute de l\'Empire romain d\'Occident en **476**, deux empires heritent de Rome :
  - L\'**Empire byzantin** a l\'Est, avec sa capitale **Constantinople**.
  - L\'**Empire carolingien** a l\'Ouest, fonde par **Charlemagne**.
- Ces deux empires sont chretiens mais des differences religieuses les separent.

### L\'Empire byzantin (IVe-XVe siecle)
- Capitale : **Constantinople** (actuelle Istanbul), carrefour entre Europe et Asie.
- L\'empereur (basileus) est chef politique ET religieux : c\'est le **cesaropapisme**.
- Religion : **christianisme orthodoxe**, avec le patriarche de Constantinople.
- La basilique **Sainte-Sophie** (537) est le chef-d\'oeuvre de l\'architecture byzantine.
- Art des **mosaiques** et des **icones** religieuses.
- Le **schisme de 1054** separe officiellement catholiques (Rome) et orthodoxes (Constantinople).
- L\'Empire byzantin tombe en **1453** face aux Ottomans.

### L\'Empire carolingien (VIIIe-IXe siecle)
- **Charlemagne** est sacre empereur en **800** par le pape a Rome.
- Son empire couvre la France, l\'Allemagne, l\'Italie du Nord et une partie de l\'Espagne.
- Il organise l\'Empire en **comtes** diriges par des **comtes**, surveilles par des **missi dominici** (envoyes de l\'empereur).
- **Renaissance carolingienne** : ecoles dans les monasteres, copie de manuscrits, minuscule caroline (nouvelle ecriture).
- Apres sa mort (814), l\'Empire est divise entre ses petits-fils au **traite de Verdun** (843).`,
      summary: 'Apres la chute de Rome (476), l\'Empire byzantin (Constantinople, christianisme orthodoxe) et l\'Empire carolingien (Charlemagne, christianisme catholique) heritent de la civilisation romaine. Le schisme de 1054 separe les deux Eglises. L\'Empire carolingien est divise au traite de Verdun (843).',
      key_dates: JSON.stringify([
        { date: '476', event: 'Chute de l\'Empire romain d\'Occident' },
        { date: '527-565', event: 'Regne de Justinien, apogee de Byzance' },
        { date: '800', event: 'Sacre de Charlemagne empereur par le pape' },
        { date: '814', event: 'Mort de Charlemagne' },
        { date: '843', event: 'Traite de Verdun : partage de l\'Empire carolingien' },
        { date: '1054', event: 'Schisme entre catholiques et orthodoxes' },
        { date: '1453', event: 'Chute de Constantinople face aux Ottomans' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Charlemagne', role: 'Roi des Francs et empereur d\'Occident, sacre en 800' },
        { name: 'Justinien', role: 'Empereur byzantin, reconquiert une partie de l\'Empire romain' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Cesaropapisme', definition: 'Systeme ou l\'empereur est a la fois chef politique et chef religieux.' },
        { term: 'Schisme', definition: 'Separation entre deux Eglises chretiennes (1054 : catholiques et orthodoxes).' },
        { term: 'Missi dominici', definition: 'Envoyes de l\'empereur charges de surveiller les comtes.' },
        { term: 'Renaissance carolingienne', definition: 'Renouveau culturel sous Charlemagne : ecoles, manuscrits, nouvelle ecriture.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('5e-hist-naissance-islam'),
      title: 'De la naissance de l\'islam a la civilisation arabo-musulmane',
      content: `## Fiche de revision : La naissance de l\'islam

### Schema pedagogique
ARABIE (VIIe siecle) → MAHOMET recoit la revelation → EXPANSION ARABE → CIVILISATION ARABO-MUSULMANE (sciences, arts, commerce)

### Points cles
- L\'**islam** nait au VIIe siecle dans la **peninsule arabique**.
- **Mahomet** (Muhammad) est considere par les musulmans comme le dernier prophete.
- Le **Coran** est le livre sacre de l\'islam, parole de Dieu (Allah) revelee a Mahomet.

### La vie de Mahomet
- Ne vers **570** a La Mecque, ville commercante d\'Arabie.
- Vers **610**, il recoit la revelation divine transmise par l\'ange Gabriel.
- En **622**, il quitte La Mecque pour Medine : c\'est l\'**Hegire**, qui marque le debut du calendrier musulman.
- Il revient a La Mecque en **630** et unifie l\'Arabie sous l\'islam.
- Il meurt en **632** a Medine.

### Les cinq piliers de l\'islam
1. La **chahada** : profession de foi (il n\'y a de dieu qu\'Allah et Mahomet est son prophete).
2. La **priere** (salat) : cinq fois par jour en direction de La Mecque.
3. L\'**aumone** (zakat) : don aux pauvres.
4. Le **jeune** du mois de Ramadan.
5. Le **pelerinage** (hajj) a La Mecque, au moins une fois dans sa vie.

### L\'expansion et la civilisation arabo-musulmane
- Apres Mahomet, les **califes** dirigent la communaute musulmane (l\'Oumma).
- L\'Empire arabe s\'etend de l\'Espagne (Al-Andalus) a l\'Inde en un siecle.
- **Civilisation brillante** : mathematiques (algebre, chiffres arabes), medecine (Avicenne), astronomie, architecture (mosquees, arabesques).
- **Bagdad**, **Cordoue**, **Le Caire** sont de grands centres culturels.`,
      summary: 'L\'islam nait au VIIe siecle en Arabie avec Mahomet qui recoit la revelation divine. Le Coran est le livre sacre. Les cinq piliers structurent la vie religieuse. Apres Mahomet, les califes batissent un vaste empire de l\'Espagne a l\'Inde et une civilisation brillante (sciences, arts, architecture).',
      key_dates: JSON.stringify([
        { date: '570', event: 'Naissance de Mahomet a La Mecque' },
        { date: '610', event: 'Premiere revelation divine' },
        { date: '622', event: 'Hegire : depart de Mahomet pour Medine (debut du calendrier musulman)' },
        { date: '630', event: 'Mahomet reprend La Mecque' },
        { date: '632', event: 'Mort de Mahomet' },
        { date: '661-750', event: 'Dynastie des Omeyyades, expansion de l\'Empire' },
        { date: '750-1258', event: 'Dynastie des Abbassides, age d\'or a Bagdad' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Mahomet (Muhammad)', role: 'Prophete de l\'islam, fondateur de la religion musulmane' },
        { name: 'Avicenne (Ibn Sina)', role: 'Medecin et philosophe arabe du XIe siecle' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Islam', definition: 'Religion monotheiste fondee par Mahomet au VIIe siecle, basee sur le Coran.' },
        { term: 'Coran', definition: 'Livre sacre des musulmans, contenant la parole d\'Allah revelee a Mahomet.' },
        { term: 'Hegire', definition: 'Emigration de Mahomet de La Mecque a Medine en 622, debut du calendrier musulman.' },
        { term: 'Calife', definition: 'Successeur de Mahomet, chef politique et religieux de la communaute musulmane.' },
        { term: 'Mosquee', definition: 'Lieu de priere des musulmans.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('5e-hist-ordre-seigneurial'),
      title: 'L\'ordre seigneurial : seigneurs, paysans et Eglise',
      content: `## Fiche de revision : L\'ordre seigneurial (XIe-XVe siecle)

### Schema pedagogique
SEIGNEURIE = RESERVE (terres du seigneur) + TENURES (terres des paysans) → SEIGNEUR protege / PAYSANS travaillent → EGLISE encadre la societe

### Points cles
- Au Moyen Age, la societe est organisee en **trois ordres** :
  - Ceux qui prient : le **clerge** (Eglise).
  - Ceux qui combattent : les **seigneurs** (nobles, chevaliers).
  - Ceux qui travaillent : les **paysans** (90 % de la population).
- La **seigneurie** est l\'unite de base de l\'organisation du territoire.

### La seigneurie
- Le **seigneur** possede un **chateau fort** et des terres.
- La seigneurie se divise en :
  - **Reserve** : terres cultivees directement pour le seigneur.
  - **Tenures** : terres louees aux paysans en echange de **redevances** (cens, champart) et de **corvees** (travail gratuit).
- Le seigneur rend la **justice**, assure la **protection** et preleve des **taxes** (banalites : four, moulin, pressoir).

### La vie des paysans
- Les paysans sont **vilains** (libres) ou **serfs** (attaches a la terre du seigneur).
- Vie difficile : travail physique, famines, epidemies.
- Progres techniques : **charrue a soc de fer**, **assolement triennal**, **moulin a eau et a vent**.
- Les paysans vivent dans des villages autour de l\'eglise.

### Le role de l\'Eglise
- L\'Eglise **encadre la vie quotidienne** : bapteme, mariage, enterrement, calendrier des fetes religieuses.
- Les **moines** vivent dans des **abbayes** (Cluny, Citeaux) : priere, travail, copie de manuscrits.
- L\'Eglise impose la **Paix de Dieu** et la **Treve de Dieu** pour limiter les violences seigneuriales.
- Construction de grandes **eglises romanes** puis **cathedrales gothiques**.`,
      summary: 'La societe medievale repose sur trois ordres : clerge, noblesse, paysans. La seigneurie est l\'unite territoriale : le seigneur possede le chateau et les terres, les paysans cultivent en echange de redevances et corvees. L\'Eglise encadre la vie quotidienne et impose la Paix de Dieu.',
      key_dates: JSON.stringify([
        { date: '910', event: 'Fondation de l\'abbaye de Cluny' },
        { date: 'XIe siecle', event: 'Mise en place de la Paix de Dieu et de la Treve de Dieu' },
        { date: 'XIe-XIIIe siecle', event: 'Grands defrichements et croissance agricole' },
      ]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'Seigneurie', definition: 'Territoire sur lequel un seigneur exerce son autorite.' },
        { term: 'Tenure', definition: 'Terre louee par le seigneur a un paysan en echange de redevances.' },
        { term: 'Corvee', definition: 'Travail gratuit que le paysan doit au seigneur.' },
        { term: 'Serf', definition: 'Paysan non libre, attache a la terre du seigneur.' },
        { term: 'Banalites', definition: 'Taxes que le paysan paie pour utiliser le four, le moulin ou le pressoir du seigneur.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('5e-hist-societe-urbaine'),
      title: 'L\'essor des villes et la societe urbaine medievale',
      content: `## Fiche de revision : L\'emergence d\'une nouvelle societe urbaine

### Schema pedagogique
CROISSANCE AGRICOLE (XIe-XIIIe) → ESSOR DU COMMERCE → RENAISSANCE DES VILLES → NOUVELLE SOCIETE (bourgeois, marchands, artisans)

### Points cles
- A partir du **XIe siecle**, les villes connaissent un essor considerable grace au developpement du **commerce** et de l\'**artisanat**.
- Une nouvelle classe sociale emerge : la **bourgeoisie** (habitants du bourg), composee de marchands et d\'artisans.
- Les villes obtiennent des **chartes de franchise** qui leur accordent des libertes face aux seigneurs.

### Le commerce medieval
- Developpement des **foires** : lieux de rencontre des marchands europeens (foires de Champagne).
- Le **commerce maritime** relie l\'Europe du Nord (Hanse, laine, bois) et la Mediterranee (Venise, Genes, epices, soie).
- Apparition de la **monnaie**, des **banques** et des premieres **lettres de change**.

### La vie dans les villes
- Les villes sont entourees de **remparts** pour se proteger.
- Les rues sont etroites, sales, sans egouts : risques d\'**epidemies** (Peste noire, 1347-1352).
- Les artisans sont organises en **corporations** (guildes) qui reglementent les metiers.
- Construction de **cathedrales gothiques** (Notre-Dame de Paris, Chartres, Reims) : symboles de la richesse des villes.

### La culture et l\'Eglise en ville
- Creation des premieres **universites** : Paris (theologie), Bologne (droit), Oxford.
- L\'Eglise cree les ordres **mendiants** : **Franciscains** (saint Francois d\'Assise) et **Dominicains** pour precher en ville.
- Art gothique : voutes d\'ogives, arcs-boutants, vitraux colores.`,
      summary: 'A partir du XIe siecle, les villes renaissent grace au commerce et a l\'artisanat. La bourgeoisie emerge. Les foires de Champagne et le commerce maritime enrichissent les villes. Les corporations reglementent les metiers. Les universites et les cathedrales gothiques symbolisent cet essor urbain.',
      key_dates: JSON.stringify([
        { date: 'XIe-XIIIe siecle', event: 'Essor des villes et du commerce en Europe' },
        { date: '1163', event: 'Debut de la construction de Notre-Dame de Paris' },
        { date: '1215', event: 'Fondation de l\'universite de Paris (Sorbonne)' },
        { date: '1347-1352', event: 'Peste noire : disparition d\'un tiers de la population europeenne' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Saint Francois d\'Assise', role: 'Fondateur de l\'ordre des Franciscains, preche la pauvrete' },
        { name: 'Jacques Coeur', role: 'Grand marchand francais du XVe siecle, symbole de la reussite bourgeoise' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Bourgeoisie', definition: 'Classe sociale composee des marchands et artisans riches des villes.' },
        { term: 'Charte de franchise', definition: 'Document accordant des libertes et des droits a une ville.' },
        { term: 'Corporation', definition: 'Association regroupant les artisans d\'un meme metier pour en reglementer la pratique.' },
        { term: 'Foire', definition: 'Grand marche periodique reunissant des marchands venus de toute l\'Europe.' },
        { term: 'Cathedrale gothique', definition: 'Grande eglise du Moyen Age caractérisee par ses voutes d\'ogives et ses vitraux.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('5e-hist-humanisme-reformes'),
      title: 'Humanisme, Reformes et conflits religieux',
      content: `## Fiche de revision : Humanisme, Reformes et conflits religieux

### Schema pedagogique
RENAISSANCE (XVe-XVIe) → HUMANISME (l\'homme au centre) → REFORMES PROTESTANTES (Luther, Calvin) → CONTRE-REFORME catholique → GUERRES DE RELIGION

### Points cles
- Aux **XVe et XVIe siecles**, un mouvement intellectuel et artistique transforme l\'Europe : la **Renaissance** et l\'**humanisme**.
- L\'humanisme place l\'**homme au centre** de la reflexion (et non plus Dieu seul).
- Les **Reformes protestantes** divisent la chretiente et provoquent des guerres de religion.

### L\'humanisme
- Les humanistes redécouvrent les textes de l\'**Antiquite** grecque et romaine.
- Ils valorisent l\'**education**, la **raison**, l\'**esprit critique**.
- L\'**imprimerie** de **Gutenberg** (vers 1450) permet de diffuser les livres et les idees plus largement.
- Grands humanistes : **Erasme** (Pays-Bas), **Rabelais** (France), **Thomas More** (Angleterre), **Montaigne** (France).

### La Renaissance artistique
- Nait en **Italie** (Florence, Rome, Venise) puis se diffuse en Europe.
- **Leonard de Vinci** : La Joconde, homme de Vitruve, inventeur et scientifique.
- **Michel-Ange** : plafond de la Chapelle Sixtine, sculpture de David.
- **Raphael** : L\'Ecole d\'Athenes.
- Innovations : **perspective**, etude de l\'anatomie, portrait, paysage.

### Les Reformes protestantes
- **Martin Luther** (1517) : il denonce les **indulgences** (pardon des peches contre argent) dans ses **95 theses**.
- Il fonde le **lutheranisme** : la foi seule sauve, la Bible est la seule autorite, pas de pape.
- **Jean Calvin** a Geneve fonde le **calvinisme** : predestination, austerite.
- **Henri VIII** en Angleterre cree l\'**anglicanisme** (pour divorcer).

### La Contre-Reforme et les guerres de religion
- L\'Eglise catholique reagit au **concile de Trente** (1545-1563) : elle confirme ses dogmes et corrige ses abus.
- Les **Jesuites** (Compagnie de Jesus, Ignace de Loyola) sont fondes pour defendre le catholicisme.
- En France, les **guerres de religion** (1562-1598) opposent catholiques et protestants (huguenots).
- Le **massacre de la Saint-Barthelemy** (24 aout 1572) : des milliers de protestants sont tues a Paris.
- L\'**edit de Nantes** (1598) d\'**Henri IV** accorde la liberte de culte aux protestants et met fin aux guerres.`,
      summary: 'L\'humanisme (XVe-XVIe siecle) place l\'homme au centre. La Renaissance artistique nait en Italie (Vinci, Michel-Ange). Luther (1517) et Calvin fondent le protestantisme. Les guerres de religion dechirent la France jusqu\'a l\'edit de Nantes (1598) d\'Henri IV qui accorde la liberte de culte.',
      key_dates: JSON.stringify([
        { date: 'vers 1450', event: 'Gutenberg invente l\'imprimerie' },
        { date: '1517', event: 'Luther affiche ses 95 theses a Wittenberg' },
        { date: '1545-1563', event: 'Concile de Trente (Contre-Reforme catholique)' },
        { date: '1562-1598', event: 'Guerres de religion en France' },
        { date: '24 aout 1572', event: 'Massacre de la Saint-Barthelemy' },
        { date: '1598', event: 'Edit de Nantes : Henri IV accorde la liberte de culte' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Martin Luther', role: 'Moine allemand, fondateur du protestantisme lutherien' },
        { name: 'Jean Calvin', role: 'Reformateur francais installe a Geneve, fondateur du calvinisme' },
        { name: 'Leonard de Vinci', role: 'Artiste et scientifique italien, symbole de la Renaissance' },
        { name: 'Erasme', role: 'Humaniste neerlandais, auteur de l\'Eloge de la folie' },
        { name: 'Henri IV', role: 'Roi de France, signe l\'edit de Nantes pour la paix religieuse' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Humanisme', definition: 'Mouvement intellectuel qui place l\'homme et la raison au centre de la reflexion.' },
        { term: 'Renaissance', definition: 'Mouvement artistique et culturel ne en Italie au XVe siecle.' },
        { term: 'Reforme', definition: 'Mouvement religieux qui critique l\'Eglise catholique et fonde le protestantisme.' },
        { term: 'Indulgences', definition: 'Pardon des peches accorde par l\'Eglise en echange d\'argent (pratique denoncee par Luther).' },
        { term: 'Edit', definition: 'Loi ou decision royale (l\'edit de Nantes accorde la liberte de culte).' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('5e-hist-roi-absolu'),
      title: 'Louis XIV, le roi absolu et Versailles',
      content: `## Fiche de revision : Du prince de la Renaissance au roi absolu

### Schema pedagogique
FRANCOIS Ier (Renaissance) → HENRI IV (edit de Nantes) → LOUIS XIII + RICHELIEU → LOUIS XIV = ROI ABSOLU (Versailles, revocation de l\'edit de Nantes)

### Points cles
- Du XVIe au XVIIe siecle, les rois de France renforcent progressivement leur pouvoir pour aboutir a la **monarchie absolue** sous **Louis XIV**.
- Le roi concentre **tous les pouvoirs** : legislatif, executif, judiciaire. Il tient son pouvoir de **Dieu** (monarchie de droit divin).

### Francois Ier (1515-1547) : le prince de la Renaissance
- Roi chevalier, il remporte la bataille de **Marignan** (1515).
- Protecteur des arts et des lettres : il invite **Leonard de Vinci** en France.
- Construction des chateaux de la Loire : **Chambord**, **Fontainebleau**.
- **Ordonnance de Villers-Cotterets** (1539) : impose le francais dans les actes officiels.

### Louis XIV (1643-1715) : l\'apogee de la monarchie absolue
- Roi a 5 ans, il prend le pouvoir personnel en **1661** a la mort de Mazarin.
- Devise : **\"L\'Etat, c\'est moi\"**. Il gouverne sans Premier ministre.
- **Versailles** : le chateau est transforme en residence royale et siege du gouvernement. La noblesse y est controlee par l\'etiquette.
- **Colbert**, controleur des finances, developpe le **mercantilisme** : manufactures royales, commerce, marine.

### La politique religieuse de Louis XIV
- En **1685**, il **revoque l\'edit de Nantes** (edit de Fontainebleau) : le protestantisme est interdit.
- Des milliers de protestants (huguenots) fuient la France vers la Hollande, l\'Angleterre, la Prusse.

### Les guerres de Louis XIV
- De nombreuses guerres pour agrandir le royaume : guerre de Hollande, guerre de la Ligue d\'Augsbourg, guerre de Succession d\'Espagne.
- A la fin du regne, la France est epuisee : famines, dettes, misere du peuple.`,
      summary: 'Du XVIe au XVIIe siecle, les rois de France renforcent leur pouvoir. Louis XIV (1643-1715) incarne la monarchie absolue de droit divin. Il gouverne depuis Versailles, controle la noblesse par l\'etiquette et revoque l\'edit de Nantes (1685). Colbert developpe le mercantilisme.',
      key_dates: JSON.stringify([
        { date: '1515', event: 'Bataille de Marignan (Francois Ier)' },
        { date: '1539', event: 'Ordonnance de Villers-Cotterets : le francais langue officielle' },
        { date: '1643', event: 'Debut du regne de Louis XIV (a 5 ans)' },
        { date: '1661', event: 'Mort de Mazarin : Louis XIV gouverne seul' },
        { date: '1682', event: 'La cour s\'installe a Versailles' },
        { date: '1685', event: 'Revocation de l\'edit de Nantes' },
        { date: '1715', event: 'Mort de Louis XIV' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Francois Ier', role: 'Roi de France, prince de la Renaissance, vainqueur a Marignan' },
        { name: 'Louis XIV', role: 'Roi Soleil, symbole de la monarchie absolue' },
        { name: 'Colbert', role: 'Controleur des finances de Louis XIV, promoteur du mercantilisme' },
        { name: 'Mazarin', role: 'Cardinal et Premier ministre pendant la minorite de Louis XIV' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Monarchie absolue', definition: 'Regime ou le roi detient tous les pouvoirs sans partage.' },
        { term: 'Droit divin', definition: 'Doctrine selon laquelle le roi tient son pouvoir directement de Dieu.' },
        { term: 'Mercantilisme', definition: 'Politique economique visant a enrichir l\'Etat par le commerce et les manufactures.' },
        { term: 'Etiquette', definition: 'Regles de la vie de cour a Versailles qui controlent la noblesse.' },
        { term: 'Revoquer', definition: 'Annuler, supprimer (l\'edit de Nantes est revoque en 1685).' },
      ]),
      sort_order: 1,
    },
    // ── 5EME GEOGRAPHIE ──
    {
      chapter_id: getChapterId('5e-geo-question-demographique'),
      title: 'La croissance demographique et ses effets',
      content: `## Fiche de revision : La question demographique et l\'inegal developpement

### Schema pedagogique
CROISSANCE DEMOGRAPHIQUE MONDIALE → PAYS DU NORD (transition achevee, vieillissement) + PAYS DU SUD (forte croissance, jeunesse) → DEFIS (alimentation, education, sante, urbanisation)

### Points cles
- La population mondiale depasse **7,8 milliards** d\'habitants et continue de croitre, surtout en **Afrique** et en **Asie du Sud**.
- La croissance demographique pose des defis differents selon les regions du monde.
- Le **developpement** est inegal : certains pays sont riches (IDH eleve), d\'autres restent pauvres (IDH faible).

### La transition demographique
- Passage d\'un regime demographique ancien (forte natalite, forte mortalite) a un regime moderne (faible natalite, faible mortalite).
- **Pays developpes** : transition achevee, population vieillissante, parfois en baisse (Japon, Allemagne).
- **Pays en developpement** : transition en cours, population jeune et en forte croissance (Afrique subsaharienne : 4 a 6 enfants par femme).
- **Pays emergents** : transition avancee (Chine, Bresil, Inde : baisse de la fecondite).

### Les defis de la croissance demographique
1. **Nourrir la population** : augmenter la production agricole, lutter contre la sous-nutrition.
2. **Eduquer** : construire des ecoles, former des enseignants dans les pays en developpement.
3. **Soigner** : acces aux soins, lutte contre les epidemies.
4. **Loger et urbaniser** : gerer l\'afflux vers les villes (bidonvilles, transports).
5. **Employer** : creer des emplois pour les jeunes.

### Mesurer le developpement
- **PIB par habitant** : richesse produite par personne (mais ne mesure pas les inegalites).
- **IDH** (Indice de Developpement Humain) : combine esperance de vie, education et niveau de vie (entre 0 et 1).
- Les inegalites de developpement existent aussi a l\'interieur des pays.`,
      summary: 'La population mondiale depasse 7,8 milliards, avec une forte croissance en Afrique et en Asie du Sud. La transition demographique est achevee dans les pays riches (vieillissement) mais en cours dans les pays pauvres (jeunesse). Les defis sont l\'alimentation, l\'education, la sante et l\'urbanisation.',
      key_dates: JSON.stringify([
        { date: '1800', event: '1 milliard d\'habitants sur Terre' },
        { date: '1950', event: '2,5 milliards d\'habitants' },
        { date: '2000', event: '6 milliards d\'habitants' },
        { date: '2023', event: '8 milliards d\'habitants' },
      ]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'Transition demographique', definition: 'Passage d\'un regime de forte natalite/mortalite a un regime de faible natalite/mortalite.' },
        { term: 'IDH', definition: 'Indice de Developpement Humain : mesure le developpement d\'un pays (sante, education, richesse).' },
        { term: 'Taux de fecondite', definition: 'Nombre moyen d\'enfants par femme.' },
        { term: 'Croissance demographique', definition: 'Augmentation de la population sur une periode donnee.' },
        { term: 'Sous-nutrition', definition: 'Alimentation insuffisante en quantite ou en qualite pour les besoins du corps.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('5e-geo-ressources-limitees'),
      title: 'Des ressources limitees, a gerer et a renouveler',
      content: `## Fiche de revision : Des ressources limitees, a gerer et a renouveler

### Schema pedagogique
RESSOURCES (eau, energie, alimentation) → INEGALEMENT REPARTIES → SUREXPLOITATION et POLLUTION → DEVELOPPEMENT DURABLE (gerer, economiser, renouveler)

### Points cles
- Les ressources naturelles sont **limitees** et **inegalement reparties** sur la planete.
- La croissance demographique et le developpement economique augmentent la **pression** sur les ressources.
- Le **developpement durable** vise a repondre aux besoins du present sans compromettre ceux des generations futures.

### L\'eau, une ressource vitale et menacee
- Seulement **2,5 %** de l\'eau sur Terre est de l\'eau douce, et une grande partie est inaccessible (glaciers).
- **Inegalites d\'acces** : les pays du Nord consomment beaucoup plus que les pays du Sud.
- Problemes : **pollution** des nappes phreatiques, **surexploitation** des reserves, **secheresses** liees au changement climatique.
- Solutions : dessalement, recyclage, economie d\'eau, irrigation raisonnee.

### L\'energie
- Les **energies fossiles** (petrole, gaz, charbon) representent encore 80 % de l\'energie mondiale mais elles sont **non renouvelables** et **polluantes** (CO2, rechauffement climatique).
- Les **energies renouvelables** (solaire, eolien, hydraulique, geothermie) se developpent mais restent minoritaires.
- **Transition energetique** : passer des energies fossiles aux energies renouvelables.

### L\'alimentation
- La production mondiale de nourriture est suffisante, mais **800 millions de personnes** souffrent de la faim.
- **Gaspillage alimentaire** dans les pays riches, sous-nutrition dans les pays pauvres.
- L\'**agriculture intensive** pollue (pesticides, engrais) et epuise les sols.
- Solutions : agriculture durable, circuits courts, lutte contre le gaspillage.

### Le developpement durable
- Defini en 1987 par le **rapport Brundtland** : repondre aux besoins du present sans compromettre ceux des generations futures.
- Trois piliers : **economique** (croissance), **social** (equite), **environnemental** (protection de la nature).
- Accords internationaux : **COP** (Conferences des Parties), **Accord de Paris** (2015) sur le climat.`,
      summary: 'Les ressources (eau, energie, alimentation) sont limitees et inegalement reparties. L\'eau douce ne represente que 2,5 %. Les energies fossiles dominent mais polluent. Le developpement durable (rapport Brundtland, 1987) repose sur trois piliers : economique, social et environnemental. La transition energetique est un enjeu majeur.',
      key_dates: JSON.stringify([
        { date: '1987', event: 'Rapport Brundtland : definition du developpement durable' },
        { date: '1992', event: 'Sommet de la Terre a Rio de Janeiro' },
        { date: '1997', event: 'Protocole de Kyoto sur les emissions de gaz a effet de serre' },
        { date: '2015', event: 'Accord de Paris sur le climat (COP21)' },
      ]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'Developpement durable', definition: 'Developpement qui repond aux besoins du present sans compromettre ceux des generations futures.' },
        { term: 'Energie fossile', definition: 'Energie provenant de la decomposition d\'organismes (petrole, gaz, charbon), non renouvelable.' },
        { term: 'Energie renouvelable', definition: 'Energie issue de sources naturelles inepuisables (soleil, vent, eau).' },
        { term: 'Transition energetique', definition: 'Passage des energies fossiles aux energies renouvelables.' },
        { term: 'Nappe phreatique', definition: 'Reserve d\'eau souterraine alimentee par les pluies.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('5e-geo-prevenir-risques'),
      title: 'Prevenir les risques et s\'adapter au changement global',
      content: `## Fiche de revision : Prevenir les risques, s\'adapter au changement global

### Schema pedagogique
ALEA (phenomene naturel ou technologique) + VULNERABILITE (population exposee) = RISQUE → CATASTROPHE si le risque se realise → PREVENTION et ADAPTATION

### Points cles
- Un **risque** resulte de la combinaison d\'un **alea** (seisme, inondation, accident industriel) et de la **vulnerabilite** d\'une population.
- Les risques sont **naturels** (seismes, cyclones, inondations, eruptions volcaniques) ou **technologiques** (accident nucleaire, maree noire, explosion industrielle).
- Le **changement climatique** (rechauffement global) amplifie certains risques et en cree de nouveaux.

### Les risques naturels
- **Seismes et volcans** : concentres aux limites des plaques tectoniques (Ceinture de feu du Pacifique).
- **Inondations** : premier risque naturel en France et dans le monde.
- **Cyclones** : tempetes tropicales violentes touchant les zones intertropicales.
- **Secheresses** : aggravees par le rechauffement climatique, touchent l\'Afrique subsaharienne.

### Les risques technologiques
- **Accident de Tchernobyl** (1986) : explosion d\'un reacteur nucleaire en Ukraine.
- **Accident de Fukushima** (2011) : seisme et tsunami provoquent une catastrophe nucleaire au Japon.
- **AZF Toulouse** (2001) : explosion d\'une usine chimique.
- Ces risques sont lies a l\'**industrialisation** et a la concentration des activites dangereuses pres des populations.

### Le changement climatique
- La temperature moyenne a augmente d\'environ **1,1°C** depuis l\'ere preindustrielle.
- Causes : emissions de **gaz a effet de serre** (CO2, methane) liees aux activites humaines (transports, industrie, agriculture).
- Consequences : montee du niveau des mers, fonte des glaciers, evenements meteorologiques extremes, perte de biodiversite.

### Prevenir et s\'adapter
- **Prevention** : plans de prevention des risques (PPRI en France), normes de construction antisismique, surveillance des volcans.
- **Alerte** : systemes d\'alerte precoce (sirenes, alertes sur telephones).
- **Education** : exercices d\'evacuation, culture du risque.
- **Adaptation** : construire sur pilotis, digues, reforestation, changer les pratiques agricoles.
- **Attenuation** : reduire les emissions de gaz a effet de serre (accord de Paris, transition energetique).`,
      summary: 'Un risque nait de la rencontre d\'un alea et d\'une vulnerabilite. Les risques sont naturels (seismes, inondations, cyclones) ou technologiques (Tchernobyl, AZF). Le changement climatique (+1,1°C) aggrave les aleas. La prevention (PPRI, normes, alertes) et l\'adaptation sont indispensables.',
      key_dates: JSON.stringify([
        { date: '1986', event: 'Catastrophe nucleaire de Tchernobyl' },
        { date: '2001', event: 'Explosion de l\'usine AZF a Toulouse' },
        { date: '2004', event: 'Tsunami dans l\'ocean Indien (230 000 victimes)' },
        { date: '2011', event: 'Catastrophe de Fukushima au Japon' },
        { date: '2015', event: 'Accord de Paris sur le climat (COP21)' },
      ]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'Alea', definition: 'Phenomene naturel ou technologique potentiellement dangereux.' },
        { term: 'Vulnerabilite', definition: 'Fragilite d\'une societe face a un alea (population exposee, manque de moyens).' },
        { term: 'Risque', definition: 'Combinaison d\'un alea et de la vulnerabilite d\'une population.' },
        { term: 'Gaz a effet de serre', definition: 'Gaz (CO2, methane) qui retiennent la chaleur dans l\'atmosphere et rechauffent le climat.' },
        { term: 'PPRI', definition: 'Plan de Prevention des Risques d\'Inondation : document reglementant la construction en zone inondable.' },
      ]),
      sort_order: 1,
    },
    // ── 4EME HISTOIRE ──
    {
      chapter_id: getChapterId('4e-hist-negoces-traites'),
      title: 'Le commerce triangulaire et l\'esclavage',
      content: `## Fiche de revision : Bourgeoisies marchandes et traites negrieres

### Schema pedagogique
EUROPE (produits manufactures) → AFRIQUE (esclaves) → AMERIQUES (sucre, cafe, coton) → EUROPE

### Le commerce triangulaire
- Au XVIIIe siecle, un commerce en trois etapes relie l'Europe, l'Afrique et les Ameriques.
- **1er trajet** : les navires partent d'Europe (Nantes, Bordeaux, Liverpool) charges de produits manufactures (armes, tissus, alcool).
- **2e trajet (la traite)** : en Afrique, ces marchandises sont echangees contre des **esclaves** captures. Les conditions du voyage (le « passage du milieu ») sont effroyables : entasses dans les cales, mortalite de 15 a 20%.
- **3e trajet** : les esclaves sont vendus aux Ameriques pour travailler dans les **plantations** de sucre, cafe, coton, tabac. Les navires repartent en Europe charges de ces produits.

### L'esclavage dans les colonies
- Les esclaves n'ont aucun droit. Le **Code noir** (1685) les considere comme des biens meubles.
- Travail force, chatiments corporels, separations familiales.
- Des revoltes d'esclaves eclatent. L'abolition viendra en **1794** (puis retabli par Napoleon) et definitivement en **1848** (decret de Victor Schoelcher).

### Les bourgeoisies marchandes
- Le commerce enrichit les **armateurs** et **negociants** des grands ports (Nantes, Bordeaux, La Rochelle).
- Cette bourgeoisie marchande devient une force economique et politique majeure.`,
      summary: 'Le commerce triangulaire relie Europe, Afrique et Ameriques au XVIIIe siecle. Les esclaves africains travaillent dans les plantations americaines. Le Code noir (1685) les considere comme des biens. L\'abolition definitive arrive en 1848 avec Schoelcher.',
      key_dates: JSON.stringify([
        { date: '1685', event: 'Code noir' },
        { date: '1794', event: 'Premiere abolition de l\'esclavage' },
        { date: '1848', event: 'Abolition definitive (Schoelcher)' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Victor Schoelcher', role: 'Artisan de l\'abolition definitive de l\'esclavage en 1848' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Commerce triangulaire', definition: 'Echange commercial entre Europe, Afrique et Ameriques impliquant la traite d\'esclaves.' },
        { term: 'Traite negriere', definition: 'Commerce d\'etres humains africains reduits en esclavage.' },
        { term: 'Code noir', definition: 'Ensemble de lois reglementant l\'esclavage dans les colonies francaises (1685).' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('4e-hist-europe-lumieres'),
      title: 'Les philosophes des Lumieres',
      content: `## Fiche de revision : L'Europe des Lumieres

### Schema pedagogique
RAISON + LIBERTE + TOLERANCE → CRITIQUE de l'ANCIEN REGIME → REVOLUTION

### Les idees des Lumieres
- Les philosophes du XVIIIe siecle utilisent la **raison** pour combattre l'ignorance, l'intolerance et le despotisme.
- Ils remettent en cause la **monarchie absolue**, les **privileges** et l'**intolerance religieuse**.

### Les grands philosophes
- **Voltaire** (1694-1778) : defend la tolerance religieuse et la liberte d'expression. Oeuvres : Candide, Traite sur la tolerance.
- **Montesquieu** (1689-1755) : propose la **separation des pouvoirs** (legislatif, executif, judiciaire). Oeuvre : L'Esprit des lois.
- **Rousseau** (1712-1778) : defend la **souverainete du peuple** et l'egalite. Oeuvre : Du contrat social.
- **Diderot** (1713-1784) : dirige l'**Encyclopedie** avec d'Alembert, somme de toutes les connaissances.

### La diffusion des idees
- L'Encyclopedie (1751-1772) : 28 volumes qui diffusent le savoir et les idees des Lumieres.
- Les **salons**, les **cafes**, la **presse** permettent la circulation des idees.
- Les Lumieres influencent la Declaration d'independance americaine (1776) et preparent la Revolution francaise.`,
      summary: 'Les philosophes des Lumieres (Voltaire, Montesquieu, Rousseau, Diderot) utilisent la raison pour critiquer l\'Ancien Regime. Ils defendent la tolerance, la separation des pouvoirs et la souverainete du peuple. L\'Encyclopedie diffuse leurs idees.',
      key_dates: JSON.stringify([
        { date: '1748', event: 'L\'Esprit des lois (Montesquieu)' },
        { date: '1751-1772', event: 'Publication de l\'Encyclopedie' },
        { date: '1762', event: 'Du contrat social (Rousseau)' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Voltaire', role: 'Philosophe, defend la tolerance et la liberte d\'expression' },
        { name: 'Montesquieu', role: 'Philosophe, theoricien de la separation des pouvoirs' },
        { name: 'Rousseau', role: 'Philosophe, defend la souverainete du peuple' },
        { name: 'Diderot', role: 'Directeur de l\'Encyclopedie' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Lumieres', definition: 'Mouvement intellectuel du XVIIIe siecle fonde sur la raison et le progres.' },
        { term: 'Encyclopedie', definition: 'Dictionnaire raisonne des sciences, des arts et des metiers (1751-1772).' },
        { term: 'Separation des pouvoirs', definition: 'Principe selon lequel les pouvoirs legislatif, executif et judiciaire doivent etre independants.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('4e-hist-revolution-empire'),
      title: 'La Revolution francaise (1789-1799)',
      content: `## Fiche de revision : La Revolution francaise et l'Empire

### Schema pedagogique
ETATS GENERAUX (mai 1789) → ASSEMBLEE NATIONALE → BASTILLE (14 juillet) → DDHC (26 aout) → REPUBLIQUE (1792) → TERREUR → DIRECTOIRE → NAPOLEON

### Les causes
- Crise financiere : l'Etat est endette (guerres, cour de Versailles).
- Crise sociale : le Tiers-Etat (98% de la population) paie tous les impots.
- Crise politique : les idees des Lumieres remettent en cause la monarchie absolue.

### Les grandes etapes
1. **5 mai 1789** : Etats generaux a Versailles.
2. **20 juin 1789** : Serment du Jeu de Paume (les deputes jurent de rediger une Constitution).
3. **14 juillet 1789** : Prise de la Bastille (symbole de l'arbitraire royal).
4. **4 aout 1789** : Abolition des privileges.
5. **26 aout 1789** : Declaration des Droits de l'Homme et du Citoyen (DDHC).
6. **21 septembre 1792** : Proclamation de la Republique.
7. **21 janvier 1793** : Execution de Louis XVI.
8. **1793-1794** : La Terreur sous Robespierre.

### Napoleon et l'Empire
- **1799** : Coup d'Etat du 18 Brumaire, Napoleon devient Premier Consul.
- **1804** : Il se sacre Empereur. Il modernise la France : Code civil, lycees, prefets, Banque de France.
- **1815** : Defaite a Waterloo, fin de l'Empire.`,
      summary: 'La Revolution francaise (1789) renverse la monarchie absolue. Etapes cles : Bastille (14 juillet), DDHC (26 aout), Republique (1792), execution de Louis XVI (1793), Terreur. Napoleon prend le pouvoir en 1799, cree l\'Empire (1804), modernise la France (Code civil).',
      key_dates: JSON.stringify([
        { date: '14 juillet 1789', event: 'Prise de la Bastille' },
        { date: '26 aout 1789', event: 'Declaration des Droits de l\'Homme et du Citoyen' },
        { date: '21 septembre 1792', event: 'Proclamation de la Republique' },
        { date: '21 janvier 1793', event: 'Execution de Louis XVI' },
        { date: '1804', event: 'Sacre de Napoleon, debut de l\'Empire' },
        { date: '1815', event: 'Waterloo, fin de l\'Empire' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Louis XVI', role: 'Roi de France, execute pendant la Revolution' },
        { name: 'Robespierre', role: 'Chef de la Terreur (1793-1794)' },
        { name: 'Napoleon Bonaparte', role: 'General, consul, puis empereur (1804-1815)' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'DDHC', definition: 'Declaration des Droits de l\'Homme et du Citoyen : texte fondateur des droits individuels (1789).' },
        { term: 'Terreur', definition: 'Periode de la Revolution (1793-1794) marquee par des executions massives.' },
        { term: 'Code civil', definition: 'Recueil de lois organisant la vie civile, cree par Napoleon (1804).' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('4e-hist-revolution-industrielle'),
      title: 'L\'industrialisation et la societe au XIXe siecle',
      content: `## Fiche de revision : La revolution industrielle

### Schema pedagogique
MACHINE A VAPEUR + CHARBON → USINES → EXODE RURAL → VILLES INDUSTRIELLES → QUESTION SOCIALE

### Les transformations economiques
- La **machine a vapeur** (James Watt, 1769) revolutionne la production.
- Le **charbon** est la source d'energie principale.
- Les **usines** remplacent les ateliers artisanaux.
- Le **chemin de fer** transforme les transports (premiere ligne en 1830).

### Les transformations sociales
- **Exode rural** : les paysans quittent la campagne pour travailler en ville.
- Emergence de deux classes : la **bourgeoisie industrielle** (proprietaires, patrons) et le **proletariat** (ouvriers).
- Conditions de travail des ouvriers : journees de 12-16h, travail des enfants, salaires misérables, logements insalubres.

### Les reponses a la question sociale
- **Socialisme** : Karl Marx denonce l'exploitation des ouvriers et propose la lutte des classes.
- **Syndicalisme** : les ouvriers s'organisent pour defendre leurs droits (droit de greve, 1864).
- Premieres lois sociales : interdiction du travail des enfants, limitation du temps de travail.`,
      summary: 'La revolution industrielle (XIXe siecle) repose sur la machine a vapeur et le charbon. L\'exode rural peuple les villes. Deux classes emergent : bourgeoisie et proletariat. Les conditions ouvrieres miserables engendrent le socialisme (Marx) et le syndicalisme.',
      key_dates: JSON.stringify([
        { date: '1769', event: 'Machine a vapeur de James Watt' },
        { date: '1830', event: 'Premiere ligne de chemin de fer' },
        { date: '1848', event: 'Manifeste du Parti communiste (Marx)' },
        { date: '1864', event: 'Droit de greve en France' },
      ]),
      key_figures: JSON.stringify([
        { name: 'James Watt', role: 'Inventeur de la machine a vapeur moderne' },
        { name: 'Karl Marx', role: 'Philosophe, theoricien du socialisme' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Proletariat', definition: 'Classe ouvriere ne possedant que sa force de travail.' },
        { term: 'Exode rural', definition: 'Depart massif des habitants des campagnes vers les villes.' },
        { term: 'Syndicalisme', definition: 'Mouvement de defense des droits des travailleurs.' },
      ]),
      sort_order: 1,
    },
    // ── 4EME GEOGRAPHIE ──
    {
      chapter_id: getChapterId('4e-geo-urbanisation-monde'),
      title: 'L\'urbanisation dans le monde',
      content: `## Fiche de revision : L'urbanisation du monde

### Schema pedagogique
EXODE RURAL → URBANISATION → METROPOLES CONNECTEES + MARGES URBAINES (bidonvilles)

### Un monde de plus en plus urbain
- Plus de **55%** de la population mondiale vit en ville (75% prevus en 2050).
- Les **metropoles** concentrent les pouvoirs economiques, politiques et culturels.
- **Megapoles** : villes de plus de 10 millions d'habitants (Tokyo, Delhi, Shanghai, Sao Paulo).

### Villes des pays developpes vs pays en developpement
- **Pays developpes** : etalement urbain, gentrification des centres, periurbanisation.
- **Pays en developpement** : croissance rapide, bidonvilles, inegalites fortes.
- Les **bidonvilles** abritent 1 milliard de personnes dans le monde.

### Les villes connectees
- Les **villes mondiales** (New York, Londres, Tokyo, Paris) sont les noeuds de la mondialisation.
- Elles concentrent les sieges des FTN, les Bourses, les organisations internationales.`,
      summary: 'Plus de 55% de la population mondiale est urbaine. Les metropoles concentrent pouvoirs et richesses. Les pays en developpement connaissent une urbanisation rapide avec des bidonvilles. Les villes mondiales sont les noeuds de la mondialisation.',
      key_dates: JSON.stringify([]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'Metropole', definition: 'Grande ville qui exerce une influence sur un vaste territoire.' },
        { term: 'Megapole', definition: 'Ville de plus de 10 millions d\'habitants.' },
        { term: 'Bidonville', definition: 'Quartier d\'habitat precaire, sans equipements, dans les villes des pays pauvres.' },
        { term: 'Gentrification', definition: 'Installation de populations aisees dans des quartiers populaires, entrainant la hausse des prix.' },
      ]),
      sort_order: 1,
    },
    // ── 3EME HISTOIRE ──
    {
      chapter_id: getChapterId('3e-hist-premiere-guerre'),
      title: 'La Premiere Guerre mondiale (1914-1918)',
      content: `## Fiche de revision : La Grande Guerre

### Schema pedagogique
ALLIANCES + NATIONALISME → ATTENTAT SARAJEVO (1914) → GUERRE DE MOUVEMENT → TRANCHEES → GUERRE TOTALE → ARMISTICE (1918)

### Les causes
- **Alliances** : Triple Entente (France, Royaume-Uni, Russie) vs Triple Alliance (Allemagne, Autriche-Hongrie, Italie).
- **Nationalisme** et rivalites coloniales.
- **28 juin 1914** : assassinat de l'archiduc Francois-Ferdinand a Sarajevo → engrenage des alliances.

### La guerre des tranchees (1915-1917)
- Apres la guerre de mouvement, le front se stabilise : c'est la guerre de **position** dans les **tranchees**.
- Conditions effroyables : boue, rats, gaz, bombardements, assauts meurtriers.
- **Verdun** (1916) : 300 000 morts, symbole de l'horreur des combats.

### Une guerre totale
- Mobilisation de toute la societe : femmes dans les usines, economie de guerre, propagande, censure.
- **Genocide des Armeniens** (1915) par l'Empire ottoman : 1,5 million de victimes.

### Les consequences
- **11 novembre 1918** : Armistice. Bilan : 10 millions de morts, 20 millions de blesses.
- **Traite de Versailles** (1919) : l'Allemagne est jugee responsable, doit payer des reparations.
- Naissance de la SDN (Societe des Nations).
- Carte de l'Europe redessinee : chute des empires ottoman, austro-hongrois, russe et allemand.`,
      summary: 'La Premiere Guerre mondiale (1914-1918) est declenchee par l\'attentat de Sarajevo. La guerre de tranchees (Verdun) fait des millions de morts. C\'est une guerre totale mobilisant civils et soldats. L\'armistice du 11 novembre 1918 et le Traite de Versailles redessinent l\'Europe.',
      key_dates: JSON.stringify([
        { date: '28 juin 1914', event: 'Attentat de Sarajevo' },
        { date: '1916', event: 'Bataille de Verdun' },
        { date: '1917', event: 'Entree en guerre des Etats-Unis et revolution russe' },
        { date: '11 novembre 1918', event: 'Armistice' },
        { date: '28 juin 1919', event: 'Traite de Versailles' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Clemenceau', role: 'President du Conseil francais, \"Pere la Victoire\"' },
        { name: 'Petain', role: 'General de Verdun (\"Ils ne passeront pas\")' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Guerre totale', definition: 'Guerre mobilisant toutes les ressources d\'un pays (economie, population, propagande).' },
        { term: 'Tranchees', definition: 'Fosses creuses dans le sol ou les soldats vivent et combattent.' },
        { term: 'Armistice', definition: 'Accord mettant fin aux combats (pas la paix definitive).' },
        { term: 'Genocide', definition: 'Extermination deliberee et systematique d\'un peuple.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('3e-hist-totalitarismes'),
      title: 'Les regimes totalitaires dans l\'entre-deux-guerres',
      content: `## Fiche de revision : Totalitarismes

### Schema pedagogique
CRISE → PARTI UNIQUE + CHEF → PROPAGANDE + TERREUR → CONTROLE TOTAL de la societe

### Trois regimes totalitaires
| | URSS | Italie | Allemagne |
|---|---|---|---|
| Chef | Staline | Mussolini | Hitler |
| Parti | Parti communiste | Parti fasciste | Parti nazi (NSDAP) |
| Ideologie | Communisme | Fascisme | Nazisme (racisme) |
| Terreur | Goulag, purges | Milices fascistes | SS, Gestapo, camps |
| Date | 1924-1953 | 1922-1943 | 1933-1945 |

### Points communs des totalitarismes
- **Parti unique** : un seul parti autorise, opposition eliminee.
- **Chef charismatique** : culte de la personnalite.
- **Propagande** : controle des medias, de l'education, de la culture.
- **Terreur** : police politique, camps, purges, delation.
- **Encadrement de la jeunesse** : Jeunesses hitlériennes, Komsomols, Balilla.

### L'URSS de Staline
- Collectivisation forcee des terres → famines (Holodomor en Ukraine, 3-5 millions de morts).
- Industrialisation forcee (plans quinquennaux).
- Grandes Purges (1936-1938) : elimination des opposants reels ou supposes.
- Goulag : systeme de camps de travail force.

### L'Allemagne nazie
- Hitler arrive au pouvoir en **1933**. Les lois de **Nuremberg** (1935) excluent les Juifs de la societe.
- **Nuit de Cristal** (1938) : pogrom anti-juif organise par les nazis.
- Politique d'expansion : Anschluss (Autriche), annexion des Sudetes.`,
      summary: 'L\'entre-deux-guerres voit l\'emergence de trois regimes totalitaires : URSS de Staline, Italie fasciste de Mussolini, Allemagne nazie d\'Hitler. Points communs : parti unique, chef charismatique, propagande, terreur, encadrement de la societe.',
      key_dates: JSON.stringify([
        { date: '1922', event: 'Mussolini au pouvoir en Italie' },
        { date: '1924', event: 'Staline prend le pouvoir en URSS' },
        { date: '1933', event: 'Hitler chancelier en Allemagne' },
        { date: '1935', event: 'Lois de Nuremberg (lois antisemites)' },
        { date: '1938', event: 'Nuit de Cristal' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Staline', role: 'Dictateur de l\'URSS (1924-1953)' },
        { name: 'Mussolini', role: 'Dictateur fasciste d\'Italie (1922-1943)' },
        { name: 'Hitler', role: 'Dictateur nazi d\'Allemagne (1933-1945)' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Totalitarisme', definition: 'Regime politique ou l\'Etat controle tous les aspects de la vie.' },
        { term: 'Propagande', definition: 'Diffusion d\'idees pour influencer l\'opinion publique.' },
        { term: 'Goulag', definition: 'Systeme de camps de travail force en URSS.' },
        { term: 'Culte de la personnalite', definition: 'Glorification excessive du chef par la propagande.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('3e-hist-seconde-guerre'),
      title: 'La Seconde Guerre mondiale et la Shoah',
      content: `## Fiche de revision : La Seconde Guerre mondiale

### Schema pedagogique
EXPANSION NAZIE (1939) → GUERRE ECLAIR → OCCUPATION → SHOAH → DEBARQUEMENTS → LIBERATION → BILAN

### Les phases de la guerre
1. **1939-1941** : victoires de l'Axe. Blitzkrieg, invasion de la Pologne, chute de la France (juin 1940).
2. **1941-1943** : tournant. Entree en guerre de l'URSS (juin 1941) et des USA (decembre 1941, Pearl Harbor). Stalingrad (1943).
3. **1944-1945** : Liberation. Debarquement en Normandie (6 juin 1944), liberation de Paris (aout 1944), capitulation de l'Allemagne (8 mai 1945), bombes atomiques sur Hiroshima et Nagasaki (aout 1945).

### La Shoah (genocide des Juifs)
- Les nazis mettent en oeuvre la **« Solution finale »** : extermination systematique des Juifs d'Europe.
- **6 millions de Juifs** assassines dans les camps d'extermination (Auschwitz, Treblinka, Sobibor).
- Genocide des Tziganes (entre 250 000 et 500 000 victimes).

### La France dans la guerre
- **Regime de Vichy** (1940-1944) : le marechal Petain collabore avec l'Allemagne.
- **Resistance** : le general de Gaulle lance l'appel du **18 juin 1940** depuis Londres. Jean Moulin unifie la Resistance interieure.

### Bilan
- 50 a 70 millions de morts (dont une majorite de civils).
- Tribunal de **Nuremberg** (1945-1946) : premiers proces pour crimes contre l'humanite.
- Creation de l'**ONU** (1945).`,
      summary: 'La Seconde Guerre mondiale (1939-1945) oppose l\'Axe aux Allies. La Shoah extermine 6 millions de Juifs. La France est occupee (Vichy collabore, de Gaulle resiste). Le debarquement de 1944 libere l\'Europe. Bilan : 50-70 millions de morts, Nuremberg, creation de l\'ONU.',
      key_dates: JSON.stringify([
        { date: '1er septembre 1939', event: 'Invasion de la Pologne, debut de la guerre' },
        { date: '18 juin 1940', event: 'Appel du general de Gaulle' },
        { date: '22 juin 1941', event: 'Operation Barbarossa (invasion de l\'URSS)' },
        { date: '6 juin 1944', event: 'Debarquement en Normandie' },
        { date: '8 mai 1945', event: 'Capitulation de l\'Allemagne' },
        { date: '6 et 9 aout 1945', event: 'Bombes atomiques sur Hiroshima et Nagasaki' },
      ]),
      key_figures: JSON.stringify([
        { name: 'De Gaulle', role: 'Chef de la France libre, appel du 18 Juin' },
        { name: 'Petain', role: 'Chef du regime de Vichy, collaborateur' },
        { name: 'Jean Moulin', role: 'Resistant, unificateur de la Resistance interieure' },
        { name: 'Churchill', role: 'Premier ministre britannique' },
        { name: 'Roosevelt', role: 'President americain' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Shoah', definition: 'Genocide des Juifs d\'Europe par les nazis (6 millions de victimes).' },
        { term: 'Solution finale', definition: 'Plan nazi d\'extermination systematique des Juifs.' },
        { term: 'Collaboration', definition: 'Cooperation avec l\'occupant nazi.' },
        { term: 'Resistance', definition: 'Opposition clandestine a l\'occupant nazi.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('3e-hist-guerre-froide'),
      title: 'La guerre froide (1947-1991)',
      content: `## Fiche de revision : La guerre froide

### Schema pedagogique
BLOC OUEST (USA, OTAN, capitalisme) ←RIDEAU DE FER→ BLOC EST (URSS, Pacte de Varsovie, communisme)

### La bipolarisation du monde
- Apres 1945, les deux superpuissances (USA et URSS) s'affrontent sans combat direct : c'est la **guerre froide**.
- **Bloc Ouest** : democraties liberales, capitalisme, OTAN (1949).
- **Bloc Est** : regimes communistes, economie planifiee, Pacte de Varsovie (1955).
- Le **rideau de fer** divise l'Europe.

### Les crises majeures
- **Blocus de Berlin** (1948-1949) : l'URSS bloque l'acces terrestre a Berlin-Ouest.
- **Mur de Berlin** (1961) : construit pour empecher la fuite des Allemands de l'Est.
- **Crise de Cuba** (1962) : le monde au bord de la guerre nucleaire.
- **Guerre du Vietnam** (1955-1975) : les USA echouent face au Nord-Vietnam communiste.

### La fin de la guerre froide
- **Gorbatchev** lance la glasnost (transparence) et la perestroika (restructuration).
- **9 novembre 1989** : chute du mur de Berlin.
- **25 decembre 1991** : dissolution de l'URSS. Fin de la guerre froide.`,
      summary: 'La guerre froide (1947-1991) oppose le bloc Ouest (USA, OTAN) au bloc Est (URSS, Pacte de Varsovie). Crises : blocus de Berlin, mur de Berlin, Cuba. La chute du mur (1989) et la dissolution de l\'URSS (1991) y mettent fin.',
      key_dates: JSON.stringify([
        { date: '1947', event: 'Debut de la guerre froide (doctrine Truman)' },
        { date: '1948-1949', event: 'Blocus de Berlin' },
        { date: '1961', event: 'Construction du mur de Berlin' },
        { date: '1962', event: 'Crise des missiles de Cuba' },
        { date: '9 novembre 1989', event: 'Chute du mur de Berlin' },
        { date: '25 decembre 1991', event: 'Dissolution de l\'URSS' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Truman', role: 'President americain, doctrine de l\'endiguement' },
        { name: 'Kennedy', role: 'President americain pendant la crise de Cuba' },
        { name: 'Gorbatchev', role: 'Dernier dirigeant de l\'URSS, glasnost et perestroika' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Guerre froide', definition: 'Affrontement indirect entre USA et URSS sans combat direct.' },
        { term: 'Rideau de fer', definition: 'Frontiere ideologique et physique separant l\'Europe en deux blocs.' },
        { term: 'Endiguement', definition: 'Politique americaine visant a empecher l\'expansion du communisme.' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('3e-hist-ve-republique'),
      title: 'La Ve Republique francaise',
      content: `## Fiche de revision : La Ve Republique

### Schema pedagogique
CRISE ALGERIENNE (1958) → DE GAULLE → CONSTITUTION Ve REPUBLIQUE → ALTERNANCE (1981) → COHABITATION

### La naissance de la Ve Republique
- En **1958**, la crise algerienne provoque le retour du general **de Gaulle** au pouvoir.
- Il fait adopter la **Constitution de la Ve Republique** (4 octobre 1958) : regime semi-presidentiel.
- Le president est elu au suffrage universel direct depuis **1962** (referendum).

### Les institutions
- **President de la Republique** : elu pour 5 ans (7 ans avant 2000), chef de l'Etat, nomme le Premier ministre.
- **Premier ministre et gouvernement** : dirige la politique du pays.
- **Parlement** (Assemblee nationale + Senat) : vote les lois.
- Separation des pouvoirs : executif, legislatif, judiciaire.

### Les grandes evolutions
- **Mai 1968** : mouvement etudiant et social qui secoue la France.
- **1981** : premiere **alternance** (Mitterrand, president socialiste).
- **Cohabitations** : le president et le Premier ministre sont de bords opposes (1986, 1993, 1997).
- **2000** : passage du septennat au **quinquennat**.`,
      summary: 'La Ve Republique nait en 1958 avec de Gaulle et une nouvelle Constitution. Le president est elu au suffrage universel direct (1962). Mai 68 secoue la France. La premiere alternance a lieu en 1981 (Mitterrand). Les cohabitations sont une specificite du regime.',
      key_dates: JSON.stringify([
        { date: '4 octobre 1958', event: 'Constitution de la Ve Republique' },
        { date: '1962', event: 'Election presidentielle au suffrage universel direct' },
        { date: 'Mai 1968', event: 'Mouvement etudiant et social' },
        { date: '1981', event: 'Premiere alternance (Mitterrand)' },
        { date: '2000', event: 'Quinquennat' },
      ]),
      key_figures: JSON.stringify([
        { name: 'De Gaulle', role: 'Fondateur de la Ve Republique, president (1958-1969)' },
        { name: 'Mitterrand', role: 'Premier president socialiste (1981-1995)' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Alternance', definition: 'Changement de majorite politique au pouvoir par les elections.' },
        { term: 'Cohabitation', definition: 'Le president et le Premier ministre sont de partis opposes.' },
        { term: 'Quinquennat', definition: 'Mandat presidentiel de 5 ans (depuis 2000).' },
        { term: 'Suffrage universel direct', definition: 'Vote de tous les citoyens pour elire directement un representant.' },
      ]),
      sort_order: 1,
    },
    // ── 3EME GEOGRAPHIE ──
    {
      chapter_id: getChapterId('3e-geo-dynamiques-france'),
      title: 'Les aires urbaines et les espaces productifs en France',
      content: `## Fiche de revision : Dynamiques territoriales de la France

### Schema pedagogique
AIRE URBAINE = ville-centre + banlieue + couronne periurbaine → PERIURBANISATION → ETALEMENT URBAIN

### Les aires urbaines
- **85% des Francais** vivent dans une aire urbaine.
- L'aire urbaine de **Paris** concentre 12 millions d'habitants (macrocephalie).
- La **periurbanisation** (installation en couronne periurbaine) entraine l'etalement urbain et les mobilites pendulaires (domicile-travail).

### Les espaces productifs
- **Espaces agricoles** : grandes cultures (Beauce), vignobles, elevage. La France est le 1er producteur agricole de l'UE.
- **Espaces industriels** : reconversion des anciennes regions (Nord, Lorraine), dynamisme de l'Ouest et du Sud.
- **Espaces touristiques** : littoraux (Cote d'Azur), montagnes (Alpes), patrimoine (Paris).
- **Technopoles** : Sophia Antipolis, Saclay, Toulouse (aeronautique).`,
      summary: '85% des Francais vivent en aire urbaine. Paris domine (macrocephalie). La periurbanisation provoque l\'etalement urbain. Les espaces productifs se transforment : reconversion industrielle, agriculture puissante, technopoles, tourisme.',
      key_dates: JSON.stringify([]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'Aire urbaine', definition: 'Ensemble forme par une ville-centre, sa banlieue et sa couronne periurbaine.' },
        { term: 'Periurbanisation', definition: 'Extension des villes vers les espaces ruraux environnants.' },
        { term: 'Technopole', definition: 'Parc d\'activites regroupant industries de haute technologie et centres de recherche.' },
        { term: 'Macrocephalie', definition: 'Domination ecrasante d\'une seule ville (Paris) sur le reseau urbain national.' },
      ]),
      sort_order: 1,
    },
    // ── TERMINALE HISTOIRE ──
    {
      chapter_id: getChapterId('tle-hist-regimes-totalitaires'),
      title: 'Les regimes totalitaires : URSS, Italie, Allemagne',
      content: `## Fiche de revision : Les totalitarismes (1917-1939)

### Schema pedagogique
CRISES (guerre, revolution, depression) → IDEOLOGIE EXTREME → PARTI UNIQUE + TERREUR → CONTROLE TOTAL

### Analyse comparative approfondie
Les totalitarismes partagent des mecanismes communs malgré des ideologies differentes :

**L'URSS stalinienne (1924-1953)**
- Ideologie : marxisme-leninisme, societe sans classes.
- Collectivisation forcee → famine en Ukraine (**Holodomor**, 3-5 millions de morts).
- Plans quinquennaux : industrialisation forcee.
- Grandes Purges (1936-1938) : 750 000 executions, millions de deportes au Goulag.
- Culte de Staline : « Petit pere des peuples ».

**L'Italie fasciste (1922-1943)**
- Ideologie : nationalisme extreme, Etat fort, corporatisme.
- Mussolini = « Duce ». Marche sur Rome (1922).
- Faisceaux de combat, OVRA (police politique).
- Politique imperialiste : conquete de l'Ethiopie (1935-1936).

**L'Allemagne nazie (1933-1945)**
- Ideologie : racisme, antisemitisme, espace vital (Lebensraum).
- Hitler = « Fuhrer ». Incendie du Reichstag → pleins pouvoirs (1933).
- Lois de Nuremberg (1935), Nuit de Cristal (1938).
- SS, Gestapo, camps de concentration des 1933.

### Ce qui distingue le nazisme
- Le nazisme ajoute une dimension **raciste** absente du stalinisme et du fascisme italien.
- Le projet nazi mene au genocide (Shoah) : extermination industrielle d'un peuple.`,
      summary: 'Trois regimes totalitaires emergent dans l\'entre-deux-guerres. URSS stalinienne : collectivisation, Goulag, purges. Italie fasciste : Mussolini, nationalisme. Allemagne nazie : Hitler, racisme, antisemitisme, Lebensraum. Le nazisme se distingue par sa dimension raciste genocidaire.',
      key_dates: JSON.stringify([
        { date: '1917', event: 'Revolution russe' },
        { date: '1922', event: 'Marche sur Rome, Mussolini au pouvoir' },
        { date: '1929', event: 'Debut de la Grande Depression' },
        { date: '30 janvier 1933', event: 'Hitler chancelier' },
        { date: '1935', event: 'Lois de Nuremberg' },
        { date: '1936-1938', event: 'Grandes Purges staliniennes' },
      ]),
      key_figures: JSON.stringify([
        { name: 'Staline', role: 'Dictateur de l\'URSS, collectivisation et purges' },
        { name: 'Mussolini', role: 'Duce d\'Italie, fondateur du fascisme' },
        { name: 'Hitler', role: 'Fuhrer, ideologie nazie raciste et expansionniste' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Totalitarisme', definition: 'Regime ou l\'Etat controle tous les aspects de la vie, supprime les libertes et utilise la terreur.' },
        { term: 'Lebensraum', definition: 'Espace vital : concept nazi justifiant l\'expansion territoriale vers l\'Est.' },
        { term: 'Holodomor', definition: 'Famine organisee en Ukraine (1932-1933), consequence de la collectivisation stalinienne.' },
        { term: 'Corporatisme', definition: 'Organisation de la societe en corporations encadrees par l\'Etat (fascisme italien).' },
      ]),
      sort_order: 1,
    },
    {
      chapter_id: getChapterId('tle-hist-seconde-guerre-mondiale'),
      title: 'La Seconde Guerre mondiale : guerre d\'aneantissement',
      content: `## Fiche de revision : La Seconde Guerre mondiale (niveau Terminale)

### Schema pedagogique
EXPANSION NAZIE → GUERRE MONDIALE → GUERRE D'ANEANTISSEMENT + SHOAH → LIBERATIONS → BILAN ET JUSTICE

### Une guerre d'aneantissement
- La WWII est une guerre d'aneantissement : l'objectif est la destruction totale de l'ennemi (civils inclus).
- **Bombardements massifs** de civils : Londres (Blitz), Dresde, Tokyo, Hiroshima, Nagasaki.
- **50 a 70 millions de morts**, dont une majorite de civils.

### La Shoah
- La « Solution finale » (Wannsee, janvier 1942) planifie l'extermination systematique des Juifs.
- **Einsatzgruppen** : unites mobiles de tuerie en Europe de l'Est (Shoah par balles).
- **Camps d'extermination** : Auschwitz-Birkenau, Treblinka, Sobibor, Belzec, Chelmno, Majdanek.
- Bilan : **6 millions de Juifs** et **250 000 a 500 000 Tziganes** assassines.

### La France : Vichy et la Resistance
- **Regime de Vichy** (1940-1944) : Petain collabore. Statut des Juifs (1940), rafle du Vel d'Hiv (1942).
- **Resistance** : de Gaulle (France libre), Jean Moulin (CNR), FFI, reseaux, maquis.
- **Liberation** : debarquements en Normandie (6 juin 1944) et Provence (aout 1944).

### Justice et memoire
- **Proces de Nuremberg** (1945-1946) : premiers proces pour **crimes contre l'humanite**.
- Notion de **devoir de memoire** pour eviter la repetition.`,
      summary: 'La WWII est une guerre d\'aneantissement (50-70M morts). La Shoah extermine 6M de Juifs (Solution finale, camps d\'extermination). En France : Vichy collabore (Vel d\'Hiv), la Resistance s\'organise (de Gaulle, Moulin). Nuremberg inaugure la justice internationale.',
      key_dates: JSON.stringify([
        { date: 'Janvier 1942', event: 'Conference de Wannsee (Solution finale)' },
        { date: '16-17 juillet 1942', event: 'Rafle du Vel d\'Hiv' },
        { date: '2 fevrier 1943', event: 'Capitulation allemande a Stalingrad' },
        { date: '6 juin 1944', event: 'Debarquement en Normandie' },
        { date: '8 mai 1945', event: 'Capitulation de l\'Allemagne' },
        { date: '1945-1946', event: 'Proces de Nuremberg' },
      ]),
      key_figures: JSON.stringify([
        { name: 'De Gaulle', role: 'Chef de la France libre' },
        { name: 'Jean Moulin', role: 'Unificateur de la Resistance, president du CNR' },
        { name: 'Petain', role: 'Chef de l\'Etat francais (Vichy), collaborateur' },
      ]),
      vocabulary: JSON.stringify([
        { term: 'Guerre d\'aneantissement', definition: 'Guerre visant la destruction totale de l\'adversaire, civils inclus.' },
        { term: 'Solution finale', definition: 'Plan nazi d\'extermination systematique des Juifs d\'Europe.' },
        { term: 'Crime contre l\'humanite', definition: 'Crime imprescriptible visant un groupe pour des motifs politiques, raciaux ou religieux.' },
        { term: 'Devoir de memoire', definition: 'Obligation morale de se souvenir des crimes du passe pour qu\'ils ne se reproduisent pas.' },
      ]),
      sort_order: 1,
    },
    // ── TERMINALE GEOGRAPHIE ──
    {
      chapter_id: getChapterId('tle-geo-mers-oceans'),
      title: 'Les espaces maritimes : routes, ressources et conflits',
      content: `## Fiche de revision : Mers et oceans au coeur de la mondialisation

### Schema pedagogique
ROUTES MARITIMES (90% du commerce mondial) + DETROITS STRATEGIQUES + RESSOURCES → ENJEUX GEOPOLITIQUES

### Le role des mers dans la mondialisation
- **90%** du commerce mondial transite par la mer (conteneurs, petroliers, vraquiers).
- Les **facades maritimes** sont les interfaces de la mondialisation : Northern Range (Le Havre-Hambourg), cote Est de la Chine.
- Les **ports** sont des hubs essentiels : Shanghai, Singapour, Rotterdam.

### Les detroits strategiques
- **Malacca** : entre Asie du Sud-Est et ocean Indien (25% du trafic mondial).
- **Ormuz** : sortie du golfe Persique (petrole).
- **Suez** et **Panama** : canaux artificiels reliant les oceans.
- **Gibraltar** : entre Mediterranee et Atlantique.

### Les enjeux
- **Ressources** : peche, hydrocarbures offshore, minerais sous-marins.
- **ZEE** (Zone Economique Exclusive) : 200 milles nautiques que chaque Etat cotier peut exploiter.
- **Conflits** : mer de Chine meridionale, Arctique (routes et ressources), piraterie.
- **Enjeux environnementaux** : pollution, surpeche, acidification des oceans, montee des eaux.`,
      summary: '90% du commerce mondial transite par mer. Les detroits strategiques (Malacca, Ormuz, Suez) sont des points de passage vitaux. Les ZEE permettent aux Etats d\'exploiter les ressources. Les conflits maritimes (mer de Chine, Arctique) et les enjeux environnementaux sont majeurs.',
      key_dates: JSON.stringify([]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([
        { term: 'ZEE', definition: 'Zone Economique Exclusive : espace maritime de 200 milles ou un Etat a des droits exclusifs sur les ressources.' },
        { term: 'Facade maritime', definition: 'Littoral ouvert sur l\'ocean, concentrant ports et activites liees au commerce mondial.' },
        { term: 'Detroit', definition: 'Passage maritime etroit entre deux terres, souvent strategique.' },
        { term: 'Hub portuaire', definition: 'Port majeur servant de plaque tournante pour le commerce maritime mondial.' },
      ]),
      sort_order: 1,
    },
  ]);
}
