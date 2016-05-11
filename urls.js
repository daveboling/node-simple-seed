'use strict';

let genericView = require('./utils.js').genericView;

module.exports = function(app) {
  app.get('/', genericView('index'));
  app.get('/demo', genericView('demo'));


  // default if route not found
  app.use(function(req, res) {
    res.redirect('/');
  });
};
