/**
 * ATLAS — Encyclopédie : La Préhistoire
 * Niveau : à partir de 12 ans (6ème)
 */

export const prehistoire = {
  slug: 'la-prehistoire',
  title: 'La Préhistoire',
  subtitle: 'Des premiers humains à l\'invention de l\'écriture',
  category: 'history',
  difficulty_level: 'debutant',
  reading_time_minutes: 15,
  tags: ['Préhistoire', 'Paléolithique', 'Néolithique', 'Homo sapiens', 'Art pariétal'],

  explication_simple: `
    La **Préhistoire** est la plus longue période de l'histoire humaine. Elle commence
    avec l'apparition des **premiers humains** en Afrique, il y a environ 3 millions
    d'années, et se termine avec l'**invention de l'écriture** vers 3 300 av. J.-C.

    On la divise en deux grandes parties :
    - Le **Paléolithique** (« âge de la pierre ancienne ») : les humains sont des
      **chasseurs-cueilleurs nomades**. Ils taillent la pierre, maîtrisent le feu
      et créent les premières œuvres d'art (grottes de Lascaux).
    - Le **Néolithique** (« âge de la pierre nouvelle ») : les humains inventent
      l'**agriculture** et l'**élevage**, deviennent **sédentaires**, construisent
      les premiers villages, puis les premières villes.

    C'est une véritable **révolution** : au lieu de chercher leur nourriture, les humains
    la produisent ! Cela change tout : organisation sociale, artisanat, commerce…
  `,

  definitions: [
    { terme: 'Préhistoire', definition: 'Période de l\'histoire humaine avant l\'invention de l\'écriture (~3 millions d\'années à ~3 300 av. J.-C.).' },
    { terme: 'Paléolithique', definition: 'Première partie de la Préhistoire (3 millions à 10 000 av. J.-C.), caractérisée par la pierre taillée et le nomadisme.' },
    { terme: 'Néolithique', definition: 'Deuxième partie de la Préhistoire (10 000 à 3 300 av. J.-C.), marquée par l\'agriculture, la sédentarisation et la pierre polie.' },
    { terme: 'Homo sapiens', definition: 'Notre espèce, apparue en Afrique il y a environ 300 000 ans. "Homo sapiens" signifie "homme sage" en latin.' },
    { terme: 'Nomade', definition: 'Personne qui se déplace régulièrement pour trouver nourriture et abri, par opposition au sédentaire qui reste au même endroit.' },
    { terme: 'Sédentarisation', definition: 'Passage d\'un mode de vie nomade (déplacements) à un mode de vie sédentaire (installation fixe) grâce à l\'agriculture.' },
    { terme: 'Art pariétal', definition: 'Œuvres d\'art réalisées sur les parois des grottes (peintures, gravures). Les plus célèbres sont celles de Lascaux et Chauvet.' },
    { terme: 'Biface', definition: 'Outil en pierre taillé sur deux faces, utilisé pendant le Paléolithique pour couper, gratter ou creuser.' },
    { terme: 'Mégalithe', definition: 'Grande pierre dressée ou assemblée (menhir, dolmen, cromlech). Les alignements de Carnac en Bretagne en comptent plus de 3 000.' },
  ],

  schema_pedagogique: {
    titre: 'Paléolithique vs Néolithique — Les grandes différences',
    type: 'comparaison',
    contenu: {
      criteres: ['Mode de vie', 'Nourriture', 'Habitat', 'Outils', 'Organisation', 'Art et croyances'],
      paleolithique: [
        'Nomade (déplacements fréquents)',
        'Chasse, pêche, cueillette',
        'Grottes, abris sous roche, tentes en peaux',
        'Pierre taillée (bifaces, grattoirs, pointes)',
        'Petits groupes familiaux (20-50 personnes)',
        'Art pariétal (Lascaux, Chauvet), sépultures',
      ],
      neolithique: [
        'Sédentaire (installation fixe)',
        'Agriculture (blé, orge) et élevage (mouton, chèvre)',
        'Maisons en torchis, premiers villages, puis villes',
        'Pierre polie, poterie, tissage, métallurgie',
        'Villages organisés, spécialisation des métiers',
        'Mégalithes (menhirs, dolmens), cultes agraires',
      ],
    },
  },

  faits_importants: [
    'Les plus anciens fossiles d\'**Homo sapiens** (300 000 ans) ont été trouvés au **Maroc** (Jebel Irhoud).',
    'La grotte de **Lascaux** (Dordogne, France) contient plus de **600 peintures** datant de ~18 000 ans.',
    'La grotte **Chauvet** (Ardèche) abrite les plus anciennes peintures connues (~36 000 ans).',
    'La maîtrise du **feu** remonte à environ **400 000 ans** — elle a transformé l\'alimentation, la protection et la vie sociale.',
    'Le **Croissant fertile** (Mésopotamie, Turquie, Levant) est le berceau de l\'agriculture, vers 10 000 av. J.-C.',
    'Les premiers humains à atteindre l\'**Australie** y sont arrivés il y a ~65 000 ans, traversant la mer sur des radeaux.',
    'L\'**homme de Néandertal** a coexisté avec Homo sapiens en Europe pendant ~5 000 ans avant de disparaître il y a ~40 000 ans.',
  ],

  chronologie: [
    { date: '~7 Ma', evenement: 'Toumaï : plus ancien hominidé connu (Tchad)' },
    { date: '~3,2 Ma', evenement: 'Lucy (Australopithecus afarensis) en Éthiopie' },
    { date: '~2,5 Ma', evenement: 'Premiers outils en pierre taillée (Homo habilis)' },
    { date: '~1,8 Ma', evenement: 'Homo erectus quitte l\'Afrique (première sortie d\'Afrique)' },
    { date: '~400 000 ans', evenement: 'Maîtrise du feu' },
    { date: '~300 000 ans', evenement: 'Apparition d\'Homo sapiens en Afrique' },
    { date: '~100 000 ans', evenement: 'Homo sapiens quitte l\'Afrique vers le Proche-Orient' },
    { date: '~36 000 ans', evenement: 'Peintures de la grotte Chauvet (Ardèche)' },
    { date: '~18 000 ans', evenement: 'Peintures de la grotte de Lascaux (Dordogne)' },
    { date: '~10 000 av. J.-C.', evenement: 'Début de l\'agriculture au Proche-Orient (révolution néolithique)' },
    { date: '~4 500 av. J.-C.', evenement: 'Construction des premiers mégalithes (Carnac, Stonehenge)' },
    { date: '~3 300 av. J.-C.', evenement: 'Invention de l\'écriture en Mésopotamie → fin de la Préhistoire' },
  ],

  anecdote: `
    🎨 **Le premier artiste avait 6 ans !** — Dans la grotte de Rouffignac (Dordogne),
    on a découvert des dessins tracés par des **enfants** il y a 13 000 ans. Grâce à la
    taille des doigts imprimés dans l'argile, les archéologues ont estimé que certains
    « artistes » n'avaient que **3 à 7 ans**. On les imagine, torche à la main, en train
    de dessiner des mammouths au fond de la grotte, aidés par des adultes. La Préhistoire,
    c'est aussi l'enfance de l'art… au sens propre !
  `,

  videos_educatives: [
    { titre: 'La Préhistoire — C\'est pas sorcier', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-prehistoire' },
    { titre: 'La révolution néolithique', source: 'Lumni', url: 'https://www.lumni.fr/video/la-revolution-neolithique' },
    { titre: 'Visite virtuelle de la grotte de Lascaux', source: 'Lascaux.fr', url: 'https://archeologie.culture.gouv.fr/lascaux/' },
  ],
};
