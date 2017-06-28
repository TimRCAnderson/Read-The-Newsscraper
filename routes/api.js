var express = require('express');
var request = require("request");
var cheerio = require("cheerio")
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
