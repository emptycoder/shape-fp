"use strict";
const chai_1 = require("chai");
const task_1 = require("../../lib/task/task");
describe('Task', () => {
    it('should be able to work synchronously with a resolved value', () => {
        task_1.resolved(1)
            .map(x => x + 1)
            .fork(chai_1.assert.fail, result => chai_1.assert.equal(result, 2));
    });
    it('should be able to work synchronously with a rejected value', () => {
        task_1.rejected(1)
            .map(x => x + 1)
            .fork(chai_1.assert.ok, chai_1.assert.fail);
    });
});
//# sourceMappingURL=task-test.js.map