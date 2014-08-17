'use strict';

var fs = require('fs');
var mkdirp = require('mkdirp');

var dbManager = function () {};

dbManager.prototype.path = 'db/';
dbManager.prototype.ext = '.json';

dbManager.prototype.save = function(fileName, data, cb) {
    mkdirp(this.path, function(err) {
        if (err) { return cb(err); }

        var outputFile = this.path + fileName + this.ext;
        fs.writeFile(outputFile, JSON.stringify(data, null, 4), cb);
    }.bind(this));
};

dbManager.prototype.fetch = function(fileName, cb) {
    var inputFile = this.path + fileName + this.ext;

    fs.readFile(inputFile, 'utf8', function(err, data) {
        if (err) { return cb(err); }      
        return cb(null, JSON.parse(data));
    }.bind(this));
};

module.exports = new dbManager();