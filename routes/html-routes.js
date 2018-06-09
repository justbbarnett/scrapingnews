var mongoose = require('mongoose');
var db = require('../models');

module.exports = function(app) {

  app.get("/", function(req, res) {
    let handleBarsObj = {
      saved: [],
    };
    db.Article.find({ saved: true })
    .then( saved => {
      handleBarsObj.saved = saved;
      res.render('index', handleBarsObj);
    })
    .catch( err => res.json(err))
  });

  app.get('/articles/all', function(req, res) {
    let handleBarsObj = {
      articles: [],
      saved: []
    };
    db.Article.find()
    .then( Articles => {
      handleBarsObj.articles = Articles;
      return Articles;
    })
    .then( Articles => {
      db.Article.find({ saved: true })
        .then( saved => {
          handleBarsObj.saved = saved;
          res.render('articles', handleBarsObj);
        })
    })
    .catch( err => res.json(err))
  })

  // Get Article by ID
  app.get('/articles/:id', function(req, res) {
    let handleBarsObj = {
      article: {},
      saved: []
    }
    db.Article.find({ saved: true })
      .then( saved => {
        handleBarsObj.saved = saved
        return saved;
      })
      .then( saved => {
        db.Article.findById(req.params.id)
        .populate('notes')
        .then(Article => {
          handleBarsObj.article = Article;
          res.render('articleDetail', handleBarsObj)
        })
      })
      .catch(err => res.json(err))
  })

  app.get("/saved/all", function(req, res) {
    let handleBarsObj = {
      articles: [],
    };
    db.Article.find({ saved: true })
    .then( Articles => {
      handleBarsObj.articles = Articles;
      res.render('articles', handleBarsObj);
    })
    .catch( err => res.json(err))
  });
};