import { success } from "../../lib/result/success";
import identity from "../../lib/functions/identity";
import { assert } from 'chai';
describe('Success', function () {
    it('should return the result of the second function', function () {
        assert.equal(success(1).fold(function (e) { return 'expected'; }, function (x) { return x + 1; }), 2);
    });
    it('should actually map', function () {
        assert.equal(success(1).map(function (x) { return x + 1; }).fold(identity, identity), 2);
    });
});
