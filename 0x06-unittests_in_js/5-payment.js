#!/usr/bin/node
const Utils = require('./utils')

sendPaymentRequestToApi = function(totalAmount, totalShipping) {
    const res = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${res}`)
}
module.exports = sendPaymentRequestToApi;