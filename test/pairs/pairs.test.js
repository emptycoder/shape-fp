"use strict";
var chai_1 = require("chai");
var pairs_1 = require("../../lib/pairs/pairs");
describe('groupStringValuePairs', function () {
    it('should map an array of pairs to an object', function () {
        chai_1.assert.deepEqual(pairs_1.groupStringValuePairs([['A', 1], ['B', 2], ['B', 3]]), { A: [1], B: [2, 3,] });
    });
});
describe('groupNumberValuePairs', function () {
    it('should map an array of pairs to a dictionary', function () {
        chai_1.assert.deepEqual(pairs_1.groupNumberValuePairs([[1, 'A'], [2, 'B'], [1, 'C']]), { 1: ['A', 'C'], 2: ['B'] });
    });
});
//# sourceMappingURL=pairs.test.js.map