"use strict";
const chai_1 = require("chai");
const helper_1 = require("../../lib/optional/helper");
describe('Optional', () => {
    it('should be able to get an alternative', () => {
        chai_1.assert.equal(helper_1.default(null).orElse(1).get(), 1);
    });
});
//# sourceMappingURL=optional-test.js.map