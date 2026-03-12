/**
 * ATLAS — Encyclopédie : Le Moyen Âge
 * Niveau : à partir de 12 ans (5ème)
 */

export const moyenAge = {
  slug: 'le-moyen-age',
  title: 'Le Moyen Âge',
  subtitle: 'De la chute de Rome à la prise de Constantinople (476 — 1453)',
  category: 'history',
  difficulty_level: 'intermediaire',
  reading_time_minutes: 18,
  tags: ['Moyen Âge', 'Chevaliers', 'Châteaux forts', 'Croisades', 'Féodalité', 'Cathédrales'],

  explication_simple: `
    Le **Moyen Âge** dure environ **1 000 ans**, de 476 (chute de Rome) à 1453
    (chute de Constantinople). On le divise souvent en trois parties :

    - Le **Haut Moyen Âge** (476-1000) : les royaumes barbares remplacent l'Empire
      romain. Clovis fonde le royaume des Francs. Charlemagne est sacré empereur.
    - Le **Moyen Âge central** (1000-1300) : c'est l'époque des **châteaux forts**,
      des **chevaliers**, des **croisades** et de la construction des **cathédrales**.
    - Le **Bas Moyen Âge** (1300-1453) : période de crises (peste noire, guerre de
      Cent Ans), mais aussi de renouveau qui prépare la Renaissance.

    Contrairement à ce qu'on croit, le Moyen Âge n'est pas une époque « sombre » !
    C'est une période d'innovations : moulins à vent, lunettes, universités,
    imprimerie, horloges mécaniques…
  `,

  definitions: [
    { terme: 'Moyen Âge', definition: 'Période historique entre l\'Antiquité et la Renaissance (476-1453), soit environ 1 000 ans.' },
    { terme: 'Féodalité', definition: 'Système politique et social où un seigneur accorde des terres (fief) à un vassal en échange de sa fidélité et de son service militaire.' },
    { terme: 'Seigneur / Vassal', definition: 'Le seigneur est le noble qui possède des terres. Le vassal est celui qui reçoit un fief du seigneur et lui jure fidélité.' },
    { terme: 'Serf', definition: 'Paysan attaché à la terre de son seigneur. Il n\'est pas libre de quitter le domaine, mais il n\'est pas un esclave.' },
    { terme: 'Croisade', definition: 'Expédition militaire organisée par les chrétiens d\'Europe pour reprendre Jérusalem et la Terre sainte aux musulmans (XIe-XIIIe siècle).' },
    { terme: 'Cathédrale', definition: 'Grande église où siège un évêque. Les cathédrales gothiques (Notre-Dame, Chartres) sont des chefs-d\'œuvre d\'architecture.' },
    { terme: 'Chevalerie', definition: 'Ordre militaire et code de conduite des chevaliers : courage, loyauté, protection des faibles.' },
    { terme: 'Art roman / Art gothique', definition: 'Deux styles architecturaux. Le roman (XIe-XIIe s.) utilise des voûtes en berceau et des murs épais. Le gothique (XIIe-XVe s.) utilise des arcs brisés, des ogives et de grands vitraux.' },
  ],

  schema_pedagogique: {
    titre: 'La société médiévale : les trois ordres',
    type: 'pyramide_sociale',
    contenu: {
      description: 'La société médiévale est divisée en trois ordres (groupes sociaux) :',
      ordres: [
        {
          nom: 'Ceux qui prient (le clergé)',
          proportion: '~2 %',
          role: 'Prêtres, moines, évêques. Ils prient pour le salut de tous, enseignent, soignent les malades et copient les manuscrits.',
          lieu: 'Églises, monastères, abbayes',
        },
        {
          nom: 'Ceux qui combattent (la noblesse)',
          proportion: '~3 %',
          role: 'Rois, seigneurs, chevaliers. Ils protègent le territoire, rendent la justice et mènent les guerres.',
          lieu: 'Châteaux forts',
        },
        {
          nom: 'Ceux qui travaillent (le tiers état)',
          proportion: '~95 %',
          role: 'Paysans (serfs et vilains), artisans, marchands. Ils cultivent la terre, fabriquent les objets et assurent le commerce.',
          lieu: 'Villages, bourgs, villes',
        },
      ],
    },
  },

  faits_importants: [
    'La **peste noire** (1347-1352) tue entre **30 et 50 % de la population européenne**, soit environ 25 millions de personnes.',
    'L\'université de **Bologne** (1088) et celle de **Paris** (1150) sont parmi les premières au monde.',
    'Charlemagne ne savait probablement pas écrire, mais il a créé des écoles dans tout l\'Empire carolingien.',
    'Les **cathédrales gothiques** pouvaient mettre plus de **100 ans** à construire (Notre-Dame de Paris : 1163-1345).',
    'Le système féodal reposait sur un échange : le seigneur offrait **protection**, le vassal offrait **fidélité et service militaire**.',
    'Les **Vikings** ont atteint l\'Amérique (~1000) — 500 ans avant Christophe Colomb !',
    'L\'**imprimerie** de Gutenberg (vers 1450) est l\'invention la plus importante du Moyen Âge : elle permet la diffusion massive des livres.',
  ],

  chronologie: [
    { date: '476', evenement: 'Chute de l\'Empire romain d\'Occident → début du Moyen Âge' },
    { date: '496', evenement: 'Baptême de Clovis, roi des Francs' },
    { date: '622', evenement: 'L\'Hégire : Muhammad quitte La Mecque pour Médine → début du calendrier musulman' },
    { date: '732', evenement: 'Bataille de Poitiers : Charles Martel arrête l\'avancée arabe' },
    { date: '800', evenement: 'Charlemagne est sacré empereur à Rome' },
    { date: '987', evenement: 'Hugues Capet devient roi de France → dynastie capétienne' },
    { date: '1066', evenement: 'Guillaume le Conquérant envahit l\'Angleterre (bataille de Hastings)' },
    { date: '1096-1099', evenement: 'Première croisade : prise de Jérusalem' },
    { date: '1163', evenement: 'Début de la construction de Notre-Dame de Paris' },
    { date: '1215', evenement: 'Magna Carta en Angleterre : premiers droits face au roi' },
    { date: '1337-1453', evenement: 'Guerre de Cent Ans entre France et Angleterre' },
    { date: '1347-1352', evenement: 'La peste noire ravage l\'Europe' },
    { date: '1429', evenement: 'Jeanne d\'Arc libère Orléans' },
    { date: '~1450', evenement: 'Gutenberg invente l\'imprimerie à caractères mobiles' },
    { date: '1453', evenement: 'Chute de Constantinople → fin du Moyen Âge' },
  ],

  anecdote: `
    🏰 **Les châteaux forts sentaient très mauvais !** — Oublie les images des films :
    les vrais châteaux forts étaient sombres, froids et malodorants. Les latrines
    (toilettes) étaient de simples trous dans le mur qui donnaient sur les douves.
    Les chiens mangeaient les restes à même le sol de la grande salle. Et comme on ne
    prenait un bain que quelques fois par an, l'odeur devait être… mémorable !
    Le roi Louis IX (Saint Louis) est l'un des premiers à faire installer des
    « étuves » (bains publics) dans les villes.
  `,

  videos_educatives: [
    { titre: 'Le Moyen Âge — C\'est pas sorcier', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-moyen-age' },
    { titre: 'Les châteaux forts', source: 'Lumni', url: 'https://www.lumni.fr/video/les-chateaux-forts' },
    { titre: 'Les croisades expliquées', source: 'Nota Bene', url: 'https://www.youtube.com/watch?v=nota-bene-croisades' },
  ],
};
