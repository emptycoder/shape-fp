"use strict";
var failure_1 = require("../../lib/result/failure");
var identity_1 = require("../../lib/functions/identity");
var chai_1 = require("chai");
describe('Failure', function () {
    it('should return the result of the first function', function () {
        chai_1.assert.equal(failure_1.failure("failure").fold(function (e) { return 'expected'; }, function (x) { return x + 1; }), 'expected');
    });
    it('should not map', function () {
        chai_1.assert.equal(failure_1.failure("failure").map(function (x) { return x + 1; }).fold(identity_1.default, identity_1.default), 'failure');
    });
});
//# sourceMappingURL=failure.test.js.map