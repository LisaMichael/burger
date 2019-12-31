
// references to express and router 
let express = require('express');
let router = express.Router();
let burger = require('../models/burger.js');

//base route

// passing burger data into function 

router.get('/', function (req, res) {
    burger.all(function (burger_data) {
        // console.log("hb object"+JSON.stringify(hbBurger));
        res.render('index',{burger_data});
        // res.render('index');
    })
})

router.put('/burgers/update', function(req,res){
    console.log(req);
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

router.post('/burgers/create', function(req,res){
    burger.create(req.body.burger_name)
})

module.exports = router;