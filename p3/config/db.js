// var mongo = require('mongodb');
//
// mongo.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })
var mongoose = require('mongoose');
mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true });




var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    mail: String,
    role: String
});


var Person = mongoose.model('Person', personSchema);
module.exports = Person;




mongoose.connection.on('error', function(error) {
    console.error('Database connection error:', error);
});

mongoose.connection.once('open', function() {
    console.log('Database connected');
});

