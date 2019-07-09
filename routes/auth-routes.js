const router = require('express').Router();

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

router.get('/article',(req,res)=>{
    let articles=[
        {
            id:1,
            title:'Title one',
            c:'c'
        },
        {
            id:2,
            title:'Title two',
            c:'c2'
        }
    ];
    res.render('article',{
        title:'articles',
        articles:articles
    });
});
module.exports = router; 