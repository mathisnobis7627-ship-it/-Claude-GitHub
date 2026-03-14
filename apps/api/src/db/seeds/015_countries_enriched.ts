import type { Knex } from 'knex';

/**
 * Seed 015 – Enrichit les pays avec donnees geographiques et 4 periodes historiques.
 * Utilise INSERT ... ON CONFLICT DO NOTHING pour eviter les doublons.
 * Ne supprime aucune donnee existante.
 */
export async function seed(knex: Knex): Promise<void> {
  const countries = await knex('countries').select('id', 'code_iso2', 'name');
  const getCountryId = (code: string) => countries.find((c: any) => c.code_iso2 === code)?.id;

  // ── GEOGRAPHIE ─────────────────────────────────────────────────────

  const geographyData = [
    {
      code: 'FR',
      climate: 'Tempere oceanique a l\'ouest, continental a l\'est, mediterraneen au sud',
      terrain: 'Plaines au nord et a l\'ouest, montagnes au sud (Pyrenees) et a l\'est (Alpes, Jura, Vosges), Massif central au centre',
      natural_resources: ['Charbon', 'Fer', 'Bauxite', 'Zinc', 'Uranium', 'Bois', 'Potasse'],
      land_use: { arable: 33.5, forets: 31, paturages: 17.2, autres: 18.3 },
      elevation_highest: 'Mont Blanc (4 808 m)',
      elevation_lowest: 'Delta du Rhone (-2 m)',
      coastline_km: 3427,
      description_text: `La France metropolitaine s'etend sur 551 695 km², ce qui en fait le plus grand pays d'Europe occidentale. Sa geographie est remarquablement diversifiee. Au nord et a l'ouest, de vastes plaines sedimentaires (Bassin parisien, plaine de Flandre) offrent des terres agricoles parmi les plus fertiles d'Europe. Le Massif central, au coeur du pays, est un vieux massif hercynien dont les volcans eteints de la chaine des Puys temoignent d'une activite volcanique ancienne. Au sud, les Pyrenees forment une frontiere naturelle avec l'Espagne, tandis qu'a l'est, les Alpes culminent au Mont Blanc (4 808 m), point le plus eleve d'Europe occidentale. La France possede quatre facades maritimes : la Manche, l'Atlantique, la Mediterranee et la mer du Nord. Cinq grands fleuves irriguent le territoire : la Seine, la Loire (le plus long, 1 012 km), la Garonne, le Rhone et le Rhin. Le climat varie considerablement : oceanique et doux a l'ouest, continental avec des hivers froids a l'est, mediterraneen avec des etes chauds et secs au sud. Cette diversite climatique et topographique explique la richesse des paysages francais, des falaises d'Etretat aux calanques de Marseille, des forets vosgiennes aux plages de Corse.`,
    },
    {
      code: 'DE',
      climate: 'Tempere continental, plus froid au nord-est, plus doux a l\'ouest (influence oceanique)',
      terrain: 'Plaine du Nord, moyennes montagnes au centre (Harz, Foret-Noire, Erzgebirge), Alpes bavaroises au sud',
      natural_resources: ['Charbon', 'Lignite', 'Fer', 'Sel', 'Potasse', 'Bois'],
      land_use: { arable: 34.1, forets: 32.3, paturages: 13.5, autres: 20.1 },
      elevation_highest: 'Zugspitze (2 962 m)',
      elevation_lowest: 'Neuendorf-Sachsenbande (-3,5 m)',
      coastline_km: 2389,
      description_text: `L'Allemagne couvre 357 114 km² au coeur de l'Europe. Le relief s'organise en trois grands ensembles du nord au sud. La grande plaine du Nord (Norddeutsche Tiefebene) s'etend de la mer du Nord et de la Baltique jusqu'aux moyennes montagnes. Cette region de moraines et de lacs (Mecklembourg) est le grenier a ble du pays. Au centre, les moyennes montagnes (Mittelgebirge) forment un paysage varie : la Foret-Noire (Schwarzwald), le massif du Harz, les monts de Thuringe et l'Erzgebirge. Ces massifs hercyniens, couverts de forets de coniferes, sont des espaces de tourisme et de loisirs. Au sud, le plateau bavarois s'eleve progressivement vers les Alpes, ou culmine la Zugspitze a 2 962 m. L'Allemagne est traversee par de grands fleuves : le Rhin (frontiere occidentale puis axe majeur de navigation), l'Elbe, le Danube (qui coule vers l'est) et le Weser. Le climat est tempere continental, avec des hivers froids (temperatures negatives frequentes) et des etes doux. La Baviere connait des etés plus chauds mais aussi des hivers plus rigoureux a cause de l'altitude.`,
    },
    {
      code: 'IT',
      climate: 'Mediterraneen au sud, continental au nord (plaine du Po), alpin en montagne',
      terrain: 'Plaine du Po au nord, Apennins sur toute la peninsule, iles volcaniques (Sicile, Sardaigne)',
      natural_resources: ['Marbre', 'Soufre', 'Mercure', 'Gaz naturel', 'Pierre ponce'],
      land_use: { arable: 22.8, forets: 31.4, paturages: 8.1, autres: 37.7 },
      elevation_highest: 'Mont Blanc de Courmayeur (4 748 m)',
      elevation_lowest: 'Jolanda di Savoia (-3,4 m)',
      coastline_km: 7600,
      description_text: `L'Italie s'etend sur 301 338 km² sous la forme d'une peninsule en forme de botte plongeant dans la Mediterranee. Au nord, la plaine du Po, la plus grande plaine d'Italie, est un espace agricole et industriel majeur, delimite par les Alpes au nord et les Apennins au sud. La chaine des Apennins traverse toute la peninsule sur plus de 1 200 km, du Piemont a la Calabre. L'Italie compte deux grandes iles : la Sicile (25 711 km²) et la Sardaigne (24 090 km²). Le pays possede une activite volcanique notable avec l'Etna (3 357 m, le plus haut volcan actif d'Europe), le Vesuve pres de Naples et le Stromboli dans les iles Eoliennes. Le climat varie du mediterraneen chaud et sec au sud au continental plus humide dans la plaine du Po. Les cotes italiennes, longues de 7 600 km, offrent des paysages varies : falaises d'Amalfi, lagune de Venise, plages de Sardaigne. L'Italie est aussi un pays de grands lacs alpins : le lac de Garde, le lac de Come et le lac Majeur.`,
    },
    {
      code: 'GB',
      climate: 'Oceanique tempere, doux et humide toute l\'annee, influence du Gulf Stream',
      terrain: 'Highlands ecossais au nord, plaines au centre et sud de l\'Angleterre, montagnes du Pays de Galles',
      natural_resources: ['Petrole (mer du Nord)', 'Gaz naturel', 'Charbon', 'Etain', 'Ardoise'],
      land_use: { arable: 25.1, forets: 13, paturages: 45.8, autres: 16.1 },
      elevation_highest: 'Ben Nevis (1 345 m)',
      elevation_lowest: 'The Fens (-4 m)',
      coastline_km: 12429,
      description_text: `Le Royaume-Uni couvre 243 610 km² sur l'archipel britannique, comprenant la Grande-Bretagne (Angleterre, Ecosse, Pays de Galles) et l'Irlande du Nord. L'Angleterre occupe la partie sud et est de la Grande-Bretagne : ses plaines fertiles (Midlands, bassin de Londres) contrastent avec les collines du Lake District et les Pennines. L'Ecosse, au nord, est dominee par les Highlands, region montagneuse sauvage ou culmine le Ben Nevis (1 345 m). Les iles ecossaises (Hebrides, Orcades, Shetland) sont battues par les vents et les tempetes. Le Pays de Galles possede un relief montagneux (Snowdonia, 1 085 m) et des cotes decoupees. Le climat oceanique, influence par le Gulf Stream, assure des temperatures douces toute l'annee mais aussi des precipitations abondantes (jusqu'a 4 000 mm/an dans les Highlands). Les cotes du Royaume-Uni, longues de 12 429 km, sont extremement decoupees : falaises blanches de Douvres, fjords ecossais (lochs), plages du Cornwall. La Tamise (346 km) traverse Londres, tandis que la Severn (354 km) est le plus long fleuve britannique.`,
    },
    {
      code: 'ES',
      climate: 'Mediterraneen sur les cotes, continental sec sur le plateau central (Meseta), oceanique au nord',
      terrain: 'Plateau central (Meseta), chaines de montagnes peripheriques, plaines cotieres etroites',
      natural_resources: ['Charbon', 'Lignite', 'Fer', 'Cuivre', 'Plomb', 'Zinc', 'Mercure'],
      land_use: { arable: 24.9, forets: 36.8, paturages: 21.4, autres: 16.9 },
      elevation_highest: 'Teide, Tenerife (3 718 m)',
      elevation_lowest: 'Niveau de la mer (0 m)',
      coastline_km: 4964,
      description_text: `L'Espagne occupe 505 990 km² sur la peninsule iberique, ce qui en fait le deuxieme plus grand pays d'Europe. Son relief est domine par la Meseta, vaste plateau central situe entre 600 et 800 m d'altitude, encadre par des chaines de montagnes : la Cordillere cantabrique au nord, le Systeme central qui divise la Meseta en deux, la Sierra Morena au sud et le Systeme iberique a l'est. Au sud, la Sierra Nevada culmine au Mulhacen (3 479 m). Les iles Canaries, d'origine volcanique, se trouvent au large de l'Afrique et abritent le Teide (3 718 m), point culminant de l'Espagne. Le climat est tres contraste : mediterraneen chaud et sec sur les cotes est et sud, continental sec avec des hivers froids sur la Meseta, oceanique et humide au nord (Galice, Pays basque). L'Espagne possede de grands fleuves : l'Ebre (vers la Mediterranee), le Tage, le Guadalquivir, le Duero et le Guadiana (vers l'Atlantique). La cote espagnole (4 964 km) offre des plages celebres : Costa Brava, Costa del Sol, iles Baleares.`,
    },
    {
      code: 'US',
      climate: 'Tres diversifie : tempere au nord-est, subtropical au sud-est, aride a l\'ouest, arctique en Alaska',
      terrain: 'Plaines centrales (Great Plains), montagnes Rocheuses a l\'ouest, Appalaches a l\'est',
      natural_resources: ['Petrole', 'Gaz naturel', 'Charbon', 'Cuivre', 'Or', 'Fer', 'Uranium', 'Bois'],
      land_use: { arable: 16.8, forets: 33.9, paturages: 26.9, autres: 22.4 },
      elevation_highest: 'Denali, Alaska (6 190 m)',
      elevation_lowest: 'Badwater Basin, Vallee de la Mort (-86 m)',
      coastline_km: 19924,
      description_text: `Les Etats-Unis couvrent 9,83 millions de km², le troisieme plus grand pays du monde. Le relief s'organise en trois grandes bandes nord-sud. A l'est, les Appalaches, vieilles montagnes usees culminant au mont Mitchell (2 037 m), bordent la plaine cotiere atlantique. Au centre, les Grandes Plaines (Great Plains) s'etendent du golfe du Mexique au Canada, formant le grenier a ble du monde. A l'ouest, les montagnes Rocheuses s'elevent brutalement jusqu'a 4 401 m (mont Elbert), suivies des plateaux arides du Grand Bassin et de la Sierra Nevada. L'Alaska ajoute paysages arctiques et le plus haut sommet d'Amerique du Nord, le Denali (6 190 m). Hawaii offre des iles volcaniques tropicales. Le Mississippi-Missouri (6 275 km) est le plus long systeme fluvial d'Amerique du Nord. Le climat va du subtropical de la Floride au subarctique de l'Alaska, en passant par le desert de l'Arizona et les forets pluviales du Pacifique Nord-Ouest. Les Grands Lacs (Superieur, Michigan, Huron, Erie, Ontario) constituent la plus grande reserve d'eau douce de surface au monde.`,
    },
    {
      code: 'JP',
      climate: 'Subtropical au sud (Okinawa), tempere au centre (Honshu), subarctique au nord (Hokkaido)',
      terrain: 'Archipel montagneux et volcanique, plaines cotieres etroites, forets denses',
      natural_resources: ['Poisson', 'Bois', 'Cuivre', 'Zinc', 'Calcaire', 'Sources geothermiques'],
      land_use: { arable: 11.7, forets: 68.5, paturages: 1.5, autres: 18.3 },
      elevation_highest: 'Mont Fuji (3 776 m)',
      elevation_lowest: 'Hachirogata (-4 m)',
      coastline_km: 29751,
      description_text: `Le Japon est un archipel de 377 975 km² compose de 6 852 iles, dont quatre principales : Honshu (la plus grande), Hokkaido au nord, Kyushu et Shikoku au sud. Le relief est extremement montagneux : 73 % du territoire est couvert de montagnes, dont le celebre Mont Fuji (3 776 m), stratovolcan actif et symbole du pays. Le Japon est situe sur la « Ceinture de feu du Pacifique », a la jonction de quatre plaques tectoniques, ce qui explique les seismes frequents (plus de 1 500 par an) et les 111 volcans actifs. Les plaines cotieres, etroites mais tres peuplees, concentrent les grandes agglomerations : Tokyo, Osaka, Nagoya. Le climat varie du subarctique a Hokkaido (hivers tres enneiges) au subtropical a Okinawa. Les typhons menacent le pays entre juillet et octobre. Les forets couvrent 68,5 % du territoire, parmi les taux les plus eleves des pays developpes. Le Japon possede la deuxieme plus longue cote du monde (29 751 km), extremement decoupee, offrant de nombreux ports naturels qui ont favorise le developpement de la peche et du commerce maritime.`,
    },
    {
      code: 'GR',
      climate: 'Mediterraneen : etes chauds et secs, hivers doux et humides',
      terrain: 'Montagneux (80 % du territoire), peninsule et iles, cotes tres decoupees',
      natural_resources: ['Lignite', 'Bauxite', 'Plomb', 'Zinc', 'Marbre', 'Sel'],
      land_use: { arable: 19.7, forets: 30.5, paturages: 40.1, autres: 9.7 },
      elevation_highest: 'Mont Olympe (2 917 m)',
      elevation_lowest: 'Niveau de la mer (0 m)',
      coastline_km: 13676,
      description_text: `La Grece couvre 131 957 km² a l'extremite sud de la peninsule balkanique. C'est un pays essentiellement montagneux : 80 % du territoire est constitue de montagnes et de collines. Le mont Olympe (2 917 m), demeure des dieux dans la mythologie, est le point culminant. La chaine du Pinde traverse le pays du nord au sud. La Grece possede l'une des cotes les plus longues d'Europe (13 676 km), extremement decoupee en peninsules, golfes et baies. L'archipel grec compte entre 1 200 et 6 000 iles selon les definitions, dont 227 sont habitees. Les principales sont la Crete (la plus grande), l'Eubee, les Cyclades, les iles Ioniennes et le Dodecanese. Le climat est mediterraneen typique : etes chauds et secs (30-35°C), hivers doux et humides. Le « meltemi », vent du nord, souffle en ete sur les iles. L'agriculture se concentre sur les olives, la vigne, les agrumes et le coton. La Grece est aussi un pays sismique situe sur la frontiere entre les plaques africaine et eurasienne. La mer Egee, parsemee d'iles volcaniques (Santorin), temoigne de cette activite tectonique.`,
    },
    {
      code: 'CN',
      climate: 'Tropical au sud, tempere au centre, aride a l\'ouest, subarctique au nord-est',
      terrain: 'Plateaux et montagnes a l\'ouest (Tibet, Himalaya), plaines a l\'est, deserts au nord-ouest',
      natural_resources: ['Charbon', 'Fer', 'Petrole', 'Gaz naturel', 'Mercure', 'Etain', 'Tungstene', 'Terres rares'],
      land_use: { arable: 11.3, forets: 22.3, paturages: 42.9, autres: 23.5 },
      elevation_highest: 'Mont Everest (8 849 m)',
      elevation_lowest: 'Depression de Turpan (-154 m)',
      coastline_km: 14500,
      description_text: `La Chine, avec 9,6 millions de km², est le troisieme ou quatrieme plus grand pays du monde. Son relief presente un « escalier » descendant d'ouest en est en trois marches. A l'ouest, le plateau tibetain, « toit du monde », culmine a plus de 4 500 m d'altitude moyenne et est borde au sud par l'Himalaya (Everest, 8 849 m). La deuxieme marche comprend les plateaux de Mongolie interieure, du Yunnan-Guizhou et les bassins du Sichuan et du Tarim. La troisieme marche, a l'est, est formee de grandes plaines alluviales (plaine de Chine du Nord, plaine du Yangzi) densement peuplees. Deux grands fleuves structurent le territoire : le Yangzi (6 300 km, troisieme fleuve du monde) au centre et le fleuve Jaune (Huang He, 5 464 km) au nord. Le climat varie enormement : tropical humide au sud (Guangdong), tempere continental au nord (Pekin), aride au nord-ouest (desert de Gobi, Taklamakan). La Chine possede la plus grande biodiversite d'Asie, avec des pandas geants dans le Sichuan et des forets de bambous. La Grande Muraille temoigne de la geographie strategique du pays face aux invasions venues des steppes du nord.`,
    },
  ];

  for (const geo of geographyData) {
    const countryId = getCountryId(geo.code);
    if (!countryId) continue;

    // Verifier si des donnees geographiques existent deja
    const existing = await knex('country_geography').where('country_id', countryId).first();
    if (existing) continue;

    await knex('country_geography').insert({
      country_id: countryId,
      climate: geo.climate,
      terrain: geo.terrain,
      natural_resources: JSON.stringify(geo.natural_resources),
      land_use: JSON.stringify(geo.land_use),
      elevation_highest: geo.elevation_highest,
      elevation_lowest: geo.elevation_lowest,
      coastline_km: geo.coastline_km,
      description_text: geo.description_text,
    });
  }

  // ── HISTOIRE – 4 periodes par pays ─────────────────────────────────

  interface HistoryPeriod {
    period: string;
    title: string;
    content: string;
    year_start: number;
    year_end: number;
    sort_order: number;
  }

  const historyData: Array<{ code: string; periods: HistoryPeriod[] }> = [
    {
      code: 'FR',
      periods: [
        {
          period: 'Antiquite', title: 'La Gaule et la conquete romaine',
          content: 'Avant la conquete romaine, la Gaule etait peuplee de tribus celtes organisees en oppida (villes fortifiees). Les Gaulois etaient des agriculteurs, des artisans et des commercants habiles. En 58 av. J.-C., Jules Cesar entreprend la conquete de la Gaule, qui s\'acheve avec la defaite de Vercingetorix a Alesia en 52 av. J.-C. La Gaule romaine prospere pendant quatre siecles : construction de villes (Lugdunum/Lyon, Lutetia/Paris), de voies romaines, d\'aqueducs et d\'amphitheatres. Le latin remplace progressivement les langues gauloises et donnera naissance au francais. Le christianisme se diffuse a partir du IIe siecle.',
          year_start: -600, year_end: 476, sort_order: 1,
        },
        {
          period: 'Moyen Age', title: 'Des Francs aux Capetiens',
          content: 'Apres la chute de l\'Empire romain, Clovis unifie les tribus franques et se convertit au christianisme (bapteme de Reims, 496). La dynastie merovingienne laisse place aux Carolingiens : Charlemagne est sacre empereur en 800 et fait d\'Aix-la-Chapelle sa capitale. Le traite de Verdun (843) divise l\'Empire et prefigure la France. Hugues Capet fonde la dynastie capetienne en 987. Les Capetiens renforcent le pouvoir royal face aux seigneurs feodaux. Le Moyen Age est marque par les Croisades, la construction des cathedrales gothiques, la guerre de Cent Ans (1337-1453) contre l\'Angleterre, et l\'epopee de Jeanne d\'Arc. La population est decimee par la Grande Peste (1347-1351).',
          year_start: 476, year_end: 1492, sort_order: 2,
        },
        {
          period: 'Epoque moderne', title: 'De la Renaissance a la Revolution',
          content: 'La Renaissance voit l\'epanouissement des arts et des lettres sous Francois Ier, qui invite Leonard de Vinci en France et fait construire les chateaux de la Loire. Les guerres de Religion (1562-1598) opposent catholiques et protestants jusqu\'a l\'Edit de Nantes (1598) d\'Henri IV. Louis XIV (1643-1715) incarne la monarchie absolue : il fait construire Versailles, centralise le pouvoir et mene des guerres couteuses. Le XVIIIe siecle est celui des Lumieres : Voltaire, Rousseau et Montesquieu repensent la societe et la politique. La crise financiere et les inegalites sociales menent a la Revolution francaise en 1789 : prise de la Bastille, Declaration des droits de l\'homme, abolition des privileges.',
          year_start: 1492, year_end: 1789, sort_order: 3,
        },
        {
          period: 'Epoque contemporaine', title: 'De la Revolution a la Ve Republique',
          content: 'La Revolution est suivie de la Terreur, puis Napoleon Bonaparte prend le pouvoir et fonde l\'Empire (1804). Ses conquetes redessinent l\'Europe avant sa defaite a Waterloo (1815). Le XIXe siecle est marque par les revolutions (1830, 1848), la IIe Republique, le Second Empire de Napoleon III et l\'enracinement de la IIIe Republique (lois Ferry, separation Eglise-Etat en 1905). La France subit les deux guerres mondiales : les tranchees de 14-18, l\'Occupation et la Resistance de 39-45. Le general de Gaulle fonde la Ve Republique en 1958. La France se reconstruit, se modernise et devient membre fondateur de l\'Union europeenne. Aujourd\'hui, elle est la 7e puissance economique mondiale et un membre permanent du Conseil de securite de l\'ONU.',
          year_start: 1789, year_end: 2024, sort_order: 4,
        },
      ],
    },
    {
      code: 'DE',
      periods: [
        {
          period: 'Antiquite et Moyen Age', title: 'Des tribus germaniques au Saint-Empire',
          content: 'Les tribus germaniques resistent a l\'expansion romaine : la defaite de Varus a la bataille de Teutobourg (9 apr. J.-C.) empeche Rome de conquerir la Germanie. Apres la chute de Rome, les royaumes germaniques se multiplient. Charlemagne integre la Germanie a son Empire. Le traite de Verdun (843) cree la Francie orientale, ancetre de l\'Allemagne. Otton Ier fonde le Saint-Empire romain germanique en 962, qui reunira des centaines de principautes et villes libres pendant huit siecles. Le Saint-Empire est une mosaique politique fragmentee, ou l\'empereur doit composer avec les princes electeurs.',
          year_start: -100, year_end: 1492, sort_order: 1,
        },
        {
          period: 'Epoque moderne', title: 'Reforme, Contre-Reforme et guerres',
          content: 'En 1517, Martin Luther affiche ses 95 theses a Wittenberg, declenchant la Reforme protestante qui divise l\'Allemagne en regions catholiques et protestantes. Cette fracture religieuse mene a la devastatrice guerre de Trente Ans (1618-1648), qui tue un tiers de la population allemande. Les traites de Westphalie (1648) confirment la fragmentation politique de l\'Allemagne en plus de 300 Etats souverains. Au XVIIIe siecle, la Prusse emerge comme grande puissance sous Frederic II le Grand, rival de l\'Autriche des Habsbourg. Les guerres napoleoniennes reorganisent la carte politique allemande.',
          year_start: 1492, year_end: 1815, sort_order: 2,
        },
        {
          period: 'Unification et guerres', title: 'De Bismarck aux guerres mondiales',
          content: 'Otto von Bismarck, chancelier de Prusse, unifie l\'Allemagne par le « fer et le sang » : victoires contre le Danemark (1864), l\'Autriche (1866) et la France (1870-71). L\'Empire allemand est proclame a Versailles en 1871. L\'Allemagne connait une industrialisation fulgurante et rivalise avec le Royaume-Uni. La Premiere Guerre mondiale (1914-1918) s\'acheve par la defaite et le traite de Versailles qui humilie le pays. La Republique de Weimar est fragilisee par la crise de 1929. Hitler accede au pouvoir en 1933 et instaure le regime nazi. La Seconde Guerre mondiale et la Shoah causent des millions de morts. L\'Allemagne vaincue est divisee en quatre zones d\'occupation.',
          year_start: 1815, year_end: 1945, sort_order: 3,
        },
        {
          period: 'Epoque contemporaine', title: 'Division, reunification et puissance europeenne',
          content: 'En 1949, deux Etats naissent : la RFA (ouest, democratie liberale) et la RDA (est, regime communiste). Le mur de Berlin, construit en 1961, symbolise la division de l\'Europe pendant la guerre froide. La RFA connait un « miracle economique » (Wirtschaftswunder) et devient la locomotive economique de l\'Europe. Konrad Adenauer puis Willy Brandt (Ostpolitik) marquent la politique ouest-allemande. Le 9 novembre 1989, la chute du mur de Berlin ouvre la voie a la reunification allemande le 3 octobre 1990. L\'Allemagne reunifiee est aujourd\'hui la premiere puissance economique europeenne, avec le PIB le plus eleve de l\'UE. Elle joue un role moteur dans la construction europeenne aux cotes de la France.',
          year_start: 1945, year_end: 2024, sort_order: 4,
        },
      ],
    },
    {
      code: 'IT',
      periods: [
        {
          period: 'Antiquite', title: 'Rome, des origines a la chute de l\'Empire',
          content: 'L\'Italie est le berceau de la civilisation romaine. Selon la legende, Rome est fondee en 753 av. J.-C. par Romulus. La Republique romaine (-509 a -27) conquiert toute la Mediterranee. Auguste fonde l\'Empire en 27 av. J.-C. et inaugure la Pax Romana. Rome devient une ville d\'un million d\'habitants, dotee de monuments grandioses : Colisee, Pantheon, Forum. L\'Empire romain s\'etend de la Bretagne a la Mesopotamie. Le christianisme, ne en Palestine, se diffuse dans tout l\'Empire et devient religion officielle en 380. La division de l\'Empire (395) et les invasions barbares menent a la chute de l\'Empire d\'Occident en 476.',
          year_start: -753, year_end: 476, sort_order: 1,
        },
        {
          period: 'Moyen Age', title: 'Communes, republiques maritimes et papaute',
          content: 'Apres la chute de Rome, l\'Italie est morcelee entre royaumes barbares, Empire byzantin et Etats pontificaux. Les republiques maritimes (Venise, Genes, Pise, Amalfi) dominent le commerce mediterraneen. Les communes du nord (Florence, Milan, Sienne) developpent une economie urbaine florissante. La papaute, installee a Rome, exerce un pouvoir spirituel et politique majeur. Les Guelfes (partisans du pape) s\'opposent aux Gibelins (partisans de l\'empereur). Dante, Giotto et Boccace inaugurent le renouveau culturel qui menera a la Renaissance. L\'Italie reste politiquement fragmentee en dizaines d\'Etats rivaux.',
          year_start: 476, year_end: 1492, sort_order: 2,
        },
        {
          period: 'Epoque moderne', title: 'Renaissance, dominations etrangeres et Risorgimento',
          content: 'La Renaissance italienne (XVe-XVIe siecle) est un age d\'or artistique et intellectuel : Leonard de Vinci, Michel-Ange, Raphael, Machiavel. Florence des Medicis est le foyer de cette revolution culturelle. Mais l\'Italie est aussi le champ de bataille des puissances europeennes : les guerres d\'Italie opposent la France et l\'Espagne (1494-1559). L\'Espagne puis l\'Autriche dominent la peninsule. Le Risorgimento (XIXe siecle) est le mouvement d\'unification nationale : Cavour, Garibaldi et Victor-Emmanuel II unifient l\'Italie en 1861. Rome devient capitale en 1870 apres la prise des Etats pontificaux.',
          year_start: 1492, year_end: 1870, sort_order: 3,
        },
        {
          period: 'Epoque contemporaine', title: 'De l\'unite a la Republique italienne',
          content: 'L\'Italie unifiee s\'industrialise mais reste marquee par le fosse Nord-Sud. Elle participe aux deux guerres mondiales : alliee de l\'Entente en 1915-18 malgre la frustration des « terres irredentes ». Le fascisme de Mussolini (1922-1943) transforme l\'Italie en dictature. L\'alliance avec l\'Allemagne nazie mene au desastre de la Seconde Guerre mondiale. La Republique est proclamee par referendum en 1946. Le « miracle economique italien » des annees 1950-60 fait de l\'Italie une puissance industrielle (Fiat, Olivetti, mode). L\'Italie est membre fondateur de la CEE (1957). Elle reste aujourd\'hui la 3e economie de la zone euro, celebre pour son patrimoine culturel (58 sites UNESCO, record mondial), sa gastronomie et son industrie du luxe.',
          year_start: 1870, year_end: 2024, sort_order: 4,
        },
      ],
    },
    {
      code: 'GB',
      periods: [
        {
          period: 'Antiquite et Moyen Age', title: 'Des Celtes a la Grande Charte',
          content: 'La Bretagne celte est conquise par les Romains en 43 apr. J.-C. Le mur d\'Hadrien marque la frontiere nord de l\'Empire. Apres le retrait romain (410), les Anglo-Saxons envahissent l\'ile et fondent des royaumes rivaux. L\'invasion normande de Guillaume le Conquerant en 1066 (bataille de Hastings) transforme l\'Angleterre : feodalite normande, construction de chateaux forts, Domesday Book. La Magna Carta (Grande Charte, 1215) limite le pouvoir royal et pose les bases du parlementarisme anglais. La guerre de Cent Ans contre la France (1337-1453) et la guerre des Deux-Roses (1455-1485) marquent la fin du Moyen Age anglais.',
          year_start: -500, year_end: 1485, sort_order: 1,
        },
        {
          period: 'Epoque moderne', title: 'Tudors, revolution et empire naissant',
          content: 'Henri VIII (1509-1547) rompt avec Rome et fonde l\'Eglise anglicane. Le regne d\'Elisabeth Ire (1558-1603) est un age d\'or : Shakespeare, defaite de l\'Invincible Armada espagnole (1588), debuts de l\'exploration. Le XVIIe siecle est marque par la guerre civile entre royalistes et parlementaires : Charles Ier est execute en 1649, Oliver Cromwell instaure la republique. La Glorieuse Revolution (1688) et le Bill of Rights (1689) etablissent la monarchie parlementaire. L\'Acte d\'Union de 1707 cree le Royaume de Grande-Bretagne. Le pays commence son expansion coloniale en Amerique du Nord, aux Antilles et en Inde.',
          year_start: 1485, year_end: 1760, sort_order: 2,
        },
        {
          period: 'Empire et revolution industrielle', title: 'Atelier du monde et empire mondial',
          content: 'Le Royaume-Uni est le berceau de la revolution industrielle (a partir de 1760) : machine a vapeur de James Watt, mines de charbon, usines textiles du Lancashire. L\'urbanisation explose : Manchester, Birmingham, Liverpool. L\'Empire britannique s\'etend sur tous les continents et atteint son apogee au XIXe siecle : Inde, Australie, Afrique du Sud, Canada. La reine Victoria (1837-1901) preside sur le plus grand empire de l\'histoire (400 millions de sujets, un quart de la surface terrestre). La Royal Navy domine les mers. L\'abolition de l\'esclavage (1833), le chartisme et les reformes sociales marquent cette epoque de transformations.',
          year_start: 1760, year_end: 1914, sort_order: 3,
        },
        {
          period: 'Epoque contemporaine', title: 'Guerres mondiales, decolonisation et Brexit',
          content: 'Le Royaume-Uni sort victorieux mais epuise des deux guerres mondiales. Winston Churchill incarne la resistance face au nazisme (1940-1945). L\'apres-guerre voit la creation de l\'Etat-providence (NHS, securite sociale) et la decolonisation de l\'Empire : independance de l\'Inde (1947), puis de l\'Afrique. Le pays adhere a la CEE en 1973. Margaret Thatcher (1979-1990) mene une revolution conservatrice (liberalisme economique, privatisations). Tony Blair (1997-2007) modernise le parti travailliste. Le referendum de 2016 sur le Brexit aboutit a la sortie du Royaume-Uni de l\'Union europeenne (effective en 2020). Le pays reste une puissance financiere majeure (City de Londres), un membre permanent du Conseil de securite de l\'ONU et une puissance culturelle mondiale (langue anglaise, musique, cinema).',
          year_start: 1914, year_end: 2024, sort_order: 4,
        },
      ],
    },
    {
      code: 'ES',
      periods: [
        {
          period: 'Antiquite et Moyen Age', title: 'Iberes, Romains et Reconquista',
          content: 'La peninsule iberique est peuplee par les Iberes et les Celtes, puis colonisee par les Pheniciens, les Grecs et les Carthaginois. Rome conquiert l\'Hispanie apres les guerres puniques (IIIe-IIe siecle av. J.-C.). L\'Hispanie romaine prospere et donne a Rome des empereurs (Trajan, Hadrien) et des ecrivains (Seneque). Apres les invasions barbares (Wisigoths), la conquete musulmane de 711 transforme radicalement la peninsule : Al-Andalus devient un centre brillant de civilisation (Cordoue, Grenade, Alhambra). La Reconquista, reconquete chretienne, dure huit siecles (722-1492) et s\'acheve avec la prise de Grenade par les Rois Catholiques.',
          year_start: -1000, year_end: 1492, sort_order: 1,
        },
        {
          period: 'Siecle d\'Or', title: 'Empires colonial et culturel espagnols',
          content: 'En 1492, Christophe Colomb decouvre l\'Amerique pour le compte de l\'Espagne. L\'empire colonial espagnol s\'etend rapidement : Mexique (Cortez), Perou (Pizarro), Philippines. L\'or et l\'argent des Ameriques financent les guerres europeennes. Charles Quint (1519-1556) regne sur un empire « ou le soleil ne se couche jamais ». Le Siecle d\'Or espagnol (XVIe-XVIIe siecle) est un age d\'or culturel : Cervantes (Don Quichotte), Velazquez, El Greco, Calderon. Mais l\'Espagne declinera face a la montee des puissances protestantes : defaite de l\'Invincible Armada (1588), independance des Provinces-Unies, traite de Westphalie (1648).',
          year_start: 1492, year_end: 1700, sort_order: 2,
        },
        {
          period: 'Declin et guerres', title: 'Bourbons, invasions et guerres civiles',
          content: 'La guerre de Succession d\'Espagne (1701-1714) installe les Bourbons sur le trone. L\'Espagne perd ses possessions europeennes (Pays-Bas, Naples, Milan). L\'invasion napoleonienne (1808-1814) provoque un soulevement populaire et fragilise l\'empire colonial : les guerres d\'independance en Amerique latine (1810-1830) aboutissent a la perte de presque toutes les colonies. Le XIXe siecle est marque par l\'instabilite politique (guerres carlistes, republiques, restauration monarchique). La guerre civile espagnole (1936-1939) oppose republicains et nationalistes du general Franco, qui instaure une dictature qui durera jusqu\'en 1975.',
          year_start: 1700, year_end: 1939, sort_order: 3,
        },
        {
          period: 'Epoque contemporaine', title: 'Transition democratique et Espagne moderne',
          content: 'La dictature de Franco (1939-1975) isole l\'Espagne du reste de l\'Europe. A la mort de Franco, le roi Juan Carlos Ier pilote une transition democratique exemplaire. La Constitution de 1978 etablit une monarchie parlementaire et reconnait l\'autonomie des regions (communautes autonomes). L\'Espagne adhere a l\'OTAN (1982) et a la CEE (1986), ce qui accelere sa modernisation economique. Les Jeux olympiques de Barcelone (1992) symbolisent la nouvelle Espagne. Le pays connait un boom economique avant la crise de 2008. Aujourd\'hui, l\'Espagne est la 4e economie de la zone euro, une destination touristique mondiale (83 millions de visiteurs/an) et un pays de culture riche (Gaudi, Almodovar, Nadal).',
          year_start: 1939, year_end: 2024, sort_order: 4,
        },
      ],
    },
    {
      code: 'US',
      periods: [
        {
          period: 'Colonisation', title: 'Des peuples autochtones aux Treize Colonies',
          content: 'Avant l\'arrivee des Europeens, l\'Amerique du Nord est peuplee par des millions d\'Amerindiens appartenant a des centaines de nations (Iroquois, Sioux, Navajos, Cherokees). Les Espagnols explorent le sud (Floride, Nouveau-Mexique) au XVIe siecle. Les premiers colons anglais fondent Jamestown en 1607 et Plymouth en 1620 (Pilgrims du Mayflower). Treize colonies britanniques se developpent le long de la cote atlantique, attirant des immigrants europeens. L\'economie repose sur l\'agriculture (tabac, coton au sud) et le commerce (au nord). L\'esclavage se developpe dans les colonies du Sud pour les plantations.',
          year_start: -10000, year_end: 1776, sort_order: 1,
        },
        {
          period: 'Independance et expansion', title: 'De la Revolution a la guerre civile',
          content: 'Le 4 juillet 1776, les Treize Colonies declarent leur independance, redigee par Thomas Jefferson. La guerre d\'independance (1775-1783) s\'acheve par la victoire des insurges, aides par la France (La Fayette). La Constitution de 1787 etablit une republique federale. George Washington est le premier president. Au XIXe siecle, les Etats-Unis s\'etendent vers l\'ouest (« Destinee manifeste ») : achat de la Louisiane a la France (1803), guerre contre le Mexique, conquete de l\'Ouest. La guerre de Secession (1861-1865) oppose le Nord industriel au Sud esclavagiste. La victoire du Nord et l\'abolition de l\'esclavage (13e amendement) preservent l\'unite nationale.',
          year_start: 1776, year_end: 1865, sort_order: 2,
        },
        {
          period: 'Puissance mondiale', title: 'De l\'industrialisation aux guerres mondiales',
          content: 'Apres la guerre de Secession, les Etats-Unis connaissent une industrialisation fulgurante : chemins de fer transcontinentaux, acier (Carnegie), petrole (Rockefeller), automobile (Ford). L\'immigration massive d\'Europe alimente la croissance. Les Etats-Unis entrent dans la Premiere Guerre mondiale en 1917 et contribuent a la victoire alliee. Les « Annees folles » (1920s) sont suivies de la Grande Depression (1929). Le New Deal de Roosevelt relance l\'economie. L\'attaque de Pearl Harbor (1941) entraine les Etats-Unis dans la Seconde Guerre mondiale. Le debarquement en Normandie (1944) et les bombes atomiques sur Hiroshima et Nagasaki (1945) mettent fin au conflit.',
          year_start: 1865, year_end: 1945, sort_order: 3,
        },
        {
          period: 'Superpuissance', title: 'Guerre froide, leadership mondial et defis contemporains',
          content: 'Apres 1945, les Etats-Unis deviennent la premiere superpuissance mondiale. La guerre froide oppose les blocs occidental et communiste : plan Marshall, OTAN, course aux armements nucleaires, conquete spatiale (Apollo 11, 1969). Le mouvement des droits civiques (Martin Luther King) combat la segregation raciale dans les annees 1960. La guerre du Vietnam divise le pays. La chute du mur de Berlin (1989) et la dissolution de l\'URSS (1991) font des Etats-Unis l\'unique superpuissance. Les attentats du 11 septembre 2001 inaugurent une ere de « guerre contre le terrorisme ». Les Etats-Unis restent la premiere puissance economique et militaire mondiale, mais font face a des defis internes (inegalites, polarisation politique) et a la montee de la Chine.',
          year_start: 1945, year_end: 2024, sort_order: 4,
        },
      ],
    },
    {
      code: 'JP',
      periods: [
        {
          period: 'Ancien Japon', title: 'Des origines aux shoguns',
          content: 'Le Japon est peuple depuis au moins 30 000 ans. La culture Jomon (poterie parmi les plus anciennes du monde) precede la culture Yayoi qui introduit la riziculture. Le shintoisme, religion animiste, et le bouddhisme (introduit au VIe siecle) coexistent. La periode Heian (794-1185) voit l\'epanouissement d\'une culture raffinee a la cour imperiale de Kyoto : le Dit du Genji, premier roman de l\'histoire. La periode Kamakura inaugure le shogunat : le pouvoir reel passe de l\'empereur aux shoguns (generaux militaires) et aux samouraïs. Les Mongols tentent d\'envahir le Japon (1274, 1281) mais echouent grace aux typhons (kamikaze, « vent divin »).',
          year_start: -30000, year_end: 1600, sort_order: 1,
        },
        {
          period: 'Epoque Edo', title: 'Le Japon ferme au monde',
          content: 'Tokugawa Ieyasu unifie le Japon et fonde le shogunat Tokugawa (1603-1868). La capitale est transferee a Edo (Tokyo). Le Japon se ferme au monde exterieur (sakoku) pendant plus de deux siecles : seuls les Neerlandais gardent un comptoir commercial a Nagasaki. Cette periode de paix permet le developpement de la culture urbaine : kabuki (theatre), ukiyo-e (estampes, Hokusai, Hiroshige), haiku (poesie, Basho). La societe est rigidement hierarchisee : samouraïs, paysans, artisans, marchands. Les samouraïs suivent le bushido (code d\'honneur). L\'economie se developpe malgre l\'isolement.',
          year_start: 1600, year_end: 1868, sort_order: 2,
        },
        {
          period: 'Ere Meiji et imperialisme', title: 'Modernisation eclair et expansionnisme',
          content: 'En 1853, les navires noirs du commodore Perry forcent l\'ouverture du Japon. La restauration Meiji (1868) abolit le shogunat et modernise le pays a une vitesse fulgurante : adoption des technologies occidentales, industrialisation, creation d\'une armee moderne, Constitution (1889). Le Japon bat la Chine (1894-95) et la Russie (1905), devenant la premiere puissance non occidentale a vaincre une puissance europeenne. Le Japon annexe la Coree (1910) et envahit la Mandchourie (1931). L\'expansionnisme militaire mene a la guerre du Pacifique (1941-1945) : attaque de Pearl Harbor, conquete de l\'Asie du Sud-Est, puis la defaite avec les bombes atomiques d\'Hiroshima et Nagasaki (1945).',
          year_start: 1868, year_end: 1945, sort_order: 3,
        },
        {
          period: 'Japon contemporain', title: 'Miracle economique et puissance culturelle',
          content: 'Apres la defaite de 1945, le Japon est occupe par les Americains. Une nouvelle Constitution (1947) fait du Japon une democratie parlementaire et renonce a la guerre (article 9). Le « miracle economique japonais » des annees 1950-80 est spectaculaire : le Japon devient la 2e economie mondiale (depassee par la Chine en 2010). Toyota, Sony, Honda, Nintendo deviennent des marques mondiales. Tokyo accueille les Jeux olympiques en 1964. La « bulle speculative » eclate en 1991, entrainant deux « decennies perdues ». Le Japon fait face au vieillissement de sa population et a la stagnation economique, mais reste la 4e economie mondiale et une puissance culturelle majeure (manga, anime, gastronomie, technologie).',
          year_start: 1945, year_end: 2024, sort_order: 4,
        },
      ],
    },
    {
      code: 'GR',
      periods: [
        {
          period: 'Antiquite', title: 'Berceau de la civilisation occidentale',
          content: 'La civilisation minoenne (Crete, 2700-1450 av. J.-C.) et la civilisation mycenienne (Peloponnese, 1600-1100 av. J.-C.) sont les premieres civilisations europeennes avancees. Apres les « siecles obscurs », les cites-Etats (poleis) emergent : Athenes, Sparte, Corinthe, Thebes. Athenes invente la democratie au Ve siecle av. J.-C. sous Clisthene puis Pericles. La victoire contre les Perses (Marathon, Salamine) inaugure l\'age d\'or athenien : le Parthenon, Socrate, Platon, Aristote, Sophocle, Euripide. Alexandre le Grand (336-323 av. J.-C.) conquiert un empire de la Grece a l\'Inde, diffusant la culture hellenistique. La Grece est ensuite absorbee par Rome (146 av. J.-C.) tout en hellenisant ses conquerants.',
          year_start: -2700, year_end: -146, sort_order: 1,
        },
        {
          period: 'Byzance', title: 'L\'Empire byzantin, heritier de Rome et de la Grece',
          content: 'Apres la division de l\'Empire romain (395), la partie orientale, greco-phone, survit pendant mille ans sous le nom d\'Empire byzantin. Constantinople (fondee en 330 par Constantin) est la plus grande ville d\'Europe medievale. L\'Empire byzantin preserve et transmet la culture grecque antique, les textes de Platon et d\'Aristote. La basilique Sainte-Sophie (537) est un chef-d\'oeuvre architectural. Le christianisme orthodoxe se separe du catholicisme au schisme de 1054. L\'Empire declin sous la pression des Turcs seldjoukides puis ottomans. La chute de Constantinople en 1453 marque la fin de l\'Empire byzantin et de l\'Antiquite tardive. Les savants byzantins fuient vers l\'Italie, contribuant a la Renaissance.',
          year_start: -146, year_end: 1453, sort_order: 2,
        },
        {
          period: 'Domination ottomane', title: 'Quatre siecles sous l\'Empire ottoman',
          content: 'De 1453 a 1821, la Grece fait partie de l\'Empire ottoman. Les Grecs conservent leur langue et leur religion (Eglise orthodoxe) sous le systeme du millet. Certaines iles (Crete, Cyclades) sont controlees par Venise avant d\'etre conquises par les Ottomans. La culture grecque survit dans les monasteres et les ecoles communautaires. Le commerce maritime reste une specialite grecque. Les Klephtes (bandits-resistants) dans les montagnes maintiennent une tradition de resistance. L\'influence des Lumieres europeennes et le mouvement philhellene preparent le soulevement national.',
          year_start: 1453, year_end: 1821, sort_order: 3,
        },
        {
          period: 'Grece moderne', title: 'Independance, crises et democratie',
          content: 'La guerre d\'independance grecque (1821-1829) est soutenue par les puissances europeennes (France, Royaume-Uni, Russie) et les philhellenes (Lord Byron). Le nouvel Etat grec (1830) est d\'abord une monarchie. Il s\'etend progressivement : iles Ioniennes (1864), Thessalie (1881), Crete, Macedoine et Thrace (guerres balkaniques, 1912-13). Les catastrophes du XXe siecle incluent l\'echange de populations avec la Turquie (1923), l\'occupation nazie (1941-44) et la guerre civile (1946-49). La dictature des colonels (1967-74) precede le retablissement de la democratie. La Grece rejoint la CEE en 1981 et l\'euro en 2001. La crise de la dette (2010) frappe durement le pays. Aujourd\'hui, la Grece attire 30 millions de touristes par an et reste un symbole de la democratie et de la culture occidentale.',
          year_start: 1821, year_end: 2024, sort_order: 4,
        },
      ],
    },
    {
      code: 'CN',
      periods: [
        {
          period: 'Chine imperiale ancienne', title: 'Des dynasties fondatrices a l\'age d\'or Tang',
          content: 'La civilisation chinoise est l\'une des plus anciennes du monde. La dynastie Shang (1600-1046 av. J.-C.) developpe l\'ecriture et le travail du bronze. La dynastie Zhou introduit le « Mandat du Ciel » qui legitimera les empereurs pendant deux millenaires. Confucius (551-479 av. J.-C.) et Laozi (Taoisme) posent les fondements philosophiques de la societe chinoise. L\'empereur Qin Shi Huang unifie la Chine en 221 av. J.-C., impose une ecriture unique et commence la Grande Muraille. La dynastie Han (206 av. J.-C. - 220 apr. J.-C.) ouvre la Route de la Soie. La dynastie Tang (618-907) est consideree comme l\'age d\'or de la civilisation chinoise : poesie, ceramique, commerce international.',
          year_start: -1600, year_end: 907, sort_order: 1,
        },
        {
          period: 'Chine imperiale tardive', title: 'Des Song aux Qing',
          content: 'La dynastie Song (960-1279) est une ere d\'inventions : poudre a canon, boussole, imprimerie a caracteres mobiles. La Chine est alors la civilisation la plus avancee du monde. L\'invasion mongole de Gengis Khan et Kubilai Khan fonde la dynastie Yuan (1271-1368). Marco Polo visite la cour du khan. La dynastie Ming (1368-1644) restaure le pouvoir chinois : construction de la Cite interdite, expeditions maritimes de l\'amiral Zheng He (1405-1433). La dynastie Qing (mandchoue, 1644-1912) etend l\'empire a sa taille maximale (Tibet, Xinjiang, Mongolie). Mais le refus de modernisation et les guerres de l\'Opium (1839-1860) contre les Occidentaux marquent le debut du declin imperial.',
          year_start: 907, year_end: 1912, sort_order: 2,
        },
        {
          period: 'Revolution et maoisme', title: 'De la Republique a la Revolution culturelle',
          content: 'La revolution de 1911 renverse la derniere dynastie et Sun Yat-sen proclame la Republique. La Chine sombre dans le chaos : seigneurs de la guerre, invasion japonaise (1937-1945), guerre civile entre nationalistes (Tchang Kai-chek) et communistes (Mao Zedong). Mao proclame la Republique populaire de Chine le 1er octobre 1949. Le Grand Bond en avant (1958-1962), tentative de collectivisation forcee, provoque une famine massive (15 a 55 millions de morts). La Revolution culturelle (1966-1976), lancee par Mao, plonge le pays dans le chaos : persecutions, destruction du patrimoine culturel, fermeture des ecoles.',
          year_start: 1912, year_end: 1976, sort_order: 3,
        },
        {
          period: 'Chine contemporaine', title: 'Ouverture economique et puissance mondiale',
          content: 'Apres la mort de Mao (1976), Deng Xiaoping lance les reformes economiques (« socialisme de marche ») a partir de 1978 : zones economiques speciales (Shenzhen), ouverture aux investissements etrangers. La croissance economique est spectaculaire : 10 % par an pendant trois decennies. La Chine devient l\'« atelier du monde ». La repression de Tiananmen (1989) montre les limites de l\'ouverture politique. L\'adhesion a l\'OMC (2001) accelere l\'integration dans la mondialisation. La Chine devient la 2e economie mondiale en 2010 et lance les Nouvelles Routes de la Soie (2013). Avec 1,4 milliard d\'habitants, le pays fait face a des defis majeurs : pollution, vieillissement de la population, tensions geopolitiques. Xi Jinping concentre le pouvoir depuis 2012.',
          year_start: 1976, year_end: 2024, sort_order: 4,
        },
      ],
    },
  ];

  for (const countryData of historyData) {
    const countryId = getCountryId(countryData.code);
    if (!countryId) continue;

    // Verifier si des periodes historiques existent deja
    const existingCount = await knex('country_history')
      .where('country_id', countryId)
      .count('* as count')
      .first();
    if (existingCount && Number(existingCount.count) > 0) continue;

    for (const period of countryData.periods) {
      await knex('country_history').insert({
        country_id: countryId,
        period: period.period,
        title: period.title,
        content: period.content,
        year_start: period.year_start,
        year_end: period.year_end,
        sort_order: period.sort_order,
      });
    }
  }
}
