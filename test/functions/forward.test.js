"use strict";
var chai_1 = require("chai");
var forward_1 = require("../../lib/functions/forward");
describe('forward', function () {
    it('should apply the first function and then the second function', function () {
        var increment = function (x) { return x + 1; };
        var square = function (x) { return x * x; };
        chai_1.assert.equal(forward_1.default(increment, square)(2), 9);
        chai_1.assert.equal(forward_1.default(square, increment)(2), 5);
    });
});
//# sourceMappingURL=forward.test.js.map