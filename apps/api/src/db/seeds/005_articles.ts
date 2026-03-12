import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('article_sections').del();
  await knex('articles').del();

  const articles = await knex('articles')
    .insert([
      // ── GÉOGRAPHIE ────────────────────────────────────────────
      {
        slug: 'les-continents-du-monde',
        title: 'Les continents du monde',
        subtitle: 'Comprendre l\'organisation géographique de la Terre',
        content: 'Imagine la Terre vue de l\'espace : tu vois de grands morceaux de terre entourés par les océans. Ces grands morceaux, ce sont les continents. Il y en a 6 : l\'Afrique, l\'Amérique, l\'Antarctique, l\'Asie, l\'Europe, et l\'Océanie. Autrefois, tous les continents étaient réunis en un seul supercontinent appelé la Pangée.',
        summary: 'Les 6 continents, leur formation depuis la Pangée et leurs caractéristiques géographiques.',
        category: 'geography',
        author: 'Équipe Atlas',
        reading_time_minutes: 12,
        difficulty_level: 'debutant',
        tags: JSON.stringify(['Continents', 'Géographie', 'Terre', 'Cartographie']),
        published: true,
        metadata: JSON.stringify({
          definitions: [
            { terme: 'Continent', definition: 'Grande étendue de terre émergée, entourée par des océans.' },
            { terme: 'Pangée', definition: 'Supercontinent unique qui regroupait toutes les terres émergées il y a environ 300 millions d\'années.' },
            { terme: 'Hémisphère', definition: 'Moitié du globe terrestre. L\'équateur sépare les hémisphères Nord et Sud.' },
          ],
          faits_importants: [
            'L\'Asie représente 30 % des terres émergées et abrite 60 % de la population mondiale.',
            'L\'Antarctique n\'appartient à aucun pays. Le traité de 1959 le réserve à la recherche scientifique.',
            'L\'Europe et l\'Asie forment une seule masse terrestre appelée Eurasie.',
          ],
          chronologie: [
            { date: '~300 Ma', evenement: 'Formation de la Pangée' },
            { date: '~200 Ma', evenement: 'Fragmentation en Laurasia et Gondwana' },
            { date: '1912', evenement: 'Wegener propose la dérive des continents' },
          ],
          anecdote: 'L\'Amérique s\'éloigne de l\'Europe de 2,5 cm par an — la vitesse à laquelle poussent tes ongles !',
          videos_educatives: [
            { titre: 'La dérive des continents', source: 'Lumni', url: 'https://www.lumni.fr/video/la-derive-des-continents' },
          ],
        }),
      },
      {
        slug: 'pays-et-capitales-du-monde',
        title: 'Les pays et capitales du monde',
        subtitle: 'Comment s\'organisent les États sur notre planète ?',
        content: 'Le monde compte 195 pays reconnus par l\'ONU. Chaque pays possède un territoire délimité par des frontières, un gouvernement et une capitale.',
        summary: 'Les 195 États du monde, leurs capitales et l\'organisation politique internationale.',
        category: 'geography',
        author: 'Équipe Atlas',
        reading_time_minutes: 15,
        difficulty_level: 'debutant',
        tags: JSON.stringify(['Pays', 'Capitales', 'États', 'Frontières', 'ONU']),
        published: true,
        metadata: JSON.stringify({
          definitions: [
            { terme: 'État', definition: 'Organisation politique exerçant son autorité sur un territoire et une population.' },
            { terme: 'Capitale', definition: 'Ville où siègent les institutions politiques d\'un pays.' },
            { terme: 'ONU', definition: 'Organisation des Nations Unies, fondée en 1945, regroupant 193 États.' },
          ],
          faits_importants: [
            'Le plus petit pays est le Vatican (0,44 km²).',
            'Le pays le plus peuplé est l\'Inde (1,44 milliard d\'habitants).',
            'La Russie s\'étend sur 11 fuseaux horaires.',
          ],
          anecdote: 'Quand le Brésil a voulu une nouvelle capitale dans les années 1950, il l\'a construite de zéro : Brasília a été dessinée en forme d\'avion vu du ciel !',
          videos_educatives: [
            { titre: 'Combien de pays dans le monde ?', source: 'Lumni', url: 'https://www.lumni.fr/video/combien-de-pays-dans-le-monde' },
          ],
        }),
      },
      {
        slug: 'oceans-et-mers-du-monde',
        title: 'Les océans et mers du monde',
        subtitle: 'L\'eau recouvre 71 % de la surface de la Terre',
        content: 'L\'eau salée forme un immense ensemble divisé en 5 océans : le Pacifique, l\'Atlantique, l\'Indien, l\'Arctique et l\'Antarctique. Les océans régulent le climat et produisent 50 % de l\'oxygène.',
        summary: 'Les 5 océans, les mers, les courants marins et leur rôle vital pour la planète.',
        category: 'geography',
        author: 'Équipe Atlas',
        reading_time_minutes: 11,
        difficulty_level: 'debutant',
        tags: JSON.stringify(['Océans', 'Mers', 'Eau', 'Climat', 'Biodiversité marine']),
        published: true,
        metadata: JSON.stringify({
          definitions: [
            { terme: 'Océan', definition: 'Vaste étendue d\'eau salée séparant les continents (5 au total).' },
            { terme: 'Courant marin', definition: 'Déplacement d\'eau dans l\'océan, comme un fleuve sous la mer.' },
            { terme: 'Fosse océanique', definition: 'Dépression très profonde au fond de l\'océan (la fosse des Mariannes atteint 11 034 m).' },
          ],
          faits_importants: [
            'L\'océan Pacifique est plus grand que tous les continents réunis.',
            'On n\'a exploré que 5 % des fonds océaniques.',
            'Le Gulf Stream transporte plus d\'eau que tous les fleuves du monde réunis.',
          ],
          anecdote: 'Il existe un gigantesque « tapis roulant » océanique : l\'eau met 1 000 ans à faire un cycle complet à travers tous les océans !',
          videos_educatives: [
            { titre: 'Pourquoi la mer est-elle salée ?', source: 'Lumni', url: 'https://www.lumni.fr/video/pourquoi-la-mer-est-salee' },
          ],
        }),
      },

      // ── HISTOIRE ──────────────────────────────────────────────
      {
        slug: 'la-prehistoire',
        title: 'La Préhistoire',
        subtitle: 'Des premiers humains à l\'invention de l\'écriture',
        content: 'La Préhistoire est la plus longue période de l\'histoire humaine. Elle commence avec l\'apparition des premiers humains il y a 3 millions d\'années et se termine avec l\'invention de l\'écriture vers 3 300 av. J.-C.',
        summary: 'Du Paléolithique au Néolithique : chasseurs-cueilleurs, maîtrise du feu, art pariétal, révolution agricole.',
        category: 'history',
        author: 'Équipe Atlas',
        reading_time_minutes: 15,
        difficulty_level: 'debutant',
        tags: JSON.stringify(['Préhistoire', 'Paléolithique', 'Néolithique', 'Homo sapiens', 'Art pariétal']),
        published: true,
        metadata: JSON.stringify({
          definitions: [
            { terme: 'Paléolithique', definition: 'Âge de la pierre ancienne (3 Ma — 10 000 av. J.-C.), caractérisé par le nomadisme et la pierre taillée.' },
            { terme: 'Néolithique', definition: 'Âge de la pierre nouvelle (10 000 — 3 300 av. J.-C.), marqué par l\'agriculture et la sédentarisation.' },
            { terme: 'Homo sapiens', definition: 'Notre espèce, apparue en Afrique il y a 300 000 ans.' },
            { terme: 'Art pariétal', definition: 'Œuvres d\'art réalisées sur les parois des grottes (Lascaux, Chauvet).' },
          ],
          faits_importants: [
            'Les plus anciens fossiles d\'Homo sapiens (300 000 ans) ont été trouvés au Maroc.',
            'La grotte de Lascaux contient plus de 600 peintures datant de 18 000 ans.',
            'La maîtrise du feu remonte à environ 400 000 ans.',
          ],
          anecdote: 'Dans la grotte de Rouffignac, on a découvert des dessins tracés par des enfants de 3 à 7 ans il y a 13 000 ans !',
          videos_educatives: [
            { titre: 'La Préhistoire — C\'est pas sorcier', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-prehistoire' },
            { titre: 'Visite virtuelle de Lascaux', source: 'Lascaux.fr', url: 'https://archeologie.culture.gouv.fr/lascaux/' },
          ],
        }),
      },
      {
        slug: 'l-antiquite',
        title: 'L\'Antiquité',
        subtitle: 'De l\'invention de l\'écriture à la chute de Rome',
        content: 'L\'Antiquité commence avec l\'invention de l\'écriture en Mésopotamie vers 3 300 av. J.-C. et se termine avec la chute de l\'Empire romain d\'Occident en 476.',
        summary: 'Les grandes civilisations antiques : Mésopotamie, Égypte, Grèce, Rome — écriture, démocratie, droit.',
        category: 'history',
        author: 'Équipe Atlas',
        reading_time_minutes: 18,
        difficulty_level: 'debutant',
        tags: JSON.stringify(['Antiquité', 'Égypte', 'Grèce', 'Rome', 'Écriture']),
        published: true,
        metadata: JSON.stringify({
          definitions: [
            { terme: 'Cité-État', definition: 'Ville indépendante qui se gouverne elle-même (Athènes, Sparte, Rome).' },
            { terme: 'Démocratie', definition: 'Système où le pouvoir appartient aux citoyens, inventé à Athènes au Ve siècle av. J.-C.' },
            { terme: 'Pharaon', definition: 'Souverain d\'Égypte ancienne, considéré comme un dieu vivant.' },
          ],
          faits_importants: [
            'La Grande Pyramide de Gizeh est restée le plus haut édifice du monde pendant 3 800 ans.',
            'Le Colisée de Rome pouvait accueillir 50 000 spectateurs.',
            'Les Romains ont construit plus de 80 000 km de routes.',
          ],
          anecdote: 'Le béton romain se renforce avec le temps — le Panthéon (2 000 ans) possède le plus grand dôme en béton non armé du monde et tient toujours debout !',
          videos_educatives: [
            { titre: 'L\'Égypte des pharaons', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-egypte' },
            { titre: 'La démocratie athénienne', source: 'Lumni', url: 'https://www.lumni.fr/video/la-democratie-athenienne' },
          ],
        }),
      },
      {
        slug: 'le-moyen-age',
        title: 'Le Moyen Âge',
        subtitle: 'De la chute de Rome à la prise de Constantinople (476 — 1453)',
        content: 'Le Moyen Âge dure environ 1 000 ans. C\'est l\'époque des châteaux forts, des chevaliers, des croisades et de la construction des cathédrales.',
        summary: 'Féodalité, chevalerie, croisades, cathédrales, peste noire et les innovations médiévales.',
        category: 'history',
        author: 'Équipe Atlas',
        reading_time_minutes: 18,
        difficulty_level: 'intermediaire',
        tags: JSON.stringify(['Moyen Âge', 'Chevaliers', 'Cathédrales', 'Croisades', 'Féodalité']),
        published: true,
        metadata: JSON.stringify({
          definitions: [
            { terme: 'Féodalité', definition: 'Système où un seigneur accorde des terres à un vassal en échange de fidélité et de service militaire.' },
            { terme: 'Croisade', definition: 'Expédition militaire des chrétiens d\'Europe pour reprendre Jérusalem (XIe-XIIIe s.).' },
            { terme: 'Art gothique', definition: 'Style architectural utilisant arcs brisés, ogives et grands vitraux (Notre-Dame, Chartres).' },
          ],
          faits_importants: [
            'La peste noire (1347-1352) tue entre 30 et 50 % de la population européenne.',
            'Les Vikings ont atteint l\'Amérique (~1000), 500 ans avant Colomb.',
            'L\'imprimerie de Gutenberg (1450) est l\'invention la plus importante du Moyen Âge.',
          ],
          anecdote: 'Les vrais châteaux forts étaient sombres, froids et malodorants. Les latrines donnaient directement sur les douves !',
          videos_educatives: [
            { titre: 'Le Moyen Âge — C\'est pas sorcier', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-moyen-age' },
          ],
        }),
      },
      {
        slug: 'l-epoque-moderne',
        title: 'L\'Époque moderne',
        subtitle: 'De la Renaissance à la Révolution française (1453 — 1789)',
        content: 'L\'Époque moderne est marquée par la Renaissance, les Grandes Découvertes, la Réforme protestante, la monarchie absolue de Louis XIV et les Lumières.',
        summary: 'Renaissance, grandes découvertes, monarchie absolue, Lumières — les transformations qui préparent le monde moderne.',
        category: 'history',
        author: 'Équipe Atlas',
        reading_time_minutes: 18,
        difficulty_level: 'intermediaire',
        tags: JSON.stringify(['Renaissance', 'Grandes découvertes', 'Lumières', 'Monarchie absolue']),
        published: true,
        metadata: JSON.stringify({
          definitions: [
            { terme: 'Renaissance', definition: 'Mouvement culturel né en Italie au XVe siècle, retour aux modèles antiques.' },
            { terme: 'Humanisme', definition: 'Courant de pensée plaçant l\'être humain au centre de la réflexion.' },
            { terme: 'Lumières', definition: 'Mouvement intellectuel du XVIIIe siècle prônant raison, liberté et tolérance.' },
          ],
          faits_importants: [
            'Colomb pensait atteindre l\'Inde — il ne saura jamais qu\'il avait découvert un nouveau continent.',
            'Versailles comptait plus de 700 pièces et 2 153 fenêtres.',
            'Galilée a été condamné en 1633 ; l\'Église a reconnu son erreur en 1992.',
          ],
          anecdote: 'Louis XIV prenait son bain environ une fois par an ! À l\'époque, on croyait que l\'eau chaude laissait entrer les maladies. C\'est pour masquer les odeurs que l\'industrie du parfum s\'est développée à Grasse.',
          videos_educatives: [
            { titre: 'Les grandes découvertes', source: 'Lumni', url: 'https://www.lumni.fr/video/les-grandes-decouvertes' },
            { titre: 'Les Lumières et l\'Encyclopédie', source: 'Lumni', url: 'https://www.lumni.fr/video/les-lumieres-encyclopedie' },
          ],
        }),
      },
      {
        slug: 'l-epoque-contemporaine',
        title: 'L\'Époque contemporaine',
        subtitle: 'De la Révolution française à nos jours (1789 — aujourd\'hui)',
        content: 'En à peine 250 ans : Révolution française, industrialisation, guerres mondiales, décolonisation, Guerre froide, mondialisation et révolution numérique.',
        summary: 'De 1789 à aujourd\'hui : révolutions, guerres mondiales, décolonisation, construction européenne, mondialisation.',
        category: 'history',
        author: 'Équipe Atlas',
        reading_time_minutes: 20,
        difficulty_level: 'intermediaire',
        tags: JSON.stringify(['Révolution', 'Guerres mondiales', 'Décolonisation', 'Mondialisation']),
        published: true,
        metadata: JSON.stringify({
          definitions: [
            { terme: 'Révolution industrielle', definition: 'Transformation de l\'économie par la mécanisation à partir de la fin du XVIIIe siècle.' },
            { terme: 'Guerre totale', definition: 'Conflit mobilisant toutes les ressources d\'un pays : armée, civils, industrie.' },
            { terme: 'Shoah', definition: 'Génocide de 6 millions de Juifs par l\'Allemagne nazie (1941-1945).' },
          ],
          faits_importants: [
            'La nuit du 4 août 1789, l\'Assemblée abolit les privilèges de la noblesse et du clergé.',
            'La Seconde Guerre mondiale cause 70 à 85 millions de morts.',
            'Droit de vote des femmes : Nouvelle-Zélande (1893), France (1944), Suisse (1971).',
          ],
          anecdote: 'Quand le premier chemin de fer est inauguré en 1830, des médecins prédisent que les passagers vont s\'évanouir à 30 km/h. Moins de 100 ans plus tard, les trains atteignent 200 km/h.',
          videos_educatives: [
            { titre: 'La Première Guerre mondiale', source: 'Lumni', url: 'https://www.lumni.fr/video/la-premiere-guerre-mondiale' },
            { titre: 'La Guerre froide expliquée', source: 'Lumni', url: 'https://www.lumni.fr/video/la-guerre-froide' },
          ],
        }),
      },

      // ── GÉOLOGIE ──────────────────────────────────────────────
      {
        slug: 'la-formation-de-la-terre',
        title: 'La formation de la Terre',
        subtitle: 'Comment notre planète est-elle née il y a 4,6 milliards d\'années ?',
        content: 'La Terre s\'est formée à partir d\'un nuage de gaz et de poussières. Les matériaux lourds ont coulé vers le centre (noyau), les légers sont remontés (manteau, croûte). L\'eau est arrivée via des comètes.',
        summary: 'Nébuleuse solaire, accrétion, différenciation des couches terrestres et apparition de la vie.',
        category: 'geology',
        author: 'Équipe Atlas',
        reading_time_minutes: 14,
        difficulty_level: 'debutant',
        tags: JSON.stringify(['Terre', 'Formation', 'Système solaire', 'Noyau', 'Atmosphère']),
        published: true,
        metadata: JSON.stringify({
          definitions: [
            { terme: 'Nébuleuse solaire', definition: 'Nuage de gaz et de poussières d\'où sont nés le Soleil et les planètes.' },
            { terme: 'Noyau terrestre', definition: 'Centre de la Terre composé de fer et nickel (5 500 °C).' },
            { terme: 'Croûte terrestre', definition: 'Fine couche de roche solide en surface (5-70 km), sur laquelle nous vivons.' },
          ],
          faits_importants: [
            'Le noyau interne est aussi chaud que la surface du Soleil (~5 500 °C).',
            'Si la Terre était une pomme, la croûte serait aussi fine que sa peau.',
            'La Lune s\'est formée après qu\'un objet de la taille de Mars a percuté la Terre.',
          ],
          anecdote: 'Il y a 700 millions d\'années, la Terre a été presque entièrement recouverte de glace (« Terre boule de neige »). La vie a survécu grâce aux sources chaudes sous-marines !',
          videos_educatives: [
            { titre: 'L\'histoire de la Terre en 10 minutes', source: 'Lumni', url: 'https://www.lumni.fr/video/histoire-de-la-terre' },
          ],
        }),
      },
      {
        slug: 'les-plaques-tectoniques',
        title: 'Les plaques tectoniques',
        subtitle: 'La surface de la Terre est un gigantesque puzzle en mouvement',
        content: 'La surface de la Terre est découpée en 15 plaques tectoniques qui « flottent » sur l\'asthénosphère. Elles bougent de quelques centimètres par an, provoquant séismes, volcans et formation de montagnes.',
        summary: 'Divergence, convergence, subduction — les mouvements qui façonnent le relief terrestre.',
        category: 'geology',
        author: 'Équipe Atlas',
        reading_time_minutes: 14,
        difficulty_level: 'intermediaire',
        tags: JSON.stringify(['Tectonique', 'Plaques', 'Séismes', 'Dorsales', 'Subduction']),
        published: true,
        metadata: JSON.stringify({
          definitions: [
            { terme: 'Plaque tectonique', definition: 'Morceau rigide de lithosphère (70-150 km d\'épaisseur) se déplaçant sur l\'asthénosphère.' },
            { terme: 'Subduction', definition: 'Plongée d\'une plaque sous une autre, créant volcans et fosses océaniques.' },
            { terme: 'Dorsale océanique', definition: 'Chaîne de montagnes sous-marines où deux plaques s\'écartent (65 000 km de long).' },
          ],
          faits_importants: [
            'La Ceinture de feu du Pacifique concentre 90 % des séismes du monde.',
            'La fosse des Mariannes (11 034 m) est plus profonde que l\'Everest n\'est haut.',
            'L\'Himalaya s\'élève encore de 5 mm par an.',
          ],
          anecdote: 'En 1963, Vine et Matthews ont prouvé la tectonique en étudiant les bandes magnétiques alternées du fond océanique — comme un enregistreur géant !',
          videos_educatives: [
            { titre: 'La tectonique des plaques — C\'est pas sorcier', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-tectonique' },
          ],
        }),
      },
      {
        slug: 'les-volcans',
        title: 'Les volcans',
        subtitle: 'Quand la Terre crache le feu : comprendre le volcanisme',
        content: 'Un volcan est une ouverture par laquelle remontent magma, gaz et cendres. Les éruptions effusives (lave fluide) sont moins dangereuses que les explosives (nuées ardentes).',
        summary: 'Chambre magmatique, éruptions effusives vs explosives, Ceinture de feu et volcans célèbres.',
        category: 'geology',
        author: 'Équipe Atlas',
        reading_time_minutes: 16,
        difficulty_level: 'intermediaire',
        tags: JSON.stringify(['Volcans', 'Éruptions', 'Magma', 'Lave', 'Ceinture de feu']),
        published: true,
        metadata: JSON.stringify({
          definitions: [
            { terme: 'Magma', definition: 'Roche en fusion (1 000-1 300 °C) sous la surface terrestre.' },
            { terme: 'Nuée ardente', definition: 'Nuage brûlant (200-700 °C) dévalant les pentes à plus de 100 km/h.' },
            { terme: 'Stratovolcan', definition: 'Volcan conique formé par alternance de lave et cendres (Fuji, Vésuve, Etna).' },
          ],
          faits_importants: [
            'Il y a environ 1 500 volcans actifs sur Terre.',
            'Le Krakatoa (1883) a produit le son le plus fort jamais enregistré, entendu à 5 000 km.',
            'Les volcans sous-marins sont 3 fois plus nombreux que les volcans terrestres.',
          ],
          anecdote: 'Le 8 mai 1902, la montagne Pelée détruit Saint-Pierre (Martinique) en 2 minutes. Un seul survivant : Louis-Auguste Cyparis, un prisonnier protégé par les murs de son cachot !',
          videos_educatives: [
            { titre: 'Les volcans — C\'est pas sorcier', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-volcans' },
            { titre: 'Volcans effusifs et explosifs', source: 'Lumni', url: 'https://www.lumni.fr/video/volcans-effusifs-explosifs' },
          ],
        }),
      },
      {
        slug: 'les-montagnes',
        title: 'Les montagnes',
        subtitle: 'Comment naissent les montagnes et pourquoi sont-elles si différentes ?',
        content: 'Les montagnes se forment par collision de plaques tectoniques, volcanisme ou failles. Les jeunes montagnes sont pointues (Alpes), les anciennes sont arrondies par l\'érosion (Vosges).',
        summary: 'Orogenèse, collision des plaques, érosion — Himalaya, Alpes, Andes et les grandes chaînes du monde.',
        category: 'geology',
        author: 'Équipe Atlas',
        reading_time_minutes: 14,
        difficulty_level: 'intermediaire',
        tags: JSON.stringify(['Montagnes', 'Relief', 'Alpes', 'Himalaya', 'Érosion']),
        published: true,
        metadata: JSON.stringify({
          definitions: [
            { terme: 'Orogenèse', definition: 'Processus géologique de formation des montagnes par collision de plaques.' },
            { terme: 'Érosion', definition: 'Usure progressive des roches par le vent, l\'eau, le gel et les glaciers.' },
            { terme: 'Glacier', definition: 'Masse de glace formée par l\'accumulation de neige sur des milliers d\'années.' },
          ],
          faits_importants: [
            'L\'Everest grandit encore de 4 mm par an.',
            'Les montagnes couvrent 25 % des continents et abritent 12 % de la population.',
            'Les Vosges et la Forêt-Noire étaient la même montagne, séparée par le fossé rhénan.',
          ],
          anecdote: 'En 1924, on a découvert des fossiles de coquillages marins à plus de 8 000 m sur l\'Everest. Les roches du sommet étaient autrefois au fond de la mer !',
          videos_educatives: [
            { titre: 'Comment se forment les montagnes ?', source: 'C\'est pas sorcier', url: 'https://www.youtube.com/watch?v=cps-montagnes' },
          ],
        }),
      },
    ])
    .returning('*');

  // ── Sections détaillées pour quelques articles clés ──────────
  const continents = articles.find((a: any) => a.slug === 'les-continents-du-monde');
  const prehistoire = articles.find((a: any) => a.slug === 'la-prehistoire');
  const antiquite = articles.find((a: any) => a.slug === 'l-antiquite');
  const volcansArt = articles.find((a: any) => a.slug === 'les-volcans');
  const contemp = articles.find((a: any) => a.slug === 'l-epoque-contemporaine');
  const plaques = articles.find((a: any) => a.slug === 'les-plaques-tectoniques');

  await knex('article_sections').insert([
    // Continents
    { article_id: continents.id, title: 'Qu\'est-ce qu\'un continent ?', content: 'Un continent est une grande étendue de terre émergée, entourée par des océans. On en compte 6 : l\'Asie (le plus grand, 60 % de la population mondiale), l\'Afrique (54 pays, berceau de l\'humanité), l\'Amérique (du cercle arctique à la Terre de Feu), l\'Antarctique (recouvert de glace, réservé à la science), l\'Europe (le plus petit habité) et l\'Océanie (composée principalement d\'îles).', sort_order: 1 },
    { article_id: continents.id, title: 'La Pangée et la dérive', content: 'Il y a 300 millions d\'années, tous les continents étaient réunis en un seul supercontinent : la Pangée. Sous l\'effet des mouvements du manteau terrestre, la Pangée s\'est fragmentée. Les morceaux ont lentement dérivé jusqu\'à leur position actuelle — et ils continuent de bouger !', sort_order: 2 },

    // Préhistoire
    { article_id: prehistoire.id, title: 'Le Paléolithique : chasseurs-cueilleurs', content: 'Au Paléolithique (3 Ma — 10 000 av. J.-C.), les humains sont des chasseurs-cueilleurs nomades. Ils taillent la pierre (bifaces, grattoirs), maîtrisent le feu (~400 000 ans) et créent les premières œuvres d\'art. La grotte de Lascaux (Dordogne, ~18 000 ans) contient plus de 600 peintures d\'animaux. La grotte Chauvet (Ardèche, ~36 000 ans) abrite les plus anciennes peintures connues.', sort_order: 1 },
    { article_id: prehistoire.id, title: 'Le Néolithique : la révolution agricole', content: 'Vers 10 000 av. J.-C., dans le Croissant fertile, les humains inventent l\'agriculture (blé, orge) et l\'élevage (mouton, chèvre). C\'est la « révolution néolithique ». Au lieu de chercher la nourriture, on la produit. Les humains se sédentarisent, construisent des villages, inventent la poterie et le tissage, érigent des mégalithes (Carnac, Stonehenge).', sort_order: 2 },
    { article_id: prehistoire.id, title: 'Vers l\'écriture', content: 'L\'accroissement des échanges et de la population amène le besoin de compter et d\'enregistrer. Vers 3 300 av. J.-C., en Mésopotamie, apparaissent les premières écritures (cunéiforme). En Égypte naissent les hiéroglyphes. C\'est la fin de la Préhistoire et le début de l\'Histoire.', sort_order: 3 },

    // Antiquité
    { article_id: antiquite.id, title: 'Mésopotamie et Égypte', content: 'La Mésopotamie invente l\'écriture cunéiforme, le code de Hammurabi (premières lois) et le système base 60 (60 minutes dans une heure !). L\'Égypte développe les hiéroglyphes, construit les pyramides de Gizeh, et son calendrier solaire est l\'ancêtre du nôtre.', sort_order: 1 },
    { article_id: antiquite.id, title: 'La Grèce antique', content: 'La Grèce invente la démocratie (Athènes, ~508 av. J.-C.), la philosophie (Socrate, Platon, Aristote), le théâtre et les Jeux olympiques (776 av. J.-C.). Alexandre le Grand étend la culture grecque de l\'Égypte à l\'Inde.', sort_order: 2 },
    { article_id: antiquite.id, title: 'Rome antique', content: 'Rome passe de la monarchie à la République (509 av. J.-C.) puis à l\'Empire (27 av. J.-C.). Les Romains laissent un héritage immense : le droit romain (base de nos lois), le latin (origine des langues romanes), les routes (80 000 km) et l\'architecture (Colisée, Panthéon, aqueducs).', sort_order: 3 },

    // Volcans
    { article_id: volcansArt.id, title: 'Anatomie d\'un volcan', content: 'Un volcan se compose d\'une chambre magmatique (réservoir de roche fondue à 1 000 °C), d\'une cheminée (conduit vers la surface) et d\'un cratère. On distingue les volcans actifs, dormants et éteints. Il en existe environ 1 500 actifs sur Terre.', sort_order: 1 },
    { article_id: volcansArt.id, title: 'Éruptions effusives', content: 'Le magma fluide (basaltique, pauvre en silice) s\'écoule en coulées le long des pentes. C\'est spectaculaire mais moins dangereux car on peut évacuer. Exemples : Piton de la Fournaise (La Réunion), Kilauea (Hawaï). Forme un volcan bouclier, large et plat.', sort_order: 2 },
    { article_id: volcansArt.id, title: 'Éruptions explosives', content: 'Le magma visqueux (riche en silice) forme un bouchon qui explose violemment, projetant cendres, bombes et nuées ardentes (200-700 °C, 100 km/h). Très dangereux. Exemples : Vésuve (Pompéi, 79), Mont Saint Helens (1980). Forme un stratovolcan conique.', sort_order: 3 },
    { article_id: volcansArt.id, title: 'Les volcans célèbres', content: 'Le Tambora (1815) a causé « l\'année sans été ». Le Krakatoa (1883) a été entendu à 5 000 km. Le supervolcan de Yellowstone possède une chambre de 56 000 km³. Le Piton de la Fournaise entre en éruption tous les 8 mois environ.', sort_order: 4 },

    // Époque contemporaine
    { article_id: contemp.id, title: 'La Révolution française et Napoléon', content: 'La prise de la Bastille (14 juillet 1789) lance la Révolution. La Déclaration des droits de l\'homme proclame l\'égalité. Napoléon modernise la France (Code civil, lycées, Banque de France) avant d\'être vaincu à Waterloo (1815).', sort_order: 1 },
    { article_id: contemp.id, title: 'Les guerres mondiales', content: 'La Première Guerre mondiale (1914-1918) mobilise 70 millions de soldats. Verdun symbolise l\'horreur des tranchées. La Seconde Guerre mondiale (1939-1945) est le conflit le plus meurtrier (70-85 millions de morts). La Shoah extermine 6 millions de Juifs.', sort_order: 2 },
    { article_id: contemp.id, title: 'Le monde d\'après-guerre', content: 'L\'ONU est créée en 1945. La Guerre froide (USA vs URSS) domine 1947-1991. La décolonisation libère des dizaines de pays. La chute du mur de Berlin (1989) et la naissance d\'Internet transforment le monde.', sort_order: 3 },

    // Plaques tectoniques
    { article_id: plaques.id, title: 'Frontières divergentes', content: 'Les plaques s\'écartent. Du magma remonte et crée de la nouvelle croûte océanique. C\'est le cas de la dorsale médio-atlantique (65 000 km sous l\'eau) et du Rift est-africain.', sort_order: 1 },
    { article_id: plaques.id, title: 'Frontières convergentes', content: 'Les plaques se rapprochent. Une plaque plonge sous l\'autre (subduction), créant volcans et fosses. Ou deux continents entrent en collision, formant des montagnes (Himalaya = collision Inde-Asie).', sort_order: 2 },
    { article_id: plaques.id, title: 'Frontières transformantes', content: 'Les plaques glissent latéralement l\'une contre l\'autre. Les tensions accumulées se libèrent en séismes puissants, mais sans volcans. Exemple : faille de San Andreas (Californie).', sort_order: 3 },
  ]);
}
