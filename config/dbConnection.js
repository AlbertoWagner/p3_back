var mysql = require('mysql');
var connMySql = function(){
    return  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'task'
    });
};

module.exports = function () {
    console.log("db ON");
    return connMySql

};
