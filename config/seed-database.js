const mongoose = require('mongoose');
const User = require('../models/user');
const Product = require('../models/product');
const Category = require('../models/category');

//app.use('/public/uploads', express.static( __dirname + '/public/uploads'));


const dbConfig = require('./database.config.js');
mongoose.Promise = global.Promise;



const basePath = "http://localhost:3000/public/uploads/"


const canap_prods = [
    {
        name: "Canapsculpturel",
        description: "Inspirdu design des anns 50, ce canapcourbe en forme de haricot ame une touche de douceur et d'originalitau salon. Une forme sculpturale habill d'un tissu de velours vert sapin.",
        image: `${basePath}can0.jpg`,
        price: 30000,
		promotion : 24000,
        brand: "GETAMA",
        countInStock: 10,
        category: "canap",
        isFeatured: false
    },
    {
        name: "CANAPE WEGNER GE34",
        description: "Canapen cuir noir de bureau ou de reption, aux lignes droites et modernes cr par Hans J. Wegner et disponible en deux places.",
        image: `${basePath}can1.jpg`,
        price: 20000,
        brand: "GETAMA",
        countInStock: 14,
        category: "canap",
        isFeatured: false
    },
    {
        name: "CANAPE CONVERTIBLE",
        description: "Canapconvertible 2 places en tissu hallingdal noir, un matelas double ressort en 190x200cm. Il se transforme en lit double. Coussins doussables",
        image: `${basePath}can2.jpg`,
        price: 25000,
		promotion : 20000,
        brand: "HESTBAEK",
        countInStock: 0,
        category: "canap",
        isFeatured: false
    },
    {
        name: "CANAPE MAGS",
        description: "canapaccorde la me importance tous les ents cl d'un canappar sa suspension, la composition de la mousse et la durabilitdu rembourrage.Les accoudoirs hauts et l'assise profonde font de HAY Mags un canapidl pour se dendre.",
        image: `${basePath}can3.jpg`,
        price: 26000,
        brand: "Hay",
        countInStock: 10,
        category: "canap",
        isFeatured: false
    },
    {
        name: "CANAPE MK46",
        description: "une ition spiale la pointe de la modernit De 203cm hauteur,83cm largeur, profendeur 70cm, pour une assise de H45cm,le canap3 places MK46 Mogens Koch trouve harmonieusement sa place dans les grandes pies cosy comme le salon.",
        image: `${basePath}can4.jpg`,
        price: 31000,
        brand: "FDB Mbler",
        countInStock: 5,
        category: "canap",
        isFeatured: false
    },
    {
        name: "CANAPE CAROLINE",
        description: "canap3 places,L197 x P82 H82 cm - Hauteur d'assise: 42 cm, exclusivement fabriquen rotin naturel dans une version intieure ou l'extieur, il apportera une touche scandinave et chaleureuse votre ambiance.",
        image: `${basePath}can5.jpg`,
        price: 20000,
        brand: "SIKA DESIGN",
        countInStock: 13,
        category: "canap",
        isFeatured: false
    },
    {
        name: "Canapcosy 3 places bleu",
        description: "Douvrez l'ance et le confort supre avec notre CanapCosy 3 Places, enveloppdans une teinte raffin de Velours Bleu 100% polyester. Con pour offrir une expience d'assise inal, ce canapfusionne avec brio design et fonctionnalit",
        image: `${basePath}can6.jpg`,
        price: 34000,
        brand: "SIKA DESIGN",
        countInStock: 5,
        category: "canap",
        isFeatured: false
    },
    {
        name: "Canapd'angle gris velours",
        description: "Le CanapD'angle Moderne en velours gris matelassest l'incarnation du confort et du style. Dotde deux traversins pour un soutien supplentaire, ce canapoffre la flexibilitdu montage de l'angle droite ou gauche, s'adaptant ainsi parfaitement votre espace de vie.",
        image: `${basePath}can7.jpg`,
        price: 46000,
		promotion : 32000,
        brand: "SIKA DESIGN",
        countInStock: 0,
        category: "canap",
        isFeatured: false
    },
    {
        name: "Canap3 places en Lin naturel",
        description: "Un canapen Tissu textur75% polyester - 10% lin - 15% viscose, structure bois de peuplier Avec unn revement doussable et lavable, il allie style et praticit Les 9 coussins vari offrent un confort sur mesure pour un espace accueillant. Un incontournable intemporel pour votre salon.",
        image: `${basePath}can8.jpg`,
        price: 50000,
        brand: "HESTBAEK",
        countInStock: 13,
        category: "canap",
        isFeatured: false
    },
    {
        name: "Canapd'angle",
        description: "Douvrez le Canapd'Angle en Tissu Vert Sauge, un choix ant pour votre salon. Son dossier amovible offre un confort optimal, tandis que sa grande midienne invite la dente. Avec ses 2 traversins d'appoints, ce canapd'angle gauche vous offre un espace de relaxation complet.",
        image: `${basePath}can9.jpg`,
        price: 21000,
        brand: "HESTBAEK",
        countInStock: 9,
        category: "canap",
        isFeatured: false
    }
];



const table_prods = [
  {
    name: "TABLE TARN",
    description: "Table de salle à manger, taille: L110xl104xH73 cm, un design moderne avec ses lignes pures et sa silhouette minimaliste. Son apparence discrète se marie sans effort avec une variété de styles d'intérieur, du chic urbain à la simplicité scandinave.",
    image: `${basePath}tab0.jpg`,
    price: 19000,
    brand: "Ferm LIVING",
    countInStock: 5,
    category: "Table",
    isFeatured: false
  },
  {
    name: "TABLE HOLMEN",
    description: "Dimensions: L210cm x P100cm x H73cm. Chêne massif huilé. La table rejoint la collection des classiques réimaginés de Bernh. Pedersen & Søn. Avec son esthétique moderne, son design fonctionnel et sa fabrication artisanale, la table n° 201 est un témoignage de la beauté durable du design danois.",
    image: `${basePath}tab1.jpg`,
    price: 18000,
	promotion : 11000,
    brand: "BERNH. PEDERSEN & SON",
    countInStock: 6,
    category: "Tables",
    isFeatured: false
  },
  {
    name: "TABLE IDA - RONDE",
    description: "La série Ida est une série de meubles contemporains élégants qui puise ses racines dans l'héritage du design danois. La série est fabriquée en bois massif avec des détails discrets qui lui permettent d'être très polyvalente tout en conservant sa propre expression unique.",
    image: `${basePath}tab2.jpg`,
    price: 21000,
    brand: "HASLEV",
    countInStock: 10,
    category: "Tables",
    isFeatured: false
  },
  {
    name: "TABLE TEN OVALE",
    description: "Dimensions 200x95xH72 cm. La table de salle à manger Ten se compose d'un plateau en bois massif, taillé en une seule pièce et poncé à la main, soutenue par deux planches très fines en bois massif également. La forme incurvée du plateau ainsi que ses bords arrondis, la finesse de la structure, l'absence de lignes droites sur le plateau.",
    image: `${basePath}tab3.jpg`,
    price: 17000,
    brand: "DK3",
    countInStock: 0,
    category: "Tables",
    isFeatured: false
  },
  {
    name: "TABLE RONDE OX",
    description: "Table ronde de salle à manger aux lignes courbes et élégantes avec plateau en marbre et piètement en acier inoxydable. Design de la boutique danoise.",
    image: `${basePath}tab4.jpg`,
    price: 15000,
    brand: "OX DENMARQ",
    countInStock: 9,
    category: "Tables",
    isFeatured: false
  },
  {
    name: "TABLE BK15 - Indoor-Outdoor Collection",
    description: "Dimensions: L153xP78xH74 cm. Un exemple classique de design danois discret. Suffisamment belle pour être utilisée à l'intérieur, mais assez résistante pour résister aux longs hivers scandinaves, elle s'intègre parfaitement dans les deux environnements, canalisant la chaleur et l'authenticité du teck.",
    image: `${basePath}tab5.jpg`,
    price: 26000,
    brand: "CARL HANSEN & SØN",
    countInStock: 5,
    category: "Tables",
    isFeatured: false
  },
  {
    name: "TABLE BASSE NIVEAU",
    description: "Niveau est une ligne élégante et polyvalente de tables basses en marbre et en bois, alliant les lignes minimalistes scandinaves à la beauté des matériaux naturels. En 3 pièces.",
    image: `${basePath}tab6.jpg`,
    price: 12000,
	promotion : 10000,
    brand: "FREDERICIA",
    countInStock: 13,
    category: "Tables",
    isFeatured: false
  },
  {
    name: "Table contemporaine",
    description: "Ce meuble contemporain présente un beau design avec sa poutre centrale et ses pieds en métal noir. La table est rectangulaire, longue de 2 mètres, et possède un plateau en bois massif chêne sauvage huilé. Le plateau en bois naturel contraste avec les pieds en métal noir pour un look original dans votre salle à manger.",
    image: `${basePath}tab7.jpg`,
    price: 25000,
    brand: "IKEA",
    countInStock: 8,
    category: "Tables",
    isFeatured: false
  },
  {
    name: "Table à manger",
    description: "Une grande table à manger ovale de 220 cm, où la beauté de l'imitation bois de noyer rencontre l'audace du métal noir. Son plateau en MDF offre l'aspect chaleureux et naturel du noyer, tout en assurant une durabilité accrue. Les pieds en demi-lune en métal noir ajoutent une touche de modernité et de stabilité créant un contraste harmonieux avec le caractère organique du bois.",
    image: `${basePath}tab8.jpg`,
    price: 21000,
	promotion: 18500,
    brand: "IKEA",
    countInStock: 0,
    category: "Tables",
    isFeatured: false
  },
  {
    name: "TABLE CLASSIQUE",
    description: "Table classique en bois massif (hêtre, chêne) avec rallonge pliable. Dimensions L130xP85xH74cm - Longueur dépliée: L180cm ou L85xP85xH72cm.",
    image: `${basePath}tab9.jpg`,
    price: 22000, // Random price
    brand: "HALSEV",
    countInStock: 11,
    category: "Tables",
    isFeatured: false
  }
];


const chambre_prods = [
  {
    name: "Lit",
    description: "Tête et pied en aluminium 30 mm laqué, montants aluminium 35 mm laqué, panneaux mélaminé structuré 19 mm. Traverse en pin massif ou tilleul avec queue d'aronde. Dimension: 160x200 cm.",
    image: `${basePath}l0.jpg`,
    price: 19000,
    brand: "MINET",
    countInStock: 11,
    category: "Chambre",
    isFeatured: false
  },
  {
    name: "Lit",
    description: "Tête de lit avec 3 panneaux arrondis ou panneau capitonné, nombreuses finitions possibles. Cadre de lit avec 2 angles au pied de lit arrondis ou cadre de lit carré. Piètement métal chrome ou couleurs, option tiroirs coffres de rangement sous le lit. Dimension 90 x 190 cm.",
    image: `${basePath}l1.jpg`,
    price: 20000,
    brand: "NOLTE",
    countInStock: 5,
    category: "Chambre",
    isFeatured: false
  },
  {
    name: "Lit",
    description: "Tête et cadre de lit en panneaux de particules de 19, 25 et 30 mm. Bandeau de tête de lit en panneau structuré de moyenne densité 19 mm, équipé d'éclairage LED interactionné par interrupteur. Pieds en frêne massif, vernis sans solvants hauteur 22 cm. Couchage: 140x190 cm.",
    image: `${basePath}l2.jpg`,
    price: 22000,
	promotion : 18500,
    brand: "CELIO",
    countInStock: 5,
    category: "Chambre",
    isFeatured: false
  },
  {
    name: "Lit Teck moderne",
    description: "Pour une sublime chambre à coucher ou une suite parentale, ce lit moderne pour adulte de grande qualité en bois de Teck et de couleur gris clair sera parfait. Un ensemble, lit 2 places, deux chevets et une tête de lit impressionnante associée au lit fera sensation. Un lit adulte équipé d'un cadre de lit 160x200 ou 180x200 cm effet surélevé qui sera très pratique lors du nettoyage.",
    image: `${basePath}l3.jpg`,
    price: 31000,
    brand: "CELIO",
    countInStock: 10,
    category: "Chambre",
    isFeatured: false
  },
  {
    name: "Lit style moderne baroque",
    description: "Ce lit style moderne baroque en velours champagne incarne l'élégance contemporaine fusionnée avec l'opulence classique. Avec son cadre de conception et sa tête de lit rembourrée, créant une esthétique somptueuse et accueillante. Le velours champagne luxueux apporte une touche de douceur tactile, tandis que les surpiqûres décoratives exquises et les boutons ajoutent des détails raffinés et une profondeur visuelle.",
    image: `${basePath}l4.jpg`,
    price: 23000,
    brand: "MINET",
    countInStock: 6, // Random stock count
    category: "Chambre",
    isFeatured: false
  },
  {
    name: "Armoire 7 portes graphite et verre noir",
    description: "Conçue pour répondre à vos besoins de rangement. Elle est équipée de deux espaces de penderies et de quatre tiroirs pratiques. Son design et ses finitions de haute qualité en font un choix idéal pour ceux qui recherchent une solution de rangement pratique et esthétique pour leur maison.",
    image: `${basePath}l5.jpg`,
    price: 53000,
    brand: "CELIO",
    countInStock: 0,
    category: "Chambre",
    isFeatured: false
  },
  {
    name: "Armoire avec miroir",
    description: "Une œuvre d'art dans votre chambre. Ses six portes, dont quatre ornées de miroirs, ajoutent une touche de glamour et agrandissent visuellement l'espace. Avec deux tiroirs bien pensés et deux vastes penderies. Dimension: L180xH208xP58 cm.",
    image: `${basePath}l6.jpg`,
    price: 30000,
	promotion : 27200,
    brand: "CELIO",
    countInStock: 5,
    category: "Chambre",
    isFeatured: false
  },
  {
    name: "Armoire porte coulissante",
    description: "Dotée d'une porte coulissante avec un miroir, d'un double dressing et de cinq compartiments de rangement. Dimension: L120xH215xP60 cm.",
    image: `${basePath}l7.jpg`,
    price: 26000,
    brand: "CELIO",
    countInStock: 6,
    category: "Chambre",
    isFeatured: false
  },
  {
    name: "Armoire dressing miroir",
    description: "Elle se compose de 6 portes dont deux avec miroir et de deux grands tiroirs. Elle est équipée d'un dressing avec tringle de suspension et de 5 compartiments de rangement. Sa façade laquée brillante apportera une touche luxueuse dans la pièce de votre choix. Les matériaux utilisés sont de qualité pour une longévité optimale.",
    image: `${basePath}l8.jpg`,
    price: 39000,
    brand: "FREDERICIA",
    countInStock: 0,
    category: "Chambre",
    isFeatured: false
  },
  {
    name: "Armoire 2 portes",
    description: "Armoire de rangement et penderie moderne pour jeune enfant, équipée de deux portes, cette armoire pour ado de 10 à 20 ans comblera sans problème la solution de rangement la plus appropriée pour votre garnement. Dimension: L90xH199xP58 cm.",
    image: `${basePath}l9.jpg`,
    price: 41000,
    brand: "FREDERICIA",
    countInStock: 4,
    category: "Chambre",
    isFeatured: false
  }
];



const decoration_prods = [
  {
    name: "Lampadaire Moderne",
    description: "Un lampadaire élégant avec un design minimaliste, parfait pour les salons contemporains. Base en métal noir mat et abat-jour en tissu blanc. Hauteur: 150 cm.",
    image: `${basePath}lom0.jpg`,
    price: 12000,
	promotion : 10300,
    brand: "LUMINAIRE",
    countInStock: 0,
    category: "Decoration",
    isFeatured: false
  },
  {
    name: "Lampe de Bureau",
    description: "Lampe de bureau avec bras articulé en métal et abat-jour en verre opale. Parfait pour une ambiance de travail moderne. Hauteur réglable jusqu'à 60 cm.",
    image: `${basePath}lom1.jpg`,
    price: 8000,
    brand: "BRIGHT",
    countInStock: 15,
    category: "Decoration",
    isFeatured: false
  },
  {
    name: "Lampe de Chevet",
    description: "Charmante lampe de chevet avec base en céramique et abat-jour en tissu doux. Idéale pour créer une ambiance cosy dans la chambre. Hauteur: 45 cm.",
    image: `${basePath}lom2.jpg`,
    price: 5000,
    brand: "COZY",
    countInStock: 20,
    category: "Decoration",
    isFeatured: false
  },
  {
    name: "Plafonnier LED",
    description: "Plafonnier moderne avec éclairage LED intégré et intensité réglable. Design plat et épuré en aluminium brossé. Diamètre: 40 cm.",
    image: `${basePath}lom3.jpg`,
    price: 25000,
    brand: "BRIGHTLIGHT",
    countInStock: 12,
    category: "Decoration",
    isFeatured: false
  },
  {
    name: "Applique Murale Vintage",
    description: "Applique murale au design vintage en métal et verre, parfaite pour ajouter une touche rétro à votre intérieur. Dimensions: 30x15 cm.",
    image: `${basePath}lom4.jpg`,
    price: 6000,
	promotion : 4700,
    brand: "RETROLIGHT",
    countInStock: 18,
    category: "Decoration",
    isFeatured: false
  },
  {
    name: "Miroir Murale Moderne",
    description: "Miroir mural avec cadre en métal doré. Parfait pour apporter une touche élégante et lumineuse à votre salon ou chambre. Dimensions: 80x120 cm.",
    image: `${basePath}mir0.jpg`,
    price: 15000,
    brand: "REFLECT",
    countInStock: 0,
    category: "Decoration",
    isFeatured: false
  },
  {
    name: "Miroir Rond",
    description: "Miroir rond avec un cadre en bois naturel, idéal pour un style scandinave. Peut être utilisé dans la salle de bain, le hall d'entrée ou la chambre. Diamètre: 60 cm.",
    image: `${basePath}mir1.jpg`,
    price: 10000,
    brand: "NATURA",
    countInStock: 10,
    category: "Decoration",
    isFeatured: false
  },
  {
    name: "Miroir avec Étagère",
    description: "Miroir rectangulaire avec étagère intégrée pour un rangement pratique. Cadre en métal noir, parfait pour un look industriel. Dimensions: 50x70 cm.",
    image: `${basePath}mir2.jpg`,
    price: 13000,
    brand: "STORAGE",
    countInStock: 5,
    category: "Decoration",
    isFeatured: false
  }
];



let hero_prods = [
    {
        name: "Art Deco Chair",
        description: "A luxurious Art Deco home decor piece that exudes elegance and timeless style.",
        image: `${basePath}hero-product-1.jpg`,
        brand: "DecoLuxury",
        price: 1200,
		promotion : 1000,
        category: "Canapes",
        countInStock: 2,
        isFeatured: true
    },
    {
        name: "Helen Chair",
        description: "A premium Helen chair offering exceptional comfort and a chic design for your living space.",
        image: `${basePath}hero-product-2.jpg`,
        brand: "Comfort Seating",
        price: 3450,
		promotion : 2200,
        category: "Canapes",
        countInStock: 9,
        isFeatured: true
    },
    {
        name: "CANAPE WEGNER GE34",
        description: "An elegant vase filled with beautiful artificial flowers to brighten up any room.",
        image: `${basePath}hero-product-3.jpg`,
        brand: "Floral Home",
        price: 19800,
		promotion : 15900,
        category: "Chambre",
        countInStock: 5,
        isFeatured: true
    },
    {
        name: "P-size Chair",
        description: "A set of decorative wood eggs that add a rustic touch to your home decor.",
        image: `${basePath}hero-product-4.jpg`,
        brand: "NatureCraft",
        price: 540,
		promotion : 320,
        category: "Canapes",
        countInStock: 18,
        isFeatured: true
    },
    {
        name: "Armoire 2 portes",
        description: "A high-quality pine wood table that combines durability with rustic elegance.",
        image: `${basePath}hero-product-5.jpg`,
        brand: "Rustic Elegance",
        price: 4390,
		promotion : 4000,
        category: "Chambre",
        countInStock: 7,
        isFeatured: true
    }
];

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

}).then(async () => {
    console.log("[+] Successfully connected to the database");

	await Category.deleteMany({});

	console.log("[+] Delete existing categories")

	// create categories
	 let cats = await Category.insertMany([{
        name: "Canapes",
        icon: "icon",
        color: "#ff0000",
     },{
        name: "Tables",
        icon: "icon",
        color: "#00ff00",
     }, {
        name: "Chambre",
        icon: "icon",
        color: "#0000ff",
     }, {
        name: "Decoration",
        icon: "icon",
        color: "#ff00ff",
     },])

	console.log("[+] categories created")

	await Product.deleteMany({});

	console.log("[+] Delete existing products")

	canap_prods.forEach(prod => prod.category = cats[0]._id)

	table_prods.forEach(prod => prod.category = cats[1]._id)

	chambre_prods.forEach(prod => prod.category = cats[2]._id )

	decoration_prods.forEach(prod => prod.category = cats[3]._id )

	hero_prods.map(product => {
  		const category = cats.find(cat => cat.name === product.category);
  		if (category) product.category = category._id;
  		return product;
	})

	let prods = canap_prods.concat(table_prods).concat(chambre_prods).concat(decoration_prods).concat(hero_prods)


	let products = await Product.insertMany(prods)
	console.log("[+] Products created")


}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

