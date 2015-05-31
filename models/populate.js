var productModel = require('./product');

var populate = function(){

    var data = [
        {
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2009",
            "description": "Leaf rake with 48-inch wooden handle.",
            "cost": 9.00,
            "price": 19.95,
            "category": "garden",
            "tags": ["leaf", "tool"],
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2010",
            "description": "15 gallon capacity rolling garden cart",
            "cost": 20.00,
            "price": 32.99,
            "category": "garden",
            "tags": ["barrow", "cart", "wheelbarrow"],
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2013",
            "description": "Curved claw steel hammer",
            "cost": 1.00,
            "price": 8.99,
            "category": "toolbox",
            "tags": ["tool"],
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2009",
            "description": "15-inch steel blade hand saw",
            "cost": 6.95,
            "price": 11.55,
            "category": "garden",
            "tags": ["garden", "mower"],
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2002",
            "description": "Standard two-button video game controller",
            "cost": 2.22,
            "price": 35.95,
            "category": "gaming",
            "tags": ["gaming", "controller", "video game"],
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }
    ];

    for( i=0; i < data.length ; i++) {

        var product = new productModel(data[i]);

        product.save(function(err,doc){

            if(err || !doc){
                console.log('error');
            }
        });
    }
};

module.exports = populate;


