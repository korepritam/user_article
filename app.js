var express = require('express');
var exphbs  = require('express-handlebars');
const mongoose =require('mongoose');

const authRoutes = require('./routes/auth-routes'); 

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection; 

var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//setup routes
app.use(authRoutes);

app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(4000,()=>{
    console.log('the app is running on port 4000');
});
