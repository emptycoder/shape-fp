"use strict";
var chai_1 = require("chai");
var object_1 = require("../../lib/dictionary/object");
describe('entries', function () {
    it('should return an array of key/value tuples', function () {
        chai_1.assert.deepEqual(object_1.entries({ id: '1' }), [['id', '1']]);
    });
});
describe('groupPairsByFirst', function () {
    it('should map an array of pairs to a dictionary', function () {
        var dictionary = object_1.groupPairsByFirst([['A', 1], ['B', 2], ['B', 3]]);
        chai_1.assert.deepEqual(dictionary, { A: [1], B: [2, 3,] });
    });
});
//# sourceMappingURL=object.test.js.map