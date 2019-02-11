var mongoose = require('mongoose');
//var mongoose = _mongoose();
var bodyparser = require('body-parser');
var fs = require('fs');

//connecting to db ..
mongoose.connect('mongodb://localhost:27017/shoppingCart', {useNewUrlParser: true}, (err)=> {
    if(err) throw error;
    else console.log('Connection established sucessfully in Mongo..');
});

//create schema for logdetails
var logdetails = new mongoose.Schema ({
    username : String,
    password : String,
    emailid : String,
    mobile: Number,
    success : Boolean
});

//create schema for product details
var productdetails = new mongoose.Schema ({
    products: [{
    pid: Number,
    title: String,
    description: String,
    image: String,
    review: [String],
    rating: [Number],
    price: Number,
    offers: String,
    availability: String
    }]
});


var logcredits = mongoose.model('logcredit', logdetails);
var prodcredits = mongoose.model('logproducts', productdetails);



var tempdata = fs.readFileSync('controllers/prodetails.json');
var prodata = JSON.parse(tempdata);

//console.log(prodata);

// var productcredit = prodcredits(prodata).save((err)=>{
//     if(err) throw err;
//     else console.log('Item Saved');
// });

// for(var i = 0; i < prodata.products.length; i++) {
//     var product = prodcredits(prodata.products[i]).save((err)=>{
//         if(err) throw err;
//         else console.log('Item Saved');
//     });
// }


var urlencodedParser = bodyparser.urlencoded({extended: false});

module.exports = function(app) {
data = [];
var jsonparser = bodyparser.json();




app.post('/signup', jsonparser, (req, res, next)=>{
    console.log("signup");
    console.log(req.body);
    console.log();

    var logcredit = logcredits(req.body).save((err)=>{
        if(err) throw err;
        else console.log('Credentials saved in DB');
    });
    res.send(true);
    next();
});

app.get('/products', jsonparser, (req, res, next)=> {
    console.log("In the cart");
    prodcredits.find({},(err, data) => {
        //var p = {"products[0]": data[0].products}
        //res.send(JSON.stringify(p));
        //console.log(data[0].products)
        res.send(data);
    });
})

app.get('/status', jsonparser, (req, res, next)=>{
    logcredits.find({}, (err, data)=>{
        for (var i = 0; i < data.length; i++) {
            if(data[i].success == true) {
                console.log(data[i]);
                res.send(data[i]);
            }
        }
    })
})


app.put('/logout', jsonparser, (req, res, next)=>{
    console.log("log out..");
    console.log(req.body.username);
    logcredits.find({}, (err, data)=>{
    for (var i = 0; i < data.length; i++) {
        if(data[i].success == true) {
            logcredits.findOneAndUpdate({username: data[i].username}, {$set:{success: false}},
                function(err, da){
                    if(err) console.log(err);
                    else {
                        console.log("logout sucessfull");
                        res.send(true);
                    }
            })
        }
    }
    })
})


app.post('/login', jsonparser, (req, res, next)=>{
    console.log("logged in..");
    console.log(req.body.username);
    logcredits.find({}, (err, data)=>{
        //console.log(data[0]);
        if (err) throw err;
        else {
            for (var i = 0; i < data.length; i++) {
                if (data[i].username === req.body.username) {
                    if (data[i].password === req.body.password) {

                        logcredits.find({username: data[i].username}, function(err, doc) {
                            if(err) console.log(err);
                            else {
                              logcredits.findOneAndUpdate({username: data[i].username}, {$set:{success: true}},
                                function(err, da){
                                    if(err) console.log(err);
                                    else {
                                        console.log("sucessfull");
                                    }
                                })

                            }
                        })
                        res.send({check:1, user:data[i]});
                        return;
                    }
                }
            }
            res.send(false);
        } 
    });
});

};