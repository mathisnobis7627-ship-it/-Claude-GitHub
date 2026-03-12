import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('curriculum_lessons').del();
  await knex('curriculum_chapters').del();
  await knex('subjects').del();

  // Create subjects
  const subjects = await knex('subjects')
    .insert([
      { name: 'Histoire', slug: 'histoire', icon: '📜' },
      { name: 'Géographie', slug: 'geographie', icon: '🌍' },
      { name: 'Sciences de la Vie et de la Terre', slug: 'svt', icon: '🧬' },
      { name: 'Enseignement Moral et Civique', slug: 'emc', icon: '⚖️' },
    ])
    .returning('*');

  const histoire = subjects.find((s: any) => s.slug === 'histoire');
  const geo = subjects.find((s: any) => s.slug === 'geographie');
  const svt = subjects.find((s: any) => s.slug === 'svt');

  // Get school levels
  const levels = await knex('school_levels').select('id', 'slug');
  const getLevelId = (slug: string) => levels.find((l: any) => l.slug === slug)?.id;

  // 6ème chapters
  const chapters = await knex('curriculum_chapters')
    .insert([
      // 6ème - Histoire
      {
        level_id: getLevelId('6eme'),
        subject_id: histoire.id,
        title: 'Les débuts de l\'humanité',
        slug: '6eme-debuts-humanite',
        description: 'Comment les premiers humains ont-ils peuplé la Terre ?',
        objectives: JSON.stringify(['Situer les origines de l\'humanité', 'Décrire le mode de vie des premiers humains', 'Comprendre la notion de Préhistoire']),
        key_concepts: JSON.stringify(['Homo sapiens', 'Outils préhistoriques', 'Art pariétal', 'Migration']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('6eme'),
        subject_id: histoire.id,
        title: 'La « révolution » néolithique',
        slug: '6eme-revolution-neolithique',
        description: 'Comment les sociétés humaines se sont-elles transformées au Néolithique ?',
        objectives: JSON.stringify(['Comprendre le passage de la chasse-cueillette à l\'agriculture', 'Expliquer la sédentarisation', 'Décrire les premières villes']),
        key_concepts: JSON.stringify(['Agriculture', 'Sédentarisation', 'Élevage', 'Premiers villages']),
        sort_order: 2,
      },
      {
        level_id: getLevelId('6eme'),
        subject_id: histoire.id,
        title: 'Premiers États, premières écritures',
        slug: '6eme-premiers-etats-ecritures',
        description: 'Comment naissent les premiers États et les premières écritures en Mésopotamie et en Égypte ?',
        objectives: JSON.stringify(['Situer la Mésopotamie et l\'Égypte', 'Expliquer la naissance de l\'écriture', 'Décrire l\'organisation des premiers États']),
        key_concepts: JSON.stringify(['Mésopotamie', 'Écriture cunéiforme', 'Hiéroglyphes', 'Pharaon']),
        sort_order: 3,
      },
      // 6ème - Géographie
      {
        level_id: getLevelId('6eme'),
        subject_id: geo.id,
        title: 'Habiter une métropole',
        slug: '6eme-habiter-metropole',
        description: 'Comment les habitants vivent-ils dans une grande ville ?',
        objectives: JSON.stringify(['Décrire une métropole', 'Comparer des métropoles du monde', 'Comprendre les défis urbains']),
        key_concepts: JSON.stringify(['Métropole', 'Urbanisation', 'Centre-ville', 'Banlieue']),
        sort_order: 1,
      },

      // 5ème - Histoire
      {
        level_id: getLevelId('5eme'),
        subject_id: histoire.id,
        title: 'Byzance et l\'Europe carolingienne',
        slug: '5eme-byzance-carolingiens',
        description: 'Comment les empires byzantin et carolingien se partagent-ils l\'héritage romain ?',
        objectives: JSON.stringify(['Caractériser l\'Empire byzantin', 'Décrire l\'Empire carolingien', 'Comparer les deux héritages romains']),
        key_concepts: JSON.stringify(['Constantinople', 'Charlemagne', 'Christianisme', 'Empire']),
        sort_order: 1,
      },
      {
        level_id: getLevelId('5eme'),
        subject_id: histoire.id,
        title: 'L\'Islam : débuts, expansion, sociétés',
        slug: '5eme-islam-expansion',
        description: 'Comment naît et se développe la civilisation islamique ?',
        objectives: JSON.stringify(['Raconter la naissance de l\'Islam', 'Décrire l\'expansion arabo-musulmane', 'Présenter la civilisation islamique']),
        key_concepts: JSON.stringify(['Muhammad', 'Coran', 'Califat', 'Mosquée']),
        sort_order: 2,
      },

      // 4ème - Histoire
      {
        level_id: getLevelId('4eme'),
        subject_id: histoire.id,
        title: 'Le XVIIIe siècle, expansions, Lumières et révolutions',
        slug: '4eme-18e-siecle-lumieres',
        description: 'Comment les idées des Lumières transforment-elles les sociétés au XVIIIe siècle ?',
        objectives: JSON.stringify(['Comprendre les idées des Lumières', 'Analyser les causes des révolutions', 'Étudier la Révolution française']),
        key_concepts: JSON.stringify(['Lumières', 'Encyclopédie', 'Révolution française', 'Droits de l\'homme']),
        sort_order: 1,
      },

      // 3ème - Histoire
      {
        level_id: getLevelId('3eme'),
        subject_id: histoire.id,
        title: 'L\'Europe, un théâtre majeur des guerres totales',
        slug: '3eme-guerres-totales',
        description: 'Comment les deux guerres mondiales ont-elles transformé l\'Europe et le monde ?',
        objectives: JSON.stringify(['Comprendre la notion de guerre totale', 'Analyser les causes et conséquences des guerres mondiales', 'Étudier les génocides']),
        key_concepts: JSON.stringify(['Guerre totale', 'Tranchées', 'Shoah', 'Résistance']),
        sort_order: 1,
      },

      // Seconde - Histoire
      {
        level_id: getLevelId('seconde'),
        subject_id: histoire.id,
        title: 'Le monde méditerranéen : empreintes de l\'Antiquité et du Moyen Âge',
        slug: 'seconde-monde-mediterraneen',
        description: 'Comment l\'Antiquité et le Moyen Âge ont-ils façonné le monde méditerranéen ?',
        objectives: JSON.stringify(['Comprendre l\'héritage de la Grèce antique', 'Analyser la Rome antique', 'Étudier la Méditerranée médiévale']),
        key_concepts: JSON.stringify(['Démocratie athénienne', 'République romaine', 'Croisades', 'Échanges méditerranéens']),
        sort_order: 1,
      },

      // 6ème - SVT
      {
        level_id: getLevelId('6eme'),
        subject_id: svt.id,
        title: 'La planète Terre et l\'environnement',
        slug: '6eme-planete-terre',
        description: 'Quelles sont les caractéristiques de la Terre et comment fonctionne son environnement ?',
        objectives: JSON.stringify(['Situer la Terre dans le système solaire', 'Comprendre les conditions de la vie', 'Décrire les enveloppes terrestres']),
        key_concepts: JSON.stringify(['Système solaire', 'Atmosphère', 'Hydrosphère', 'Biosphère']),
        sort_order: 1,
      },
    ])
    .returning('*');

  // Lessons for first chapters
  const debHumanite = chapters.find((c: any) => c.slug === '6eme-debuts-humanite');
  const revNeo = chapters.find((c: any) => c.slug === '6eme-revolution-neolithique');
  const lumieres = chapters.find((c: any) => c.slug === '4eme-18e-siecle-lumieres');

  await knex('curriculum_lessons').insert([
    // Débuts humanité
    {
      chapter_id: debHumanite.id,
      title: 'Les origines de l\'humanité en Afrique',
      content: 'L\'humanité est née en Afrique. Les plus anciens fossiles d\'Homo sapiens, datés d\'environ 300 000 ans, ont été découverts au Maroc (Jebel Irhoud). Nos ancêtres ont ensuite migré vers tous les continents, d\'abord vers le Proche-Orient (100 000 ans), puis vers l\'Europe, l\'Asie et l\'Océanie.',
      summary: 'Les premiers humains apparaissent en Afrique et migrent progressivement vers tous les continents.',
      key_dates: JSON.stringify([{ date: '-300 000 ans', event: 'Premiers Homo sapiens' }, { date: '-100 000 ans', event: 'Sortie d\'Afrique' }]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([{ term: 'Homo sapiens', definition: 'Espèce humaine actuelle' }, { term: 'Paléolithique', definition: 'Période de la pierre taillée' }, { term: 'Nomade', definition: 'Qui se déplace régulièrement' }]),
      sort_order: 1,
    },
    {
      chapter_id: debHumanite.id,
      title: 'Le mode de vie au Paléolithique',
      content: 'Au Paléolithique, les humains sont des chasseurs-cueilleurs nomades. Ils vivent en petits groupes, fabriquent des outils en pierre (bifaces, grattoirs), maîtrisent le feu et pratiquent l\'art pariétal (peintures rupestres de Lascaux, vers -18 000 ans).',
      summary: 'Les humains du Paléolithique sont des chasseurs-cueilleurs qui maîtrisent le feu et créent l\'art pariétal.',
      key_dates: JSON.stringify([{ date: '-400 000 ans', event: 'Maîtrise du feu' }, { date: '-18 000 ans', event: 'Peintures de Lascaux' }]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([{ term: 'Art pariétal', definition: 'Art réalisé sur les parois des grottes' }, { term: 'Biface', definition: 'Outil en pierre taillé sur deux faces' }]),
      sort_order: 2,
    },

    // Révolution néolithique
    {
      chapter_id: revNeo.id,
      title: 'La naissance de l\'agriculture',
      content: 'Vers 10 000 av. J.-C., dans le Croissant fertile (Mésopotamie), les humains commencent à domestiquer des plantes (blé, orge) et des animaux (mouton, chèvre). C\'est la « révolution néolithique ». L\'agriculture se diffuse ensuite en Europe, en Asie et en Afrique.',
      summary: 'L\'agriculture naît vers 10 000 av. J.-C. dans le Croissant fertile et transforme les sociétés humaines.',
      key_dates: JSON.stringify([{ date: '-10 000', event: 'Début de l\'agriculture au Proche-Orient' }]),
      key_figures: JSON.stringify([]),
      vocabulary: JSON.stringify([{ term: 'Néolithique', definition: 'Période de la pierre polie, marquée par l\'agriculture' }, { term: 'Croissant fertile', definition: 'Région du Proche-Orient en forme de croissant' }]),
      sort_order: 1,
    },

    // Lumières
    {
      chapter_id: lumieres.id,
      title: 'Les philosophes des Lumières',
      content: 'Au XVIIIe siècle, des philosophes remettent en question l\'absolutisme royal et les préjugés. Voltaire défend la tolérance et la liberté d\'expression. Montesquieu propose la séparation des pouvoirs. Rousseau théorise le contrat social et la souveraineté du peuple. Diderot et d\'Alembert publient l\'Encyclopédie, somme des connaissances de l\'époque.',
      summary: 'Les philosophes des Lumières promeuvent la raison, la tolérance et la liberté contre l\'absolutisme.',
      key_dates: JSON.stringify([{ date: '1748', event: 'L\'Esprit des lois (Montesquieu)' }, { date: '1751', event: 'Premier tome de l\'Encyclopédie' }, { date: '1762', event: 'Du contrat social (Rousseau)' }]),
      key_figures: JSON.stringify(['Voltaire', 'Montesquieu', 'Rousseau', 'Diderot']),
      vocabulary: JSON.stringify([{ term: 'Lumières', definition: 'Mouvement intellectuel prônant la raison et le progrès' }, { term: 'Encyclopédie', definition: 'Dictionnaire raisonné des sciences, des arts et des métiers' }]),
      sort_order: 1,
    },
    {
      chapter_id: lumieres.id,
      title: 'La Révolution française (1789)',
      content: 'La crise financière et sociale pousse Louis XVI à convoquer les États généraux en mai 1789. Le tiers état se proclame Assemblée nationale. Le 14 juillet 1789, le peuple de Paris prend la Bastille. Le 26 août, la Déclaration des droits de l\'homme et du citoyen est adoptée, affirmant l\'égalité et la liberté.',
      summary: 'La Révolution française de 1789 met fin à l\'Ancien Régime et proclame les droits de l\'homme.',
      key_dates: JSON.stringify([{ date: '5 mai 1789', event: 'Ouverture des États généraux' }, { date: '14 juillet 1789', event: 'Prise de la Bastille' }, { date: '26 août 1789', event: 'Déclaration des droits de l\'homme' }]),
      key_figures: JSON.stringify(['Louis XVI', 'Mirabeau', 'La Fayette', 'Robespierre']),
      vocabulary: JSON.stringify([{ term: 'Ancien Régime', definition: 'Système politique et social de la France avant 1789' }, { term: 'Tiers état', definition: 'Troisième ordre composé de la majorité de la population' }]),
      sort_order: 2,
    },
  ]);
}
