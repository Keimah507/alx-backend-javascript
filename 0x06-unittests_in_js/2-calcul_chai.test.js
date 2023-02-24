const calculateNumber = require("./1-calcul");
const chai = require("chai");
const expect = chai.expect;

describe("calculateNumber", function(){
    it("checks sum operation on rounded numbers", function() {
        expect(calculateNumber('SUM', 1.7, 2.3)).to.equal(4);
        expect(calculateNumber('SUM', 3.2, 3)).to.equal(6);
        expect(calculateNumber('SUM', -2.2, 1.1)).to.equal(-1);
    });

    it("Checks subtract operation on rounded numbers", function() {
        expect(calculateNumber('SUBTRACT', 6, 3)).to.equal(3);
        expect(calculateNumber('SUBTRACT', 8.9, 3.2)).to.equal(6);
        expect(calculateNumber('SUBTRACT', 10.1, 4.5)).to.equal(5);
    })

    it("Checks divide operation on rounded numbers", function() {
        expect(calculateNumber('DIVIDE', 2.2, 1.1)).to.equal(2);
        expect(calculateNumber('DIVIDE', 15.4, 5.2)).to.equal(3);
        expect(calculateNumber('DIVIDE', 19.7, 4.2)).to.equal(5);
    })
});