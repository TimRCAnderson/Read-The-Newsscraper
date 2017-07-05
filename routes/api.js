var express = require('express');
var request = require("request");
var cheerio = require("cheerio");
var router = express.Router();
var Article = require("../models/article")

/* GET users listing. */
router.get('/scrape', function(req, res, next) {
  request("http://www.bbc.com/news", function(error, response, html) {
    var $ = cheerio.load(html);

    $("a.gs-c-promo-heading").each(function(i, element) {
      var newsItem = new Article(
        {
        link: ($(element).attr("href")),
        title: ($(element).find("h3").text())
        }
      );
      newsItem.save(function(error, doc)
      {
        // Send any errors to the browser
        if (error)
        {
          console.log(error);
        }
      });
    });
    res.send("scraping complete");
  });
});

module.exports = router;
