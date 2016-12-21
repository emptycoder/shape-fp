/// <reference path="../typings/globals/mocha/index.d.ts" />
"use strict";
var chai_1 = require('chai');
var Identity_1 = require('../lib/Identity');
var Task_1 = require('../lib/Task');
var Success_1 = require('../lib/Success');
describe('Task', function () {
    it('should delay execution until a fold', function () {
        var sideEffect = 1;
        var taskWithSideEffect = Task_1.task(function () {
            sideEffect += 1;
            return Success_1.success('A');
        });
        chai_1.assert.equal(sideEffect, 1);
        var mappedTask = taskWithSideEffect
            .map(function (x) { return 'B'; });
        chai_1.assert.equal(sideEffect, 1);
        var result = mappedTask
            .fold(Identity_1["default"], Identity_1["default"]);
        chai_1.assert.equal(sideEffect, 2);
        chai_1.assert.equal(result, 'B');
    });
});
