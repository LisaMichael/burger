// create an ojbect with all sorts of methods with all the differnt
// things  we can use with our data

var connection = require('./connection.js');


var orm = {

    // orm all method : collects all the data from the database 
    // cb = callback 

    all: function (tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },

    //orm create allows to creat new data 

    // orm update  allows us to update the data 
    update: function (tableInput, condition, cb) {
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm; 