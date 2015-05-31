var should = require('should'),
    sinon = require('sinon');

describe('Product Controller Tests', function(){

    describe('POST testing', function(){
        it('not allow an empty name on product', function(){
            var Product = function (product){ this.save = function(){}};

            var req = {
                body: {
                    productCode: 'HRT4500'
                }
            }

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

            var productController = require('../controllers/productController')(Product);

            productController.post(req,res);

            res.status.calledWith(400).should.equal(true,'Bad Status '+ res.status.args[0][0]);
            res.send.calledWith('Product name required').should.equal(true);
        });
    });
});