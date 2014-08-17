'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);

require('../../src/server');

describe('Name routes', function() {
    var name = "MC_Hammer";
    var json = { "time" : "hammer" }

    it('creates a file', function(done) {
        chai.request('http://localhost:3000')
            .post('/api/v_0_0_1/files/' + name)
            .req(function(req) {
                req.send(json);
            })
            .res(function(res) {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('gets a single files contents', function(done) {
        chai.request('http://localhost:3000')
            .get('/api/v_0_0_1/files/' + name)
            .res(function(res) {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('time');
                expect(res.body.time).to.eql('hammer');
                done();
            });
    });
});