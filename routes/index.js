var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, data) {
  res.render('index', { title: 'Express' });
});


router.get('/node', function(req, res, next) {
    var title = "Expreess";
    res.render('index', { title: title });
});



module.exports = router;


