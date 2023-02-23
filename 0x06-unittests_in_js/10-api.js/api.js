#!/usr/bin/node
const { express, response, request } = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
    response.send(`payment methods for cart ${request.params.id}`);
});

app.get('/available_payments', (request, response) => {
    const payment_methods = {
        payment_methods: {
            credit_cards: true,
            paypal: false,
        },
    };
    response.json(payment_methods);
});

app.use(express.json());

app.post('/login', (request, response) => {
    const { userName} = request.body;
    response.send(`Welcome ${userName}`);
});

app.listen(7865, () => {
    console.log('API available on localhost port 7865');
});
module.exports = app;