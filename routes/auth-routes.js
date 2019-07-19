const router = require('express').Router();
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


router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/logout',(req,res)=>{
    //handle with passport
    res.send('logging out')
});

router.get('/google',(req,res)=>{
    //handle with passport
    res.send('logging in with google')
});

let Article = require('../models/article');

router.get('/article',(req,res)=>{
    Article.find({},function(err,articles){
        res.render('article',{
            title:'articles',
            articles:articles
        });
    });
});
module.exports = router; 