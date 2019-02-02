// var data = {
// 	"products": [{
// 			"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
// 			"description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
// 			"image": "1.jpeg",
// 			"quantity":"10"
// 		},
// 		{
// 			"title": "Mi A2 4GB + 64GB | 6GB + 128GB",
// 			"description": "15.2cm (5.99) large display",
// 			"image": "2.jpeg",
// 			"quantity":"20"
// 		},
// 		{
// 			"title": "Apple iphone 32GB",
// 			"description": "11.4 cm(4.7)display",
// 			"image": "3.jpeg",
// 			"quantity":"30"
// 		},
// 		{
// 			"title": "red mi note 6 pro",
// 			"description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
// 			"image": "4.jpeg",
// 			"quantity":"40"
// 		}
// 	]
// };



//var currentSearchResult = 'example'

const fs = require('fs');

let rawdata = fs.readFileSync('public/assets/catalog.json');  
let data = JSON.parse(rawdata);  

var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

//connect db
//mongoose.connect('mongodb://test:test1234@ds117535.mlab.com:17535/todo', {useNewUrlParser: true});

//create schema
// var todoSchema = new mongoose.Schema({
//     item: String
// });

// var Todo = mongoose.model('Todo', todoSchema);
// var itemOne = Todo({item: 'buy flowers'}).save(function(err) {
//     if(err) throw err;
//     console.log('item saved');
// });

//var data = [{item:'Watching movies'}, {item: 'playing games'}, {item: 'reading books'}, {item: 'cricket'}];

//var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app) {

app.get('/todo', function(req, res) {
    //get from mongo

    res.render('todo', {todos: data});
    
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