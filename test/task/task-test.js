import { assert } from 'chai';
import { resolved, rejected } from "../../lib/task/task";
describe('Task', function () {
    it('should be able to work synchronously with a resolved value', function () {
        resolved(1)
            .map(function (x) { return x + 1; })
            .fork(assert.fail, function (result) { return assert.equal(result, 2); });
    });
    it('should be able to work synchronously with a rejected value', function () {
        rejected(1)
            .map(function (x) { return x + 1; })
            .fork(assert.ok, assert.fail);
    });
});
