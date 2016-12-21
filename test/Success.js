"use strict";
/// <reference path="../typings/globals/mocha/index.d.ts" />
var Success_1 = require("../lib/Success");
var Identity_1 = require("../lib/Identity");
var chai_1 = require('chai');
describe('Success', function () {
    it('should return the result of the second function', function () {
        chai_1.assert.equal(Success_1.success(1).fold(function (e) { return 'expected'; }, function (x) { return x + 1; }), 2);
    });
    it('should actually map', function () {
        chai_1.assert.equal(Success_1.success(1).map(function (x) { return x + 1; }).fold(Identity_1["default"], Identity_1["default"]), 2);
    });
});
