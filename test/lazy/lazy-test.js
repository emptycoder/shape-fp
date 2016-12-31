"use strict";
var chai_1 = require("chai");
var lazy_1 = require("../../lib/lazy/lazy");
describe('Lazy', function () {
    it('should be able to get the result of the delayed execution', function () {
        chai_1.assert.equal(lazy_1.lazy(function () { return 'result'; }).get(), 'result');
    });
    it('should delay execution until a fold', function () {
        var value = 'original';
        var lazySideEffect = lazy_1.lazy(function () {
            value = 'changed';
            return null;
        });
        lazySideEffect.map(function () { return null; });
        chai_1.assert.equal(value, 'original');
        lazySideEffect.get();
        chai_1.assert.equal(value, 'changed');
    });
});
//# sourceMappingURL=lazy-test.js.map