
// hold all the mysql connection data 

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'joe4hire',
    database: 'burgers_db'
})

connection.connect(function(err){
    if(err)throw err; 
    console.log("connected as id: " + connection.threadId);
}); 

module.exports = connection;