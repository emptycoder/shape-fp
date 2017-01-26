"use strict";
var chai_1 = require("chai");
var helper_1 = require("../../lib/optional/helper");
describe('Optional', function () {
    it('should be able to get an alternative', function () {
        chai_1.assert.equal(helper_1.default(null).orElse(1).get(), 1);
    });
    it('should be empty when null', function () {
        var option = helper_1.default(null);
        chai_1.assert.isTrue(option.isEmpty());
        chai_1.assert.isFalse(option.isDefined());
    });
    it('should be empty when undefined', function () {
        var option = helper_1.default(undefined);
        chai_1.assert.isTrue(option.isEmpty());
        chai_1.assert.isFalse(option.isDefined());
    });
});
//# sourceMappingURL=optional.test.js.map