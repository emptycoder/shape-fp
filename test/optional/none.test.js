"use strict";
var chai_1 = require("chai");
var none_1 = require("../../lib/optional/none");
describe('None', function () {
    var instance = none_1.none();
    it('should ignore maps', function () {
        chai_1.assert.isNull(instance.map(function (x) { return x + 1; }).get());
    });
    it('should be foldable', function () {
        chai_1.assert.equal(instance.fold(function () { return 0; }, function (x) { return x + 1; }), 0);
    });
    it('should be able to return null or a default value', function () {
        chai_1.assert.isNotTrue(instance.get());
        chai_1.assert.equal(instance.getOrDefault(0), 0);
    });
    it('should never be defined', function () {
        chai_1.assert.isFalse(instance.isDefined());
    });
    it('should never be empty', function () {
        chai_1.assert.isTrue(instance.isEmpty());
    });
});
//# sourceMappingURL=none.test.js.map