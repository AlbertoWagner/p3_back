var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var swaggerUi =  require('swagger-ui-express');
    swaggerDocument =  require('../swagger.json');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({extend:true}));
app.use('/api-docs' , swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(expressValidator());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;