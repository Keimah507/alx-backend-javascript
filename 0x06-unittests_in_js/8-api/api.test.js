const request  = require('request');
const chai = require('chai');
const app = require('./api.js')

describe('Index page', () => {
    it('Should return the correct status code', (done) => {
        const call = {
            url: 'http://localhost:7865',
            method: 'GET',
        };
        request(call, (error, response, body) => {
            chai.expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
