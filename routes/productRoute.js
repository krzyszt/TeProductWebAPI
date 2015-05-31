var express = require('express');

var routes = function (Product) {

    var webRouter = express.Router();

    webRouter.route('/')
        .post(function (req, res) {
            var product = new Product(req.body);
            product.save()
            res.status(201).send(product);
        })
        .get(function (req, res) {
            var query = {};
            if (req.query.category) {
                query.category = req.query.category;
            }
            Product.find(query, function (err, data) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    if (data.length > 0) {
                        res.json(data);
                    } else {
                        var populate = require('./models/populate');
                        populate();
                        res.send('Populating MongoDB with dummy products...Try again in a sec.');
                    }
                }
            });
        });

    webRouter.route('/:productId')
        .get(function (req, res) {
            Product.findById(req.params.productId, function (err, data) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(data);
                }
            });
        });

    return webRouter;
};

module.exports = routes;
