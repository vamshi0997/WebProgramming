var express = require('express');
var Controller = require('./controllers/catalogcontroller');

var app = express();

//set up template engine.
app.set('view engine', 'ejs');

//static files
app.use(express.static(__dirname +'/public/assets'));

//fire controllers
Controller(app);


app.listen(4000);
console.log('you are listening to port 4000');