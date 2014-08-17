'use strict';

var http = require('http');

var bodyParser = require('body-parser');
var express = require('express');

var app = express();
app.use(bodyParser.json());

require('./routes')(app);

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port: %d', server.address().port);
});