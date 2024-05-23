const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const asyncHandler = require('../helpers/asyncHandler')
const isAdmin = require('../helpers/isAdmin')

const Product = require('../models/product');
const Category = require('../models/category');

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('Invalid Image Type');
        if(isValid){
            uploadError = null
        }
        cb(uploadError, 'public/uploads')
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split('').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
})

const upload  = multer({ storage: storage })

router.get('/', asyncHandler(async (req, res)=> {

    let filter = {};
    if(req.query.categories)
    {
        filter = {category: req.query.categories.split(',')}
    }

    const productList = await Product.find(filter).populate('category');
    // const productList = await Product.find(filter).select('name image');
    if (!productList) {
        res.status(500), json({success:false})
    }
    res.status(200).send(productList);
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).populate('category');

    if (!product) {
        res.status(500).json({ success: false, message: 'The product with the given ID not exists' })
    }
    res.status(200).send(product)
}))

router.post('/',isAdmin, upload.single('image'), asyncHandler(async (req, res) => {

    if(!mongoose.isValidObjectId(req.params.id)){
        res.status(400).send('Invalid Product ID')
    }

    const category = await Category.findById(req.body.category);
    if (!category)
        return res.status(400).json({success: false, message : 'Invalid Category'})

    const file = req.file;
    if (!file)
        return res.status(400).send('No image in the request')

    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        image: `${basePath}${fileName}`,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        isFeatured: req.body.isFeatured
    })

    product = await product.save();

    if (!product)
        return res.status(500).send('Product cannot be created')

    res.send(product);
}))

router.put('/:id',isAdmin, asyncHandler(async (req, res) => {

	const category = await Category.findById(req.body.category);
    if (!category)
        return res.status(400).json({ success: false, message: 'Invalid Category' })

    const product = await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        isFeatured: req.body.isFeatured
    }, {
        new: true
    })

    if (!product)
        return res.status(500).json({success: false, message: 'Product cannot be updated'})
    res.send(product);
}))

router.delete('/:id',isAdmin, (req, res) => {
    Product.findByIdAndRemove(req.params.id).then(product => {
        if (product) {
            return res.status(200).json({ success: true, message: 'Product deleted successfully' })
        } else {
            return res.status(404).json({ success: false, message: 'Product cannot find' })
        }
    }).catch(err => {
        return res.status(400).json({ success: false, error: err })
    })
})

router.get('/get/count', asyncHandler(async (req, res) => {
    const productCount = await Product.countDocuments((count)=>count);
    if (!productCount) {
        res.status(500), json({ success: false })
    }
    res.status(200).send({
        productCount: productCount
    });
}))

router.get('/get/featured/:count', asyncHandler(async (req, res) => {
    const count = req.params.count ? req.params.count: 0
    const products = await Product.find({ isFeatured: true}).limit(+count);
    if (!products) {
        res.status(500), json({ success: false })
    }
    res.status(200).send(products);
}))


module.exports = router;
