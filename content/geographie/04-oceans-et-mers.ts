/**
 * ATLAS — Encyclopédie : Océans et mers du monde
 * Niveau : à partir de 12 ans (6ème)
 */

export const oceansEtMers = {
  slug: 'oceans-et-mers-du-monde',
  title: 'Les océans et mers du monde',
  subtitle: 'L\'eau recouvre 71 % de la surface de la Terre',
  category: 'geography',
  difficulty_level: 'debutant',
  reading_time_minutes: 11,
  tags: ['Océans', 'Mers', 'Eau', 'Climat', 'Biodiversité marine'],

  explication_simple: `
    Si tu regardes la Terre depuis l'espace, tu remarqueras qu'elle est surtout
    **bleue** : c'est parce que l'eau recouvre **71 % de sa surface**. Cette eau
    salée forme un immense ensemble qu'on appelle l'**océan mondial**, divisé en
    **5 océans** : le Pacifique (le plus grand), l'Atlantique, l'Indien, l'Arctique
    et l'Antarctique (ou Austral).

    Les **mers** sont des parties plus petites des océans, souvent situées entre les
    continents, comme la mer Méditerranée entre l'Europe et l'Afrique. Les océans
    jouent un rôle vital : ils **régulent le climat**, produisent **50 % de l'oxygène**
    que nous respirons (grâce au phytoplancton) et abritent des millions d'espèces.
  `,

  definitions: [
    { terme: 'Océan', definition: 'Vaste étendue d\'eau salée qui sépare les continents. Il en existe 5 : Pacifique, Atlantique, Indien, Arctique et Antarctique.' },
    { terme: 'Mer', definition: 'Étendue d\'eau salée plus petite qu\'un océan, souvent bordée de terres (mer Méditerranée, mer du Nord, mer Rouge…).' },
    { terme: 'Courant marin', definition: 'Déplacement d\'eau dans l\'océan, comme un fleuve invisible sous la mer. Le Gulf Stream, par exemple, réchauffe les côtes européennes.' },
    { terme: 'Marée', definition: 'Montée et descente périodique du niveau de la mer, causée par l\'attraction de la Lune et du Soleil.' },
    { terme: 'Fosse océanique', definition: 'Dépression très profonde au fond de l\'océan, souvent liée aux zones de subduction. La fosse des Mariannes atteint 11 034 m.' },
    { terme: 'Phytoplancton', definition: 'Minuscules organismes végétaux flottant à la surface des océans, responsables de la moitié de la production d\'oxygène sur Terre.' },
  ],

  schema_pedagogique: {
    titre: 'Les 5 océans comparés',
    type: 'tableau_comparatif',
    contenu: [
      { ocean: 'Pacifique', superficie_km2: 165_250_000, profondeur_max: '11 034 m (fosse des Mariannes)', particularite: 'Plus grand océan, contient la "Ceinture de feu" volcanique' },
      { ocean: 'Atlantique', superficie_km2: 106_460_000, profondeur_max: '8 376 m (fosse de Porto Rico)', particularite: 'Sépare l\'Europe-Afrique de l\'Amérique, le plus parcouru par le commerce' },
      { ocean: 'Indien', superficie_km2: 73_556_000, profondeur_max: '7 450 m (fosse de Java)', particularite: 'Le plus chaud, sujet aux moussons' },
      { ocean: 'Antarctique (Austral)', superficie_km2: 20_327_000, profondeur_max: '7 236 m (fosse des Sandwich du Sud)', particularite: 'Entoure l\'Antarctique, eaux les plus riches en nutriments' },
      { ocean: 'Arctique', superficie_km2: 14_056_000, profondeur_max: '5 450 m', particularite: 'Le plus petit, partiellement recouvert de banquise' },
    ],
  },

  faits_importants: [
    'L\'océan Pacifique est **plus grand que tous les continents réunis** (165 millions de km²).',
    'Nous n\'avons exploré que **5 % des fonds océaniques**. On connaît mieux la surface de Mars que le fond de nos océans.',
    'Le Gulf Stream transporte plus d\'eau que **tous les fleuves du monde réunis**.',
    'La mer Morte, entre Israël et la Jordanie, est si salée (340 g/L) qu\'on y flotte sans effort.',
    'Le «continent de plastique» dans le Pacifique couvre une surface de **3 fois la France**.',
    'Les récifs coralliens n\'occupent que 0,1 % des océans mais abritent **25 % de la biodiversité marine**.',
  ],

  chronologie: [
    { date: '~3,8 milliards d\'années', evenement: 'Formation des premiers océans sur Terre' },
    { date: '~500 av. J.-C.', evenement: 'Les Phéniciens naviguent en Méditerranée et atteignent l\'Atlantique' },
    { date: '1492', evenement: 'Christophe Colomb traverse l\'Atlantique' },
    { date: '1519-1522', evenement: 'Magellan et Elcano réalisent le premier tour du monde par les océans' },
    { date: '1872-1876', evenement: 'Expédition du HMS Challenger : début de l\'océanographie moderne' },
    { date: '1960', evenement: 'Jacques Piccard et Don Walsh descendent au fond de la fosse des Mariannes (10 916 m)' },
    { date: '2021', evenement: 'L\'océan Antarctique est officiellement reconnu comme 5e océan par National Geographic' },
  ],

  anecdote: `
    🌊 **L'océan a un tapis roulant** — Il existe un gigantesque « tapis roulant »
    océanique appelé la **circulation thermohaline**. L'eau froide et salée coule
    au fond de l'Atlantique Nord, parcourt les profondeurs de tous les océans, puis
    remonte à la surface dans le Pacifique et l'Indien. Un cycle complet prend environ
    **1 000 ans** ! Ce système régule le climat de toute la planète : sans lui, l'Europe
    serait aussi froide que le Canada.
  `,

  videos_educatives: [
    { titre: 'Les océans — C\'est pas sorcier', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=oceans-cps' },
    { titre: 'Pourquoi la mer est-elle salée ?', source: 'Lumni', url: 'https://www.lumni.fr/video/pourquoi-la-mer-est-salee' },
  ],
};
