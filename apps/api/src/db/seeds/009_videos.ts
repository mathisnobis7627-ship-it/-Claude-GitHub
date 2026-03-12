import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('video_chapters').del();
  await knex('videos').del();

  const levels = await knex('school_levels').select('id', 'slug');
  const getLevelId = (slug: string) => levels.find((l: any) => l.slug === slug)?.id;

  const videos = await knex('videos')
    .insert([
      {
        title: 'La Révolution française en 10 minutes',
        slug: 'revolution-francaise-10-minutes',
        description: 'Résumé animé de la Révolution française : des causes profondes à la chute de Robespierre.',
        youtube_id: 'dQw4w9WgXcQ',
        duration_seconds: 620,
        thumbnail_url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        category: 'histoire',
        subcategory: 'Révolution française',
        difficulty_level: 'debutant',
        level_id: getLevelId('4eme'),
        tags: JSON.stringify(['Révolution', 'France', '1789', 'Bastille']),
      },
      {
        title: 'Comment fonctionnent les volcans ?',
        slug: 'comment-fonctionnent-volcans',
        description: 'Explication claire et illustrée du fonctionnement des volcans : magma, éruptions et tectonique des plaques.',
        youtube_id: 'dQw4w9WgXcQ',
        duration_seconds: 480,
        thumbnail_url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        category: 'geologie',
        subcategory: 'Volcans',
        difficulty_level: 'debutant',
        level_id: getLevelId('6eme'),
        tags: JSON.stringify(['Volcans', 'Éruptions', 'Géologie', 'Terre']),
      },
      {
        title: 'Les Lumières : Voltaire, Rousseau, Montesquieu',
        slug: 'lumieres-philosophes',
        description: 'Découvrez les grandes idées des philosophes des Lumières et leur impact sur la société moderne.',
        youtube_id: 'dQw4w9WgXcQ',
        duration_seconds: 900,
        thumbnail_url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        category: 'histoire',
        subcategory: 'Philosophie',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('4eme'),
        tags: JSON.stringify(['Lumières', 'Philosophie', 'XVIIIe siècle', 'Voltaire']),
      },
      {
        title: 'Le système solaire expliqué',
        slug: 'systeme-solaire-explique',
        description: 'Voyage à travers le système solaire : les 8 planètes, les astéroïdes et les comètes.',
        youtube_id: 'dQw4w9WgXcQ',
        duration_seconds: 720,
        thumbnail_url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        category: 'sciences',
        subcategory: 'Astronomie',
        difficulty_level: 'debutant',
        level_id: getLevelId('6eme'),
        tags: JSON.stringify(['Système solaire', 'Planètes', 'Astronomie', 'Espace']),
      },
      {
        title: 'La Première Guerre mondiale : causes et déroulement',
        slug: 'premiere-guerre-mondiale-video',
        description: 'Analyse complète des causes, du déroulement et des conséquences de la Grande Guerre.',
        youtube_id: 'dQw4w9WgXcQ',
        duration_seconds: 1200,
        thumbnail_url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        category: 'histoire',
        subcategory: 'Guerres mondiales',
        difficulty_level: 'avance',
        level_id: getLevelId('3eme'),
        tags: JSON.stringify(['Première Guerre mondiale', 'Tranchées', '1914-1918', 'Verdun']),
      },
      {
        title: 'La démocratie athénienne',
        slug: 'democratie-athenienne-video',
        description: 'Comment fonctionnait la démocratie dans l\'Athènes antique ? Qui pouvait voter et participer ?',
        youtube_id: 'dQw4w9WgXcQ',
        duration_seconds: 540,
        thumbnail_url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        category: 'histoire',
        subcategory: 'Antiquité',
        difficulty_level: 'debutant',
        level_id: getLevelId('6eme'),
        tags: JSON.stringify(['Grèce antique', 'Démocratie', 'Athènes', 'Politique']),
      },
    ])
    .returning('*');

  const revVideo = videos.find((v: any) => v.slug === 'revolution-francaise-10-minutes');
  const volcanVideo = videos.find((v: any) => v.slug === 'comment-fonctionnent-volcans');
  const ww1Video = videos.find((v: any) => v.slug === 'premiere-guerre-mondiale-video');

  await knex('video_chapters').insert([
    // Révolution française
    { video_id: revVideo.id, title: 'Introduction : la France en 1789', start_seconds: 0, end_seconds: 60, sort_order: 1 },
    { video_id: revVideo.id, title: 'Les causes de la Révolution', start_seconds: 60, end_seconds: 180, sort_order: 2 },
    { video_id: revVideo.id, title: 'La prise de la Bastille', start_seconds: 180, end_seconds: 300, sort_order: 3 },
    { video_id: revVideo.id, title: 'La Déclaration des droits de l\'homme', start_seconds: 300, end_seconds: 420, sort_order: 4 },
    { video_id: revVideo.id, title: 'La Terreur et la fin de la Révolution', start_seconds: 420, end_seconds: 620, sort_order: 5 },

    // Volcans
    { video_id: volcanVideo.id, title: 'Qu\'est-ce qu\'un volcan ?', start_seconds: 0, end_seconds: 120, sort_order: 1 },
    { video_id: volcanVideo.id, title: 'Le magma et la chambre magmatique', start_seconds: 120, end_seconds: 240, sort_order: 2 },
    { video_id: volcanVideo.id, title: 'Éruptions effusives vs explosives', start_seconds: 240, end_seconds: 360, sort_order: 3 },
    { video_id: volcanVideo.id, title: 'Les volcans célèbres', start_seconds: 360, end_seconds: 480, sort_order: 4 },

    // WWI
    { video_id: ww1Video.id, title: 'Le contexte européen en 1914', start_seconds: 0, end_seconds: 200, sort_order: 1 },
    { video_id: ww1Video.id, title: 'L\'attentat de Sarajevo', start_seconds: 200, end_seconds: 350, sort_order: 2 },
    { video_id: ww1Video.id, title: 'La guerre des tranchées', start_seconds: 350, end_seconds: 600, sort_order: 3 },
    { video_id: ww1Video.id, title: 'Verdun et la Somme', start_seconds: 600, end_seconds: 850, sort_order: 4 },
    { video_id: ww1Video.id, title: 'L\'armistice et les conséquences', start_seconds: 850, end_seconds: 1200, sort_order: 5 },
  ]);
}
