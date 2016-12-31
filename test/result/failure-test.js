"use strict";
const failure_1 = require("../../lib/result/failure");
const identity_1 = require("../../lib/functions/identity");
const chai_1 = require("chai");
describe('Failure', () => {
    it('should return the result of the first function', () => {
        chai_1.assert.equal(failure_1.failure("failure").fold(e => 'expected', x => x + 1), 'expected');
    });
    it('should not map', () => {
        chai_1.assert.equal(failure_1.failure("failure").map(x => x + 1).fold(identity_1.default, identity_1.default), 'failure');
    });
});
//# sourceMappingURL=failure-test.js.map