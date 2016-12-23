"use strict";
/// <reference path="../typings/globals/mocha/index.d.ts" />
var chai_1 = require('chai');
var Box_1 = require("../lib/Box");
describe('Box', function () {
    it('should be able to cause a side-effect and then return itself', function () {
        var value = 1;
        chai_1.assert.equal(Box_1.box(1).tee(function (x) { return value += x; }).get(), 1);
        chai_1.assert.equal(value, 2);
    });
});
