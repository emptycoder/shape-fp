"use strict";
var chai_1 = require("chai");
var objects_1 = require("../../lib/objects/objects");
var grouping_1 = require("../../lib/objects/grouping");
describe('entries', function () {
    it('should return an array of key/value tuples', function () {
        chai_1.assert.deepEqual(objects_1.entries({ id: '1' }), [['id', '1']]);
    });
});
describe('groupStringValuePairs', function () {
    it('should map an array of pairs to an object', function () {
        var actual = grouping_1.groupStringValuePairs([['A', 1], ['B', 2], ['B', 3]]);
        chai_1.assert.deepEqual(actual, { A: [1], B: [2, 3,] });
    });
});
describe('groupNumberValuePairs', function () {
    it('should map an array of pairs to a dictionary', function () {
        var dictionary = grouping_1.groupNumberValuePairs([[1, 'A'], [2, 'B'], [1, 'C']]);
        chai_1.assert.deepEqual(dictionary, { 1: ['A', 'C'], 2: ['B'] });
    });
});
//# sourceMappingURL=object.test.js.map