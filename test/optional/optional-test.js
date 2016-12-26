import { assert } from 'chai';
import { some } from "../../lib/optional/some";
import { none } from "../../lib/optional/none";
describe('Optional', function () {
    it('should be able to run a side-effect on the value if there is one', function () {
        var actual = null;
        some(1)
            .run(function (x) { return actual = x; }, function () { });
        assert.equal(actual, 1);
    });
    it('should be able to run a side-effect if there is no value', function () {
        var actual = null;
        none()
            .run(function (x) { }, function () { return actual = 2; });
        assert.equal(actual, 2);
    });
});
