const assert = require('chai').assert;
const http = require('http');

describe('GET /', function() {
    it('should respond with status 200', function(done) {
        http.get('http://localhost:3000/', function(res) {
            assert.equal(res.statusCode, 200);
            done();
        });
    });
});
