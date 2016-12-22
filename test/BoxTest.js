"use strict";
/// <reference path="../typings/globals/mocha/index.d.ts" />
var chai_1 = require('chai');
var Box_1 = require("../lib/Box");
describe('Box', function () {
    it('should be able to cause a side-effect', function () {
        var value = 1;
        Box_1.box(1).run(function (x) { return value += x; });
        chai_1.assert.equal(value, 2);
    });
});
