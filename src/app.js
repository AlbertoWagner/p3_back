const express =  require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongodb')
const  app = express();
const router =express.Router();

// connectar ao banco

var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/workshoptdc")
    .then(conn => global.conn = conn.db("workshoptdc"))
    .catch(err => console.log(err))

module.exports = { findAll}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));

function findAll(callback){
    global.conn.collection("customers").find({}).toArray(callback);
}

const  route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title : "Alberto",
        xmlVersion :"0.0.1"
    });
});

const  create = router.post('/',(req,res,next) =>{
    res.status(201).send(req.body);
});


/* GET home page. */

app.use("/", route);
app.use('/products' , create);

module.exports = app;
