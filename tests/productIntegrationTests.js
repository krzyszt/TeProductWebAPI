var should = require('should'),
    supertest = require('supertest'),
    app = require('../server.js'),
    mongoose = require('mongoose'),
    Product = mongoose.model('Product'),
    agent = supertest.agent(app);

describe('Product Crud Tests', function () {
    it('allow a product to be posted and return an active and _id', function (done) {
        var productPost = {
            productName: 'New product',
            productCode: 'NPP001',
            category: 'boxes'
        };

        agent.post('/api/products')
            .send(productPost)
            .expect(200)
            .end(function(err, results){
                results.body.active.should.equal(true);
                results.body.should.have.property('_id');
                done();
            });

        afterEach(function(done){
            Product.remove().exec();
            done();
        });

    });
})
