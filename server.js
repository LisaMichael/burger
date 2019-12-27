var express = require('express');
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override'); 

var app = express(); 
app.use(express.static(__dirname + '/public'));

app.use(bodyParser);