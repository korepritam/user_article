var express = require('express');
var exphbs  = require('express-handlebars');
var http = require("http").Server(app);
var io = require("socket.io")(http);

const mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1/nodekb');
let db = mongoose.connection; 

//check connection
db.once('open',function(){
    console.log('connected to mongodb')
});

//check for db errors
db.on('error',function(err){
    console.log(err);
})

//const authRoutes = require('./routes/auth-routes'); 

var app = express();
 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');

//setup routes
//app.use(authRoutes);

app.get('/',function(req,res){
    /*var name='Pritam'
    res.render(__dirname+'/views/main.html',{name:name});*/
    res.render(__dirname+'/views/index.html');
});

/*
app.get('/auth',function(req,res){
    res.render(__dirname+'/views/index.html');
});

app.get('/a', function (req, res) {
    res.render('home');
});*/

let Article = require('./models/article');

app.get('/article',(req,res)=>{
    Article.find({},function(err,articles){
        res.render('article.html',{
            title:'articles',
            articles:articles
        });
    });
});

/*app.post('/article',(req,res){
    let article = new Article();
    article.title=req
});*/

app.get('/video',(req,res)=>{
    res.render(__dirname+'/views/video.html');
});

io.on('connection',function(socket){
 
    socket.on('stream',function(image){
        socket.broadcast.emit('stream',image);  
    });
 
});

app.get('/emit',function(req,res){
    res.render(__dirname+'/views/emit.html');
});

app.get('/visualize',function(req,res){
    res.render(__dirname+'/views/visualize.html');
});

app.listen(4000,()=>{
    console.log('the app is running on port 4000');
});
