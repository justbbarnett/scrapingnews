var mongoose = require('mongoose');

var db = require('../models');

// Saving & Unsaving explicitly

module.exports = function(app) {
	app.get('/saving/:id', function(req, res) {
		db.Article.update(
			{
				_id: req.params.id
			}, 
			{
				$set: {
					"saved": true
				}
			}
		).then( result => res.redirect('back'))
		.catch( err => res.json(err))
	})
	app.get('/unsaving/:id', function(req, res) {
		db.Article.update(
			{
				_id: req.params.id
			}, 
			{
				$set: {
					"saved": false
				}
			}
		).then( result => res.redirect('back'))
		.catch( err => res.json(err))
	})
}
