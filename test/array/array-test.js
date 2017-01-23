"use strict";
var chai_1 = require("chai");
var array_1 = require("../../lib/array/array");
var array_2 = require("../../lib/array/array");
var array_3 = require("../../lib/array/array");
var array = [1, 2, 3];
describe('nth', function () {
    it('should return the n-th item of an array', function () {
        chai_1.assert.equal(array_1.nth(array, 0), 1);
        chai_1.assert.equal(array_1.nth(array, 1), 2);
        chai_1.assert.equal(array_1.nth(array, 2), 3);
    });
});
describe('head', function () {
    it('should return the first item of an array', function () {
        chai_1.assert.equal(array_2.head(array), 1);
    });
});
describe('tail', function () {
    it('should return all items except for the head', function () {
        chai_1.assert.deepEqual(array_3.tail(array), [2, 3]);
    });
});
//# sourceMappingURL=array-test.js.map