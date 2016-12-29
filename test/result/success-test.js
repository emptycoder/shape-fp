"use strict";
var success_1 = require("../../lib/result/success");
var identity_1 = require("../../lib/functions/identity");
var chai_1 = require("chai");
var failure_1 = require("../../lib/result/failure");
describe('Success', function () {
    it('should return the result of the second function', function () {
        chai_1.assert.equal(success_1.success(1).fold(function (e) { return 'expected'; }, function (x) { return x + 1; }), 2);
    });
    it('should actually map', function () {
        chai_1.assert.equal(success_1.success(1).map(function (x) { return x + 1; }).fold(identity_1.default, identity_1.default), 2);
    });
    it('should form a chain', function () {
        chai_1.assert.equal(success_1.success(1).chain(function (x) { return failure_1.failure('new failure'); }).get(), 'new failure');
    });
});
//# sourceMappingURL=success-test.js.map