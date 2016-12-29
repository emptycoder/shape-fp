"use strict";
var success_1 = require("../../lib/result/success");
var identity_1 = require("../../lib/functions/identity");
var chai_1 = require("chai");
describe('Success', function () {
    it('should return the result of the second function', function () {
        chai_1.assert.equal(success_1.success(1).fold(function (e) { return 'expected'; }, function (x) { return x + 1; }), 2);
    });
    it('should actually map', function () {
        chai_1.assert.equal(success_1.success(1).map(function (x) { return x + 1; }).fold(identity_1.default, identity_1.default), 2);
    });
});
//# sourceMappingURL=success-test.js.map