"use strict";
const success_1 = require("../../lib/result/success");
const identity_1 = require("../../lib/functions/identity");
const chai_1 = require("chai");
const failure_1 = require("../../lib/result/failure");
describe('Success', () => {
    it('should return the result of the second function', () => {
        chai_1.assert.equal(success_1.success(1).fold(e => 'expected', x => x + 1), 2);
    });
    it('should actually map', () => {
        chai_1.assert.equal(success_1.success(1).map(x => x + 1).fold(identity_1.default, identity_1.default), 2);
    });
    it('should form a chain', () => {
        chai_1.assert.equal(success_1.success(1).chain(x => failure_1.failure('new failure')).get(), 'new failure');
    });
});
//# sourceMappingURL=success-test.js.map