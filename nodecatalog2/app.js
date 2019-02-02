var express = require('express');
var catalogController = require('./controllers/catalogcontroller');

var app = express();

//set up template engine.
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
catalogController(app);


app.listen(4000);
console.log('you are listening to port 4000');