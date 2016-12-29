"use strict";
var chai_1 = require("chai");
var helper_1 = require("../../lib/optional/helper");
describe('Optional', function () {
    it('should be able to get an alternative', function () {
        chai_1.assert.equal(helper_1.default(null).orElse(1).get(), 1);
    });
});
//# sourceMappingURL=optional-test.js.map