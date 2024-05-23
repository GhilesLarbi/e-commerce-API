const mongoose = require('mongoose');
const User = require('../models/user');
const Product = require('../models/product');
const Category = require('../models/category');

//app.use('/public/uploads', express.static( __dirname + '/public/uploads'));


const dbConfig = require('./database.config.js');
mongoose.Promise = global.Promise;



const basePath = "http://localhost:3000/public/uploads/"

let accessory_prods = [
    {
        name: "Art Deco Home",
        description: "A stunning Art Deco home decor piece that adds a touch of elegance and sophistication to any room.",
        image: `${basePath}product-2.jpg`,
        brand: "DecoLiving",
        price: "600",
        category: null,
        countInStock: 12,
        isFeatured: false
    },
    {
        name: "Dark Green Jug",
        description: "A beautifully crafted dark green jug perfect for serving beverages or as a decorative item.",
        image: `${basePath}product-4.jpg`,
        brand: "GreenWare",
        price: "340",
        category: null,
        countInStock: 2,
        isFeatured: false
    },
    {
        name: "Drinking Glasses",
        description: "Set of elegant drinking glasses ideal for everyday use or special occasions.",
        image: `${basePath}product-5.jpg`,
        brand: "GlassElegance",
        price: "420",
        category: null,
        countInStock: 9,
        isFeatured: false
    },
    {
        name: "High Quality Glass Bottle",
        description: "A premium glass bottle suitable for storing beverages, featuring a sleek and modern design.",
        image: `${basePath}product-7.jpg`,
        brand: "Bottles & More",
        price: "605",
        category: null,
        countInStock: 3,
        isFeatured: false
    },
    {
        name: "Living Room & Bedroom Lights",
        description: "Versatile lighting solutions that enhance the ambiance of your living room or bedroom.",
        image: `${basePath}product-8.jpg`,
        brand: "LumoLight",
        price: "900",
        category: null,
        countInStock: 6,
        isFeatured: false
    },
    {
        name: "Teapot with black tea",
        description: "A stylish teapot set that comes with black tea, perfect for a cozy afternoon tea session.",
        image: `${basePath}product-14.jpg`,
        brand: "TeaEssence",
        price: "500",
        category: null,
        countInStock: 13,
        isFeatured: false
    },
    {
        name: "Wooden Cups",
        description: "Set of rustic wooden cups that add a natural touch to your kitchenware collection.",
        image: `${basePath}product-19.jpg`,
        brand: "NatureCraft",
        price: "580",
        category: null,
        countInStock: 13,
        isFeatured: false
    }
]


let decoration_prods = [
    {
        name: "Animi Dolor Pariatur",
        description: "An exquisite decor piece that brings a touch of elegance and charm to any room.",
        image: `${basePath}product-1.jpg`,
        brand: "Elegance Decor",
        price: 200,
        category: null,
        countInStock: 2,
        isFeatured: false
    },
    {
        name: "Artificial Potted Plant",
        description: "A lifelike artificial potted plant that adds greenery and freshness to your space without the hassle of maintenance.",
        image: `${basePath}product-3.jpg`,
        brand: "GreenSpace",
        price: 800,
        category: null,
        countInStock: 9,
        isFeatured: false
    },
    {
        name: "Smooth Disk",
        description: "A stylish smooth disk decoration that enhances the aesthetic appeal of your home or office.",
        image: `${basePath}product-11.jpg`,
        brand: "Modern Artifacts",
        price: 920,
        category: null,
        countInStock: 19,
        isFeatured: false
    },
    {
        name: "Unique Decoration",
        description: "A unique decoration piece that stands out and adds a distinctive flair to your interior decor.",
        image: `${basePath}product-15.jpg`,
        brand: "Unique Finds",
        price: 300,
        category: null,
        countInStock: 10,
        isFeatured: false
    },
    {
        name: "Vase Of Flowers",
        description: "A beautiful vase of flowers that brings a vibrant and refreshing touch to any room.",
        image: `${basePath}product-16.jpg`,
        brand: "Floral Home",
        price: 1540,
        category: null,
        countInStock: 14,
        isFeatured: false
    },
    {
        name: "Wood Eggs",
        description: "Charming wooden eggs that add a rustic and natural touch to your home decor.",
        image: `${basePath}product-17.jpg`,
        brand: "NatureCraft",
        price: 380,
        category: null,
        countInStock: 5,
        isFeatured: false
    },
    {
        name: "Wooden Box",
        description: "A beautifully crafted wooden box, perfect for storing small items or as a decorative piece.",
        image: `${basePath}product-18.jpg`,
        brand: "Crafty Creations",
        price: 540,
        category: null,
        countInStock: 6,
        isFeatured: false
    },
    {
        name: "Wooden Cups",
        description: "Set of rustic wooden cups that add a natural touch to your kitchenware collection.",
        image: `${basePath}product-19.jpg`,
        brand: "NatureCraft",
        price: 580,
        category: null,
        countInStock: 8,
        isFeatured: false
    }
];


let furniture_prods = [
    {
        name: "Helen Chair",
        description: "A stylish and comfortable Helen chair, perfect for any modern living space.",
        image: `${basePath}product-6.jpg`,
        brand: "Comfort Seating",
        price: 1360,
        category: null,
        countInStock: 21,
        isFeatured: false
    },
    {
        name: "Nancy Chair",
        description: "A sleek and elegant Nancy chair, designed to add sophistication to your home.",
        image: `${basePath}product-9.jpg`,
        brand: "Elegant Interiors",
        price: 1800,
        category: null,
        countInStock: 16,
        isFeatured: false
    },
    {
        name: "Nancy Chair",
        description: "An affordable and stylish Nancy chair that combines comfort with design.",
        image: `${basePath}product-10.jpg`,
        brand: "Home Comfort",
        price: 800,
        category: null,
        countInStock: 6,
        isFeatured: false
    },
    {
        name: "Table Black",
        description: "A modern black table that brings a touch of elegance and functionality to your space.",
        image: `${basePath}product-12.jpg`,
        brand: "Modern Living",
        price: 1340,
        category: null,
        countInStock: 7,
        isFeatured: false
    },
    {
        name: "Table Wood Pine",
        description: "A sturdy pine wood table that adds a rustic charm to your dining area.",
        image: `${basePath}product-13.jpg`,
        brand: "Rustic Charm",
        price: 1000,
        category: null,
        countInStock: 4,
        isFeatured: false
    },
    {
        name: "Wooden Cups",
        description: "Set of rustic wooden cups that add a natural touch to your kitchenware collection.",
        image: `${basePath}product-19.jpg`,
        brand: "NatureCraft",
        price: 580,
        category: null,
        countInStock: 8,
        isFeatured: false
    }
];


let hero_prods = [
    {
        name: "Art Deco Home",
        description: "A luxurious Art Deco home decor piece that exudes elegance and timeless style.",
        image: `${basePath}hero-product-1.jpg`,
        brand: "DecoLuxury",
        price: 1200,
        category: "decoration",
        countInStock: 2,
        isFeatured: true
    },
    {
        name: "Helen Chair",
        description: "A premium Helen chair offering exceptional comfort and a chic design for your living space.",
        image: `${basePath}hero-product-2.jpg`,
        brand: "Comfort Seating",
        price: 3450,
        category: "decoration",
        countInStock: 9,
        isFeatured: true
    },
    {
        name: "Vase Of Flowers",
        description: "An elegant vase filled with beautiful artificial flowers to brighten up any room.",
        image: `${basePath}hero-product-3.jpg`,
        brand: "Floral Home",
        price: 980,
        category: "decoration",
        countInStock: 5,
        isFeatured: true
    },
    {
        name: "Wood Eggs",
        description: "A set of decorative wood eggs that add a rustic touch to your home decor.",
        image: `${basePath}hero-product-4.jpg`,
        brand: "NatureCraft",
        price: 540,
        category: "decoration",
        countInStock: 18,
        isFeatured: true
    },
    {
        name: "Table Wood Pine",
        description: "A high-quality pine wood table that combines durability with rustic elegance.",
        image: `${basePath}hero-product-5.jpg`,
        brand: "Rustic Elegance",
        price: 4390,
        category: "furniture",
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

	await Category.find({
		name: ["decoration", "accessory","furniture"]
	}, function (err, docs) {
		docs.forEach(doc => doc.remove())
	});	
	console.log("[+] Delete existing categories")

	// create categories
	 let cats = await Category.insertMany([{
        name: "decoration",
        icon: "icon",
        color: "#ff0000",
     }, {
        name: "accessory",
        icon: "icon",
        color: "#00ff00",
     }, {
        name: "furniture",
        icon: "icon",
        color: "#0000ff",
     }])

	console.log("[+] categories created")

	let accProductNames = accessory_prods.map(product => product.name)
	let decProductNames = decoration_prods.map(product => product.name)
	let furProductNames = furniture_prods.map(product => product.name)


	let productNames = accProductNames.concat(decProductNames).concat(furProductNames)

	await Product.find({
		name: productNames
	}, function (err, docs) {
		docs.forEach(doc => doc.remove())
	});	

	console.log("[+] Delete existing products")

	accessory_prods.forEach(prod => {
		prod.category = cats[1]._id
	})

	decoration_prods.forEach(prod => {
		prod.category = cats[0]._id
	})

	furniture_prods.forEach(prod => {
		prod.category = cats[2]._id
	})

	hero_prods.map(product => {
  		const category = cats.find(cat => cat.name === product.category);
  		if (category) product.category = category._id;
  		return product;
	})

	let prods = decoration_prods.concat(accessory_prods).concat(furniture_prods).concat(hero_prods)


	let products = await Product.insertMany(prods)
	console.log("[+] Products created")


}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

