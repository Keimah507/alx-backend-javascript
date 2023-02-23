#!/usr/bin/node
const calculateNumber = require("./1-calcul");
const assert = require("assert");

describe("calculateNumber type == SUM", function(){
    it("checks various operations on rounded numbers", function() {
        assert.equal(calculateNumber('SUM', 1.7, 2.5), 4);
        assert.equal(calculateNumber('SUM', 3.2, 3), 0);
        assert.equal(calculateNumber('SUM', 2.2, 3), 1);
    });
});