#!/usr/bin/node
const calculateNumber = require("./0-calcul")
const assert = require("assert")

describe("calculateNumber", function() {
    it("checks if numbers are rounded", function(){
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6)
    });
});