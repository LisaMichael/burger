//callback is contained here
//requires our orm 
//cotnains all the methods that will be used in order to modify the orms for use with the ///   burgers database 

var orm = require('../config/orm.js');

var burger = {
    all: function (cb){
        orm.all('burgers', function (res) {
            cb(res);
        })
    },

    update: function (id, cb) {
        orm.update('burgers', id,cb);
    },
    create: function(name,cb){
        orm.create('burgers',name,cb);
    }
}

module.exports = burger; 