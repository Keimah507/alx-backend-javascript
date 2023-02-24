const calculateNumber = require("./0-calcul.js")
const assert = require("assert")

describe("calculateNumber", function() {
    it("checks if numbers are rounded", function(){
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6)
    });

    it("Tests summation of negative numbers", function() {
        assert.strictEqual(calculateNumber(-1, 1), 0);
        assert.strictEqual(calculateNumber(1, -1), 0);
        assert.strictEqual(calculateNumber(-1, -1), -2);
    });

    it("Checks arguments", function() {
        assert.strictEqual(isNaN(calculateNumber(1)), true);
        assert.strictEqual(isNaN(calculateNumber()), true);
    });
});
