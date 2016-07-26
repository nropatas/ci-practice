'use strict';

const assert = require('chai').assert;
const supertest = require('supertest');

describe('GET /', () => {
    let server;

    before(() => {
        server = require('../app');
    });

    it('should respond with status 200', (done) => {
        supertest(server).get('/')
            .end((err, res) => {
                assert.equal(res.statusCode, 200);
                done();
            });
    });

    after(() => {
        server.close();
    });
});
