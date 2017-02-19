"use strict";
var chai_1 = require("chai");
var dictionary_1 = require("../../lib/dictionary/dictionary");
describe('entries', function () {
    it('should return an array of key/value tuples', function () {
        chai_1.assert.deepEqual(dictionary_1.entries({ id: '1' }), [['id', '1']]);
    });
});
describe('mapValues', function () {
    it('should map an object from one type to another type by mapping its values', function () {
        chai_1.assert.deepEqual(dictionary_1.mapValues({ member: 1 }, function (key, number) { return number.toString(); }), { member: '1' });
    });
});
describe('fromPairs', function () {
    it('should map an array of pairs to a dictionary', function () {
        var dictionary = dictionary_1.fromPairs([['first', 0], ['second', 1]]);
        chai_1.assert.deepEqual(dictionary, { first: 0, second: 1 });
    });
});
describe('groupPairsByFirst', function () {
    it('should map an array of pairs to a dictionary', function () {
        var dictionary = dictionary_1.groupPairsByFirst([['A', 1], ['B', 2], ['B', 3]]);
        chai_1.assert.deepEqual(dictionary, { A: [1], B: [2, 3,] });
    });
});
//# sourceMappingURL=dictionary.js.map