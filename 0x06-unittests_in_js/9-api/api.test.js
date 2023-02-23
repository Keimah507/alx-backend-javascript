const { request } = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
    it('Should return the correct status code', (done) => {
        request(app)
        .get('/')
        .expect(200)
        .end((error, response) => {
            if (error) {
                return done(error);
            }
            done();
        });
    });

    it('should return the correct result', (done) => {
        request(app)
        .expect(200)
        .end((error, response) => {
            if (error) {
                return done(error);
            }
            expect(response.text).to.equal('Welcome to the payment system');
            done();
        });
    });
});