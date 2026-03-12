/**
 * ATLAS — Encyclopédie : La formation de la Terre
 * Niveau : à partir de 12 ans (6ème / 5ème)
 */

export const formationTerre = {
  slug: 'la-formation-de-la-terre',
  title: 'La formation de la Terre',
  subtitle: 'Comment notre planète est-elle née il y a 4,6 milliards d\'années ?',
  category: 'geology',
  difficulty_level: 'debutant',
  reading_time_minutes: 14,
  tags: ['Terre', 'Formation', 'Système solaire', 'Géologie', 'Noyau', 'Atmosphère'],

  explication_simple: `
    La Terre est née il y a environ **4,6 milliards d'années** (4 600 000 000 ans !).
    C'est tellement loin qu'on a du mal à l'imaginer. Si on comprimait toute l'histoire
    de la Terre en **une seule journée de 24 heures** :
    - Les premiers êtres vivants apparaîtraient à **4h du matin**
    - Les dinosaures arriveraient à **22h40**
    - L'être humain n'apparaîtrait que dans les **2 dernières secondes** avant minuit !

    La Terre s'est formée à partir d'un immense **nuage de gaz et de poussières**
    (la nébuleuse solaire). Sous l'effet de la **gravité**, ces particules se sont
    agglutinées pour former une boule de roche en fusion. Peu à peu, les matériaux
    lourds (fer, nickel) ont coulé vers le centre pour former le **noyau**, tandis que
    les matériaux légers remontaient pour former le **manteau** et la **croûte**.

    L'eau est arrivée plus tard, apportée par des **comètes** et des **astéroïdes**,
    formant les premiers **océans**. Et c'est dans ces océans que la **vie** est apparue.
  `,

  definitions: [
    { terme: 'Nébuleuse solaire', definition: 'Immense nuage de gaz et de poussières à partir duquel se sont formés le Soleil et toutes les planètes du système solaire, il y a 4,6 milliards d\'années.' },
    { terme: 'Accrétion', definition: 'Processus par lequel des particules de poussière et de roche s\'agglomèrent sous l\'effet de la gravité pour former des corps de plus en plus gros (planètes).' },
    { terme: 'Différenciation', definition: 'Séparation des matériaux à l\'intérieur de la Terre en fusion : les éléments lourds (fer) coulent vers le centre, les légers (silicates) montent vers la surface.' },
    { terme: 'Noyau terrestre', definition: 'Centre de la Terre composé principalement de fer et de nickel. Le noyau externe est liquide (2 200 km), le noyau interne est solide (1 220 km de rayon).' },
    { terme: 'Manteau', definition: 'Couche épaisse (2 900 km) de roches entre la croûte et le noyau. La partie supérieure est partiellement fondue (asthénosphère) et permet le mouvement des plaques.' },
    { terme: 'Croûte terrestre', definition: 'Fine couche de roche solide à la surface (5-70 km d\'épaisseur). La croûte océanique (basalte) est plus fine et plus dense que la croûte continentale (granite).' },
    { terme: 'Atmosphère', definition: 'Enveloppe gazeuse qui entoure la Terre. L\'atmosphère primitive était très différente de l\'actuelle (pas d\'oxygène). C\'est la vie qui a produit l\'oxygène.' },
  ],

  schema_pedagogique: {
    titre: 'Les couches de la Terre — du centre à la surface',
    type: 'coupe_transversale',
    contenu: [
      {
        couche: 'Noyau interne (graine)',
        epaisseur: '1 220 km de rayon',
        temperature: '~5 500 °C',
        composition: 'Fer et nickel solides',
        particularite: 'Aussi chaud que la surface du Soleil ! Solide malgré la chaleur, à cause de la pression énorme.',
      },
      {
        couche: 'Noyau externe',
        epaisseur: '2 200 km',
        temperature: '4 000 — 5 500 °C',
        composition: 'Fer et nickel liquides',
        particularite: 'Ses mouvements de convection créent le champ magnétique terrestre (la « boussole » de la Terre).',
      },
      {
        couche: 'Manteau inférieur',
        epaisseur: '2 200 km',
        temperature: '1 000 — 4 000 °C',
        composition: 'Roches silicatées très visqueuses',
        particularite: 'Se déplace très lentement par convection (quelques cm/an).',
      },
      {
        couche: 'Manteau supérieur (asthénosphère)',
        epaisseur: '~600 km',
        temperature: '600 — 1 000 °C',
        composition: 'Roches partiellement fondues',
        particularite: 'Couche « molle » sur laquelle glissent les plaques tectoniques.',
      },
      {
        couche: 'Croûte terrestre (lithosphère)',
        epaisseur: '5 — 70 km',
        temperature: '0 — 600 °C',
        composition: 'Granite (continentale) ou basalte (océanique)',
        particularite: 'La couche sur laquelle nous vivons ! Découpée en plaques tectoniques.',
      },
    ],
  },

  faits_importants: [
    'La Terre a **4,567 milliards d\'années** — on le sait grâce à la datation radioactive des météorites les plus anciennes.',
    'Le noyau interne est aussi chaud que la surface du **Soleil** (~5 500 °C), mais reste solide à cause de la pression colossale.',
    'Le **champ magnétique** terrestre, créé par le noyau liquide, nous protège des **vents solaires** — sans lui, notre atmosphère serait emportée dans l\'espace.',
    'L\'**atmosphère primitive** de la Terre ne contenait **aucun oxygène** ! C\'est grâce aux cyanobactéries (il y a 2,4 milliards d\'années) que l\'oxygène est apparu.',
    'La Terre est la seule planète connue qui possède de l\'**eau liquide** en surface — condition essentielle à la vie.',
    'Si la Terre était une pomme, la croûte terrestre serait aussi fine que la **peau** de cette pomme.',
    'La **Lune** s\'est formée après qu\'un objet de la taille de Mars (Théia) a percuté la Terre il y a ~4,5 milliards d\'années.',
  ],

  chronologie: [
    { date: '~4,6 Ga', evenement: 'Formation du Soleil et de la nébuleuse solaire' },
    { date: '~4,56 Ga', evenement: 'Accrétion de la Terre à partir de poussières et de roches' },
    { date: '~4,5 Ga', evenement: 'Impact géant de Théia → formation de la Lune' },
    { date: '~4,4 Ga', evenement: 'Formation de la croûte solide et des premiers océans' },
    { date: '~3,8 Ga', evenement: 'Apparition des premières formes de vie (bactéries)' },
    { date: '~2,4 Ga', evenement: 'Grande Oxydation : les cyanobactéries produisent l\'oxygène' },
    { date: '~540 Ma', evenement: 'Explosion cambrienne : diversification rapide de la vie animale' },
    { date: '~250 Ma', evenement: 'Formation de la Pangée (supercontinent unique)' },
    { date: '~66 Ma', evenement: 'Astéroïde de Chicxulub → extinction des dinosaures' },
    { date: '~4,5 Ma', evenement: 'Apparition des premiers hominidés en Afrique' },
  ],

  anecdote: `
    🌍 **La Terre a failli être une boule de glace !** — Il y a environ 700 millions
    d'années, la Terre a été presque entièrement recouverte de glace, des pôles jusqu'à
    l'équateur. C'est ce qu'on appelle la « **Terre boule de neige** » (Snowball Earth).
    Les océans étaient gelés sur plusieurs centaines de mètres d'épaisseur. Comment la vie
    a-t-elle survécu ? Grâce à des **sources chaudes** sous-marines et à de minuscules
    poches d'eau libre. Quand la glace a finalement fondu (grâce aux volcans qui ont
    libéré du CO₂ et réchauffé l'atmosphère), la vie a explosé en une diversité incroyable !
  `,

  videos_educatives: [
    { titre: 'La formation de la Terre — C\'est pas sorcier', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-terre' },
    { titre: 'L\'histoire de la Terre en 10 minutes', source: 'Lumni', url: 'https://www.lumni.fr/video/histoire-de-la-terre' },
  ],
};
