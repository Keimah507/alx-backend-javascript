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

describe('API', () => {
    describe('GET /', () => {
        it('returns the welcome message', async () => {
            const response = await request(app).get('/');
            expect(response.status).toBe(200);
            expect(response.text).toBe('Welcome to the payment system');
        });
    });

    describe('GET /cart/:id', () => {
        it('returns the payment methods for cart :id', async () => {
            const response = await request(app).get('/cart/123');
            expect(response.status).toBe(200);
            expect(response.text).toBe('Payment methods for cart 123');
        });

        it('returns a 404 status cod when :id is not a number', async () => {
            const response = await request(app).get('/cart/abc');
            expect(response.status).toBe(404);
        });
    });
});