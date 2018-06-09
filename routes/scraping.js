var axios = require('axios');
var cheerio = require('cheerio');
var moment = require('moment');
var mongoose = require('mongoose');

var db = require('../models');

// Scrape route

module.exports = function(app) {
	app.get('/scrape', function(req, res) {
		// empty Articles that aren't saved
		db.Article.remove({ saved: false });

		// get current date
		let currentDate = (moment().format().slice(0,10));

		axios.get('https://www.statesman.com/')
		.then( function(response) {
			let $ = cheerio.load(response.data);

			$('.tile-headline').each(function(i, element) {
				let result = {};

				result.title = $(this).children("a").text();
				result.link = $(this).children("a").attr("href");
				
				db.Article.create(result)
					.then( dbArticle => {
						console.log(dbArticle);
					})
					.catch(dbArticle => {
						console.log(dbArticle);
					});
			})
			res.redirect("/articles/all")
		})
	})
}
