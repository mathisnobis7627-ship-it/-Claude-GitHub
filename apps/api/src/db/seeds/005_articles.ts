import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('article_sections').del();
  await knex('articles').del();

  const articles = await knex('articles')
    .insert([
      {
        slug: 'revolution-francaise',
        title: 'La Révolution française',
        subtitle: 'De la prise de la Bastille à la chute de Robespierre',
        summary: 'La Révolution française (1789-1799) est un événement fondateur de l\'histoire moderne. Elle met fin à l\'Ancien Régime et établit les principes de liberté, d\'égalité et de fraternité.',
        category: 'history',
        author: 'Équipe Atlas',
        reading_time_minutes: 15,
        difficulty_level: 'intermediaire',
        tags: JSON.stringify(['Révolution', 'France', 'XVIIIe siècle', 'Droits de l\'homme']),
        published: true,
      },
      {
        slug: 'tectonique-des-plaques',
        title: 'La tectonique des plaques',
        subtitle: 'Comprendre les mouvements de la croûte terrestre',
        summary: 'La tectonique des plaques est la théorie scientifique qui explique les mouvements des continents, la formation des montagnes et l\'activité volcanique.',
        category: 'geology',
        author: 'Équipe Atlas',
        reading_time_minutes: 12,
        difficulty_level: 'intermediaire',
        tags: JSON.stringify(['Géologie', 'Plaques tectoniques', 'Volcans', 'Séismes']),
        published: true,
      },
      {
        slug: 'democratie-athenienne',
        title: 'La démocratie athénienne',
        subtitle: 'Naissance de la démocratie dans la Grèce antique',
        summary: 'Athènes invente la démocratie au Ve siècle av. J.-C. Ce système politique inédit donne le pouvoir aux citoyens et influence encore nos sociétés actuelles.',
        category: 'history',
        author: 'Équipe Atlas',
        reading_time_minutes: 10,
        difficulty_level: 'debutant',
        tags: JSON.stringify(['Grèce antique', 'Démocratie', 'Athènes', 'Politique']),
        published: true,
      },
      {
        slug: 'cycle-de-leau',
        title: 'Le cycle de l\'eau',
        subtitle: 'L\'eau sous toutes ses formes dans la nature',
        summary: 'Le cycle de l\'eau décrit le parcours continu de l\'eau sur Terre : évaporation, condensation, précipitation et ruissellement. Un mécanisme essentiel à la vie.',
        category: 'geography',
        author: 'Équipe Atlas',
        reading_time_minutes: 8,
        difficulty_level: 'debutant',
        tags: JSON.stringify(['Eau', 'Climat', 'Géographie physique', 'Environnement']),
        published: true,
      },
      {
        slug: 'renaissance-italienne',
        title: 'La Renaissance italienne',
        subtitle: 'L\'éveil culturel qui a transformé l\'Europe',
        summary: 'La Renaissance naît en Italie au XIVe siècle. Ce mouvement culturel et intellectuel marque une rupture avec le Moyen Âge et pose les bases de la modernité.',
        category: 'culture',
        author: 'Équipe Atlas',
        reading_time_minutes: 14,
        difficulty_level: 'intermediaire',
        tags: JSON.stringify(['Renaissance', 'Italie', 'Art', 'Humanisme']),
        published: true,
      },
      {
        slug: 'volcans-types-eruptions',
        title: 'Les volcans et les types d\'éruptions',
        subtitle: 'Effusives, explosives : comprendre les éruptions volcaniques',
        summary: 'Les volcans sont des ouvertures dans la croûte terrestre par lesquelles remonte le magma. Découvrez les différents types de volcans et d\'éruptions.',
        category: 'geology',
        author: 'Équipe Atlas',
        reading_time_minutes: 10,
        difficulty_level: 'debutant',
        tags: JSON.stringify(['Volcans', 'Éruptions', 'Géologie', 'Magma']),
        published: true,
      },
      {
        slug: 'premiere-guerre-mondiale',
        title: 'La Première Guerre mondiale',
        subtitle: '1914-1918 : la Grande Guerre qui a bouleversé le monde',
        summary: 'La Première Guerre mondiale (1914-1918) est un conflit d\'une ampleur sans précédent qui mobilise plus de 70 millions de soldats et fait plus de 18 millions de morts.',
        category: 'war',
        author: 'Équipe Atlas',
        reading_time_minutes: 18,
        difficulty_level: 'avance',
        tags: JSON.stringify(['Guerre mondiale', 'XXe siècle', 'Tranchées', 'Armistice']),
        published: true,
      },
      {
        slug: 'systeme-solaire',
        title: 'Le système solaire',
        subtitle: 'Notre voisinage cosmique : du Soleil à Neptune',
        summary: 'Le système solaire comprend le Soleil, huit planètes, des planètes naines, des astéroïdes et des comètes. Explorons notre coin d\'univers.',
        category: 'science',
        author: 'Équipe Atlas',
        reading_time_minutes: 12,
        difficulty_level: 'debutant',
        tags: JSON.stringify(['Astronomie', 'Planètes', 'Espace', 'Soleil']),
        published: true,
      },
    ])
    .returning('*');

  const revolution = articles.find((a: any) => a.slug === 'revolution-francaise');
  const tectonique = articles.find((a: any) => a.slug === 'tectonique-des-plaques');
  const democratie = articles.find((a: any) => a.slug === 'democratie-athenienne');
  const volcans = articles.find((a: any) => a.slug === 'volcans-types-eruptions');

  await knex('article_sections').insert([
    // Revolution
    { article_id: revolution.id, title: 'Les causes de la Révolution', content: 'La France de 1789 traverse une crise profonde. La société d\'ordres (clergé, noblesse, tiers état) crée des inégalités insupportables. Le déficit budgétaire, les mauvaises récoltes de 1788 et l\'influence des Lumières alimentent le mécontentement. La convocation des États généraux en mai 1789 est l\'étincelle qui déclenche le mouvement révolutionnaire.', sort_order: 1 },
    { article_id: revolution.id, title: 'La prise de la Bastille', content: 'Le 14 juillet 1789, le peuple de Paris s\'empare de la forteresse de la Bastille, symbole de l\'absolutisme royal. Cet événement marque le début de la Révolution et deviendra la fête nationale française. Dans les campagnes, la Grande Peur pousse les paysans à attaquer les châteaux seigneuriaux.', sort_order: 2 },
    { article_id: revolution.id, title: 'La Déclaration des droits de l\'homme', content: 'Adoptée le 26 août 1789 par l\'Assemblée nationale, la Déclaration des droits de l\'homme et du citoyen proclame que « les hommes naissent et demeurent libres et égaux en droits ». Elle établit les principes fondamentaux : liberté, propriété, sûreté et résistance à l\'oppression.', sort_order: 3 },
    { article_id: revolution.id, title: 'La Terreur et la chute de Robespierre', content: 'En 1793-1794, le Comité de salut public dirigé par Robespierre instaure la Terreur pour sauver la République menacée. Des milliers de personnes sont guillotinées. Le 9 thermidor an II (27 juillet 1794), Robespierre est renversé et exécuté, mettant fin à cette période sanglante.', sort_order: 4 },

    // Tectonique
    { article_id: tectonique.id, title: 'La dérive des continents', content: 'En 1912, Alfred Wegener propose la théorie de la dérive des continents en observant que les côtes de l\'Afrique et de l\'Amérique du Sud s\'emboîtent. Il imagine un supercontinent unique, la Pangée, qui se serait fragmenté. Sa théorie, d\'abord rejetée, sera confirmée dans les années 1960.', sort_order: 1 },
    { article_id: tectonique.id, title: 'Les plaques lithosphériques', content: 'La lithosphère terrestre est découpée en une douzaine de plaques rigides qui « flottent » sur l\'asthénosphère visqueuse. Les principales plaques sont : eurasiatique, nord-américaine, sud-américaine, africaine, indo-australienne, pacifique et antarctique.', sort_order: 2 },
    { article_id: tectonique.id, title: 'Les mouvements des plaques', content: 'Les plaques tectoniques se déplacent de quelques centimètres par an. Trois types de mouvements existent : divergence (les plaques s\'éloignent, créant des dorsales océaniques), convergence (les plaques se rapprochent, créant des chaînes de montagnes ou des fosses) et coulissement (les plaques glissent l\'une contre l\'autre, créant des failles comme San Andreas).', sort_order: 3 },

    // Democratie
    { article_id: democratie.id, title: 'Les réformes de Clisthène', content: 'En 508 av. J.-C., Clisthène réforme les institutions d\'Athènes. Il crée 10 tribus civiques, un Conseil de 500 membres (la Boulè) et instaure l\'isonomie (égalité devant la loi). Ces réformes fondent la démocratie athénienne en donnant à chaque citoyen le droit de participer aux décisions politiques.', sort_order: 1 },
    { article_id: democratie.id, title: 'L\'Ecclésia et la vie politique', content: 'L\'Ecclésia est l\'assemblée de tous les citoyens athéniens. Elle se réunit sur la colline de la Pnyx, environ 40 fois par an. Chaque citoyen peut prendre la parole et voter. L\'Ecclésia vote les lois, décide de la guerre et de la paix, élit les stratèges et contrôle les magistrats.', sort_order: 2 },
    { article_id: democratie.id, title: 'Les limites de la démocratie athénienne', content: 'La démocratie athénienne exclut les femmes, les métèques (étrangers résidents) et les esclaves. Sur environ 300 000 habitants, seuls 40 000 citoyens mâles adultes participent à la vie politique. Malgré ces limites, Athènes invente un modèle politique qui inspire encore nos démocraties modernes.', sort_order: 3 },

    // Volcans
    { article_id: volcans.id, title: 'Qu\'est-ce qu\'un volcan ?', content: 'Un volcan est une ouverture dans la croûte terrestre par laquelle remontent du magma, des gaz et des cendres. Il se compose d\'une chambre magmatique en profondeur, d\'une cheminée principale et d\'un cratère en surface. On distingue les volcans actifs (en activité récente), dormants et éteints.', sort_order: 1 },
    { article_id: volcans.id, title: 'Les éruptions effusives', content: 'Les éruptions effusives sont caractérisées par des coulées de lave fluide. La lave s\'écoule le long des pentes du volcan, souvent lentement. C\'est le type d\'éruption du Piton de la Fournaise (La Réunion) et du Kilauea (Hawaï). Ces éruptions sont généralement moins dangereuses.', sort_order: 2 },
    { article_id: volcans.id, title: 'Les éruptions explosives', content: 'Les éruptions explosives projettent des cendres, des bombes volcaniques et des nuées ardentes. Le magma, très visqueux, s\'accumule dans la cheminée et provoque des explosions violentes. L\'éruption du Vésuve en 79 apr. J.-C. (destruction de Pompéi) et celle du mont Saint Helens en 1980 sont des exemples célèbres.', sort_order: 3 },
  ]);
}
