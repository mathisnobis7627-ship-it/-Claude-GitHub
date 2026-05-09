/**
 * Données anatomiques sur les principaux muscles du corps humain.
 * Coordonnées calibrées pour un viewBox SVG de 0 0 400 800.
 */

export type MuscleView = "front" | "back";

export type MuscleGroupId =
  | "tete-cou"
  | "epaule"
  | "bras"
  | "avant-bras"
  | "tronc"
  | "dos"
  | "abdomen"
  | "fessiers"
  | "cuisse-avant"
  | "cuisse-arriere"
  | "jambe";

export interface MuscleGroupInfo {
  id: MuscleGroupId;
  label: string;
  fill: string;
  hover: string;
  active: string;
  textColor: string;
}

export const MUSCLE_GROUPS: MuscleGroupInfo[] = [
  { id: "tete-cou", label: "Tête et cou", fill: "#fcd34d", hover: "#fbbf24", active: "#f59e0b", textColor: "#78350f" },
  { id: "epaule", label: "Épaules", fill: "#fda4af", hover: "#fb7185", active: "#e11d48", textColor: "#881337" },
  { id: "bras", label: "Bras", fill: "#fdba74", hover: "#fb923c", active: "#ea580c", textColor: "#7c2d12" },
  { id: "avant-bras", label: "Avant-bras", fill: "#fed7aa", hover: "#fdba74", active: "#f97316", textColor: "#7c2d12" },
  { id: "tronc", label: "Tronc (avant)", fill: "#93c5fd", hover: "#60a5fa", active: "#2563eb", textColor: "#1e3a8a" },
  { id: "dos", label: "Dos", fill: "#a5b4fc", hover: "#818cf8", active: "#4f46e5", textColor: "#312e81" },
  { id: "abdomen", label: "Abdominaux", fill: "#67e8f9", hover: "#22d3ee", active: "#0891b2", textColor: "#155e75" },
  { id: "fessiers", label: "Fessiers", fill: "#d8b4fe", hover: "#c084fc", active: "#9333ea", textColor: "#581c87" },
  { id: "cuisse-avant", label: "Cuisses (avant)", fill: "#86efac", hover: "#4ade80", active: "#16a34a", textColor: "#14532d" },
  { id: "cuisse-arriere", label: "Cuisses (arrière)", fill: "#6ee7b7", hover: "#34d399", active: "#059669", textColor: "#064e3b" },
  { id: "jambe", label: "Jambes / Mollets", fill: "#5eead4", hover: "#2dd4bf", active: "#0d9488", textColor: "#134e4a" },
];

export const MUSCLE_GROUPS_BY_ID: Record<MuscleGroupId, MuscleGroupInfo> =
  MUSCLE_GROUPS.reduce(
    (acc, g) => {
      acc[g.id] = g;
      return acc;
    },
    {} as Record<MuscleGroupId, MuscleGroupInfo>,
  );

export interface Muscle {
  id: string;
  name: string;
  latinName: string;
  group: MuscleGroupId;
  view: MuscleView;
  origin: string;
  insertion: string;
  function: string;
  description: string;
  /** Une ou plusieurs paths SVG (gauche et droite pour les muscles symétriques). */
  paths: string[];
  /** Position du label / point d'ancrage du tooltip. */
  label: { x: number; y: number };
}

/* ------------------------------------------------------------------ */
/* VUE DE FACE                                                         */
/* ------------------------------------------------------------------ */

const FRONT_MUSCLES: Muscle[] = [
  {
    id: "frontal",
    name: "Frontal",
    latinName: "Musculus frontalis",
    group: "tete-cou",
    view: "front",
    origin: "Aponévrose épicrânienne",
    insertion: "Peau des sourcils et de la racine du nez",
    function: "Élève les sourcils et plisse le front (étonnement, attention)",
    description:
      "Muscle peaucier de l'expression faciale qui couvre la partie antérieure du crâne.",
    paths: [
      "M 168,42 Q 200,28 232,42 Q 230,60 220,64 Q 200,68 180,64 Q 170,60 168,42 Z",
    ],
    label: { x: 200, y: 50 },
  },
  {
    id: "temporal",
    name: "Temporal",
    latinName: "Musculus temporalis",
    group: "tete-cou",
    view: "front",
    origin: "Fosse temporale du crâne",
    insertion: "Processus coronoïde de la mandibule",
    function: "Élève la mandibule (mastication), participe à la fermeture de la bouche",
    description:
      "Muscle masticateur en éventail situé sur le côté du crâne, au-dessus de l'oreille.",
    paths: [
      "M 161,52 Q 154,72 162,92 Q 172,90 173,68 Q 170,55 161,52 Z",
      "M 239,52 Q 246,72 238,92 Q 228,90 227,68 Q 230,55 239,52 Z",
    ],
    label: { x: 162, y: 72 },
  },
  {
    id: "masseter",
    name: "Masséter",
    latinName: "Musculus masseter",
    group: "tete-cou",
    view: "front",
    origin: "Arcade zygomatique",
    insertion: "Angle de la mandibule",
    function: "Muscle masticateur le plus puissant (élévation de la mandibule)",
    description:
      "Muscle court et épais à l'angle de la mâchoire, responsable de la mastication.",
    paths: [
      "M 168,90 Q 162,108 175,118 Q 188,116 190,100 Z",
      "M 232,90 Q 238,108 225,118 Q 212,116 210,100 Z",
    ],
    label: { x: 178, y: 105 },
  },
  {
    id: "scm",
    name: "Sterno-cléido-mastoïdien",
    latinName: "Musculus sternocleidomastoideus",
    group: "tete-cou",
    view: "front",
    origin: "Manubrium sternal et clavicule (face médiale)",
    insertion: "Processus mastoïde de l'os temporal",
    function: "Flexion et rotation controlatérale de la tête, inclinaison latérale",
    description:
      "Long muscle oblique du cou, très visible lorsqu'on tourne la tête.",
    paths: [
      "M 192,118 L 175,148 L 188,150 L 200,123 Z",
      "M 208,118 L 225,148 L 212,150 L 200,123 Z",
    ],
    label: { x: 188, y: 138 },
  },
  {
    id: "trapeze-superieur-front",
    name: "Trapèze (faisceau supérieur)",
    latinName: "Musculus trapezius (pars descendens)",
    group: "dos",
    view: "front",
    origin: "Os occipital, ligament nucal",
    insertion: "Tiers latéral de la clavicule",
    function: "Élévation de la scapula et de l'épaule (haussement)",
    description:
      "Faisceau supérieur du trapèze, visible de face entre le cou et l'épaule.",
    paths: [
      "M 178,125 L 145,150 L 175,160 L 200,140 Z",
      "M 222,125 L 255,150 L 225,160 L 200,140 Z",
    ],
    label: { x: 175, y: 148 },
  },
  {
    id: "deltoide-anterieur",
    name: "Deltoïde antérieur",
    latinName: "Musculus deltoideus (pars clavicularis)",
    group: "epaule",
    view: "front",
    origin: "Tiers latéral de la clavicule",
    insertion: "Tubérosité deltoïdienne de l'humérus",
    function: "Flexion et rotation interne du bras",
    description:
      "Faisceau antérieur du deltoïde, en forme d'épaulette à l'avant de l'épaule.",
    paths: [
      "M 145,150 L 115,162 L 100,200 L 122,228 L 148,212 L 156,170 Z",
      "M 255,150 L 285,162 L 300,200 L 278,228 L 252,212 L 244,170 Z",
    ],
    label: { x: 122, y: 195 },
  },
  {
    id: "grand-pectoral",
    name: "Grand pectoral",
    latinName: "Musculus pectoralis major",
    group: "tronc",
    view: "front",
    origin: "Clavicule, sternum, cartilages costaux",
    insertion: "Crête du tubercule majeur de l'humérus",
    function: "Adduction, rotation interne et antéprojection du bras",
    description:
      "Grand muscle en éventail qui couvre la poitrine et donne sa forme caractéristique au torse.",
    paths: [
      "M 200,150 L 195,255 L 175,265 L 148,260 L 128,238 L 124,205 L 138,178 L 168,162 Z",
      "M 200,150 L 205,255 L 225,265 L 252,260 L 272,238 L 276,205 L 262,178 L 232,162 Z",
    ],
    label: { x: 160, y: 210 },
  },
  {
    id: "grand-dentele",
    name: "Grand dentelé (antérieur)",
    latinName: "Musculus serratus anterior",
    group: "tronc",
    view: "front",
    origin: "Faces latérales des 9 premières côtes",
    insertion: "Bord médial de la scapula",
    function: "Stabilise et fait pivoter la scapula vers l'avant (mouvement de poussée)",
    description:
      "Muscle digité visible sur les côtés des côtes, surnommé « muscle du boxeur ».",
    paths: [
      "M 150,255 L 138,262 L 145,272 L 138,282 L 145,292 L 138,302 L 152,300 L 156,278 Z",
      "M 250,255 L 262,262 L 255,272 L 262,282 L 255,292 L 262,302 L 248,300 L 244,278 Z",
    ],
    label: { x: 145, y: 282 },
  },
  {
    id: "biceps-brachial",
    name: "Biceps brachial",
    latinName: "Musculus biceps brachii",
    group: "bras",
    view: "front",
    origin:
      "Tubercule supraglénoïdal et processus coracoïde de la scapula (deux chefs)",
    insertion: "Tubérosité radiale et aponévrose bicipitale",
    function: "Flexion du coude, supination de l'avant-bras, flexion de l'épaule",
    description:
      "Muscle emblématique du bras, à deux chefs, qui se contracte lorsqu'on plie le coude.",
    paths: [
      "M 105,228 Q 88,268 92,312 Q 108,322 124,312 Q 132,268 128,228 Z",
      "M 295,228 Q 312,268 308,312 Q 292,322 276,312 Q 268,268 272,228 Z",
    ],
    label: { x: 110, y: 275 },
  },
  {
    id: "brachio-radial",
    name: "Brachio-radial",
    latinName: "Musculus brachioradialis",
    group: "avant-bras",
    view: "front",
    origin: "Crête supracondylaire latérale de l'humérus",
    insertion: "Processus styloïde du radius",
    function: "Flexion du coude, position semi-pronée de l'avant-bras",
    description:
      "Muscle long et superficiel formant le relief externe de l'avant-bras.",
    paths: [
      "M 92,318 Q 80,360 78,410 L 102,418 Q 112,365 116,318 Z",
      "M 308,318 Q 320,360 322,410 L 298,418 Q 288,365 284,318 Z",
    ],
    label: { x: 95, y: 372 },
  },
  {
    id: "flechisseurs-doigts",
    name: "Fléchisseurs des doigts",
    latinName: "Musculi flexores digitorum",
    group: "avant-bras",
    view: "front",
    origin: "Épicondyle médial de l'humérus, ulna, radius",
    insertion: "Phalanges distales et moyennes des doigts",
    function: "Flexion des doigts et du poignet (préhension)",
    description:
      "Groupe musculaire de la loge antérieure de l'avant-bras qui ferme la main.",
    paths: [
      "M 102,335 Q 95,380 100,420 L 116,422 Q 120,380 118,335 Z",
      "M 298,335 Q 305,380 300,420 L 284,422 Q 280,380 282,335 Z",
    ],
    label: { x: 108, y: 385 },
  },
  {
    id: "rectus-abdominis",
    name: "Grand droit de l'abdomen",
    latinName: "Musculus rectus abdominis",
    group: "abdomen",
    view: "front",
    origin: "Pubis (crête pubienne et symphyse)",
    insertion: "Cartilages des 5e, 6e et 7e côtes, processus xiphoïde",
    function: "Flexion du tronc, expiration forcée, soutien des viscères",
    description:
      "Muscle pair en bandes verticales qui forme les fameuses « tablettes de chocolat ».",
    paths: [
      "M 180,265 L 220,265 L 224,365 L 216,378 L 200,382 L 184,378 L 176,365 Z",
    ],
    label: { x: 200, y: 320 },
  },
  {
    id: "obliques-externes",
    name: "Obliques externes",
    latinName: "Musculus obliquus externus abdominis",
    group: "abdomen",
    view: "front",
    origin: "Faces externes des 8 dernières côtes",
    insertion: "Crête iliaque, ligne blanche, pubis",
    function:
      "Flexion et rotation controlatérale du tronc, inclinaison latérale",
    description:
      "Muscle large et plat qui dessine la « V-line » sur les côtés de l'abdomen.",
    paths: [
      "M 175,265 L 145,295 L 145,358 L 168,365 L 175,335 Z",
      "M 225,265 L 255,295 L 255,358 L 232,365 L 225,335 Z",
    ],
    label: { x: 158, y: 320 },
  },
  {
    id: "sartorius",
    name: "Sartorius (couturier)",
    latinName: "Musculus sartorius",
    group: "cuisse-avant",
    view: "front",
    origin: "Épine iliaque antéro-supérieure",
    insertion: "Patte d'oie (face médiale du tibia)",
    function:
      "Flexion, abduction et rotation externe de la hanche ; flexion du genou",
    description:
      "Muscle le plus long du corps humain, en lanière diagonale sur la cuisse.",
    paths: [
      "M 152,398 L 162,398 L 200,560 L 195,570 L 158,410 Z",
      "M 248,398 L 238,398 L 200,560 L 205,570 L 242,410 Z",
    ],
    label: { x: 178, y: 480 },
  },
  {
    id: "vaste-lateral",
    name: "Vaste latéral",
    latinName: "Musculus vastus lateralis",
    group: "cuisse-avant",
    view: "front",
    origin: "Grand trochanter et lèvre latérale de la ligne âpre du fémur",
    insertion: "Tendon rotulien (par la patella)",
    function: "Extension du genou (chef latéral du quadriceps)",
    description:
      "Plus volumineux des chefs du quadriceps, sur la face externe de la cuisse.",
    paths: [
      "M 148,400 L 140,495 L 152,575 L 168,580 L 175,510 L 175,420 Z",
      "M 252,400 L 260,495 L 248,575 L 232,580 L 225,510 L 225,420 Z",
    ],
    label: { x: 156, y: 490 },
  },
  {
    id: "droit-femoral",
    name: "Droit fémoral",
    latinName: "Musculus rectus femoris",
    group: "cuisse-avant",
    view: "front",
    origin: "Épine iliaque antéro-inférieure",
    insertion: "Tendon rotulien (patella puis tubérosité tibiale)",
    function: "Extension du genou et flexion de la hanche (biarticulaire)",
    description:
      "Chef central du quadriceps, le seul à croiser la hanche et le genou.",
    paths: [
      "M 175,420 L 175,560 L 195,575 L 200,575 L 200,420 Z",
      "M 225,420 L 225,560 L 205,575 L 200,575 L 200,420 Z",
    ],
    label: { x: 200, y: 495 },
  },
  {
    id: "vaste-medial",
    name: "Vaste médial",
    latinName: "Musculus vastus medialis",
    group: "cuisse-avant",
    view: "front",
    origin: "Lèvre médiale de la ligne âpre du fémur",
    insertion: "Tendon rotulien (par la patella)",
    function: "Extension du genou, stabilisation médiale de la patella",
    description:
      "Bombement caractéristique en goutte d'eau juste au-dessus du genou.",
    paths: [
      "M 200,490 L 200,575 L 215,580 L 222,565 L 215,495 Z",
      "M 200,490 L 200,575 L 185,580 L 178,565 L 185,495 Z",
    ],
    label: { x: 210, y: 540 },
  },
  {
    id: "tibial-anterieur",
    name: "Tibial antérieur",
    latinName: "Musculus tibialis anterior",
    group: "jambe",
    view: "front",
    origin: "Condyle et face latérale du tibia, membrane interosseuse",
    insertion: "Premier cunéiforme et base du 1er métatarsien",
    function: "Dorsiflexion et inversion du pied",
    description:
      "Muscle saillant à l'avant du tibia, essentiel à la marche pour relever le pied.",
    paths: [
      "M 165,612 Q 162,665 168,725 L 178,723 L 182,665 L 182,615 Z",
      "M 235,612 Q 238,665 232,725 L 222,723 L 218,665 L 218,615 Z",
    ],
    label: { x: 173, y: 670 },
  },
];

/* ------------------------------------------------------------------ */
/* VUE DE DOS                                                          */
/* ------------------------------------------------------------------ */

const BACK_MUSCLES: Muscle[] = [
  {
    id: "occipital",
    name: "Occipito-frontal (chef occipital)",
    latinName: "Musculus occipitofrontalis (venter occipitalis)",
    group: "tete-cou",
    view: "back",
    origin: "Ligne nuchale supérieure de l'os occipital",
    insertion: "Aponévrose épicrânienne",
    function: "Tire le cuir chevelu vers l'arrière",
    description:
      "Partie postérieure du muscle occipito-frontal, visible à l'arrière du crâne.",
    paths: [
      "M 168,52 Q 200,38 232,52 Q 230,72 200,76 Q 170,72 168,52 Z",
    ],
    label: { x: 200, y: 60 },
  },
  {
    id: "trapeze-complet",
    name: "Trapèze (complet)",
    latinName: "Musculus trapezius",
    group: "dos",
    view: "back",
    origin:
      "Os occipital, ligament nucal et processus épineux des vertèbres C7 à T12",
    insertion: "Clavicule, acromion, épine de la scapula",
    function:
      "Élève, abaisse et fait pivoter la scapula ; extension de la tête",
    description:
      "Grand muscle en losange qui couvre l'ensemble de la nuque et du haut du dos.",
    paths: [
      "M 178,125 L 145,150 L 128,200 L 145,260 L 200,268 L 255,260 L 272,200 L 255,150 L 222,125 Z",
    ],
    label: { x: 200, y: 195 },
  },
  {
    id: "deltoide-posterieur",
    name: "Deltoïde postérieur",
    latinName: "Musculus deltoideus (pars spinalis)",
    group: "epaule",
    view: "back",
    origin: "Épine de la scapula",
    insertion: "Tubérosité deltoïdienne de l'humérus",
    function: "Extension et rotation externe du bras",
    description:
      "Faisceau postérieur du deltoïde, à l'arrière de l'épaule.",
    paths: [
      "M 145,150 L 110,170 L 102,210 L 124,228 L 150,212 L 158,172 Z",
      "M 255,150 L 290,170 L 298,210 L 276,228 L 250,212 L 242,172 Z",
    ],
    label: { x: 118, y: 200 },
  },
  {
    id: "grand-dorsal",
    name: "Grand dorsal",
    latinName: "Musculus latissimus dorsi",
    group: "dos",
    view: "back",
    origin:
      "Processus épineux T7-L5, sacrum, crête iliaque, 9e à 12e côtes",
    insertion: "Sillon intertuberculaire de l'humérus",
    function: "Adduction, extension et rotation interne du bras",
    description:
      "Plus large muscle du dos, donnant la forme en V caractéristique du torse.",
    paths: [
      "M 145,260 L 125,278 L 132,338 L 175,368 L 200,368 L 200,265 Z",
      "M 255,260 L 275,278 L 268,338 L 225,368 L 200,368 L 200,265 Z",
    ],
    label: { x: 158, y: 320 },
  },
  {
    id: "rhomboide",
    name: "Rhomboïdes",
    latinName: "Musculi rhomboidei major et minor",
    group: "dos",
    view: "back",
    origin: "Processus épineux C7-T5",
    insertion: "Bord médial de la scapula",
    function:
      "Rapproche la scapula de la colonne (rétraction) et la fait pivoter en bas",
    description:
      "Muscle profond en losange situé entre les omoplates, sous le trapèze.",
    paths: [
      "M 175,200 L 200,210 L 200,260 L 175,250 Z",
      "M 225,200 L 200,210 L 200,260 L 225,250 Z",
    ],
    label: { x: 200, y: 232 },
  },
  {
    id: "triceps-brachial",
    name: "Triceps brachial",
    latinName: "Musculus triceps brachii",
    group: "bras",
    view: "back",
    origin:
      "Tubercule infraglénoïdal de la scapula et faces postérieures de l'humérus (3 chefs)",
    insertion: "Olécrane de l'ulna",
    function: "Extension du coude, extension et adduction du bras",
    description:
      "Muscle à trois chefs sur la face postérieure du bras, antagoniste du biceps.",
    paths: [
      "M 88,228 Q 75,268 80,312 Q 100,322 120,312 Q 132,268 128,228 Z",
      "M 312,228 Q 325,268 320,312 Q 300,322 280,312 Q 268,268 272,228 Z",
    ],
    label: { x: 105, y: 275 },
  },
  {
    id: "extenseurs",
    name: "Extenseurs des doigts",
    latinName: "Musculi extensores digitorum",
    group: "avant-bras",
    view: "back",
    origin: "Épicondyle latéral de l'humérus, radius, ulna",
    insertion: "Phalanges des doigts",
    function: "Extension du poignet et des doigts",
    description:
      "Loge postérieure de l'avant-bras, qui ouvre la main et étend le poignet.",
    paths: [
      "M 88,318 Q 78,360 75,415 L 102,418 Q 112,365 116,318 Z",
      "M 312,318 Q 322,360 325,415 L 298,418 Q 288,365 284,318 Z",
    ],
    label: { x: 92, y: 372 },
  },
  {
    id: "erector-spinae",
    name: "Érecteurs du rachis",
    latinName: "Musculi erector spinae",
    group: "dos",
    view: "back",
    origin: "Sacrum, crête iliaque, processus épineux et transverses",
    insertion: "Côtes, processus transverses, base du crâne",
    function:
      "Extension du tronc et de la tête, maintien de la posture verticale",
    description:
      "Ensemble musculaire profond en colonnes le long du rachis (iliocostal, longissimus, épineux).",
    paths: [
      "M 192,265 L 192,395 L 208,395 L 208,265 Z",
    ],
    label: { x: 200, y: 330 },
  },
  {
    id: "grand-fessier",
    name: "Grand fessier",
    latinName: "Musculus gluteus maximus",
    group: "fessiers",
    view: "back",
    origin: "Crête iliaque, sacrum, coccyx",
    insertion: "Tractus iliotibial et tubérosité glutéale du fémur",
    function:
      "Extension et rotation externe de la hanche, puissance de l'élan (course, saut)",
    description:
      "Muscle le plus volumineux du corps humain, principal moteur de la marche et de la posture érigée.",
    paths: [
      "M 200,395 L 160,395 Q 138,418 138,460 Q 162,478 200,478 Z",
      "M 200,395 L 240,395 Q 262,418 262,460 Q 238,478 200,478 Z",
    ],
    label: { x: 170, y: 438 },
  },
  {
    id: "moyen-fessier",
    name: "Moyen fessier",
    latinName: "Musculus gluteus medius",
    group: "fessiers",
    view: "back",
    origin: "Face externe de l'aile iliaque",
    insertion: "Grand trochanter du fémur",
    function:
      "Abduction de la hanche, stabilisation du bassin lors de la marche",
    description:
      "Muscle en éventail au-dessus du grand fessier, essentiel à l'équilibre debout sur une jambe.",
    paths: [
      "M 158,378 Q 138,388 132,408 L 142,420 L 168,398 Z",
      "M 242,378 Q 262,388 268,408 L 258,420 L 232,398 Z",
    ],
    label: { x: 148, y: 400 },
  },
  {
    id: "biceps-femoral",
    name: "Biceps fémoral",
    latinName: "Musculus biceps femoris",
    group: "cuisse-arriere",
    view: "back",
    origin: "Tubérosité ischiatique et ligne âpre du fémur",
    insertion: "Tête de la fibula",
    function: "Flexion du genou, extension de la hanche, rotation externe du genou",
    description:
      "Chef latéral des ischio-jambiers, à l'arrière externe de la cuisse.",
    paths: [
      "M 145,478 L 138,580 L 158,585 L 175,490 Z",
      "M 255,478 L 262,580 L 242,585 L 225,490 Z",
    ],
    label: { x: 154, y: 530 },
  },
  {
    id: "semi-tendineux",
    name: "Semi-tendineux et semi-membraneux",
    latinName: "Musculi semitendinosus et semimembranosus",
    group: "cuisse-arriere",
    view: "back",
    origin: "Tubérosité ischiatique",
    insertion: "Patte d'oie (tibia médial) / condyle médial du tibia",
    function: "Flexion du genou, extension de la hanche, rotation interne du genou",
    description:
      "Chefs médiaux des ischio-jambiers, à l'arrière interne de la cuisse.",
    paths: [
      "M 195,485 L 195,585 L 178,585 L 175,495 Z",
      "M 205,485 L 205,585 L 222,585 L 225,495 Z",
    ],
    label: { x: 188, y: 540 },
  },
  {
    id: "gastrocnemien",
    name: "Gastrocnémien (jumeaux)",
    latinName: "Musculus gastrocnemius",
    group: "jambe",
    view: "back",
    origin: "Condyles médial et latéral du fémur (deux chefs)",
    insertion: "Calcanéus via le tendon d'Achille",
    function: "Flexion plantaire, flexion du genou (course, saut, sur la pointe des pieds)",
    description:
      "Muscle superficiel du mollet à deux ventres, responsable du « mollet » sportif.",
    paths: [
      "M 168,612 Q 158,665 168,720 L 198,722 Q 200,665 195,612 Z",
      "M 232,612 Q 242,665 232,720 L 202,722 Q 200,665 205,612 Z",
    ],
    label: { x: 178, y: 670 },
  },
  {
    id: "soleaire",
    name: "Soléaire",
    latinName: "Musculus soleus",
    group: "jambe",
    view: "back",
    origin: "Tête et bord postérieur de la fibula, ligne du soléaire du tibia",
    insertion: "Calcanéus via le tendon d'Achille",
    function: "Flexion plantaire (marche, posture debout)",
    description:
      "Muscle profond du mollet, sous le gastrocnémien, dit « pompe veineuse » du membre inférieur.",
    paths: [
      "M 170,720 L 198,722 L 195,755 L 175,758 Z",
      "M 230,720 L 202,722 L 205,755 L 225,758 Z",
    ],
    label: { x: 184, y: 738 },
  },
];

export const MUSCLES: Muscle[] = [...FRONT_MUSCLES, ...BACK_MUSCLES];

export const MUSCLES_BY_VIEW: Record<MuscleView, Muscle[]> = {
  front: FRONT_MUSCLES,
  back: BACK_MUSCLES,
};

export const MUSCLES_BY_ID: Record<string, Muscle> = MUSCLES.reduce(
  (acc, m) => {
    acc[m.id] = m;
    return acc;
  },
  {} as Record<string, Muscle>,
);

/* ------------------------------------------------------------------ */
/* SILHOUETTE                                                          */
/* ------------------------------------------------------------------ */

/**
 * Silhouette stylisée du corps humain (vue de face et de dos partagent la
 * même forme). Utilisée comme arrière-plan « peau » derrière les muscles.
 */
export const BODY_SILHOUETTE_PATH = `
  M 200,20
  C 168,20 152,44 152,72
  C 152,90 160,108 175,118
  L 175,128
  L 145,148
  L 110,162
  L 95,200
  L 80,250
  L 70,310
  L 70,335
  L 82,338
  L 92,300
  L 100,278
  L 108,310
  L 112,360
  L 105,412
  L 90,438
  L 85,452
  L 96,462
  L 110,455
  L 124,432
  L 132,395
  L 140,335
  L 152,322
  L 145,395
  L 138,500
  L 152,580
  L 162,620
  L 158,680
  L 168,725
  L 172,755
  L 188,762
  L 198,755
  L 200,720
  L 202,755
  L 212,762
  L 228,755
  L 232,725
  L 242,680
  L 238,620
  L 248,580
  L 262,500
  L 255,395
  L 248,322
  L 260,335
  L 268,395
  L 276,432
  L 290,455
  L 304,462
  L 315,452
  L 310,438
  L 295,412
  L 288,360
  L 292,310
  L 300,278
  L 308,300
  L 318,338
  L 330,335
  L 330,310
  L 320,250
  L 305,200
  L 290,162
  L 255,148
  L 225,128
  L 225,118
  C 240,108 248,90 248,72
  C 248,44 232,20 200,20 Z
`;

/** Calcule un score de pertinence pour la recherche textuelle. */
export function searchMuscles(query: string): Muscle[] {
  const q = query.trim().toLowerCase();
  if (!q) return MUSCLES;
  return MUSCLES.filter((m) => {
    return (
      m.name.toLowerCase().includes(q) ||
      m.latinName.toLowerCase().includes(q) ||
      m.function.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      MUSCLE_GROUPS_BY_ID[m.group].label.toLowerCase().includes(q)
    );
  });
}
