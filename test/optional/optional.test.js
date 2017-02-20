"use strict";
var chai_1 = require("chai");
var optional_1 = require("../../lib/optional/optional");
describe('optional', function () {
    it('should map null to None', function () {
        var option = optional_1.optional(null);
        chai_1.assert.isTrue(option.isEmpty());
        chai_1.assert.isFalse(option.isDefined());
    });
    it('should map undefined to None', function () {
        var option = optional_1.optional(undefined);
        chai_1.assert.isTrue(option.isEmpty());
        chai_1.assert.isFalse(option.isDefined());
    });
    it('should map everything else to Some', function () {
        ['A', 1].forEach(function (x) {
            var option = optional_1.optional(1);
            chai_1.assert.isTrue(option.isDefined());
            chai_1.assert.isFalse(option.isEmpty());
        });
    });
});
//# sourceMappingURL=optional.test.js.map