const { request } = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Test the root path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/');
    });

    test('It should return the message "Welcome to the payment system"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the cart path', () => {
    test('It should respond to the GET method with a number parameter', async () => {
        const response = await request(app).get('/cart/123');
        expect(response.statusCode).toBe(200);
    });

    test('It should return the correct message for the cart ID', async () => {
        const response = await request(app).get('/cart/123');
        expect(response.text).toBe('Payment methods for cart 123');
    });

    test('It should respond with a 404 error for a non-number parameter', async () => {
        const response = await request(app).get('/cart/abc');
        expect(response.statusCode).toBe(404);
    });
});

describe('Test the available_payments path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/available_payments');
        const expectedPaymentMethods = {
            payment_methods: {
                credit_cards: true,
                paypal: false
            }
        };
        expect(response.body).toEqual(expectedPaymentMethods);
    });
});

describe('Test the login path', () => {
    test('It should respond to the POST method', async () => {
        const response = await request(app).post('/login').send({ userName: 'John' });
        expect(response.statusCode).toBe(200);
    });

    test('It should return the correct welcome message', async () => {
        const response = await request(app).post('/login').send({ userName: 'John' });
        expect(response.text).toBe('Welcome John');
    });
});
