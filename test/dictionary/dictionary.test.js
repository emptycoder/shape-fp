"use strict";
var chai_1 = require("chai");
var dictionary_1 = require("../../lib/dictionary/dictionary");
describe('Dictionary', function () {
    it('should be able to return its keys as an array', function () {
        chai_1.assert.deepEqual(dictionary_1.dictionary({ 'a': 1 }).keys(), ['a']);
    });
    it('should be able to return its values as an array', function () {
        chai_1.assert.deepEqual(dictionary_1.dictionary({ 'a': 1 }).values(), [1]);
    });
    it('should be able to return the entries it contains', function () {
        chai_1.assert.deepEqual(dictionary_1.dictionary({ 'a': 1 }).entries(), [['a', 1]]);
    });
    it('should be able to map over its values', function () {
        chai_1.assert.deepEqual(dictionary_1.dictionary({ 'a': 1 }).map(function (k, v) { return v + 1; }).get(), { 'a': 2 });
    });
    it('should be foldable', function () {
        chai_1.assert.deepEqual(dictionary_1.dictionary({ 'a': 1 }).fold(function (k, v) { return v + 1; }), { 'a': 2 });
    });
});
//# sourceMappingURL=dictionary.test.js.map