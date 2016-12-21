"use strict";
/// <reference path="../typings/globals/mocha/index.d.ts" />
var Error_1 = require("../lib/Error");
var Identity_1 = require("../lib/Identity");
var chai_1 = require('chai');
describe('Error', function () {
    it('should return the result of the first function', function () {
        chai_1.assert.equal(Error_1.error("error").fold(function (e) { return 'expected'; }, function (x) { return x + 1; }), 'expected');
    });
    it('should not map', function () {
        chai_1.assert.equal(Error_1.error("error").map(function (x) { return x + 1; }).fold(Identity_1["default"], Identity_1["default"]), "error");
    });
});
