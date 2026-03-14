import type { Knex } from 'knex';

/**
 * Seed 013 – 40 articles encyclopediques publies couvrant
 * geographie, histoire, geologie, sciences, culture, guerre et politique.
 * Utilise ON CONFLICT (slug) DO NOTHING pour eviter les doublons.
 */
export async function seed(knex: Knex): Promise<void> {
  const articles = [
    // ═══════════════════════════════════════════════════════════════
    // GEOGRAPHIE (8 articles)
    // ═══════════════════════════════════════════════════════════════
    {
      slug: 'les-grands-fleuves-du-monde',
      title: 'Les grands fleuves du monde',
      subtitle: 'Ces cours d\'eau qui ont faconne les civilisations',
      content: `## Les grands fleuves du monde

Les fleuves sont bien plus que de simples cours d'eau : ils sont le berceau des civilisations, les arteres vitales des continents et des acteurs majeurs de la geographie mondiale. Depuis l'Antiquite, les hommes se sont installes pres des fleuves pour beneficier de l'eau douce, des terres fertiles et des voies de communication.

### Le Nil : le fleuve de l'Egypte

Le **Nil** est le plus long fleuve d'Afrique et l'un des plus longs du monde (6 650 km). Il prend sa source dans la region des Grands Lacs africains et se jette dans la Mediterranee par un vaste delta. Le Nil a permis la naissance de la civilisation egyptienne grace a ses crues annuelles qui deposaient un limon fertile sur les rives. Sans le Nil, l'Egypte ne serait qu'un desert. Aujourd'hui, le barrage d'Assouan (construit en 1970) regule les crues et produit de l'electricite pour tout le pays.

### L'Amazone : le geant d'Amerique du Sud

L'**Amazone** est le fleuve le plus puissant du monde par son debit : il deverse dans l'Atlantique 209 000 m³ d'eau par seconde, soit un cinquieme de l'eau douce de tous les fleuves du monde. Long de 6 992 km, il traverse la foret amazonienne, le plus grand ecosysteme forestier de la planete. Son bassin versant couvre 7 millions de km², soit plus que la superficie de l'Union europeenne. L'Amazone abrite une biodiversite exceptionnelle : dauphins roses, piranhas, anacondas et des milliers d'especes de poissons.

### Le Yangzi (Chang Jiang) : le fleuve de la Chine

Le **Yangzi** (6 300 km) est le plus long fleuve d'Asie. Il prend sa source sur le plateau tibetain et traverse la Chine d'ouest en est. Le barrage des Trois-Gorges, acheve en 2006, est le plus grand barrage hydroelectrique du monde. Le Yangzi est une voie de navigation majeure et irrigue les rizieres qui nourrissent des centaines de millions de Chinois.

### Le Mississippi-Missouri : l'artere de l'Amerique du Nord

Le systeme **Mississippi-Missouri** (6 275 km) draine 40 % du territoire des Etats-Unis. Le Mississippi a joue un role crucial dans l'histoire americaine : commerce du coton, navigation a vapeur (immortalisee par Mark Twain), et commerce fluvial. Aujourd'hui, il reste une voie de transport majeure pour les cereales et le petrole.

### Le Danube : le fleuve europeen

Le **Danube** (2 857 km) est le deuxieme plus long fleuve d'Europe. Il traverse 10 pays, de l'Allemagne a la Roumanie, et se jette dans la mer Noire. Il a ete une frontiere de l'Empire romain (le limes) et reste aujourd'hui un axe majeur de navigation et de cooperation europeenne.

### Les enjeux contemporains

Les fleuves font face a des defis majeurs : **pollution** industrielle et agricole, **surexploitation** de l'eau pour l'irrigation, **construction de barrages** qui perturbent les ecosystemes, et **changement climatique** qui modifie les regimes hydrologiques. La gestion durable des fleuves est un enjeu planetaire du XXIe siecle. Les conflits lies a l'eau (Nil, Jourdain, Mekong) montrent que les fleuves sont aussi des enjeux geopolitiques.`,
      summary: 'Les grands fleuves du monde (Nil, Amazone, Yangzi, Mississippi, Danube) ont faconne les civilisations et restent des arteres vitales pour les populations. Ils fournissent eau douce, terres fertiles et voies de communication. Aujourd\'hui, ils font face a la pollution, la surexploitation et le changement climatique. La gestion durable des fleuves est un enjeu planetaire majeur.',
      category: 'geography',
      subcategory: 'Hydrographie',
      cover_image_url: null,
      author: 'Équipe Atlas',
      reading_time_minutes: 12,
      difficulty_level: 'debutant',
      tags: JSON.stringify(['Fleuves', 'Nil', 'Amazone', 'Yangzi', 'Mississippi', 'Danube', 'Eau']),
      published: true,
      metadata: JSON.stringify({
        definitions: [
          { terme: 'Bassin versant', definition: 'Territoire dont toutes les eaux convergent vers un meme fleuve.' },
          { terme: 'Delta', definition: 'Zone triangulaire formee par les sediments deposes a l\'embouchure d\'un fleuve.' },
          { terme: 'Debit', definition: 'Volume d\'eau qui s\'ecoule en un point donne par unite de temps (m³/s).' },
        ],
        faits_importants: [
          'L\'Amazone deverse 1/5 de toute l\'eau douce des fleuves dans l\'ocean.',
          'Le Nil a permis la naissance de la civilisation egyptienne il y a 5 000 ans.',
          'Le Danube traverse 10 pays, un record mondial.',
        ],
        chronologie: [
          { date: '-3100', evenement: 'Naissance de la civilisation egyptienne le long du Nil' },
          { date: '1970', evenement: 'Construction du barrage d\'Assouan' },
          { date: '2006', evenement: 'Achevement du barrage des Trois-Gorges (Yangzi)' },
        ],
        anecdote: 'L\'embouchure de l\'Amazone est si large qu\'on ne voit pas l\'autre rive. L\'ile de Marajo, dans son delta, est plus grande que la Suisse !',
        videos_educatives: [],
      }),
    },
    {
      slug: 'le-relief-terrestre-montagnes-et-plaines',
      title: 'Le relief terrestre : montagnes et plaines',
      subtitle: 'Comprendre les grandes formes du paysage',
      content: `## Le relief terrestre : montagnes et plaines

Le relief designe l'ensemble des formes de la surface terrestre : montagnes, plaines, plateaux, vallees, collines. Il resulte de forces internes (tectonique des plaques, volcanisme) et de forces externes (erosion par l'eau, le vent, la glace). Comprendre le relief, c'est comprendre comment la Terre se transforme en permanence.

### Les montagnes

Les **montagnes** sont des reliefs eleves, generalement au-dessus de 600 m d'altitude. On distingue les **jeunes montagnes** (Alpes, Himalaya, Andes), aux sommets aigus et eleves, formees par la collision des plaques tectoniques, et les **vieilles montagnes** (Massif central, Appalaches, Oural), aux sommets arrondis et uses par l'erosion. L'**Himalaya** abrite les 14 sommets de plus de 8 000 m, dont l'Everest (8 849 m). Les Alpes, formees par la collision entre les plaques africaine et eurasienne, culminent au Mont Blanc (4 808 m). Les montagnes representent environ 24 % de la surface terrestre et abritent 12 % de la population mondiale. Elles sont des reserves d'eau douce (glaciers, sources), des espaces de biodiversite et des barrieres climatiques.

### Les plaines

Les **plaines** sont des etendues plates situees a basse altitude (moins de 200 m). Elles occupent de vastes surfaces sur tous les continents : la plaine de Chine du Nord, les Grandes Plaines americaines, la plaine du Po en Italie, le Bassin parisien en France. Les plaines sont souvent des zones agricoles tres fertiles car elles beneficient de sols alluviaux deposes par les fleuves. Elles concentrent aussi les grandes villes et les reseaux de transport. Les plaines cotieres sont particulierement menacees par la montee des eaux liee au changement climatique.

### Les plateaux

Les **plateaux** sont des surfaces planes situees en altitude. Le plateau tibetain (« toit du monde ») est le plus grand et le plus haut du monde (4 500 m d'altitude moyenne). Le plateau bresilien, le plateau du Deccan en Inde et la Meseta espagnole sont d'autres exemples. Les plateaux peuvent etre des zones de paturage (steppes) ou des deserts d'altitude.

### L'erosion : sculptrice du relief

L'**erosion** est l'usure progressive du relief par des agents naturels. L'eau (pluie, rivieres, vagues) creuse des vallees, des gorges (Grand Canyon) et des falaises. Le vent sculpte les roches dans les deserts (arches naturelles). La glace (glaciers) creuse des vallees en U et des cirques glaciaires. L'erosion detruit les montagnes au fil de millions d'annees : les Alpes perdent quelques millimetres par an.

### Pourquoi le relief est important

Le relief influence le **climat** (les montagnes bloquent les masses d'air), la **repartition des populations** (les plaines sont plus peuplees), l'**agriculture** (sols plus ou moins fertiles), les **transports** (les montagnes sont des obstacles) et la **biodiversite** (chaque etage de montagne a sa vegetation). Comprendre le relief est essentiel pour comprendre la geographie du monde.`,
      summary: 'Le relief terrestre comprend montagnes, plaines, plateaux et vallees. Les jeunes montagnes (Alpes, Himalaya) sont formees par la tectonique des plaques, tandis que les vieilles montagnes (Massif central) sont usees par l\'erosion. Les plaines, zones plates et fertiles, concentrent les populations et l\'agriculture. Le relief influence le climat, les transports et la biodiversite.',
      category: 'geography',
      subcategory: 'Relief',
      cover_image_url: null,
      author: 'Équipe Atlas',
      reading_time_minutes: 10,
      difficulty_level: 'debutant',
      tags: JSON.stringify(['Relief', 'Montagnes', 'Plaines', 'Erosion', 'Tectonique']),
      published: true,
      metadata: JSON.stringify({
        definitions: [
          { terme: 'Relief', definition: 'Ensemble des formes de la surface terrestre (montagnes, plaines, etc.).' },
          { terme: 'Erosion', definition: 'Usure progressive du relief par l\'eau, le vent ou la glace.' },
          { terme: 'Plateau', definition: 'Surface plane situee en altitude.' },
        ],
        faits_importants: [
          'L\'Himalaya grandit encore de 5 mm par an.',
          'Les plaines occupent environ 55 % de la surface terrestre.',
          'Le Grand Canyon a ete creuse par le Colorado en 5 millions d\'annees.',
        ],
        chronologie: [],
        anecdote: 'L\'Everest grandit d\'environ 4 mm par an a cause de la collision entre l\'Inde et l\'Asie. En meme temps, l\'erosion le rabote !',
        videos_educatives: [],
      }),
    },
