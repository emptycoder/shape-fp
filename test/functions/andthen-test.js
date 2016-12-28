import { assert } from 'chai';
import forward from "../../lib/functions/forward";
describe('forward', function () {
    it('should apply the first function and then the second function', function () {
        var increment = function (x) { return x + 1; };
        var square = function (x) { return x * x; };
        assert.equal(forward(increment, square)(2), 9);
        assert.equal(forward(square, increment)(2), 5);
    });
});
