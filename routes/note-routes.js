var mongoose = require('mongoose');

var db = require('../models');

module.exports = function(app) {
  app.post('/articles/:id', function(req, res) {
    db.Note.create(req.body)
      .then( newNote => {
        return db.Article.update(
          {
            _id: req.params.id
          },
          {
            $push: { "notes": newNote._id }
          }
        )
      })
      .then( Article => res.json(Article))
      .catch( err => res.json(err))
  })

  app.delete("/api/notes/:id", function(req, res) {
    db.Note.deleteOne({ _id: req.params.id }, function(err, response) {
      if (err)
        console.log(err)
      res.json(true)
    })
  });
}