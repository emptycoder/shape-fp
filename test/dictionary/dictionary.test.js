"use strict";
var chai_1 = require("chai");
var dictionary_1 = require("../../lib/dictionary/dictionary");
describe('Dictionary', function () {
    it('should be able to return its keys as an array', function () {
        chai_1.assert.deepEqual(dictionary_1.dictionary([['key', 1]]).keys(), ['key']);
    });
    it('should be able to return its values as an array', function () {
        chai_1.assert.deepEqual(dictionary_1.dictionary([['key', 1]]).values(), [1]);
    });
    it('should be able to return the entries it contains', function () {
        var entries = [['key', 1]];
        chai_1.assert.deepEqual(dictionary_1.dictionary(entries).entries(), entries);
    });
    it('should be able to map over its values', function () {
        chai_1.assert.deepEqual(dictionary_1.dictionary([['key', 1]]).map(function (k, v) { return v + 1; }).entries(), [['key', 2]]);
    });
});
describe('dictionary', function () {
    it('should be overloaded correctly', function () {
        chai_1.assert.deepEqual(dictionary_1.dictionary([['key', 1]]).entries(), dictionary_1.dictionary({ 'key': 1 }).entries());
    });
});
//# sourceMappingURL=dictionary.test.js.map