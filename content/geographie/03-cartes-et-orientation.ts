/**
 * ATLAS — Encyclopédie : Lire et comprendre les cartes
 * Niveau : à partir de 12 ans (6ème)
 */

export const cartesEtOrientation = {
  slug: 'lire-et-comprendre-les-cartes',
  title: 'Lire et comprendre les cartes',
  subtitle: 'Apprendre à se repérer sur une carte et un globe terrestre',
  category: 'geography',
  difficulty_level: 'debutant',
  reading_time_minutes: 10,
  tags: ['Cartographie', 'Cartes', 'Orientation', 'Coordonnées', 'Échelle'],

  explication_simple: `
    Une **carte** est une représentation à plat d'un espace géographique. C'est comme
    une photo vue du dessus, mais simplifiée. Pour lire une carte, tu as besoin de
    4 éléments essentiels :

    1. **Le titre** — il t'indique de quel lieu ou sujet parle la carte.
    2. **La légende** — elle explique la signification des couleurs et des symboles.
    3. **L'échelle** — elle te permet de mesurer les distances réelles.
    4. **L'orientation** — une rose des vents ou une flèche indiquant le Nord.

    Le grand défi de la cartographie, c'est de représenter la Terre (qui est ronde !)
    sur une surface plate. C'est comme essayer d'aplatir la peau d'une orange : il y a
    forcément des **déformations**. C'est pourquoi il existe différentes **projections
    cartographiques**, chacune avec ses avantages et ses défauts.
  `,

  definitions: [
    { terme: 'Cartographie', definition: 'Science et art de créer des cartes géographiques. Le mot vient du grec « khartes » (carte) et « graphein » (écrire).' },
    { terme: 'Échelle', definition: 'Rapport entre les distances sur la carte et les distances réelles. Par exemple, 1:100 000 signifie que 1 cm sur la carte = 1 km dans la réalité.' },
    { terme: 'Légende', definition: 'Encadré qui explique la signification de chaque symbole, couleur ou figuré utilisé sur la carte.' },
    { terme: 'Projection', definition: 'Méthode mathématique pour représenter la surface courbe de la Terre sur une surface plane. Exemples : projection de Mercator, projection de Peters.' },
    { terme: 'Rose des vents', definition: 'Figure indiquant les quatre points cardinaux (Nord, Sud, Est, Ouest) et les directions intermédiaires.' },
    { terme: 'Courbes de niveau', definition: 'Lignes sur une carte topographique qui relient les points de même altitude. Plus les lignes sont serrées, plus la pente est forte.' },
    { terme: 'SIG', definition: 'Système d\'Information Géographique — logiciel qui permet de créer, analyser et afficher des cartes numériques (ex. : Google Maps).' },
  ],

  schema_pedagogique: {
    titre: 'Les types de cartes',
    type: 'classification',
    contenu: [
      {
        type_carte: 'Carte physique',
        description: 'Montre le relief, les fleuves, les océans et les montagnes',
        couleurs: 'Vert (plaines), jaune-brun (montagnes), bleu (eau)',
        exemple: 'Carte du relief de la France',
      },
      {
        type_carte: 'Carte politique',
        description: 'Montre les frontières des pays et les capitales',
        couleurs: 'Couleurs différentes pour chaque pays',
        exemple: 'Carte des pays d\'Europe',
      },
      {
        type_carte: 'Carte thématique',
        description: 'Représente un sujet précis (population, climat, économie…)',
        couleurs: 'Variable selon le thème, avec une légende spécifique',
        exemple: 'Carte de la densité de population mondiale',
      },
      {
        type_carte: 'Carte topographique',
        description: 'Très détaillée, avec courbes de niveau, routes, bâtiments',
        couleurs: 'Normalisées (forêt en vert, eau en bleu, routes en rouge)',
        exemple: 'Carte IGN de randonnée',
      },
      {
        type_carte: 'Planisphère',
        description: 'Carte du monde entier à plat',
        couleurs: 'Variable selon le type (physique ou politique)',
        exemple: 'Planisphère de Mercator',
      },
    ],
  },

  faits_importants: [
    'La plus ancienne carte connue date de **2 500 av. J.-C.** : c\'est une tablette d\'argile babylonienne montrant un plan cadastral.',
    'La projection de Mercator (1569) **déforme la taille** des pays : le Groenland paraît aussi grand que l\'Afrique, alors qu\'il est **14 fois plus petit**.',
    'Le **GPS** (Global Positioning System) utilise **24 satellites** en orbite pour calculer ta position avec une précision de quelques mètres.',
    'L\'IGN (Institut Géographique National) produit les cartes officielles de la France depuis 1940.',
    'Google Maps couvre **99 % de la surface terrestre** avec des images satellite.',
    'Sur les premières cartes médiévales, le **sud** était en haut (cartes arabes) ou l\'**est** (cartes chrétiennes, d\'où le mot "s\'orienter" = chercher l\'Orient).',
  ],

  chronologie: [
    { date: '~2500 av. J.-C.', evenement: 'Plus ancienne carte connue (tablette babylonienne)' },
    { date: '~150 apr. J.-C.', evenement: 'Ptolémée crée la « Géographie », première tentative de cartographier le monde connu' },
    { date: '1154', evenement: 'Al-Idrîsî réalise la « Tabula Rogeriana », la carte la plus précise du Moyen Âge' },
    { date: '1569', evenement: 'Gerardus Mercator publie sa projection, encore utilisée pour la navigation' },
    { date: '1793', evenement: 'La France adopte le système métrique, révolutionnant la mesure des distances' },
    { date: '1973', evenement: 'Lancement du programme GPS par l\'armée américaine' },
    { date: '2005', evenement: 'Google Maps est lancé, rendant la cartographie accessible à tous' },
  ],

  anecdote: `
    🧭 **Pourquoi le Nord est-il en haut ?** — C'est une convention, pas une obligation !
    Pendant des siècles, les cartes arabes plaçaient le **sud** en haut, et les cartes
    médiévales chrétiennes plaçaient l'**est** en haut (vers Jérusalem et le Paradis).
    Le mot français « s'orienter » vient justement de « Orient » (l'est) ! C'est le
    cartographe Mercator, au XVIe siècle, qui a popularisé la convention du Nord en haut,
    parce que c'était plus pratique pour la navigation avec la boussole.
  `,

  videos_educatives: [
    { titre: 'Comment lire une carte ?', source: 'Lumni', url: 'https://www.lumni.fr/video/comment-lire-une-carte' },
    { titre: 'Pourquoi les cartes nous mentent', source: 'Vox (FR)', url: 'https://www.youtube.com/watch?v=cartographie-projections' },
  ],
};
