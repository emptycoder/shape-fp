"use strict";
const chai_1 = require("chai");
const lazy_1 = require("../../lib/lazy/lazy");
describe('Lazy', () => {
    it('should be able to get the result of the delayed execution', () => {
        chai_1.assert.equal(lazy_1.lazy(() => 'result').get(), 'result');
    });
    it('should delay execution until a fold', () => {
        let value = 'original';
        const lazySideEffect = lazy_1.lazy(() => {
            value = 'changed';
            return null;
        });
        lazySideEffect.map(() => null);
        chai_1.assert.equal(value, 'original');
        lazySideEffect.get();
        chai_1.assert.equal(value, 'changed');
    });
});
//# sourceMappingURL=lazy-test.js.map