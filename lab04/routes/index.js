var express = require('express');
var router = express.Router();

/* Home Page */
router.get('/', function(req, res) {
  res.render('index');
});

/* Actor 1 Page */
router.get('/actor1', function(req, res) {
  res.render('actor1');
});

/* Actor 2 Page */
router.get('/actor2', function(req, res) {
  res.render('actor2');
});

/* Actor 3 Page */
router.get('/actor3', function(req, res) {
  res.render('actor3');
});

/* Actor 4 Page */
router.get('/actor4', function(req, res) {
  res.render('actor4');
});

module.exports = router;
