// ======================= Modules ======================================
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


// ======================= Config & Express =============================
var app = express(),
    port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// ======================= MongoDB ======================================
var dbURI = 'mongodb://localhost/TeProductAPI';
mongoose.connect(dbURI);

var Product = require('./models/product');

//======================== Routes =======================================

productRouter = require('./routes/productRoute')(Product);
app.use('/api/products', productRouter);

app.get('/', function (req, res) {
    res.send('Welcome to TeProduct Web API');
})

app.listen(port, function () {
    console.log('TeProduct Web Server listening on port ' + port);
});



