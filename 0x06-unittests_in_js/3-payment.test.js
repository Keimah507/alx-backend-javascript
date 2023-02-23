#!/usr/bin/node
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');

describe ("sendPaymentRequestToApi", function () {
    it("Should test if Utils.calculateNumber is called", function() {
        const spy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnceWith('SUM', 100, 20)).to.be.true;
    });
});