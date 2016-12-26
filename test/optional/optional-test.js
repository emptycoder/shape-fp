"use strict";
var chai_1 = require("chai");
var some_1 = require("../../lib/optional/some");
var none_1 = require("../../lib/optional/none");
describe('Optional', function () {
    it('should be able to run a side-effect on the value if there is one', function () {
        var actual = null;
        some_1.some(1)
            .run(function (x) { return actual = x; }, function () { });
        chai_1.assert.equal(actual, 1);
    });
    it('should be able to run a side-effect if there is no value', function () {
        var actual = null;
        none_1.none()
            .run(function (x) { }, function () { return actual = 2; });
        chai_1.assert.equal(actual, 2);
    });
});
