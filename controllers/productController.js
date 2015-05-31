var productController = function (Product) {

    var post = function (req, res) {
        var product = new Product(req.body);
        product.save()
        res.status(201).send(product);
    }

    var get = function (req, res) {
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
    }

    return {
        post: post,
        get: get
    }
}

module.exports = productController;