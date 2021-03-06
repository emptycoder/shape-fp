"use strict";
var chai_1 = require("chai");
var task_1 = require("../../lib/task/task");
describe('Task', function () {
    it('should be able to work synchronously with a resolved value', function () {
        task_1.resolved(1)
            .map(function (x) { return x + 1; })
            .fork(chai_1.assert.fail, function (result) { return chai_1.assert.equal(result, 2); });
    });
    it('should be able to work synchronously with a rejected value', function () {
        task_1.rejected(1)
            .map(function (x) { return x + 1; })
            .fork(chai_1.assert.ok, chai_1.assert.fail);
    });
});
//# sourceMappingURL=task.test.js.map