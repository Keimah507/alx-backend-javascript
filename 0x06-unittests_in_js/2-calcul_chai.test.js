#!/usr/bin/node
const calculateNumber = require("./1-calcul");
const chai = require("chai");
const expect = chai.expect;

describe("calculateNumber type == SUM", function(){
    it("checks various operations on rounded numbers", function() {
        expect(calculateNumber('SUM', 1.7, 2.3)).to.equal(5);
        expect(calculateNumber('SUM', 3.2, 3)).to.equal(7);
        expect(calculateNumber('SUM', -2.2, 1.1)).to.equal(-1);
    });
});