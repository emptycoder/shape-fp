import { failure } from "../../lib/result/failure";
import identity from "../../lib/functions/identity";
import { assert } from 'chai';
describe('Failure', function () {
    it('should return the result of the first function', function () {
        assert.equal(failure("failure").fold(function (e) { return 'expected'; }, function (x) { return x + 1; }), 'expected');
    });
    it('should not map', function () {
        assert.equal(failure("failure").map(function (x) { return x + 1; }).fold(identity, identity), 'failure');
    });
});
