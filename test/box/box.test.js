"use strict";
var chai_1 = require("chai");
var box_1 = require("../../lib/box/box");
describe('Box', function () {
    it('should be able to fold', function () {
        chai_1.assert.equal(box_1.box(1).fold(function (x) { return x + 1; }), 2);
    });
    it('should mappable to a list', function () {
        chai_1.assert.deepEqual(box_1.box(1).list(function (x) { return [x, x]; }).get(), [1, 1]);
    });
});
//# sourceMappingURL=box.test.js.map