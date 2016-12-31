"use strict";
const chai_1 = require("chai");
const forward_1 = require("../../lib/functions/forward");
describe('forward', () => {
    it('should apply the first function and then the second function', () => {
        const increment = x => x + 1;
        const square = x => x * x;
        chai_1.assert.equal(forward_1.default(increment, square)(2), 9);
        chai_1.assert.equal(forward_1.default(square, increment)(2), 5);
    });
});
//# sourceMappingURL=forward-test.js.map