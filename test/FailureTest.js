"use strict";
/// <reference path="../typings/globals/mocha/index.d.ts" />
var Failure_1 = require("../lib/Failure");
var Identity_1 = require("../lib/Identity");
var chai_1 = require('chai');
describe('Failure', function () {
    it('should return the result of the first function', function () {
        chai_1.assert.equal(Failure_1.failure("failure").fold(function (e) { return 'expected'; }, function (x) { return x + 1; }), 'expected');
    });
    it('should not map', function () {
        chai_1.assert.equal(Failure_1.failure("failure").map(function (x) { return x + 1; }).fold(Identity_1["default"], Identity_1["default"]), 'failure');
    });
});
