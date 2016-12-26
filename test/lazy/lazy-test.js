import { assert } from 'chai';
import { lazy } from "../../lib/lazy/lazy";
describe('Lazy', function () {
    it('should be able to get the result of the delayed execution', function () {
        assert.equal(lazy(function () { return 'result'; }).get(), 'result');
    });
    it('should delay execution until a fold', function () {
        var value = 'original';
        var lazySideEffect = lazy(function () {
            value = 'changed';
            return null;
        });
        lazySideEffect.map(function () { return null; });
        assert.equal(value, 'original');
        lazySideEffect.get();
        assert.equal(value, 'changed');
    });
});
