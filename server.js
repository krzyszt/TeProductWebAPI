var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;

var webRouter = express.Router();

webRouter.route('/products')
    .get(function (req, res) {
        var messageJson = {
            message: 'Welcome to TeProduct Web API'
        }
        res.json(messageJson);
    });

app.use('/api', webRouter);

app.listen(port, function () {
    console.log('TeProduct Web Server listening on port ' + port);
});



