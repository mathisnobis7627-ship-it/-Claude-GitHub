import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('historical_periods').del();

  await knex('historical_periods').insert([
    {
      name: 'Préhistoire',
      slug: 'prehistoire',
      description:
        'Période allant de l\'apparition des premiers hominidés à l\'invention de l\'écriture, vers 3 300 av. J.-C.',
      year_start: -3000000,
      year_end: -3300,
      era: 'prehistoire',
      color_hex: '#8B4513',
    },
    {
      name: 'Antiquité',
      slug: 'antiquite',
      description:
        'Période allant de l\'invention de l\'écriture à la chute de l\'Empire romain d\'Occident en 476 apr. J.-C.',
      year_start: -3300,
      year_end: 476,
      era: 'antiquite',
      color_hex: '#DAA520',
    },
    {
      name: 'Moyen Âge',
      slug: 'moyen-age',
      description:
        'Période allant de la chute de l\'Empire romain d\'Occident en 476 à la prise de Constantinople en 1453.',
      year_start: 476,
      year_end: 1453,
      era: 'moyen_age',
      color_hex: '#4A0E0E',
    },
    {
      name: 'Renaissance',
      slug: 'renaissance',
      description:
        'Mouvement culturel et artistique né en Italie au XIVe siècle et qui s\'étend jusqu\'au début du XVIIe siècle.',
      year_start: 1453,
      year_end: 1610,
      era: 'renaissance',
      color_hex: '#2E8B57',
    },
    {
      name: 'Temps modernes',
      slug: 'temps-modernes',
      description:
        'Période allant de la Renaissance à la Révolution française de 1789.',
      year_start: 1610,
      year_end: 1789,
      era: 'temps_modernes',
      color_hex: '#4169E1',
    },
    {
      name: 'Époque contemporaine',
      slug: 'epoque-contemporaine',
      description:
        'Période allant de la Révolution française de 1789 à nos jours.',
      year_start: 1789,
      year_end: null,
      era: 'epoque_contemporaine',
      color_hex: '#DC143C',
    },
  ]);
}
