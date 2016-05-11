/* eslint no-console: ["error", { allow: ["log"] }] */
'use strict';

let port = process.env.PORT;
let express = require('express');
let app = express();

// livereload config
let livereload = require('livereload');
let server = livereload.createServer({exts: ['html', 'css', 'js', 'pug', 'scss']});
server.watch(__dirname);

require('./middleware.js')(app, express);
require('./urls.js')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.listen(port, function() {
  console.log('Server started on:', port);
});

