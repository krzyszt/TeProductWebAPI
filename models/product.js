var mongoose = require('mongoose');

var productModel = new mongoose.Schema({
    productName: {
        type: String
    },
    productCode: {
        type: String
    },
    description: {
        type: String
    },
    releaseDate: {
        type: Date
    },
    category: {
        type: String
    },
    cost: {
        type: Number
    },
    price: {
        type:Number
    },
    imageUrl: {
        type: String
    },
    tags: {
        type:Array
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Product', productModel);