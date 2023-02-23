#!/usr/bin/node
const { expect } = require('chai');
const getTokenFromApi = require('./6-payment_token');

describe('getTokenFromApi', function() {
    it("Should return a resolved promise with the correct data when success is true", (done) => {
        getTokenFromApi(true)
        .then((result) => {
            expect(result).to.deep.equal({ data: 'Successful response from the API'});
            done();
        })
        .catch(done);
    });
});