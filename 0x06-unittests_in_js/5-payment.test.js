#!/usr/bin/node
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const Utils = require('./Utils');
const { expect } = require('chai');

describe ("sendPaymentRequestToApi", function () {
    beforeEach(() => {
        stub = sinon.stub(Utils, 'calculateNumber');
        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        stub.restore();
        spy.restore();
    })
    it("Should call sendPaymentRequestToApi with 100 and 20", function() {
        stub.withArgs('SUM', 100, 20).returns(120);
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnceWith('The total is: 120')).to.be.true;
    });

    it("Should call sendPaymentRequestToApi with 10 and 10", function() {
        stub.withArgs('SUM', 10, 10).returns(20);
        sendPaymentRequestToApi(10, 10);
        expect(spy.calledOnceWith('The total is: 20')).to.be.true;
    })
})