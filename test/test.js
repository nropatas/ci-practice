const assert = require('chai').assert;
const http = require('http');

describe('GET /', () => {
    it('should respond with status 200', (done) => {
        http.get('http://localhost:3000/', (res) => {
            assert.equal(res.statusCode, 200);
            done();
        });
    });
});
