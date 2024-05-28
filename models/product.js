const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        default: ''
    },

    brand: {
        type: String,
        default: ''
    },

    price: {
        type: Number,
        default: '0'
    },
	promotion : {
        type: Number,
        default: null
	},

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
    },

    isFeatured: {
        type: Boolean,
        default: false
    },

    dateCreated: {
        type: Date,
        default: Date.now
    }
})

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals:true,
});

module.exports= mongoose.model('Product', productSchema);
