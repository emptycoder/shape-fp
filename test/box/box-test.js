"use strict";
const chai_1 = require("chai");
const box_1 = require("../../lib/box/box");
describe('Box', () => {
    it('should be able to fold', () => {
        chai_1.assert.equal(box_1.box(1).fold(x => x + 1), 2);
    });
});
//# sourceMappingURL=box-test.js.map