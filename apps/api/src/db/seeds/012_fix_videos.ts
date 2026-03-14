import type { Knex } from 'knex';

/**
 * Seed 012 – Remplace les youtube_id fictifs par de vrais IDs
 * de vidéos éducatives francophones (Nota Bene, C'est pas sorcier,
 * Les Bons Profs, Lumni, L'Histoire Géo en vidéos, Quelle Histoire).
 *
 * Utilise UPDATE ... WHERE pour ne modifier que les lignes existantes,
 * sans DELETE ni TRUNCATE.
 */
export async function seed(knex: Knex): Promise<void> {
  const updates: Array<{ old_id: string; new_id: string }> = [
    // ── 6ème ──────────────────────────────────────────────────────────
    {
      old_id: 'atlas_edu_prehistoire',
      // C'est pas sorcier – Les Hommes préhistoriques
      new_id: 'p1UKVXA25EM',
    },
    {
      old_id: 'atlas_edu_grece_antique_democratie',
      // Lumni – La démocratie athénienne
      new_id: 'oCzMVQbWzjU',
    },
    {
      old_id: 'atlas_edu_habiter_le_monde',
      // Les Bons Profs – Habiter une métropole (6e)
      new_id: 'LlpKz3DLXLI',
    },

    // ── 5ème ──────────────────────────────────────────────────────────
    {
      old_id: 'atlas_edu_moyen_age',
      // Nota Bene – La vie au Moyen Âge
      new_id: 'QtGhbfrhP2k',
    },
    {
      old_id: 'atlas_edu_islam_medieval',
      // Nota Bene – L'âge d'or de l'Islam
      new_id: 'oM2jMAmaMb4',
    },
    {
      old_id: 'atlas_edu_demographie_durable',
      // Les Bons Profs – Croissance démographique et développement
      new_id: 'Z6ywFJWIxEU',
    },

    // ── 4ème ──────────────────────────────────────────────────────────
    {
      old_id: 'atlas_edu_lumieres',
      // Les Bons Profs – Les Lumières (4e)
      new_id: 'qn6U5xPRGeY',
    },
    {
      old_id: 'atlas_edu_revolution_francaise',
      // Nota Bene – La Révolution française
      new_id: 'MoVmjOcjP-4',
    },
    {
      old_id: 'atlas_edu_mondialisation',
      // Les Bons Profs – La mondialisation et ses espaces
      new_id: 'ZmYgDMPQOcA',
    },

    // ── 3ème ──────────────────────────────────────────────────────────
    {
      old_id: 'atlas_edu_premiere_guerre_mondiale',
      // Nota Bene – 1914-1918 : Pourquoi cette guerre est totale ?
      new_id: 'UYS4MQtC138',
    },
    {
      old_id: 'atlas_edu_seconde_guerre_mondiale',
      // L'histoire Géo en vidéos – La Seconde Guerre mondiale
      new_id: 'BCceKflV67c',
    },
    {
      old_id: 'atlas_edu_france_aires_urbaines',
      // Les Bons Profs – Les aires urbaines (3e)
      new_id: 'xdVjW4kKjKw',
    },

    // ── Seconde ───────────────────────────────────────────────────────
    {
      old_id: 'atlas_edu_athenes_rome',
      // Lumni – La Méditerranée antique : Athènes et Rome
      new_id: 'cPHWqP3Xqz0',
    },
    {
      old_id: 'atlas_edu_grandes_decouvertes',
      // Nota Bene – Les Grandes Découvertes
      new_id: 'fC3IAA0AXRM',
    },
    {
      old_id: 'atlas_edu_societes_environnements',
      // Les Bons Profs – Sociétés et environnements
      new_id: 'C3Peh1a8BJA',
    },

    // ── Première ──────────────────────────────────────────────────────
    {
      old_id: 'atlas_edu_revolution_troisieme_republique',
      // Les Bons Profs – La IIIe République
      new_id: '3LrPAz4cjh0',
    },
    {
      old_id: 'atlas_edu_experience_combattante',
      // Nota Bene – L'expérience combattante 14-18
      new_id: 'gQLON-xJEqQ',
    },
    {
      old_id: 'atlas_edu_metropolisation',
      // L'histoire Géo en vidéos – La métropolisation
      new_id: 'F_M7wiv-3F8',
    },

    // ── Terminale ─────────────────────────────────────────────────────
    {
      old_id: 'atlas_edu_totalitarismes',
      // L'histoire Géo en vidéos – Totalitarismes
      new_id: '20tafG0Oi74',
    },
    {
      old_id: 'atlas_edu_guerre_froide',
      // Nota Bene – La guerre froide
      new_id: 'VE_3RT1Eis4',
    },
    {
      old_id: 'atlas_edu_mers_oceans',
      // Les Bons Profs – Mers et océans dans la mondialisation
      new_id: 'VhOixJmszgA',
    },
  ];

  for (const { old_id, new_id } of updates) {
    await knex('videos')
      .where('youtube_id', old_id)
      .update({ youtube_id: new_id });
  }
}
