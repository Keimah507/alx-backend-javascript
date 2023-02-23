#!/usr/bin/node
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai')

describe ("sendPaymentRequestToApi", function () {
        beforeEach(() => {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        spy = sinon.spy(console, 'log');
        });

        afterEach(() => {
            stub.restore();
            spy.restore();
        });
        it("Should test if Utils.calculateNumber is called", function() {
        sendPaymentRequestToApi(100, 20);
        expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true; 
    });

    it("Should check if correct message is logged", function() {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnceWith('The total is: 10')).to.be.true;
    });
});