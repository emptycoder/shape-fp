"use strict";
var chai_1 = require("chai");
var array_1 = require("../../lib/array/array");
var array = [1, 2, 3];
describe('nth', function () {
    it('should return the n-th item of an array', function () {
        chai_1.assert.equal(array_1.nth(array, 0), 1);
        chai_1.assert.equal(array_1.nth(array, 1), 2);
        chai_1.assert.equal(array_1.nth(array, 2), 3);
    });
});
//# sourceMappingURL=array.test.js.map