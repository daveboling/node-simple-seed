/* eslint no-console: ["error", { allow: ["error"] }] */
'use strict';
let fs = require('fs');


exports.genericView = function(view) {
  return function(req, res) {
    let isValidPath = fs.existsSync(`${req.app.get('views')}/${view}.pug`);
    if (!isValidPath) {
      res.status('404').render('404');
      return false;
    }

    res.render(view);
  };
};
