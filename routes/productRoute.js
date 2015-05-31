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

    webRouter.use('/:productId', function (req, res, next) {
        Product.findById(req.params.productId, function (err, data) {
            if (err) {
                res.status(500).send(err);
            } else if (data) {
                req.product = data;
                next();
            } else {
                res.status(404).send('Product not found');
            }
        });
    });

    webRouter.route('/:productId')
        .get(function (req, res) {
            res.send(req.product);
        })
        .put(function (req, res) {
            req.product.productName = req.body.productName;
            req.product.productCode = req.body.productCode;
            req.product.description = req.body.description;
            req.product.releaseDate = req.body.releaseDate;
            req.product.category = req.body.category;
            req.product.cost = req.body.cost;
            req.product.price = req.body.price;
            req.product.imageUrl = req.body.imageUrl;
            req.product.tags = req.body.tags;
            req.product.active = req.body.active;
            req.product.save(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.product);
                }
            });

        })
        .patch(function (req, res) {
            if (req.body._id) {
                delete req.body._id;
            }
            for (var p in req.body) {
                req.product[p] = req.body[p];
            }
            req.product.save(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.product);
                }
            });
        })
        .delete(function (req, res) {
            req.product.remove(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(204).send('Product removed');
                }
            });
        });

    return webRouter;
};

module.exports = routes;
