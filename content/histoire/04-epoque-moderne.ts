/**
 * ATLAS — Encyclopédie : L'Époque moderne
 * Niveau : à partir de 12 ans (4ème)
 */

export const epoqueModerne = {
  slug: 'l-epoque-moderne',
  title: 'L\'Époque moderne',
  subtitle: 'De la Renaissance à la Révolution française (1453 — 1789)',
  category: 'history',
  difficulty_level: 'intermediaire',
  reading_time_minutes: 18,
  tags: ['Renaissance', 'Grandes découvertes', 'Lumières', 'Monarchie absolue', 'Réforme'],

  explication_simple: `
    L'**Époque moderne** s'étend de la chute de Constantinople (1453) à la
    **Révolution française** (1789). C'est une période de bouleversements majeurs :

    - La **Renaissance** (XVe-XVIe siècle) : un renouveau artistique et intellectuel
      né en Italie. Léonard de Vinci, Michel-Ange et Raphaël créent des chefs-d'œuvre.
      L'humanisme place l'**être humain** au centre de la réflexion.
    - Les **Grandes Découvertes** : Christophe Colomb atteint l'Amérique (1492),
      Magellan fait le tour du monde (1519-1522). Le monde s'ouvre et le commerce
      explose.
    - La **Réforme** : Martin Luther critique l'Église catholique en 1517. Les
      guerres de Religion déchirent l'Europe.
    - La **monarchie absolue** : Louis XIV incarne le roi tout-puissant (« L'État,
      c'est moi »). Versailles devient le symbole du pouvoir royal.
    - Les **Lumières** (XVIIIe siècle) : Voltaire, Rousseau et Montesquieu remettent
      en question l'absolutisme et défendent la raison, la tolérance et la liberté.
  `,

  definitions: [
    { terme: 'Renaissance', definition: 'Mouvement culturel et artistique né en Italie au XVe siècle, caractérisé par un retour aux modèles antiques et un nouvel intérêt pour l\'être humain.' },
    { terme: 'Humanisme', definition: 'Courant de pensée de la Renaissance qui place l\'être humain au centre de la réflexion. Les humanistes (Érasme, Rabelais, Montaigne) valorisent l\'éducation, la raison et la tolérance.' },
    { terme: 'Réforme', definition: 'Mouvement religieux du XVIe siècle initié par Martin Luther, qui critique l\'Église catholique et fonde le protestantisme.' },
    { terme: 'Monarchie absolue', definition: 'Régime politique où le roi concentre tous les pouvoirs (législatif, exécutif, judiciaire) sans aucun contrôle. Exemple : Louis XIV.' },
    { terme: 'Lumières', definition: 'Mouvement intellectuel du XVIIIe siècle qui prône l\'usage de la raison, la liberté, la tolérance et le progrès. Principaux philosophes : Voltaire, Rousseau, Montesquieu, Diderot.' },
    { terme: 'Encyclopédie', definition: 'Ouvrage monumental dirigé par Diderot et d\'Alembert (1751-1772), qui rassemble toutes les connaissances de l\'époque en 28 volumes.' },
    { terme: 'Colonisation', definition: 'Processus par lequel un pays européen prend le contrôle d\'un territoire étranger, exploite ses ressources et impose sa culture.' },
  ],

  schema_pedagogique: {
    titre: 'Les grandes transformations de l\'Époque moderne',
    type: 'frise_thematique',
    contenu: [
      {
        domaine: 'Art et culture',
        transformations: 'De l\'art religieux médiéval → Renaissance (perspective, anatomie), puis art baroque et classique',
        figures_cles: 'Léonard de Vinci, Michel-Ange, Molière, Shakespeare',
      },
      {
        domaine: 'Science',
        transformations: 'De la vision géocentrique (Terre au centre) → révolution copernicienne (Soleil au centre)',
        figures_cles: 'Copernic, Galilée, Newton, Descartes',
      },
      {
        domaine: 'Religion',
        transformations: 'De l\'unité catholique → Réforme protestante, guerres de Religion, puis tolérance (édit de Nantes)',
        figures_cles: 'Luther, Calvin, Henri IV',
      },
      {
        domaine: 'Politique',
        transformations: 'De la féodalité → monarchie absolue → critique par les Lumières → Révolution',
        figures_cles: 'François Ier, Louis XIV, Voltaire, Rousseau',
      },
      {
        domaine: 'Géographie',
        transformations: 'De l\'Europe isolée → Grandes Découvertes, colonisation, commerce triangulaire',
        figures_cles: 'Christophe Colomb, Magellan, Vasco de Gama',
      },
    ],
  },

  faits_importants: [
    'L\'**imprimerie** de Gutenberg (1450) permet de produire des livres 200 fois plus vite qu\'à la main. En 50 ans, **20 millions de livres** sont imprimés.',
    'Christophe Colomb pensait atteindre l\'**Inde** en naviguant vers l\'ouest. Il ne saura jamais qu\'il avait découvert un **nouveau continent**.',
    'Le château de **Versailles** comptait plus de **700 pièces**, **2 153 fenêtres** et **67 escaliers**. 36 000 ouvriers y ont travaillé.',
    'La **traite négrière** transatlantique a déporté environ **12 millions d\'Africains** vers les Amériques entre le XVIe et le XIXe siècle.',
    '**Galilée** a été condamné par l\'Inquisition en 1633 pour avoir soutenu que la Terre tourne autour du Soleil. Il faudra attendre **1992** pour que l\'Église reconnaisse son erreur.',
    'L\'**Encyclopédie** de Diderot contient **72 000 articles** et **3 000 illustrations** — un projet qui a pris 21 ans.',
    'Louis XIV a régné pendant **72 ans** (1643-1715), le plus long règne de l\'histoire de France.',
  ],

  chronologie: [
    { date: '1453', evenement: 'Chute de Constantinople → début de l\'Époque moderne' },
    { date: '~1450', evenement: 'Gutenberg invente l\'imprimerie à caractères mobiles' },
    { date: '1492', evenement: 'Christophe Colomb atteint les Amériques' },
    { date: '1498', evenement: 'Vasco de Gama atteint l\'Inde par voie maritime' },
    { date: '1517', evenement: 'Martin Luther publie ses 95 thèses → début de la Réforme' },
    { date: '1519-1522', evenement: 'Premier tour du monde par Magellan et Elcano' },
    { date: '1543', evenement: 'Copernic publie sa théorie héliocentrique' },
    { date: '1598', evenement: 'Édit de Nantes : liberté de culte pour les protestants' },
    { date: '1610', evenement: 'Galilée observe les lunes de Jupiter au télescope' },
    { date: '1643-1715', evenement: 'Règne de Louis XIV, le « Roi-Soleil »' },
    { date: '1687', evenement: 'Newton publie les Principia Mathematica (loi de la gravitation)' },
    { date: '1751', evenement: 'Premier tome de l\'Encyclopédie de Diderot et d\'Alembert' },
    { date: '1776', evenement: 'Déclaration d\'indépendance des États-Unis' },
    { date: '1789', evenement: 'Révolution française → fin de l\'Époque moderne' },
  ],

  anecdote: `
    👑 **Louis XIV prenait son bain… une fois par an !** — Malgré la splendeur de
    Versailles, l'hygiène n'était pas le point fort du Roi-Soleil. À l'époque, on
    croyait que l'eau chaude **ouvrait les pores** de la peau et laissait entrer les
    maladies. Résultat : le roi se lavait rarement avec de l'eau, préférant se frotter
    avec un linge sec et se parfumer abondamment. Les courtisans faisaient pareil.
    C'est d'ailleurs pour masquer les odeurs que l'industrie du **parfum** s'est
    développée à Grasse, dans le sud de la France !
  `,

  videos_educatives: [
    { titre: 'La Renaissance — C\'est pas sorcier', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-renaissance' },
    { titre: 'Les grandes découvertes', source: 'Lumni', url: 'https://www.lumni.fr/video/les-grandes-decouvertes' },
    { titre: 'Louis XIV et Versailles', source: 'Nota Bene', url: 'https://www.youtube.com/watch?v=nota-bene-versailles' },
    { titre: 'Les Lumières et l\'Encyclopédie', source: 'Lumni', url: 'https://www.lumni.fr/video/les-lumieres-encyclopedie' },
  ],
};
