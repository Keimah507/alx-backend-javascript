#!/usr/bin/node
'use strict';
const calculateNumber = require("./1-calcul");
const assert = require("assert");

describe("calculateNumber", function(){
    it("checks sum operation on rounded numbers", function() {
        assert.equal(calculateNumber('SUM', 1.7, 2.5), 5);
        assert.equal(calculateNumber('SUM', 3.2, 3), 6);
        assert.equal(calculateNumber('SUM', 2.2, 3), 5);
    });

    it("Checks subtract operation on rounded numbers", function() {
        assert.equal(calculateNumber('SUBTRACT', 3, 5), -2);
        assert.equal(calculateNumber('SUBTRACT', 4.5, 3), 2);
        assert.equal(calculateNumber('SUBTRACT', -2.7, -4.6), 2);
    });

    it("Checks Divide operation on rounded numbers", function() {
        assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
        assert.equal(calculateNumber('DIVIDE', 9.5, 4.5), 2);
        assert.equal(calculateNumber('DIVIDE', 8.7, 2.5), 3);
    });
});
