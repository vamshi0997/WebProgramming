//var currentSearchResult = 'example'

const fs = require('fs');

let rawdata = fs.readFileSync('public/assets/catalog.json');  
let data = JSON.parse(rawdata);  
//console.log(data);
var bodyParser = require('body-parser');

module.exports = function(app) {

app.get('/', function(req, res) {
    //get from mongo
    res.render('todo', {todos: data.products});
    
});

app.get('/edit/:id-:name-:description-:quantity', function(req, res) {
    //get from mongo

    
    rawdata = fs.readFileSync('public/assets/catalog.json');  
      data = JSON.parse(rawdata);
      data.products[req.params.id].title=req.params.name
      data.products[req.params.id].description=req.params.description
      data.products[req.params.id].quantity=req.params.quantity
      
      console.log(data);
      data2 = JSON.stringify(data);
      fs.writeFileSync('public/assets/catalog.json', data2);
      
      
    res.send(req.params);
});

app.get('/delete/:id', function(req, res) {
    //get from mongo

    
    rawdata = fs.readFileSync('public/assets/catalog.json');  
      data = JSON.parse(rawdata);
      /*
      data.products[req.params.id].title=req.params.name
      data.products[req.params.id].description=req.params.description
      data.products[req.params.id].quantity=req.params.quantity
      */
    tmp = []
    for(var k = 0 ; k<data.products.length;k++) {
        if(k!=req.params.id) {
            tmp.push(data.products[k])
        }
    }
    data.products=tmp;


      //console.log(data);
      data2 = JSON.stringify(data);
      fs.writeFileSync('public/assets/catalog.json', data2);
      
      
    res.send(req.params);
});






// app.post('/todo', urlencodedParser,function(req, res) {
//     //get data from view and add it to mongo
//     var newTodo = Todo(req.body).save(function(err, data) {
//         if (err) throw err;
//         res.json(data);
//     });
//     //data.push(req.body);
//     //res.json(data);
// });

// app.delete('/todo/:item', function(req, res) {
//     //delete requested item.
//     Todo.find({item: req.params.item.replace(/\-/g, "")}).remove(function(err,data) {
//         if(err) throw err;
//         res.json(data);
//     });
//     // data = data.filter(function(todo) {
//     //     return todo.item.replace(/ /g, '-') != req.params.item;
//     // });
//     // res.json(data);
// });

};