var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Challenge form MDN tutorial. */
router.get('/cool', function(req, res, next) {
  res.send("You're so cool");
});

module.exports = router;
