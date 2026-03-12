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
        title: 'Les grandes dates de l\'histoire de France',
        slug: 'grandes-dates-histoire-france',
        description: 'Testez vos connaissances sur les événements majeurs de l\'histoire de France, de Clovis à la Ve République.',
        category: 'histoire',
        subcategory: 'France',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('4eme'),
        time_limit_seconds: 600,
        question_count: 5,
      },
      {
        title: 'Géographie de l\'Europe',
        slug: 'geographie-europe',
        description: 'Capitales, fleuves, montagnes : connaissez-vous bien la géographie de l\'Europe ?',
        category: 'geographie',
        subcategory: 'Europe',
        difficulty_level: 'debutant',
        level_id: getLevelId('6eme'),
        time_limit_seconds: 480,
        question_count: 5,
      },
      {
        title: 'Les grands scientifiques',
        slug: 'grands-scientifiques',
        description: 'De Galilée à Einstein, que savez-vous des grandes figures de la science ?',
        category: 'sciences',
        subcategory: 'Personnalités',
        difficulty_level: 'intermediaire',
        level_id: getLevelId('3eme'),
        time_limit_seconds: 600,
        question_count: 5,
      },
      {
        title: 'La Première Guerre mondiale',
        slug: 'quiz-premiere-guerre-mondiale',
        description: 'Évaluez vos connaissances sur la Grande Guerre (1914-1918).',
        category: 'histoire',
        subcategory: 'Guerres',
        difficulty_level: 'avance',
        level_id: getLevelId('3eme'),
        time_limit_seconds: 720,
        question_count: 5,
      },
    ])
    .returning('*');

  const histFrance = quizzes.find((q: any) => q.slug === 'grandes-dates-histoire-france');
  const geoEurope = quizzes.find((q: any) => q.slug === 'geographie-europe');
  const scientifiques = quizzes.find((q: any) => q.slug === 'grands-scientifiques');
  const ww1 = quizzes.find((q: any) => q.slug === 'quiz-premiere-guerre-mondiale');

  // ── Quiz 1: Histoire de France ──
  const q1Questions = await knex('quiz_questions')
    .insert([
      {
        quiz_id: histFrance.id,
        question_text: 'En quelle année la Bastille a-t-elle été prise ?',
        question_type: 'qcm',
        explanation: 'La prise de la Bastille le 14 juillet 1789 est l\'événement déclencheur de la Révolution française.',
        sort_order: 1,
        points: 1,
      },
      {
        quiz_id: histFrance.id,
        question_text: 'Quel roi a été sacré empereur en l\'an 800 ?',
        question_type: 'qcm',
        explanation: 'Charlemagne a été sacré empereur par le pape Léon III le 25 décembre 800 à Rome.',
        sort_order: 2,
        points: 1,
      },
      {
        quiz_id: histFrance.id,
        question_text: 'Napoléon a gagné la bataille de Waterloo.',
        question_type: 'vrai_faux',
        explanation: 'Napoléon a PERDU la bataille de Waterloo le 18 juin 1815, ce qui a mis fin à l\'Empire.',
        sort_order: 3,
        points: 1,
      },
      {
        quiz_id: histFrance.id,
        question_text: 'Qui a promulgué l\'édit de Nantes en 1598 ?',
        question_type: 'qcm',
        explanation: 'Henri IV a promulgué l\'édit de Nantes le 30 avril 1598, accordant la liberté de culte aux protestants.',
        sort_order: 4,
        points: 1,
      },
      {
        quiz_id: histFrance.id,
        question_text: 'En quelle année la Ve République a-t-elle été fondée ?',
        question_type: 'qcm',
        explanation: 'La Ve République a été fondée par Charles de Gaulle en 1958 avec une nouvelle Constitution.',
        sort_order: 5,
        points: 1,
      },
    ])
    .returning('*');

  await knex('quiz_options').insert([
    // Q1: Bastille
    { question_id: q1Questions[0].id, option_text: '1789', is_correct: true, sort_order: 1 },
    { question_id: q1Questions[0].id, option_text: '1799', is_correct: false, sort_order: 2 },
    { question_id: q1Questions[0].id, option_text: '1776', is_correct: false, sort_order: 3 },
    { question_id: q1Questions[0].id, option_text: '1815', is_correct: false, sort_order: 4 },
    // Q2: Charlemagne
    { question_id: q1Questions[1].id, option_text: 'Charlemagne', is_correct: true, sort_order: 1 },
    { question_id: q1Questions[1].id, option_text: 'Clovis', is_correct: false, sort_order: 2 },
    { question_id: q1Questions[1].id, option_text: 'Louis IX', is_correct: false, sort_order: 3 },
    { question_id: q1Questions[1].id, option_text: 'Hugues Capet', is_correct: false, sort_order: 4 },
    // Q3: Waterloo (vrai_faux)
    { question_id: q1Questions[2].id, option_text: 'Vrai', is_correct: false, sort_order: 1 },
    { question_id: q1Questions[2].id, option_text: 'Faux', is_correct: true, sort_order: 2 },
    // Q4: Édit de Nantes
    { question_id: q1Questions[3].id, option_text: 'Henri IV', is_correct: true, sort_order: 1 },
    { question_id: q1Questions[3].id, option_text: 'Louis XIV', is_correct: false, sort_order: 2 },
    { question_id: q1Questions[3].id, option_text: 'François Ier', is_correct: false, sort_order: 3 },
    { question_id: q1Questions[3].id, option_text: 'Henri III', is_correct: false, sort_order: 4 },
    // Q5: Ve République
    { question_id: q1Questions[4].id, option_text: '1958', is_correct: true, sort_order: 1 },
    { question_id: q1Questions[4].id, option_text: '1946', is_correct: false, sort_order: 2 },
    { question_id: q1Questions[4].id, option_text: '1962', is_correct: false, sort_order: 3 },
    { question_id: q1Questions[4].id, option_text: '1969', is_correct: false, sort_order: 4 },
  ]);

  // ── Quiz 2: Géographie Europe ──
  const q2Questions = await knex('quiz_questions')
    .insert([
      {
        quiz_id: geoEurope.id,
        question_text: 'Quelle est la capitale de l\'Allemagne ?',
        question_type: 'qcm',
        explanation: 'Berlin est la capitale de l\'Allemagne depuis la réunification en 1990.',
        sort_order: 1,
        points: 1,
      },
      {
        quiz_id: geoEurope.id,
        question_text: 'Quel est le plus long fleuve d\'Europe ?',
        question_type: 'qcm',
        explanation: 'La Volga, en Russie, est le plus long fleuve d\'Europe avec 3 690 km.',
        sort_order: 2,
        points: 1,
      },
      {
        quiz_id: geoEurope.id,
        question_text: 'Le Mont-Blanc est le plus haut sommet d\'Europe.',
        question_type: 'vrai_faux',
        explanation: 'Le Mont-Blanc (4 808 m) est le plus haut sommet d\'Europe occidentale, mais l\'Elbrouz (5 642 m) dans le Caucase est considéré comme le plus haut d\'Europe.',
        sort_order: 3,
        points: 1,
      },
      {
        quiz_id: geoEurope.id,
        question_text: 'Quel pays européen a la plus grande superficie ?',
        question_type: 'qcm',
        explanation: 'La France (avec ses territoires d\'outre-mer) est le plus grand pays de l\'UE, mais en Europe totale, la Russie est de loin la plus grande.',
        sort_order: 4,
        points: 1,
      },
      {
        quiz_id: geoEurope.id,
        question_text: 'Quelle mer sépare l\'Europe de l\'Afrique ?',
        question_type: 'qcm',
        explanation: 'La mer Méditerranée sépare l\'Europe de l\'Afrique, avec un point le plus étroit au détroit de Gibraltar (14 km).',
        sort_order: 5,
        points: 1,
      },
    ])
    .returning('*');

  await knex('quiz_options').insert([
    { question_id: q2Questions[0].id, option_text: 'Berlin', is_correct: true, sort_order: 1 },
    { question_id: q2Questions[0].id, option_text: 'Munich', is_correct: false, sort_order: 2 },
    { question_id: q2Questions[0].id, option_text: 'Hambourg', is_correct: false, sort_order: 3 },
    { question_id: q2Questions[0].id, option_text: 'Francfort', is_correct: false, sort_order: 4 },
    { question_id: q2Questions[1].id, option_text: 'La Volga', is_correct: true, sort_order: 1 },
    { question_id: q2Questions[1].id, option_text: 'Le Danube', is_correct: false, sort_order: 2 },
    { question_id: q2Questions[1].id, option_text: 'Le Rhin', is_correct: false, sort_order: 3 },
    { question_id: q2Questions[1].id, option_text: 'La Loire', is_correct: false, sort_order: 4 },
    { question_id: q2Questions[2].id, option_text: 'Vrai', is_correct: false, sort_order: 1 },
    { question_id: q2Questions[2].id, option_text: 'Faux', is_correct: true, sort_order: 2 },
    { question_id: q2Questions[3].id, option_text: 'La France (UE)', is_correct: true, sort_order: 1 },
    { question_id: q2Questions[3].id, option_text: 'L\'Espagne', is_correct: false, sort_order: 2 },
    { question_id: q2Questions[3].id, option_text: 'L\'Allemagne', is_correct: false, sort_order: 3 },
    { question_id: q2Questions[3].id, option_text: 'La Suède', is_correct: false, sort_order: 4 },
    { question_id: q2Questions[4].id, option_text: 'La mer Méditerranée', is_correct: true, sort_order: 1 },
    { question_id: q2Questions[4].id, option_text: 'La mer du Nord', is_correct: false, sort_order: 2 },
    { question_id: q2Questions[4].id, option_text: 'La mer Noire', is_correct: false, sort_order: 3 },
    { question_id: q2Questions[4].id, option_text: 'La mer Baltique', is_correct: false, sort_order: 4 },
  ]);

  // ── Quiz 3: Scientifiques ──
  const q3Questions = await knex('quiz_questions')
    .insert([
      {
        quiz_id: scientifiques.id,
        question_text: 'Qui a formulé la théorie de la relativité ?',
        question_type: 'qcm',
        explanation: 'Albert Einstein a publié la relativité restreinte en 1905 et la relativité générale en 1915.',
        sort_order: 1,
        points: 1,
      },
      {
        quiz_id: scientifiques.id,
        question_text: 'Marie Curie a reçu deux prix Nobel.',
        question_type: 'vrai_faux',
        explanation: 'Marie Curie a reçu le prix Nobel de physique (1903) et de chimie (1911).',
        sort_order: 2,
        points: 1,
      },
      {
        quiz_id: scientifiques.id,
        question_text: 'Quel scientifique a formulé les lois de la gravitation universelle ?',
        question_type: 'qcm',
        explanation: 'Isaac Newton a publié ses Principia Mathematica en 1687, énonçant la loi de la gravitation universelle.',
        sort_order: 3,
        points: 1,
      },
      {
        quiz_id: scientifiques.id,
        question_text: 'Qui a découvert la pénicilline ?',
        question_type: 'qcm',
        explanation: 'Alexander Fleming a découvert la pénicilline en 1928, révolutionnant la médecine.',
        sort_order: 4,
        points: 1,
      },
      {
        quiz_id: scientifiques.id,
        question_text: 'Quel est l\'élément chimique découvert par Marie Curie ?',
        question_type: 'qcm',
        explanation: 'Marie Curie a découvert deux éléments : le polonium (nommé d\'après la Pologne) et le radium.',
        sort_order: 5,
        points: 1,
      },
    ])
    .returning('*');

  await knex('quiz_options').insert([
    { question_id: q3Questions[0].id, option_text: 'Albert Einstein', is_correct: true, sort_order: 1 },
    { question_id: q3Questions[0].id, option_text: 'Isaac Newton', is_correct: false, sort_order: 2 },
    { question_id: q3Questions[0].id, option_text: 'Galilée', is_correct: false, sort_order: 3 },
    { question_id: q3Questions[0].id, option_text: 'Niels Bohr', is_correct: false, sort_order: 4 },
    { question_id: q3Questions[1].id, option_text: 'Vrai', is_correct: true, sort_order: 1 },
    { question_id: q3Questions[1].id, option_text: 'Faux', is_correct: false, sort_order: 2 },
    { question_id: q3Questions[2].id, option_text: 'Isaac Newton', is_correct: true, sort_order: 1 },
    { question_id: q3Questions[2].id, option_text: 'Galilée', is_correct: false, sort_order: 2 },
    { question_id: q3Questions[2].id, option_text: 'Kepler', is_correct: false, sort_order: 3 },
    { question_id: q3Questions[2].id, option_text: 'Copernic', is_correct: false, sort_order: 4 },
    { question_id: q3Questions[3].id, option_text: 'Alexander Fleming', is_correct: true, sort_order: 1 },
    { question_id: q3Questions[3].id, option_text: 'Louis Pasteur', is_correct: false, sort_order: 2 },
    { question_id: q3Questions[3].id, option_text: 'Robert Koch', is_correct: false, sort_order: 3 },
    { question_id: q3Questions[3].id, option_text: 'Edward Jenner', is_correct: false, sort_order: 4 },
    { question_id: q3Questions[4].id, option_text: 'Le radium', is_correct: true, sort_order: 1 },
    { question_id: q3Questions[4].id, option_text: 'L\'uranium', is_correct: false, sort_order: 2 },
    { question_id: q3Questions[4].id, option_text: 'Le thorium', is_correct: false, sort_order: 3 },
    { question_id: q3Questions[4].id, option_text: 'Le césium', is_correct: false, sort_order: 4 },
  ]);

  // ── Quiz 4: Première Guerre mondiale ──
  const q4Questions = await knex('quiz_questions')
    .insert([
      {
        quiz_id: ww1.id,
        question_text: 'Quel événement déclenche la Première Guerre mondiale ?',
        question_type: 'qcm',
        explanation: 'L\'assassinat de l\'archiduc François-Ferdinand d\'Autriche à Sarajevo le 28 juin 1914 est l\'événement déclencheur.',
        sort_order: 1,
        points: 2,
      },
      {
        quiz_id: ww1.id,
        question_text: 'Quelle bataille symbolise la guerre des tranchées ?',
        question_type: 'qcm',
        explanation: 'La bataille de Verdun (février-décembre 1916) est le symbole de la guerre des tranchées avec 700 000 victimes.',
        sort_order: 2,
        points: 2,
      },
      {
        quiz_id: ww1.id,
        question_text: 'Les États-Unis sont entrés en guerre en 1914.',
        question_type: 'vrai_faux',
        explanation: 'Les États-Unis sont entrés en guerre le 6 avril 1917, pas en 1914.',
        sort_order: 3,
        points: 1,
      },
      {
        quiz_id: ww1.id,
        question_text: 'Quel traité met fin à la Première Guerre mondiale avec l\'Allemagne ?',
        question_type: 'qcm',
        explanation: 'Le traité de Versailles, signé le 28 juin 1919, met fin à la guerre avec l\'Allemagne.',
        sort_order: 4,
        points: 2,
      },
      {
        quiz_id: ww1.id,
        question_text: 'Combien de morts la Première Guerre mondiale a-t-elle causé approximativement ?',
        question_type: 'qcm',
        explanation: 'La Grande Guerre a causé environ 18 millions de morts (militaires et civils).',
        sort_order: 5,
        points: 1,
      },
    ])
    .returning('*');

  await knex('quiz_options').insert([
    { question_id: q4Questions[0].id, option_text: 'L\'assassinat de François-Ferdinand', is_correct: true, sort_order: 1 },
    { question_id: q4Questions[0].id, option_text: 'L\'invasion de la Belgique', is_correct: false, sort_order: 2 },
    { question_id: q4Questions[0].id, option_text: 'Le naufrage du Lusitania', is_correct: false, sort_order: 3 },
    { question_id: q4Questions[0].id, option_text: 'La crise de Tanger', is_correct: false, sort_order: 4 },
    { question_id: q4Questions[1].id, option_text: 'Verdun', is_correct: true, sort_order: 1 },
    { question_id: q4Questions[1].id, option_text: 'La Marne', is_correct: false, sort_order: 2 },
    { question_id: q4Questions[1].id, option_text: 'La Somme', is_correct: false, sort_order: 3 },
    { question_id: q4Questions[1].id, option_text: 'Ypres', is_correct: false, sort_order: 4 },
    { question_id: q4Questions[2].id, option_text: 'Vrai', is_correct: false, sort_order: 1 },
    { question_id: q4Questions[2].id, option_text: 'Faux', is_correct: true, sort_order: 2 },
    { question_id: q4Questions[3].id, option_text: 'Traité de Versailles', is_correct: true, sort_order: 1 },
    { question_id: q4Questions[3].id, option_text: 'Traité de Trianon', is_correct: false, sort_order: 2 },
    { question_id: q4Questions[3].id, option_text: 'Traité de Saint-Germain', is_correct: false, sort_order: 3 },
    { question_id: q4Questions[3].id, option_text: 'Traité de Sèvres', is_correct: false, sort_order: 4 },
    { question_id: q4Questions[4].id, option_text: '18 millions', is_correct: true, sort_order: 1 },
    { question_id: q4Questions[4].id, option_text: '5 millions', is_correct: false, sort_order: 2 },
    { question_id: q4Questions[4].id, option_text: '40 millions', is_correct: false, sort_order: 3 },
    { question_id: q4Questions[4].id, option_text: '70 millions', is_correct: false, sort_order: 4 },
  ]);
}
