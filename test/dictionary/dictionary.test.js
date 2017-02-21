"use strict";
var chai_1 = require("chai");
var dictionary_1 = require("../../lib/dictionary/dictionary");
describe('Dictionary', function () {
    var data = dictionary_1.dictionary({ 'a': 1, 'b': 2 });
    it('should be able to return its keys as an array', function () {
        chai_1.assert.deepEqual(data.keys(), ['a', 'b']);
    });
    it('should be able to return its values as an array', function () {
        chai_1.assert.deepEqual(data.values(), [1, 2]);
    });
    it('should be able to return the entries it contains', function () {
        chai_1.assert.deepEqual(data.entries(), [['a', 1], ['b', 2]]);
    });
    it('should be able to map over its values', function () {
        chai_1.assert.deepEqual(data.map(function (k, v) { return v + 1; }).get(), { 'a': 2, 'b': 3 });
    });
    it('should be chainable', function () {
        chai_1.assert.deepEqual(data.chain(function (k, v) { return dictionary_1.dictionary({ key1: v, key2: v }); }).get(), { key1: 2, key2: 2 });
    });
    it('should be foldable', function () {
        chai_1.assert.deepEqual(data.fold(function (k, v) { return v + 1; }), { 'a': 2, 'b': 3 });
    });
});
//# sourceMappingURL=dictionary.test.js.map