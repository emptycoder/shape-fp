"use strict";
var chai_1 = require("chai");
var some_1 = require("../../lib/optional/some");
describe('Some', function () {
    var x = 1;
    var defaultValue = 0;
    it('should be mappable', function () {
        chai_1.assert.equal(some_1.some(x).map(function (x) { return x + 1; }).get(), x + 1);
    });
    it('should be foldable', function () {
        chai_1.assert.equal(some_1.some(x).fold(function () { return undefined; }, function (x) { return x + 1; }), x + 1);
    });
    it('should return the value it holds', function () {
        chai_1.assert.equal(some_1.some(x).get(), x);
        chai_1.assert.equal(some_1.some(x).getOrDefault(defaultValue), x);
    });
    it('should always be defined', function () {
        chai_1.assert.isTrue(some_1.some(x).isDefined());
    });
    it('should never be empty', function () {
        chai_1.assert.isFalse(some_1.some(x).isEmpty());
    });
});
//# sourceMappingURL=some.test.js.map