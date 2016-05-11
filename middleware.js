'use strict';

let path = require('path');

let sassMiddleware = require('node-sass-middleware');
let morgan = require('morgan');
let serveStatic = require('serve-static');
let autoprefixer = require('autoprefixer');
let postcssMiddleware = require('postcss-middleware');

module.exports = function(app) {
  app.use(morgan('combined'));
  app.use(sassMiddleware({
    src: __dirname + '/static/scss',
    dest: __dirname + '/static/css',
    debug: false,
    prefix: '/css',
    outputStyle: 'compressed'
  }));
  app.use('/css', postcssMiddleware({
    src: function(req) {
      let cssPath = path.join('static/css', req.path);
      return path.join(__dirname, cssPath);
    },
    plugins: [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]
  }));
  app.use('/', serveStatic('static'));
};
