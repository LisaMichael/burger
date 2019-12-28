
// references to express and router 
var express = require('express'); 
var router = express.Router();

//base route
router.get('/', function(req, res){
res.render('index');

})

module.exports = router;