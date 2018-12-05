var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');


var ejs = require('ejs');

var app = express();


var server = http.createServer(app);
var root = path.normalize(__dirname + '/');
app.set('views', path.join(root, 'views'));
app.set('view engine', 'ejs');
require('./settings/routes').configure(app);
require('./settings/database').configure(mongoose);
require('./settings/routes').configure(app);


var port = 3000;
console.log(port);
server.listen(port, function () {
    console.log('express running at: ' + port);
});

exports.module = exports = app; 
