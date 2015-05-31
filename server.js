// ======================= Modules ======================================
var express = require('express'),
    mongoose = require('mongoose');


// ======================= Config & Express =============================
var app = express(),
    port = process.env.PORT || 3000;

// ======================= MongoDB ======================================
var dbURI = 'mongodb://localhost/TeProductAPI';
mongoose.connect(dbURI);

var Product = require('./models/product');

//======================== Routes =======================================
var webRouter = express.Router();

webRouter.route('/products')
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

webRouter.route('/products/:productId')
    .get(function (req, res) {
        Product.findById(req.params.productId, function (err, data) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(data);
            }
        });
    });

app.use('/api', webRouter);

app.get('/', function (req, res) {
    res.send('Welcome to TeProduct Web API');
})

app.listen(port, function () {
    console.log('TeProduct Web Server listening on port ' + port);
});



