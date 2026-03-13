import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('video_chapters').del();
  await knex('videos').del();

  const levels = await knex('school_levels').select('id', 'slug');
  const getLevelId = (slug: string) => levels.find((l: any) => l.slug === slug)?.id;

  const videos = await knex('videos')
    .insert([
      // ─── 6ème (débutant) ───────────────────────────────────────────────
      {
        title: 'La Préhistoire : des premiers hommes à la révolution néolithique',
        slug: 'prehistoire-premiers-hommes-revolution-neolithique',
        description:
          'Parcourez les grandes étapes de la Préhistoire, de l\'apparition des premiers hominidés à la sédentarisation et à l\'invention de l\'agriculture. Une vidéo pédagogique pour comprendre comment nos ancêtres ont transformé leur mode de vie.',
        youtube_id: 'atlas_edu_prehistoire',
        duration_seconds: 600,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Préhistoire',
        difficulty_level: 'debutant',
        level_id: getLevelId('6eme'),
        tags: JSON.stringify(['Préhistoire', 'Néolithique', 'Premiers hommes', 'Agriculture', 'Sédentarisation']),
        transcript: null,
      },
      {
        title: 'La Grèce antique et la naissance de la démocratie',
        slug: 'grece-antique-naissance-democratie',
        description:
          'Découvrez comment la cité d\'Athènes a inventé la démocratie au Ve siècle avant J.-C. : le rôle de l\'Ecclésia, les réformes de Clisthène et le fonctionnement de la vie politique athénienne.',
        youtube_id: 'atlas_edu_grece_antique_democratie',
        duration_seconds: 540,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Antiquité',
        difficulty_level: 'debutant',
        level_id: getLevelId('6eme'),
        tags: JSON.stringify(['Grèce antique', 'Démocratie', 'Athènes', 'Clisthène', 'Ecclésia']),
        transcript: null,
      },
      {
        title: 'Habiter le monde : métropoles, littoraux et déserts',
        slug: 'habiter-le-monde-metropoles-littoraux-deserts',
        description:
          'Comment les êtres humains habitent-ils les différents espaces de la planète ? Cette vidéo explore la vie dans les grandes métropoles, sur les littoraux et dans les zones arides, en montrant les défis propres à chaque milieu.',
        youtube_id: 'atlas_edu_habiter_le_monde',
        duration_seconds: 480,
        thumbnail_url: null,
        category: 'geographie',
        subcategory: 'Habiter le monde',
        difficulty_level: 'debutant',
        level_id: getLevelId('6eme'),
        tags: JSON.stringify(['Métropoles', 'Littoraux', 'Déserts', 'Habiter', 'Espaces géographiques']),
        transcript: null,
      },

      // ─── 5ème (débutant) ───────────────────────────────────────────────
      {
        title: 'Le Moyen Âge : seigneurs, chevaliers et paysans',
        slug: 'moyen-age-seigneurs-chevaliers-paysans',
        description:
          'Plongez dans la société féodale du Moyen Âge : le système seigneurial, la vie quotidienne des paysans, l\'adoubement des chevaliers et l\'organisation des campagnes médiévales.',
        youtube_id: 'atlas_edu_moyen_age',
        duration_seconds: 600,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Moyen Âge',
        difficulty_level: 'debutant',
        level_id: getLevelId('5eme'),
        tags: JSON.stringify(['Moyen Âge', 'Féodalité', 'Seigneurs', 'Chevaliers', 'Paysans']),
        transcript: null,
      },
      {
        title: 'L\'Islam médiéval : une civilisation brillante',
        slug: 'islam-medieval-civilisation-brillante',
        description:
          'Explorez l\'âge d\'or de la civilisation islamique : les avancées scientifiques, l\'art et l\'architecture, le commerce et la diffusion du savoir entre le VIIe et le XIIIe siècle.',
        youtube_id: 'atlas_edu_islam_medieval',
        duration_seconds: 540,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Civilisation islamique',
        difficulty_level: 'debutant',
        level_id: getLevelId('5eme'),
        tags: JSON.stringify(['Islam', 'Civilisation islamique', 'Âge d\'or', 'Sciences', 'Moyen Âge']),
        transcript: null,
      },
      {
        title: 'Démographie et développement durable',
        slug: 'demographie-developpement-durable',
        description:
          'Comprenez les grands enjeux démographiques mondiaux et leur lien avec le développement durable : croissance de la population, inégalités de développement et gestion des ressources.',
        youtube_id: 'atlas_edu_demographie_durable',
        duration_seconds: 480,
        thumbnail_url: null,
        category: 'geographie',
        subcategory: 'Développement durable',
        difficulty_level: 'debutant',
        level_id: getLevelId('5eme'),
        tags: JSON.stringify(['Démographie', 'Développement durable', 'Population', 'Ressources', 'Inégalités']),
        transcript: null,
      },

      // ─── 4ème (intermédiaire) ──────────────────────────────────────────
      {
        title: 'Les Lumières : Voltaire, Rousseau, Montesquieu',
        slug: 'lumieres-voltaire-rousseau-montesquieu',
        description:
          'Découvrez les grandes idées des philosophes des Lumières et leur impact décisif sur la société : la raison, la tolérance, la séparation des pouvoirs et le contrat social.',
        youtube_id: 'atlas_edu_lumieres',
        duration_seconds: 720,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Les Lumières',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('4eme'),
        tags: JSON.stringify(['Lumières', 'Voltaire', 'Rousseau', 'Montesquieu', 'Philosophie', 'XVIIIe siècle']),
        transcript: null,
      },
      {
        title: 'La Révolution française en 15 minutes',
        slug: 'revolution-francaise-15-minutes',
        description:
          'Résumé complet de la Révolution française : des causes profondes (crise financière, inégalités sociales) à la chute de Robespierre, en passant par la prise de la Bastille et la Déclaration des droits de l\'homme.',
        youtube_id: 'atlas_edu_revolution_francaise',
        duration_seconds: 900,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Révolution française',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('4eme'),
        tags: JSON.stringify(['Révolution française', '1789', 'Bastille', 'Droits de l\'homme', 'Terreur']),
        transcript: null,
      },
      {
        title: 'La mondialisation : comprendre les échanges mondiaux',
        slug: 'mondialisation-echanges-mondiaux',
        description:
          'Qu\'est-ce que la mondialisation ? Cette vidéo explique les flux commerciaux, financiers et migratoires qui relient les territoires du monde entier, ainsi que leurs conséquences économiques et sociales.',
        youtube_id: 'atlas_edu_mondialisation',
        duration_seconds: 600,
        thumbnail_url: null,
        category: 'geographie',
        subcategory: 'Mondialisation',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('4eme'),
        tags: JSON.stringify(['Mondialisation', 'Échanges', 'Commerce', 'Flux', 'Économie mondiale']),
        transcript: null,
      },

      // ─── 3ème (intermédiaire) ──────────────────────────────────────────
      {
        title: 'La Première Guerre mondiale : la Grande Guerre',
        slug: 'premiere-guerre-mondiale-grande-guerre',
        description:
          'Analyse complète de la Première Guerre mondiale : les causes (alliances, nationalisme), les grandes batailles (Verdun, la Somme), la guerre des tranchées et les conséquences du traité de Versailles.',
        youtube_id: 'atlas_edu_premiere_guerre_mondiale',
        duration_seconds: 900,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Guerres mondiales',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('3eme'),
        tags: JSON.stringify(['Première Guerre mondiale', '1914-1918', 'Tranchées', 'Verdun', 'Armistice']),
        transcript: null,
      },
      {
        title: 'La Seconde Guerre mondiale et la Shoah',
        slug: 'seconde-guerre-mondiale-shoah',
        description:
          'Comprenez les origines, le déroulement et les conséquences de la Seconde Guerre mondiale, avec un éclairage particulier sur la Shoah, le génocide des Juifs d\'Europe perpétré par le régime nazi.',
        youtube_id: 'atlas_edu_seconde_guerre_mondiale',
        duration_seconds: 1080,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Guerres mondiales',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('3eme'),
        tags: JSON.stringify(['Seconde Guerre mondiale', 'Shoah', 'Nazisme', '1939-1945', 'Génocide']),
        transcript: null,
      },
      {
        title: 'La France : aires urbaines et aménagement du territoire',
        slug: 'france-aires-urbaines-amenagement-territoire',
        description:
          'Étudiez l\'organisation du territoire français : la métropolisation, les aires urbaines, les espaces ruraux et les politiques d\'aménagement pour réduire les inégalités territoriales.',
        youtube_id: 'atlas_edu_france_aires_urbaines',
        duration_seconds: 540,
        thumbnail_url: null,
        category: 'geographie',
        subcategory: 'Aménagement du territoire',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('3eme'),
        tags: JSON.stringify(['Aires urbaines', 'Aménagement', 'Territoire français', 'Métropolisation', 'Urbanisation']),
        transcript: null,
      },

      // ─── Seconde (intermédiaire) ───────────────────────────────────────
      {
        title: 'Athènes et Rome : deux modèles politiques antiques',
        slug: 'athenes-rome-modeles-politiques-antiques',
        description:
          'Comparez les deux grands modèles politiques de l\'Antiquité : la démocratie athénienne et la République romaine. Découvrez leurs institutions, leurs citoyens et leur héritage politique.',
        youtube_id: 'atlas_edu_athenes_rome',
        duration_seconds: 720,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Antiquité',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('seconde'),
        tags: JSON.stringify(['Athènes', 'Rome', 'Démocratie', 'République', 'Antiquité', 'Citoyenneté']),
        transcript: null,
      },
      {
        title: 'Les Grandes Découvertes et le nouveau monde',
        slug: 'grandes-decouvertes-nouveau-monde',
        description:
          'Revivez l\'épopée des Grandes Découvertes : les voyages de Christophe Colomb, Vasco de Gama et Magellan, la rencontre avec les civilisations amérindiennes et les débuts de la colonisation.',
        youtube_id: 'atlas_edu_grandes_decouvertes',
        duration_seconds: 660,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Grandes Découvertes',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('seconde'),
        tags: JSON.stringify(['Grandes Découvertes', 'Christophe Colomb', 'Nouveau monde', 'Colonisation', 'XVe siècle']),
        transcript: null,
      },
      {
        title: 'Sociétés, environnements et changement climatique',
        slug: 'societes-environnements-changement-climatique',
        description:
          'Analysez les interactions entre les sociétés humaines et leur environnement à travers l\'histoire, et comprenez les enjeux actuels du changement climatique et de la transition écologique.',
        youtube_id: 'atlas_edu_societes_environnements',
        duration_seconds: 600,
        thumbnail_url: null,
        category: 'geographie',
        subcategory: 'Environnement',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('seconde'),
        tags: JSON.stringify(['Changement climatique', 'Environnement', 'Sociétés', 'Transition écologique', 'Ressources']),
        transcript: null,
      },

      // ─── Première (avancé) ─────────────────────────────────────────────
      {
        title: 'De la Révolution à la IIIe République (1789-1914)',
        slug: 'revolution-troisieme-republique-1789-1914',
        description:
          'Retracez le long chemin politique de la France entre 1789 et 1914 : les révolutions, les empires, les restaurations monarchiques et l\'enracinement progressif de la République et de la démocratie.',
        youtube_id: 'atlas_edu_revolution_troisieme_republique',
        duration_seconds: 1200,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Histoire politique française',
        difficulty_level: 'avance',
        level_id: getLevelId('premiere'),
        tags: JSON.stringify(['Révolution', 'IIIe République', 'Napoléon', 'Démocratie', 'XIXe siècle', '1789-1914']),
        transcript: null,
      },
      {
        title: 'La Première Guerre mondiale : l\'expérience combattante',
        slug: 'premiere-guerre-mondiale-experience-combattante',
        description:
          'Étudiez la Première Guerre mondiale du point de vue des soldats : la vie dans les tranchées, la violence de masse, les mutineries et le traumatisme d\'une génération sacrifiée.',
        youtube_id: 'atlas_edu_experience_combattante',
        duration_seconds: 900,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Guerres mondiales',
        difficulty_level: 'avance',
        level_id: getLevelId('premiere'),
        tags: JSON.stringify(['Première Guerre mondiale', 'Tranchées', 'Poilus', 'Violence de masse', 'Expérience combattante']),
        transcript: null,
      },
      {
        title: 'La métropolisation en France et dans le monde',
        slug: 'metropolisation-france-monde',
        description:
          'Comprenez le phénomène de métropolisation : la concentration des populations et des activités dans les grandes villes, les dynamiques centre-périphérie et les défis de l\'urbanisation mondiale.',
        youtube_id: 'atlas_edu_metropolisation',
        duration_seconds: 660,
        thumbnail_url: null,
        category: 'geographie',
        subcategory: 'Métropolisation',
        difficulty_level: 'avance',
        level_id: getLevelId('premiere'),
        tags: JSON.stringify(['Métropolisation', 'Urbanisation', 'Villes mondiales', 'Centre-périphérie', 'France']),
        transcript: null,
      },

      // ─── Terminale (avancé) ────────────────────────────────────────────
      {
        title: 'Les totalitarismes : URSS, Italie fasciste, Allemagne nazie',
        slug: 'totalitarismes-urss-italie-fasciste-allemagne-nazie',
        description:
          'Analysez et comparez les trois grands régimes totalitaires du XXe siècle : le stalinisme en URSS, le fascisme en Italie et le nazisme en Allemagne. Idéologie, propagande, terreur et encadrement des masses.',
        youtube_id: 'atlas_edu_totalitarismes',
        duration_seconds: 1080,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Totalitarismes',
        difficulty_level: 'avance',
        level_id: getLevelId('terminale'),
        tags: JSON.stringify(['Totalitarisme', 'URSS', 'Fascisme', 'Nazisme', 'Staline', 'Hitler', 'Mussolini']),
        transcript: null,
      },
      {
        title: 'Le monde bipolaire et la guerre froide (1947-1991)',
        slug: 'monde-bipolaire-guerre-froide-1947-1991',
        description:
          'Décryptez la guerre froide : l\'affrontement idéologique entre les États-Unis et l\'URSS, les crises majeures (Berlin, Cuba, Vietnam) et la chute du mur de Berlin qui met fin à la bipolarisation du monde.',
        youtube_id: 'atlas_edu_guerre_froide',
        duration_seconds: 900,
        thumbnail_url: null,
        category: 'histoire',
        subcategory: 'Guerre froide',
        difficulty_level: 'avance',
        level_id: getLevelId('terminale'),
        tags: JSON.stringify(['Guerre froide', 'Bipolarisation', 'URSS', 'États-Unis', 'Mur de Berlin', '1947-1991']),
        transcript: null,
      },
      {
        title: 'Mers et océans : au cœur de la mondialisation',
        slug: 'mers-oceans-coeur-mondialisation',
        description:
          'Explorez le rôle stratégique des mers et des océans dans la mondialisation : routes maritimes, détroits stratégiques, ressources halieutiques, enjeux géopolitiques et défis environnementaux.',
        youtube_id: 'atlas_edu_mers_oceans',
        duration_seconds: 720,
        thumbnail_url: null,
        category: 'geographie',
        subcategory: 'Mers et océans',
        difficulty_level: 'avance',
        level_id: getLevelId('terminale'),
        tags: JSON.stringify(['Mers', 'Océans', 'Mondialisation', 'Routes maritimes', 'Géopolitique', 'Ressources']),
        transcript: null,
      },
    ])
    .returning('*');

  // ─── Video chapters ──────────────────────────────────────────────────

  const findVideo = (slug: string) => videos.find((v: any) => v.slug === slug);

  const prehistoire = findVideo('prehistoire-premiers-hommes-revolution-neolithique');
  const greceAntique = findVideo('grece-antique-naissance-democratie');
  const moyenAge = findVideo('moyen-age-seigneurs-chevaliers-paysans');
  const revolution = findVideo('revolution-francaise-15-minutes');
  const pgm3eme = findVideo('premiere-guerre-mondiale-grande-guerre');
  const sgm = findVideo('seconde-guerre-mondiale-shoah');
  const totalitarismes = findVideo('totalitarismes-urss-italie-fasciste-allemagne-nazie');
  const guerreFroide = findVideo('monde-bipolaire-guerre-froide-1947-1991');

  await knex('video_chapters').insert([
    // La Préhistoire (600s)
    { video_id: prehistoire.id, title: 'Introduction : qu\'est-ce que la Préhistoire ?', start_seconds: 0, end_seconds: 80, sort_order: 1 },
    { video_id: prehistoire.id, title: 'Les premiers hominidés et la maîtrise du feu', start_seconds: 80, end_seconds: 200, sort_order: 2 },
    { video_id: prehistoire.id, title: 'L\'Homo sapiens et les migrations', start_seconds: 200, end_seconds: 350, sort_order: 3 },
    { video_id: prehistoire.id, title: 'La révolution néolithique : agriculture et sédentarisation', start_seconds: 350, end_seconds: 500, sort_order: 4 },
    { video_id: prehistoire.id, title: 'Les premières sociétés organisées', start_seconds: 500, end_seconds: 600, sort_order: 5 },

    // La Grèce antique (540s)
    { video_id: greceAntique.id, title: 'La cité d\'Athènes au Ve siècle avant J.-C.', start_seconds: 0, end_seconds: 120, sort_order: 1 },
    { video_id: greceAntique.id, title: 'Les réformes de Clisthène', start_seconds: 120, end_seconds: 250, sort_order: 2 },
    { video_id: greceAntique.id, title: 'Le fonctionnement de l\'Ecclésia', start_seconds: 250, end_seconds: 400, sort_order: 3 },
    { video_id: greceAntique.id, title: 'Citoyens, métèques et esclaves', start_seconds: 400, end_seconds: 540, sort_order: 4 },

    // Le Moyen Âge (600s)
    { video_id: moyenAge.id, title: 'La société féodale : une pyramide sociale', start_seconds: 0, end_seconds: 130, sort_order: 1 },
    { video_id: moyenAge.id, title: 'Le seigneur et son château', start_seconds: 130, end_seconds: 260, sort_order: 2 },
    { video_id: moyenAge.id, title: 'La vie des paysans au quotidien', start_seconds: 260, end_seconds: 400, sort_order: 3 },
    { video_id: moyenAge.id, title: 'L\'adoubement et le code chevaleresque', start_seconds: 400, end_seconds: 500, sort_order: 4 },
    { video_id: moyenAge.id, title: 'L\'Église au cœur de la vie médiévale', start_seconds: 500, end_seconds: 600, sort_order: 5 },

    // La Révolution française (900s)
    { video_id: revolution.id, title: 'La France en crise : les causes de la Révolution', start_seconds: 0, end_seconds: 150, sort_order: 1 },
    { video_id: revolution.id, title: 'Les États généraux et le serment du Jeu de paume', start_seconds: 150, end_seconds: 300, sort_order: 2 },
    { video_id: revolution.id, title: 'La prise de la Bastille et la Grande Peur', start_seconds: 300, end_seconds: 450, sort_order: 3 },
    { video_id: revolution.id, title: 'La Déclaration des droits de l\'homme et du citoyen', start_seconds: 450, end_seconds: 620, sort_order: 4 },
    { video_id: revolution.id, title: 'La Terreur et la chute de Robespierre', start_seconds: 620, end_seconds: 900, sort_order: 5 },

    // La Première Guerre mondiale - 3ème (900s)
    { video_id: pgm3eme.id, title: 'Les causes de la Grande Guerre', start_seconds: 0, end_seconds: 180, sort_order: 1 },
    { video_id: pgm3eme.id, title: 'L\'attentat de Sarajevo et l\'engrenage des alliances', start_seconds: 180, end_seconds: 330, sort_order: 2 },
    { video_id: pgm3eme.id, title: 'La guerre des tranchées et Verdun', start_seconds: 330, end_seconds: 550, sort_order: 3 },
    { video_id: pgm3eme.id, title: 'L\'entrée en guerre des États-Unis', start_seconds: 550, end_seconds: 700, sort_order: 4 },
    { video_id: pgm3eme.id, title: 'L\'armistice et le traité de Versailles', start_seconds: 700, end_seconds: 900, sort_order: 5 },

    // La Seconde Guerre mondiale et la Shoah (1080s)
    { video_id: sgm.id, title: 'Les origines du conflit et la montée des fascismes', start_seconds: 0, end_seconds: 200, sort_order: 1 },
    { video_id: sgm.id, title: 'La guerre éclair et l\'occupation de l\'Europe', start_seconds: 200, end_seconds: 420, sort_order: 2 },
    { video_id: sgm.id, title: 'La Shoah : le génocide des Juifs d\'Europe', start_seconds: 420, end_seconds: 680, sort_order: 3 },
    { video_id: sgm.id, title: 'Le tournant de la guerre : Stalingrad et le Débarquement', start_seconds: 680, end_seconds: 880, sort_order: 4 },
    { video_id: sgm.id, title: 'La victoire des Alliés et le bilan du conflit', start_seconds: 880, end_seconds: 1080, sort_order: 5 },

    // Les totalitarismes (1080s)
    { video_id: totalitarismes.id, title: 'Qu\'est-ce qu\'un régime totalitaire ?', start_seconds: 0, end_seconds: 180, sort_order: 1 },
    { video_id: totalitarismes.id, title: 'L\'URSS de Staline : le communisme soviétique', start_seconds: 180, end_seconds: 420, sort_order: 2 },
    { video_id: totalitarismes.id, title: 'L\'Italie de Mussolini : le fascisme', start_seconds: 420, end_seconds: 620, sort_order: 3 },
    { video_id: totalitarismes.id, title: 'L\'Allemagne de Hitler : le nazisme', start_seconds: 620, end_seconds: 880, sort_order: 4 },
    { video_id: totalitarismes.id, title: 'Points communs et différences entre les trois régimes', start_seconds: 880, end_seconds: 1080, sort_order: 5 },

    // La guerre froide (900s)
    { video_id: guerreFroide.id, title: 'La naissance du monde bipolaire (1947)', start_seconds: 0, end_seconds: 180, sort_order: 1 },
    { video_id: guerreFroide.id, title: 'Les crises majeures : Berlin, Cuba, Vietnam', start_seconds: 180, end_seconds: 420, sort_order: 2 },
    { video_id: guerreFroide.id, title: 'La course aux armements et la conquête spatiale', start_seconds: 420, end_seconds: 600, sort_order: 3 },
    { video_id: guerreFroide.id, title: 'La détente et les dernières tensions', start_seconds: 600, end_seconds: 760, sort_order: 4 },
    { video_id: guerreFroide.id, title: 'La chute du mur de Berlin et la fin de l\'URSS', start_seconds: 760, end_seconds: 900, sort_order: 5 },
  ]);
}
