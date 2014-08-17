'use strict';

var dbManager = require('../lib/db-manager.js');

module.exports = function routes(app) {
    var baseUrl = '/api/v_0_0_1/files';

    app.get(['/', baseUrl], function(req, res) {
        console.log('hi');
        res.send('GET or POST to /api/v_0_0_1/files/:file');
    });

    app.get(baseUrl + '/:some_name', function(req, res) {
        dbManager.fetch(req.params.some_name, function(err, data) {
            if(err) return res.status(500).json(err);
            return res.json(data);
        });
    });

    app.post(baseUrl + '/:some_name', function(req, res) {
        dbManager.save(req.params.some_name, req.body, function(err) {
            if(err) return res.status(500).json(err);
            return res.json(req.body);
        });
    });
};