"use strict";
var chai_1 = require("chai");
var objects_1 = require("../../lib/objects/objects");
var obj = { id: '1' };
var pairs = [['id', '1']];
describe('entries', function () {
    it('should return an array of key/value tuples', function () {
        chai_1.assert.deepEqual(objects_1.entries(obj), pairs);
    });
});
describe('toObject', function () {
    it('should be the inverse of the entries function', function () {
        chai_1.assert.deepEqual(objects_1.toObject(objects_1.entries(obj)), obj);
        chai_1.assert.deepEqual(objects_1.entries(objects_1.toObject(pairs)), pairs);
    });
});
//# sourceMappingURL=objects.test.js.map